export default function Footer() {
  return (
    <footer className="border-t border-[#141414] px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-[#5f5f5f]">
            FORJA & Diseño
          </p>

          <p className="mt-2 text-sm text-[#444]">
            Arquitectura metálica contemporánea.
          </p>
        </div>

        <div className="h-[1px] w-24 bg-[#FF4500]" />
      </div>
    </footer>
  );
}