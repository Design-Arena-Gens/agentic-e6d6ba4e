"use client";

import type { ChartOptions } from "chart.js";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const data = {
  labels: ["Storyboards", "Dashboards", "Flows", "Mobile UI", "Web UI"],
  datasets: [
    {
      label: "Horas ahorradas por sprint",
      data: [18, 24, 16, 12, 20],
      backgroundColor: [
        "rgba(59, 130, 246, 0.8)",
        "rgba(14, 165, 233, 0.8)",
        "rgba(99, 102, 241, 0.8)",
        "rgba(6, 182, 212, 0.8)",
        "rgba(37, 99, 235, 0.8)",
      ],
      borderRadius: 12,
    },
  ],
};

const options: ChartOptions<"bar"> = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      backgroundColor: "#111827",
      borderWidth: 0,
      padding: 12,
      caretPadding: 8,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        color: "#475569",
        callback: (value) =>
          typeof value === "number" ? `${value}h` : `${value}`,
      },
      grid: {
        color: "rgba(148, 163, 184, 0.2)",
      },
    },
    x: {
      ticks: {
        color: "#475569",
      },
      grid: {
        display: false,
      },
    },
  },
};

export default function DataVizSection() {
  return (
    <section
      id="data-viz"
      className="flex flex-col gap-6 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          Data Viz para decisiones rápidas
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Conecta tus métricas a dashboards interactivos. El ejemplo muestra
          cuántas horas gana un equipo por sprint al usar Design Arena en distintas
          verticales.
        </p>
      </div>
      <div className="rounded-2xl bg-slate-50 p-6 dark:bg-slate-900/60">
        <Bar data={data} options={options} />
      </div>
      <ul className="grid gap-4 md:grid-cols-3">
        <li className="rounded-2xl bg-slate-100/70 p-4 text-xs font-medium text-slate-700 dark:bg-slate-800/60 dark:text-slate-300">
          Actualiza datos en vivo desde herramientas como Looker, Notion o
          BigQuery.
        </li>
        <li className="rounded-2xl bg-slate-100/70 p-4 text-xs font-medium text-slate-700 dark:bg-slate-800/60 dark:text-slate-300">
          Crea filtros por audiencia para presentar resultados relevantes en
          demos.
        </li>
        <li className="rounded-2xl bg-slate-100/70 p-4 text-xs font-medium text-slate-700 dark:bg-slate-800/60 dark:text-slate-300">
          Exporta capturas o comparte enlaces interactivos con stakeholders.
        </li>
      </ul>
    </section>
  );
}
