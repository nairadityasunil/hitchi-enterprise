import { TrendingUp, Award, Users, Building2 } from "lucide-react";
import { Reveal } from "../animations/Reveal";

const stats = [
  { icon: Building2, number: "500+", label: "Projects Completed" },
  { icon: Users, number: "1000+", label: "Happy Clients" },
  { icon: Award, number: "20+", label: "Years Experience" },
  { icon: TrendingUp, number: "95%", label: "Client Satisfaction" },
];

export function StatsSection() {
  return (
    <section className="relative py-28 px-4 bg-gradient-to-r from-[#4A2C2A] via-[#3d2523] to-[#4A2C2A] text-white overflow-hidden">

      {/* ================= BACKGROUND EFFECTS ================= */}

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.12]
        bg-[linear-gradient(rgba(201,165,90,0.18)_1px,transparent_1px),
            linear-gradient(to_right,rgba(201,165,90,0.18)_1px,transparent_1px)]
        bg-[size:5rem_5rem]"
      />

      {/* Radial glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#C9A55A]/20 rounded-full blur-[180px]" />
      <div className="absolute -bottom-32 right-0 w-[700px] h-[700px] bg-[#D4AF78]/15 rounded-full blur-[160px]" />

      {/* Vertical lines */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
        <div className="absolute left-1/4 h-full w-px bg-gradient-to-b from-transparent via-[#C9A55A] to-transparent" />
        <div className="absolute left-1/2 h-full w-px bg-gradient-to-b from-transparent via-[#D4AF78] to-transparent" />
        <div className="absolute left-3/4 h-full w-px bg-gradient-to-b from-transparent via-[#C9A55A] to-transparent" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute top-20 left-32 w-2 h-2 bg-[#C9A55A] rounded-full animate-float-slow opacity-60" />
        <span className="absolute top-48 right-40 w-2.5 h-2.5 bg-[#D4AF78] rounded-full animate-float-slow opacity-50 delay-200" />
        <span className="absolute bottom-40 left-1/3 w-2 h-2 bg-[#C9A55A] rounded-full animate-float-slow opacity-40 delay-300" />
        <span className="absolute bottom-24 right-1/4 w-2 h-2 bg-[#D4AF78] rounded-full animate-float-slow opacity-40 delay-500" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {stats.map((stat, index) => (
            <Reveal
              key={index}
              direction="up"
              delay={index * 0.2}
            >
              <div className="group text-center transition-all duration-500 hover:-translate-y-2">

                {/* Icon */}
                <div className="relative inline-flex items-center justify-center mb-8">
                  <div className="absolute w-28 h-28 rounded-full border border-[#C9A55A]/40 animate-spin-slow" />
                  <div className="absolute w-24 h-24 rounded-full border border-[#D4AF78]/50" />

                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#C9A55A]/30 to-[#D4AF78]/30 
                                  flex items-center justify-center backdrop-blur-md shadow-xl">
                    <stat.icon
                      size={42}
                      strokeWidth={1.5}
                      className="text-[#C9A55A]"
                    />
                  </div>
                </div>

                {/* Number */}
                <h3
                  className="text-4xl md:text-5xl font-semibold mb-2
                  bg-gradient-to-r from-[#C9A55A] via-[#D4AF78] to-[#C9A55A]
                  bg-clip-text text-transparent"
                  style={{ fontFamily: "serif" }}
                >
                  {stat.number}
                </h3>

                {/* Label */}
                <p className="text-white/85 text-lg tracking-wide">
                  {stat.label}
                </p>

                {/* Divider */}
                <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#C9A55A] to-transparent mx-auto mt-4 opacity-80" />
              </div>
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  );
}
