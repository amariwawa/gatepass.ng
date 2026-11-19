"use client";

import React, { useState } from "react";

export default function SettingsPage() {
  const [orgName, setOrgName] = useState("Rooftop Live Lagos");
  const [whatsapp, setWhatsapp] = useState("+234 801 234 5678");
  const [email, setEmail] = useState("organizer@rooftopsessions.ng");
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div style={{ padding: "40px 48px", boxSizing: "border-box" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "16px",
          marginBottom: "32px",
        }}
      >
        <div>
          <div className="lbl">Preferences</div>
          <h1 className="h" style={{ fontSize: "48px", marginTop: "10px" }}>
            Organizer Settings
          </h1>
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <button type="button" onClick={handleSave} className="btn">
            {saved ? "Saved Successfully" : "Save Changes"}
          </button>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "780px" }}>
        <div className="card">
          <h2 className="h" style={{ fontSize: "28px", marginBottom: "20px" }}>
            Organization Profile
          </h2>
          <div className="row">
            <div>
              <label className="fl" htmlFor="oname">
                Organization / Brand Name
              </label>
              <input
                id="oname"
                className="inp"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
              />
            </div>
            <div className="row" style={{ gridTemplateColumns: "1fr 1fr" }}>
              <div>
                <label className="fl" htmlFor="owa">
                  Official Support WhatsApp
                </label>
                <input
                  id="owa"
                  className="inp"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                />
              </div>
              <div>
                <label className="fl" htmlFor="oem">
                  Contact Email
                </label>
                <input
                  id="oem"
                  className="inp"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="h" style={{ fontSize: "28px", marginBottom: "20px" }}>
            WhatsApp Ticket Delivery Settings
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <label className="chk">
              <input type="checkbox" defaultChecked /> Send instant WhatsApp QR message on payment
            </label>
            <label className="chk">
              <input type="checkbox" defaultChecked /> Send 2-hour pre-doors event reminder
            </label>
            <label className="chk">
              <input type="checkbox" defaultChecked /> Include Google Maps venue pin in WhatsApp message
            </label>
          </div>
        </div>

        <div className="card">
          <h2 className="h" style={{ fontSize: "28px", marginBottom: "20px" }}>
            Settlement Bank Account
          </h2>
          <div className="row" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <div>
              <label className="fl">Bank</label>
              <div className="inp" style={{ display: "flex", alignItems: "center", background: "#F6F3EC", color: "#5B6472" }}>
                Wema Bank Plc
              </div>
            </div>
            <div>
              <label className="fl">Account Number</label>
              <div className="inp" style={{ display: "flex", alignItems: "center", background: "#F6F3EC", color: "#5B6472" }}>
                024 •••• 4910 (Verified)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
