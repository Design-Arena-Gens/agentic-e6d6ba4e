const components = [
  {
    name: "Panels",
    description: "Secciones con tabs, drag & drop, slots dinámicos y soporte RTL.",
  },
  {
    name: "Forms",
    description: "Validaciones instantáneas, campos inteligentes y tokens accesibles.",
  },
  {
    name: "Charts",
    description: "Visualizaciones personalizables conectadas a datasets en vivo.",
  },
  {
    name: "Navigation",
    description:
      "Barras, sidebars y menús responsivos con estados sincronizados al builder.",
  },
];

export default function UIComponentsShowcase() {
  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          UI Components listos para producción
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Mezcla componentes atómicos y patrones prearmados. Personaliza colores,
          tipografías y micro estados desde el sistema de tokens.
        </p>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {components.map((component) => (
          <div
            key={component.name}
            className="rounded-2xl border border-dashed border-blue-200/70 bg-blue-50/70 p-4 dark:border-blue-500/40 dark:bg-blue-500/10"
          >
            <h3 className="text-base font-semibold text-blue-700 dark:text-blue-200">
              {component.name}
            </h3>
            <p className="mt-2 text-xs text-blue-700/80 dark:text-blue-100/80">
              {component.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
