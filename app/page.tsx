"use client";

import Hero from "./ui/sections/Hero";
import Discovery from "./ui/sections/Discovery";
import WhyUs from "./ui/sections/WhyUs";
import whyUsData from "./data/why-us-data.json";
import AboutUs from "./ui/sections/AboutUs";
import { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <div>
      <Hero />
      <Discovery />
      <WhyUs dataList={whyUsData} />
      <AboutUs />
    </div>
  );
}
