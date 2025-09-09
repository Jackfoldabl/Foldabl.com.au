import React from "react";

export const FeaturesSection = () => {
  const homeData = [
    {
      id: 1,
      image: "/img/rectangle-5.png",
      title: "FOLDÄBL STUDIO",
      size: "27 sqm Studio",
      price: "From $60k",
      lineImage: "/img/line-2.svg",
      arrowImage: "/img/arrow-outward-7.png",
    },
    {
      id: 2,
      image: "/img/rectangle-5-1.png",
      title: "FOLDÄBL STUDIO",
      size: "27 sqm Studio",
      price: "From $60k",
      lineImage: "/img/image.svg",
      arrowImage: "/img/arrow-outward-24.png",
    },
  ];

  return (
    <section id="homes" className="absolute w-[390px] h-[1007px] top-[2129px] left-0 bg-[#f4f5f6] rounded-[40px_0px_0px_0px] overflow-hidden">
      <header className="flex flex-col w-[342px] items-start gap-[7px] absolute top-20 left-6">
        <div className="inline-flex items-center justify-center gap-[5.6px] relative flex-[0_0_auto]">
          <div className="relative w-[7px] h-[7px] bg-[color:var(--collection-1-APRICOT-TAN)] rounded-[3.5px] aspect-[1]" />

          <div className="relative w-fit mt-[-0.70px] [font-family:'Poppins',Helvetica] font-medium text-collection-1-dark text-xs tracking-[-0.36px] leading-[18px] whitespace-nowrap">
            DESIGNED FOR EVERY LIFESTYLE
          </div>
        </div>

        <h2 className="relative self-stretch [font-family:'Poppins',Helvetica] font-medium text-collection-1-dark text-[40px] tracking-[-2.00px] leading-[44.0px]">
          OUR MODULAR HOME RANGE
        </h2>
      </header>

      <p className="absolute w-[342px] top-[200px] left-6 [font-family:'Poppins',Helvetica] font-normal text-collection-1-dark text-base tracking-[-0.48px] leading-6">
        Explore our collection of modern, functional modular homes built to fit
        your needs—whether you&apos;re starting small, upgrading, or creating
        your forever home.
      </p>

      {homeData.map((home, index) => (
        <article
          key={home.id}
          className={`flex flex-col w-[342px] h-[519px] items-start gap-6 absolute top-[321px] ${index === 0 ? "left-6" : "left-[382px]"}`}
        >
          <img
            className="relative flex-1 self-stretch w-full grow mt-[-1.00px] ml-[-1.00px] mr-[-1.00px] object-cover"
            alt={`${home.title} home design`}
            src={home.image}
          />

          <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col w-[322px] items-start gap-1 relative flex-[0_0_auto]">
              <h3 className="mt-[-1.00px] font-medium text-collection-1-dark text-xl tracking-[-1.00px] leading-[26.0px] relative self-stretch [font-family:'Poppins',Helvetica]">
                {home.title}
              </h3>

              <div className="flex items-center gap-[13px] relative self-stretch w-full flex-[0_0_auto] opacity-60">
                <span
                  className={`${index === 0 ? "relative" : ""} w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-collection-1-dark text-sm tracking-[-0.42px] leading-[21px] whitespace-nowrap`}
                >
                  {home.size}
                </span>

                <img
                  className={`relative ${index === 0 ? "w-[1.5px] h-3.5" : "w-3.5 h-px mt-[-2873.30px] ml-[-4728.00px]"}`}
                  alt="Separator line"
                  src={home.lineImage}
                />

                <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-collection-1-dark text-sm tracking-[-0.42px] leading-[21px] whitespace-nowrap">
                  {home.price}
                </span>
              </div>
            </div>

            <button className="flex items-center justify-between pl-[22px] pr-1.5 py-1.5 relative self-stretch w-full flex-[0_0_auto] rounded-2xl border border-solid border-collection-1-dusk-steel hover:bg-collection-1-light-medium transition-colors duration-200">
              <span className="relative w-fit [font-family:'Poppins',Helvetica] font-medium text-collection-1-dark text-[14.4px] tracking-[-0.86px] leading-[21.6px] whitespace-nowrap">
                SEE OUR HOMES
              </span>

              <div className="flex w-[43.2px] h-[43.2px] items-center justify-center gap-[7.2px] relative bg-collection-1-dark rounded-[9px] aspect-[1]">
                <img
                  className={`w-[18px] h-[18px] relative aspect-[1] ${index === 1 ? "mt-[-2907.20px] ml-[-5115.20px]" : ""}`}
                  alt="Arrow pointing outward"
                  src={home.arrowImage}
                />
              </div>
            </button>
          </div>
        </article>
      ))}

      <img
        className="absolute w-[342px] h-12 top-[879px] left-6"
        alt="Navigation frame"
        src="/img/frame-182.svg"
      />
    </section>
  );
};
