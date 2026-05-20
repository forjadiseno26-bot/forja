"use client";

import { useInView } from "react-intersection-observer";

export function useReveal(threshold = 0.15) {
  return useInView({
    triggerOnce: true,
    threshold,
  });
}