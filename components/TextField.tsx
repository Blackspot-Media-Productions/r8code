"use client";

import { HTMLInputTypeAttribute } from "react";

type Props = {
  type?: HTMLInputTypeAttribute;
  label: string;
  name: string;
  id: string;
  required?: boolean;
  placeholder?: string;
};

export default function TextField({
  type = "text",
  required = false,
  placeholder = "Start typing...",
  ...props
}: Props) {
  return (
    <div className="w-full flex flex-col gap-y-3">
      <label htmlFor={props.id} className="text-xs font-medium">
        {props.label}&nbsp;
        {required && "*"}
      </label>

      <input
        type={type}
        id={props.id}
        name={props.name}
        placeholder={placeholder}
        className="w-full border-b border-borders pb-3 focus-within:border-white outline-0 transition-all duration-500 selection:bg-primary selection:text-dark"
        onBlur={(e) => {
          const target = e.target;
          if (target.value !== "") {
            target.classList.replace("border-borders", "border-primary");
          } else {
            target.classList.replace("border-primary", "border-borders");
          }
        }}
      />
    </div>
  );
}
