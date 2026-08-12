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
  "--hero-drag-x": string;
  "--hero-drag-y": string;
  "--hero-atmosphere-x": string;
  "--hero-atmosphere-y": string;
  "--hero-reflection-x": string;
  "--hero-reflection-y": string;
};

const restingStyle: PerspectiveStyle = {
  "--hero-rotate-x": "0deg",
  "--hero-rotate-y": "0deg",
  "--hero-scale": "1",
  "--hero-drag-x": "0px",
  "--hero-drag-y": "0px",
  "--hero-atmosphere-x": "0px",
  "--hero-atmosphere-y": "0px",
  "--hero-reflection-x": "0px",
  "--hero-reflection-y": "0px",
};

export function HeroPerspective({ children, className }: HeroPerspectiveProps) {
  const rootRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 0.5, y: 0.5 });
  const intensityRef = useRef(0);
  const startRef = useRef({ x: 0, y: 0 });
  const dragRef = useRef({ x: 0, y: 0 });
  const draggingRef = useRef(false);

  useEffect(() => () => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
  }, []);

  const render = () => {
    frameRef.current = null;
    const root = rootRef.current;
    if (!root) return;
    const { x, y } = pointerRef.current;
    const intensity = intensityRef.current;
    root.style.setProperty("--hero-rotate-x", `${(0.5 - y) * 1 * intensity}deg`);
    root.style.setProperty("--hero-rotate-y", `${(x - 0.5) * 2 * intensity}deg`);
    root.style.setProperty("--hero-scale", `${1 + 0.006 * intensity}`);
    root.style.setProperty("--hero-drag-x", `${dragRef.current.x + (x - 0.5) * 40 * intensity}px`);
    root.style.setProperty("--hero-drag-y", `${dragRef.current.y + (y - 0.5) * 18 * intensity}px`);
    root.style.setProperty("--hero-atmosphere-x", `${(x - 0.5) * 14 * intensity}px`);
    root.style.setProperty("--hero-atmosphere-y", `${(y - 0.5) * 8 * intensity}px`);
    root.style.setProperty("--hero-reflection-x", `${(x - 0.5) * 60 * intensity}px`);
    root.style.setProperty("--hero-reflection-y", `${(y - 0.5) * 24 * intensity}px`);
  };

  const schedule = () => {
    if (frameRef.current === null) frameRef.current = requestAnimationFrame(render);
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    const target = event.target as HTMLElement;
    if (!target.closest(".hero-sword-mount")) return;
    draggingRef.current = true;
    startRef.current = { x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
    event.currentTarget.dataset.dragging = "true";
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse") return;
    const visual = event.currentTarget.querySelector<HTMLElement>(".hero-scene-visual");
    if (!visual) return;
    const bounds = visual.getBoundingClientRect();
    const proximityX = Math.max(bounds.left - event.clientX, 0, event.clientX - bounds.right);
    const proximityY = Math.max(bounds.top - event.clientY, 0, event.clientY - bounds.bottom);
    const distance = Math.hypot(proximityX, proximityY);
    const proximity = Math.max(0, 1 - distance / 180);
    const inside = event.clientX >= bounds.left && event.clientX <= bounds.right
      && event.clientY >= bounds.top && event.clientY <= bounds.bottom;
    intensityRef.current = inside ? 1 : proximity * 0.62;
    pointerRef.current = {
      x: Math.min(1, Math.max(0, (event.clientX - bounds.left) / bounds.width)),
      y: Math.min(1, Math.max(0, (event.clientY - bounds.top) / bounds.height)),
    };
    if (draggingRef.current) {
      dragRef.current = {
        x: Math.max(-4, Math.min(4, (event.clientX - startRef.current.x) * 0.08)),
        y: Math.max(-3, Math.min(3, (event.clientY - startRef.current.y) * 0.06)),
      };
    }
    schedule();
  };

  const resetDrag = (event: ReactPointerEvent<HTMLElement>) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    dragRef.current = { x: 0, y: 0 };
    delete event.currentTarget.dataset.dragging;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    schedule();
  };

  const handlePointerLeave = () => {
    if (draggingRef.current) return;
    pointerRef.current = { x: 0.5, y: 0.5 };
    intensityRef.current = 0;
    dragRef.current = { x: 0, y: 0 };
    schedule();
  };

  return (
    <section
      ref={rootRef}
      className={className}
      style={restingStyle}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={resetDrag}
      onPointerCancel={resetDrag}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </section>
  );
}
