import React from "react";
import Link from "next/link";

export function FeatureGrid() {
  const features = [
    {
      lbl: "Payouts",
      title: "Instant payouts",
      desc: "Withdraw your balance as sales come in. No waiting for the event to end to see your money.",
      href: "/dashboard/payouts",
    },
    {
      lbl: "Delivery",
      title: "WhatsApp-first tickets",
      desc: "Every buyer receives their ticket where they already are, with email and an in-app wallet as backup.",
      href: "/e/rooftop-sessions",
    },
    {
      lbl: "Checkout",
      title: "Pay your way",
      desc: "Bank transfer, USSD, cards and Apple Pay. Fewer failed payments, more completed checkouts.",
      href: "/pricing",
    },
    {
      lbl: "Diaspora",
      title: "Multi-currency checkout",
      desc: "Buyers abroad pay in their own currency, ready for the December returnee season.",
      href: "/pricing",
    },
    {
      lbl: "Entry",
      title: "Offline gate scanning",
      desc: "Rotating QR codes defeat screenshot resale, and scanners keep working when the network drops.",
      href: "/dashboard/scanners",
    },
    {
      lbl: "Resale",
      title: "Fair, capped resale",
      desc: "Official resale is limited to face value: safe for fans, useless for scalpers.",
      href: "/terms",
    },
  ];

  return (
    <section id="features" className="wrap" style={{ paddingBottom: "112px" }}>
      <div className="lbl">The platform</div>
      <h2
        className="h"
        style={{ fontSize: "56px", lineHeight: 1.05, margin: "16px 0 48px", maxWidth: "760px" }}
      >
        Everything other platforms make you work around.
      </h2>
      <div className="grid3">
        {features.map((f) => (
          <Link
            key={f.lbl}
            href={f.href}
            style={{ textDecoration: "none", color: "inherit", display: "block" }}
          >
            <div className="card" style={{ height: "100%", boxSizing: "border-box" }}>
              <div className="lbl">{f.lbl}</div>
              <h3 className="h" style={{ fontSize: "28px", margin: "14px 0 10px" }}>
                {f.title}
              </h3>
              <div className="mut">{f.desc}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
