export type GalleryProject = {
  id: number;
  title: string;
  category: string;
  location: string;
  description: string;
  type: "before-after" | "single";
  before?: { src: string; alt: string };
  after?: { src: string; alt: string };
  image?: { src: string; alt: string };
};

export const galleryCategories = [
  "All",
  "Drain Cleaning",
  "Water Heaters",
  "Pipe Repair",
  "Furnaces",
  "Bathrooms",
  "Emergency",
] as const;

export const galleryProjects: GalleryProject[] = [
  {
    id: 1,
    title: "Tankless Water Heater Install",
    category: "Water Heaters",
    location: "Fredericton North Side",
    description:
      "Replaced aging 40-gal tank with a Navien NPE-240A2 tankless. Upgraded gas line and added dedicated venting.",
    type: "before-after",
    before: {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      alt: "Old tank water heater before replacement",
    },
    after: {
      src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
      alt: "New Navien tankless water heater installed",
    },
  },
  {
    id: 2,
    title: "Main Line Drain Clearing",
    category: "Drain Cleaning",
    location: "Skyline Acres",
    description:
      "Camera-scoped main line, located root intrusion 18 ft from cleanout, cleared with high-pressure jetting.",
    type: "before-after",
    before: {
      src: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
      alt: "Blocked main drain line before clearing",
    },
    after: {
      src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
      alt: "Main line cleared and flowing after jetting",
    },
  },
  {
    id: 3,
    title: "Ensuite Bathroom Rough-In",
    category: "Bathrooms",
    location: "New Maryland",
    description:
      "Full plumbing rough-in for new ensuite — shower valve, tub, double vanity, and toilet. Passed inspection first visit.",
    type: "single",
    image: {
      src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
      alt: "Ensuite bathroom rough-in plumbing",
    },
  },
  {
    id: 4,
    title: "Furnace Replacement",
    category: "Furnaces",
    location: "Hanwell",
    description:
      "Replaced 22-year-old furnace with a Lennox EL296V 96% AFUE. Full duct inspection and combustion analysis.",
    type: "single",
    image: {
      src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
      alt: "New Lennox high-efficiency furnace installed",
    },
  },
  {
    id: 5,
    title: "Copper to PEX Repipe",
    category: "Pipe Repair",
    location: "Fredericton Heritage District",
    description:
      "Full home repipe from original 1940s copper with pinhole corrosion to modern PEX-A. 3-day job, minimal drywall.",
    type: "single",
    image: {
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      alt: "New PEX-A pipe installation",
    },
  },
  {
    id: 6,
    title: "Emergency Burst Pipe Repair",
    category: "Emergency",
    location: "Devon",
    description:
      "Midnight call — burst copper elbow in basement. On-site in 38 minutes. Repaired and restored water same visit.",
    type: "single",
    image: {
      src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
      alt: "Burst pipe repaired in basement",
    },
  },
];
