"use client";

import React, { useState } from "react";
import { formatMoney } from "@/lib/format";

export default function PayoutsPage() {
  const [balance, setBalance] = useState(160000);
  const [history, setHistory] = useState([
    {
      id: "pay_001928",
      date: "Today, 4:15 PM",
      amount: 85000,
      bank: "Wema Bank •••• 4910",
      status: "Settled instantly (3.2s)",
    },
    {
      id: "pay_001854",
      date: "Yesterday, 11:30 PM",
      amount: 140000,
      bank: "Wema Bank •••• 4910",
      status: "Settled instantly (2.8s)",
    },
    {
      id: "pay_001712",
      date: "18 Nov, 2:00 PM",
      amount: 75000,
      bank: "Wema Bank •••• 4910",
      status: "Settled instantly (3.9s)",
    },
  ]);

  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [alertMsg, setAlertMsg] = useState<string | null>(null);

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault();
    const amt = Number(withdrawAmount) || balance;
    if (amt <= 0 || amt > balance) {
      alert("Invalid withdrawal amount");
      return;
    }

    const newRecord = {
      id: "pay_" + Math.floor(100000 + Math.random() * 900000),
      date: "Just now",
      amount: amt,
      bank: "Wema Bank •••• 4910",
      status: "Settled instantly (2.4s)",
    };

    setBalance((prev) => prev - amt);
    setHistory([newRecord, ...history]);
    setWithdrawAmount("");
    setAlertMsg(`Payout of ${formatMoney(amt, "NGN")} sent instantly to Wema Bank •••• 4910!`);
    setTimeout(() => setAlertMsg(null), 5000);
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
          <div className="lbl">Financial Settlement</div>
          <h1 className="h" style={{ fontSize: "48px", marginTop: "10px" }}>
            Instant Payouts
          </h1>
        </div>
      </div>

      {alertMsg && (
        <div
          style={{
            background: "#1F5F46",
            color: "#F6F3EC",
            padding: "16px 24px",
            borderRadius: "12px",
            marginBottom: "24px",
            fontWeight: 600,
          }}
        >
          {alertMsg}
        </div>
      )}

      {/* Balance Overview Card */}
      <div className="grid3" style={{ marginBottom: "32px" }}>
        <div className="card" style={{ background: "#0F1B2D", color: "#F6F3EC", borderColor: "#0F1B2D" }}>
          <div className="lbl" style={{ color: "#8FD3B1" }}>
            Available to Withdraw
          </div>
          <h2 className="h" style={{ fontSize: "44px", margin: "14px 0 6px" }}>
            {formatMoney(balance, "NGN")}
          </h2>
          <div style={{ color: "#B8C2D1", fontSize: "14px" }}>
            Zero hold period. Ready for instant transfer.
          </div>
        </div>

        <div className="card">
          <div className="lbl">Connected Settlement Bank</div>
          <div className="h" style={{ fontSize: "24px", margin: "14px 0 6px" }}>
            Wema Bank Plc
          </div>
          <div className="mut" style={{ fontSize: "14px" }}>
            Account: 024 •••• 4910 (Gatepass Live Ltd)
          </div>
          <div style={{ marginTop: "12px", fontSize: "13px", color: "#1F5F46", fontWeight: 600 }}>
            Verified via NIBSS
          </div>
        </div>

        <div className="card">
          <div className="lbl">Total Settled to Date</div>
          <h3 className="h" style={{ fontSize: "36px", margin: "14px 0 6px" }}>
            {formatMoney(300000 + (160000 - balance), "NGN")}
          </h3>
          <div className="mut" style={{ fontSize: "14px" }}>
            Automatic NGN clearing
          </div>
        </div>
      </div>

      {/* Withdrawal Form & Payout History */}
      <div className="two" style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "24px" }}>
        <div className="card">
          <h2 className="h" style={{ fontSize: "28px", marginBottom: "16px" }}>
            Withdraw Funds
          </h2>
          <p className="mut" style={{ fontSize: "14px", marginBottom: "20px" }}>
            Withdraw your balance as sales come in. No waiting for the event to end to see your money.
          </p>

          <form onSubmit={handleWithdraw} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <label className="fl" htmlFor="pamt">
                Amount (₦)
              </label>
              <input
                id="pamt"
                className="inp"
                placeholder={`Max: ${balance.toLocaleString("en-US")}`}
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
              />
            </div>
            <button
              type="submit"
              disabled={balance <= 0}
              className="btn"
              style={{ width: "100%", opacity: balance > 0 ? 1 : 0.5 }}
            >
              Withdraw to Bank Instantly
            </button>
          </form>
        </div>

        <div className="card" style={{ padding: "0", overflow: "hidden" }}>
          <div
            style={{
              padding: "20px 24px",
              borderBottom: "1px solid #E2DDD1",
              background: "#F6F3EC",
            }}
          >
            <h2 className="h" style={{ fontSize: "24px" }}>
              Settlement History
            </h2>
          </div>
          <div>
            {history.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px 24px",
                  borderBottom: "1px solid #E2DDD1",
                }}
              >
                <div>
                  <div style={{ fontWeight: 600, color: "#0F1B2D" }}>{formatMoney(item.amount, "NGN")}</div>
                  <div style={{ fontSize: "12px", color: "#5B6472", marginTop: "2px" }}>
                    {item.bank} • {item.date}
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "4px 8px",
                      borderRadius: "6px",
                      background: "#E2F0EA",
                      color: "#1F5F46",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
