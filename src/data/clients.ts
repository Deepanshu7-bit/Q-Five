export interface Client {
  name: string;
  industry: string;
  logo?: string;
  isTextOnly?: boolean;
}

export const verifiedClients: Client[] = [
  { name: "Sony", industry: "Consumer Electronics", isTextOnly: true },
  { name: "Sagar Ratna", industry: "Hospitality & Dining", logo: "/logos/clients/sagar-ratna.svg" },
  { name: "Sabrina's Living Ink", industry: "Creative Studio", logo: "/logos/clients/sabrinas-living-ink.webp" },
  { name: "Desi Cooks", industry: "Food & FMCG", logo: "/logos/clients/desi-cooks.webp" },
  { name: "Foodie Pitaara", industry: "Food & Beverage", isTextOnly: true },
  { name: "Power Sure", industry: "Renewable Energy", logo: "/logos/clients/power-sure.webp" },
  { name: "Mehar Property Advisor", industry: "Real Estate", isTextOnly: true },
  { name: "Enegius Solutions", industry: "Engineering", logo: "/logos/clients/enegius-solutions.webp" },
  { name: "Prem Properties", industry: "Real Estate", logo: "/logos/clients/prem-properties.webp" },
  { name: "APS Legal Advocates & Solicitors", industry: "Legal Services", logo: "/logos/clients/aps-legal-advocates-solicitors.webp" },
  { name: "SolatNation", industry: "Solar Energy", logo: "/logos/clients/solatnation.webp" },
  { name: "B2B Growth Expo", industry: "Events & B2B (UK)", logo: "/logos/clients/b2b-growth-expo.webp" },
  { name: "Masanzo", industry: "E-Commerce", isTextOnly: true },
  { name: "AKC", industry: "Corporate", isTextOnly: true },
  { name: "Darpan", industry: "Media", isTextOnly: true },
  { name: "Final Flight", industry: "Education & Study Abroad", isTextOnly: true },
  { name: "OPM Utensils", industry: "Manufacturing", isTextOnly: true },
  { name: "Trident Media", industry: "Entertainment", isTextOnly: true },
  { name: "Kohli Hospital", industry: "Healthcare", isTextOnly: true },
];

export const verifiedStats = [
  {
    number: "15+",
    label: "Years Experience",
    sublabel: "Steady craft across industries",
  },
  {
    number: "3",
    label: "Core Disciplines",
    sublabel: "Marketing, Software & Video",
  },
  {
    number: "100%",
    label: "In-House Team",
    sublabel: "Zero outsourcing or fragmented handoffs",
  },
  {
    number: "CHD",
    label: "Studio HQ",
    sublabel: "Plot No. 25, Industrial Area Phase I",
  },
];

export const agencyContactInfo = {
  name: "Qfive Digital & Creative Agency",
  tagline: "One team. Three disciplines.",
  email: "hello@qfive.in",
  address: "Plot No. 25, Industrial Area Phase I, Chandigarh, 160002, India",
  coordinates: "30.7046° N, 76.7985° E",
  calendlyUrl: "https://calendly.com/darpreet-qfive/30min",
  socials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/q-five-a399403a5/" },
    { name: "Instagram", url: "https://www.instagram.com/qfive_creative/" },
    { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61587769658360" },
  ],
};
