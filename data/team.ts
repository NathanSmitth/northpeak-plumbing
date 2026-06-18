export type TeamMember = {
  name: string;
  role: string;
  years: number;
  bio: string;
  initials: string;
};

export const team: TeamMember[] = [
  {
    name: "Mike Arsenault",
    role: "Owner & Master Plumber",
    years: 15,
    bio: "Mike founded NorthPeak in 2009 after twelve years working for a regional plumbing firm. He holds a Master Plumber license in New Brunswick and personally oversees every job that goes through the company. His name is on the truck — and he takes that seriously.",
    initials: "MA",
  },
  {
    name: "Ryan Boudreau",
    role: "Lead Plumber",
    years: 9,
    bio: "Ryan has been with NorthPeak since 2015 and leads the residential service crew. He specializes in bathroom renovations and whole-home repiping projects, and is the first call on complex jobs. Fredericton homeowners who've worked with Ryan ask for him by name.",
    initials: "RB",
  },
  {
    name: "Jess Landry",
    role: "Heating Technician",
    years: 6,
    bio: "Jess manages all furnace and HVAC work at NorthPeak. Certified in both gas fitting and heat pump installation, she's the person Fredericton homeowners want looking at their heating system when November rolls around.",
    initials: "JL",
  },
  {
    name: "Tom Okafor",
    role: "Service Plumber",
    years: 4,
    bio: "Tom joined the team in 2022 and quickly became one of the most requested service plumbers on the crew. He handles drain calls, water heater swaps, and emergency response with a calm, methodical approach that customers consistently mention in their reviews.",
    initials: "TO",
  },
];
