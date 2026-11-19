"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEvent } from "@/context/EventContext";
import { EventHeader } from "@/components/buy/EventHeader";
import { TierPicker } from "@/components/buy/TierPicker";
import { OrderSummary } from "@/components/buy/OrderSummary";
import { Currency, PaymentMethod } from "@/lib/types";

export default function BuyTicketsPage() {
  const router = useRouter();
  const { event, submitOrder } = useEvent();

  // Initialize with mockup defaults: General Admission = 2, others = 0
  const [quantities, setQuantities] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    event.tiers.forEach((t) => {
      if (t.name.toLowerCase().includes("general admission")) {
        initial[t.id] = 2;
      } else {
        initial[t.id] = 0;
      }
    });
    return initial;
  });

  const [currency, setCurrency] = useState<Currency>("NGN");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("bank_transfer");
  const [whatsapp, setWhatsapp] = useState("+234");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleQuantityChange = (tierId: string, newQty: number) => {
    setQuantities((prev) => ({
      ...prev,
      [tierId]: newQty,
    }));
  };

  const handleSubmit = () => {
    const selectedItems = event.tiers
      .filter((t) => (quantities[t.id] ?? 0) > 0)
      .map((t) => ({
        tierId: t.id,
        tierName: t.name,
        quantity: quantities[t.id],
        unitPrice: t.price,
      }));

    const subtotal = selectedItems.reduce(
      (acc, item) => acc + item.quantity * item.unitPrice,
      0
    );

    const orderPayload = {
      eventSlug: event.slug || "rooftop-sessions",
      items: selectedItems,
      subtotal,
      fee: "[FEE]",
      total: `${subtotal} + fee`,
      currency,
      paymentMethod,
      whatsappNumber: whatsapp,
      email,
    };

    submitOrder(orderPayload);
    setSubmitted(true);
    // Route to confirmation ticket page
    setTimeout(() => {
      router.push(`/e/${event.slug || "rooftop-sessions"}/confirmation`);
    }, 400);
  };

  return (
    <div style={{ minHeight: "1320px" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "28px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        <Link href="/" className="h" style={{ fontSize: "28px", fontWeight: 500 }}>
          Gatepass
        </Link>
        <Link href="/login" style={{ fontSize: "15px" }}>
          Sign in
        </Link>
      </div>

      <div
        className="two"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "24px 32px 96px",
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: "40px",
          alignItems: "start",
          boxSizing: "border-box",
        }}
      >
        <div>
          <EventHeader
            category={event.category}
            name={event.name}
            date={event.date}
            venue={event.venue}
            doorsOpen={event.doorsOpen}
            description={event.description}
          />

          <TierPicker
            tiers={event.tiers}
            quantities={quantities}
            onQuantityChange={handleQuantityChange}
          />
        </div>

        <div>
          <OrderSummary
            tiers={event.tiers}
            quantities={quantities}
            currency={currency}
            paymentMethod={paymentMethod}
            whatsapp={whatsapp}
            email={email}
            onCurrencyChange={setCurrency}
            onPaymentMethodChange={setPaymentMethod}
            onWhatsappChange={setWhatsapp}
            onEmailChange={setEmail}
            onSubmit={handleSubmit}
            isSubmitting={submitted}
          />
        </div>
      </div>
    </div>
  );
}
