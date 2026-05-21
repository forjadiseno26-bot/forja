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
  function scrollToContact() {
    const section = document.getElementById("contacto");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32">
      {/* BACKGROUND IMAGE */}

      <div className="absolute inset-0">
        <Image
          src="/images/hero-metalurgia.jpg"
          alt="FORJA & Diseño"
          fill
          priority
          quality={100}
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,69,0,0.18),transparent_35%)]" />
      </div>

      {/* GRID */}

      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* CONTENT */}

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="max-w-4xl"
        >
          {/* TOP LABEL */}

          <div className="mb-8 flex items-center gap-4">
            <div className="h-[1px] w-16 bg-[#FF4500]" />

            <span className="text-sm uppercase tracking-[0.28em] text-[#8E8E93]">
              Arquitectura Metálica Contemporánea
            </span>
          </div>

          {/* TITLE */}

          <h1 className="leading-none">
            <span
              className={`${inter.className} block text-[16vw] font-black uppercase tracking-[-0.08em] text-white md:text-[9rem]`}
            >
              FORJA &
            </span>

            <span
              className={`${playfair.className} block text-[14vw] italic tracking-[-0.05em] text-[#FF4500] md:text-[7rem]`}
            >
              Diseño
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-[#b0b0b0] md:text-xl">
            Herrería arquitectónica, mobiliario industrial y
            metalurgia contemporánea desarrollada con precisión
            técnica y sensibilidad estética.
          </p>

          {/* CTA */}

          <button
            onClick={scrollToContact}
            className="mt-12 inline-flex items-center border border-[#FF4500] bg-[#FF4500] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition duration-500 hover:scale-[1.03] hover:bg-transparent hover:shadow-[0_0_60px_rgba(255,69,0,0.45)]"
          >
            Iniciar Proyecto
          </button>
        </motion.div>
      </div>

      {/* BOTTOM FADE */}

      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}