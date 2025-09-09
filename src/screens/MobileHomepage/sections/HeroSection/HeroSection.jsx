import React from "react";

export const HeroSection = () => {
  const processSteps = [
    {
      stepNumber: "STEP 1:",
      title: "CONSULTATION",
      description:
        "Start with a free initial meeting where we'll help you choose the model that best fits your needs.",
    },
    {
      stepNumber: "STEP 2:",
      title: "COUNCIL APPROVAL",
      description:
        "A $2,000 deposit gets the process started, with a full refund guaranteed if approval isn't granted.",
    },
    {
      stepNumber: "STEP 3:",
      title: "MANUFACTURING",
      description:
        "Your project enters an 8-week production phase, with a 50% payment required upfront to begin the process",
    },
    {
      stepNumber: "STEP 4:",
      title: "INSTALLATION",
      description:
        "Our team at Dach ensures a seamless professional setup, with the remaining 50% balance collected at this stage",
    },
  ];

  return (
    <section className="absolute w-[390px] h-[1806px] top-[3136px] left-0 bg-white" id="processes">
      <header className="top-[333px] left-6 flex flex-col w-[342px] items-start gap-[7px] absolute">
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

      <p className="absolute w-[342px] top-[496px] left-6 [font-family:'Poppins',Helvetica] font-normal text-collection-1-dark text-base tracking-[-0.48px] leading-6">
        With a streamlined process from design to installation, we make it
        possible to move into your new home in as little as eight weeks—bringing
        you closer to ownership faster and with less stress.
      </p>

      <div className="flex flex-col w-[390px] items-start absolute top-[649px] left-0">
        {processSteps.map((step, index) => (
          <article
            key={index}
            className="items-start justify-center gap-[72px] self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] flex flex-col p-6 relative border-[#5f6b7b4c]"
          >
            <div className="relative self-stretch mt-[-1.00px] opacity-50 [font-family:'Poppins',Helvetica] font-normal text-collection-1-dark text-lg tracking-[-0.72px] leading-[19.8px]">
              {step.stepNumber}
            </div>
            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-collection-1-dark text-xl tracking-[-0.80px] leading-[22.0px]">
                {step.title}
              </h2>
              <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-collection-1-dark text-base tracking-[-0.48px] leading-6">
                {step.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <img
        className="absolute w-[340px] h-[227px] top-20 left-6 object-cover"
        alt="Dach Constructions installing modular home – NSW"
        src="/img/rectangle-6.png"
        loading="lazy"
        decoding="async"
      />

      <img
        className="absolute w-[342px] h-[157px] top-[1649px] left-6"
        alt="Modular home exterior – Foldabl"
        src="/img/rectangle-7.png"
        loading="lazy"
        decoding="async"
      />
    </section>
  );
};
