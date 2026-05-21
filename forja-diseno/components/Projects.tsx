import Image from "next/image";
import Reveal from "@/components/Reveal";

const projects = [
  {
    title: "Decoración e Interiores",
    image: "/images/interiores-industriales.jpg",
  },

  {
    title: "Mobiliario Industrial",
    image: "/images/mobiliario-industrial.jpg",
  },

  {
    title: "Cerramientos",
    image: "/images/cerramientos-minimalistas.jpg",
  },

  {
    title: "Equipamiento de Exterior",
    image: "/images/equipo-exterior.jpg",
  },
];

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="border-t border-[#141414] px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex items-center gap-4">
          <div className="h-[1px] w-16 bg-[#FF4500]" />

          <span className="text-sm uppercase tracking-[0.25em] text-[#8E8E93]">
            Proyectos Destacados
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Reveal key={project.title}>
              <article className="group metal-border relative aspect-[16/10] overflow-hidden bg-[#050505]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale transition duration-1000 ease-out will-change-transform group-hover:scale-105 group-hover:grayscale-0"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 p-8">
                  <div className="mb-4 h-[2px] w-12 bg-[#FF4500]" />

                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    {project.title}
                  </h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}