"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useEvent } from "@/context/EventContext";
import { formatMoney } from "@/lib/format";

export default function OrdersPage() {
  const { event, orders } = useEvent();
  const [search, setSearch] = useState("");
  const [filterMethod, setFilterMethod] = useState("all");

  // Sample default orders for realistic dashboard depth
  const defaultOrders = [
    {
      id: "ord_918204",
      attendee: "Chidi Okafor",
      tier: "General Admission",
      qty: 2,
      amount: 30000,
      method: "Bank transfer",
      date: "Just now",
      status: "Paid",
    },
    {
      id: "ord_882193",
      attendee: "Amaka Adeleke",
      tier: "VIP Table",
      qty: 1,
      amount: 50000,
      method: "Apple Pay",
      date: "10 mins ago",
      status: "Paid",
    },
    {
      id: "ord_761209",
      attendee: "Tunde Bakare",
      tier: "Early Bird",
      qty: 2,
      amount: 20000,
      method: "Card",
      date: "45 mins ago",
      status: "Paid",
    },
    {
      id: "ord_654102",
      attendee: "Zainab Mohammed",
      tier: "General Admission",
      qty: 4,
      amount: 60000,
      method: "Bank transfer",
      date: "2 hours ago",
      status: "Paid",
    },
    {
      id: "ord_541908",
      attendee: "Femi Adeleke",
      tier: "Early Bird",
      qty: 1,
      amount: 10000,
      method: "USSD",
      date: "5 hours ago",
      status: "Paid",
    },
  ];

  const totalRevenue =
    defaultOrders.reduce((acc, o) => acc + o.amount, 0) +
    orders.reduce((acc, o) => acc + (typeof o.subtotal === "number" ? o.subtotal : 0), 0);
  const totalTickets =
    defaultOrders.reduce((acc, o) => acc + o.qty, 0) +
    orders.reduce((acc, o) => acc + o.items.reduce((s, i) => s + i.quantity, 0), 0);

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
          <div className="lbl">Dashboard</div>
          <h1 className="h" style={{ fontSize: "48px", marginTop: "10px" }}>
            Orders & Revenue
          </h1>
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <Link href="/dashboard/events/new" className="btn btn2">
            Edit event
          </Link>
          <Link href={`/e/${event.slug || "rooftop-sessions"}`} className="btn">
            View public page
          </Link>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid3" style={{ marginBottom: "32px" }}>
        <div className="card">
          <div className="lbl">Gross Sales</div>
          <h3 className="h" style={{ fontSize: "36px", margin: "12px 0 6px" }}>
            {formatMoney(totalRevenue, "NGN")}
          </h3>
          <div className="mut" style={{ fontSize: "14px" }}>
            Instant payout ready
          </div>
        </div>
        <div className="card">
          <div className="lbl">Tickets Sold</div>
          <h3 className="h" style={{ fontSize: "36px", margin: "12px 0 6px" }}>
            {totalTickets} / {event.tiers.reduce((a, b) => a + (b.quantity || 0), 0)}
          </h3>
          <div className="mut" style={{ fontSize: "14px" }}>
            Across {event.tiers.length} active tiers
          </div>
        </div>
        <div className="card">
          <div className="lbl">Settlement Status</div>
          <h3 className="h" style={{ fontSize: "36px", margin: "12px 0 6px", color: "#1F5F46" }}>
            Instant
          </h3>
          <div className="mut" style={{ fontSize: "14px" }}>
            Direct to Wema Bank •••• 4910
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div
        className="card dashboard-filters"
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
          placeholder="Search by order ID, attendee name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="dashboard-filter-options" style={{ display: "flex", gap: "10px" }}>
          {["all", "bank_transfer", "card", "apple_pay"].map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setFilterMethod(m)}
              className="btn btn2"
              style={{
                minHeight: "38px",
                padding: "0 18px",
                fontSize: "13px",
                background: filterMethod === m ? "#EDE8DC" : "transparent",
              }}
            >
              {m === "all" ? "All Methods" : m.replace("_", " ").toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Orders Table */}
      <div className="card responsive-table" style={{ padding: "0", overflow: "hidden" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1.6fr 1.5fr 1fr 1.2fr 1fr",
            padding: "16px 24px",
            background: "#F6F3EC",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.1em",
            color: "#5B6472",
            borderBottom: "1px solid #E2DDD1",
          }}
        >
          <span>ORDER ID</span>
          <span>ATTENDEE</span>
          <span>TIER</span>
          <span>QTY</span>
          <span>AMOUNT</span>
          <span>STATUS</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {defaultOrders.map((order) => (
            <div
              key={order.id}
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 1.6fr 1.5fr 1fr 1.2fr 1fr",
                padding: "18px 24px",
                alignItems: "center",
                borderBottom: "1px solid #E2DDD1",
                fontSize: "14px",
              }}
            >
              <span style={{ fontFamily: "monospace", fontWeight: 600, color: "#0F1B2D" }}>
                {order.id}
              </span>
              <div>
                <div style={{ fontWeight: 500, color: "#0F1B2D" }}>{order.attendee}</div>
                <div style={{ fontSize: "12px", color: "#5B6472" }}>{order.date}</div>
              </div>
              <span style={{ color: "#0F1B2D" }}>{order.tier}</span>
              <span style={{ color: "#5B6472" }}>{order.qty}</span>
              <span style={{ fontWeight: 600, color: "#0F1B2D" }}>
                {formatMoney(order.amount, "NGN")}
              </span>
              <div>
                <span
                  style={{
                    display: "inline-block",
                    padding: "4px 10px",
                    borderRadius: "999px",
                    background: "#E2F0EA",
                    color: "#1F5F46",
                    fontSize: "12px",
                    fontWeight: 600,
                  }}
                >
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
