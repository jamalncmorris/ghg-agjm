import requests
from bs4 import BeautifulSoup
import pandas as pd

def scrape_police_reps_extended(url):
    headers = {'User-Agent': 'Mozilla/5.0'}
    response = requests.get(url, headers=headers)
    
    if response.status_code != 200:
        print(f"Failed to retrieve page: {response.status_code}")
        return

    soup = BeautifulSoup(response.text, 'html.parser')
    base_url = "https://www.policestationreps.com/"

    # --- Step 1: Extract Global Location Info ---
    # Location Name (e.g., BOLTON CROWN COURT)
    location_tag = soup.find('font', size="+2")
    location_name = location_tag.get_text(strip=True) if location_tag else "N/A"

    # Address
    # Looking for the <td> that contains the address text (identified by valign and width)
    address = "N/A"
    address_td = soup.find('td', {'valign': 'top', 'width': '40%'})
    if address_td:
        # We replace <br> tags with spaces/commas for a clean string
        address = address_td.get_text(separator=", ", strip=True)

    # Location Phone
    # Look for the general phone number link (often found near "General:")
    loc_phone_val = "N/A"
    loc_tel_link = ""
    # Search for "General:" label to find the adjacent link
    general_label = soup.find(string=lambda t: t and "General:" in t)
    if general_label:
        loc_phone_tag = general_label.find_parent('td').find_next_sibling('td').find('a', href=lambda x: x and x.startswith('tel:'))
        if loc_phone_tag:
            loc_phone_val = loc_phone_tag.get_text(strip=True)
            loc_tel_link = loc_phone_tag['href']

    # --- Step 2: Extract Representative Data ---
    data_list = []
    rep_tables = soup.find_all('table', id=lambda x: x and x.startswith('HideMe'))

    for table in rep_tables:
        # Rep Name and Profile Link
        name_tag = table.find('a', class_='example', title="Click for Details of this Representative")
        name = name_tag.get_text(strip=True) if name_tag else "N/A"
        raw_link = base_url + name_tag['href'] if name_tag else ""

        # Rep Phone
        phone_tag = table.find('a', href=lambda x: x and x.startswith('tel:'))
        rep_phone_val = phone_tag.get_text(strip=True) if phone_tag else "N/A"
        rep_tel_link = phone_tag['href'] if phone_tag else ""

        # Rep Role
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

        data_list.append({
            "Name": name,
            "Phone": display_rep_phone,
            "Role": role,
            "Link": display_profile,
            "Location": location_name,
            "Address": address,
            "Location Phone": display_loc_phone
        })

    # --- Step 3: Generate Spreadsheet ---
    df = pd.DataFrame(data_list)
    file_name = f"data/prospects_{location_name.replace(' ', '_')}.xlsx"
    
    writer = pd.ExcelWriter(file_name, engine='xlsxwriter')
    df.to_excel(writer, index=False, sheet_name='Data')
    
    # Auto-adjust column widths
    worksheet = writer.sheets['Data']
    for i, col in enumerate(df.columns):
        worksheet.set_column(i, i, 25)
    
    writer.close()
    print(f"Saved {len(data_list)} records to {file_name}")

# Usage
# scrape_url = "https://www.policestationreps.com/results.php?index=3464&name=Bolton%20Crown%20Court"
scrape_url = "https://www.policestationreps.com/results.php?index=1170&name=Bolton%20Central%20Police%20Station%20999Scholey%20St888"
scrape_police_reps_extended(scrape_url)
