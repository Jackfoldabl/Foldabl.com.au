import React, { useEffect } from "react";
import { setSeoTags } from "../lib/seo";

export const Support = () => {
  useEffect(() => {
    setSeoTags({
      title: "24/7 Support | Foldabl Homes",
      description: "Get help anytime. Contact our team for project updates, service requests or general questions.",
      url: "https://foldabl.com.au/support",
      image: "https://foldabl.com.au/img/rectangle-6-2.png",
    });
  }, []);

  return (
    <main className="min-h-screen bg-white text-collection-1-dark">
      <header className="bg-collection-1-dark text-white py-10 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight">24/7 Support</h1>
          <p className="mt-3 opacity-90">We’re here to help — day or night.</p>
        </div>
      </header>
      <article className="px-6 md:px-10 py-12">
        <div className="max-w-5xl mx-auto space-y-6">
          <p>For urgent matters, call <a className="underline" href="tel:+61480758298">0480 758 298</a>. For general queries, use the contact form on our homepage or email support@foldabl.com.au.</p>
          <div className="flex gap-3 flex-wrap"><a href="/#contact" className="underline">Go to Contact</a></div>
        </div>
      </article>
    </main>
  );
};

