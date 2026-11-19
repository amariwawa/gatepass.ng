import React from "react";
import Link from "next/link";

export function TicketPreview() {
  return (
    <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
      <Link
        href="/e/rooftop-sessions"
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "#0F1B2D",
          color: "#F6F3EC",
          borderRadius: "24px",
          padding: "36px",
          boxSizing: "border-box",
          transform: "rotate(2deg)",
          display: "block",
          textDecoration: "none",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.12em",
            color: "#A9B4C4",
          }}
        >
          <span>GENERAL ADMISSION</span>
          <span>SAT · 20 DEC</span>
        </div>
        <div className="h" style={{ fontSize: "40px", margin: "24px 0 8px", lineHeight: 1.05 }}>
          Rooftop Sessions
        </div>
        <div style={{ color: "#A9B4C4", fontSize: "15px" }}>
          December Edition · Lagos · Doors 6:00 PM
        </div>
        <div style={{ borderTop: "1px dashed #3C4A60", margin: "32px -36px" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: "13px", color: "#A9B4C4" }}>Delivered to WhatsApp</div>
            <div className="h" style={{ fontSize: "24px", marginTop: "6px" }}>
              Ticket No. 0001
            </div>
          </div>
          <div className="qr" />
        </div>
      </Link>
      <div
        style={{
          position: "absolute",
          left: 0,
          bottom: "-20px",
          background: "#FFFFFF",
          border: "1px solid #E2DDD1",
          color: "#0F1B2D",
          borderRadius: "12px",
          padding: "12px 18px",
          fontWeight: 500,
          fontSize: "14px",
          boxShadow: "0 8px 24px rgba(15,27,45,.12)",
        }}
      >
        Payout sent. Instantly.
      </div>
    </div>
  );
}
