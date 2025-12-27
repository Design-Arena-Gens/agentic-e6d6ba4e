const faqs = [
  {
    question: "¿Necesito saber programar para usar Design Arena?",
    answer:
      "No. El builder está orientado a creación visual con componentes inteligentes. Si quieres personalizar lógica avanzada, puedes usar snippets opcionales.",
  },
  {
    question: "¿Cómo se integra con mis herramientas actuales?",
    answer:
      "Dispones de conectores nativos para suites como Figma, Jira, Airtable, Notion y APIs REST. También puedes sincronizar con tu repositorio de componentes.",
  },
  {
    question: "¿Puedo trabajar con datos sensibles?",
    answer:
      "Sí. Configura entornos con data anonimizada o roles segmentados. El control de acceso granular protege cada escenario compartido.",
  },
];

export default function FAQ() {
  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
        Preguntas frecuentes
      </h2>
      <div className="mt-4 space-y-4">
        {faqs.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-zinc-200 bg-zinc-50/60 p-4 transition open:border-blue-300 open:bg-blue-50/60 dark:border-zinc-800 dark:bg-zinc-900/50 dark:open:border-blue-500/50 dark:open:bg-blue-500/10"
          >
            <summary className="cursor-pointer text-sm font-semibold text-zinc-800 marker:text-blue-600 transition dark:text-zinc-100">
              {item.question}
            </summary>
            <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-300">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
