import React, { useEffect } from "react";
import { setSeoTags } from "../lib/seo";

export const Contact = () => {
  const phone = "0480 758 298";
  const tel = "+61480758298";
  useEffect(() => {
    setSeoTags({
      title: "Contact Foldabl Homes | Free Consultation",
      description: "Call 0480 758 298 or request a free consultation. We deliver modular and tiny homes Australia‑wide.",
      url: "https://foldabl.com.au/contact",
      image: "https://foldabl.com.au/img/rectangle-6-2.png",
    });
  }, []);
  return (
    <main className="min-h-screen bg-white text-collection-1-dark">
      <header className="bg-collection-1-dark text-white py-10 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight">Contact Us</h1>
          <p className="mt-3 opacity-90">Have questions? We’re here to help.</p>
          <div className="mt-4 flex gap-3"><a href={`tel:${tel}`} className="underline">Call {phone}</a><span className="opacity-50">·</span><a href="/#contact" className="underline">Get Free Consultation</a></div>
        </div>
      </header>
      <article className="px-6 md:px-10 py-12">
        <div className="max-w-5xl mx-auto">
          <p>Use the consultation form on our homepage or call us directly for immediate assistance.</p>
        </div>
      </article>
    </main>
  );
};

