import React, { useEffect } from "react";
import { setSeoTags } from "../lib/seo";

export const HomesVIC = () => {
  const phone = "0480 758 298";
  const tel = "+61480758298";

  useEffect(() => {
    setSeoTags({
      title: "Modular Homes in VIC | Fast Delivery & Professional Installation",
      description:
        "Affordable, professionally built modular homes in Victoria. Approvals handled, ~8-week delivery, licensed installation. Free consultation.",
      url: "https://foldabl.com.au/homes/vic",
      image: "https://foldabl.com.au/img/rectangle-6-1.png",
    });
    // BreadcrumbList schema
    const bc = document.createElement("script");
    bc.type = "application/ld+json";
    bc.id = "vic-breadcrumbs";
    bc.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Homes", item: "https://foldabl.com.au/homes" },
        { "@type": "ListItem", position: 2, name: "Victoria", item: "https://foldabl.com.au/homes/vic" }
      ]
    });
    document.head.appendChild(bc);
    return () => { const s = document.getElementById("vic-breadcrumbs"); if (s) s.remove(); };
  }, []);

  return (
    <main className="min-h-screen bg-white text-collection-1-dark">
      <header className="bg-collection-1-dark text-white py-10 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight">Modular Homes in VIC</h1>
          <ul className="mt-4 text-lg opacity-90 list-disc pl-6">
            <li>~8–12 week delivery after approvals</li>
            <li>Approvals handled for you</li>
            <li>Licensed installation across Victoria</li>
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
            <p className="mt-3">Melbourne, Geelong, Mornington Peninsula, Ballarat, Bendigo and broader VIC regions. We plan deliveries around local traffic patterns and coordinate cranage/traffic control in constrained sites or heritage streetscapes.</p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Approvals in VIC</h2>
            <p className="mt-3">We address overlays, setbacks and height/footprint controls, and manage council clarifications where required. Victorian planning schemes consider neighbourhood character and amenity, and overlays (bushfire, flood, heritage, significant landscapes) may influence siting or construction detailing. We prepare clear documentation and respond to information requests to support a timely decision.</p>
            <p className="mt-3 text-sm">Learn more: <a href="/council-approval" className="underline">Council Approval</a></p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Housing Demand & Use Cases</h2>
            <p className="mt-3">VIC’s demand for smaller, efficient dwellings continues to grow as households seek flexible living options: supporting family, unlocking rental yield, or enabling work‑from‑home. Modular and tiny homes deliver predictable costs and timelines compared to lengthy renovations.</p>
            <ul className="mt-2 list-disc pl-6">
              <li><strong>Multigenerational living:</strong> Add a self‑contained studio for family support.</li>
              <li><strong>Rental flexibility:</strong> Where rules permit, a granny flat can diversify household income.</li>
              <li><strong>Professional workspace:</strong> A separated office or studio with minimal disruption.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Land Use, Character & Overlays</h2>
            <p className="mt-3">Local planning schemes balance development with neighbourhood character. Common topics we address include:</p>
            <ul className="mt-2 list-disc pl-6">
              <li><strong>Setbacks, height & site coverage:</strong> Ensuring bulk/scale suits context and privacy is protected.</li>
              <li><strong>Overlays:</strong> Bushfire Management (BMO), flood, heritage and design development overlays.</li>
              <li><strong>Services:</strong> Sewer connections, stormwater management and energy requirements.</li>
            </ul>
            <p className="mt-3">We tailor documentation to local policy to support good planning outcomes and smooth assessment.</p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Popular Models in VIC</h2>
            <ul className="mt-3 grid md:grid-cols-2 gap-3">
              <li className="p-4 rounded-xl border border-collection-1-dusk-steel"><strong>Foldäbl Studio</strong> — 27 sqm studio. <a href="/homes/foldabl-studio" className="underline">View details</a></li>
              <li className="p-4 rounded-xl border border-collection-1-dusk-steel"><strong>Foldäbl 42</strong> — two-bedroom layout. <a href="/homes/foldabl-42" className="underline">View details</a></li>
              <li className="p-4 rounded-xl border border-collection-1-dusk-steel"><strong>Expändäbl 20</strong> — flexible studio. <a href="/homes/expandabl-20" className="underline">View details</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Access & Delivery Logistics</h2>
            <p className="mt-3">For urban sites we validate crane positions, exclusion zones and traffic control. In regional areas we plan around road width, bridge load limits and seasonal conditions. We provide guidance on preparing foundations and ensuring services are ready for connection.</p>
            <h3 className="mt-4 text-xl font-medium">Prep Checklist</h3>
            <ul className="mt-2 list-disc pl-6">
              <li>Confirm crane setup area and overhead clearances</li>
              <li>Establish pad/foundations per engineering</li>
              <li>Plan trench routes for water, power and wastewater</li>
              <li>Verify setbacks and height within local controls</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">FAQs</h2>
            <div className="mt-3 space-y-3">
              <div><h3 className="text-xl font-medium">Can I add a tiny home in a heritage area?</h3><p className="mt-1">Often possible with sensitive siting and finishes; we address overlay requirements with clear documentation.</p></div>
              <div><h3 className="text-xl font-medium">How long will the process take?</h3><p className="mt-1">Approvals vary by council and constraints. Manufacturing is typically ~8 weeks after approvals, with 1–5 days for installation.</p></div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
};
