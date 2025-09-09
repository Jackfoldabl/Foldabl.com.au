import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { posts } from "../blog";
import { setSeoTags } from "../lib/seo";

export const BlogIndex = () => {
  useEffect(() => {
    setSeoTags({
      title: "Blog | Modular & Prefab Homes Australia | Foldabl Homes",
      description: "Expert advice on modular and prefab homes in Australia.",
      url: "https://foldabl.com.au/blog",
      image: "https://foldabl.com.au/img/rectangle-6-2.png",
    });
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <header className="bg-collection-1-dark text-white py-10 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight">Blogs & Guides</h1>
          <p className="mt-3 text-lg opacity-90">
            Expert advice on modular and prefab homes in Australia.
          </p>
        </div>
      </header>
      <section className="px-6 md:px-10 py-10">
        <div className="max-w-5xl mx-auto grid gap-6">
          {posts.map((p) => (
            <article key={p.slug} className="p-6 rounded-2xl border border-collection-1-dusk-steel">
              <h2 className="text-2xl font-medium">
                <Link to={`/blog/${p.slug}`} className="underline">
                  {p.title}
                </Link>
              </h2>
              <p className="mt-2 opacity-80">{p.description}</p>
              <div className="mt-3 text-sm opacity-70">
                <span>Published {p.datePublished}</span>
                <span className="mx-2">·</span>
                <span>{p.readTimeMinutes} min read</span>
              </div>
              <div className="mt-3 text-sm">
                <Link to={`/blog/${p.slug}`} className="underline">
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};
