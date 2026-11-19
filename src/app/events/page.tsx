"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";

export default function EventsDiscoveryPage() {
  const [selectedCity, setSelectedCity] = useState("All");

  const events = [
    {
      slug: "rooftop-sessions",
      title: "Rooftop Sessions: December Edition",
      category: "Live music · Lagos",
      city: "Lagos",
      date: "Saturday, 20 Dec 2026",
      venue: "Victoria Island, Lagos",
      price: "From ₦10,000",
      description: "An evening of live sets and good company above the city.",
    },
    {
      slug: "afro-fusion-accra",
      title: "Afro Fusion Night",
      category: "Nightlife · Accra",
      city: "Accra",
      date: "Friday, 26 Dec 2026",
      venue: "Labadi Beach, Accra",
      price: "From GH₵ 250",
      description: "Highlife meets Afrobeats under the stars on the Atlantic coast.",
    },
    {
      slug: "lagos-tech-soiree",
      title: "Founders & Creators Soirée",
      category: "Networking · Lagos",
      city: "Lagos",
      date: "Thursday, 18 Dec 2026",
      venue: "Ikoyi, Lagos",
      price: "From ₦25,000",
      description: "Connecting African tech builders, angel investors, and creative directors.",
    },
    {
      slug: "nairobi-sunset-groove",
      title: "Kilimani Sunset Soundclash",
      category: "Electronic · Nairobi",
      city: "Nairobi",
      date: "Sunday, 28 Dec 2026",
      venue: "Kilimani, Nairobi",
      price: "From KSh 2,000",
      description: "East African electronic pioneers and live percussion ensembles.",
    },
  ];

  const filtered =
    selectedCity === "All"
      ? events
      : events.filter((e) => e.city.toLowerCase() === selectedCity.toLowerCase());

  return (
    <div style={{ minHeight: "100vh", background: "#F6F3EC" }}>
      <Nav />

      <main className="wrap" style={{ paddingTop: "32px", paddingBottom: "96px" }}>
        <div style={{ marginBottom: "40px" }}>
          <div className="lbl">Events Discovery</div>
          <h1 className="h" style={{ fontSize: "56px", margin: "14px 0 16px" }}>
            Explore events across Africa.
          </h1>
          <p className="mut" style={{ fontSize: "18px", maxWidth: "600px" }}>
            Every ticket delivered instantly to WhatsApp. Pay via your local bank transfer, mobile money, cards or Apple Pay.
          </p>
        </div>

        {/* City Filter Pills */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "40px", flexWrap: "wrap" }}>
          {["All", "Lagos", "Accra", "Nairobi"].map((city) => (
            <button
              key={city}
              type="button"
              onClick={() => setSelectedCity(city)}
              className="btn btn2"
              style={{
                background: selectedCity === city ? "#0F1B2D" : "transparent",
                color: selectedCity === city ? "#F6F3EC" : "#0F1B2D",
                borderColor: selectedCity === city ? "#0F1B2D" : "#C9C3B3",
                minHeight: "42px",
                padding: "0 20px",
              }}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid2" style={{ gap: "24px" }}>
          {filtered.map((e) => (
            <Link
              key={e.slug}
              href={`/e/${e.slug}`}
              style={{ textDecoration: "none", color: "inherit", display: "block" }}
            >
              <div
                className="card"
                style={{
                  padding: "36px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.15s ease, box-shadow 0.15s ease",
                }}
              >
                <div>
                  <div className="lbl">{e.category}</div>
                  <h2 className="h" style={{ fontSize: "32px", margin: "14px 0 10px" }}>
                    {e.title}
                  </h2>
                  <div style={{ fontSize: "14px", color: "#5B6472", marginBottom: "14px" }}>
                    {e.date} • {e.venue}
                  </div>
                  <p className="mut" style={{ fontSize: "15px", marginBottom: "24px" }}>
                    {e.description}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderTop: "1px solid #E2DDD1",
                    paddingTop: "18px",
                  }}
                >
                  <span style={{ fontWeight: 600, fontSize: "16px", color: "#0F1B2D" }}>
                    {e.price}
                  </span>
                  <span
                    className="btn"
                    style={{ minHeight: "38px", padding: "0 20px", fontSize: "13px" }}
                  >
                    Get Tickets
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
