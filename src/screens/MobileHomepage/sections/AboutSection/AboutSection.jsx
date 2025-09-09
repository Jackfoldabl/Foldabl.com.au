import React, { useState } from "react";

export const AboutSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Home", href: "#home" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const ctaButtons = [
    {
      id: 1,
      text: "Get Free Consultation",
      variant: "primary",
      icon: "/img/arrow-outward-11.png",
      href: "/#contact",
    },
    {
      id: 2,
      text: "See Our Homes",
      variant: "secondary",
      icon: "/img/arrow-outward-12.png",
      href: "/homes",
    },
  ];

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleButtonClick = () => {};

  return (
    <section
      className="absolute w-[390px] h-[844px] top-0 left-0 bg-white rounded-[0px_0px_40px_0px] overflow-hidden"
      id="home"
      role="banner"
      aria-label="About Emove modular homes"
    >
      <div className="relative h-[844px]">
        <picture className="absolute inset-0 -z-10 block">
          <source type="image/avif" srcSet="/img/mueen-agherdien-t1u-dvo7nbo-unsplash-1.avif" />
          <source type="image/webp" srcSet="/img/mueen-agherdien-t1u-dvo7nbo-unsplash-1.webp" />
          <img
            src="/img/mueen-agherdien-t1u-dvo7nbo-unsplash-1.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
            fetchpriority="high"
            width="390"
            height="844"
          />
        </picture>
        <header className="flex w-[390px] h-[77px] items-center justify-between px-6 py-0 absolute top-0 left-0">
          <img
            className="relative w-[101px] h-10 aspect-[2.53]"
            alt="Emove company logo"
            src="/img/emove.png"
            role="img"
          />

          <button
            className="flex flex-col w-10 items-end justify-center gap-1.5 relative"
            onClick={handleMenuToggle}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="navigation-menu"
            type="button"
          >
            <div className="relative self-stretch w-full h-[3px] bg-collection-1-light rounded-xl" />
            <div className="relative w-8 h-[3px] bg-collection-1-light rounded-xl" />
          </button>

          {isMenuOpen && (
            <nav
              id="navigation-menu"
              className="absolute top-full left-0 w-full bg-collection-1-dark shadow-lg z-10"
              role="navigation"
              aria-label="Main navigation"
            >
              <ul className="flex flex-col p-4">
                {navigationItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="block py-2 text-collection-1-light hover:text-collection-1-button transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2 border-t border-white/20 mt-2">
                  <a href="tel:+61480758298" className="block py-2 text-collection-1-light hover:text-collection-1-button transition-colors">
                    Call 0480 758 298
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </header>

        <main className="relative">
          <h1 className="absolute w-[342px] top-[407px] left-6 [font-family:'Poppins',Helvetica] font-medium text-collection-1-light text-[42px] tracking-[-2.10px] leading-[46.2px]">
            REVOLUTIONARY MODULAR HOMES AUSTRALIA-WIDE
          </h1>

          <p className="absolute w-[342px] top-[561px] left-6 [font-family:'Poppins',Helvetica] font-normal text-collection-1-light text-lg tracking-[-0.54px] leading-[27px]">
            Professional builders and complete installation service. What costs
            $250k to build, we deliver for $60k.
          </p>

          <div className="flex flex-col w-[342px] items-start gap-2 absolute top-[659px] left-6">
            {ctaButtons.map((button) => (
              <a
                key={button.id}
                href={button.href}
                className={`flex items-center justify-between pl-[19.8px] pr-[5.4px] py-[5.4px] relative self-stretch w-full flex-[0_0_auto] transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-collection-1-button focus:ring-offset-2 ${
                  button.variant === "primary"
                    ? "bg-collection-1-light rounded-[14.4px]"
                    : "rounded-[14.4px] border-[0.9px] border-solid border-[#ffffff66] hover:border-collection-1-light"
                }`}
                onClick={() => handleButtonClick(button.onClick)}
                aria-label={button.text}
              >
                <span
                  className={`relative w-fit [font-family:'Poppins',Helvetica] font-medium text-[14.4px] tracking-[-0.86px] leading-[21.6px] whitespace-nowrap ${
                    button.variant === "primary"
                      ? "text-collection-1-dark"
                      : "text-collection-1-light"
                  }`}
                >
                  {button.text}
                </span>

                <div
                  className={`flex w-[43.2px] h-[43.2px] items-center justify-center gap-[7.2px] relative rounded-[8.1px] aspect-[1] ${
                    button.variant === "primary"
                      ? "bg-collection-1-button rounded-[8.1px]"
                      : "bg-collection-1-light rounded-[9px]"
                  }`}
                >
                  <img
                    className="relative w-[18px] h-[18px] aspect-[1]"
                    alt=""
                    src={button.icon}
                    role="presentation"
                  />
                </div>
              </a>
            ))}
          </div>

          <div className="inline-flex items-center justify-center gap-[5.6px] absolute top-[803px] left-6">
            <span className="relative w-fit mt-[-0.70px] [font-family:'Poppins',Helvetica] font-normal text-collection-1-light text-[11.2px] tracking-[-0.34px] leading-[16.8px] whitespace-nowrap">
              Scroll to explore
            </span>

            <img
              className="relative w-[16.8px] h-[16.8px] aspect-[1]"
              alt="Scroll down indicator"
              src="/img/arrow-circle-down.png"
              role="img"
            />
          </div>
        </main>
      </div>
    </section>
  );
};
