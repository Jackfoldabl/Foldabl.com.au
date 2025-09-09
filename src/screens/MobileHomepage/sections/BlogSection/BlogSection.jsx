import React from "react";

export const BlogSection = () => {
  const features = [
    {
      icon: "/img/security.svg",
      iconAlt: "Security",
      iconWidth: "w-6",
      iconHeight: "h-[29.7px]",
      iconAspect: "aspect-[0.81]",
      title: "30+ YEARS",
      description: "Proven building expertise with Chris & Dach Constructions",
    },
    {
      icon: "/img/assured-workload.svg",
      iconAlt: "Assured workload",
      iconWidth: "w-[33px]",
      iconHeight: "h-[34.06px]",
      iconAspect: "aspect-[0.97]",
      title: "100% APPROVAL",
      description:
        "Guaranteed council approval with 5 homes delivered seamlessly.",
    },
    {
      icon: "/img/bolt.svg",
      iconAlt: "Bolt",
      iconWidth: "w-[21.49px]",
      iconHeight: "h-[31.42px]",
      iconAspect: "aspect-[0.68]",
      title: "8 WEEK DELIVERY",
      description:
        "Enjoy peace of mind with our 8-Week Delivery Guarantee, delivered Australia-wide.",
    },
    {
      icon: "/img/verified.svg",
      iconAlt: "Verified",
      iconWidth: "w-[32.23px]",
      iconHeight: "h-[30.83px]",
      iconAspect: "aspect-[1.05]",
      title: "LICENSED BUILDERS",
      description:
        "Professional installation, carried out by fully licensed and qualified builders you can trust",
    },
    {
      icon: "/img/widgets.svg",
      iconAlt: "Widgets",
      iconWidth: "w-[28.44px]",
      iconHeight: "h-[28.44px]",
      iconAspect: "aspect-[1]",
      title: "ALL-IN-ONE SERVICE",
      description:
        "A complete service package—from council approval to handing you the keys.",
    },
    {
      icon: "/img/headset-mic.svg",
      iconAlt: "Headset mic",
      iconWidth: "w-[27px]",
      iconHeight: "h-[31.52px]",
      iconAspect: "aspect-[0.86]",
      title: "GUIDANCE",
      description:
        "Flexible financing options with full support from our sales team",
    },
  ];

  return (
    <section className="absolute w-[390px] h-[1896px] top-[4942px] left-0 bg-white" id="blog">
      <header className="flex flex-col w-[342px] items-start gap-[7px] absolute top-20 left-6">
        <div className="inline-flex items-center justify-center gap-[5.6px] relative flex-[0_0_auto]">
          <div className="relative w-[7px] h-[7px] bg-[color:var(--collection-1-APRICOT-TAN)] rounded-[3.5px] aspect-[1]" />

          <div className="w-fit mt-[-0.70px] font-medium text-xs tracking-[-0.36px] leading-[18px] whitespace-nowrap relative [font-family:'Poppins',Helvetica] text-collection-1-dark">
            8 WEEK DELIVERY
          </div>
        </div>

        <h1 className="relative self-stretch [font-family:'Poppins',Helvetica] font-medium text-collection-1-dark text-[40px] tracking-[-2.00px] leading-[44.0px]">
          HOW WE MAKE HOME OWNERSHIP POSSIBLE
        </h1>
      </header>

      <p className="absolute w-[342px] top-[243px] left-6 [font-family:'Poppins',Helvetica] font-normal text-collection-1-dark text-base tracking-[-0.48px] leading-6">
        Our team is here to answer your questions, explore your options, and
        guide you through the process—no cost, no obligation.
      </p>

      <div className="flex w-[342px] items-center justify-between pl-[19.8px] pr-[5.4px] py-[5.4px] absolute top-[332px] left-6 bg-collection-1-dark rounded-[14.4px]">
        <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-collection-1-light text-[14.4px] tracking-[-0.86px] leading-[21.6px] whitespace-nowrap">
            CALL US:
          </div>

          <a
            href="tel:+61480758298"
            className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-collection-1-light text-[14.4px] tracking-[-0.86px] leading-[21.6px] whitespace-nowrap hover:underline"
          >
            0480 758 298
          </a>
        </div>

        <button
          className="flex w-[43.2px] h-[43.2px] items-center justify-center gap-[7.2px] relative bg-collection-1-button rounded-[8.1px] aspect-[1] hover:opacity-90 transition-opacity"
          aria-label="Call us at 0480 758 298"
        >
          <img
            className="relative w-[18px] h-[18px] aspect-[1]"
            alt=""
            src="/img/phone-enabled.png"
          />
        </button>
      </div>

      <div className="flex flex-col w-[342px] items-start absolute top-[418px] left-6 rounded-2xl border border-solid border-[#5f6b7b4c]">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col items-start gap-12 px-6 py-8 relative self-stretch w-full flex-[0_0_auto] ${
              index < features.length - 1
                ? "border-b [border-bottom-style:solid] border-[#5f6b7b4c]"
                : ""
            }`}
          >
            <img
              className={`relative ${feature.iconWidth} ${feature.iconHeight} ${feature.iconAspect}`}
              alt=""
              src={feature.icon}
            />

            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-collection-1-dark text-xl tracking-[-0.80px] leading-[22.0px]">
                {feature.title}
              </h3>

              <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-collection-1-dark text-base tracking-[-0.48px] leading-6">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
