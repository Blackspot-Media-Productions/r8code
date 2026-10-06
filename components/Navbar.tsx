"use client";

import Image from "next/image";
import Logo from "@/public/img/logo.png";
import Link from "next/link";
import Button from "./Button";

const navlinks = [
  {
    label: "Services",
    route: "#services",
  },
  {
    label: "Product",
    route: "#product",
  },
  {
    label: "About",
    route: "#about",
  },
];

export default function Navbar() {
  return (
    <nav className="w-full bg-light px-4 md:px-10 py-4.5 rounded-[10px] flex flex-col items-center gap-y-5">
      <div className="w-full flex items-center justify-between">
        <Image
          src={Logo}
          alt="R8Code logo"
          className="w-8.75 h-6.25"
          height={25}
          width={35}
          loading="eager"
        />

        <div className="hidden lg:flex text-dark font-inter items-center gap-x-10">
          {navlinks.map((link) => (
            <Link
              key={link.label.toLowerCase()}
              href={link.route}
              className="text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Button className="font-inter">Start a project</Button>
      </div>

      <div className="flex lg:hidden text-dark font-inter items-center gap-x-10">
        {navlinks.map((link) => (
          <Link
            key={link.label.toLowerCase()}
            href={link.route}
            className="text-sm"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
