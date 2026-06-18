export type FAQItem = {
  question: string;
  answer: string;
  category: string;
};

export const faqItems: FAQItem[] = [
  {
    category: "Pricing",
    question: "How does your pricing work?",
    answer:
      "We provide upfront flat-rate quotes before any work begins. You'll know the exact price before we touch anything — no hourly billing surprises, no add-ons at the end of the job. If the scope changes during the job, we pause and get your approval first.",
  },
  {
    category: "Pricing",
    question: "Is there a charge for an estimate?",
    answer:
      "For straightforward service calls (drain cleaning, faucet repair, water heater replacement), estimates are provided when we arrive and quoted before work begins — no charge if you decline. For larger projects like bathroom rough-ins or full repiping, we may charge a small diagnostic fee that's credited back if you proceed.",
  },
  {
    category: "Scheduling",
    question: "How quickly can you get someone out?",
    answer:
      "Most non-emergency service calls can be scheduled within 1–2 business days. Same-day service is available for drain cleaning and minor repairs. Emergency calls are responded to within 60 minutes, 24/7.",
  },
  {
    category: "Scheduling",
    question: "Do you offer same-day service?",
    answer:
      "Yes — for drain cleaning, water heater issues, and many repair calls, same-day service is available if you contact us before noon on a weekday. We'll always tell you honestly if same-day isn't possible so you can plan accordingly.",
  },
  {
    category: "Licensing",
    question: "Are your plumbers licensed and insured?",
    answer:
      "Yes. NorthPeak is a licensed plumbing contractor in New Brunswick, and Mike Arsenault holds a Master Plumber license. All technicians are licensed journeypersons or working under direct supervision. We carry $5M commercial general liability insurance.",
  },
  {
    category: "Licensing",
    question: "Do you pull permits for your work?",
    answer:
      "We pull all required permits as standard practice. Any new plumbing, drain changes, gas fitting, or heating system installation requires a permit in Fredericton — and we handle it. Be cautious of any contractor who suggests skipping permits; it can create serious problems when you sell your home.",
  },
  {
    category: "Emergency",
    question: "What's your response time for emergencies?",
    answer:
      "Our target is 60 minutes or less for the Fredericton city area. Surrounding areas (Oromocto, New Maryland, Hanwell, Lincoln) may run slightly longer. We staff our emergency line around the clock, 365 days a year — including holidays.",
  },
  {
    category: "Emergency",
    question: "What should I do if a pipe bursts before you arrive?",
    answer:
      "Locate your main water shut-off valve and turn it off immediately. In most homes, this is near the water meter — typically in the basement near the foundation wall. Once the water is off, call us and we'll dispatch. Don't try to repair a burst pipe with tape or sealant — it won't hold under pressure and can complicate the actual repair.",
  },
  {
    category: "Services",
    question: "Do you handle both plumbing and heating?",
    answer:
      "Yes. NorthPeak covers plumbing, drain work, water heaters, furnace service and installation, heat pumps, and bathroom renovation rough-in. We're a single call for the mechanical side of your home.",
  },
  {
    category: "Services",
    question: "What areas do you serve?",
    answer:
      "We serve Fredericton and the surrounding region, including Oromocto, New Maryland, Hanwell, Lincoln, Burton, Nackawic, and Jemseg. See our Service Area page for the full list. Call to confirm coverage if you're outside the Fredericton metro area.",
  },
  {
    category: "Services",
    question: "Do you service rental properties?",
    answer:
      "Yes. We work with landlords, property managers, and tenants (with landlord authorization). If you manage multiple properties, ask about our commercial service account — it simplifies billing and scheduling considerably.",
  },
  {
    category: "Warranty",
    question: "Do you warranty your work?",
    answer:
      "All NorthPeak labour is warranted for one year from the date of service. Parts and equipment carry the manufacturer warranty (typically 1–10 years depending on the product). If something we installed or repaired fails within the warranty period, we come back and make it right at no charge.",
  },
];
