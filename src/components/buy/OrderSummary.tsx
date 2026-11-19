"use client";

import React from "react";
import { TicketTier, Currency, PaymentMethod, OrderItem } from "@/lib/types";
import { SERVICE_FEE } from "@/lib/constants";
import { formatMoney } from "@/lib/format";
import { CurrencyPicker } from "./CurrencyPicker";
import { PaymentMethodPicker } from "./PaymentMethodPicker";
import { ContactFields } from "./ContactFields";

interface OrderSummaryProps {
  tiers: TicketTier[];
  quantities: Record<string, number>;
  currency: Currency;
  paymentMethod: PaymentMethod;
  whatsapp: string;
  email: string;
  onCurrencyChange: (c: Currency) => void;
  onPaymentMethodChange: (pm: PaymentMethod) => void;
  onWhatsappChange: (val: string) => void;
  onEmailChange: (val: string) => void;
  onSubmit: () => void;
  isSubmitting?: boolean;
}

export function OrderSummary({
  tiers,
  quantities,
  currency,
  paymentMethod,
  whatsapp,
  email,
  onCurrencyChange,
  onPaymentMethodChange,
  onWhatsappChange,
  onEmailChange,
  onSubmit,
  isSubmitting = false,
}: OrderSummaryProps) {
  const selectedItems: OrderItem[] = tiers
    .filter((t) => (quantities[t.id] ?? 0) > 0)
    .map((t) => ({
      tierId: t.id,
      tierName: t.name,
      quantity: quantities[t.id],
      unitPrice: t.price,
    }));

  const totalTickets = selectedItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = selectedItems.reduce(
    (acc, item) => acc + item.quantity * item.unitPrice,
    0
  );

  const hasTickets = totalTickets > 0;
  const hasValidWhatsapp = whatsapp.trim().length >= 4;
  const canPay = hasTickets && hasValidWhatsapp;

  return (
    <div className="card" style={{ padding: "32px" }}>
      <h2 className="h" style={{ fontSize: "30px", marginBottom: "20px" }}>
        Your order
      </h2>

      {selectedItems.length > 0 ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {selectedItems.map((item) => (
            <div
              key={item.tierId}
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "15px",
              }}
            >
              <span>
                {item.tierName} × {item.quantity}
              </span>
              <span>{formatMoney(item.unitPrice * item.quantity, currency)}</span>
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "15px",
            color: "#5B6472",
          }}
        >
          <span>No tickets selected</span>
          <span>{formatMoney(0, currency)}</span>
        </div>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "15px",
          marginTop: "10px",
          color: "#5B6472",
        }}
      >
        <span>Service fee</span>
        <span>{SERVICE_FEE}</span>
      </div>

      <div
        style={{
          borderTop: "1px solid #E2DDD1",
          margin: "18px 0",
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "18px",
        }}
      >
        <span className="h" style={{ fontSize: "22px" }}>
          Total
        </span>
        <span className="h" style={{ fontSize: "22px" }}>
          {formatMoney(subtotal, currency)} + fee
        </span>
      </div>

      <CurrencyPicker value={currency} onChange={onCurrencyChange} />

      <PaymentMethodPicker
        value={paymentMethod}
        onChange={onPaymentMethodChange}
      />

      <ContactFields
        whatsapp={whatsapp}
        email={email}
        onWhatsappChange={onWhatsappChange}
        onEmailChange={onEmailChange}
      />

      <button
        type="button"
        disabled={!canPay || isSubmitting}
        onClick={onSubmit}
        className="btn"
        style={{
          width: "100%",
          boxSizing: "border-box",
          opacity: canPay ? 1 : 0.45,
          cursor: canPay ? "pointer" : "not-allowed",
        }}
      >
        Pay and get tickets
      </button>

      <div
        className="mut"
        style={{ fontSize: "13px", marginTop: "14px", textAlign: "center" }}
      >
        Tickets are delivered to WhatsApp the moment payment clears.
      </div>
    </div>
  );
}
