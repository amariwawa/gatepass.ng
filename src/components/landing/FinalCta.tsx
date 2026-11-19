import React from "react";
import Link from "next/link";

export function FinalCta() {
  return (
    <section className="wrap" style={{ paddingBottom: "112px" }}>
      <div
        style={{
          background: "#0F1B2D",
          color: "#F6F3EC",
          borderRadius: "28px",
          padding: "96px 48px",
          textAlign: "center",
        }}
      >
        <h2
          className="h"
          style={{ fontSize: "68px", lineHeight: 1.03, margin: "0 auto", maxWidth: "760px" }}
        >
          Your next sell-out starts here.
        </h2>
        <div style={{ marginTop: "40px" }}>
          <Link
            href="/dashboard/events/new"
            className="btn"
            style={{ background: "#F6F3EC", color: "#0F1B2D" }}
          >
            Create your event
          </Link>
        </div>
      </div>
    </section>
  );
}
