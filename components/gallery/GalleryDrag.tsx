"use client";

import type { PointerEvent as ReactPointerEvent, ReactNode } from "react";
import { useEffect, useRef } from "react";

interface GalleryDragProps {
  children: ReactNode;
}

export function GalleryDrag({ children }: GalleryDragProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const startRef = useRef({ x: 0, y: 0 });
  const offsetRef = useRef({ x: 0, y: 0 });
  const draggingRef = useRef(false);

  useEffect(() => () => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
  }, []);

  const render = () => {
    frameRef.current = null;
    const root = rootRef.current;
    if (!root) return;
    root.style.setProperty("--gallery-drag-x", `${offsetRef.current.x}px`);
    root.style.setProperty("--gallery-drag-y", `${offsetRef.current.y}px`);
  };

  const schedule = () => {
    if (frameRef.current === null) frameRef.current = requestAnimationFrame(render);
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    draggingRef.current = true;
    startRef.current = { x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
    event.currentTarget.dataset.dragging = "true";
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    offsetRef.current = {
      x: Math.max(-6, Math.min(6, (event.clientX - startRef.current.x) * 0.12)),
      y: Math.max(-6, Math.min(6, (event.clientY - startRef.current.y) * 0.12)),
    };
    schedule();
  };

  const reset = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    offsetRef.current = { x: 0, y: 0 };
    delete event.currentTarget.dataset.dragging;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    schedule();
  };

  return (
    <div
      ref={rootRef}
      className="gallery-photo-media"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={reset}
      onPointerCancel={reset}
    >
      {children}
    </div>
  );
}
