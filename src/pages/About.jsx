import React, { useEffect } from "react";
import { setSeoTags } from "../lib/seo";

export const About = () => {
  useEffect(() => {
    setSeoTags({
      title: "About Foldabl Homes | Professional Modular Builders",
      description: "Foldabl Homes and Dach Constructions deliver modular and tiny homes with approvals, manufacturing and licensed installation.",
      url: "https://foldabl.com.au/about",
      image: "https://foldabl.com.au/img/rectangle-6-3.png",
    });
  }, []);

  return (
    <main className="min-h-screen bg-white text-collection-1-dark">
      <header className="bg-collection-1-dark text-white py-10 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight">About Foldabl Homes</h1>
          <p className="mt-3 opacity-90">A home for every need — done once, done right.</p>
        </div>
      </header>
      <article className="px-6 md:px-10 py-12">
        <div className="max-w-5xl mx-auto space-y-6">
          <p>We’re professional builders who found a faster, more affordable path to quality housing. Our complete service covers council approval, manufacturing oversight and licensed installation Australia‑wide.</p>
          <p>Through our sister company Dach Constructions, we bring 30+ years of building experience to every project.</p>
          <div className="flex gap-3 flex-wrap"><a href="/#about" className="underline">Our expertise</a><span className="opacity-50">·</span><a href="/council-approval" className="underline">Approvals</a><span className="opacity-50">·</span><a href="/installation" className="underline">Installation</a></div>
        </div>
      </article>
    </main>
  );
};

