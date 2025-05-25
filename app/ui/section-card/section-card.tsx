import React, { HTMLAttributes, PropsWithChildren } from "react";

type SectionCardProps = PropsWithChildren & HTMLAttributes<HTMLDivElement>;

export default function SectionCard({
  children,
  className,
  id,
}: SectionCardProps) {
  return (
    <div
      className={`w-full rounded-2xl border-black shadow-[2px_0px_10px_rgba(3,3,3,0.1)] pt-20 pb-20 pr-15 pl-15 ${className}`}
      id={id}
    >
      {children}
    </div>
  );
}
