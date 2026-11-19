import React from "react";
import Link from "next/link";

export function HowItWorks() {
  return (
    <section className="wrap" style={{ paddingBottom: "112px" }}>
      <div className="lbl">How it works</div>
      <div className="grid3" style={{ marginTop: "32px" }}>
        <Link
          href="/dashboard/events/new"
          style={{ textDecoration: "none", color: "inherit", display: "block" }}
        >
          <div style={{ borderTop: "1px solid #C9C3B3", paddingTop: "24px" }}>
            <div className="h" style={{ fontSize: "20px", fontStyle: "italic", color: "#1F5F46" }}>
              One
            </div>
            <h3 className="h" style={{ fontSize: "32px", margin: "10px 0" }}>
              Create
            </h3>
            <div className="mut">
              Set up your event, ticket tiers and payout account in minutes.
            </div>
          </div>
        </Link>

        <Link
          href="/e/rooftop-sessions"
          style={{ textDecoration: "none", color: "inherit", display: "block" }}
        >
          <div style={{ borderTop: "1px solid #C9C3B3", paddingTop: "24px" }}>
            <div className="h" style={{ fontSize: "20px", fontStyle: "italic", color: "#1F5F46" }}>
              Two
            </div>
            <h3 className="h" style={{ fontSize: "32px", margin: "10px 0" }}>
              Sell
            </h3>
            <div className="mut">
              Share one link. Buyers pay their way and tickets arrive on WhatsApp.
            </div>
          </div>
        </Link>

        <Link
          href="/dashboard/payouts"
          style={{ textDecoration: "none", color: "inherit", display: "block" }}
        >
          <div style={{ borderTop: "1px solid #C9C3B3", paddingTop: "24px" }}>
            <div className="h" style={{ fontSize: "20px", fontStyle: "italic", color: "#1F5F46" }}>
              Three
            </div>
            <h3 className="h" style={{ fontSize: "32px", margin: "10px 0" }}>
              Scan and get paid
            </h3>
            <div className="mut">
              Check guests in, even offline, and withdraw your balance.
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
