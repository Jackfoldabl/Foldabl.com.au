import React, { useEffect } from "react";
import { setSeoTags } from "../lib/seo";

export const AboutChris = () => {
  useEffect(() => {
    setSeoTags({
      title: "About Chris | 30+ Years Building Experience",
      description: "Learn about Chris, our lead builder with 30+ years of construction experience through Dach Constructions.",
      url: "https://foldabl.com.au/about-chris",
      image: "https://foldabl.com.au/img/rectangle-6-3.png",
    });
  }, []);

  return (
    <main className="min-h-screen bg-white text-collection-1-dark">
      <header className="bg-collection-1-dark text-white py-10 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight">About Chris</h1>
          <p className="mt-3 opacity-90">30+ years of building expertise delivering smarter housing solutions.</p>
        </div>
      </header>
      <article className="px-6 md:px-10 py-12">
        <div className="max-w-5xl mx-auto space-y-6">
          <p>Chris brings deep practical experience through Dach Constructions, leading installation quality and site coordination.</p>
          <div className="flex gap-3 flex-wrap"><a href="/dach-constructions" className="underline">About Dach</a></div>
        </div>
      </article>
    </main>
  );
};

