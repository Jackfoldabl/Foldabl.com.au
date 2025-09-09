import React, { useEffect } from "react";
import { setSeoTags } from "../lib/seo";

export const Financing = () => {
  useEffect(() => {
    setSeoTags({
      title: "Financing for Modular & Tiny Homes | Foldabl",
      description: "Explore financing considerations for modular and tiny homes in Australia. Talk to our team for guidance.",
      url: "https://foldabl.com.au/financing",
      image: "https://foldabl.com.au/img/rectangle-7-1.png",
    });
  }, []);

  return (
    <main className="min-h-screen bg-white text-collection-1-dark">
      <header className="bg-collection-1-dark text-white py-10 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight">Financing Info</h1>
          <p className="mt-3 opacity-90">We’ll help you navigate lenders and documentation for modular and tiny homes.</p>
        </div>
      </header>
      <article className="px-6 md:px-10 py-12">
        <div className="max-w-5xl mx-auto space-y-6">
          <p>Financing for modular/tiny homes varies by lender and product. We provide clear specifications and documentation to support your application and can coordinate with your broker or bank.</p>
          <div className="flex gap-3 flex-wrap"><a href="/#contact" className="underline">Speak with our team</a></div>
        </div>
      </article>
    </main>
  );
};

