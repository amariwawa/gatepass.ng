"use client";

import React from "react";
import { Currency } from "@/lib/types";

interface CurrencyPickerProps {
  value: Currency;
  onChange: (currency: Currency) => void;
}

export function CurrencyPicker({ value, onChange }: CurrencyPickerProps) {
  const currencies: Currency[] = ["NGN", "USD", "GBP"];

  return (
    <fieldset style={{ border: 0, padding: 0, margin: "0 0 20px" }}>
      <legend className="fl">Pay in</legend>
      <div style={{ display: "flex", gap: "10px" }}>
        {currencies.map((cur) => (
          <label key={cur} className="pill" style={{ flex: 1 }}>
            <input
              type="radio"
              name="cur"
              checked={value === cur}
              onChange={() => onChange(cur)}
            />{" "}
            {cur}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
