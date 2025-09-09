import React from "react";

export const TestimonialsSection = () => {
  const sectionData = {
    tagline: "FOLDABL IS YOUR TRUSTED BUILDING PARTNER",
    headline: "PROFESSIONAL BUILDERS WITH REVOLUTIONARY SOLUTIONS",
    description: [
      "Chris brings 30+ years building experience through Dach Constructions to solve Australia's housing crisis. We've developed modular solutions that deliver what traditional builders can't - quality homes for $60k instead of $250k, ready in 8 weeks not 8 months.",
      "Our complete service covers council approval, manufacturing oversight, and professional installation across Australia.",
    ],
    ctaText: "START YOUR PROJECT",
    image: {
      src: "/img/rectangle-6-1.png",
      alt: "Professional building construction showcase",
    },
  };

  return (
    <section
      className="absolute w-[390px] h-[899px] top-[6838px] left-0 bg-[#151a22] rounded-[0px_0px_0px_40px] overflow-hidden"
      aria-labelledby="testimonials-heading"
      id="about"
    >
      {/* Background gradient element */}
      <div
        className="absolute w-[1577px] h-[1629px] top-[-1348px] left-[-841px]"
        aria-hidden="true"
      >
        <div className="absolute w-[1577px] h-[1577px] top-0 left-0 rounded-[788.5px] bg-[linear-gradient(96deg,rgba(21,26,34,0)_0%,rgba(255,255,255,1)_100%)] opacity-15" />

        <div className="top-[1428px] left-[865px] flex flex-col w-[342px] items-start gap-[7px] absolute">
          <div className="inline-flex items-center justify-center gap-[5.6px] relative flex-[0_0_auto]">
            <div className="relative w-[7px] h-[7px] bg-[color:var(--collection-1-APRICOT-TAN)] rounded-[3.5px] aspect-[1]" />

            <p className="relative w-fit mt-[-0.70px] [font-family:'Poppins',Helvetica] font-medium text-collection-1-light text-xs tracking-[-0.36px] leading-[18px] whitespace-nowrap">
              {sectionData.tagline}
            </p>
          </div>

          <h2
            id="testimonials-heading"
            className="relative self-stretch [font-family:'Poppins',Helvetica] font-medium text-collection-1-light text-[40px] tracking-[-2.00px] leading-[44.0px]"
          >
            {sectionData.headline}
          </h2>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col w-[342px] items-start gap-6 absolute top-[301px] left-6">
        <div className="flex flex-col h-64 items-start gap-4">
          {sectionData.description.map((paragraph, index) => (
            <p
              key={index}
              className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-collection-1-light text-base tracking-[-0.48px] leading-6"
            >
              <span className="tracking-[-0.08px]">
                {paragraph}
                {index === 0 && <br />}
              </span>
            </p>
          ))}
        </div>

        <a
          href="/#contact"
          className="flex items-center justify-between pl-[19.8px] pr-[5.4px] py-[5.4px] relative self-stretch w-full flex-[0_0_auto] bg-collection-1-light rounded-[14.4px] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-collection-1-button focus:ring-offset-2 focus:ring-offset-[#151a22] transition-all duration-200"
          aria-label="Start your building project"
        >
          <span className="relative w-fit [font-family:'Poppins',Helvetica] font-medium text-collection-1-dark text-[14.4px] tracking-[-0.86px] leading-[21.6px] whitespace-nowrap">
            {sectionData.ctaText}
          </span>

          <div className="flex w-[43.2px] h-[43.2px] items-center justify-center gap-[7.2px] relative bg-collection-1-button rounded-[8.1px] aspect-[1]">
            <img
              className="w-[18px] h-[18px] relative aspect-[1]"
              alt=""
              src="/img/arrow-outward-11.png"
              aria-hidden="true"
            />
          </div>
        </a>
      </div>

      <img
        className="absolute w-[344px] h-[210px] top-[666px] left-[23px] object-cover"
        alt={sectionData.image.alt}
        src={sectionData.image.src}
        loading="lazy"
        decoding="async"
      />
    </section>
  );
};
