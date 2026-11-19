import { Currency } from "./types";

export function formatMoney(amount: number, currency: Currency = "NGN"): string {
  const symbols: Record<Currency, string> = {
    NGN: "₦",
    USD: "$",
    GBP: "£",
  };

  const symbol = symbols[currency] || "₦";

  // If currency is USD or GBP, apply standard demo exchange rate if converted,
  // or format the number with standard locale separators
  return `${symbol}${amount.toLocaleString("en-US")}`;
}
