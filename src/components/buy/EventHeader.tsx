import React from "react";

interface EventHeaderProps {
  category: string;
  name: string;
  date: string;
  venue: string;
  doorsOpen: string;
  description: string;
}

export function EventHeader({
  category,
  name,
  date,
  venue,
  doorsOpen,
  description,
}: EventHeaderProps) {
  // If date already includes Saturday/day of week, display directly, otherwise format cleanly
  const dateDisplay = date ? (date.includes(",") ? date : `Saturday, ${date}`) : "";

  return (
    <div>
      <div
        className="event-hero"
        style={{
          background: "#0F1B2D",
          color: "#F6F3EC",
          borderRadius: "24px",
          padding: "48px",
        }}
      >
        <div className="lbl" style={{ color: "#8FD3B1" }}>
          {category || "Live music · Lagos"}
        </div>
        <h1
          className="h"
          style={{ fontSize: "64px", lineHeight: 1.02, margin: "18px 0 20px" }}
        >
          {name}
        </h1>
        <div style={{ color: "#B8C2D1", fontSize: "16px", lineHeight: 1.7 }}>
          {dateDisplay && (
            <>
              {dateDisplay}
              <br />
            </>
          )}
          {[venue, doorsOpen && `Doors ${doorsOpen}`].filter(Boolean).join(" · ")}
        </div>
      </div>
      <p
        className="mut"
        style={{ margin: "28px 0 36px", maxWidth: "560px", fontSize: "17px" }}
      >
        {description}
      </p>
    </div>
  );
}
