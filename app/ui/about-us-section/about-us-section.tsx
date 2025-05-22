import React from "react";
import SectionCard from "../section-card/section-card";

export default function AboutUsSection() {
  return (
    <SectionCard className="flex mb-40">
      <div className="flex-1 leading-12">
        <h3 className="font-bold text-[48px]">About us</h3>
      </div>
      <div className="flex-2">
        <p>
          Clever-Move is a family-owned moving company which has been kept
          running for over 7 years now and still counting. We are a team of
          well-trained and organised individuals. We value our multicultural
          backgrounds and consider ourselves a family. We do our best to make
          sure that our clients have the best experience while moving. And for
          that reason we offer consultancy on making make our clients moves
          clean and easy as possible. Our goal is to help clients have a stress
          free move, so they spread the word about their awesome experience and
          direct more prospects toward our business. Clear communication is
          crucial to creating great customer experiences, and that includes
          driver updates. Clever-Move takes prides in offering all of theres and
          more.
        </p>
      </div>
    </SectionCard>
  );
}
