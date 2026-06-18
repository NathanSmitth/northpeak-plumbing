export type Review = {
  name: string;
  location: string;
  rating: number;
  text: string;
  service?: string;
  date?: string;
};

export const allReviews: Review[] = [
  {
    name: "Sandra K.",
    location: "Fredericton, NB",
    rating: 5,
    service: "Emergency Service",
    date: "January 2025",
    text: "Mike and his crew showed up within the hour when our basement pipe burst in January. Professional, fast, and cleaned up after themselves. Cannot recommend NorthPeak enough.",
  },
  {
    name: "Derek T.",
    location: "Oromocto, NB",
    rating: 5,
    service: "Water Heater Install",
    date: "March 2025",
    text: "Had them replace our old water heater. Fair price, no upselling, done in half a day. The tech walked me through everything before he left. Great experience.",
  },
  {
    name: "Carol & Jim R.",
    location: "New Maryland, NB",
    rating: 5,
    service: "Bathroom Renovations",
    date: "October 2024",
    text: "We used NorthPeak for our full bathroom reno rough-in. These guys know what they're doing. On time every day, communicative, and the work passed inspection on the first try.",
  },
  {
    name: "Patrick M.",
    location: "Fredericton, NB",
    rating: 5,
    service: "Drain Cleaning",
    date: "February 2025",
    text: "Called about a slow main drain and they had someone out the same afternoon. Ryan found the blockage fast, cleared it, and scoped the line to confirm. No upsell, no drama. Exactly what I needed.",
  },
  {
    name: "Angie F.",
    location: "Hanwell, NB",
    rating: 5,
    service: "Furnace & Heating",
    date: "November 2024",
    text: "Furnace stopped working on a Friday night with temperatures dropping. NorthPeak had Jess at my door by 10 PM. She had the part on her truck, fixed it in under an hour. I cannot thank them enough.",
  },
  {
    name: "Marc L.",
    location: "Fredericton, NB",
    rating: 5,
    service: "Pipe Repair",
    date: "December 2024",
    text: "Found a slow leak inside my wall. Tom located it without tearing half my bathroom apart — made a single small cut, fixed the joint, and patched it up. Professional from start to finish.",
  },
  {
    name: "Lisa & Greg P.",
    location: "Lincoln, NB",
    rating: 5,
    service: "Water Heater Install",
    date: "April 2025",
    text: "Upgraded to a Navien tankless unit — Mike walked us through the whole process and the install was cleaner than I expected. Instant hot water now. Worth every penny.",
  },
  {
    name: "Dave H.",
    location: "Oromocto, NB",
    rating: 5,
    service: "Emergency Service",
    date: "January 2025",
    text: "Frozen pipe at 6 AM on a Monday. Called NorthPeak, had someone there in 45 minutes. They thawed the pipe, wrapped the section properly, and explained what I can do to prevent it next winter. Excellent.",
  },
  {
    name: "Priya N.",
    location: "Fredericton, NB",
    rating: 5,
    service: "Bathroom Renovations",
    date: "August 2024",
    text: "NorthPeak did the plumbing rough-in for our main floor bathroom add-on. They coordinated seamlessly with our GC, showed up exactly when scheduled, and the rough-in passed inspection without a single issue. Would use them again without question.",
  },
];
