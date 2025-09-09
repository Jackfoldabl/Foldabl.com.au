import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export const PillarModularHomes = () => {
  useEffect(() => {
    document.title = "Modular Homes & Prefab Homes Australia | Foldabl Homes";
    const canonicalHref = "https://foldabl.com/modular-homes";
    const link = document.querySelector("link[rel=canonical]");
    if (link) link.setAttribute("href", canonicalHref);
  }, []);

  const phoneDisplay = "0480 758 298";
  const phoneHref = "+61480758298";

  return (
    <main className="min-h-screen bg-white text-collection-1-dark">
      <header className="bg-collection-1-dark text-white py-10 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm opacity-80 mb-2">Foldabl Homes</p>
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight">
            Modular Homes & Prefab Homes in Australia
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90">
            A home for every need — done once, done right. Builders who found a
            cheaper solution and will do it all for you.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`tel:${phoneHref}`}
              className="inline-flex items-center gap-3 bg-collection-1-light text-collection-1-dark rounded-2xl px-4 py-2"
            >
              <span className="font-medium">Call us:</span>
              <span className="font-medium">{phoneDisplay}</span>
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center gap-3 rounded-2xl border border-white/40 px-4 py-2 hover:bg-white/10"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </header>

      <article className="px-6 md:px-10 py-12">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Intro */}
          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
              Why Modular Homes are Reshaping Australian Housing
            </h2>
            <p className="mt-3 text-lg leading-7">
              Modular homes (also known as prefab homes) deliver precision
              manufacturing, faster delivery, and predictable pricing. Where a
              traditional build can cost $250k+ and take 6–12 months, Foldabl
              Homes offers complete, professionally installed solutions from
              around $60k with typical delivery in 8–12 weeks.
            </p>
            <p className="mt-3 text-lg leading-7">
              We combine 30+ years of construction expertise through Dach
              Constructions with an end‑to‑end service model: council approval,
              manufacturing oversight, delivery and professional installation —
              all handled for you.
            </p>
            <div className="mt-4 text-sm">
              <a href="/#about" className="underline">Learn about our expertise</a>
              <span className="opacity-60"> · </span>
              <a href="/#processes" className="underline">See our 4‑step process</a>
            </div>
          </section>

          {/* Value Props */}
          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
              A Done‑For‑You, Professional Alternative to Traditional Building
            </h2>
            <ul className="mt-4 grid md:grid-cols-2 gap-4">
              <li className="p-4 rounded-xl bg-collection-1-light-medium">
                <strong>Affordable impact:</strong> smart, efficient designs that
                cost a fraction of traditional builds.
              </li>
              <li className="p-4 rounded-xl bg-collection-1-light-medium">
                <strong>8–12 week delivery:</strong> streamlined manufacturing
                and coordinated installation.
              </li>
              <li className="p-4 rounded-xl bg-collection-1-light-medium">
                <strong>Complete service:</strong> council approval, delivery and
                installation managed by professionals.
              </li>
              <li className="p-4 rounded-xl bg-collection-1-light-medium">
                <strong>Licensed builders:</strong> Dach Constructions (NSW) and
                trusted partners Australia‑wide.
              </li>
            </ul>
          </section>

          {/* Models Overview */}
          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
              Modular Home Models to Fit Every Need
            </h2>
            <p className="mt-3 text-lg">
              From compact studios to multi‑room layouts, our range is designed
              for first‑home buyers, downsizers, investors and home‑office
              setups.
            </p>
            <ul className="mt-4 list-disc pl-6 space-y-2">
              <li>
                <strong>Foldäbl Studio</strong> — 27 sqm studio. Ideal for
                young adults or home offices.
              </li>
              <li>
                <strong>Foldäbl 42</strong> — two‑bedroom layout for couples or
                small families.
              </li>
              <li>
                <strong>Expändäbl 20</strong> — flexible studio for guest or
                rental uses.
              </li>
            </ul>
            <div className="mt-4 text-sm">
              <a href="/#homes" className="underline">Browse the full range</a>
              <span className="opacity-60"> · </span>
              <a href="/#services" className="underline">Explore real‑world use cases</a>
            </div>
          </section>

          {/* Process */}
          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
              How It Works: From Consultation to Installation
            </h2>
            <ol className="mt-4 list-decimal pl-6 space-y-2">
              <li>
                <strong>Consultation:</strong> we help select the model that
                fits your site, budget and goals.
              </li>
              <li>
                <strong>Council Approval:</strong> $2,000 deposit starts the
                process; full refund if approval is not granted.
              </li>
              <li>
                <strong>Manufacturing:</strong> typical production ~8 weeks with
                a 50% payment to schedule.
              </li>
              <li>
                <strong>Installation:</strong> professional setup by Dach
                Constructions or licensed partners; balance on completion.
              </li>
            </ol>
            <div className="mt-4 text-sm">
              <a href="/#processes" className="underline">Detailed process overview</a>
              <span className="opacity-60"> · </span>
              <a href="/#installation" className="underline">Installation standards</a>
            </div>
          </section>

          {/* Use Cases */}
          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
              Who Modular Homes Are Perfect For
            </h2>
            <p className="mt-3">Common applications include:</p>
            <ul className="mt-2 grid md:grid-cols-2 gap-3">
              <li className="p-3 rounded-xl bg-collection-1-light-medium">Granny Flats & Additional Income</li>
              <li className="p-3 rounded-xl bg-collection-1-light-medium">First Home for Young Adults</li>
              <li className="p-3 rounded-xl bg-collection-1-light-medium">Rental Investment Property</li>
              <li className="p-3 rounded-xl bg-collection-1-light-medium">Home Office / Work From Home</li>
            </ul>
            <div className="mt-4 text-sm">
              <a href="/#services" className="underline">See use‑case ideas</a>
            </div>
          </section>

          {/* Service Areas */}
          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
              Service Areas: Australia‑Wide
            </h2>
            <p className="mt-3">
              We deliver and install across Australia, with frequent projects in
              <strong> NSW</strong>, <strong>QLD</strong> and <strong>VIC</strong>.
            </p>
          </section>

          {/* FAQs */}
          <section>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">FAQs</h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-xl font-medium">How fast can I move in?</h3>
                <p className="mt-1">Typical delivery in 8–12 weeks after approvals.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium">Do you handle council approvals?</h3>
                <p className="mt-1">Yes — we manage approvals end‑to‑end. $2,000 deposit fully refunded if not approved.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium">Who installs the home?</h3>
                <p className="mt-1">Dach Constructions (NSW) or licensed local builders under our oversight.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium">What do models cost?</h3>
                <p className="mt-1">Entry models are typically around $60k; final pricing depends on specifications, site works and location.</p>
              </div>
            </div>
          </section>

          {/* CTAs */}
          <section>
            <div className="flex flex-wrap gap-3 items-center">
              <a
                href={`tel:${phoneHref}`}
                className="inline-flex items-center gap-3 bg-collection-1-dark text-white rounded-2xl px-4 py-2"
              >
                Call {phoneDisplay}
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-3 rounded-2xl border border-collection-1-dark px-4 py-2"
              >
                Get Free Consultation
              </a>
              <a href="/" className="underline">
                Back to homepage
              </a>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
};

