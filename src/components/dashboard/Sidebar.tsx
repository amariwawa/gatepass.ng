"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();

  const links = [
    { label: "Events", href: "/dashboard/events/new" },
    { label: "Orders", href: "/dashboard/orders" },
    { label: "Attendees", href: "/dashboard/attendees" },
    { label: "Scanners", href: "/dashboard/scanners" },
    { label: "Payouts", href: "/dashboard/payouts" },
    { label: "Settings", href: "/dashboard/settings" },
  ];

  return (
    <div
      className="side"
      style={{
        background: "#0F1B2D",
        color: "#F6F3EC",
        padding: "32px 24px",
        boxSizing: "border-box",
      }}
    >
      <Link
        href="/"
        className="h"
        style={{
          fontSize: "26px",
          marginBottom: "40px",
          color: "#F6F3EC",
          display: "block",
          textDecoration: "none",
        }}
      >
        Gatepass
      </Link>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          fontSize: "15px",
        }}
      >
        {links.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href === "/dashboard/events/new" && pathname.startsWith("/dashboard/events"));
          return (
            <Link
              key={link.label}
              href={link.href}
              style={{
                background: isActive ? "#1D2B43" : "transparent",
                color: isActive ? "#F6F3EC" : "#B8C2D1",
                padding: "12px 14px",
                borderRadius: "10px",
                textDecoration: "none",
                display: "block",
                transition: "background 0.15s ease, color 0.15s ease",
              }}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
