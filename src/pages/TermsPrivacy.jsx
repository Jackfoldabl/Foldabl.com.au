import React, { useEffect } from "react";
import { setSeoTags } from "../lib/seo";

export const TermsPrivacy = () => {
  useEffect(() => {
    setSeoTags({
      title: "Terms & Privacy | Foldabl Homes",
      description: "Read our terms of service and privacy policy.",
      url: "https://foldabl.com.au/terms-privacy",
      image: "https://foldabl.com.au/img/rectangle-7.png",
    });
  }, []);

  return (
    <main className="min-h-screen bg-white text-collection-1-dark">
      <header className="bg-collection-1-dark text-white py-10 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight">Terms and Privacy</h1>
          <p className="mt-3 opacity-90">Our commitment to transparency and your privacy.</p>
        </div>
      </header>
      <article className="px-6 md:px-10 py-12">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-medium">Terms of Service</h2>
          <p>Use of our website and services is subject to fair use and applicable Australian law. Project scopes are defined in writing and may be updated by mutual agreement.</p>
          <h2 className="text-2xl font-medium">Privacy Policy</h2>
          <p>We collect only necessary information to deliver our services. We do not sell your data. Contact us to request access or deletion of your information.</p>
        </div>
      </article>
    </main>
  );
};

