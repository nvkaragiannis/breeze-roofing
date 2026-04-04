export const company = {
  name: "Breeze Roofing",
  legalName: "Breeze Roofing NC",
  owner: "Brett",
  phone: "9106655277",
  phoneFormatted: "(910) 665-5277",
  phoneTel: "tel:+19106655277",
  email: "Letsgo@breezeroofingnc.com",
  url: "https://breezeroofingnc.com",
  address: {
    street: "1234 Market Street", // TODO: Replace with actual business address from Brett
    city: "Wilmington",
    state: "NC",
    zip: "28401",
    country: "US",
  },
  geo: {
    latitude: 34.22573,
    longitude: -77.94471,
  },
  hours: {
    weekday: "Mon-Fri 8:00 AM - 5:00 PM",
    saturday: "Sat 8:00 AM - 4:00 PM",
    emergency: "24/7 Emergency Service",
  },
  license: "12345", // TODO: Replace with actual NC contractor license number from Brett
  yearFounded: "2020", // TODO: Replace with actual founding year from Brett
  reviewCount: "50",
  reviewRating: "4.9",
  tagline: "Wilmington's Trusted Fortified Roof Contractor",
  certifications: [
    "IBHS Fortified Roof Certified",
    "NC Licensed & Insured",
  ],
} as const;
