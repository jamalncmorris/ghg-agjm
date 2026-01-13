const urls = {
    landingPage: '/',
    contactPage: '/contact',
    privacyPage: '/privacy-policy',
    servicePageInsulation: '/service/home-insulation',
    servicePageSolar: '/service/solar-powered-energy',
    servicePageHeating: '/service/home-heating',
    
}

const companyInfo = {
    // Company Info
    companyName: 'S&A Energy Consultants LTD',
    companyNumber: '15572983',
    companyTradingName: 'S&A Energy Group',
    companyAddress: '189 Mauldeth Road, Manchester, England, M19 1BA',
    companyLogo: '/images/brand/sanda.png',
    companyPhone:'01616478108',
    eMailAddress: 'admin@sandaenergy.co.uk',
    icoNumber: 'ZB677359',
    // Email.js Variables
    eMailJsPublicKey: 'vZFCKwUlemcMI-vf-', // https://dashboard.emailjs.com/admin/account 
    eMailJsService: 'service_gmail', // https://dashboard.emailjs.com/admin
    eMailJsTemplate: 'template_survey', // https://dashboard.emailjs.com/admin/templates
    // Social Media Pages
    socialMediaFacebook: 'https://en-gb.facebook.com/',
    socialMediaInstagram: 'https://www.instagram.com/',
    socialMediaTiktok: 'https://www.tiktok.com/',
    socialMediaYoutube: 'https://www.youtube.com/SandDEnergy',
}

const hero = {

    primaryFeaturesName1: 'Eco Home Improvements', 
    primaryFeaturesText1: '', 
    primaryFeaturesName2: 'Government Grants', 
    primaryFeaturesText2: '', 
    primaryFeaturesName3: 'Add Value & Reduce Expenditure', 
    primaryFeaturesText3: '', 

    secondaryFeaturesName1: 'Eco Home Improvements', 
    secondaryFeaturesText1: '', 
    secondaryFeaturesName2: 'Government Grants', 
    secondaryFeaturesText2: '',
    secondaryFeaturesName3: 'Add Value & Reduce Expenditure', 
    secondaryFeaturesText3: '', 
    secondaryFeaturesName4: 'Add Value & Reduce Expenditure', 
    secondaryFeaturesText4: '', 
}

const landingPage = {
    // Meta SEO
    seoTitle: `Energy Saving Home Improvements 🌎 | ${companyInfo.companyTradingName}`,
    seoDescription: `Transform your living space into an eco-friendly haven with ${companyInfo.companyTradingName}'s comprehensive range of energy-saving home improvements. Specializing in sustainable solutions like home insulation, heating pumps, and solar-powered systems in Bolton, we're dedicated to reducing your carbon footprint and enhancing energy efficiency. Our expert team leverages the latest in green building practices and government grants to make eco home improvements accessible for everyone. Embark on your journey towards a more sustainable and energy-efficient home with us.`,
    seoKeywords: "Eco home improvements, Energy Saving, United Kingdom, Reduce CO2, Home Insulation Bolton, Heating Pumps Bolton, Government Grants, Solar Powered Homes, Sustainable Home Solutions, Green Building Practices, Energy Efficiency Upgrades, Eco-Friendly Insulation Solutions, Renewable Energy Systems for Homes, Energy Saving Technologies, Environmentally Friendly Home Renovations, Low Carbon Home Solutions, Energy Conservation Services, Bolton Eco Home Experts",
    // Hero Section
    heroHeadingTitle: '♻️ ECO Home Improvements FREE Government Funding ♻️',
    heroSubTitle: 'Grant Approval',
    heroText: 'Transform your living space into a beacon of sustainability with our eco-friendly home improvement solutions. Discover how you can qualify for government grants to make green upgrades a reality, without the financial burden. Join the movement towards a greener future today.',
    // Cloud Logo Section
    cloudLogo1: '/images/landing/partners/eon.png',
    cloudLogo2: '/images/landing/partners/british_gas.png',
    cloudLogo3: '/images/landing/partners/edf.png',
    cloudLogo4: '/images/landing/partners/scottish_power.png',
    cloudLogo5: '/images/landing/partners/sse.png',
    // Features Section
    featuresHeadingTitle: 'Building the Future',
    featuresSubTitle: 'Our offering',
    featuresText: 'Not only will we add value to your property, we will also reduce your bills! And YES if you qualify for a government backed scheme this is at 0 cost too yourself, Please contact us to find out if you qualify today. Our advisors, builders and engineers are dedicated to planning and executing your eco friendly home improvements.',
    features1Title: 'Home Improvements',
    features1Text: 'Improve the efficiency of your home.',
    features2Title: 'Fully Project Manged',
    features2Text: 'We will guide your home renovations from; funding to completion.',
    features3Title: '£££',
    features3Text: 'Add value to your property and reduce your bills.',
    featuresImage: '/images/landing/03.webp',
    featuresImageAlt: '',
    // Stats Section
    statsHeadingTitle: 'Our Mission So Far',
    statsTextIntro: 'We are on a mission to help you; add value too your home & reduce your bills... All whilst reducing your homes CO2 emissions.',
    statsText: 'Together we can build a brighter future, and their is no money or risk to yourself. If you qualify the council will fund the work we carry out.',
    statistic1: '1,000s',
    statistic1Text: 'Homes improved across the UK',
    statistic2: '1,000,000',
    statistic2Text: 'CO2 particles emitted.',
    statistic3: '£100,000s',
    statistic3Text: 'Of value added and money saved.',
    // FAQ's Section
    faqHeadingTitle: 'Frequently asked questions',
    faq1Question: 'How much does this cost?',
    faq1Answer: 'This is at 0 expense to the home owner, take the survey to see if you qualify, then one of our dedicated advisors will contact you to help you proceed.',
    faq2Question: 'How much can I save?',
    faq2Answer: 'Generally speaking, studies have shown customers can save >£400 per year on bills',
}

const contactPage = {

}

export const mainConstants = {
    companyInfo,
    urls,
    landingPage,
    contactPage,
}

export default mainConstants
