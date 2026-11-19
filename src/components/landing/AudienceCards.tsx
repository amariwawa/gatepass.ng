import React from "react";
import Link from "next/link";

export function AudienceCards() {
  return (
    <section id="organizers" className="wrap" style={{ paddingBottom: "112px" }}>
      <div className="grid2">
        <Link
          href="/dashboard/events/new"
          style={{ textDecoration: "none", color: "inherit", display: "block" }}
        >
          <div className="card" style={{ padding: "48px", height: "100%", boxSizing: "border-box" }}>
            <div className="lbl">For organizers</div>
            <h3
              className="h"
              style={{ fontSize: "40px", lineHeight: 1.1, margin: "16px 0 20px" }}
            >
              Run the entire night from one screen.
            </h3>
            <div className="mut">
              Live sales dashboard, promo and affiliate codes, tiered pricing, team scanner
              invites, waitlists and one-tap attendee messaging.
            </div>
          </div>
        </Link>

        <Link
          href="/e/rooftop-sessions"
          style={{ textDecoration: "none", color: "inherit", display: "block" }}
        >
          <div
            className="card"
            style={{
              padding: "48px",
              background: "#0F1B2D",
              borderColor: "#0F1B2D",
              color: "#F6F3EC",
              height: "100%",
              boxSizing: "border-box",
            }}
          >
            <div className="lbl" style={{ color: "#8FD3B1" }}>
              For attendees
            </div>
            <h3
              className="h"
              style={{ fontSize: "40px", lineHeight: 1.1, margin: "16px 0 20px" }}
            >
              Buy in under a minute. Split with friends.
            </h3>
            <div style={{ lineHeight: 1.65, color: "#B8C2D1" }}>
              Group buy with split payments, a wallet for every ticket, two-tap transfers and
              reminders before doors open.
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
