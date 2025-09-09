import React, { useEffect } from "react";
import { setSeoTags } from "../lib/seo";

export const ThirtyYears = () => {
  useEffect(() => {
    setSeoTags({
      title: "30+ Years Experience | Foldabl Homes",
      description: "Decades of construction experience inform every Foldabl project — approvals, manufacturing oversight and installation.",
      url: "https://foldabl.com.au/30-years",
      image: "https://foldabl.com.au/img/rectangle-6-3.png",
    });
  }, []);
  return (
    <main className="min-h-screen bg-white text-collection-1-dark">
      <header className="bg-collection-1-dark text-white py-10 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight">30+ Years Building Experience</h1>
          <p className="mt-3 opacity-90">Experience you can trust, across approvals, manufacturing and installation.</p>
        </div>
      </header>
      <article className="px-6 md:px-10 py-12">
        <div className="max-w-5xl mx-auto">
          <p>Our leadership team brings decades of on‑site and management experience, ensuring quality and predictable outcomes.</p>
        </div>
      </article>
    </main>
  );
};

