import React, { useEffect } from "react";
import { setSeoTags } from "../../lib/seo";

export const FoldablStudio = () => {
  useEffect(() => {
    setSeoTags({
      title: "Foldäbl Studio Modular Home | Specs, Pricing & Installation",
      description: "27 sqm studio by Foldabl. From ~$60k. 8‑week delivery, professional installation. Free consultation.",
      url: "https://foldabl.com.au/homes/foldabl-studio",
      image: "https://foldabl.com.au/img/rectangle-5.png",
    });

    const product = document.createElement("script");
    product.type = "application/ld+json";
    product.id = "product-schema";
    product.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Foldäbl Studio",
      brand: "Foldabl",
      description: "27 sqm modular studio with professional installation and ~8 week delivery.",
      image: ["https://foldabl.com.au/img/rectangle-5.png"],
      offers: { "@type": "Offer", priceCurrency: "AUD", price: "60000", availability: "https://schema.org/PreOrder" }
    });
    document.head.appendChild(product);
    // Breadcrumbs
    const bc = document.createElement("script");
    bc.type = "application/ld+json";
    bc.id = "breadcrumbs";
    bc.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Homes", item: "https://foldabl.com.au/homes" },
        { "@type": "ListItem", position: 2, name: "Foldäbl Studio", item: "https://foldabl.com.au/homes/foldabl-studio" }
      ]
    });
    document.head.appendChild(bc);
    return () => {
      const s = document.getElementById("product-schema"); if (s) s.remove();
      const b = document.getElementById("breadcrumbs"); if (b) b.remove();
    };
  }, []);

  return (
    <main className="min-h-screen bg-white text-collection-1-dark">
      <header className="bg-collection-1-dark text-white py-10 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight">Foldäbl Studio</h1>
          <p className="mt-3 opacity-90">27 sqm studio. From ~$60k. Typical delivery ~8 weeks, professional installation.</p>
        </div>
      </header>
      <article className="px-6 md:px-10 py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          <section>
            <h2 className="text-2xl font-medium">Overview</h2>
            <p className="mt-2">Smart, compact studio ideal for young adults, guest space, or home office.</p>
          </section>
          <section>
            <h2 className="text-2xl font-medium">Inclusions</h2>
            <ul className="mt-2 list-disc pl-6">
              <li>Factory‑built module</li>
              <li>Kitchenette/bathroom layout options</li>
              <li>Professional installation coordination</li>
            </ul>
          </section>
        </div>
      </article>
    </main>
  );
};
