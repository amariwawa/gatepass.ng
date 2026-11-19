"use client";

import React from "react";
import { TicketTier } from "@/lib/types";

interface TierTableProps {
  tiers: TicketTier[];
  onAddTier: () => void;
  onUpdateTier: (index: number, updates: Partial<TicketTier>) => void;
  onRemoveTier?: (index: number) => void;
}

export function TierTable({
  tiers,
  onAddTier,
  onUpdateTier,
  onRemoveTier,
}: TierTableProps) {
  return (
    <div className="card">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h2 className="h" style={{ fontSize: "28px" }}>
          Tickets
        </h2>
        <button
          type="button"
          onClick={onAddTier}
          className="btn btn2"
          style={{ minHeight: "40px" }}
        >
          Add tier
        </button>
      </div>
      <div
        className="row t4"
        style={{
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          fontSize: "12px",
          fontWeight: 600,
          letterSpacing: "0.1em",
          color: "#5B6472",
          marginBottom: "8px",
        }}
      >
        <span>TIER</span>
        <span>PRICE (₦)</span>
        <span>QUANTITY</span>
        <span>SALES END</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {tiers.map((tier, index) => (
          <div
            key={tier.id || index}
            className="row t4"
            style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr" }}
          >
            <input
              className="inp"
              aria-label="Tier name"
              value={tier.name}
              placeholder="Tier name"
              onChange={(e) => onUpdateTier(index, { name: e.target.value })}
            />
            <input
              className="inp"
              aria-label="Price"
              value={tier.price.toLocaleString("en-US")}
              placeholder="0"
              onChange={(e) => {
                const numeric = Number(e.target.value.replace(/[^0-9]/g, "")) || 0;
                onUpdateTier(index, { price: numeric });
              }}
            />
            <input
              className="inp"
              aria-label="Quantity"
              value={tier.quantity === 0 ? "" : tier.quantity}
              placeholder="0"
              type="number"
              onChange={(e) => {
                const numeric = Number(e.target.value.replace(/[^0-9]/g, "")) || 0;
                onUpdateTier(index, { quantity: numeric });
              }}
            />
            <input
              className="inp"
              aria-label="Sales end"
              value={tier.salesEnd}
              placeholder="Date"
              onChange={(e) => onUpdateTier(index, { salesEnd: e.target.value })}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
