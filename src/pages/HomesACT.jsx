import React, { useEffect } from "react";
import { setSeoTags } from "../lib/seo";

export const HomesACT = () => {
  const phone = "0480 758 298";
  const tel = "+61480758298";

  useEffect(() => {
    setSeoTags({
      title: "Modular Homes in ACT | Fast Delivery & Professional Installation",
      description:
        "Affordable modular homes in Australian Capital Territory. Approvals handled, ~8–12 week delivery, licensed installation. Free consultation.",
      url: "https://foldabl.com.au/homes/act",
      image: "https://foldabl.com.au/img/rectangle-6-1.png",
    });
    const bc = document.createElement("script");
    bc.type = "application/ld+json";
    bc.id = "act-breadcrumbs";
    bc.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Homes", item: "https://foldabl.com.au/homes" },
        { "@type": "ListItem", position: 2, name: "ACT", item: "https://foldabl.com.au/homes/act" }
      ]
    });
    document.head.appendChild(bc);
    return () => { const s = document.getElementById("act-breadcrumbs"); if (s) s.remove(); };
  }, []);

  return (
    <main className="min-h-screen bg-white text-collection-1-dark">
      <header className="bg-collection-1-dark text-white py-10 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight">Modular Homes in ACT</h1>
          <ul className="mt-4 text-lg opacity-90 list-disc pl-6">
            <li>~8–12 week delivery after approvals</li>
            <li>Approvals handled for you</li>
            <li>Licensed installation across the ACT</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`tel:${tel}`} className="inline-flex items-center gap-3 bg-collection-1-light text-collection-1-dark rounded-2xl px-4 py-2">Call {phone}</a>
            <a href="/#contact" className="inline-flex items-center gap-3 rounded-2xl border border-white/40 px-4 py-2 hover:bg-white/10">Get Free Consultation</a>
          </div>
        </div>
      </header>

      <article className="px-6 md:px-10 py-12">
        <div className="max-w-5xl mx-auto space-y-10">
          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Where We Deliver</h2>
            <p className="mt-3">Canberra and surrounding ACT suburbs. We coordinate cranage and access for compact blocks and shared driveways common in newer estates.</p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Approvals in ACT</h2>
            <p className="mt-3">We align submissions to ACT planning requirements including setbacks, private open space and building envelope controls. We manage council liaison throughout.</p>
            <p className="mt-3 text-sm">Learn more: <a href="/council-approval" className="underline">Council Approval</a></p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Housing Demand & Use Cases</h2>
            <p className="mt-3">With strong demand for flexible living, compact studios support multigenerational living, home offices and rental options where permitted.</p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Land Use, Zoning & Overlays</h2>
            <p className="mt-3">We address zone intent and local overlays such as bushfire and flood, ensuring siting and construction meet local controls.</p>
          </section>
        </div>
      </article>
    </main>
  );
};

