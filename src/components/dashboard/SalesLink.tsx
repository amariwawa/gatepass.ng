"use client";

import React, { useState } from "react";

interface SalesLinkProps {
  slug: string;
}

export function SalesLink({ slug }: SalesLinkProps) {
  const [copied, setCopied] = useState(false);
  const link = `gatepass.africa/${slug || "rooftop-sessions"}`;

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard?.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="card">
      <div className="lbl">Your sales link</div>
      <div
        className="inp"
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "12px",
          fontSize: "14px",
          color: "#5B6472",
        }}
      >
        {link}
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className="btn btn2"
        style={{ marginTop: "12px", width: "100%", boxSizing: "border-box" }}
      >
        {copied ? "Copied" : "Copy link"}
      </button>
    </div>
  );
}
