export default function Footer() {
  return (
    <footer className="mt-12 flex flex-col items-center gap-2 border-t border-zinc-200 pt-6 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
      <span>© {new Date().getFullYear()} Design Arena Studio.</span>
      <span>Impulsa productos memorables con datos y diseño unificados.</span>
    </footer>
  );
}
