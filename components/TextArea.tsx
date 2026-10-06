"use client";

import { InputEvent, useState } from "react";

type Props = {
  label: string;
  name: string;
  id: string;
  required?: boolean;
  placeholder?: string;
};

export default function TextArea({
  required = false,
  placeholder = "Start typing...",
  ...props
}: Props) {
  const [rows, setRows] = useState(1);

  const handleRows = (e: InputEvent<HTMLTextAreaElement>) => {
    const textarea = e.target as HTMLTextAreaElement;
    const computedStyle = window.getComputedStyle(textarea);

    let lineHeight = parseInt(computedStyle.lineHeight);
    if (isNaN(lineHeight)) {
      lineHeight = parseInt(computedStyle.fontSize) * 1.2;
    }

    const originalHeight = textarea.style.height;
    textarea.style.height = "0px";

    const paddingTop = parseInt(computedStyle.paddingTop);
    const paddingBottom = parseInt(computedStyle.paddingBottom);
    const contentHeight = textarea.scrollHeight - paddingTop - paddingBottom;
    textarea.style.height = originalHeight;

    const visibleRows = Math.max(1, Math.round(contentHeight / lineHeight));
    if (visibleRows < 8) {
      setRows(visibleRows);
    }
  };

  return (
    <div className="w-full flex flex-col gap-y-3">
      <label htmlFor={props.id} className="text-xs font-medium">
        {props.label}&nbsp;
        {required && "*"}
      </label>

      <textarea
        rows={rows}
        name={props.name}
        id={props.id}
        placeholder={placeholder}
        className="resize-none w-full border-b border-borders pb-3 focus-within:border-white outline-0 transition-all duration-500 selection:bg-primary selection:text-dark"
        onInput={handleRows}
        onBlur={(e) => {
          const target = e.target;
          if (target.value !== "") {
            target.classList.replace("border-borders", "border-primary");
          } else {
            target.classList.replace("border-primary", "border-borders");
          }
        }}
      ></textarea>
    </div>
  );
}
