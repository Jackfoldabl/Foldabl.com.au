import React from "react";

export const ServicesSection = () => {
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

  return (
    <section className="absolute w-[390px] h-[932px] top-[7737px] left-0 bg-white" id="services">
      <header className="flex flex-col w-[342px] items-start gap-[7px] absolute top-20 left-6">
        <div className="inline-flex items-center justify-center gap-[5.6px] relative flex-[0_0_auto]">
          <div className="relative w-[7px] h-[7px] bg-[color:var(--collection-1-APRICOT-TAN)] rounded-[3.5px] aspect-[1]" />
          <div className="relative w-fit mt-[-0.70px] [font-family:'Poppins',Helvetica] font-medium text-collection-1-dark text-xs tracking-[-0.36px] leading-[18px] whitespace-nowrap">
            ENDLESS POSSIBILITIES
          </div>
        </div>
        <h2 className="relative self-stretch [font-family:'Poppins',Helvetica] font-medium text-collection-1-dark text-[40px] tracking-[-2.00px] leading-[44.0px]">
          WHAT WILL YOUR FOLDABL HOME BECOME?
        </h2>
      </header>

      <p className="absolute w-[342px] top-[243px] left-6 [font-family:'Poppins',Helvetica] font-normal text-collection-1-dark text-base tracking-[-0.48px] leading-6">
        from a cozy family retreat to a modern workspace or rental investment,
        your foldabl home adapts to your lifestyle and future goals.
      </p>

      <div className="flex w-[342px] items-center gap-4 absolute top-[364px] left-6 overflow-x-auto">
        {useCases.map((useCase, index) => (
          <article
            key={useCase.id}
            className={`w-[342px] h-[416px] items-center justify-between rounded-2xl border border-solid flex flex-col p-6 relative border-[#5f6b7b4c] ${
              index > 0 ? `mr-[-${358 * index}.00px]` : ""
            }`}
          >
            <div className="relative self-stretch mt-[-1.00px] opacity-40 [font-family:'Poppins',Helvetica] font-normal text-collection-1-dark text-lg tracking-[-0.72px] leading-[19.8px]">
              {useCase.caseNumber}
            </div>

            <div className="flex flex-col items-start justify-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-collection-1-dark text-base tracking-[-0.48px] leading-6 whitespace-nowrap">
                  {useCase.category}
                </div>
                <h3 className="relative self-stretch [font-family:'Poppins',Helvetica] font-medium text-collection-1-dark text-xl tracking-[-0.80px] leading-[22.0px]">
                  {useCase.title}
                </h3>
              </div>

              <button
                className={`${
                  index === 0
                    ? "flex items-center justify-between pl-[22px] pr-1.5 py-1.5 relative self-stretch w-full flex-[0_0_auto] rounded-2xl border border-solid border-collection-1-dusk-steel"
                    : "inline-flex items-center justify-center gap-8 pl-[22px] pr-1.5 py-1.5 relative flex-[0_0_auto] rounded-2xl border border-solid border-collection-1-dusk-steel"
                }`}
              >
                <span
                  className={`text-collection-1-dark relative w-fit [font-family:'Poppins',Helvetica] font-medium ${
                    index === 0
                      ? "text-[14.4px] tracking-[-0.86px] leading-[21.6px]"
                      : "text-base tracking-[-0.96px] leading-6"
                  } whitespace-nowrap`}
                >
                  LEARN MORE
                </span>
                <div
                  className={`flex ${
                    index === 0
                      ? "w-[43.2px] h-[43.2px] gap-[7.2px]"
                      : "w-12 h-12 gap-2"
                  } items-center justify-center relative bg-collection-1-dark rounded-[9px] aspect-[1]`}
                >
                  <img
                    className={`${
                      index === 0
                        ? "w-[18px] h-[18px]"
                        : "w-5 h-5 mt-[-8425.00px]"
                    } relative aspect-[1] ${
                      index === 1
                        ? "ml-[-4988.00px]"
                        : index === 2
                          ? "ml-[-5346.00px]"
                          : index === 3
                            ? "ml-[-5704.00px]"
                            : ""
                    }`}
                    alt="Arrow outward"
                    src={
                      index === 0
                        ? "/img/arrow-outward-7.png"
                        : "/img/arrow-outward-24.png"
                    }
                  />
                </div>
              </button>
            </div>
          </article>
        ))}
      </div>

      <img
        className="absolute w-[342px] h-12 top-[804px] left-6"
        alt="Frame"
        src="/img/frame-182-1.svg"
      />
    </section>
  );
};
