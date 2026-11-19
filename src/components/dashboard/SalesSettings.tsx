"use client";

import React from "react";

interface SalesSettingsProps {
  settings?: {
    whatsappAndEmail: boolean;
    multiPayment: boolean;
    multiCurrency: boolean;
    cappedResale: boolean;
    waitlistEnabled: boolean;
  };
  onToggle: (key: "whatsappAndEmail" | "multiPayment" | "multiCurrency" | "cappedResale" | "waitlistEnabled") => void;
}

export function SalesSettings({
  settings = {
    whatsappAndEmail: true,
    multiPayment: true,
    multiCurrency: true,
    cappedResale: true,
    waitlistEnabled: false,
  },
  onToggle,
}: SalesSettingsProps) {
  return (
    <div className="card">
      <h2 className="h" style={{ fontSize: "28px", marginBottom: "8px" }}>
        Sales settings
      </h2>
      <label className="chk">
        <input
          type="checkbox"
          checked={settings.whatsappAndEmail}
          onChange={() => onToggle("whatsappAndEmail")}
        />{" "}
        Deliver tickets to WhatsApp and email
      </label>
      <label className="chk">
        <input
          type="checkbox"
          checked={settings.multiPayment}
          onChange={() => onToggle("multiPayment")}
        />{" "}
        Accept bank transfer, USSD, cards and Apple Pay
      </label>
      <label className="chk">
        <input
          type="checkbox"
          checked={settings.multiCurrency}
          onChange={() => onToggle("multiCurrency")}
        />{" "}
        Show prices in buyers&apos; own currency
      </label>
      <label className="chk">
        <input
          type="checkbox"
          checked={settings.cappedResale}
          onChange={() => onToggle("cappedResale")}
        />{" "}
        Allow official resale at face value only
      </label>
      <label className="chk">
        <input
          type="checkbox"
          checked={settings.waitlistEnabled}
          onChange={() => onToggle("waitlistEnabled")}
        />{" "}
        Enable waitlist when sold out
      </label>
    </div>
  );
}
