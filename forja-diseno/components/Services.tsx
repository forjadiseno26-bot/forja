import Reveal from "@/components/Reveal";

const services = [
  {
    title: "Herrería Artística",
    description:
      "Forja tradicional aplicada a conceptos arquitectónicos contemporáneos.",
  },

  {
    title: "Carpintería en Metal",
    description:
      "Mobiliario industrial y estructuras minimalistas de alta precisión.",
  },

  {
    title: "Diseño a Medida",
    description:
      "Conceptos exclusivos para proyectos residenciales y comerciales.",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="border-t border-[#141414] px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex items-center gap-4">
          <div className="h-[1px] w-16 bg-[#FF4500]" />

          <span className="text-sm uppercase tracking-[0.25em] text-[#8E8E93]">
            Disciplinas
          </span>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <Reveal key={service.title}>
              <div className="group relative overflow-hidden metal-border bg-[#050505] p-10 transition duration-500 hover:border-[#FF4500]/40">
                <div className="absolute left-0 top-0 h-full w-[3px] bg-[#FF4500] opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="mb-8 flex items-center gap-4">
                  <div className="h-[1px] w-10 bg-[#FF4500]" />

                  <span className="text-xs uppercase tracking-[0.2em] text-[#5f5f5f]">
                    Premium Metalwork
                  </span>
                </div>

                <h3 className="mb-6 text-2xl font-bold tracking-tight">
                  {service.title}
                </h3>

                <p className="leading-relaxed text-[#8E8E93]">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}