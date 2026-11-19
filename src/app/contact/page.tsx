"use client";

import React, { useState } from "react";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#F6F3EC" }}>
      <Nav />

      <main className="wrap" style={{ paddingTop: "40px", paddingBottom: "112px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div className="lbl">Support & Inquiries</div>
          <h1 className="h" style={{ fontSize: "56px", margin: "14px 0 16px" }}>
            Get in touch with Gatepass.
          </h1>
          <p className="mut" style={{ fontSize: "17px", marginBottom: "40px" }}>
            Whether you&apos;re organizing a 10,000-person festival, have a question about payout clearing, or need dedicated scanning hardware on site.
          </p>

          <div className="card" style={{ padding: "40px" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "32px 0" }}>
                <div className="h" style={{ fontSize: "32px", color: "#1F5F46", marginBottom: "12px" }}>
                  Message Received
                </div>
                <p className="mut">
                  Our team replies via WhatsApp and email within 30 minutes.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <label className="fl" htmlFor="cname">
                    Your Name
                  </label>
                  <input id="cname" className="inp" placeholder="Amara Okafor" required />
                </div>
                <div className="row" style={{ gridTemplateColumns: "1fr 1fr" }}>
                  <div>
                    <label className="fl" htmlFor="cwa">
                      WhatsApp Number
                    </label>
                    <input id="cwa" className="inp" placeholder="+234..." required />
                  </div>
                  <div>
                    <label className="fl" htmlFor="cemail">
                      Email Address
                    </label>
                    <input id="cemail" className="inp" placeholder="you@domain.com" type="email" required />
                  </div>
                </div>
                <div>
                  <label className="fl" htmlFor="cmsg">
                    How can we help?
                  </label>
                  <textarea
                    id="cmsg"
                    className="inp"
                    style={{ height: "120px", padding: "14px", resize: "none" }}
                    placeholder="Tell us about your upcoming event, expected capacity, or question..."
                    required
                  />
                </div>
                <button type="submit" className="btn" style={{ width: "100%" }}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
