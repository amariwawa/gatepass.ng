import React from "react";
import Link from "next/link";
import { TicketPreview } from "./TicketPreview";

export function Hero() {
  return (
    <section className="wrap hero" style={{ paddingTop: "72px", paddingBottom: "112px" }}>
      <div>
        <div className="lbl">Event ticketing for Africa</div>
        <h1 className="h big" style={{ fontSize: "84px", lineHeight: 1.0, marginTop: "24px" }}>
          Ticketing,{" "}
          <span style={{ fontStyle: "italic", color: "#1F5F46" }}>engineered</span> for the
          continent.
        </h1>
        <p
          className="mut"
          style={{ fontSize: "20px", maxWidth: "520px", margin: "28px 0 40px" }}
        >
          Every payment method your audience uses. Tickets delivered on WhatsApp. Payouts
          that reach you while the event is still on sale.
        </p>
        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          <Link href="/dashboard/events/new" className="btn">
            Create your event
          </Link>
          <Link href="/events" className="btn btn2">
            Find events
          </Link>
        </div>
      </div>
      <TicketPreview />
    </section>
  );
}
