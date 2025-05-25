import clsx from "clsx";
import React, { JSX } from "react";

type InputProps = { label: string } & JSX.IntrinsicElements["input"];

export default function Input({
  label,
  className,
  ...props
}: InputProps): JSX.Element {
  return (
    <label className="text-lg font-bold ">
      {label}
      <input
        className={clsx(
          "font-normal border rounded px-3 py-2 mt-1 w-full focus:outline-none font-norm border-gray-300 focus:border-transparent focus:ring-1 focus:ring-[#2A5F69]",
          className
        )}
        {...props}
      />
    </label>
  );
}
