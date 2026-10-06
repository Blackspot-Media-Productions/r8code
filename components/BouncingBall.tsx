"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, useAnimationFrame } from "motion/react";

export default function BouncingBall() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ballRef = useRef<HTMLDivElement>(null);
  const vector = useRef({ dx: 3, dy: 3 });

  useEffect(() => {
    x.set(window.innerWidth / 2);
    y.set(40);
  }, [x, y]);

  useAnimationFrame(() => {
    if (!ballRef.current) return;

    // Dynamically captures whether the ball is 400px or 800px based on active responsive breakpoint
    const ballWidth = ballRef.current.offsetWidth;
    const ballHeight = ballRef.current.offsetHeight;

    let currentX = x.get();
    let currentY = y.get();
    let { dx, dy } = vector.current;

    // Bounce off Left / Right walls
    if (currentX + dx > window.innerWidth - ballWidth || currentX + dx < 0) {
      dx = -dx;
    }

    // Bounce off Top / Bottom document edges
    const totalPageHeight = document.documentElement.scrollHeight;
    if (currentY + dy > totalPageHeight - ballHeight || currentY + dy < 0) {
      dy = -dy;
    }

    vector.current = { dx, dy };
    x.set(currentX + dx);
    y.set(currentY + dy);
  });

  return (
    <motion.div
      ref={ballRef}
      style={{ x, y }}
      // Applied 400px (w-100 h-100) on mobile and scaled to 800px (md:w-200 md:h-200) on desktop
      className="absolute top-0 left-0 w-100 h-100 md:w-200 md:h-200 rounded-full bg-primary brightness-25 blur-[100px] md:blur-[200px] pointer-events-none -z-10 shadow-[0_0_180px_rgba(59,130,246,0.35)] will-change-transform"
    />
  );
}
