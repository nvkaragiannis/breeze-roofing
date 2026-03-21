export interface ServiceArea {
  slug: string;
  city: string;
  state: string;
  zipCodes: string[];
  metaTitle: string;
  metaDescription: string;
  intro: string;
  challenges: string;
  neighborhoods?: string[];
}

export const areas: ServiceArea[] = [
  {
    slug: "wilmington-nc",
    city: "Wilmington",
    state: "NC",
    zipCodes: ["28401", "28403", "28405", "28409", "28411", "28412"],
    metaTitle: "Roofing Contractor Wilmington NC | Roof Replacement & Repair | Breeze Roofing",
    metaDescription: "Breeze Roofing serves Wilmington, NC with residential and commercial roofing, storm damage repair, and IBHS Fortified Roof installation. Free estimates. (910) 665-5277",
    neighborhoods: ["Landfall", "Porters Neck", "Ogden", "Mayfair", "Midtown", "Downtown"],
    intro: "Wilmington is our home base and the heart of our operation. We serve all Wilmington neighborhoods — from Landfall and Porters Neck to Ogden, Mayfair, Midtown, and downtown. Our familiarity with Wilmington's distinct microclimates, HOA requirements, and building codes means fewer surprises and better outcomes for homeowners.",
    challenges: "Wilmington's coastal location means homes face salt air corrosion, high humidity, and direct exposure to Atlantic hurricanes. Different neighborhoods have different challenges — oceanfront properties in Wrightsville-adjacent areas face more wind exposure, while inland areas like Ogden deal more with tree coverage and debris. HOA requirements in communities like Landfall dictate specific material choices.",
  },
  {
    slug: "hampstead-nc",
    city: "Hampstead",
    state: "NC",
    zipCodes: ["28443"],
    metaTitle: "Roofing Contractor Hampstead NC | Roof Replacement & Repair | Breeze Roofing",
    metaDescription: "Breeze Roofing serves Hampstead, NC with residential roofing, storm damage repair, and IBHS Fortified Roof installation. Free estimates. (910) 665-5277",
    intro: "Hampstead is one of Pender County's fastest-growing communities, and with that growth comes a lot of new construction — and a lot of homeowners navigating roofing decisions for the first time. Whether you're in a newly built home or an established neighborhood near Topsail Sound, Breeze Roofing provides residential roofing, storm damage repair, and IBHS Fortified Roof installation across Hampstead and surrounding Pender County.",
    challenges: "New construction warranty work, salt air exposure from Topsail Sound proximity, storm damage from coastal weather systems. Many newer developments use builder-grade roofing materials that may not be optimal for the coastal conditions.",
  },
  {
    slug: "leland-nc",
    city: "Leland",
    state: "NC",
    zipCodes: ["28451"],
    metaTitle: "Roofing Contractor Leland NC | Roof Replacement & Repair | Breeze Roofing",
    metaDescription: "Breeze Roofing serves Leland, NC with residential roofing, storm damage repair, and IBHS Fortified Roof installation. Free estimates. (910) 665-5277",
    intro: "Leland is one of Brunswick County's fastest-growing communities, with new developments expanding rapidly west of the Cape Fear River. Breeze Roofing serves Leland homeowners with full roofing services — from new construction installations in growing subdivisions to storm damage repair on established homes.",
    challenges: "Rapid development means many homes have builder-grade roofing that may not be optimized for coastal weather. Leland's proximity to the coast means homes still face hurricane exposure, even though the area is slightly inland. Proper ventilation and moisture management are critical in Leland's humid climate.",
  },
  {
    slug: "carolina-beach-nc",
    city: "Carolina Beach",
    state: "NC",
    zipCodes: ["28428"],
    metaTitle: "Roofing Contractor Carolina Beach NC | Coastal Roofing | Breeze Roofing",
    metaDescription: "Breeze Roofing serves Carolina Beach, NC with coastal-rated roofing, storm damage repair, and Fortified Roof installation. Free estimates. (910) 665-5277",
    intro: "Beachfront and near-beach properties in Carolina Beach face the harshest roofing conditions in the region: direct ocean exposure, salt air corrosion, and wind loads that standard roofing materials aren't designed to handle. Breeze Roofing specializes in coastal-rated roofing systems built for exactly these conditions. We also work with vacation rental owners who need fast turnaround to minimize lost rental income.",
    challenges: "Direct ocean exposure accelerates material degradation. Salt air corrodes metal components including flashing, drip edges, and fasteners. High wind zones require specialized installation techniques and materials rated for coastal conditions. Vacation properties need minimal downtime for roofing work.",
  },
  {
    slug: "wrightsville-beach-nc",
    city: "Wrightsville Beach",
    state: "NC",
    zipCodes: ["28480"],
    metaTitle: "Roofing Contractor Wrightsville Beach NC | Premium Roofing | Breeze Roofing",
    metaDescription: "Breeze Roofing serves Wrightsville Beach, NC with premium coastal roofing, storm damage repair, and Fortified Roof installation. Free estimates. (910) 665-5277",
    intro: "Wrightsville Beach is home to some of the most valuable residential properties on the NC coast — and protecting that investment starts with the right roof. We install premium roofing systems suited to oceanfront exposure, and we understand the strict HOA and municipal guidelines that Wrightsville Beach properties must meet.",
    challenges: "Luxury oceanfront properties demand premium materials and installation quality. Strict HOA compliance requirements dictate material and color choices. Maximum salt air and wind exposure requires the highest-rated systems. Property values make proper roofing an investment protection priority.",
  },
  {
    slug: "southport-nc",
    city: "Southport",
    state: "NC",
    zipCodes: ["28461"],
    metaTitle: "Roofing Contractor Southport NC | Roof Replacement & Repair | Breeze Roofing",
    metaDescription: "Breeze Roofing serves Southport, NC with residential roofing, storm damage repair, and Fortified Roof installation. Free estimates. (910) 665-5277",
    intro: "Southport's historic waterfront and established neighborhoods feature a mix of older homes and newer construction. Breeze Roofing serves Southport and nearby Oak Island with roofing services tailored to both historic restoration and modern installation. Our experience with older home structures means we understand the unique challenges of re-roofing properties with character.",
    challenges: "Older homes may have non-standard roof structures requiring custom solutions. Waterfront exposure to the Cape Fear River and Intracoastal Waterway. Historic district properties may have specific requirements for material appearance. Oak Island proximity adds barrier island wind exposure.",
  },
  {
    slug: "topsail-island-nc",
    city: "Topsail Island",
    state: "NC",
    zipCodes: ["28445", "28460"],
    metaTitle: "Roofing Contractor Topsail Island NC | Island Roofing | Breeze Roofing",
    metaDescription: "Breeze Roofing serves Topsail Island, NC with island-grade roofing, storm damage repair, and Fortified Roof installation. Free estimates. (910) 665-5277",
    intro: "Topsail Island homes face some of the most extreme roofing conditions in coastal NC. As a barrier island, wind exposure is constant and severe during storms. Breeze Roofing provides island-grade roofing solutions designed to withstand these conditions while meeting the island's specific building requirements.",
    challenges: "Barrier island wind exposure is significantly higher than mainland. Salt air corrosion is accelerated. Building codes for barrier islands require enhanced wind ratings. Access logistics for island construction add complexity. Storm damage frequency is higher than mainland areas.",
  },
  {
    slug: "surf-city-nc",
    city: "Surf City",
    state: "NC",
    zipCodes: ["28445"],
    metaTitle: "Roofing Contractor Surf City NC | Coastal Roofing | Breeze Roofing",
    metaDescription: "Breeze Roofing serves Surf City, NC with coastal roofing, storm damage repair, and Fortified Roof installation. Free estimates. (910) 665-5277",
    intro: "Surf City sits at the junction of Pender and Onslow counties on Topsail Island, with a mix of year-round residences and vacation properties. Breeze Roofing serves Surf City homeowners with coastal-rated roofing installations, storm damage repair, and IBHS Fortified Roof options that can significantly lower insurance premiums on island properties.",
    challenges: "Similar to Topsail Island — barrier island exposure with constant salt air and high wind conditions. Vacation properties need quick turnaround. Insurance costs on island properties make Fortified Roof designation especially valuable. Pender/Onslow county line means awareness of both counties' building code requirements.",
  },
];

export function getAreaBySlug(slug: string): ServiceArea | undefined {
  return areas.find((a) => a.slug === slug);
}
