import React, { useEffect } from "react";
import { setSeoTags } from "../lib/seo";

export const HomesNSW = () => {
  const phone = "0480 758 298";
  const tel = "+61480758298";

  useEffect(() => {
    setSeoTags({
      title: "Modular Homes in NSW | Fast Delivery & Professional Installation",
      description:
        "Affordable, professionally built modular homes in NSW. Council approval handled, delivery in ~8 weeks, install by licensed builders. Free consultation.",
      url: "https://foldabl.com.au/homes/nsw",
      image: "https://foldabl.com.au/img/rectangle-6-1.png",
    });

    // BreadcrumbList schema
    const bc = document.createElement("script");
    bc.type = "application/ld+json";
    bc.id = "nsw-breadcrumbs";
    bc.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Homes", item: "https://foldabl.com.au/homes" },
        { "@type": "ListItem", position: 2, name: "New South Wales", item: "https://foldabl.com.au/homes/nsw" }
      ]
    });
    document.head.appendChild(bc);

    // FAQPage schema (NSW specific)
    const faq = document.createElement("script");
    faq.type = "application/ld+json";
    faq.id = "nsw-faq";
    faq.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "How fast can you deliver in NSW?", acceptedAnswer: { "@type": "Answer", text: "Typical delivery is ~8 weeks after approvals, with installation in 1–5 days depending on site access and foundations." } },
        { "@type": "Question", name: "Do you handle approvals in NSW?", acceptedAnswer: { "@type": "Answer", text: "Yes. We manage the council approval process and align submissions to local controls and overlays." } }
      ]
    });
    document.head.appendChild(faq);

    return () => {
      const s = document.getElementById("nsw-breadcrumbs");
      if (s) s.remove();
      const f = document.getElementById("nsw-faq");
      if (f) f.remove();
    };
  }, []);

  return (
    <main className="min-h-screen bg-white text-collection-1-dark">
      <header className="bg-collection-1-dark text-white py-10 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight">Modular Homes in NSW</h1>
          <ul className="mt-4 text-lg opacity-90 list-disc pl-6">
            <li>~8-week delivery after approvals</li>
            <li>Council approvals handled for you</li>
            <li>Professional installation by licensed builders</li>
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
            <p className="mt-3">Sydney, Central Coast, Newcastle, Wollongong, Hunter, Blue Mountains and beyond.</p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Approvals in NSW</h2>
            <p className="mt-3">We handle NSW approvals end-to-end and align submissions to local controls such as setbacks, overlays (BAL/flood/wind) and private open space.</p>
            <p className="mt-3 text-sm">Learn more: <a href="/council-approval" className="underline">Council Approval</a></p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Access & Delivery Routes</h2>
            <p className="mt-3">We plan logistics via major routes (e.g., M1, M2) and coordinate site access, crane requirements and services connections.</p>
            <h3 className="mt-4 text-xl font-medium">Site Prep Checklist</h3>
            <ul className="mt-2 list-disc pl-6">
              <li>Clear access and working area</li>
              <li>Power, water and wastewater plan</li>
              <li>Pad/foundations, setbacks and height within controls</li>
              <li>Identify overlays (BAL/flood/wind) if applicable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Popular Models in NSW</h2>
            <ul className="mt-3 grid md:grid-cols-2 gap-3">
              <li className="p-4 rounded-xl border border-collection-1-dusk-steel"><strong>Foldäbl Studio</strong> — 27 sqm studio. <a href="/homes/foldabl-studio" className="underline">View details</a></li>
              <li className="p-4 rounded-xl border border-collection-1-dusk-steel"><strong>Foldäbl 42</strong> — two-bedroom layout. <a href="/homes/foldabl-42" className="underline">View details</a></li>
              <li className="p-4 rounded-xl border border-collection-1-dusk-steel"><strong>Expändäbl 20</strong> — flexible studio. <a href="/homes/expandabl-20" className="underline">View details</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">FAQs</h2>
            <div className="mt-3 space-y-3">
              <div><h3 className="text-xl font-medium">Do you install across NSW?</h3><p className="mt-1">Yes — Dach Constructions leads NSW installs and coordinates licensed partners where needed.</p></div>
              <div><h3 className="text-xl font-medium">How long does installation take?</h3><p className="mt-1">Typically 1–5 days depending on access, foundations and services.</p></div>
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

