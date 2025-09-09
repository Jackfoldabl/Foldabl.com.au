import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { AboutSection } from "./sections/AboutSection";
import { BlogSection } from "./sections/BlogSection/BlogSection";
import { ContactSection } from "./sections/ContactSection/ContactSection";
import { FeaturesSection } from "./sections/FeaturesSection/FeaturesSection";
import { GallerySection } from "./sections/GallerySection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { ServicesSection } from "./sections/ServicesSection/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

const navigationItems = [
  { label: "HOME", href: "#home" },
  { label: "PROCESSES", href: "#processes" },
  { label: "BLOG", href: "/blog" },
  { label: "ABOUT", href: "#about" },
  { label: "INSTALLATION", href: "#installation" },
];

const homeModels = [
  {
    id: 1,
    name: "FOLDÄBL STUDIO",
    type: "27 sqm Studio",
    price: "From $60k",
    image: "/img/rectangle-5-4.png",
  },
  {
    id: 2,
    name: "FOLDÄBL 42",
    type: "Two Bedroom",
    size: "42.6 sqm",
    image: "/img/rectangle-5-2.svg",
  },
  {
    id: 3,
    name: "EXPÄNDÄBL 20",
    type: "Studio",
    size: "24.5 sqm",
    image: "/img/rectangle-5-3.png",
  },
  {
    id: 4,
    name: "EXPÄNDÄBL 30",
    type: "Coming Soon",
    availability: "Q4 2025",
    image: "/img/rectangle-5-5.png",
    isComingSoon: true,
  },
];

const processSteps = [
  {
    step: "STEP 1:",
    title: "CONSULTATION",
    description:
      "Start with a free initial meeting where we'll help you choose the model that best fits your needs.",
  },
  {
    step: "STEP 2:",
    title: "COUNCIL APPROVAL",
    description:
      "A $2,000 deposit gets the process started, with a full refund guaranteed if approval isn't granted.",
  },
  {
    step: "STEP 3:",
    title: "MANUFACTURING",
    description:
      "Your project enters an 8-week production phase, with a 50% payment required upfront to begin the process",
  },
  {
    step: "STEP 4:",
    title: "INSTALLATION",
    description:
      "Our team at Dach ensures a seamless professional setup, with the remaining 50% balance collected at this stage",
  },
];

const trustFeatures = [
  {
    icon: "/img/security-1.svg",
    title: "30+ YEARS",
    description: "Proven building expertise with Chris & Dach Constructions",
  },
  {
    icon: "/img/assured-workload-1.svg",
    title: "100% APPROVAL",
    description:
      "Guaranteed council approval with 5 homes delivered seamlessly.",
  },
  {
    icon: "/img/bolt-1.svg",
    title: "8 WEEK DELIVERY",
    description:
      "Enjoy peace of mind with our 8-Week Delivery Guarantee, delivered Australia-wide.",
  },
  {
    icon: "/img/verified-1.svg",
    title: "LICENSED BUILDERS",
    description:
      "Professional installation, carried out by fully licensed and qualified builders you can trust",
  },
  {
    icon: "/img/widgets-1.svg",
    title: "ALL-IN-ONE SERVICE",
    description:
      "A complete service package—from council approval to handing you the keys.",
  },
  {
    icon: "/img/headset-mic-1.svg",
    title: "GUIDANCE",
    description:
      "Flexible financing options with full support from our sales team",
  },
];

const useCases = [
  {
    id: 1,
    category: "Granny Flat",
    title: "ADDITIONAL INCOME",
    caseNumber: "USE CASE 1",
  },
  {
    id: 2,
    category: "First Home",
    title: "YOUNG ADULTS",
    caseNumber: "USE CASE 2",
  },
  {
    id: 3,
    category: "Investment",
    title: "RENTAL PROPERTY",
    caseNumber: "USE CASE 3",
  },
  {
    id: 4,
    category: "Home Office",
    title: "WORK FROM HOME",
    caseNumber: "USE CASE 4",
  },
];

const footerSections = [
  {
    title: "RESOURCES",
    links: [
      "Professional Builders",
      "Financing Info",
      "Available Australia-Wide",
      "Constructions Council Process",
      "Blogs & Guides",
      "24/7 Support",
      "Terms and Privacy",
    ],
  },
  {
    title: "NAVIGATION",
    links: ["Home", "Processes", "Blog", "About", "Installation"],
  },
  {
    title: "OUR HOMES",
    links: ["Foldäbl Series", "Expändäbl Series", "Coming Soon", "All Homes"],
  },
  {
    title: "SERVICE AREAS",
    links: ["NSW", "QLD", "VIC", "All States"],
  },
  {
    title: "COMPANY",
    links: ["About Chris", "Dach", "30+ Years", "Contact"],
  },
];

