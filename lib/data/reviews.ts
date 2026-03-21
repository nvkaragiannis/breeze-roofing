export interface Review {
  name: string;
  text: string;
  rating: number;
  source: "google";
}

export const reviews: Review[] = [
  {
    name: "Gene Atkinson",
    text: "Hired Breeze Roofing based on workmanship I observed as they worked on the house across the street... Their estimate included everything. Crew was very professional. Brett kept me informed throughout the project.",
    rating: 5,
    source: "google",
  },
  {
    name: "Daniel Z",
    text: "He was quick to respond, came to our house, and diagnosed the issue quickly. I called on Saturday afternoon, he came same-day, and repairs were in-place within 24 hours. I could not be more impressed.",
    rating: 5,
    source: "google",
  },
  {
    name: "Lisa Brown, PhD",
    text: "Brett and his team are literal lifesavers. It's so refreshing to work with people who do things right and are helpful while they do it.",
    rating: 5,
    source: "google",
  },
  {
    name: "Blanche Williamson",
    text: "It's a pleasure dealing with Brett. His work is excellent. I trust and thank Brett for being a reasonable and mutual partner. My new guards and gutter clean are both perfect and affordable.",
    rating: 5,
    source: "google",
  },
];
