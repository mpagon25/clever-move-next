"use client";

import { JSX } from "react";
import HeroSection from "./ui/hero-section/hero-section";
import DiscoverySection from "./ui/discovery-section/discovery-section";
import WhyUsSection from "./ui/why-us-section/why-us-section";
import whyUsData from "./data/why-us-data.json";

export default function Home(): JSX.Element {
  return (
    <div className="">
      <HeroSection />
      <DiscoverySection />
      <WhyUsSection dataList={whyUsData} />
    </div>
  );
}
