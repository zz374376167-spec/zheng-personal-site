"use client";

import type { CSSProperties, PointerEvent as ReactPointerEvent, ReactNode } from "react";
import { useEffect, useRef } from "react";

interface HeroPerspectiveProps {
  children: ReactNode;
  className: string;
}

type PerspectiveStyle = CSSProperties & {
  "--hero-rotate-x": string;
  "--hero-rotate-y": string;
  "--hero-scale": string;
  "--hero-highlight-x": string;
};

const restingStyle: PerspectiveStyle = {
  "--hero-rotate-x": "0deg",
  "--hero-rotate-y": "0deg",
  "--hero-scale": "1",
  "--hero-highlight-x": "0%",
};

export function HeroPerspective({ children, className }: HeroPerspectiveProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const applyPointer = () => {
    frameRef.current = null;
    const root = rootRef.current;
    if (!root) return;

    const { x, y } = pointerRef.current;
    root.style.setProperty("--hero-rotate-x", `${(0.5 - y) * 4}deg`);
    root.style.setProperty("--hero-rotate-y", `${(x - 0.5) * 6}deg`);
    root.style.setProperty("--hero-scale", "1.015");
    root.style.setProperty("--hero-highlight-x", `${(x - 0.5) * 3}%`);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    pointerRef.current = {
      x: Math.min(1, Math.max(0, (event.clientX - bounds.left) / bounds.width)),
      y: Math.min(1, Math.max(0, (event.clientY - bounds.top) / bounds.height)),
    };

    if (frameRef.current === null) frameRef.current = requestAnimationFrame(applyPointer);
  };

  const handlePointerLeave = () => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }

    const root = rootRef.current;
    if (!root) return;
    root.style.setProperty("--hero-rotate-x", "0deg");
    root.style.setProperty("--hero-rotate-y", "0deg");
    root.style.setProperty("--hero-scale", "1");
    root.style.setProperty("--hero-highlight-x", "0%");
  };

  return (
    <section
      ref={rootRef}
      className={className}
      style={restingStyle}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </section>
  );
}
