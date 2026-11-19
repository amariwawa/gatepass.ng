"use client";

import React, { useState } from "react";
import { formatMoney } from "@/lib/format";

interface Attendee {
  id: string;
  ticketNo: string;
  name: string;
  tier: string;
  phone: string;
  deliveryStatus: "Delivered to WhatsApp" | "Opened" | "Pending";
  checkedIn: boolean;
  checkInTime?: string;
}

export default function AttendeesPage() {
  const [attendees, setAttendees] = useState<Attendee[]>([
    {
      id: "att_1",
      ticketNo: "Ticket No. 0001",
      name: "Chidi Okafor",
      tier: "General Admission",
      phone: "+234 802 345 6789",
      deliveryStatus: "Delivered to WhatsApp",
      checkedIn: true,
      checkInTime: "6:14 PM",
    },
    {
      id: "att_2",
      ticketNo: "Ticket No. 0002",
      name: "Amaka Adeleke",
      tier: "VIP Table",
      phone: "+234 803 456 7890",
      deliveryStatus: "Delivered to WhatsApp",
      checkedIn: false,
    },
    {
      id: "att_3",
      ticketNo: "Ticket No. 0003",
      name: "Tunde Bakare",
      tier: "Early Bird",
      phone: "+234 805 567 8901",
      deliveryStatus: "Opened",
      checkedIn: true,
      checkInTime: "6:05 PM",
    },
    {
      id: "att_4",
      ticketNo: "Ticket No. 0004",
      name: "Zainab Mohammed",
      tier: "General Admission",
      phone: "+234 809 678 9012",
      deliveryStatus: "Delivered to WhatsApp",
      checkedIn: false,
    },
    {
      id: "att_5",
      ticketNo: "Ticket No. 0005",
      name: "Femi Adeleke",
      tier: "Early Bird",
      phone: "+234 810 789 0123",
      deliveryStatus: "Delivered to WhatsApp",
      checkedIn: false,
    },
  ]);

  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "checked_in" | "not_checked_in">("all");

  const toggleCheckIn = (id: string) => {
    setAttendees((prev) =>
      prev.map((att) =>
        att.id === id
          ? {
              ...att,
              checkedIn: !att.checkedIn,
              checkInTime: !att.checkedIn ? new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : undefined,
            }
          : att
      )
    );
  };

  const filtered = attendees.filter((a) => {
    const matchesSearch =
      a.name.toLowerCase().includes(query.toLowerCase()) ||
      a.ticketNo.toLowerCase().includes(query.toLowerCase()) ||
      a.phone.includes(query);
    if (filter === "checked_in") return matchesSearch && a.checkedIn;
    if (filter === "not_checked_in") return matchesSearch && !a.checkedIn;
    return matchesSearch;
  });

  const checkedInCount = attendees.filter((a) => a.checkedIn).length;

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
          <div className="lbl">Gate Management</div>
          <h1 className="h" style={{ fontSize: "48px", marginTop: "10px" }}>
            Attendees & Check-in
          </h1>
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <button
            type="button"
            className="btn btn2"
            onClick={() => alert("Attendee roster exported to CSV")}
          >
            Export CSV
          </button>
        </div>
      </div>

      <div className="grid3" style={{ marginBottom: "32px" }}>
        <div className="card">
          <div className="lbl">Total Registered</div>
          <h3 className="h" style={{ fontSize: "36px", margin: "12px 0 6px" }}>
            {attendees.length}
          </h3>
          <div className="mut" style={{ fontSize: "14px" }}>
            Tickets delivered to WhatsApp
          </div>
        </div>
        <div className="card">
          <div className="lbl">Checked In</div>
          <h3 className="h" style={{ fontSize: "36px", margin: "12px 0 6px", color: "#1F5F46" }}>
            {checkedInCount} ({Math.round((checkedInCount / attendees.length) * 100)}%)
          </h3>
          <div className="mut" style={{ fontSize: "14px" }}>
            Live gate entries
          </div>
        </div>
        <div className="card">
          <div className="lbl">Remaining Outside</div>
          <h3 className="h" style={{ fontSize: "36px", margin: "12px 0 6px" }}>
            {attendees.length - checkedInCount}
          </h3>
          <div className="mut" style={{ fontSize: "14px" }}>
            Scanners operational
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div
        className="card"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
          marginBottom: "24px",
          padding: "16px 24px",
        }}
      >
        <input
          className="inp"
          style={{ maxWidth: "360px" }}
          placeholder="Search by attendee name, ticket number, or phone..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            type="button"
            onClick={() => setFilter("all")}
            className="btn btn2"
            style={{
              minHeight: "38px",
              padding: "0 18px",
              fontSize: "13px",
              background: filter === "all" ? "#EDE8DC" : "transparent",
            }}
          >
            All ({attendees.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter("checked_in")}
            className="btn btn2"
            style={{
              minHeight: "38px",
              padding: "0 18px",
              fontSize: "13px",
              background: filter === "checked_in" ? "#EDE8DC" : "transparent",
            }}
          >
            Checked In ({checkedInCount})
          </button>
          <button
            type="button"
            onClick={() => setFilter("not_checked_in")}
            className="btn btn2"
            style={{
              minHeight: "38px",
              padding: "0 18px",
              fontSize: "13px",
              background: filter === "not_checked_in" ? "#EDE8DC" : "transparent",
            }}
          >
            Not Checked In ({attendees.length - checkedInCount})
          </button>
        </div>
      </div>

      {/* Attendees Table */}
      <div className="card" style={{ padding: "0", overflow: "hidden" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1.6fr 1.5fr 1.8fr 1.2fr",
            padding: "16px 24px",
            background: "#F6F3EC",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.1em",
            color: "#5B6472",
            borderBottom: "1px solid #E2DDD1",
          }}
        >
          <span>TICKET NO.</span>
          <span>ATTENDEE</span>
          <span>TIER</span>
          <span>DELIVERY</span>
          <span>ACTION</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {filtered.map((att) => (
            <div
              key={att.id}
              style={{
                display: "grid",
                gridTemplateColumns: "1.4fr 1.6fr 1.5fr 1.8fr 1.2fr",
                padding: "18px 24px",
                alignItems: "center",
                borderBottom: "1px solid #E2DDD1",
                fontSize: "14px",
              }}
            >
              <span style={{ fontFamily: "monospace", fontWeight: 600, color: "#0F1B2D" }}>
                {att.ticketNo}
              </span>
              <div>
                <div style={{ fontWeight: 500, color: "#0F1B2D" }}>{att.name}</div>
                <div style={{ fontSize: "12px", color: "#5B6472" }}>{att.phone}</div>
              </div>
              <span style={{ color: "#0F1B2D" }}>{att.tier}</span>
              <div>
                <span
                  style={{
                    display: "inline-block",
                    padding: "3px 8px",
                    borderRadius: "6px",
                    background: "#EDE8DC",
                    color: "#0F1B2D",
                    fontSize: "12px",
                  }}
                >
                  {att.deliveryStatus}
                </span>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => toggleCheckIn(att.id)}
                  style={{
                    padding: "6px 14px",
                    borderRadius: "999px",
                    fontSize: "12px",
                    fontWeight: 600,
                    cursor: "pointer",
                    border: att.checkedIn ? "1px solid #1F5F46" : "1px solid #C9C3B3",
                    background: att.checkedIn ? "#1F5F46" : "transparent",
                    color: att.checkedIn ? "#F6F3EC" : "#0F1B2D",
                    transition: "all 0.15s ease",
                  }}
                >
                  {att.checkedIn ? `Checked In ${att.checkInTime || ""}` : "Check In"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