export const MobileHomepage = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="w-screen grid [align-items:start] bg-white justify-items-center"
      data-model-id="44:1986"
    >
      <div
        className={`relative ${screenWidth < 1440 ? "w-[390px]" : (screenWidth >= 1440) ? "w-[1440px]" : ""} ${screenWidth < 1440 ? "h-[10611px]" : (screenWidth >= 1440) ? "h-[9855px]" : ""} ${screenWidth < 1440 ? "bg-white" : (screenWidth >= 1440) ? "bg-collection-1-light" : ""}`}
      >
        {screenWidth < 1440 && (
          <>
            <AboutSection />
            <GallerySection />
            <FeaturesSection />
            <HeroSection />
            <BlogSection />
            <TestimonialsSection />
            <ServicesSection />
            <ContactSection />
          </>
        )}

        {screenWidth >= 1440 && (
          <>
            <header id="home" className="absolute w-[1440px] h-[901px] top-0 left-0 bg-collection-1-dark rounded-[0px_0px_80px_0px] overflow-hidden">
              <div className="relative h-[901px]">
                <picture className="absolute inset-0 -z-10 block">
                  <source type="image/avif" srcSet="/img/mueen-agherdien-t1u-dvo7nbo-unsplash-1-2.avif" />
                  <source type="image/webp" srcSet="/img/mueen-agherdien-t1u-dvo7nbo-unsplash-1-2.webp" />
                  <img
                    src="/img/mueen-agherdien-t1u-dvo7nbo-unsplash-1-2.png"
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                    fetchpriority="high"
                    width="1440"
                    height="901"
                  />
                </picture>
                <nav className="flex w-[1440px] items-center justify-between pt-10 pb-0 px-10 absolute top-0 left-0">
                  <img
                    className="relative w-[142px] h-14 aspect-[2.53]"
                    alt="Emove"
                    src="/img/emove-1.png"
                  />

                  <div className="inline-flex items-center justify-center gap-6 relative flex-[0_0_auto]">
                    {navigationItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="relative w-fit [font-family:'Poppins',Helvetica] font-medium text-collection-1-light text-base tracking-[-0.96px] leading-6 whitespace-nowrap hover:opacity-80 transition-opacity"
                      >
                        {item.label}
                      </a>
                    ))}

                    <button className="inline-flex items-center gap-[11.2px] pl-[15.4px] pr-[3.8px] py-[3.8px] relative flex-[0_0_auto] bg-collection-1-light rounded-[9.6px] hover:bg-opacity-90 transition-all">
                      <span className="text-sm tracking-[-0.84px] leading-[21px] relative w-fit [font-family:'Poppins',Helvetica] font-medium text-collection-1-dark whitespace-nowrap">
                        FREE CONSULTATION
                      </span>

                      <div className="flex w-[33.6px] h-[33.6px] items-center justify-center gap-[5.6px] relative bg-collection-1-button rounded-[4.8px] aspect-[1]">
                        <img
                          className="w-3.5 h-3.5 relative aspect-[1]"
                          alt="Arrow outward"
                          src="/img/arrow-outward-13.png"
                        />
                      </div>
                    </button>
                  </div>
                </nav>

                <div className="flex flex-col w-[668px] items-start gap-4 absolute top-[521px] left-10">
                  <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-collection-1-light text-[80px] tracking-[-4.00px] leading-[88.0px]">
                    REVOLUTIONARY MODULAR HOMES AUSTRALIA-WIDE
                  </h1>

                  <div className="w-[569px] flex items-start gap-2 relative flex-[0_0_auto]">
                    <button className="flex items-center justify-between pl-[22px] pr-1.5 py-1.5 relative flex-1 grow bg-collection-1-light rounded-2xl hover:bg-opacity-90 transition-all">
                      <span className="text-base tracking-[-0.96px] leading-6 relative w-fit [font-family:'Poppins',Helvetica] font-medium text-collection-1-dark whitespace-nowrap">
                        FREE CONSULTATION
                      </span>

                      <div className="flex w-12 h-12 items-center justify-center gap-2 relative bg-collection-1-button rounded-[9px] aspect-[1]">
                        <img
                          className="w-5 h-5 relative aspect-[1]"
                          alt="Arrow outward"
                          src="/img/arrow-outward-25.png"
                        />
                      </div>
                    </button>

                    <button className="flex items-center justify-between pl-[22px] pr-1.5 py-1.5 relative flex-1 grow rounded-2xl border border-solid border-[#ffffff66] hover:bg-white hover:bg-opacity-10 transition-all">
                      <span className="relative w-fit [font-family:'Poppins',Helvetica] font-medium text-collection-1-light text-base tracking-[-0.96px] leading-6 whitespace-nowrap">
                        SEE OUR HOMES
                      </span>

                      <div className="flex w-12 h-12 items-center justify-center gap-2 relative bg-collection-1-light rounded-[10px] aspect-[1]">
                        <img
                          className="w-5 h-5 relative aspect-[1]"
                          alt="Arrow outward"
                          src="/img/arrow-outward-17.png"
                        />
                      </div>
                    </button>
                  </div>
                </div>

                <div className="flex flex-col w-[437px] items-start gap-2.5 absolute top-[719px] left-[963px]">
                  <p className="mt-[-1.00px] font-normal text-2xl tracking-[-0.72px] leading-9 relative self-stretch [font-family:'Poppins',Helvetica] text-collection-1-light">
                    Professional builders and complete installation service.
                    What costs $250k to build, we deliver for $60k.
                  </p>

                  <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
                    <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-collection-1-light text-base tracking-[-0.48px] leading-6 whitespace-nowrap">
                      Scroll to explore
                    </span>

                    <img
                      className="relative w-6 h-6 aspect-[1]"
                      alt="Arrow circle down"
                      src="/img/arrow-circle-down-1.png"
                    />
                  </div>
                </div>
              </div>
            </header>

            <section id="installation" className="absolute w-[1440px] h-[1167px] top-[901px] left-0 bg-white">
              <div className="top-[100px] left-10 inline-flex items-center justify-center gap-2 absolute">
                <div className="relative w-2.5 h-2.5 bg-[color:var(--collection-1-APRICOT-TAN)] rounded-[5px] aspect-[1]" />

                <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-collection-1-dark text-base tracking-[-0.48px] leading-6 whitespace-nowrap">
                  COMPLETE DONE-FOR-YOU SERVICE
                </span>
              </div>

              <h2 className="absolute w-[899px] top-[99px] left-[501px] [font-family:'Poppins',Helvetica] font-medium text-collection-1-dark text-7xl tracking-[-3.60px] leading-[79.2px]">
                PROFESSIONAL BUILDING SOLUTIONS
              </h2>

              <article className="flex flex-col w-[668px] h-[769px] items-start justify-between absolute top-[298px] left-10 rounded-3xl overflow-hidden bg-[url(/img/frame-5-2.png)] bg-cover bg-[50%_50%]">
                <div className="flex items-center justify-center gap-2 p-8 relative self-stretch w-full flex-[0_0_auto]">
                  <span className="relative flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-collection-1-light text-[32px] tracking-[-1.28px] leading-[35.2px]">
                    01
                  </span>
                </div>

                <div className="flex-col items-start gap-2 p-8 self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-[#ffffff4c] flex relative">
                  <h3 className="self-stretch mt-[-1.00px] text-collection-1-light relative [font-family:'Poppins',Helvetica] font-medium text-2xl tracking-[-0.96px] leading-[26.4px]">
                    COUNCIL APPROVAL
                  </h3>

                  <div className="flex items-center gap-12 relative self-stretch w-full flex-[0_0_auto]">
                    <p className="relative flex-1 [font-family:'Poppins',Helvetica] font-normal text-collection-1-light text-lg tracking-[-0.54px] leading-[27px]">
                      We manage all permits and planning, with a full refund if
                      not approved.
                    </p>

                    <button className="inline-flex items-center gap-8 pl-[22px] pr-1.5 py-1.5 relative flex-[0_0_auto] rounded-2xl border border-solid border-[#ffffff66] hover:bg-white hover:bg-opacity-10 transition-all">
                      <span className="text-collection-1-light relative w-fit [font-family:'Poppins',Helvetica] font-medium text-base tracking-[-0.96px] leading-6 whitespace-nowrap">
                        LEARN MORE
                      </span>

                      <div className="flex w-12 h-12 items-center justify-center gap-2 relative bg-collection-1-light rounded-[10px] aspect-[1]">
                        <img
                          className="w-5 h-5 relative aspect-[1]"
                          alt="Arrow outward"
                          src="/img/arrow-outward-17.png"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </article>

              <article className="flex flex-col w-[668px] h-[769px] items-center justify-between absolute top-[298px] left-[732px] rounded-3xl overflow-hidden bg-[url(/img/frame-5-3.png)] bg-cover bg-[50%_50%]">
                <div className="flex items-center justify-center gap-2 p-8 relative self-stretch w-full flex-[0_0_auto]">
                  <span className="relative flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-collection-1-light text-[32px] tracking-[-1.28px] leading-[35.2px]">
                    02
                  </span>
                </div>

                <div className="flex-col items-start gap-2 p-8 self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-[#ffffff4c] flex relative">
                  <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-collection-1-light text-2xl tracking-[-0.96px] leading-[26.4px]">
                    PROFESSIONAL INSTALLATION
                  </h3>

                  <div className="flex items-center gap-12 relative self-stretch w-full flex-[0_0_auto]">
                    <p className="relative flex-1 [font-family:'Poppins',Helvetica] font-normal text-collection-1-light text-lg tracking-[-0.54px] leading-[27px]">
                      Completed by Dach Constructions (NSW) or licensed local
                      builders.
                    </p>

                    <button className="inline-flex items-center gap-8 pl-[22px] pr-1.5 py-1.5 relative flex-[0_0_auto] rounded-2xl border border-solid border-[#ffffff66] hover:bg-white hover:bg-opacity-10 transition-all">
                      <span className="text-collection-1-light relative w-fit [font-family:'Poppins',Helvetica] font-medium text-base tracking-[-0.96px] leading-6 whitespace-nowrap">
                        LEARN MORE
                      </span>

                      <div className="flex w-12 h-12 items-center justify-center gap-2 relative bg-collection-1-light rounded-[10px] aspect-[1]">
                        <img
                          className="w-5 h-5 relative aspect-[1]"
                          alt="Arrow outward"
                          src="/img/arrow-outward-17.png"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </article>
            </section>

            <section id="homes" className="absolute w-[1440px] h-[1816px] top-[2068px] left-0 bg-collection-1-light-medium rounded-[60px] overflow-hidden">
              <div className="absolute w-[553px] h-[181px] top-[100px] left-10">
                <div className="top-0 left-0 inline-flex items-center justify-center gap-2 absolute">
                  <div className="relative w-2.5 h-2.5 bg-[color:var(--collection-1-APRICOT-TAN)] rounded-[5px] aspect-[1]" />

                  <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-collection-1-dark text-base tracking-[-0.48px] leading-6 whitespace-nowrap">
                    DESIGNED FOR EVERY LIFESTYLE
                  </span>
                </div>

                <h2 className="absolute w-[553px] top-[23px] left-0 [font-family:'Poppins',Helvetica] font-medium text-collection-1-dark text-7xl tracking-[-3.60px] leading-[79.2px]">
                  OUR MODULAR HOME RANGE
                </h2>
              </div>

              <p className="absolute w-[553px] top-[193px] left-[847px] [font-family:'Poppins',Helvetica] font-normal text-collection-1-dark text-lg tracking-[-0.54px] leading-[27px]">
                Explore our collection of modern, functional modular homes built
                to fit your needs—whether you're starting small, upgrading, or
                creating your forever home.
              </p>

              {homeModels.map((model, index) => {
                const positions = [
                  {
                    top: "330px",
                    left: "40px",
                    width: "783px",
                    height: "634px",
                  },
                  {
                    top: "330px",
                    left: "847px",
                    width: "553px",
                    height: "634px",
                  },
                  {
                    top: "1036px",
                    left: "617px",
                    width: "783px",
                    height: "680px",
                  },
                  {
                    top: "1036px",
                    left: "40px",
                    width: "553px",
                    height: "463px",
                  },
                ];

                const position = positions[index];

                return (
                  <article
                    key={model.id}
                    className={`flex flex-col items-start gap-6 absolute`}
                    style={{
                      top: position.top,
                      left: position.left,
                      width: position.width,
                      height: position.height,
                    }}
                  >
                    <img
                      className={`${index === 0 || index === 3 ? "relative flex-1 self-stretch w-full grow" : "mt-[-1.00px] ml-[-1.00px] mr-[-1.00px] object-cover relative flex-1 self-stretch w-full grow"}`}
                      alt={model.name}
                      src={model.image}
                    />

                    <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                      <div
                        className={`flex flex-col w-[322px] items-start gap-2 relative ${index === 3 ? "inline-flex flex-[0_0_auto]" : ""}`}
                      >
                        <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-collection-1-dark text-2xl tracking-[-1.20px] leading-[31.2px]">
                          {model.name}
                        </h3>

                        <div className="flex items-center gap-[13px] relative self-stretch w-full flex-[0_0_auto] opacity-60">
                          <span
                            className={`${index === 0 ? "w-fit font-normal text-base tracking-[-0.48px] leading-6 whitespace-nowrap relative mt-[-1.00px] [font-family:'Poppins',Helvetica] text-collection-1-dark" : index === 3 ? "w-fit mt-[-1.00px] text-collection-1-dark whitespace-nowrap relative [font-family:'Poppins',Helvetica] font-normal text-base tracking-[-0.48px] leading-6" : "relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-collection-1-dark text-base tracking-[-0.48px] leading-6 whitespace-nowrap"}`}
                          >
                            {model.type}
                          </span>

                          <img
                            className="relative w-[1.5px] h-3.5"
                            alt="Line"
                            src="/img/line-2-4.svg"
                          />

                          <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-collection-1-dark text-base tracking-[-0.48px] leading-6 whitespace-nowrap">
                            {model.price || model.size || model.availability}
                          </span>
                        </div>
                      </div>

                      {model.isComingSoon ? (
                        <button
                          className={`inline-flex h-[60px] items-center justify-center gap-8 px-[22px] py-1.5 relative flex-[0_0_auto] rounded-2xl border border-solid border-collection-1-dusk-steel hover:bg-collection-1-dusk-steel hover:bg-opacity-10 transition-all`}
                        >
                          <span className="relative w-fit [font-family:'Poppins',Helvetica] font-medium text-collection-1-dark text-base tracking-[-0.96px] leading-6 whitespace-nowrap">
                            NOTIFY ME
                          </span>

                          <img
                            className="relative w-5 h-5 aspect-[1]"
                            alt="Notifications"
                            src="/img/notifications.png"
                          />
                        </button>
                      ) : (
                        <button className="inline-flex items-center justify-center gap-8 pl-[22px] pr-1.5 py-1.5 relative flex-[0_0_auto] rounded-2xl border border-solid border-collection-1-dusk-steel hover:bg-collection-1-dusk-steel hover:bg-opacity-10 transition-all">
                          <span className="relative w-fit [font-family:'Poppins',Helvetica] font-medium text-collection-1-dark text-base tracking-[-0.96px] leading-6 whitespace-nowrap">
                            VIEW DETAILS
                          </span>

                          <div className="flex w-12 h-12 items-center justify-center gap-2 relative bg-collection-1-dark rounded-[9px] aspect-[1]">
                            <img
                              className="w-5 h-5 relative aspect-[1]"
                              alt="Arrow outward"
                              src="/img/arrow-outward-20.png"
                            />
                          </div>
                        </button>
                      )}
                    </div>
                  </article>
                );
              })}
            </section>

            <section id="processes" className="h-[1789px] top-[3884px] bg-white absolute w-[1440px] left-0">
              <div className="flex flex-col w-[668px] items-start absolute top-[100px] left-10">
                <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
                  <div className="relative w-2.5 h-2.5 bg-[color:var(--collection-1-APRICOT-TAN)] rounded-[5px] aspect-[1]" />

                  <span className="w-fit font-medium text-base tracking-[-0.48px] leading-6 whitespace-nowrap relative mt-[-1.00px] [font-family:'Poppins',Helvetica] text-collection-1-dark">
                    8 WEEK DELIVERY
                  </span>
                </div>

                <h2 className="relative self-stretch [font-family:'Poppins',Helvetica] font-medium text-collection-1-dark text-7xl tracking-[-3.60px] leading-[79.2px]">
                  HOW WE MAKE HOME OWNERSHIP POSSIBLE
                </h2>
              </div>

              <img
                className="w-[553px] h-[369px] top-[100px] left-[847px] absolute object-cover"
                alt="Rectangle"
                src="/img/rectangle-6-2.png"
              />

              <div className="flex flex-col w-[1440px] items-start absolute top-[549px] left-0">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className="items-center gap-6 p-10 self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-[#5f6b7b4c] flex relative"
                  >
                    <span className="relative flex-1 opacity-50 [font-family:'Poppins',Helvetica] font-normal text-collection-1-dark text-lg tracking-[-0.72px] leading-[19.8px]">
                      {step.step}
                    </span>

                    <h3
                      className={`${index === 1 || index === 3 ? "w-[642px] text-collection-1-dark relative [font-family:'Poppins',Helvetica] font-medium text-2xl tracking-[-0.96px] leading-[26.4px]" : "relative w-[642px] [font-family:'Poppins',Helvetica] font-medium text-collection-1-dark text-2xl tracking-[-0.96px] leading-[26.4px]"}`}
                    >
                      {step.title}
                    </h3>

                    <p className="relative w-[553px] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-collection-1-dark text-lg tracking-[-0.54px] leading-[27px]">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              <p className="absolute w-[553px] top-[381px] left-10 [font-family:'Poppins',Helvetica] font-normal text-collection-1-dark text-lg tracking-[-0.54px] leading-[27px]">
                With a streamlined process from design to installation, we make
                it possible to move into your new home in as little as eight
                weeks—bringing you closer to ownership faster and with less
                stress.
              </p>

              <img
                className="absolute w-[1360px] h-[624px] top-[1165px] left-10"
                alt="Rectangle"
                src="/img/rectangle-7-1.png"
              />
            </section>

            {/* Anchor for BLOG to support desktop nav linking */}
            <div id="blog" className="absolute top-[5665px] left-0 w-px h-px" aria-hidden="true" />

            <section id="contact" className="h-[1235px] top-[5673px] bg-white absolute w-[1440px] left-0">
              <div className="top-[100px] left-10 inline-flex items-center justify-center gap-2 absolute">
                <div className="relative w-2.5 h-2.5 bg-[color:var(--collection-1-APRICOT-TAN)] rounded-[5px] aspect-[1]" />

                <span
                  className="relative w-fit mt-[-1.00px] [font-family:'Popp
