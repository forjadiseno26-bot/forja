"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const { register, handleSubmit, reset } = useForm();

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  async function onSubmit(data: any) {
    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccess(true);
        reset();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contacto"
      className="border-t border-[#141414] px-6 py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-20 lg:grid-cols-2">
        <Reveal>
          <div>
            <div className="mb-8 h-[2px] w-20 bg-[#FF4500]" />

            <h2 className="text-5xl font-black uppercase tracking-[-0.04em]">
              Contacto
            </h2>

            <p className="mt-8 max-w-xl leading-relaxed text-[#8E8E93]">
              Solicita una cotización para proyectos arquitectónicos,
              mobiliario industrial o piezas personalizadas.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <input
                {...register("name")}
                placeholder="Nombre"
                required
                className="border border-[#1f1f1f] bg-transparent px-5 py-4 text-white outline-none transition duration-300 placeholder:text-[#5c5c5c] focus:border-[#FF4500]"
              />

              <input
                {...register("email")}
                type="email"
                placeholder="Correo"
                required
                className="border border-[#1f1f1f] bg-transparent px-5 py-4 text-white outline-none transition duration-300 placeholder:text-[#5c5c5c] focus:border-[#FF4500]"
              />
            </div>

            <input
              {...register("project")}
              placeholder="Tipo de Proyecto"
              required
              className="w-full border border-[#1f1f1f] bg-transparent px-5 py-4 text-white outline-none transition duration-300 placeholder:text-[#5c5c5c] focus:border-[#FF4500]"
            />

            <textarea
              {...register("message")}
              rows={6}
              placeholder="Describe tu proyecto"
              required
              className="w-full resize-none border border-[#1f1f1f] bg-transparent px-5 py-4 text-white outline-none transition duration-300 placeholder:text-[#5c5c5c] focus:border-[#FF4500]"
            />

            <button
              type="submit"
              disabled={loading}
              className="inline-flex border border-[#FF4500] bg-[#FF4500] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition duration-500 hover:bg-transparent hover:shadow-[0_0_30px_rgba(255,69,0,0.25)] disabled:opacity-50"
            >
              {loading
                ? "Enviando..."
                : "Solicitar Cotización"}
            </button>

            {success && (
              <p className="text-sm text-[#FF4500]">
                Solicitud enviada correctamente.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}