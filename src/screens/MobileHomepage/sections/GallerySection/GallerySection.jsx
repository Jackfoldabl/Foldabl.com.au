import React from "react";

export const GallerySection = () => {
  const galleryItems = [
    {
      id: "01",
      title: "COUNCIL APPROVAL",
      description:
        "We manage all permits and planning, with a full refund if not approved.",
      backgroundImage: "/img/frame-5-2.png",
      topPosition: "262px",
    },
    {
      id: "02",
      title: "PROFESSIONAL INSTALLATION",
      description:
        "Completed by Dach Constructions (NSW) or licensed local builders.",
      backgroundImage: "/img/frame-5-3.png",
      topPosition: "745px",
    },
  ];

  return (
    <section className="absolute w-[390px] h-[1285px] top-[844px] left-0 bg-white" id="installation">
      <header className="top-[81px] left-6 flex flex-col w-[342px] items-start gap-[7px] absolute">
        <div className="inline-flex items-center justify-center gap-[5.6px] relative flex-[0_0_auto]">
          <div className="relative w-[7px] h-[7px] bg-[color:var(--collection-1-APRICOT-TAN)] rounded-[3.5px] aspect-[1]" />

          <div className="relative w-fit mt-[-0.70px] [font-family:'Poppins',Helvetica] font-medium text-collection-1-dark text-xs tracking-[-0.36px] leading-[18px] whitespace-nowrap">
            COMPLETE DONE-FOR-YOU SERVICE
          </div>
        </div>

        <h2 className="relative self-stretch [font-family:'Poppins',Helvetica] font-medium text-collection-1-dark text-[40px] tracking-[-2.00px] leading-[44.0px]">
          PROFESSIONAL BUILDING SOLUTIONS
        </h2>
      </header>

      {galleryItems.map((item, index) => (
        <article
          key={item.id}
          className={`absolute flex flex-col w-[342px] h-[459px] items-start justify-between left-6 rounded-2xl overflow-hidden`}
          style={{ top: item.topPosition }}
        >
          <picture className="absolute inset-0 -z-10 block">
            <source type="image/avif" srcSet={item.backgroundImage.replace('.png', '.avif')} />
            <source type="image/webp" srcSet={item.backgroundImage.replace('.png', '.webp')} />
            <img
              src={item.backgroundImage}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              width="342"
              height="459"
            />
          </picture>
          <div className="flex items-center justify-center gap-2 p-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-collection-1-light text-2xl tracking-[-0.96px] leading-[26.4px]">
              {item.id}
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 p-6 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-[#ffffff4c]">
            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-collection-1-light text-2xl tracking-[-0.96px] leading-[26.4px]">
                {item.title}
              </h3>

              <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-collection-1-light text-base tracking-[-0.48px] leading-6">
                {item.description}
              </p>
            </div>

            <a
              href={index === 0 ? "/council-approval" : "/installation"}
              className="flex items-center justify-between pl-[19.8px] pr-[5.4px] py-[5.4px] relative self-stretch w-full flex-[0_0_auto] rounded-[14.4px] border-[0.9px] border-solid border-[#ffffff66] hover:bg-[#ffffff1a] transition-colors duration-200"
              aria-label={`Learn more about ${item.title}`}
            >
              <span className="text-collection-1-light relative w-fit [font-family:'Poppins',Helvetica] font-medium text-[14.4px] tracking-[-0.86px] leading-[21.6px] whitespace-nowrap">
                LEARN MORE
              </span>

              <div className="flex w-[43.2px] h-[43.2px] items-center justify-center gap-[7.2px] relative bg-collection-1-light rounded-[9px] aspect-[1]">
                <img
                  className="w-[18px] h-[18px] relative aspect-[1]"
                  alt=""
                  src="/img/arrow-outward-12.png"
                />
              </div>
            </a>
          </div>
        </article>
      ))}
    </section>
  );
};
