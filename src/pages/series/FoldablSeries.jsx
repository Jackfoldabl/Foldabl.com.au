import React, { useEffect } from "react";
import { setSeoTags } from "../../lib/seo";

export const FoldablSeries = () => {
  useEffect(() => {
    setSeoTags({
      title: "Foldäbl Series | Modular Homes by Foldabl",
      description: "Explore the Foldäbl series including Foldäbl Studio and Foldäbl 42 with professional installation.",
      url: "https://foldabl.com.au/homes/foldabl-series",
      image: "https://foldabl.com.au/img/rectangle-5.png",
    });
  }, []);
  return (
    <main className="min-h-screen bg-white text-collection-1-dark">
      <header className="bg-collection-1-dark text-white py-10 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight">Foldäbl Series</h1>
          <p className="mt-3 opacity-90">Engineered for fast delivery and professional installation.</p>
        </div>
      </header>
      <section className="px-6 md:px-10 py-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4">
          <a href="/homes/foldabl-studio" className="p-5 rounded-2xl border border-collection-1-dusk-steel hover:bg-collection-1-light-medium transition-colors">
            <h2 className="text-xl font-medium">Foldäbl Studio</h2>
            <p className="opacity-80 mt-1 text-sm">27 sqm compact studio.</p>
          </a>
          <a href="/homes/foldabl-42" className="p-5 rounded-2xl border border-collection-1-dusk-steel hover:bg-collection-1-light-medium transition-colors">
            <h2 className="text-xl font-medium">Foldäbl 42</h2>
            <p className="opacity-80 mt-1 text-sm">Two‑bedroom, 42.6 sqm layout.</p>
          </a>
        </div>
      </section>
    </main>
  );
};

