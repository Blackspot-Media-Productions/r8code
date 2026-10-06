"use client";

import { SyntheticEvent, useState } from "react";

type Props = {
  label: string;
  options: {
    label: string;
    value: string;
  }[];
  name: string;
  id: string;
  required?: boolean;
  placeholder?: string;
};

export default function Select({
  required = false,
  placeholder = "Start typing...",
  ...props
}: Props) {
  const [value, setValue] = useState("");

  return (
    <div className="w-full flex flex-col gap-y-3">
      <label htmlFor={props.id} className="text-xs font-medium">
        {props.label}&nbsp;
        {required && "*"}
      </label>

      <select
        name={props.name}
        id={props.id}
        className={`w-full border-b ${value === "" ? "text-light/50" : "text-light"} border-borders pb-3 focus-within:border-white outline-0 transition-all duration-500 selection:bg-primary selection:text-dark`}
        onLoad={() => setValue("")}
        onChange={(e) => setValue(e.target.value)}
        onBlur={(e) => {
          const target = e.target;
          if (target.value !== "") {
            target.classList.replace("border-borders", "border-primary");
          } else {
            target.classList.replace("border-primary", "border-borders");
          }
        }}
      >
        <option value="" hidden>
          {placeholder}
        </option>

        {props.options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
