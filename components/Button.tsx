"use client";

import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  action?: () => void;
};

export default function Button({ type = "button", ...props }: Props) {
  return (
    <button
      type={type}
      className={`bg-primary text-dark text-xs py-3.5 px-5.5 rounded-full ${props.className} cursor-pointer`}
      onClick={props.action}
      data-reveal
    >
      {props.children}
    </button>
  );
}
