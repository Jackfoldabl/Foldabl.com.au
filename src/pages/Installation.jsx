import React, { useEffect } from "react";
import { setSeoTags } from "../lib/seo";

export const Installation = () => {
  const phone = "0480 758 298";
  const tel = "+61480758298";

  useEffect(() => {
    setSeoTags({
      title: "Modular Home Installation | Licensed Builders Australia‑Wide",
      description:
        "Professional installation across Australia. Licensed builders, coordinated delivery, and final handover. Free consultation.",
      url: "https://foldabl.com.au/installation",
      image: "https://foldabl.com.au/img/rectangle-7-1.png",
    });

    const service = document.createElement("script");
    service.type = "application/ld+json";
    service.id = "installation-schema";
    service.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Modular Home Installation",
      provider: { "@type": "Organization", name: "Foldabl" },
      areaServed: ["NSW","QLD","VIC","SA","WA","TAS","NT","ACT"],
      description: "Licensed builders handle siting, services coordination, leveling and final handover."
    });
    document.head.appendChild(service);

    const faq = document.createElement("script");
    faq.type = "application/ld+json";
    faq.id = "installation-faq";
    faq.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "How long does installation take?", acceptedAnswer: { "@type": "Answer", text: "Typically 1–5 days depending on site access, foundations and services." } },
        { "@type": "Question", name: "Who installs in NSW?", acceptedAnswer: { "@type": "Answer", text: "Dach Constructions leads NSW installs; trusted licensed partners elsewhere in Australia." } }
      ]
    });
    document.head.appendChild(faq);

    return () => {
      const s = document.getElementById("installation-schema");
      if (s) s.remove();
      const f = document.getElementById("installation-faq");
      if (f) f.remove();
    };
  }, []);

  return (
    <main className="min-h-screen bg-white text-collection-1-dark">
      <header className="bg-collection-1-dark text-white py-10 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight">Professional Installation by Licensed Builders</h1>
          <p className="mt-4 text-lg opacity-90">We coordinate transport, cranage, siting, and final handover — Australia‑wide.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`tel:${tel}`} className="inline-flex items-center gap-3 bg-collection-1-light text-collection-1-dark rounded-2xl px-4 py-2">Call {phone}</a>
            <a href="/#contact" className="inline-flex items-center gap-3 rounded-2xl border border-white/40 px-4 py-2 hover:bg-white/10">Get Free Consultation</a>
          </div>
        </div>
      </header>

      <article className="px-6 md:px-10 py-12">
        <div className="max-w-5xl mx-auto space-y-10">
          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">What’s Included</h2>
            <ul className="mt-4 list-disc pl-6">
              <li>Transport & crane logistics planning</li>
              <li>Siting, leveling and tie‑down to specification</li>
              <li>Services coordination (power/water/wastewater)</li>
              <li>Final walkthrough and handover</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Installation Steps</h2>
            <ol className="mt-3 list-decimal pl-6 space-y-2">
              <li>Pre‑site checks and logistics confirmation</li>
              <li>Delivery arrival and cranage to pad/foundations</li>
              <li>Leveling, tie‑down and services coordination</li>
              <li>Quality checks and handover</li>
            </ol>
          </section>
        </div>
      </article>
    </main>
  );
};

