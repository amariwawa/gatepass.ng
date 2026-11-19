import React from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="shell"
      style={{
        display: "grid",
        gridTemplateColumns: "240px 1fr",
        minHeight: "1300px",
      }}
    >
      <Sidebar />
      <div>{children}</div>
    </div>
  );
}
