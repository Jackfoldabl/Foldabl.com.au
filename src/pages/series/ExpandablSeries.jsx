import React, { useEffect } from "react";
import { setSeoTags } from "../../lib/seo";

export const ExpandablSeries = () => {
  useEffect(() => {
    setSeoTags({
      title: "Expändäbl Series | Modular Homes by Foldabl",
      description: "Explore the Expändäbl series including Expändäbl 20 and future models.",
      url: "https://foldabl.com.au/homes/expandabl-series",
      image: "https://foldabl.com.au/img/rectangle-5-3.png",
    });
  }, []);
  return (
    <main className="min-h-screen bg-white text-collection-1-dark">
      <header className="bg-collection-1-dark text-white py-10 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight">Expändäbl Series</h1>
          <p className="mt-3 opacity-90">Flexible studio solutions with professional installation.</p>
        </div>
      </header>
      <section className="px-6 md:px-10 py-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4">
          <a href="/homes/expandabl-20" className="p-5 rounded-2xl border border-collection-1-dusk-steel hover:bg-collection-1-light-medium transition-colors">
            <h2 className="text-xl font-medium">Expändäbl 20</h2>
            <p className="opacity-80 mt-1 text-sm">Versatile studio for guest, rental or office uses.</p>
          </a>
          <a href="/homes/coming-soon" className="p-5 rounded-2xl border border-collection-1-dusk-steel hover:bg-collection-1-light-medium transition-colors">
            <h2 className="text-xl font-medium">Coming Soon</h2>
            <p className="opacity-80 mt-1 text-sm">Register interest for upcoming Expändäbl models.</p>
          </a>
        </div>
      </section>
    </main>
  );
};

