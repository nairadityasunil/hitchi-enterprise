import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronDown } from "lucide-react";
import heroImg from "../../assets/heroImg.jpg";
import htichiLogo from "../../assets/hitchi_hero_logo.png";
import { Reveal } from "../animations/Reveal";

export function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ================= Background Image ================= */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={heroImg}
          alt="Luxury modern property"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/95" />

        {/* Animated overlay dots */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-2 h-2 bg-[#C9A55A] rounded-full animate-pulse" />
          <div className="absolute top-40 right-40 w-3 h-3 bg-[#D4AF78] rounded-full animate-pulse delay-100" />
          <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-[#C9A55A] rounded-full animate-pulse delay-200" />
        </div>
      </div>

      {/* ================= Content ================= */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-6xl mx-auto">
                {/* ---------- Company Logo ---------- */}
        <Reveal direction="up" delay={0.15}>
          <div className="mb-8 sm:mb-10 md:mb-12 pt-4 sm:pt-6 md:pt-8 flex justify-center">
            <img
              src={htichiLogo}
              alt="Hitchi Enterprise Logo"
              className="h-24 sm:h-32 md:h-40 lg:h-48 w-auto max-w-[90vw] drop-shadow-2xl object-contain"
            />
          </div>
        </Reveal>

        {/* ---------- Top Ornament ---------- */}
        <Reveal direction="up" delay={0.1}>
          <div className="mb-8">
            <svg
              width="260"
              height="40"
              viewBox="0 0 260 40"
              className="mx-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="0" y1="20" x2="80" y2="20" stroke="#C9A55A" strokeWidth="1.5" opacity="0.6" />
              <circle cx="92" cy="20" r="4" fill="#C9A55A" />
              <rect x="104" y="14" width="12" height="12" transform="rotate(45 110 20)" fill="#D4AF78" />
              <circle cx="130" cy="20" r="9" fill="none" stroke="#C9A55A" strokeWidth="1.5" />
              <circle cx="130" cy="20" r="3" fill="#D4AF78" />
              <rect x="144" y="14" width="12" height="12" transform="rotate(45 150 20)" fill="#D4AF78" />
              <circle cx="168" cy="20" r="4" fill="#C9A55A" />
              <line x1="180" y1="20" x2="260" y2="20" stroke="#C9A55A" strokeWidth="1.5" opacity="0.6" />
            </svg>
          </div>
        </Reveal>


        {/* ---------- Heading ---------- */}
        <Reveal direction="up" delay={0.2}>
          <h1
            className="text-4xl md:text-6xl text-white mb-8 tracking-wider"
            style={{ fontFamily: "serif" }}
          >
            Build. Invest. Grow.
          </h1>
        </Reveal>

        {/* Divider */}
        <div className="w-40 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF78] to-transparent mb-8" />

        {/* ---------- Services Line (PERFECTLY CENTERED) ---------- */}
        <div
          className="flex flex-wrap justify-center items-center
                     text-xl md:text-2xl text-white/95 mb-12
                     tracking-widest text-center"
          style={{ fontFamily: "serif" }}
        >
          <Reveal direction="up" delay={0.3}>
            <span className="px-3 whitespace-nowrap">Property Development</span>
          </Reveal>

          <span className="text-[#D4AF78]">·</span>

          <Reveal direction="up" delay={0.4}>
            <span className="px-3 whitespace-nowrap">Land Acquisition</span>
          </Reveal>

          <span className="text-[#D4AF78]">·</span>

          <Reveal direction="up" delay={0.5}>
            <span className="px-3 whitespace-nowrap">Construction</span>
          </Reveal>
        </div>

        {/* ---------- CTA Button ---------- */}
        <Reveal direction="up" delay={0.6}>
          <a 
            href="#contact" 
            className="group inline-block px-16 py-5 bg-gradient-to-r from-[#C9A55A] via-[#D4AF78] to-[#C9A55A]
                             bg-size-200 bg-pos-0 hover:bg-pos-100
                             text-white text-lg tracking-widest
                             transition-all duration-700
                             shadow-2xl hover:shadow-[#C9A55A]/60 hover:scale-105
                             relative overflow-hidden">
            <span className="relative z-10">Get in Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                            translate-x-[-100%] group-hover:translate-x-[100%]
                            transition-transform duration-1000" />
          </a>
        </Reveal>

        {/* ---------- Bottom Ornament ---------- */}
        <Reveal direction="up" delay={0.1}>
          <div className="mt-12">
            <svg width="150" height="40" viewBox="0 0 150 40" className="mx-auto" fill="none">
              <circle cx="60" cy="20" r="3" fill="#C9A55A" />
              <path d="M68 20 L75 13 L82 20 L75 27 Z" fill="#D4AF78" />
              <circle cx="90" cy="20" r="3" fill="#C9A55A" />
            </svg>
          </div>
        </Reveal>
      </div>

      {/* ================= Scroll Indicator ================= */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={40} className="text-[#C9A55A]" />
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9A55A] to-transparent" />
    </section>
  );
}
