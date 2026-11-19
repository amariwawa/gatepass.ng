import React from "react";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { FeatureGrid } from "@/components/landing/FeatureGrid";
import { AudienceCards } from "@/components/landing/AudienceCards";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { PricingBand } from "@/components/landing/PricingBand";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <div style={{ minHeight: "2500px" }}>
      <Nav />
      <Hero />
      <FeatureGrid />
      <AudienceCards />
      <HowItWorks />
      <PricingBand />
      <FinalCta />
      <Footer />
    </div>
  );
}
