import React, { useEffect } from "react";
import { setSeoTags } from "../lib/seo";

export const CouncilApproval = () => {
  const phone = "0480 758 298";
  const tel = "+61480758298";

  useEffect(() => {
    setSeoTags({
      title: "Council Approval for Modular Homes | Guaranteed or Full Refund",
      description:
        "We handle approvals Australia-wide. $2,000 deposit. Full refund if rejected. Start your project today.",
      url: "https://foldabl.com.au/council-approval",
      image: "https://foldabl.com.au/img/rectangle-6-2.png",
    });

    // Service schema
    const service = document.createElement("script");
    service.type = "application/ld+json";
    service.id = "council-approval-schema";
    service.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Council Approval for Modular Homes",
      provider: { "@type": "Organization", "@id": "https://foldabl.com.au/#organization" },
      areaServed: ["NSW","QLD","VIC","SA","WA","TAS","NT","ACT"],
      termsOfService: "https://foldabl.com.au/terms",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Council Approval Package",
        itemListElement: [
          {
            "@type": "Offer",
            priceCurrency: "AUD",
            price: "2000",
            description: "Deposit to commence approvals. Fully refundable if rejected."
          }
        ]
      }
    });
    document.head.appendChild(service);

    // FAQPage schema
    const faq = document.createElement("script");
    faq.type = "application/ld+json";
    faq.id = "council-approval-faq";
    faq.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How long does council approval take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Timelines vary by council and state; simple cases may take weeks, complex sites longer. We manage lodgement and communication to keep things moving."
          }
        },
        {
          "@type": "Question",
          name: "Is the $2,000 deposit refundable?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — if approval isn’t granted, your $2,000 deposit is fully refunded."
          }
        },
        {
          "@type": "Question",
          name: "Do rules differ across NSW, QLD and VIC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Each state and local council applies its own planning rules, definitions and processes. We align submissions to local requirements."
          }
        }
      ]
    });
    document.head.appendChild(faq);

    return () => {
      const s = document.getElementById("council-approval-schema");
      if (s) s.remove();
      const f = document.getElementById("council-approval-faq");
      if (f) f.remove();
    };
  }, []);

  return (
    <main className="min-h-screen bg-white text-collection-1-dark">
      <header className="bg-collection-1-dark text-white py-10 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight">
            Council Approval, Done-For-You (Guaranteed)
          </h1>
          <p className="mt-4 text-lg opacity-90">
            We manage the entire approval process for modular and prefab homes
            across Australia. Start with a $2,000 deposit — fully refundable if
            your application is rejected.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`tel:${tel}`} className="inline-flex items-center gap-3 bg-collection-1-light text-collection-1-dark rounded-2xl px-4 py-2">Call {phone}</a>
            <a href="/#contact" className="inline-flex items-center gap-3 rounded-2xl border border-white/40 px-4 py-2 hover:bg-white/10">Get Free Consultation</a>
          </div>
        </div>
      </header>

      <article className="px-6 md:px-10 py-12">
        <div className="max-w-5xl mx-auto space-y-10">
          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">What We Handle</h2>
            <ul className="mt-4 grid md:grid-cols-2 gap-3">
              <li className="p-4 rounded-xl bg-collection-1-light-medium">Documentation and drawings aligned to local requirements</li>
              <li className="p-4 rounded-xl bg-collection-1-light-medium">State-specific compliance and council definitions</li>
              <li className="p-4 rounded-xl bg-collection-1-light-medium">Application lodgement and liaison with council</li>
              <li className="p-4 rounded-xl bg-collection-1-light-medium">Responses to RFIs and conditions of consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">State-Specific Notes</h2>
            <details className="mt-3 p-4 rounded-xl border border-collection-1-dusk-steel"><summary className="font-medium">NSW</summary><p className="mt-2 opacity-90">Pathways and terminology vary by council. We align submissions to local setbacks, overlays (BAL/flood/wind) and private open space requirements.</p></details>
            <details className="mt-3 p-4 rounded-xl border border-collection-1-dusk-steel"><summary className="font-medium">QLD</summary><p className="mt-2 opacity-90">We prepare documentation to satisfy state and local planning provisions; definitions and parking provisions may differ by council.</p></details>
            <details className="mt-3 p-4 rounded-xl border border-collection-1-dusk-steel"><summary className="font-medium">VIC</summary><p className="mt-2 opacity-90">We address overlays, setbacks and height/footprint controls; we manage clarification with council where required.</p></details>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Typical Timeline</h2>
            <ol className="mt-4 list-decimal pl-6 space-y-2">
              <li><strong>Week 0–2:</strong> Preparation — site checks, drawings, documentation</li>
              <li><strong>Week 2–5:</strong> Submission — lodgement and initial assessment</li>
              <li><strong>Week 5–8:</strong> Determination — RFI responses, conditions, consent</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">FAQs</h2>
            <div className="mt-3 space-y-3">
              <div><h3 className="text-xl font-medium">How long does council approval take?</h3><p className="mt-1">Timelines vary by council and state; simple cases may take weeks, complex sites longer. We manage lodgement and communication to keep things moving.</p></div>
              <div><h3 className="text-xl font-medium">Is the $2,000 deposit refundable?</h3><p className="mt-1">Yes — if approval isn’t granted, your $2,000 deposit is fully refunded.</p></div>
              <div><h3 className="text-xl font-medium">What information do you need from me?</h3><p className="mt-1">Site address, basic services info, preferred model and any known overlays (bushfire/flood/wind). We’ll guide you through the rest.</p></div>
            </div>
          </section>

          <section>
            <div className="flex flex-wrap gap-3 items-center">
              <a href={`tel:${tel}`} className="inline-flex items-center gap-3 bg-collection-1-dark text-white rounded-2xl px-4 py-2">Call {phone}</a>
              <a href="/#contact" className="inline-flex items-center gap-3 rounded-2xl border border-collection-1-dark px-4 py-2">Get Free Consultation</a>
              <a href="/installation" className="underline">Installation</a>
              <span className="opacity-60">·</span>
              <a href="/#processes" className="underline">Process</a>
              <span className="opacity-60">·</span>
              <a href="/homes/nsw" className="underline">Homes in NSW</a>
              <span className="opacity-60">·</span>
              <a href="/homes/qld" className="underline">Homes in QLD</a>
              <span className="opacity-60">·</span>
              <a href="/homes/vic" className="underline">Homes in VIC</a>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
};
