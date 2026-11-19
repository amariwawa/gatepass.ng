import React from "react";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";

export default function TermsPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#F6F3EC" }}>
      <Nav />
      <main className="wrap" style={{ paddingTop: "40px", paddingBottom: "96px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div className="lbl">Legal & Compliance</div>
          <h1 className="h" style={{ fontSize: "52px", margin: "14px 0 24px" }}>
            Terms of Service
          </h1>
          <div className="card" style={{ padding: "48px", display: "flex", flexDirection: "column", gap: "24px" }}>
            <section>
              <h2 className="h" style={{ fontSize: "26px", marginBottom: "8px" }}>
                1. Platform Overview
              </h2>
              <p className="mut" style={{ fontSize: "15px" }}>
                Gatepass provides event ticketing infrastructure, offline verification protocols, and automated settlement services for African and diaspora event organizers.
              </p>
            </section>
            <section>
              <h2 className="h" style={{ fontSize: "26px", marginBottom: "8px" }}>
                2. Instant Payouts & Settlement
              </h2>
              <p className="mut" style={{ fontSize: "15px" }}>
                Organizers may withdraw ticket revenue while their event is on sale, subject to verified KYC and standard fraud risk parameters.
              </p>
            </section>
            <section>
              <h2 className="h" style={{ fontSize: "26px", marginBottom: "8px" }}>
                3. Fair, Capped Resale
              </h2>
              <p className="mut" style={{ fontSize: "15px" }}>
                Secondary transfers are restricted to official face value to eliminate predatory scalping and ensure buyer security.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
