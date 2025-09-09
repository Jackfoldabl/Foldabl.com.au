import React from "react";

export const ContactSection = () => {
  const resourcesLinks = [
    "Professional Builders",
    "Financing Info",
    "Available Australia-Wide",
    "Constructions Council Process",
    "Blogs & Guides",
    "24/7 Support",
    "Terms and Privacy",
  ];

  const navigationLinks = [
    "Home",
    "Processes",
    "Blog",
    "About",
    "Installation",
  ];

  const ourHomesLinks = [
    "Foldäbl Series",
    "Expändäbl Series",
    "Coming Soon",
    "All Homes",
  ];

  const serviceAreasLinks = [
    "NSW",
    "QLD",
    "VIC",
    "SA",
    "WA",
    "TAS",
    "NT",
    "ACT",
    "All States",
  ];

  const companyLinks = ["About Chris", "Dach", "30+ Years", "Contact"];

  const footerSections = [
    { title: "RESOURCES", links: resourcesLinks },
    { title: "NAVIGATION", links: navigationLinks },
    { title: "OUR HOMES", links: ourHomesLinks },
    { title: "SERVICE AREAS", links: serviceAreasLinks },
    { title: "COMPANY", links: companyLinks },
  ];

  return (
    <section className="absolute w-[390px] h-[1942px] top-[8669px] left-0 bg-[#151a22] rounded-[0px_40px_0px_0px] overflow-hidden" id="contact">
      <div className="absolute w-[1577px] h-[2638px] top-[-851px] left-[-823px]">
        <div className="absolute w-[1577px] h-[1577px] top-0 left-0 rounded-[788.5px] bg-[linear-gradient(96deg,rgba(21,26,34,0)_0%,rgba(255,255,255,1)_100%)] opacity-15" />

        <img
          className="absolute w-[390px] h-[533px] top-[851px] left-[823px] object-cover"
          alt="Mueen agherdien"
          src="/img/mueen-agherdien-t1u-dvo7nbo-unsplash-1-1.png"
          loading="lazy"
          decoding="async"
        />

        <header className="top-[931px] left-[847px] flex flex-col w-[342px] items-start gap-[7px] absolute">
          <div className="inline-flex items-center justify-center gap-[5.6px] relative flex-[0_0_auto]">
            <div className="relative w-[7px] h-[7px] bg-[color:var(--collection-1-APRICOT-TAN)] rounded-[3.5px] aspect-[1]" />

            <div className="relative w-fit mt-[-0.70px] [font-family:'Poppins',Helvetica] font-medium text-collection-1-light text-xs tracking-[-0.36px] leading-[18px] whitespace-nowrap">
              ENDLESS POSSIBILITIES
            </div>
          </div>

          <h1 className="relative self-stretch [font-family:'Poppins',Helvetica] font-medium text-collection-1-light text-[40px] tracking-[-2.00px] leading-[44.0px]">
            READY FOR AFFORDABLE, PROFESSIONAL HOME SOLUTIONS?
          </h1>
        </header>

        <div className="flex flex-col w-[342px] items-start gap-6 absolute top-[1146px] left-[847px]">
          <p className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-collection-1-light text-base tracking-[-0.48px] leading-6">
            Contact us today for a free consultation
          </p>

          <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <button className="flex items-center justify-between pl-[19.8px] pr-[5.4px] py-[5.4px] relative self-stretch w-full flex-[0_0_auto] bg-collection-1-light rounded-[14.4px] hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-collection-1-button focus:ring-offset-2 focus:ring-offset-[#151a22]">
              <span className="relative w-fit [font-family:'Poppins',Helvetica] font-medium text-collection-1-dark text-[14.4px] tracking-[-0.86px] leading-[21.6px] whitespace-nowrap">
                FREE CONSULTATION
              </span>

              <div className="flex w-[43.2px] h-[43.2px] items-center justify-center gap-[7.2px] relative bg-collection-1-button rounded-[8.1px] aspect-[1]">
                <img
                  className="w-[18px] h-[18px] relative aspect-[1]"
                  alt="Arrow outward"
                  src="/img/arrow-outward-11.png"
                />
              </div>
            </button>

            <a
              href="tel:+61480758298"
              className="flex items-center justify-between pl-[19.8px] pr-[5.4px] py-[5.4px] relative self-stretch w-full flex-[0_0_auto] rounded-[14.4px] border-[0.9px] border-solid border-[#ffffff66] hover:border-collection-1-light transition-colors focus:outline-none focus:ring-2 focus:ring-collection-1-button focus:ring-offset-2 focus:ring-offset-[#151a22]"
            >
              <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
                <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-collection-1-light text-[14.4px] tracking-[-0.86px] leading-[21.6px] whitespace-nowrap">
                  CALL US:
                </span>

                <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-collection-1-light text-[14.4px] tracking-[-0.86px] leading-[21.6px] whitespace-nowrap">
                  0480 758 298
                </span>
              </div>

              <div className="flex w-[43.2px] h-[43.2px] items-center justify-center gap-[7.2px] relative bg-collection-1-light rounded-[9px] aspect-[1]">
                <img
                  className="w-[18px] h-[18px] relative aspect-[1]"
                  alt="Arrow outward"
                  src="/img/arrow-outward-12.png"
                />
              </div>
            </a>
          </div>
        </div>

        <hr className="absolute w-[390px] h-px top-[1383px] left-[823px] border-0 bg-[url('/img/line-3.svg')] bg-cover" />

        <img
          className="absolute w-[130px] h-14 top-[1423px] left-[847px] aspect-[2.32]"
          alt="Foldabl Logo"
          src="/img/screenshot-2025-09-05-at-1-06-33-am-1.png"
        />

        <nav className="inline-flex flex-col items-start justify-center gap-10 absolute top-[1518px] left-[847px]">
          {footerSections.map((section, index) => (
            <div
              key={index}
              className="inline-flex flex-col items-start gap-[11px] relative flex-[0_0_auto]"
            >
              <h3 className="relative self-stretch mt-[-1.00px] opacity-40 [font-family:'Poppins',Helvetica] font-normal text-collection-1-light text-base tracking-[-0.48px] leading-6">
                {section.title}
              </h3>

              {section.links.map((link, linkIndex) => {
                const mapHref = (text) => {
                  switch (text) {
                    case "Blogs & Guides":
                      return "/blog";
                    case "Professional Builders":
                      return "/about";
                    case "Constructions Council Process":
                      return "/process";
                    case "Foldäbl Series":
                    case "Expändäbl Series":
                    case "Coming Soon":
                    case "All Homes":
                      return "/homes";
                    case "NSW":
                      return "/homes/nsw";
                    case "QLD":
                      return "/homes/qld";
                    case "VIC":
                      return "/homes/vic";
                    default:
                      return "#";
                  }
                };
                const href = (() => {
                  switch (link) {
                    case "NSW": return "/homes/nsw";
                    case "QLD": return "/homes/qld";
                    case "VIC": return "/homes/vic";
                    case "SA": return "/homes/sa";
                    case "WA": return "/homes/wa";
                    case "TAS": return "/homes/tas";
                    case "NT": return "/homes/nt";
                    case "ACT": return "/homes/act";
                    case "All States": return "/service-areas";
                    case "Blogs & Guides": return "/blog";
                    case "Professional Builders": return "/about";
                    case "Constructions Council Process": return "/process";
                    case "Foldäbl Series":
                    case "Expändäbl Series":
                    case "Coming Soon":
                    case "All Homes": return "/homes";
                    default: return "#";
                  }
                })();
                return (
                  <a
                    key={linkIndex}
                    href={href}
                    className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-collection-1-light text-base tracking-[-0.48px] leading-6 hover:text-collection-1-button transition-colors focus:outline-none focus:text-collection-1-button"
                  >
                    {link}
                  </a>
                );
              })}
            </div>
          ))}
        </nav>
      </div>

      <footer className="flex flex-col w-[390px] items-start justify-center gap-4 p-6 absolute top-[1837px] left-0 border-t [border-top-style:solid] border-[#ffffff4c]">
        <p className="relative w-fit mt-[-1.00px] mr-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-collection-1-light text-sm tracking-[-0.42px] leading-[21px] whitespace-nowrap">
          © 2025 Foldabl. Professional Modular Home Builders.
        </p>

        <img
          className="relative flex-[0_0_auto]"
          alt="Social media links"
          src="/img/frame-142.svg"
        />
      </footer>
    </section>
  );
};
