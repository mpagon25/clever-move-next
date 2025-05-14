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
    <div className="mb-40">
      <SectionCard>
        <h2 className="text-5xl font-bold mb-20">Why Us?</h2>
        {dataList.map((reasonItem, index) => (
          <>
            <WhyUsReasonItem
              {...reasonItem}
              descFirst={index % 2 === 0}
              lastItem={dataList.length - 1 === index}
            />
          </>
        ))}
      </SectionCard>
    </div>
  );
}
