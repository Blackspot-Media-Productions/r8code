"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, useAnimationFrame } from "motion/react";

export default function BouncingBall() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ballRef = useRef<HTMLDivElement>(null);
  const vector = useRef({ dx: 3, dy: 3 });
  const boundsRef = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (!ballRef.current) return;

    // Safely capture initial layout sizes
    const ballWidth = ballRef.current.offsetWidth;
    const windowWidth = window.innerWidth;
    const totalPageHeight = document.documentElement.scrollHeight;

    boundsRef.current = { width: windowWidth, height: totalPageHeight };

    // FIX 1: Offset by half the ball's width so it spawns perfectly centered
    x.set(windowWidth / 2 - ballWidth / 2);
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

    // Prevent loop execution before bounds are set by useEffect
    if (windowWidth === 0) return;

    // Calculate next positions
    let nextX = currentX + dx;
    let nextY = currentY + dy;

    // FIX 2: Check boundaries against the NEXT frame position and clamp them
    // Bounce off Left / Right walls
    if (nextX > windowWidth - ballWidth) {
      dx = -Math.abs(dx);
      nextX = windowWidth - ballWidth; // Clamp to wall
    } else if (nextX < 0) {
      dx = Math.abs(dx);
      nextX = 0; // Clamp to wall
    }

    // Bounce off Top / Bottom document edges
    if (nextY > totalPageHeight - ballHeight) {
      dy = -Math.abs(dy);
      nextY = totalPageHeight - ballHeight; // Clamp to wall
    } else if (nextY < 0) {
      dy = Math.abs(dy);
      nextY = 0; // Clamp to wall
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
