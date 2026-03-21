export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Residential Roofing", href: "/services/residential-roofing" },
      { label: "Commercial Roofing", href: "/services/commercial-roofing" },
      { label: "Roof Replacement", href: "/services/roof-replacement" },
      { label: "Roof Repair", href: "/services/roof-repair" },
      { label: "Emergency Repair", href: "/services/emergency-repair" },
      { label: "Storm Damage", href: "/services/storm-damage" },
      { label: "Roof Inspection", href: "/services/roof-inspection" },
      { label: "Fortified Roof", href: "/services/fortified-roof" },
      { label: "Maintenance", href: "/services/maintenance" },
    ],
  },
  {
    label: "Areas",
    href: "/areas",
    children: [
      { label: "Wilmington", href: "/areas/wilmington-nc" },
      { label: "Hampstead", href: "/areas/hampstead-nc" },
      { label: "Leland", href: "/areas/leland-nc" },
      { label: "Carolina Beach", href: "/areas/carolina-beach-nc" },
      { label: "Wrightsville Beach", href: "/areas/wrightsville-beach-nc" },
      { label: "Southport", href: "/areas/southport-nc" },
      { label: "Topsail Island", href: "/areas/topsail-island-nc" },
      { label: "Surf City", href: "/areas/surf-city-nc" },
    ],
  },
  { label: "Fortified Roof", href: "/services/fortified-roof" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Financing", href: "/financing" },
];

export const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Financing", href: "/financing" },
    { label: "Blog", href: "/blog" },
  ],
  services: [
    { label: "Residential Roofing", href: "/services/residential-roofing" },
    { label: "Commercial Roofing", href: "/services/commercial-roofing" },
    { label: "Storm Damage", href: "/services/storm-damage" },
    { label: "Emergency Repair", href: "/services/emergency-repair" },
    { label: "Fortified Roof", href: "/services/fortified-roof" },
    { label: "Roof Inspection", href: "/services/roof-inspection" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
