import React, { useEffect } from "react";
import { setSeoTags } from "../lib/seo";

export const TinyHomes = () => {
  const phone = "0480 758 298";
  const tel = "+61480758298";

  useEffect(() => {
    setSeoTags({
      title: "Tiny Homes Australia | Affordable Prefab Tiny Houses | Foldabl",
      description:
        "Explore tiny homes in Australia: benefits, approvals, delivery & installation. Affordable prefab options with ~8‑week delivery and licensed install.",
      url: "https://foldabl.com.au/tiny-homes",
      image: "https://foldabl.com.au/img/rectangle-6-2.png",
    });

    // FAQ schema for the page
    const faq = document.createElement("script");
    faq.type = "application/ld+json";
    faq.id = "tiny-homes-faq";
    faq.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How fast can a tiny home be delivered?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Typical delivery is ~8–12 weeks after approvals, with installation usually 1–5 days depending on site access and foundations."
          }
        },
        {
          "@type": "Question",
          name: "Do you handle council approvals for tiny homes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We manage approvals end‑to‑end. Rules differ by council and state; we align submissions to local requirements in NSW, QLD and VIC."
          }
        },
        {
          "@type": "Question",
          name: "Where do you install tiny homes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We install Australia‑wide using licensed builders — Dach Constructions in NSW and trusted partners elsewhere."
          }
        }
      ]
    });
    document.head.appendChild(faq);

    return () => {
      const f = document.getElementById("tiny-homes-faq");
      if (f) f.remove();
    };
  }, []);

  return (
    <main className="min-h-screen bg-white text-collection-1-dark">
      <header className="bg-collection-1-dark text-white py-10 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm opacity-80 mb-2">Foldabl Homes</p>
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight">
            Tiny Homes in Australia — Prefab, Fast and Affordable
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90">
            Compact living with professional installation and predictable
            timelines. Tiny homes (prefab modular) delivered in ~8–12 weeks with
            approvals handled for you.
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
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Why Tiny Homes?</h2>
            <ul className="mt-3 grid md:grid-cols-2 gap-3">
              <li className="p-4 rounded-xl bg-collection-1-light-medium"><strong>Affordable impact:</strong> smart designs at a fraction of traditional builds.</li>
              <li className="p-4 rounded-xl bg-collection-1-light-medium"><strong>Faster timelines:</strong> ~8–12 weeks to delivery after approvals.</li>
              <li className="p-4 rounded-xl bg-collection-1-light-medium"><strong>Done‑for‑you:</strong> approvals, delivery and installation handled by professionals.</li>
              <li className="p-4 rounded-xl bg-collection-1-light-medium"><strong>Flexible uses:</strong> first home, rental/granny flat, home office, guest suite.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Popular Tiny Home Models</h2>
            <ul className="mt-3 grid md:grid-cols-2 gap-3">
              <li className="p-4 rounded-xl border border-collection-1-dusk-steel"><strong>Foldäbl Studio</strong> — 27 sqm studio. <a href="/homes/foldabl-studio" className="underline">View details</a></li>
              <li className="p-4 rounded-xl border border-collection-1-dusk-steel"><strong>Expändäbl 20</strong> — flexible studio. <a href="/homes/expandabl-20" className="underline">View details</a></li>
              <li className="p-4 rounded-xl border border-collection-1-dusk-steel"><strong>Foldäbl 42</strong> — two‑bedroom layout. <a href="/homes/foldabl-42" className="underline">View details</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Approvals (NSW · QLD · VIC)</h2>
            <p className="mt-3">Tiny home approvals vary by council and state. We manage the process and align submissions to your local rules.</p>
            <p className="mt-3 text-sm">Read more: <a href="/council-approval" className="underline">Council Approval</a></p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Delivery & Installation</h2>
            <p className="mt-3">We coordinate transport and crane logistics, install on prepared pads/foundations, and handle services coordination and handover.</p>
            <p className="mt-3 text-sm">Read more: <a href="/installation" className="underline">Installation</a></p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">FAQs</h2>
            <div className="mt-3 space-y-3">
              <div><h3 className="text-xl font-medium">How much does a tiny home cost?</h3><p className="mt-1">Entry models often start around $60k; final costs depend on model, finishes, site works and location.</p></div>
              <div><h3 className="text-xl font-medium">Where do you deliver?</h3><p className="mt-1">Australia‑wide. Frequent projects in NSW, QLD and VIC.</p></div>
              <div><h3 className="text-xl font-medium">Can tiny homes be used as a granny flat or rental?</h3><p className="mt-1">Yes — many clients use compact studios as secondary dwellings for family or rental income, subject to local approvals.</p></div>
            </div>
          </section>

          <section>
            <div className="flex flex-wrap gap-3 items-center">
              <a href={`tel:${tel}`} className="inline-flex items-center gap-3 bg-collection-1-dark text-white rounded-2xl px-4 py-2">Call {phone}</a>
              <a href="/#contact" className="inline-flex items-center gap-3 rounded-2xl border border-collection-1-dark px-4 py-2">Get Free Consultation</a>
              <span className="opacity-60">·</span>
              <a href="/homes/nsw" className="underline">NSW</a>
              <span className="opacity-60">·</span>
              <a href="/homes/qld" className="underline">QLD</a>
              <span className="opacity-60">·</span>
              <a href="/homes/vic" className="underline">VIC</a>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
};

