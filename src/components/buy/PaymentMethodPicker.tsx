"use client";

import React from "react";
import { PaymentMethod } from "@/lib/types";

interface PaymentMethodPickerProps {
  value: PaymentMethod;
  onChange: (method: PaymentMethod) => void;
}

export function PaymentMethodPicker({
  value,
  onChange,
}: PaymentMethodPickerProps) {
  const methods: { id: PaymentMethod; label: string }[] = [
    { id: "bank_transfer", label: "Bank transfer" },
    { id: "card", label: "Card" },
    { id: "ussd", label: "USSD" },
    { id: "apple_pay", label: "Apple Pay" },
  ];

  return (
    <fieldset style={{ border: 0, padding: 0, margin: "0 0 20px" }}>
      <legend className="fl">Payment method</legend>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {methods.map((method) => (
          <label key={method.id} className="pill">
            <input
              type="radio"
              name="pm"
              checked={value === method.id}
              onChange={() => onChange(method.id)}
            />{" "}
            {method.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
