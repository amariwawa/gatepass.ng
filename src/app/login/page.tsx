"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [step, setStep] = useState<"input" | "code">("input");
  const [code, setCode] = useState("");

  const handleSendCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier) return;
    setStep("code");
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    // Instant demo login success -> route to dashboard
    router.push("/dashboard/events/new");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F6F3EC",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "32px 24px",
      }}
    >
      <Link
        href="/"
        className="h"
        style={{
          fontSize: "32px",
          fontWeight: 500,
          color: "#0F1B2D",
          marginBottom: "32px",
          textDecoration: "none",
        }}
      >
        Gatepass
      </Link>

      <div className="card" style={{ width: "100%", maxWidth: "440px", padding: "40px" }}>
        <div className="lbl">Organizer & Attendee Access</div>
        <h1 className="h" style={{ fontSize: "36px", margin: "14px 0 10px" }}>
          Sign in to Gatepass
        </h1>
        <p className="mut" style={{ fontSize: "15px", marginBottom: "28px" }}>
          Instant passwordless sign in via WhatsApp message or email link.
        </p>

        {step === "input" ? (
          <form onSubmit={handleSendCode} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <div>
              <label className="fl" htmlFor="ident">
                WhatsApp Number or Email
              </label>
              <input
                id="ident"
                className="inp"
                placeholder="+234 801 234 5678 or you@domain.com"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
                autoFocus
              />
            </div>
            <button type="submit" className="btn" style={{ width: "100%" }}>
              Send Sign-in Code
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerify} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <div>
              <label className="fl" htmlFor="code">
                Enter 4-digit code sent to {identifier}
              </label>
              <input
                id="code"
                className="inp"
                maxLength={4}
                placeholder="••••"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                style={{ textAlign: "center", fontSize: "22px", letterSpacing: "8px" }}
                required
                autoFocus
              />
              <div style={{ fontSize: "12px", color: "#5B6472", marginTop: "8px", textAlign: "center" }}>
                Demo code: enter any 4 digits to enter dashboard
              </div>
            </div>
            <button type="submit" className="btn" style={{ width: "100%" }}>
              Verify & Enter Dashboard
            </button>
            <button
              type="button"
              onClick={() => setStep("input")}
              style={{
                background: "transparent",
                border: 0,
                color: "#5B6472",
                fontSize: "13px",
                cursor: "pointer",
              }}
            >
              Use a different number or email
            </button>
          </form>
        )}

        <div style={{ marginTop: "32px", borderTop: "1px solid #E2DDD1", paddingTop: "20px", textAlign: "center" }}>
          <Link href="/dashboard/events/new" style={{ fontSize: "14px", color: "#1F5F46", fontWeight: 600 }}>
            Or create a new event without an account →
          </Link>
        </div>
      </div>
    </div>
  );
}
