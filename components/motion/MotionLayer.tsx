"use client";

import { useEffect, useRef } from "react";

const revealSelector = [
  "main > header",
  "main > section",
  "main > .section-stack > section",
].join(",");
const metalSweepSelector = "main > header, main > .section-stack > section:first-of-type";

export function MotionLayer() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopPointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (reducedMotion.matches) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    elements.forEach((element) => element.classList.add("motion-reveal"));
    const sweepElements = Array.from(
      document.querySelectorAll<HTMLElement>(metalSweepSelector),
    );
    sweepElements.forEach((element) => element.classList.add("metal-sweep"));
    const observedElements = Array.from(new Set([...elements, ...sweepElements]));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("motion-reveal--visible");
          entry.target.classList.add("metal-sweep--visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );
    observedElements.forEach((element) => observer.observe(element));

    let frame: number | null = null;
    let pointerX = -200;
    let pointerY = -200;
    const glow = glowRef.current;

    const renderGlow = () => {
      frame = null;
      glow?.style.setProperty("--cursor-x", `${pointerX}px`);
      glow?.style.setProperty("--cursor-y", `${pointerY}px`);
    };
    const handlePointerMove = (event: PointerEvent) => {
      if (!desktopPointer.matches) return;
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (frame === null) frame = requestAnimationFrame(renderGlow);
    };
    const handlePointerLeave = () => {
      pointerX = -200;
      pointerY = -200;
      if (frame === null) frame = requestAnimationFrame(renderGlow);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("pointerleave", handlePointerLeave);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={glowRef} className="cursor-metallic-glow" aria-hidden="true" />;
}
