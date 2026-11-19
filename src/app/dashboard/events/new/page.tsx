"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEvent } from "@/context/EventContext";
import { EventForm } from "@/components/dashboard/EventForm";
import { TierTable } from "@/components/dashboard/TierTable";
import { SalesSettings } from "@/components/dashboard/SalesSettings";
import { LivePreview } from "@/components/dashboard/LivePreview";
import { SalesLink } from "@/components/dashboard/SalesLink";

export default function NewEventPage() {
  const router = useRouter();
  const {
    event,
    updateEvent,
    updateTier,
    addTier,
    removeTier,
    toggleSalesSetting,
  } = useEvent();

  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("1 Details");
  const [toast, setToast] = useState<string | null>(null);

  const slug =
    event.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") || "rooftop-sessions";

  const lowestPrice =
    event.tiers.length > 0
      ? Math.min(...event.tiers.map((t) => t.price))
      : 0;

  const totalCapacity = event.tiers.reduce((acc, t) => acc + (t.quantity || 0), 0);

  const handleSaveDraft = (e: React.MouseEvent) => {
    e.preventDefault();
    setSaving(true);
    setToast("Draft saved to your browser session.");
    setTimeout(() => {
      setSaving(false);
      setToast(null);
    }, 2500);
  };

  const handlePublish = (e: React.MouseEvent) => {
    e.preventDefault();
    updateEvent({ slug });
    setToast("Event published successfully! Opening public ticket page...");
    setTimeout(() => {
      router.push(`/e/${slug}`);
    }, 600);
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (tab === "3 Payout") {
      router.push("/dashboard/payouts");
    } else if (tab === "4 Publish") {
      handlePublish({ preventDefault: () => {} } as React.MouseEvent);
    }
  };

  return (
    <div style={{ padding: "40px 48px", boxSizing: "border-box" }}>
      {toast && (
        <div
          style={{
            position: "fixed",
            top: "24px",
            right: "24px",
            background: "#0F1B2D",
            color: "#F6F3EC",
            padding: "14px 22px",
            borderRadius: "12px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
            zIndex: 100,
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          ✓ {toast}
        </div>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div>
          <div className="lbl">New event</div>
          <h1 className="h" style={{ fontSize: "48px", marginTop: "10px" }}>
            Create your event
          </h1>
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <button
            type="button"
            onClick={handleSaveDraft}
            className="btn btn2"
          >
            {saving ? "Saved" : "Save draft"}
          </button>
          <button
            type="button"
            onClick={handlePublish}
            className="btn"
          >
            Publish event
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "28px",
          margin: "32px 0",
          fontSize: "14px",
          fontWeight: 500,
          flexWrap: "wrap",
        }}
      >
        {["1 Details", "2 Tickets", "3 Payout", "4 Publish"].map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => handleTabClick(t)}
            style={{
              background: "transparent",
              border: 0,
              padding: "0 0 8px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: 500,
              fontFamily: "inherit",
              borderBottom: activeTab === t ? "2px solid #0F1B2D" : "2px solid transparent",
              color: activeTab === t ? "#0F1B2D" : "#5B6472",
            }}
          >
            {t}
          </button>
        ))}
      </div>

      <div
        className="two"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 340px",
          gap: "24px",
          alignItems: "start",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <EventForm
            name={event.name}
            date={event.date}
            doorsOpen={event.doorsOpen}
            venue={event.venue}
            description={event.description}
            onChange={(fields) => updateEvent(fields)}
          />

          <TierTable
            tiers={event.tiers}
            onAddTier={() => addTier()}
            onUpdateTier={updateTier}
            onRemoveTier={removeTier}
          />

          <SalesSettings
            settings={event.salesSettings}
            onToggle={toggleSalesSetting}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <Link
            href={`/e/${slug}`}
            style={{ textDecoration: "none", color: "inherit", display: "block" }}
            title="Click to preview public ticket page"
          >
            <LivePreview
              name={event.name}
              date={event.date}
              venue={event.venue}
              lowestPrice={lowestPrice}
              totalCapacity={totalCapacity}
            />
          </Link>

          <SalesLink slug={slug} />

          <Link
            href="/dashboard/payouts"
            style={{ textDecoration: "none", color: "inherit", display: "block" }}
          >
            <div className="card">
              <div className="lbl">Payout</div>
              <div className="mut" style={{ marginTop: "10px" }}>
                Withdraw your balance at any time once sales begin →
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
