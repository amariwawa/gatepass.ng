import React from "react";
import Link from "next/link";

export function Nav() {
  return (
    <nav
      className="wrap"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: "28px",
        paddingBottom: "28px",
      }}
    >
      <Link href="/" className="h" style={{ fontSize: "28px", fontWeight: 500 }}>
        Gatepass
      </Link>
      <div className="navl" style={{ display: "flex", gap: "36px", fontSize: "15px" }}>
        <a href="#features">Platform</a>
        <a href="#organizers">Organizers</a>
        <Link href="/pricing">Pricing</Link>
        <Link href="/login">Sign in</Link>
      </div>
      <Link href="/dashboard/events/new" className="btn" style={{ minHeight: "44px" }}>
        Create event
      </Link>
    </nav>
  );
}
