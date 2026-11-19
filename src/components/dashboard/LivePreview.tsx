import React from "react";
import { formatMoney } from "@/lib/format";

interface LivePreviewProps {
  name: string;
  date: string;
  venue: string;
  lowestPrice: number;
  totalCapacity: number;
}

export function LivePreview({
  name,
  date,
  venue,
  lowestPrice,
  totalCapacity,
}: LivePreviewProps) {
  return (
    <div
      className="card"
      style={{
        background: "#0F1B2D",
        borderColor: "#0F1B2D",
        color: "#F6F3EC",
      }}
    >
      <div className="lbl" style={{ color: "#8FD3B1" }}>
        Live preview
      </div>
      <div className="h" style={{ fontSize: "32px", margin: "14px 0 6px", lineHeight: 1.1 }}>
        {name}
      </div>
      <div style={{ color: "#B8C2D1", fontSize: "14px" }}>
        {[date, venue].filter(Boolean).join(" · ")}
      </div>
      <div style={{ borderTop: "1px dashed #3C4A60", margin: "20px 0" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "14px",
          color: "#B8C2D1",
        }}
      >
        <span>From</span>
        <span style={{ color: "#F6F3EC", fontWeight: 600 }}>
          {formatMoney(lowestPrice, "NGN")}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "14px",
          color: "#B8C2D1",
          marginTop: "8px",
        }}
      >
        <span>Total capacity</span>
        <span style={{ color: "#F6F3EC", fontWeight: 600 }}>
          {totalCapacity.toLocaleString("en-US")}
        </span>
      </div>
    </div>
  );
}
