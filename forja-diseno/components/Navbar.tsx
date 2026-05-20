"use client";

import { motion } from "framer-motion";
import { Inter, Playfair_Display } from "next/font/google";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["900"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["700"],
});

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 z-50 w-full border-b border-[#1a1a1a] bg-black/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-baseline gap-2">
          <span
            className={`${inter.className} text-xl font-black uppercase tracking-[0.2em]`}
          >
            FORJA &
          </span>

          <span
            className={`${playfair.className} text-xl italic text-[#FF4500]`}
          >
            Diseño
          </span>
        </div>

        <nav className="hidden gap-10 md:flex">
          {["Servicios", "Proyectos", "Contacto"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm uppercase tracking-[0.15em] text-[#8E8E93] transition hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? (
            <X className="text-white" />
          ) : (
            <Menu className="text-white" />
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#1a1a1a] bg-black md:hidden">
          <div className="flex flex-col gap-6 px-6 py-8">
            {["Servicios", "Proyectos", "Contacto"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-lg uppercase tracking-[0.18em] text-[#8E8E93]"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.header>
  );
}