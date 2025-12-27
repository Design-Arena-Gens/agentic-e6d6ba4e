const highlights = [
  {
    title: "Pensado para squads híbridos",
    copy: "Designers, product managers y data analysts colaboran en un canvas compartido con roles y permisos.",
  },
  {
    title: "Iteración continua",
    copy: "Publica versiones, recibe feedback contextual y aplica cambios sin romper flujos existentes.",
  },
  {
    title: "Entrega sin fricción",
    copy: "Exporta especificaciones para engineering con documentación generada automáticamente.",
  },
];

export default function WorkflowHighlights() {
  return (
    <section className="rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-8 text-zinc-100 shadow-lg">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">Unifica tu ciclo de diseño</h2>
        <p className="text-sm text-zinc-300">
          Design Arena coordina a tu equipo de principio a fin, desde el insight
          inicial hasta la entrega a ingeniería.
        </p>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
          >
            <h3 className="text-base font-semibold">{item.title}</h3>
            <p className="mt-2 text-xs text-zinc-300">{item.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
