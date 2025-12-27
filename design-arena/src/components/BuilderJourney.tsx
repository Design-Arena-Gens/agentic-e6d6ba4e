"use client";

import { useState } from "react";

const steps = [
  {
    id: "setup",
    title: "Configura tus fuentes",
    description:
      "Conecta APIs, CSVs o colecciones internas. El builder genera modelos de datos automáticamente y te muestra cómo fluyen en tu experiencia.",
    hint: "Integra Figma, Airtable o tu propio endpoint REST.",
  },
  {
    id: "layout",
    title: "Diseña layouts adaptables",
    description:
      "Combina secciones prearmadas con grids fluidos. Ajusta breakpoints visualmente y reutiliza tokens de diseño para mantener consistencia.",
    hint: "El inspector te sugiere variantes basadas en patrones exitosos.",
  },
  {
    id: "interactions",
    title: "Define interacciones y lógica",
    description:
      "Orquesta estados, flujos y automatizaciones con nodos drag & drop. Previsualiza transiciones con microinteracciones realistas.",
    hint: "Crea versiones de onboarding, checkouts o dashboards sin código.",
  },
  {
    id: "publish",
    title: "Comparte y mide impacto",
    description:
      "Publica escenarios navegables, integra analytics y recoge feedback accionable en un solo lugar.",
    hint: "Vincula métricas clave con la herramienta Insight Pulse.",
  },
];

export default function BuilderJourney() {
  const [active, setActive] = useState(steps[0]);

  return (
    <section
      id="builder"
      className="grid gap-6 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900 md:grid-cols-[260px_1fr]"
    >
      <aside className="flex flex-col border-b border-zinc-200 bg-zinc-50/60 p-4 dark:border-zinc-800 dark:bg-zinc-900/40 md:border-b-0 md:border-r">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-500">
          Flujo del Builder
        </h2>
        <nav className="flex flex-col gap-2">
          {steps.map((step) => {
            const isActive = step.id === active.id;
            return (
              <button
                key={step.id}
                onClick={() => setActive(step)}
                className={`rounded-xl px-3 py-2 text-left text-sm transition ${
                  isActive
                    ? "bg-white text-blue-600 shadow-sm dark:bg-zinc-800"
                    : "text-zinc-600 hover:bg-white hover:text-blue-500 dark:text-zinc-400 dark:hover:bg-zinc-800/60"
                }`}
              >
                {step.title}
              </button>
            );
          })}
        </nav>
      </aside>
      <article className="flex flex-col gap-4 p-6">
        <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          {active.title}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {active.description}
        </p>
        <div className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-4 text-xs text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900/60">
          {active.hint}
        </div>
      </article>
    </section>
  );
}
