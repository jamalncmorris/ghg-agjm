import requests
from bs4 import BeautifulSoup
import pandas as pd
import os

def scrape_police_reps_extended(url):
    headers = {'User-Agent': 'Mozilla/5.0'}
    try:
        response = requests.get(url, headers=headers)
        if response.status_code != 200:
            print(f"Failed to retrieve {url}: {response.status_code}")
            return []
    except Exception as e:
        print(f"Error connecting to {url}: {e}")
        return []

    soup = BeautifulSoup(response.text, 'html.parser')
    base_url = "https://www.policestationreps.com/"
    
    # --- Step 1: Extract Global Location Info ---
    location_tag = soup.find('font', size="+2")
    location_name = location_tag.get_text(strip=True) if location_tag else "N/A"

    address = "N/A"
    address_td = soup.find('td', {'valign': 'top', 'width': '40%'})
    if address_td:
        address = address_td.get_text(separator=", ", strip=True)

    loc_phone_val = "N/A"
    loc_tel_link = ""
    general_label = soup.find(string=lambda t: t and "General:" in t)
    if general_label:
        parent_td = general_label.find_parent('td')
        if parent_td and parent_td.find_next_sibling('td'):
            loc_phone_tag = parent_td.find_next_sibling('td').find('a', href=lambda x: x and x.startswith('tel:'))
            if loc_phone_tag:
                loc_phone_val = loc_phone_tag.get_text(strip=True)
                loc_tel_link = loc_phone_tag['href']

    # --- Step 2: Extract Representative Data ---
    results = []
    rep_tables = soup.find_all('table', id=lambda x: x and x.startswith('HideMe'))

    for table in rep_tables:
        name_tag = table.find('a', class_='example', title="Click for Details of this Representative")
        name = name_tag.get_text(strip=True) if name_tag else "N/A"
        raw_link = base_url + name_tag['href'] if name_tag else ""

        phone_tag = table.find('a', href=lambda x: x and x.startswith('tel:'))
        rep_tel_link = phone_tag['href'] if phone_tag else ""

        role = "N/A"
        rows = table.find_all('tr')
        if len(rows) > 1:
            role_td = rows[1].find('td', align='right')
            if role_td:
                role = role_td.get_text(strip=True)

        # Formatting Hyperlinks for Excel
        display_profile = f'=HYPERLINK("{raw_link}")' if raw_link else "N/A"
        display_rep_phone = f'=HYPERLINK("{rep_tel_link}")' if rep_tel_link else "N/A"
        display_loc_phone = f'=HYPERLINK("{loc_tel_link}")' if loc_tel_link else "N/A"
        display_address = f'=HYPERLINK("https://www.google.com/maps/search/{address}")' if address else "N/A"

        results.append({
            "Name": name,
            "Phone": display_rep_phone,
            "Role": role,
            "Link": display_profile,
            "Location": location_name,
            "Address": display_address,
            "Location Phone": display_loc_phone
        })
    
    print(f"Finished scraping: {location_name}")
    return results

# --- Main Execution ---

urls = [
    "https://www.policestationreps.com/results.php?index=3464&name=Bolton%20Crown%20Court",
    "https://www.policestationreps.com/results.php?index=1170&name=Bolton%20Central%20Police%20Station%20999Scholey%20St888",
    "https://www.policestationreps.com/results.php?index=3491&name=Liverpool%20Crown%20Court",
    "https://www.policestationreps.com/results.php?index=1219&name=Horwich%20999Middlebrook888%20Police%20Station",
]

all_data = []

for target_url in urls:
    data = scrape_police_reps_extended(target_url)
    all_data.extend(data)

if all_data:
    df = pd.DataFrame(all_data)
    
    # --- Deduplication ---
    # Removes rows with identical Phone hyperlink formulas, keeping the first one found.
    initial_len = len(df)
    df = df.drop_duplicates(subset=['Phone'], keep='first')
    removed_count = initial_len - len(df)
    
    if not os.path.exists('data'):
        os.makedirs('data')
        
    output_file = "data/compiled_prospects.xlsx"
    writer = pd.ExcelWriter(output_file, engine='xlsxwriter')
    df.to_excel(writer, index=False, sheet_name='All Representatives')
    
    worksheet = writer.sheets['All Representatives']
    for i, col in enumerate(df.columns):
        worksheet.set_column(i, i, 30)
    
    writer.close()
    print(f"\nSuccess! Removed {removed_count} duplicates.")
    print(f"Saved {len(df)} unique records into {output_file}")
else:
    print("No data was collected.")