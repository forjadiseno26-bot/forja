"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
      <motion.div
        initial={{
          scale: 0.8,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        className="text-xl font-bold tracking-[0.35em] text-[#FF4500]"
      >
        FORJA & DISEÑO
      </motion.div>
    </div>
  );
}