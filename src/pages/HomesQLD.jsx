import React, { useEffect } from "react";
import { setSeoTags } from "../lib/seo";

export const HomesQLD = () => {
  const phone = "0480 758 298";
  const tel = "+61480758298";

  useEffect(() => {
    setSeoTags({
      title: "Modular Homes in QLD | Fast Delivery & Professional Installation",
      description:
        "Affordable, professionally built modular homes in Queensland. Approvals handled, ~8-week delivery, licensed installation. Free consultation.",
      url: "https://foldabl.com.au/homes/qld",
      image: "https://foldabl.com.au/img/rectangle-6-1.png",
    });
    // BreadcrumbList schema
    const bc = document.createElement("script");
    bc.type = "application/ld+json";
    bc.id = "qld-breadcrumbs";
    bc.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Homes", item: "https://foldabl.com.au/homes" },
        { "@type": "ListItem", position: 2, name: "Queensland", item: "https://foldabl.com.au/homes/qld" }
      ]
    });
    document.head.appendChild(bc);
    return () => { const s = document.getElementById("qld-breadcrumbs"); if (s) s.remove(); };
  }, []);

  return (
    <main className="min-h-screen bg-white text-collection-1-dark">
      <header className="bg-collection-1-dark text-white py-10 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight">Modular Homes in QLD</h1>
          <ul className="mt-4 text-lg opacity-90 list-disc pl-6">
            <li>~8–12 week delivery after approvals</li>
            <li>Approvals handled for you</li>
            <li>Licensed installation across Queensland</li>
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
            <p className="mt-3">Brisbane, Gold Coast, Sunshine Coast, Toowoomba, Ipswich and broader QLD regions. We schedule delivery to suit local conditions (heat, storms) and coordinate cranage/traffic management for narrow streets or busy corridors.</p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Approvals in QLD</h2>
            <p className="mt-3">We align documentation to local planning provisions and definitions; parking and site coverage controls vary by council. Compact dwellings and secondary dwellings are typically assessed against your council’s planning scheme with local performance outcomes. Where overlays apply (flood, bushfire, coastal erosion), we address siting and construction responses explicitly. We manage lodgement and responses to information requests so your application stays on track.</p>
            <p className="mt-3 text-sm">Learn more: <a href="/council-approval" className="underline">Council Approval</a></p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Housing Demand & Use Cases</h2>
            <p className="mt-3">Queensland combines strong urban growth (SEQ) with regional lifestyle markets. Many households are adding compact dwellings to support multigenerational living, create home offices or generate rental income. Modular and tiny homes make it faster to respond to changes in family needs while maintaining compliance and quality.</p>
            <ul className="mt-2 list-disc pl-6">
              <li><strong>Family support:</strong> Independent space for parents or adult children on the same property.</li>
              <li><strong>Rental yields:</strong> Granny flats and studios can provide additional income where permitted.</li>
              <li><strong>Work from home:</strong> Separated, quiet workspace with lower disruption than renovations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Land Use, Zoning & Overlays</h2>
            <p className="mt-3">Each QLD council administers its planning scheme with zones such as low‑density residential, medium density, rural residential and more. Common considerations include:</p>
            <ul className="mt-2 list-disc pl-6">
              <li><strong>Secondary dwelling rules:</strong> Definitions, size limits and whether separate renting is allowed differ by council.</li>
              <li><strong>Setbacks/height/site cover:</strong> Protection of neighbourhood character and privacy.</li>
              <li><strong>Overlays:</strong> Flood hazard, bushfire hazard, landslide and coastal risks.</li>
              <li><strong>Services:</strong> Sewer connections vs onsite wastewater; power capacity and trenching routes.</li>
            </ul>
            <p className="mt-3">We design and document to satisfy these controls and supply clear responses for assessment officers.</p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Popular Models in QLD</h2>
            <ul className="mt-3 grid md:grid-cols-2 gap-3">
              <li className="p-4 rounded-xl border border-collection-1-dusk-steel"><strong>Foldäbl Studio</strong> — 27 sqm studio. <a href="/homes/foldabl-studio" className="underline">View details</a></li>
              <li className="p-4 rounded-xl border border-collection-1-dusk-steel"><strong>Foldäbl 42</strong> — two-bedroom layout. <a href="/homes/foldabl-42" className="underline">View details</a></li>
              <li className="p-4 rounded-xl border border-collection-1-dusk-steel"><strong>Expändäbl 20</strong> — flexible studio. <a href="/homes/expandabl-20" className="underline">View details</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Access & Delivery Logistics</h2>
            <p className="mt-3">We plan delivery around SEQ traffic and regional constraints. For hilly or narrow streets we review powerlines, street trees and crane setup areas. In coastal zones we account for soft ground and wind conditions, scheduling appropriate rigging and ground protection.</p>
            <h3 className="mt-4 text-xl font-medium">Prep Checklist</h3>
            <ul className="mt-2 list-disc pl-6">
              <li>Clear access: vehicle turning and overhead clearance</li>
              <li>Crane setup: level base, exclusion zone, traffic management if required</li>
              <li>Services: trench routes for power/water/wastewater</li>
              <li>Foundations/pad: per engineering, within setback/height limits</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">FAQs</h2>
            <div className="mt-3 space-y-3">
              <div><h3 className="text-xl font-medium">Can I rent out a secondary dwelling in QLD?</h3><p className="mt-1">Some councils permit renting; others restrict secondary dwellings to related occupants. We’ll advise based on your planning scheme.</p></div>
              <div><h3 className="text-xl font-medium">Do you help with flood overlays?</h3><p className="mt-1">Yes. We reference your council’s flood hazard mapping and incorporate minimum floor levels and siting responses where applicable.</p></div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
};
