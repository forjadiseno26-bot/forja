"use client";

import { motion } from "framer-motion";
import { useReveal } from "@/lib/useReveal";

export default function Reveal({
  children,
}: {
  children: React.ReactNode;
}) {
  const { ref, inView } = useReveal();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}