export default function Hero() {
  return (
    <section className="flex flex-col gap-6 rounded-3xl bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 px-8 py-16 text-white shadow-xl">
      <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-sm font-medium backdrop-blur">
        Design Arena · Experiencias visuales sin código
      </span>
      <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
        Diseña, construye y presenta productos digitales desde un único
        playground creativo.
      </h1>
      <p className="max-w-2xl text-lg text-white/80">
        Design Arena combina un builder modular, librerías de UI
        personalizables y data viz interactivo para que transformes ideas en
        prototipos navegables en cuestión de minutos.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href="#builder"
          className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-base font-semibold text-blue-700 transition hover:bg-blue-100"
        >
          Explorar Builder
        </a>
        <a
          href="#data-viz"
          className="inline-flex items-center justify-center rounded-full border border-white/50 px-5 py-3 text-base font-semibold text-white transition hover:bg-white/10"
        >
          Ver Data Viz
        </a>
      </div>
    </section>
  );
}
