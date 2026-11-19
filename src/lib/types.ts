export type Currency = "NGN" | "USD" | "GBP";

export type PaymentMethod = "bank_transfer" | "card" | "ussd" | "apple_pay";

export interface TicketTier {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  salesEnd: string;
}

export interface EventDetails {
  slug: string;
  name: string;
  date: string;
  doorsOpen: string;
  venue: string;
  description: string;
  category: string;
  tiers: TicketTier[];
  salesSettings?: {
    whatsappAndEmail: boolean;
    multiPayment: boolean;
    multiCurrency: boolean;
    cappedResale: boolean;
    waitlistEnabled: boolean;
  };
}

export interface OrderItem {
  tierId: string;
  tierName: string;
  quantity: number;
  unitPrice: number;
}

export interface Order {
  id: string;
  eventSlug: string;
  items: OrderItem[];
  subtotal: number;
  fee: number | string;
  total: number | string;
  currency: Currency;
  paymentMethod: PaymentMethod;
  whatsappNumber: string;
  email: string;
  createdAt?: string;
}
