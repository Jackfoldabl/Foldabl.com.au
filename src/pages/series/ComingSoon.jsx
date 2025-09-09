import React, { useEffect } from "react";
import { setSeoTags } from "../../lib/seo";

export const ComingSoon = () => {
  useEffect(() => {
    setSeoTags({
      title: "Coming Soon | Foldabl Homes",
      description: "Register your interest for upcoming Foldabl models.",
      url: "https://foldabl.com.au/homes/coming-soon",
      image: "https://foldabl.com.au/img/rectangle-5-5.png",
    });
  }, []);
  return (
    <main className="min-h-screen bg-white text-collection-1-dark">
      <header className="bg-collection-1-dark text-white py-10 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight">Coming Soon</h1>
          <p className="mt-3 opacity-90">Be first to hear about new models and releases.</p>
        </div>
      </header>
      <section className="px-6 md:px-10 py-12">
        <div className="max-w-5xl mx-auto">
          <p>Register your interest via our <a href="/#contact" className="underline">consultation form</a> and we’ll keep you updated.</p>
        </div>
      </section>
    </main>
  );
};

