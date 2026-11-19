import { EventDetails } from "./types";

export const SEED_EVENT: EventDetails = {
  slug: "rooftop-sessions",
  name: "Rooftop Sessions: December Edition",
  date: "20 Dec 2026",
  doorsOpen: "6:00 PM",
  venue: "Victoria Island, Lagos",
  description: "An evening of live sets and good company above the city.",
  category: "Live music · Lagos",
  salesSettings: {
    whatsappAndEmail: true,
    multiPayment: true,
    multiCurrency: true,
    cappedResale: true,
    waitlistEnabled: false,
  },
  tiers: [
    {
      id: "early-bird",
      name: "Early Bird",
      description: "Limited allocation",
      price: 10000,
      quantity: 100,
      salesEnd: "1 Dec",
    },
    {
      id: "general-admission",
      name: "General Admission",
      description: "Standing access",
      price: 15000,
      quantity: 400,
      salesEnd: "20 Dec",
    },
    {
      id: "vip-table",
      name: "VIP Table",
      description: "Reserved seating",
      price: 50000,
      quantity: 30,
      salesEnd: "20 Dec",
    },
  ],
};
