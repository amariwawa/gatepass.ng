"use client";

import React from "react";
import { TicketTier } from "@/lib/types";
import { formatMoney } from "@/lib/format";

interface TierPickerProps {
  tiers: TicketTier[];
  quantities: Record<string, number>;
  onQuantityChange: (tierId: string, newQty: number) => void;
}

export function TierPicker({
  tiers,
  quantities,
  onQuantityChange,
}: TierPickerProps) {
  return (
    <div>
      <h2 className="h" style={{ fontSize: "32px", marginBottom: "16px" }}>
        Choose your tickets
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {tiers.map((tier) => {
          const qty = quantities[tier.id] ?? 0;
          const isSelected = qty > 0;
          return (
            <div
              key={tier.id}
              className="card"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "16px",
                padding: "22px 28px",
                borderColor: isSelected ? "#1F5F46" : undefined,
              }}
            >
              <div>
                <div className="h" style={{ fontSize: "24px" }}>
                  {tier.name}
                </div>
                <div className="mut" style={{ fontSize: "14px" }}>
                  {tier.description}
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontWeight: 600 }}>{formatMoney(tier.price, "NGN")}</span>
                <button
                  type="button"
                  className="qty"
                  aria-label={`Remove one ${tier.name} ticket`}
                  disabled={qty <= 0}
                  onClick={() => onQuantityChange(tier.id, Math.max(0, qty - 1))}
                >
                  −
                </button>
                <span style={{ width: "20px", textAlign: "center", fontWeight: 600 }}>
                  {qty}
                </span>
                <button
                  type="button"
                  className="qty"
                  aria-label={`Add one ${tier.name} ticket`}
                  disabled={qty >= tier.quantity}
                  onClick={() =>
                    onQuantityChange(tier.id, Math.min(tier.quantity, qty + 1))
                  }
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
