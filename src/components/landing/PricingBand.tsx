import React from "react";
import Link from "next/link";
import { PLATFORM_FEE_PERCENT } from "@/lib/constants";

export function PricingBand() {
  return (
    <section id="pricing" className="wrap" style={{ paddingBottom: "112px" }}>
      <div
        className="card"
        style={{
          padding: "56px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "32px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <div className="lbl">Pricing</div>
          <h3 className="h" style={{ fontSize: "48px", margin: "14px 0 10px" }}>
            {PLATFORM_FEE_PERCENT}% per ticket sold.
          </h3>
          <div className="mut">
            No setup fees. No monthly fees. Free events are always free.
          </div>
        </div>
        <Link href="/pricing" className="btn">
          See full pricing
        </Link>
      </div>
    </section>
  );
}
