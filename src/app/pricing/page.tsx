"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { PLATFORM_FEE_PERCENT } from "@/lib/constants";
import { formatMoney } from "@/lib/format";

export default function PricingPage() {
  const [ticketPrice, setTicketPrice] = useState(15000);
  const [ticketCount, setTicketCount] = useState(400);

  const grossSales = ticketPrice * ticketCount;
  // Calculate demo fee using 3.5% as standard baseline
  const estimatedFee = grossSales * 0.035;
  const organizerTakeHome = grossSales - estimatedFee;

  return (
    <div style={{ minHeight: "100vh", background: "#F6F3EC" }}>
      <Nav />

      <main className="wrap" style={{ paddingTop: "40px", paddingBottom: "112px" }}>
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 56px" }}>
          <div className="lbl">Fair & Transparent</div>
          <h1 className="h" style={{ fontSize: "64px", margin: "16px 0 18px" }}>
            {PLATFORM_FEE_PERCENT}% per ticket sold.
          </h1>
          <p className="mut" style={{ fontSize: "19px" }}>
            No setup fees. No monthly fees. Free events are always free. Payouts that reach your bank while the event is still on sale.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid2" style={{ gap: "28px", marginBottom: "64px" }}>
          <div className="card" style={{ padding: "48px" }}>
            <div className="lbl">Community & Meetups</div>
            <h2 className="h" style={{ fontSize: "40px", margin: "16px 0 8px" }}>
              Free Events
            </h2>
            <div className="h" style={{ fontSize: "48px", color: "#1F5F46", margin: "16px 0" }}>
              ₦0
            </div>
            <p className="mut" style={{ fontSize: "15px", marginBottom: "24px" }}>
              Organize free workshops, community hangouts, and religious gatherings at zero cost.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "15px", color: "#0F1B2D" }}>
              <div>✓ Unlimited free tickets</div>
              <div>✓ WhatsApp QR delivery</div>
              <div>✓ Offline gate scanning</div>
              <div>✓ Real-time attendee roster</div>
            </div>
          </div>

          <div
            className="card"
            style={{
              padding: "48px",
              background: "#0F1B2D",
              color: "#F6F3EC",
              borderColor: "#0F1B2D",
            }}
          >
            <div className="lbl" style={{ color: "#8FD3B1" }}>
              Paid Concerts & Shows
            </div>
            <h2 className="h" style={{ fontSize: "40px", margin: "16px 0 8px" }}>
              Paid Ticketing
            </h2>
            <div className="h" style={{ fontSize: "48px", color: "#F6F3EC", margin: "16px 0" }}>
              {PLATFORM_FEE_PERCENT}%
            </div>
            <p style={{ color: "#B8C2D1", fontSize: "15px", lineHeight: 1.6, marginBottom: "24px" }}>
              Everything included to sell out your show and collect payments across Africa and the diaspora.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "15px", color: "#F6F3EC" }}>
              <div>✓ Instant balance withdrawal (no waiting for event to end)</div>
              <div>✓ Multi-currency checkout (NGN, USD, GBP)</div>
              <div>✓ Bank transfer, USSD, Cards & Apple Pay</div>
              <div>✓ Fair capped resale protection against scalpers</div>
            </div>
          </div>
        </div>

        {/* Interactive Revenue Calculator */}
        <div className="card" style={{ padding: "48px", maxWidth: "800px", margin: "0 auto" }}>
          <div className="lbl">Interactive Calculator</div>
          <h2 className="h" style={{ fontSize: "36px", margin: "12px 0 24px" }}>
            See your payout in real time.
          </h2>

          <div className="grid2" style={{ gap: "24px", marginBottom: "28px" }}>
            <div>
              <label className="fl" htmlFor="cprice">
                Average Ticket Price (₦)
              </label>
              <input
                id="cprice"
                className="inp"
                type="number"
                value={ticketPrice}
                onChange={(e) => setTicketPrice(Number(e.target.value) || 0)}
              />
            </div>
            <div>
              <label className="fl" htmlFor="ccount">
                Tickets to Sell
              </label>
              <input
                id="ccount"
                className="inp"
                type="number"
                value={ticketCount}
                onChange={(e) => setTicketCount(Number(e.target.value) || 0)}
              />
            </div>
          </div>

          <div
            style={{
              background: "#F6F3EC",
              borderRadius: "14px",
              padding: "24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div>
              <div style={{ fontSize: "13px", color: "#5B6472" }}>Gross Ticket Sales</div>
              <div className="h" style={{ fontSize: "28px", color: "#0F1B2D" }}>
                {formatMoney(grossSales, "NGN")}
              </div>
            </div>
            <div>
              <div style={{ fontSize: "13px", color: "#5B6472" }}>Platform Fee</div>
              <div style={{ fontSize: "18px", fontWeight: 600, color: "#5B6472" }}>
                ~ {formatMoney(Math.round(estimatedFee), "NGN")}
              </div>
            </div>
            <div>
              <div style={{ fontSize: "13px", color: "#1F5F46", fontWeight: 600 }}>
                Instant Take-Home Payout
              </div>
              <div className="h" style={{ fontSize: "36px", color: "#1F5F46" }}>
                {formatMoney(Math.round(organizerTakeHome), "NGN")}
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <Link href="/dashboard/events/new" className="btn">
              Create your event now
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
