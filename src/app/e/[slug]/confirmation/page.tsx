"use client";

import React from "react";
import Link from "next/link";
import { useEvent } from "@/context/EventContext";

export default function OrderConfirmationPage() {
  const { event } = useEvent();

  return (
    <div style={{ minHeight: "100vh", background: "#F6F3EC", padding: "48px 24px" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
        <Link
          href="/"
          className="h"
          style={{
            fontSize: "28px",
            fontWeight: 500,
            display: "inline-block",
            marginBottom: "32px",
            color: "#0F1B2D",
          }}
        >
          Gatepass
        </Link>

        <div style={{ marginBottom: "28px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              background: "#E2F0EA",
              color: "#1F5F46",
              borderRadius: "999px",
              fontSize: "13px",
              fontWeight: 600,
              marginBottom: "16px",
            }}
          >
            Payment Confirmed • WhatsApp Sent
          </div>
          <h1 className="h" style={{ fontSize: "44px", margin: "0 0 12px" }}>
            You&apos;re going to {event.name.split(":")[0]}!
          </h1>
          <p className="mut" style={{ fontSize: "16px", maxWidth: "460px", margin: "0 auto" }}>
            We&apos;ve sent your tickets and entry barcode directly to WhatsApp. Show your rotating QR code at the door.
          </p>
        </div>

        {/* Replica of the Hero Ticket Graphic */}
        <div style={{ display: "flex", justifyContent: "center", margin: "36px 0" }}>
          <div
            style={{
              width: "100%",
              maxWidth: "380px",
              background: "#0F1B2D",
              color: "#F6F3EC",
              borderRadius: "24px",
              padding: "32px",
              boxSizing: "border-box",
              textAlign: "left",
              boxShadow: "0 20px 40px rgba(15,27,45,0.18)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: "#A9B4C4",
              }}
            >
              <span>GENERAL ADMISSION</span>
              <span>SAT · 20 DEC</span>
            </div>
            <div className="h" style={{ fontSize: "34px", margin: "20px 0 6px", lineHeight: 1.05 }}>
              {event.name}
            </div>
            <div style={{ color: "#A9B4C4", fontSize: "14px" }}>
              {event.venue} · Doors {event.doorsOpen}
            </div>
            <div style={{ borderTop: "1px dashed #3C4A60", margin: "28px -32px" }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: "12px", color: "#A9B4C4" }}>Delivered to WhatsApp</div>
                <div className="h" style={{ fontSize: "22px", marginTop: "4px" }}>
                  Ticket No. 0001
                </div>
              </div>
              <div className="qr" style={{ width: "96px", height: "96px" }} />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "380px", margin: "0 auto" }}>
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ width: "100%", background: "#1F5F46" }}
          >
            Open Ticket in WhatsApp
          </a>
          <button
            type="button"
            onClick={() => alert("Added to Apple Wallet passbook")}
            className="btn btn2"
            style={{ width: "100%" }}
          >
            Add to Apple Wallet
          </button>
          <Link href="/events" className="btn btn2" style={{ width: "100%" }}>
            Find more events
          </Link>
        </div>
      </div>
    </div>
  );
}
