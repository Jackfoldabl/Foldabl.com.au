import React, { useEffect } from "react";
import { setSeoTags } from "../lib/seo";

export const Homes = () => {
  useEffect(() => {
    setSeoTags({
      title: "Our Modular Home Range | Foldabl Homes",
      description: "Explore our range: Foldäbl Studio, Foldäbl 42 and Expändäbl 20. From ~$60k with ~8‑week delivery and licensed installation.",
      url: "https://foldabl.com.au/homes",
      image: "https://foldabl.com.au/img/rectangle-5.png",
    });
  }, []);

  const models = [
    { name: "Foldäbl Studio", href: "/homes/foldabl-studio", blurb: "27 sqm studio — smart, compact and versatile." },
    { name: "Foldäbl 42", href: "/homes/foldabl-42", blurb: "Two‑bedroom, 42.6 sqm layout for couples/families." },
    { name: "Expändäbl 20", href: "/homes/expandabl-20", blurb: "Flexible studio — guest, rental or office." },
  ];

  return (
    <main className="min-h-screen bg-white text-collection-1-dark">
      <header className="bg-collection-1-dark text-white py-10 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight">Our Modular Home Range</h1>
          <p className="mt-3 opacity-90">Professionally installed, approvals handled, ~8‑week delivery.</p>
        </div>
      </header>
      <section className="px-6 md:px-10 py-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4">
          {models.map((m) => (
            <a key={m.href} href={m.href} className="p-5 rounded-2xl border border-collection-1-dusk-steel hover:bg-collection-1-light-medium transition-colors">
              <h2 className="text-xl font-medium">{m.name}</h2>
              <p className="opacity-80 mt-1 text-sm">{m.blurb}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};

