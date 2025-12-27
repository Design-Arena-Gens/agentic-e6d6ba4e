const features = [
  {
    title: "Builder visual",
    description:
      "Arrastra secciones, configura layouts responsivos y conecta datos reales sin escribir código.",
    icon: "🎛️",
  },
  {
    title: "Data Viz integrado",
    description:
      "Inserta gráficas, mapas y dashboards con datasets en vivo para validar decisiones de producto.",
    icon: "📊",
  },
  {
    title: "UI Components",
    description:
      "Biblioteca de componentes accesibles, con tokens de diseño y variantes listas para producción.",
    icon: "🧩",
  },
  {
    title: "Colaboración",
    description:
      "Comenta, comparte y versiona escenarios en tiempo real con tu equipo multidisciplinario.",
    icon: "🤝",
  },
];

export default function FeatureGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
        >
          <div className="mb-4 text-3xl">{feature.icon}</div>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {feature.title}
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {feature.description}
          </p>
        </div>
      ))}
    </section>
  );
}
