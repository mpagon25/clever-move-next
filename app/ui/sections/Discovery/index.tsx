import React from "react";
import SectionCard from "@/components/SectionCard";
import Image from "next/image";

export default function DiscoverySection() {
  return (
    <SectionCard
      className="mb-40 scroll-mt-30"
      id="discovery-section"
      fullWidth
    >
      <div className="flex row justify-between">
        <div>
          <h2 className="text-5xl font-bold pb-8">
            Discover reliable
            <br /> moving services.
          </h2>
          <h3>
            Join our community and enjoy
            <br /> seemless moving experiences!
          </h3>
        </div>
        <div>
          <Image
            src={"/DiscoverImage.png"}
            alt={"Discover Image"}
            width={507}
            height={366}
          />
        </div>
      </div>
    </SectionCard>
  );
}
