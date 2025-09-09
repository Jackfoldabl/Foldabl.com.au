import React, { useEffect } from "react";
import { setSeoTags } from "../lib/seo";

export const HomesSA = () => {
  const phone = "0480 758 298";
  const tel = "+61480758298";

  useEffect(() => {
    setSeoTags({
      title: "Modular Homes in SA | Fast Delivery & Professional Installation",
      description:
        "Affordable modular homes in South Australia. Approvals handled, ~8–12 week delivery, licensed installation. Free consultation.",
      url: "https://foldabl.com.au/homes/sa",
      image: "https://foldabl.com.au/img/rectangle-6-1.png",
    });
    const bc = document.createElement("script");
    bc.type = "application/ld+json";
    bc.id = "sa-breadcrumbs";
    bc.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Homes", item: "https://foldabl.com.au/homes" },
        { "@type": "ListItem", position: 2, name: "South Australia", item: "https://foldabl.com.au/homes/sa" }
      ]
    });
    document.head.appendChild(bc);
    return () => { const s = document.getElementById("sa-breadcrumbs"); if (s) s.remove(); };
  }, []);

  return (
    <main className="min-h-screen bg-white text-collection-1-dark">
      <header className="bg-collection-1-dark text-white py-10 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight">Modular Homes in SA</h1>
          <ul className="mt-4 text-lg opacity-90 list-disc pl-6">
            <li>~8–12 week delivery after approvals</li>
            <li>Approvals handled for you</li>
            <li>Licensed installation across South Australia</li>
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
            <p className="mt-3">Adelaide, Adelaide Hills, Barossa, Fleurieu Peninsula and regional SA. We plan delivery windows to suit local traffic and weather conditions.</p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Approvals in SA</h2>
            <p className="mt-3">We prepare and lodge documentation aligned to South Australian planning rules and your local council’s requirements. Setbacks, site coverage and overlays (bushfire, flood, coastal) influence siting and detailing. We handle responses so your application progresses smoothly.</p>
            <p className="mt-3 text-sm">Learn more: <a href="/council-approval" className="underline">Council Approval</a></p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Housing Demand & Use Cases</h2>
            <p className="mt-3">Compact dwellings suit households adding family accommodation, creating rental income, or establishing a professional home office with minimal disruption.</p>
            <ul className="mt-2 list-disc pl-6">
              <li>Secondary dwelling for family support</li>
              <li>Rental studio for additional income (where permitted)</li>
              <li>Dedicated home office or consulting space</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Land Use, Zoning & Overlays</h2>
            <p className="mt-3">Common checks include zone intent, setbacks, height, services and overlays (BAL/flood/coastal). We tailor design and documentation to meet local assessment criteria.</p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Popular Models in SA</h2>
            <ul className="mt-3 grid md:grid-cols-2 gap-3">
              <li className="p-4 rounded-xl border border-collection-1-dusk-steel"><strong>Foldäbl Studio</strong> — 27 sqm studio. <a href="/homes/foldabl-studio" className="underline">View details</a></li>
              <li className="p-4 rounded-xl border border-collection-1-dusk-steel"><strong>Foldäbl 42</strong> — two-bedroom layout. <a href="/homes/foldabl-42" className="underline">View details</a></li>
              <li className="p-4 rounded-xl border border-collection-1-dusk-steel"><strong>Expändäbl 20</strong> — flexible studio. <a href="/homes/expandabl-20" className="underline">View details</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Access & Delivery Logistics</h2>
            <p className="mt-3">We confirm crane setup zones, traffic control needs and protection for driveways and landscaping. Foundations and services are coordinated ahead of delivery.</p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">FAQs</h2>
            <div className="mt-3 space-y-3">
              <div><h3 className="text-xl font-medium">Can I add a rental studio on my property?</h3><p className="mt-1">Subject to local rules — we’ll advise based on your council requirements.</p></div>
              <div><h3 className="text-xl font-medium">How long does the full process take?</h3><p className="mt-1">Approvals vary; manufacturing ~8 weeks after approvals; install typically 1–5 days.</p></div>
            </div>
          </section>

          <section>
            <div className="flex flex-wrap gap-3 items-center">
              <a href={`tel:${tel}`} className="inline-flex items-center gap-3 bg-collection-1-dark text-white rounded-2xl px-4 py-2">Call {phone}</a>
              <a href="/#contact" className="inline-flex items-center gap-3 rounded-2xl border border-collection-1-dark px-4 py-2">Get Free Consultation</a>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
};

