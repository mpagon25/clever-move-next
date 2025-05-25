import React from "react";
import SectionCard from "../section-card/section-card";
import { WhyUsItem } from "@/types/why-us";
import WhyUsReasonItem from "../why-us-item/why-us-reason-item";

type WhyUsSectionProps = {
  dataList: WhyUsItem[];
};
export default function WhyUsSection({
  dataList,
}: WhyUsSectionProps): React.JSX.Element {
  return (
    <SectionCard className="mb-40 scroll-mt-30" id="why-us-section" fullWidth>
      <h2 className="text-5xl font-bold mb-20">Why Us?</h2>
      {dataList.map((reasonItem, index) => (
        <React.Fragment key={index}>
          {/* Add a separator line for all but the last item */}
          <WhyUsReasonItem
            {...reasonItem}
            descFirst={index % 2 === 0}
            lastItem={dataList.length - 1 === index}
          />
        </React.Fragment>
      ))}
    </SectionCard>
  );
}
