import React, { useEffect } from "react";
import { setSeoTags } from "../lib/seo";

export const Process = () => {
  useEffect(() => {
    setSeoTags({
      title: "Our Process | Consultation, Approval, Manufacturing, Installation",
      description: "Transparent 4‑step process: consultation, council approval, manufacturing (~8 weeks) and licensed installation.",
      url: "https://foldabl.com.au/process",
      image: "https://foldabl.com.au/img/rectangle-6-2.png",
    });
  }, []);

  return (
    <main className="min-h-screen bg-white text-collection-1-dark">
      <header className="bg-collection-1-dark text-white py-10 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight">How We Make Home Ownership Possible</h1>
          <p className="mt-3 opacity-90">From first call to handover — simple, transparent and fast.</p>
        </div>
      </header>

      <article className="px-6 md:px-10 py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          <section>
            <ol className="list-decimal pl-6 space-y-3">
              <li><strong>Consultation:</strong> model fit, site feasibility, timelines and budget alignment.</li>
              <li><strong>Council Approval:</strong> we prepare and lodge; the $2,000 deposit is fully refundable if not approved.</li>
              <li><strong>Manufacturing (~8 weeks):</strong> we coordinate production and site readiness in parallel.</li>
              <li><strong>Installation:</strong> delivery, cranage, leveling and services coordination by licensed builders.</li>
            </ol>
          </section>

          <section>
            <div className="flex gap-3 flex-wrap">
              <a href="/council-approval" className="underline">Council Approval</a>
              <span className="opacity-50">·</span>
              <a href="/installation" className="underline">Installation</a>
              <span className="opacity-50">·</span>
              <a href="/#contact" className="underline">Get Free Consultation</a>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
};

