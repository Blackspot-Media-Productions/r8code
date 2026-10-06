"use client";

import Image from "next/image";
import Logo from "@/public/img/logo.png";
import Link from "next/link";

const navfooterlinks = [
  {
    category: "Explore",
    links: [
      {
        label: "About us",
        route: "#about",
        external: false,
      },
      {
        label: "Services",
        route: "#services",
        external: false,
      },
      {
        label: "Product",
        route: "#product",
        external: false,
      },
      {
        label: "Contact",
        route: "#contact",
        external: false,
      },
    ],
  },
  {
    category: "Connect",
    links: [
      {
        label: "Email us",
        route: "mailto:info@r8code.co.za",
        external: true,
      },
      {
        label: "LinkedIn",
        route: "",
        external: true,
      },
      {
        label: "Back to top",
        route: "#top",
        external: false,
      },
    ],
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#1C2836"
        strokeWidth="2"
        className="ai ai-LinkedinFill"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02 3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461-1.889 0-2.674 1.345-2.674 3.46V22h-4V8.969zM2.57 21.83h4V8.799h-4V21.83zM7.143 4.55a2.53 2.53 0 0 1-.753 1.802A2.573 2.573 0 0 1 4.57 7.1a2.59 2.59 0 0 1-1.818-.747A2.548 2.548 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.583 2.583 0 0 1 4.571 2c.682 0 1.336.269 1.819.747.482.478.753 1.126.753 1.803z"
        />
      </svg>
    ),
    link: "",
  },
  {
    label: "X",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#1C2836"
        strokeWidth="2"
        className="ai ai-XFill"
      >
        <path d="M13.808 10.469L20.88 2h-1.676l-6.142 7.353L8.158 2H2.5l7.418 11.12L2.5 22h1.676l6.486-7.765L15.842 22H21.5l-7.693-11.531zm-2.296 2.748l-.752-1.107L4.78 3.3h2.575l4.826 7.11.751 1.107 6.273 9.242h-2.574l-5.12-7.541z" />
      </svg>
    ),
    link: "",
  },
  {
    label: "Instagram",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#1C2836"
        strokeWidth="2"
        className="ai ai-InstagramFill"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066 1.172.053 1.972.24 2.672.511.733.277 1.398.71 1.948 1.27.56.549.992 1.213 1.268 1.947.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268-.7.272-1.5.458-2.67.512-1.174.054-1.548.066-4.536.066-2.988 0-3.362-.013-4.535-.066-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268 5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948 5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511zm8.98 1.98c-1.16-.053-1.508-.064-4.445-.064-2.937 0-3.285.011-4.445.064-1.073.049-1.655.228-2.043.379-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043-.053 1.16-.064 1.508-.064 4.445 0 2.937.011 3.285.064 4.445.049 1.073.228 1.655.379 2.043.176.477.457.91.822 1.265.355.365.788.646 1.265.822.388.151.97.33 2.043.379 1.16.053 1.507.064 4.445.064 2.938 0 3.285-.011 4.445-.064 1.073-.049 1.655-.228 2.043-.379.513-.2.88-.437 1.265-.822.365-.355.646-.788.822-1.265.151-.388.33-.97.379-2.043.053-1.16.064-1.508.064-4.445 0-2.937-.011-3.285-.064-4.445-.049-1.073-.228-1.655-.379-2.043-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379zm-5.85 12.345a3.669 3.669 0 0 0 4-5.986 3.67 3.67 0 1 0-4 5.986zM8.002 8.002a5.654 5.654 0 1 1 7.996 7.996 5.654 5.654 0 0 1-7.996-7.996zm10.906-.814a1.337 1.337 0 1 0-1.89-1.89 1.337 1.337 0 0 0 1.89 1.89z"
        />
      </svg>
    ),
    link: "",
  },
];

export default function Footer() {
  return (
    <footer className="font-inter mt-7 lg:mt-29.5 px-7 py-7 lg:px-18.75 lg:pt-19.25 lg:pb-4.25 bg-[#1D1D1B] rounded-3xl">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-y-9 mb-19.75">
        <div className="max-w-109.25 w-full shrink-0">
          <Image
            src={Logo}
            alt="R8Code logo"
            className="w-25 lg:w-36 lg:h-25.75 cursor-pointer"
            height={103}
            width={144}
            role="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />

          <p
            className="mt-6 lg:mt-7.25 text-sm lg:text-[13px] leading-[21.65px] text-accent"
            data-reveal
          >
            R8code designs and builds distinct digital products for ambitious
            teams around the world.
          </p>

          <div
            className="flex items-center gap-x-2.5 mt-6 lg:mt-9.5"
            data-reveal
          >
            {socialLinks.map((social) => (
              <a
                key={social.label.toLocaleLowerCase()}
                href={social.link}
                className="w-10 h-10 rounded-[20px] bg-light grid place-content-center"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div
          className="flex items-start gap-x-26.25 lg:gap-x-39.75"
          data-reveal
        >
          {navfooterlinks.map((menu) => (
            <div key={menu.category.toLowerCase()} className="space-y-4">
              <p className="font-medium text-base">{menu.category}</p>
              <div className="flex flex-col gap-y-4 text-sm lg:text-xs text-accent">
                {menu.links.map((link) =>
                  link.external ? (
                    <a
                      key={link.label.toLowerCase()}
                      href={link.route}
                      target="_blank"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link key={link.label.toLowerCase()} href={link.route}>
                      {link.label}
                    </Link>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="flex flex-col lg:flex-row lg:items-baseline justify-between gap-y-6"
        data-reveal
      >
        <h2 className="text-[78px] lg:text-[192.78px] text-primary leading-[100%] lg:leading-[192.78px] lg:tracking-[-17.35px] font-inter">
          R8code
        </h2>
        <span className="text-xs text-accent font-inter">
          © 2025 R8code. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
