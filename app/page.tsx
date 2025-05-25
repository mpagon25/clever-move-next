"use client";

import HeroSection from "./ui/hero-section/hero-section";
import DiscoverySection from "./ui/discovery-section/discovery-section";
import WhyUsSection from "./ui/why-us-section/why-us-section";
import whyUsData from "./data/why-us-data.json";
import AboutUsSection from "./ui/about-us-section/about-us-section";
import { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <div>
      <HeroSection />
      <DiscoverySection />
      <WhyUsSection dataList={whyUsData} />
      <AboutUsSection />
    </div>
  );
}
