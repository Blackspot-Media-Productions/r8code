"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, useAnimationFrame } from "motion/react";

export default function BouncingBall() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ballRef = useRef<HTMLDivElement>(null);
  const vector = useRef({ dx: 2, dy: 2 }); // Slightly slower base speed looks cleaner on mobile
  const boundsRef = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (!ballRef.current) return;

    const ballWidth = ballRef.current.offsetWidth;
    const windowWidth = window.innerWidth;
    const totalPageHeight = document.documentElement.scrollHeight;

    boundsRef.current = { width: windowWidth, height: totalPageHeight };

    // Set initial position safely (if ball is wider than screen, force it to 0)
    const initialX = Math.max(0, windowWidth / 2 - ballWidth / 2);
    x.set(initialX);
    y.set(40);

    const updateBounds = () => {
      boundsRef.current = {
        width: window.innerWidth,
        height: document.documentElement.scrollHeight,
      };
    };

    window.addEventListener("resize", updateBounds);
    return () => window.removeEventListener("resize", updateBounds);
  }, [x, y]);

  useAnimationFrame(() => {
    if (!ballRef.current) return;

    const ballWidth = ballRef.current.offsetWidth;
    const ballHeight = ballRef.current.offsetHeight;

    const currentX = x.get();
    const currentY = y.get();
    let { dx, dy } = vector.current;

    const { width: windowWidth, height: totalPageHeight } = boundsRef.current;
    if (windowWidth === 0) return;

    let nextX = currentX + dx;
    let nextY = currentY + dy;

    // FIX: Fallback to 0 if the ball width exceeds the available viewport width
    const rightWallLimit = Math.max(0, windowWidth - ballWidth);
    const bottomWallLimit = Math.max(0, totalPageHeight - ballHeight);

    // Bounce off Left / Right walls
    if (nextX > rightWallLimit) {
      dx = -Math.abs(dx);
      nextX = rightWallLimit;
    } else if (nextX < 0) {
      dx = Math.abs(dx);
      nextX = 0;
    }

    // Bounce off Top / Bottom edges
    if (nextY > bottomWallLimit) {
      dy = -Math.abs(dy);
      nextY = bottomWallLimit;
    } else if (nextY < 0) {
      dy = Math.abs(dy);
      nextY = 0;
    }

    vector.current = { dx, dy };
    x.set(nextX);
    y.set(nextY);
  });

  return (
    <motion.div
      ref={ballRef}
      style={{ x, y }}
      className="absolute top-0 left-0 w-100 h-100 md:w-200 md:h-200 rounded-full bg-primary brightness-25 blur-[100px] md:blur-[200px] pointer-events-none -z-10 shadow-[0_0_180px_rgba(59,130,246,0.35)] will-change-transform"
    />
  );
}
