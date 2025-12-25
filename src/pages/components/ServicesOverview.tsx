import { Hammer, TreePine, Home, TrendingUp } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Reveal } from "../animations/Reveal";
import { RoyalDividerLarge, RoyalCornerOrnament } from "./RoyalDivider";

const services = [
  {
    icon: Hammer,
    title: "Construction",
    description:
      "End-to-end residential, commercial, and infrastructure development",
    href: "/construction",
  },
  {
    icon: TreePine,
    title: "Agriculture & Non-Agriculture Land",
    description:
      "Land acquisition, conversion, and investment opportunities",
    href: "/land-services",
  },
  {
    icon: Home,
    title: "Sale & Purchase",
    description:
      "Professional assistance for buying and selling properties",
    href: "/sale-purchase",
  },
  {
    icon: TrendingUp,
    title: "Consulting & Brokerage",
    description:
      "Market insights, feasibility studies, and investment guidance",
    href: "/consulting",
  },
];

export function ServicesOverview() {
  return (
    <section
      id="services"
      className="py-24 sm:py-28 px-4 bg-gradient-to-b from-white via-gray-50 to-white relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-20 sm:mb-24">
          <Reveal direction="up" delay={0.1}>
            <RoyalDividerLarge className="mb-10 sm:mb-12" />
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl text-[#4A2C2A] mb-6 sm:mb-8 tracking-wide"
              style={{ fontFamily: "serif" }}
            >
              Our Services
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <div className="w-24 sm:w-32 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF78] to-transparent mx-auto mb-6 sm:mb-8" />
          </Reveal>

          <Reveal direction="up" delay={0.25}>
            <p className="text-gray-600 text-lg sm:text-xl md:text-2xl tracking-wide">
              Comprehensive real estate solutions tailored to your needs
            </p>
          </Reveal>
        </div>

        {/* CARDS */}
        <div
          className="
            grid
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
            gap-8 sm:gap-10 lg:gap-12
            auto-rows-fr
          "
        >
          {services.map((service, index) => (
            <Reveal
              key={index}
              direction="right"
              delay={index * 0.12}
              className="h-full"
            >
              <NavLink
                to={service.href}
                className="
                  group
                  relative bg-white
                  border border-[#C9A55A]/20
                  p-8 sm:p-9 lg:p-10
                  flex flex-col
                  h-full
                  cursor-pointer
                  transition-all duration-500
                  shadow-lg
                  hover:shadow-2xl
                  hover:border-[#C9A55A]
                  transform hover:-translate-y-3
                "
              >
                {/* Decorative ornaments */}
                <RoyalCornerOrnament
                  position="top-left"
                  className="absolute top-0 left-0 opacity-30 pointer-events-none"
                />
                <RoyalCornerOrnament
                  position="bottom-right"
                  className="absolute bottom-0 right-0 opacity-30 pointer-events-none"
                />

                {/* Icon */}
                <div className="mb-8 sm:mb-10 flex justify-center pointer-events-none">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#C9A55A]/10 to-[#D4AF78]/10 flex items-center justify-center shadow transition-transform duration-500 group-hover:scale-110">
                    <service.icon size={40} strokeWidth={1.5} className="text-[#C9A55A]" />
                  </div>
                </div>

                {/* Divider */}
                <div className="w-16 h-[2px] bg-gradient-to-r from-[#C9A55A] to-transparent mb-6" />

                {/* Title */}
                <h3
                  className="text-xl sm:text-2xl text-[#4A2C2A] mb-4 tracking-wide"
                  style={{ fontFamily: "serif" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  {service.description}
                </p>

                {/* Spacer */}
                <div className="flex-grow" />

                {/* Learn more */}
                <div className="mt-6 flex items-center gap-2 text-[#C9A55A] text-sm tracking-wide">
                  <span>Learn More</span>
                  <div className="w-8 h-[2px] bg-[#C9A55A]" />
                </div>
              </NavLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
