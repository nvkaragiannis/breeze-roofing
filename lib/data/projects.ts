export interface Project {
  id: number;
  title: string;
  location: string;
  description: string;
  serviceType: string;
  beforeImage?: string;
  afterImage?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Hurricane Damage Restoration",
    location: "Wrightsville Beach, NC",
    description: "Complete roof replacement after Hurricane Florence. Upgraded to Fortified Roof designation with impact-resistant shingles rated for 130+ mph winds.",
    serviceType: "Storm Damage & Fortified Roof",
    beforeImage: undefined,
    afterImage: undefined,
    featured: true,
  },
  {
    id: 2,
    title: "New Construction Installation",
    location: "Hampstead, NC",
    description: "Custom home new construction roofing with architectural shingles and sealed roof deck. Built to IBHS Fortified standards from the ground up.",
    serviceType: "New Construction",
    beforeImage: undefined,
    afterImage: undefined,
    featured: true,
  },
  {
    id: 3,
    title: "Full Roof Replacement",
    location: "Leland, NC",
    description: "Replaced aging 3-tab shingles with architectural shingles rated for coastal conditions. Included new ridge vent system for improved attic ventilation.",
    serviceType: "Roof Replacement",
    beforeImage: undefined,
    afterImage: undefined,
    featured: false,
  },
  {
    id: 4,
    title: "Oceanfront Metal Roof",
    location: "Carolina Beach, NC",
    description: "Standing seam metal roof installation on beachfront property. Maximum durability and wind resistance for direct ocean exposure.",
    serviceType: "Residential Roofing",
    beforeImage: undefined,
    afterImage: undefined,
    featured: true,
  },
  {
    id: 5,
    title: "Historic Home Restoration",
    location: "Southport, NC",
    description: "Careful re-roof of 1920s historic home maintaining original aesthetic while upgrading to modern wind-rated materials and proper ventilation.",
    serviceType: "Roof Replacement",
    beforeImage: undefined,
    afterImage: undefined,
    featured: false,
  },
  {
    id: 6,
    title: "Commercial Flat Roof Repair",
    location: "Wilmington, NC",
    description: "TPO membrane repair on commercial property in Midtown. Addressed ponding water issues and extended roof lifespan by 10+ years.",
    serviceType: "Commercial Roofing",
    beforeImage: undefined,
    afterImage: undefined,
    featured: false,
  },
];
