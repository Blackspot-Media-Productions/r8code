"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import "lenis/dist/lenis.css";

function RevealObserver() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]);

  useEffect(() => {
    let io: IntersectionObserver | undefined;
    let cancelled = false;

    const run = () => {
      if (cancelled) return;

      const nodes = Array.from(
        document.querySelectorAll<HTMLElement>("[data-reveal]"),
      );
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const reveal = (el: HTMLElement) => el.classList.add("is-inview");

      if (reduced) {
        nodes.forEach(reveal);
        return;
      }

      // 1. Force add js-reveal so the CSS transition styles apply safely
      document.documentElement.classList.add("js-reveal");

      // 2. Immediately reveal items already visible on top of screen
      const alreadyInView = (el: HTMLElement) => {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight * 0.95 && rect.bottom > 10;
      };

      nodes.forEach((el) => {
        if (alreadyInView(el)) reveal(el);
      });

      // 3. Track remaining items as they scroll into view
      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            reveal(entry.target as HTMLElement);
            io?.unobserve(entry.target);
          }
        },
        { threshold: 0.05, rootMargin: "0px 0px -5% 0px" },
      );

      nodes.forEach((el) => {
        if (!el.classList.contains("is-inview")) io?.observe(el);
      });
    };

    // If page-loading class is active, wait for the loader event OR a safety timeout fallback
    if (document.documentElement.classList.contains("page-loading")) {
      const handleLoader = () => {
        window.removeEventListener("pageloader:done", handleLoader);
        run();
      };
      window.addEventListener("pageloader:done", handleLoader, { once: true });

      // Safety timeout: If your loader script doesn't fire 'pageloader:done', fire anyway after 800ms
      const safetyTimeout = setTimeout(() => {
        document.documentElement.classList.remove("page-loading");
        handleLoader();
      }, 800);

      return () => {
        cancelled = true;
        window.removeEventListener("pageloader:done", handleLoader);
        clearTimeout(safetyTimeout);
        io?.disconnect();
      };
    } else {
      run();
    }

    return () => {
      cancelled = true;
      io?.disconnect();
    };
  }, [pathname]);

  return null;
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  const [smooth, setSmooth] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    setSmooth(!isAdmin && !reduced);
  }, [isAdmin]);

  if (isAdmin) return children;

  const tree = (
    <>
      {children}
      <RevealObserver />
    </>
  );

  if (!smooth) return tree;

  return (
    <ReactLenis
      root
      options={{
        duration: 1.15, // Removed conflicting 'lerp: 0.09' to maintain consistent rendering speed
        smoothWheel: true,
        anchors: true,
        autoRaf: true,
      }}
    >
      {tree}
    </ReactLenis>
  );
}
