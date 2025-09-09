import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MobileHomepage } from "./screens/MobileHomepage/MobileHomepage";
import { PillarModularHomes } from "./pages/PillarModularHomes";
import { BlogIndex } from "./pages/BlogIndex";
import { BlogPost } from "./pages/BlogPost";
import React from "react";
import { CouncilApproval } from "./pages/CouncilApproval";
import { HomesNSW } from "./pages/HomesNSW";
import { HomesQLD } from "./pages/HomesQLD";
import { HomesVIC } from "./pages/HomesVIC";
import { HomesSA } from "./pages/HomesSA";
import { HomesWA } from "./pages/HomesWA";
import { HomesTAS } from "./pages/HomesTAS";
import { HomesNT } from "./pages/HomesNT";
import { HomesACT } from "./pages/HomesACT";
import { Installation } from "./pages/Installation";
import { FoldablStudio } from "./pages/models/FoldablStudio";
import { Foldabl42 } from "./pages/models/Foldabl42";
import { Expandabl20 } from "./pages/models/Expandabl20";
import { TinyHomes } from "./pages/TinyHomes";
import { ServiceAreas } from "./pages/ServiceAreas";
import { Process } from "./pages/Process";
import { About } from "./pages/About";
import { Financing } from "./pages/Financing";
import { Support } from "./pages/Support";
import { TermsPrivacy } from "./pages/TermsPrivacy";
import { Contact } from "./pages/Contact";
import { Homes } from "./pages/Homes";
import { FoldablSeries } from "./pages/series/FoldablSeries";
import { ExpandablSeries } from "./pages/series/ExpandablSeries";
import { ComingSoon } from "./pages/series/ComingSoon";
import { AboutChris } from "./pages/AboutChris";
import { Dach } from "./pages/Dach";
import { ThirtyYears } from "./pages/ThirtyYears";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MobileHomepage />} />
        <Route path="/modular-homes" element={<PillarModularHomes />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/council-approval" element={<CouncilApproval />} />
        <Route path="/homes/nsw" element={<HomesNSW />} />
        <Route path="/homes/qld" element={<HomesQLD />} />
        <Route path="/homes/vic" element={<HomesVIC />} />
        <Route path="/homes/sa" element={<HomesSA />} />
        <Route path="/homes/wa" element={<HomesWA />} />
        <Route path="/homes/tas" element={<HomesTAS />} />
        <Route path="/homes/nt" element={<HomesNT />} />
        <Route path="/homes/act" element={<HomesACT />} />
        <Route path="/installation" element={<Installation />} />
        <Route path="/homes/foldabl-studio" element={<FoldablStudio />} />
        <Route path="/homes/foldabl-42" element={<Foldabl42 />} />
        <Route path="/homes/expandabl-20" element={<Expandabl20 />} />
        <Route path="/tiny-homes" element={<TinyHomes />} />
        <Route path="/service-areas" element={<ServiceAreas />} />
        <Route path="/process" element={<Process />} />
        <Route path="/about" element={<About />} />
        <Route path="/financing" element={<Financing />} />
        <Route path="/support" element={<Support />} />
        <Route path="/terms-privacy" element={<TermsPrivacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/homes" element={<Homes />} />
        <Route path="/homes/foldabl-series" element={<FoldablSeries />} />
        <Route path="/homes/expandabl-series" element={<ExpandablSeries />} />
        <Route path="/homes/coming-soon" element={<ComingSoon />} />
        <Route path="/about-chris" element={<AboutChris />} />
        <Route path="/dach-constructions" element={<Dach />} />
        <Route path="/30-years" element={<ThirtyYears />} />
      </Routes>
      {/* Sticky call button on mobile */}
      <a
        href="tel:+61480758298"
        className="fixed md:hidden bottom-4 right-4 z-50 bg-collection-1-button text-white px-4 py-2 rounded-full shadow-lg"
        style={{ position: 'fixed' }}
      >
        Call 0480 758 298
      </a>
    </BrowserRouter>
  </StrictMode>
);
