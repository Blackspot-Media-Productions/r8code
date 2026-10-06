import { ReactNode } from "react";

export default function Card(props: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-full px-6 py-11.5 rounded-2xl bg-card ${props.className}`}
    >
      {props.children}
    </div>
  );
}
