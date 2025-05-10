"use client";

import { JSX } from "react";
import HeroSection from "./ui/hero-section/hero-section";
import DiscoverySection from "./ui/discovery-section/discovery-section";

export default function Home(): JSX.Element {
  return (
    <div className="">
      <HeroSection />
      <DiscoverySection />
    </div>
  );
}
