export type ServiceFAQ = { q: string; a: string };

export type ServiceData = {
  slug: string;
  icon: string;
  title: string;
  shortDescription: string;
  highlighted?: boolean;
  heroSubtitle: string;
  fullDescription: string[];
  included: string[];
  priceRange: string;
  priceNote: string;
  faq: ServiceFAQ[];
  metaTitle: string;
  metaDescription: string;
};

export const servicesData: ServiceData[] = [
  {
    slug: "drain-cleaning",
    icon: "drain",
    title: "Drain Cleaning",
    shortDescription:
      "Blocked drains cleared fast with professional-grade equipment. From slow-running sinks to fully clogged main lines.",
    heroSubtitle: "From slow sinks to fully blocked mains — we clear it all fast.",
    fullDescription: [
      "A blocked drain is more than an inconvenience. Left unchecked, it causes water damage, sewage backup, and serious structural problems. NorthPeak's drain technicians carry truck-mounted equipment powerful enough to clear any residential blockage in the greater Fredericton area.",
      "We use a combination of high-pressure water jetting, motorized augers, and camera inspection to locate blockages precisely and remove them completely. We don't push the clog further down the line — we clear it and confirm it's gone before we leave.",
      "If a recurring drain problem suggests a deeper issue — root intrusion, pipe collapse, or aging cast iron — we'll diagnose it honestly and lay out your options. No overselling. Just straight answers.",
    ],
    included: [
      "Full visual inspection and flow test before work begins",
      "High-pressure water jet or motorized auger service",
      "Camera scope to confirm blockage clearance",
      "All drains tested and running before technician leaves",
      "Written report of findings and any recommended follow-up",
    ],
    priceRange: "$149 – $450",
    priceNote:
      "Typical residential drain cleaning. Main line and camera inspection jobs are priced separately. Call for a firm quote.",
    faq: [
      {
        q: "How do I know if I need professional drain cleaning?",
        a: "If multiple fixtures are draining slowly, you're hearing gurgling sounds from drains, or you've had recurring clogs despite DIY efforts, it's time to call. A single slow sink might be a simple fix, but multiple symptoms usually point to a main line issue.",
      },
      {
        q: "Will drain cleaning damage my pipes?",
        a: "Not when done by a licensed plumber. We assess your pipe material before choosing a method. Older cast-iron or clay pipes require a different approach than modern ABS or PVC. We won't use a method that could cause more damage than the clog itself.",
      },
      {
        q: "How long does a drain cleaning take?",
        a: "Most residential drain cleanings take 1–2 hours. Main line work with camera inspection can run 2–3 hours. We'll give you a time estimate before we start.",
      },
      {
        q: "Do you offer same-day drain cleaning?",
        a: "Yes — drain cleaning is one of our most common same-day calls. Contact us before noon on a weekday and we can typically have someone out the same afternoon.",
      },
    ],
    metaTitle: "Drain Cleaning Fredericton | NorthPeak Plumbing & Heating",
    metaDescription:
      "Professional drain cleaning in Fredericton, NB. High-pressure water jetting, camera inspection, same-day service. Call NorthPeak: (506) 555-0192.",
  },
  {
    slug: "water-heater-install",
    icon: "water-heater",
    title: "Water Heater Install",
    shortDescription:
      "Expert installation and replacement of tank and tankless water heaters. Leading brands, same-day service on in-stock units.",
    heroSubtitle: "Tank or tankless — installed right, backed by warranty.",
    fullDescription: [
      "Running out of hot water is frustrating. A failed water heater is worse. NorthPeak installs and replaces all types of residential water heaters — traditional tank units, high-efficiency tankless systems, and heat pump water heaters — fast, clean, and up to code.",
      "We stock the brands homeowners and contractors trust most: Rheem, Bradford White, Navien, and Rinnai. If we have your size in stock, we can often complete the swap the same day you call. We handle the full job: disconnect and haul away the old unit, install the new one, connect gas or electrical, and test fully before we leave.",
      "If you're considering upgrading to a tankless system, we'll walk you through the real-world cost savings, installation requirements, and payback period for your specific home. No pressure — just honest numbers.",
    ],
    included: [
      "Removal and disposal of old water heater",
      "Full installation of new unit to code",
      "Gas line or electrical connection and inspection",
      "Pressure relief valve and expansion tank check",
      "Full operational test and hot water confirmation",
      "Registration of manufacturer warranty",
    ],
    priceRange: "$1,100 – $3,800",
    priceNote:
      "Includes labour and unit. Price varies by tank size (40–80 gal), type (tank vs. tankless), and fuel type. Call for a firm quote.",
    faq: [
      {
        q: "How long does a water heater installation take?",
        a: "A straight swap of a tank water heater typically takes 2–3 hours. Tankless installations require additional venting and gas or electrical upgrades and may run 4–6 hours. We'll give you a timeline before booking.",
      },
      {
        q: "Tank or tankless — which is right for my home?",
        a: "Tankless units offer endless hot water and roughly 20–30% better efficiency, but they have higher upfront costs and may require gas line or electrical upgrades. Tank units are simpler and cheaper to install. We'll assess your home and give you an honest comparison.",
      },
      {
        q: "My water heater is leaking. Do I need to replace it?",
        a: "A leaking tank almost always means replacement — once the tank is compromised, repairs are not a long-term solution. Leaking valves or connections, however, are often repairable. Describe where the leak is coming from and we'll advise.",
      },
      {
        q: "What brands do you install?",
        a: "We stock and install Rheem, Bradford White, Navien, and Rinnai. We'll also install homeowner-supplied units, though we can't warrant those the same way we warrant units we supply.",
      },
    ],
    metaTitle: "Water Heater Installation Fredericton | NorthPeak Plumbing",
    metaDescription:
      "Water heater installation and replacement in Fredericton, NB. Tank and tankless, same-day service on in-stock units. Call (506) 555-0192.",
  },
  {
    slug: "pipe-repair",
    icon: "pipe",
    title: "Pipe Repair & Replacement",
    shortDescription:
      "From pinhole leaks to full repiping jobs, we diagnose and fix pipe problems quickly to protect your home from water damage.",
    heroSubtitle: "Pinhole leak or full repipe — we protect your home from water damage.",
    fullDescription: [
      "A single pinhole leak can cause thousands of dollars in water damage if it goes undetected. NorthPeak's plumbers are experienced in diagnosing, locating, and repairing all types of residential pipe problems — from small copper leaks behind drywall to burst PVC lines in unheated basements.",
      "We work with all common residential pipe materials: copper, PVC, ABS, PEX, and older galvanized steel. If your home has aging galvanized supply lines showing widespread corrosion, we'll discuss a full repipe with modern PEX — a cleaner, quieter, and longer-lasting solution.",
      "Before any wall is opened, we try to confirm the leak location precisely — minimizing disruption to your home. Where possible, we access pipes through utility spaces and keep drywall cuts small.",
    ],
    included: [
      "Leak detection and precise location (non-invasive methods where possible)",
      "Shut-off and drain of affected line",
      "Repair or section replacement using appropriate materials",
      "Pressure test after repair",
      "Advice on any related issues found during the job",
    ],
    priceRange: "$275 – $2,800+",
    priceNote:
      "Simple repairs start around $275. Repiping a full home is quoted on size and scope. Call for a firm assessment.",
    faq: [
      {
        q: "How do I know if I have a hidden leak?",
        a: "Signs include unexplained spikes in your water bill, the sound of running water when everything is off, damp spots on walls or ceilings, and musty smells. Early detection is much cheaper than water damage remediation — call us before it gets worse.",
      },
      {
        q: "Do you repair frozen pipes?",
        a: "Yes. Frozen pipe calls are common in New Brunswick winters. If a pipe has burst, we repair it. If it's frozen but intact, we can thaw it and advise on insulation to prevent recurrence.",
      },
      {
        q: "What is PEX repiping and should I consider it?",
        a: "PEX (cross-linked polyethylene) is a flexible, durable pipe material that's become the standard for new residential construction. It doesn't corrode and handles freeze-thaw cycles better than copper or galvanized. If your home has aging lines with recurring problems, a PEX repipe is worth considering.",
      },
      {
        q: "Will you need to open my walls?",
        a: "Sometimes, but we try to minimize it. We use non-invasive leak detection first and access pipes through utility spaces wherever possible. When we do need to open a wall, we keep cuts small and tidy.",
      },
    ],
    metaTitle: "Pipe Repair & Replacement Fredericton | NorthPeak Plumbing",
    metaDescription:
      "Expert pipe repair and repiping in Fredericton, NB. Leak detection, copper and PEX, emergency response. Call NorthPeak: (506) 555-0192.",
  },
  {
    slug: "furnace-heating",
    icon: "furnace",
    title: "Furnace & Heating",
    shortDescription:
      "Furnace tune-ups, repairs, and full installations. We service all major brands and keep your home warm through every New Brunswick winter.",
    heroSubtitle: "Tune-ups, repairs, and full installs — we keep you warm all winter.",
    fullDescription: [
      "A New Brunswick winter without a working furnace isn't a minor inconvenience — it's an emergency. NorthPeak's heating technicians service and install natural gas furnaces, heat pumps, boilers, and baseboard heaters. We hold the same standards for heating work as we do for plumbing: honest diagnosis, clear pricing, quality parts, and follow-through.",
      "Annual furnace tune-ups are the single best investment a homeowner can make in heating efficiency. We clean the burners, inspect the heat exchanger (a cracked exchanger is a carbon monoxide risk), test ignition and safety controls, and check flue venting. Most tune-ups take under two hours and can extend equipment life by years.",
      "If your furnace needs replacement, we'll assess your home's heat load, recommend the right efficiency rating, and install it properly — sized right so it runs efficiently without short-cycling.",
    ],
    included: [
      "Full furnace diagnostic or tune-up inspection",
      "Burner cleaning and combustion analysis",
      "Heat exchanger inspection (CO safety check)",
      "Filter replacement (standard 1-inch filters included)",
      "Ignition system test and safety control check",
      "Flue and venting inspection",
    ],
    priceRange: "$149 (tune-up) – $5,500+ (full install)",
    priceNote:
      "Tune-ups start at $149. Repairs are quoted on diagnosis. Full system installs vary by unit size and efficiency rating.",
    faq: [
      {
        q: "How often should I have my furnace serviced?",
        a: "Once a year, ideally in early fall before the heating season starts. Annual tune-ups keep efficiency high, catch developing problems early, and satisfy most manufacturer warranty requirements.",
      },
      {
        q: "My furnace is running but the house isn't getting warm — what's wrong?",
        a: "Common causes include a dirty air filter restricting airflow, a failing blower motor, a cracked heat exchanger, or a thermostat issue. It could also be ductwork-related. We diagnose the root cause before recommending any repairs.",
      },
      {
        q: "How long does a furnace last?",
        a: "A well-maintained gas furnace typically lasts 18–25 years. If yours is over 15 years old and needing repeated repairs, it may be more cost-effective to replace it — we'll give you an honest breakdown of repair cost vs. replacement.",
      },
      {
        q: "Do you install heat pumps?",
        a: "Yes. We install and service air-source heat pumps, which are increasingly popular in New Brunswick thanks to the Efficiency NB rebate program. We can help you assess whether your home is a good candidate.",
      },
    ],
    metaTitle: "Furnace Repair & Installation Fredericton | NorthPeak Heating",
    metaDescription:
      "Furnace repair, tune-ups, and installation in Fredericton, NB. All major brands serviced. 24/7 emergency heating. Call NorthPeak: (506) 555-0192.",
  },
  {
    slug: "bathroom-renovations",
    icon: "bathroom",
    title: "Bathroom Renovations",
    shortDescription:
      "Full plumbing rough-in and fixture installation for bathroom remodels. From faucets to full ensuite builds — done right the first time.",
    heroSubtitle: "From faucet swaps to full ensuite builds — done right the first time.",
    fullDescription: [
      "A bathroom renovation touches almost every trade — and the plumbing rough-in is the foundation everything else is built on. Get it wrong and you're pulling tile three years later. NorthPeak handles the plumbing side of bathroom renovations with the same care we bring to emergency calls: proper pipe sizing, correct slope, watertight connections, and work that passes inspection.",
      "Whether you're adding a main floor powder room, converting a closet to an ensuite, or doing a full gut and rebuild, we work directly with your contractor or GC to hit your schedule. We show up when we say we will, rough in to spec, and complete trim-out once the finishes are in place.",
      "We supply and install all major fixture brands — Moen, Delta, Kohler — or install owner-supplied fixtures at a reduced labour rate. We also handle shower valve installation, tub surrounds, in-floor heating connections, and toilet rough-in.",
    ],
    included: [
      "Supply and drain rough-in to code",
      "Vent stack connection and inspection",
      "Shower valve and tub/shower faucet installation",
      "Toilet, vanity, and fixture installation (trim-out)",
      "Water supply lines and shut-off valves",
      "Final inspection and sign-off",
    ],
    priceRange: "$850 – $8,500+",
    priceNote:
      "Rough-in for a new bathroom starts around $850. Full ensuite build-outs with multiple fixtures are quoted on scope.",
    faq: [
      {
        q: "Do I need a permit for my bathroom renovation?",
        a: "For cosmetic work (replacing a vanity, swapping a faucet), usually not. For any new plumbing, relocation of fixtures, or changes to the drain/vent system, a permit is typically required. We pull all required permits as part of our work.",
      },
      {
        q: "Can you work with my contractor or GC?",
        a: "Absolutely — we do it all the time. We coordinate directly with your GC on rough-in timing and trim-out scheduling. If you're running your own reno, we'll coordinate with you the same way.",
      },
      {
        q: "How long does a bathroom rough-in take?",
        a: "A typical full bathroom rough-in runs 1–2 days. A simple powder room (toilet and sink only) can often be done in a day. Trim-out is usually a half day once finishes are in place.",
      },
      {
        q: "Can you move a toilet or shower to a new location?",
        a: "Yes, though it depends on your floor structure and the location of existing drain lines. We assess feasibility before quoting — some moves are straightforward, others require significant drain work.",
      },
    ],
    metaTitle: "Bathroom Renovation Plumbing Fredericton | NorthPeak",
    metaDescription:
      "Expert bathroom plumbing rough-in and fixture installation in Fredericton, NB. From powder rooms to full ensuite builds. Call: (506) 555-0192.",
  },
  {
    slug: "emergency-service",
    icon: "emergency",
    title: "Emergency Service",
    shortDescription:
      "Burst pipe at 2 AM? We answer 24/7. Our emergency team is on call around the clock because plumbing problems don't wait for business hours.",
    highlighted: true,
    heroSubtitle: "We answer every call. Day or night, 365 days a year.",
    fullDescription: [
      "Plumbing emergencies don't follow a schedule. A burst pipe at 2 AM, a water heater failure on Christmas morning, a backed-up sewer line on a Sunday — these are the calls NorthPeak exists for. We maintain a dedicated emergency line staffed around the clock, and our on-call technicians can be on-site within the hour across the greater Fredericton area.",
      "When you call our emergency line, you reach a real NorthPeak technician — not an answering service, not a dispatch centre in another city. They'll assess your situation over the phone, advise on immediate steps to minimize damage, and dispatch to your location.",
      "We carry a fully stocked emergency truck so we're not making trips back to the shop mid-job. Our goal is to get your home stable and safe on the first visit — every time.",
    ],
    included: [
      "Immediate phone assessment and damage-limitation advice",
      "On-site response within 60 minutes across Fredericton area",
      "Emergency stabilization (stop the leak, restore heat, clear the backup)",
      "Full diagnosis and written scope of repair",
      "Same-visit repair when possible",
    ],
    priceRange: "$195 – $850+ (emergency call)",
    priceNote:
      "Emergency calls carry an after-hours service fee quoted upfront before dispatch. The repair quote is separate and agreed before work begins — no surprises.",
    faq: [
      {
        q: "What counts as a plumbing emergency?",
        a: "Any situation causing active water damage, loss of heat in winter, sewage backup in living areas, or loss of running water qualifies. When in doubt, call — we'd rather you check with us than wait on a developing problem.",
      },
      {
        q: "How fast can you get to me?",
        a: "Our target is 60 minutes or less for the Fredericton city area. Surrounding areas like Oromocto, New Maryland, and Hanwell may run slightly longer depending on where our on-call tech is located.",
      },
      {
        q: "Is there an extra charge for after-hours calls?",
        a: "Yes. Emergency calls outside regular hours (Mon–Fri 7 AM–6 PM, Sat 8 AM–4 PM) carry an after-hours service fee. We'll tell you that fee upfront before dispatching — the repair quote is separate and agreed before work starts.",
      },
      {
        q: "What should I do while waiting for you to arrive?",
        a: "If there's an active water leak: shut off your main water valve immediately — typically near the water meter in your basement. For furnace failures in winter: close interior doors to retain heat and use safe supplemental heat if available. Don't enter rooms with sewage backup. We'll give you specific guidance when you call.",
      },
    ],
    metaTitle: "Emergency Plumber Fredericton | 24/7 NorthPeak Plumbing",
    metaDescription:
      "24/7 emergency plumbing in Fredericton, NB. Burst pipes, water heater failures, sewage backup. On-site within 60 min. Call now: (506) 555-0192.",
  },
];
