import React, { useEffect } from "react";
import { setSeoTags } from "../lib/seo";

export const HomesTAS = () => {
  const phone = "0480 758 298";
  const tel = "+61480758298";

  useEffect(() => {
    setSeoTags({
      title: "Modular Homes in TAS | Fast Delivery & Professional Installation",
      description:
        "Affordable modular homes in Tasmania. Approvals handled, ~8–12 week delivery, licensed installation. Free consultation.",
      url: "https://foldabl.com.au/homes/tas",
      image: "https://foldabl.com.au/img/rectangle-6-1.png",
    });
    const bc = document.createElement("script");
    bc.type = "application/ld+json";
    bc.id = "tas-breadcrumbs";
    bc.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Homes", item: "https://foldabl.com.au/homes" },
        { "@type": "ListItem", position: 2, name: "Tasmania", item: "https://foldabl.com.au/homes/tas" }
      ]
    });
    document.head.appendChild(bc);
    return () => { const s = document.getElementById("tas-breadcrumbs"); if (s) s.remove(); };
  }, []);

  return (
    <main className="min-h-screen bg-white text-collection-1-dark">
      <header className="bg-collection-1-dark text-white py-10 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight">Modular Homes in TAS</h1>
          <ul className="mt-4 text-lg opacity-90 list-disc pl-6">
            <li>~8–12 week delivery after approvals</li>
            <li>Approvals handled for you</li>
            <li>Licensed installation across Tasmania</li>
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
            <p className="mt-3">Hobart, Launceston, Devonport and regional TAS. We coordinate transport and cranage around weather and local access constraints.</p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Approvals in TAS</h2>
            <p className="mt-3">We prepare submissions that address setbacks, site services and any relevant overlays (bushfire, flood, coastal). We handle council liaison to keep your application moving.</p>
            <p className="mt-3 text-sm">Learn more: <a href="/council-approval" className="underline">Council Approval</a></p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Housing Demand & Use Cases</h2>
            <p className="mt-3">Compact homes suit downsizers, families supporting relatives and owners seeking a separate work studio — with lower disruption than major extensions.</p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Land Use, Zoning & Overlays</h2>
            <p className="mt-3">We address zone intent, setbacks/height, services connections and overlays specific to your site conditions, ensuring a clear and complete submission.</p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Popular Models in TAS</h2>
            <ul className="mt-3 grid md:grid-cols-2 gap-3">
              <li className="p-4 rounded-xl border border-collection-1-dusk-steel"><strong>Foldäbl Studio</strong> — 27 sqm studio. <a href="/homes/foldabl-studio" className="underline">View details</a></li>
              <li className="p-4 rounded-xl border border-collection-1-dusk-steel"><strong>Foldäbl 42</strong> — two-bedroom layout. <a href="/homes/foldabl-42" className="underline">View details</a></li>
              <li className="p-4 rounded-xl border border-collection-1-dusk-steel"><strong>Expändäbl 20</strong> — flexible studio. <a href="/homes/expandabl-20" className="underline">View details</a></li>
            </ul>
          </section>
        </div>
      </article>
    </main>
  );
};

