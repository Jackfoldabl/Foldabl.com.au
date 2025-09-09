import React, { useEffect } from "react";
import { setSeoTags } from "../lib/seo";

export const Dach = () => {
  useEffect(() => {
    setSeoTags({
      title: "Dach Constructions | Licensed Installation Partner",
      description: "Dach Constructions leads professional installation in NSW, with trusted licensed partners nationwide.",
      url: "https://foldabl.com.au/dach-constructions",
      image: "https://foldabl.com.au/img/rectangle-6-1.png",
    });
  }, []);
  return (
    <main className="min-h-screen bg-white text-collection-1-dark">
      <header className="bg-collection-1-dark text-white py-10 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight">Dach Constructions</h1>
          <p className="mt-3 opacity-90">Our licensed installation partner with decades of building experience.</p>
        </div>
      </header>
      <article className="px-6 md:px-10 py-12">
        <div className="max-w-5xl mx-auto">
          <p>Dach Constructions oversees NSW installs and supports national projects with coordinated site practices and quality control.</p>
        </div>
      </article>
    </main>
  );
};

