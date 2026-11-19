import React from "react";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#F6F3EC" }}>
      <Nav />
      <main className="wrap" style={{ paddingTop: "40px", paddingBottom: "96px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div className="lbl">Data & Protection</div>
          <h1 className="h" style={{ fontSize: "52px", margin: "14px 0 24px" }}>
            Privacy Policy
          </h1>
          <div className="card" style={{ padding: "48px", display: "flex", flexDirection: "column", gap: "24px" }}>
            <section>
              <h2 className="h" style={{ fontSize: "26px", marginBottom: "8px" }}>
                1. WhatsApp Delivery
              </h2>
              <p className="mut" style={{ fontSize: "15px" }}>
                We use your WhatsApp telephone number exclusively for delivering encrypted rotating tickets, entry barcodes, and event gate notifications.
              </p>
            </section>
            <section>
              <h2 className="h" style={{ fontSize: "26px", marginBottom: "8px" }}>
                2. Payment Data
              </h2>
              <p className="mut" style={{ fontSize: "15px" }}>
                Payment processing is powered by certified PCI-DSS compliant banking partners. Card and bank credentials are never stored unencrypted on Gatepass servers.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
