import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="wrap"
      style={{
        paddingBottom: "56px",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "16px",
        color: "#5B6472",
        fontSize: "14px",
      }}
    >
      <span>© Gatepass. All rights reserved.</span>
      <span style={{ display: "flex", gap: "28px" }}>
        <Link href="/terms">Terms</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/contact">Contact</Link>
      </span>
    </footer>
  );
}
