import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { findPostBySlug } from "../blog";

export const BlogPost = () => {
  const { slug } = useParams();
  const post = findPostBySlug(slug);

  useEffect(() => {
    if (!post) return;
    document.title = `${post.title} | Foldabl Homes`;
    // Update canonical
    const canonicalHref = `https://foldabl.com/blog/${post.slug}`;
    const link = document.querySelector("link[rel=canonical]");
    if (link) link.setAttribute("href", canonicalHref);

    // Inject Article JSON-LD
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = "post-jsonld";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.description,
      image: post.hero ? `https://foldabl.com${post.hero}` : undefined,
      author: { "@type": "Organization", name: "Foldabl Homes" },
      publisher: {
        "@type": "Organization",
        name: "Foldabl Homes",
        logo: {
          "@type": "ImageObject",
          url: "https://foldabl.com/img/screenshot-2025-09-05-at-1-06-33-am-1.png",
        },
      },
      datePublished: post.datePublished,
      mainEntityOfPage: canonicalHref,
    });
    document.head.appendChild(ld);

    // Inject FAQPage JSON-LD if faq present
    if (Array.isArray(post.faq) && post.faq.length) {
      const faqScript = document.createElement("script");
      faqScript.type = "application/ld+json";
      faqScript.id = "post-faq-jsonld";
      faqScript.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      });
      document.head.appendChild(faqScript);
    }
    // Inject HowTo JSON-LD if howto present
    if (Array.isArray(post.howto) && post.howto.length) {
      const howToScript = document.createElement("script");
      howToScript.type = "application/ld+json";
      howToScript.id = "post-howto-jsonld";
      howToScript.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: post.title,
        description: post.description,
        step: post.howto.map((s) => ({ "@type": "HowToStep", name: s.name, text: s.text })),
      });
      document.head.appendChild(howToScript);
    }
    return () => {
      const existing = document.getElementById("post-jsonld");
      if (existing) existing.remove();
      const faq = document.getElementById("post-faq-jsonld");
      if (faq) faq.remove();
      const howto = document.getElementById("post-howto-jsonld");
      if (howto) howto.remove();
    };
  }, [post]);

  if (!post) {
    return (
      <main className="min-h-screen p-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-medium">Article not found</h1>
          <p className="mt-3">
            Go back to the <Link to="/blog" className="underline">blog</Link>.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <header className="bg-collection-1-dark text-white py-10 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm opacity-80 mb-2">Blogs & Guides</p>
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight">
            {post.title}
          </h1>
          <div className="mt-3 text-sm opacity-80">
            <span>{post.datePublished}</span>
            <span className="mx-2">·</span>
            <span>{post.readTimeMinutes} min read</span>
          </div>
        </div>
      </header>
      <article className="px-6 md:px-10 py-10">
        <div className="max-w-5xl mx-auto prose prose-lg">
          {post.content}
        </div>
        <hr className="my-10" />
        <div className="max-w-5xl mx-auto text-sm">
          <Link to="/blog" className="underline">← Back to Blogs & Guides</Link>
        </div>
      </article>
    </main>
  );
};
