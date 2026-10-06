import type { Metadata, Viewport } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import { SmoothScroll } from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "R8Code",
  description:
    "We turn business challenges into intuitive websites, custom software and intelligent digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} h-full antialiased`}
    >
      <body
        className={`min-h-full overflow-clip flex flex-col ${dmSans.className}`}
      >
        <noscript>
          <style>{`.pageLoader{display:none!important}`}</style>
        </noscript>
        <Script id="intro-boot" strategy="beforeInteractive">{`
          (() => {
            try {
              if (location.pathname !== "/") return;
              if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                document.documentElement.classList.add("loader-skip");
                return;
              }
              document.documentElement.classList.add("page-loading");
            } catch (e) {
              if (location.pathname === "/") document.documentElement.classList.add("page-loading");
            }
          })();
        `}</Script>

        <SmoothScroll>
          <div
            id="top"
            className="max-w-7xl w-full mx-auto py-5 lg:py-10 px-6 2xl:px-0"
          >
            <Navbar />
            {children}
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
