"use client";

import React, { useState } from "react";

export default function ScannersPage() {
  const [scanners, setScanners] = useState([
    { id: "1", name: "Main Entrance Scanner 1", staff: "Emeka Nwosu", status: "Online", scans: 142, battery: "92%" },
    { id: "2", name: "VIP Gate Scanner", staff: "Kemi Adeleke", status: "Online", scans: 48, battery: "84%" },
    { id: "3", name: "Rooftop Access Scanner", staff: "Babajide S.", status: "Offline (Local Sync Active)", scans: 89, battery: "71%" },
  ]);

  const [staffName, setStaffName] = useState("");
  const [gateName, setGateName] = useState("");
  const [scanResult, setScanResult] = useState<string | null>(null);

  const handleAddScanner = (e: React.FormEvent) => {
    e.preventDefault();
    if (!staffName || !gateName) return;
    setScanners([
      ...scanners,
      {
        id: String(Date.now()),
        name: gateName,
        staff: staffName,
        status: "Online",
        scans: 0,
        battery: "100%",
      },
    ]);
    setStaffName("");
    setGateName("");
  };

  const handleSimulateScan = (ticketNo: string) => {
    setScanResult(`VALID: ${ticketNo} • General Admission • Entry Granted`);
    setTimeout(() => setScanResult(null), 4000);
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
          <div className="lbl">Entry Infrastructure</div>
          <h1 className="h" style={{ fontSize: "48px", marginTop: "10px" }}>
            Offline Gate Scanners
          </h1>
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <button
            type="button"
            onClick={() => handleSimulateScan("Ticket No. 0001")}
            className="btn"
          >
            Simulate Scan (Test QR)
          </button>
        </div>
      </div>

      {scanResult && (
        <div
          style={{
            background: "#1F5F46",
            color: "#F6F3EC",
            padding: "16px 24px",
            borderRadius: "12px",
            marginBottom: "24px",
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>{scanResult}</span>
          <span style={{ fontSize: "12px", background: "rgba(255,255,255,0.2)", padding: "4px 8px", borderRadius: "6px" }}>
            Rotating QR Verified
          </span>
        </div>
      )}

      {/* Info Card */}
      <div
        className="card"
        style={{
          background: "#0F1B2D",
          color: "#F6F3EC",
          borderColor: "#0F1B2D",
          marginBottom: "32px",
          padding: "32px",
        }}
      >
        <div className="lbl" style={{ color: "#8FD3B1" }}>
          Patented Technology
        </div>
        <h2 className="h" style={{ fontSize: "32px", margin: "12px 0 10px" }}>
          Rotating QR Codes + Local Mesh Sync
        </h2>
        <div style={{ color: "#B8C2D1", fontSize: "15px", lineHeight: 1.6, maxWidth: "680px" }}>
          Gatepass tickets feature dynamic rotating QR codes that refresh every 15 seconds to prevent
          screenshot resale and scalping. Scanners cache the cryptographically signed roster offline,
          so guest entry never stalls when venue connectivity drops.
        </div>
      </div>

      {/* Scanner List & Invite Form */}
      <div className="two" style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "24px" }}>
        <div className="card">
          <h2 className="h" style={{ fontSize: "28px", marginBottom: "20px" }}>
            Active Team Scanners
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {scanners.map((s) => (
              <div
                key={s.id}
                style={{
                  border: "1px solid #E2DDD1",
                  borderRadius: "12px",
                  padding: "16px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontWeight: 600, color: "#0F1B2D" }}>{s.name}</div>
                  <div style={{ fontSize: "13px", color: "#5B6472", marginTop: "2px" }}>
                    Staff: {s.staff} • Battery: {s.battery}
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "3px 8px",
                      borderRadius: "6px",
                      background: s.status.includes("Online") ? "#E2F0EA" : "#EDE8DC",
                      color: s.status.includes("Online") ? "#1F5F46" : "#0F1B2D",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    {s.status}
                  </span>
                  <div style={{ fontSize: "12px", color: "#5B6472", marginTop: "4px" }}>
                    {s.scans} check-ins
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="h" style={{ fontSize: "28px", marginBottom: "20px" }}>
            Invite Scanner Staff
          </h2>
          <form onSubmit={handleAddScanner} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <label className="fl" htmlFor="sname">
                Staff Name
              </label>
              <input
                id="sname"
                className="inp"
                placeholder="e.g. David Alabi"
                value={staffName}
                onChange={(e) => setStaffName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="fl" htmlFor="gname">
                Gate / Zone
              </label>
              <input
                id="gname"
                className="inp"
                placeholder="e.g. North Gate 2"
                value={gateName}
                onChange={(e) => setGateName(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn" style={{ width: "100%", marginTop: "8px" }}>
              Send Scanner Access Link
            </button>
            <div className="mut" style={{ fontSize: "13px", textAlign: "center" }}>
              Scanner link opens directly in mobile web without app install required.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
