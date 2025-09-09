import React, { useEffect } from "react";
import { setSeoTags } from "../lib/seo";

export const ServiceAreas = () => {
  useEffect(() => {
    setSeoTags({
      title: "Service Areas | Modular & Tiny Homes Australia‑Wide | Foldabl",
      description: "We deliver and install modular and tiny homes across Australia with licensed builders. Explore service areas by state.",
      url: "https://foldabl.com.au/service-areas",
      image: "https://foldabl.com.au/img/rectangle-6-2.png",
    });
  }, []);

  const states = [
    { code: "nsw", name: "New South Wales", href: "/homes/nsw" },
    { code: "qld", name: "Queensland", href: "/homes/qld" },
    { code: "vic", name: "Victoria", href: "/homes/vic" },
    { code: "sa", name: "South Australia", href: "/homes/sa" },
    { code: "wa", name: "Western Australia", href: "/homes/wa" },
    { code: "tas", name: "Tasmania", href: "/homes/tas" },
    { code: "nt", name: "Northern Territory", href: "/homes/nt" },
    { code: "act", name: "Australian Capital Territory", href: "/homes/act" },
  ];

  return (
    <main className="min-h-screen bg-white text-collection-1-dark">
      <header className="bg-collection-1-dark text-white py-10 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight">Service Areas</h1>
          <p className="mt-3 opacity-90">Australia‑wide delivery and professional installation by licensed builders.</p>
        </div>
      </header>

      <section className="px-6 md:px-10 py-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4">
          {states.map((s) => (
            <a key={s.code} href={s.href} className="p-5 rounded-2xl border border-collection-1-dusk-steel hover:bg-collection-1-light-medium transition-colors">
              <h2 className="text-xl font-medium">{s.name}</h2>
              <p className="opacity-80 mt-1 text-sm">Approvals, delivery and installation in {s.name}.</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};

