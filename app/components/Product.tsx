"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import FaceattShowcaseImg from "@/public/img/faceatt-showcase.png";
import { useEffect, useState } from "react";

export default function Product() {
  const [screenWidth, setScreenWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    // Set initial width on mount
    handleResize();

    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="product" className="mt-28 md:mt-53.25 space-y-17">
      <h2
        className="text-[34px] md:text-[58px] leading-[120%] font-medium"
        data-reveal
      >
        We don&apos;t just build for others. <br />
        We build what&apos;s next.
      </h2>

      <div className="space-y-6 lg:space-y-8">
        <Image
          src={FaceattShowcaseImg}
          alt="faceatt product board"
          className="max-w-7xl w-full mx-auto h-41.5 lg:h-155 object-cover lg:object-[0_-145px] rounded-2xl"
          loading="eager"
        />

        <div className="space-y-4.5">
          <a
            href="https://faceatt.com"
            target="_blank"
            referrerPolicy="no-referrer"
            className="flex items-center justify-between"
            data-reveal
          >
            <p className="font-medium text-[26px] md:text-[30px] leading-[120%] text-white">
              faceATT
            </p>

            <ArrowUpRight
              className="text-primary w-11 h-11 md:w-18 md:h-18"
              strokeWidth={1}
            />
          </a>

          <p className="text-lg font-medium text-white" data-reveal>
            Attendance, without the friction.
          </p>

          <span
            className="text-description text-[15px] leading-[120%]"
            data-reveal
          >
            Facial recognition platform for attendance, visitor management and
            dynamic tasks on your smartphone
          </span>
        </div>
      </div>
    </section>
  );
}