ins',Helvetica] font-medium text-collection-1-dark text-base tracking-[-0.48px] leading-6 whitespace-nowrap"
                >
                  START YOUR JOURNEY TODAY
                </span>
              </div>

              <h2 className="absolute w-[668px] top-[99px] left-[501px] [font-family:'Poppins',Helvetica] font-medium text-collection-1-dark text-7xl tracking-[-3.60px] leading-[79.2px]">
                CALL US FOR A FREE CONSULTATION
              </h2>

              <p className="absolute w-[553px] top-[265px] left-[501px] [font-family:'Poppins',Helvetica] font-normal text-collection-1-dark text-lg tracking-[-0.54px] leading-[27px]">
                Our team is here to answer your questions, explore your options,
                and guide you through the process—no cost, no obligation.
              </p>

              <button className="inline-flex items-center gap-4 pl-[22px] pr-1.5 py-1.5 absolute top-[341px] left-[501px] bg-collection-1-dark rounded-2xl hover:bg-opacity-90 transition-all">
                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-collection-1-light text-base tracking-[-0.96px] leading-6 whitespace-nowrap">
                    CALL US:
                  </span>

                  <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-collection-1-light text-base tracking-[-0.96px] leading-6 whitespace-nowrap">
                    0480 758 298
                  </span>
                </div>

                <div className="flex w-12 h-12 items-center justify-center gap-2 relative bg-collection-1-button rounded-[9px] aspect-[1]">
                  <img
                    className="relative w-5 h-5 aspect-[1]"
                    alt="Phone enabled"
                    src="/img/phone-enabled-1.png"
                  />
                </div>
              </button>

              <div className="flex flex-col w-[1362px] h-[751px] items-start absolute top-[444px] left-[39px] rounded-[32px] border border-solid border-[#5f6b7b4c]">
                <div className="flex items-center relative flex-1 self-stretch w-full grow border-b [border-bottom-style:solid] border-[#5f6b7b4c]">
                  {trustFeatures.slice(0, 3).map((feature, index) => (
                    <div
                      key={index}
                      className={`${index < 2 ? "border-r [border-right-style:solid] border-[#5f6b7b4c]" : ""} flex flex-col items-start justify-between p-8 relative flex-1 self-stretch grow`}
                    >
                      <img
                        className="relative aspect-auto"
                        alt={feature.title}
                        src={feature.icon}
                        style={{
                          width:
                            index === 0
                              ? "26.67px"
                              : index === 1
                                ? "36.67px"
                                : "23.88px",
                          height:
                            index === 0
                              ? "33px"
                              : index === 1
                                ? "37.85px"
                                : "34.91px",
                        }}
                      />

                      <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                        <h3
                          className={`${index === 2 ? "self-stretch font-medium text-2xl tracking-[-0.96px] leading-[26.4px] relative mt-[-1.00px] [font-family:'Poppins',Helvetica] text-collection-1-dark" : "mt-[-1.00px] font-medium text-collection-1-dark text-2xl tracking-[-0.96px] leading-[26.4px] relative self-stretch [font-family:'Poppins',Helvetica]"}`}
                        >
                          {feature.title}
                        </h3>

                        <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-collection-1-dark text-lg tracking-[-0.54px] leading-[27px]">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center relative flex-1 self-stretch w-full grow">
                  {trustFeatures.slice(3).map((feature, index) => (
                    <div
                      key={index + 3}
                      className={`${index < 2 ? "border-r [border-right-style:solid] border-[#5f6b7b4c]" : ""} flex flex-col items-start justify-between p-8 relative flex-1 self-stretch grow`}
                    >
                      <img
                        className="relative aspect-auto"
                        alt={feature.title}
                        src={feature.icon}
                        style={{
                          width:
                            index === 0
                              ? "35.81px"
                              : index === 1
                                ? "31.6px"
                                : "30px",
                          height:
                            index === 0
                              ? "34.26px"
                              : index === 1
                                ? "31.6px"
                                : "35.03px",
                        }}
                      />

                      <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                        <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-collection-1-dark text-2xl tracking-[-0.96px] leading-[26.4px]">
                          {feature.title}
                        </h3>

                        <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-collection-1-dark text-lg tracking-[-0.54px] leading-[27px]">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="services" className="h-[918px] top-[7903px] bg-white absolute w-[1440px] left-0">
              <div className="flex flex-col w-[899px] items-start absolute top-[100px] left-10">
                <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
                  <div className="relative w-2.5 h-2.5 bg-[color:var(--collection-1-APRICOT-TAN)] rounded-[5px] aspect-[1]" />

                  <span className="text-collection-1-dark relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-base tracking-[-0.48px] leading-6 whitespace-nowrap">
                    ENDLESS POSSIBILITIES
                  </span>
                </div>

                <h2 className="relative self-stretch [font-family:'Poppins',Helvetica] font-medium text-collection-1-dark text-7xl tracking-[-3.60px] leading-[79.2px]">
                  WHAT WILL YOUR FOLDABL HOME BECOME?
                </h2>
              </div>

              <p className="absolute w-[437px] top-[193px] left-[963px] [font-family:'Poppins',Helvetica] font-normal text-collection-1-dark text-lg tracking-[-0.54px] leading-[27px]">
                From a cozy family retreat to a modern workspace or rental
                investment, your foldabl home adapts to your lifestyle and
                future goals.
              </p>

              <div className="flex w-[1362px] items-center gap-6 absolute top-[322px] left-[39px]">
                {useCases.map((useCase, index) => (
                  <article
                    key={useCase.id}
                    className={`flex-col w-[553px] h-[416px] items-center justify-between p-6 rounded-[32px] border border-solid border-[#5f6b7b4c] flex relative ${index === 2 ? "mr-[-345.00px]" : index === 3 ? "mr-[-922.00px]" : ""}`}
                  >
                    <span className="relative self-stretch mt-[-1.00px] opacity-40 [font-family:'Poppins',Helvetica] font-normal text-collection-1-dark text-lg tracking-[-0.72px] leading-[19.8px]">
                      {useCase.caseNumber}
                    </span>

                    <div className="flex flex-col items-start justify-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                        <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-collection-1-dark text-base tracking-[-0.48px] leading-6 whitespace-nowrap">
                          {useCase.category}
                        </span>

                        <h3 className="relative self-stretch [font-family:'Poppins',Helvetica] font-medium text-collection-1-dark text-2xl tracking-[-0.96px] leading-[26.4px]">
                          {useCase.title}
                        </h3>
                      </div>

                      <button className="inline-flex items-center justify-center gap-8 pl-[22px] pr-1.5 py-1.5 relative flex-[0_0_auto] rounded-2xl border border-solid border-collection-1-dusk-steel hover:bg-collection-1-dusk-steel hover:bg-opacity-10 transition-all">
                        <span className="text-collection-1-dark relative w-fit [font-family:'Poppins',Helvetica] font-medium text-base tracking-[-0.96px] leading-6 whitespace-nowrap">
                          LEARN MORE
                        </span>

                        <div className="flex w-12 h-12 items-center justify-center gap-2 relative bg-collection-1-dark rounded-[9px] aspect-[1]">
                          <img
                            className={`w-5 h-5 relative aspect-[1] ${index === 3 ? "mt-[-8549.00px] ml-[-4682.00px]" : ""}`}
                            alt="Arrow outward"
                            src={
                              index === 3
                                ? "/img/arrow-outward-24.png"
                                : "/img/arrow-outward-26.png"
                            }
                          />
                        </div>
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              <img
                className="absolute w-[1360px] h-12 top-[770px] left-10"
                alt="Frame"
                src="/img/frame-182-2.svg"
              />
            </section>

            <section className="h-[1034px] top-[8821px] rounded-[0px_80px_0px_0px] overflow-hidden bg-[linear-gradient(0deg,rgba(0,0,0,0.48)_0%,rgba(0,0,0,0.48)_100%),linear-gradient(0deg,rgba(41,50,65,1)_0%,rgba(41,50,65,1)_100%)] absolute w-[1440px] left-0 bg-collection-1-dark">
              <div className="absolute w-[3470px] h-[3494px] top-[-2582px] left-[-1245px]">
                <div className="opacity-15 absolute w-[3470px] h-[3470px] top-0 left-0 rounded-[1735px] bg-[linear-gradient(96deg,rgba(21,26,34,0)_0%,rgba(255,255,255,1)_100%)]" />

                <img
                  className="absolute w-[1440px] h-[587px] top-[2582px] left-[1245px] object-cover"
                  alt="Mueen agherdien"
                  src="/img/mueen-agherdien-t1u-dvo7nbo-unsplash-1-3.png"
                />

                <div className="flex flex-col w-[899px] items-start justify-center gap-6 absolute top-[2676px] left-[1285px]">
                  <div className="flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
                    <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
                      <div className="relative w-2.5 h-2.5 bg-[color:var(--collection-1-APRICOT-TAN)] rounded-[5px] aspect-[1]" />

                      <span className="text-collection-1-light text-center relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-base tracking-[-0.48px] leading-6 whitespace-nowrap">
                        ENDLESS POSSIBILITIES
                      </span>
                    </div>

                    <h2 className="relative self-stretch [font-family:'Poppins',Helvetica] font-medium text-collection-1-light text-[80px] tracking-[-4.00px] leading-[88.0px]">
                      READY FOR AFFORDABLE, PROFESSIONAL HOME SOLUTIONS?
                    </h2>

                    <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-collection-1-light text-lg tracking-[-0.54px] leading-[27px]">
                      Contact us today for a free consultation
                    </p>
                  </div>

                  <div className="w-[649px] flex items-start gap-2 relative flex-[0_0_auto]">
                    <button className="flex items-center justify-between pl-[22px] pr-1.5 py-1.5 relative flex-1 grow bg-collection-1-light rounded-2xl hover:bg-opacity-90 transition-all">
                      <span className="relative w-fit [font-family:'Poppins',Helvetica] font-medium text-collection-1-dark text-base text-center tracking-[-0.96px] leading-6 whitespace-nowrap">
                        GET FREE CONSULTATION
                      </span>

                      <div className="flex w-12 h-12 items-center justify-center gap-2 relative bg-collection-1-button rounded-[9px] aspect-[1]">
                        <img
                          className="w-5 h-5 relative aspect-[1]"
                          alt="Arrow outward"
                          src="/img/arrow-outward-25.png"
                        />
                      </div>
                    </button>

                    <button className="flex items-center justify-between pl-[22px] pr-1.5 py-1.5 relative flex-1 grow rounded-2xl border border-solid border-[#ffffff4c] hover:bg-white hover:bg-opacity-10 transition-all">
                      <div className="inline-flex items-center justify-center gap-1.5 relative flex-[0_0_auto]">
                        <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-collection-1-light text-base text-center tracking-[-0.96px] leading-6 whitespace-nowrap">
                          CALL US:
                        </span>

                        <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-collection-1-light text-base text-center tracking-[-0.96px] leading-6 whitespace-nowrap">
                          0480 758 298
                        </span>
                      </div>

                      <div className="flex w-12 h-12 items-center justify-center gap-2 relative bg-collection-1-light rounded-[9px] aspect-[1]">
                        <img
                          className="relative w-5 h-5 aspect-[1]"
                          alt="Phone enabled"
                          src="/img/phone-enabled-2.png"
                        />
                      </div>
                    </button>
                  </div>
                </div>

                <img
                  className="absolute w-[1440px] h-px top-[3168px] left-[1245px] object-cover"
                  alt="Line"
                  src="/img/line-3-1.svg"
                />

                <img
                  className="absolute w-[169px] h-[73px] top-[3225px] left-[1285px] aspect-[2.32]"
                  alt="Screenshot"
                  src="/img/screenshot-2025-09-05-at-1-06-33-am-1-1.png"
                />

                <footer className="inline-flex items-start justify-center gap-10 absolute top-[3225px] left-[1833px]">
                  {footerSections.map((section, index) => (
                    <div
                      key={index}
                      className="inline-flex flex-col items-start gap-[11px] relative flex-[0_0_auto]"
                    >
                      <h4 className="relative self-stretch mt-[-1.00px] opacity-40 [font-family:'Poppins',Helvetica] font-normal text-collection-1-light text-base tracking-[-0.48px] leading-6">
                        {section.title}
                      </h4>

                      {section.links.map((link, linkIndex) => {
                        const href = link === "Blogs & Guides" ? "/blog" : "#";
                        return (
                          <a
                            key={linkIndex}
                            href={href}
                            className={`${linkIndex === 5 && index === 1 ? "self-stretch font-normal text-collection-1-light text-base tracking-[-0.48px] leading-6 relative [font-family:'Poppins',Helvetica]" : linkIndex === 2 && index === 2 ? "self-stretch text-collection-1-light relative [font-family:'Poppins',Helvetica] font-normal text-base tracking-[-0.48px] leading-6" : linkIndex === 2 && index === 4 ? "font-normal text-collection-1-light text-base tracking-[-0.48px] leading-6 relative self-stretch [font-family:'Poppins',Helvetica]" : "relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-collection-1-light text-base tracking-[-0.48px] leading-6"} hover:opacity-80 transition-opacity`}
                          >
                            {link}
                          </a>
                        );
                      })}
                    </div>
                  ))}
                </footer>
              </div>

              <div className="flex w-[1439px] h-[66px] items-center justify-between px-10 py-0 absolute top-[968px] left-px border-t [border-top-style:solid] border-[#ffffff4c]">
                <p className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-collection-1-light text-sm tracking-[-0.42px] leading-[21px] whitespace-nowrap">
                  © 2025 Foldabl. Professional Modular Home Builders.
                </p>

                <img
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="/img/frame-142-1.svg"
                />
              </div>
            </section>

            <section id="about" className="absolute w-[1440px] h-[995px] top-[6908px] left-0 bg-[#151a22] rounded-[0px_0px_0px_80px] overflow-hidden">
              <div className="relative w-[3470px] h-[3761px] top-[-2805px] left-[-1673px]">
                <div className="opacity-[0.06] absolute w-[3470px] h-[3470px] top-0 left-0 rounded-[1735px] bg-[linear-gradient(96deg,rgba(21,26,34,0)_0%,rgba(255,255,255,1)_100%)]" />

                <div className="flex flex-col w-[1360px] items-start absolute top-[2905px] left-[1713px]">
                  <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
                    <div className="relative w-2.5 h-2.5 bg-[color:var(--collection-1-APRICOT-TAN)] rounded-[5px] aspect-[1]" />

                    <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-collection-1-light text-base tracking-[-0.48px] leading-6 whitespace-nowrap">
                      FOLDABL IS YOUR TRUSTED BUILDING PARTNER
                    </span>
                  </div>

                  <h2 className="font-medium text-[80px] tracking-[-4.00px] leading-[88.0px] relative self-stretch [font-family:'Poppins',Helvetica] text-collection-1-light">
                    PROFESSIONAL BUILDERS WITH REVOLUTIONARY SOLUTIONS
                  </h2>
                </div>

                <div className="flex flex-col w-[553px] items-start gap-6 absolute top-[3352px] left-[1713px]">
                  <div className="flex flex-col h-[205px] items-start gap-4">
                    <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-collection-1-light text-lg tracking-[-0.54px] leading-[27px]">
                      <span className="tracking-[-0.10px]">
                        Chris brings 30+ years building experience through Dach
                        Constructions to solve Australia's housing crisis. We've
                        developed modular solutions that deliver what
                        traditional builders can't - quality homes for $60k
                        instead of $250k, ready in 8 weeks not 8 months.
                        <br />
                      </span>
                    </p>

                    <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-collection-1-light text-lg tracking-[-0.54px] leading-[27px]">
                      <span className="tracking-[-0.10px]">
                        Our complete service covers council approval,
                        manufacturing oversight, and professional installation
                        across Australia.
                      </span>
                    </p>
                  </div>

                  <button className="inline-flex items-center gap-10 pl-[22px] pr-1.5 py-1.5 relative flex-[0_0_auto] bg-collection-1-light rounded-2xl hover:bg-opacity-90 transition-all">
                    <span className="relative w-fit [font-family:'Poppins',Helvetica] font-medium text-collection-1-dark text-base tracking-[-0.96px] leading-6 whitespace-nowrap">
                      START YOUR PROJECT
                    </span>

                    <div className="flex w-12 h-12 items-center justify-center gap-2 relative bg-collection-1-button rounded-[9px] aspect-[1]">
                      <img
                        className="w-5 h-5 relative aspect-[1]"
                        alt="Arrow outward"
                        src="/img/arrow-outward-26.png"
                      />
                    </div>
                  </button>
                </div>

                <img
                  className="w-[670px] h-[410px] top-[3351px] left-[2404px] absolute object-cover"
                  alt="Rectangle"
                  src="/img/rectangle-6-3.png"
                />
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
};
