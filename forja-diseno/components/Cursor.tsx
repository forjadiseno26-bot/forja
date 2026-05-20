"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[999] hidden h-6 w-6 rounded-full border border-[#FF4500] md:block"
      style={{
        transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
      }}
    />
  );
}