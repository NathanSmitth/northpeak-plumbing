export type AreaEntry = {
  name: string;
  type: "city" | "community";
  note?: string;
};

export const serviceAreas: AreaEntry[] = [
  { name: "Fredericton", type: "city", note: "Primary service area — all neighbourhoods" },
  { name: "Oromocto", type: "community", note: "Full coverage" },
  { name: "New Maryland", type: "community", note: "Full coverage" },
  { name: "Hanwell", type: "community", note: "Full coverage" },
  { name: "Lincoln", type: "community", note: "Full coverage" },
  { name: "Burton", type: "community" },
  { name: "Nackawic", type: "community" },
  { name: "Jemseg", type: "community" },
  { name: "Keswick Ridge", type: "community" },
  { name: "Maugerville", type: "community" },
  { name: "Sheffield", type: "community" },
  { name: "Fredericton Junction", type: "community" },
];

export const frederictonNeighbourhoods = [
  "North Side",
  "Nashwaaksis",
  "Skyline Acres",
  "Brookside",
  "Devon",
  "Silverwood",
  "Barkers Point",
  "Garden Creek",
  "Fulton Heights",
  "Forest Hill",
  "Prospect",
  "Confederation Court",
];
