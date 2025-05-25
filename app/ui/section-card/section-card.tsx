import clsx from "clsx";
import React, { HTMLAttributes, PropsWithChildren } from "react";

type SectionCardProps = PropsWithChildren &
  HTMLAttributes<HTMLDivElement> & { fullWidth?: boolean; p?: "sm" | "md" };

export default function SectionCard({
  children,
  className,
  id,
  fullWidth = false,
  p = "md",
  ...props
}: SectionCardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl border-black shadow-[2px_0px_10px_rgba(3,3,3,0.1)]",
        {
          "w-full": fullWidth,
          "py-20 px-15": p === "md",
          "py-10 px-10": p === "sm",
        },
        className
      )}
      id={id}
      {...props}
    >
      {children}
    </div>
  );
}
