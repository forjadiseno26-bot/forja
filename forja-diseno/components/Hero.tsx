"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["900"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["700"],
});

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32">
      <div className="grid-pattern absolute inset-0 opacity-30" />

      <div className="mx-auto grid max-w-7xl gap-20 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="mb-8 h-[2px] w-24 bg-[#FF4500]" />

          <h1 className="leading-none">
            <span
              className={`${inter.className} block text-7xl font-black uppercase tracking-[-0.05em] md:text-9xl`}
            >
              FORJA &
            </span>

            <span
              className={`${playfair.className} block text-6xl italic text-[#FF4500] md:text-8xl`}
            >
              Diseño
            </span>
          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-[#8E8E93]">
            Metalurgia contemporánea, herrería arquitectónica y fabricación
            premium para espacios residenciales y comerciales.
          </p>

          <a
            href="#contacto"
            className="mt-12 inline-flex border border-[#FF4500] bg-[#FF4500] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition duration-500 hover:scale-[1.03] hover:bg-transparent hover:shadow-[0_0_60px_rgba(255,69,0,0.45)]"
          >
            Iniciar Proyecto
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative hidden h-[700px] overflow-hidden border border-[#1a1a1a] lg:block"
        >
          <Image
            src="/images/hero-metalurgia.jpg"
            alt="Metalurgia"
            fill
            priority
            quality={90}
            className="object-cover grayscale transition duration-1000 will-change-transform hover:scale-110 hover:grayscale-0"
          />

          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </div>
    </section>
  );
}