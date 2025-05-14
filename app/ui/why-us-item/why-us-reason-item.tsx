import React from "react";
import Image from "next/image";
import { WhyUsItem } from "@/types/why-us";

type WhyUsReasonItemProps = {
  descFirst?: boolean;
  lastItem?: boolean;
} & WhyUsItem;

export default function WhyUsReasonItem({
  title,
  subTitle,
  text,
  imageSrc,
  alt,
  descFirst = true,
  lastItem = false,
}: WhyUsReasonItemProps): React.JSX.Element {
  const itemDescription = () => (
    <div className="flex-3">
      <h6 className="font-bold">{subTitle}</h6>
      <h3 className="text-[32px] font-bold text-[#2B616C] mb-5 leading-8">
        {title}
      </h3>
      <p>{text}</p>
    </div>
  );

  return (
    <article className={`flex row ${!lastItem ? "mb-20" : ""}`}>
      {descFirst && itemDescription()}
      <div className={`flex flex-2 ${descFirst ? "justify-end " : ""}`}>
        <Image src={imageSrc} alt={alt} width={300} height={300} />
      </div>
      {!descFirst && itemDescription()}
    </article>
  );
}
