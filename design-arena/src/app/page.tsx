import FAQ from "../components/FAQ";
import BuilderJourney from "../components/BuilderJourney";
import DataVizSection from "../components/DataVizSection";
import FeatureGrid from "../components/FeatureGrid";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import UIComponentsShowcase from "../components/UIComponentsShowcase";
import WorkflowHighlights from "../components/WorkflowHighlights";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-zinc-100 px-4 py-16 font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 sm:px-8">
      <main className="flex w-full max-w-6xl flex-col gap-12">
        <Hero />
        <FeatureGrid />
        <BuilderJourney />
        <DataVizSection />
        <UIComponentsShowcase />
        <WorkflowHighlights />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}
