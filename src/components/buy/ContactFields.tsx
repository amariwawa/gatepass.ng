"use client";

import React from "react";

interface ContactFieldsProps {
  whatsapp: string;
  email: string;
  onWhatsappChange: (val: string) => void;
  onEmailChange: (val: string) => void;
}

export function ContactFields({
  whatsapp,
  email,
  onWhatsappChange,
  onEmailChange,
}: ContactFieldsProps) {
  return (
    <div className="row" style={{ marginBottom: "24px" }}>
      <div>
        <label className="fl" htmlFor="w">
          WhatsApp number
        </label>
        <input
          id="w"
          className="inp"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={whatsapp}
          onChange={(e) => onWhatsappChange(e.target.value)}
        />
      </div>
      <div>
        <label className="fl" htmlFor="e">
          Email
        </label>
        <input
          id="e"
          className="inp"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
        />
      </div>
    </div>
  );
}
