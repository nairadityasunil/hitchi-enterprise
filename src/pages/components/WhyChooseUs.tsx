import { Shield, FileCheck, Users, Award } from 'lucide-react';
import { RoyalDividerLarge } from './RoyalDivider';
import { Reveal } from '../animations/Reveal';

const reasons = [
  {
    icon: Shield,
    title: 'Transparency',
    description: 'Clear communication and honest dealings at every step',
  },
  {
    icon: FileCheck,
    title: 'Legal Compliance',
    description: 'Complete documentation and adherence to all regulations',
  },
  {
    icon: Users,
    title: 'End-to-End Solutions',
    description: 'Comprehensive support from planning to completion',
  },
  {
    icon: Award,
    title: 'Market Expertise',
    description: 'Deep knowledge of local markets and industry trends',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <Reveal direction='up' delay={0.1}>
            <RoyalDividerLarge className="mb-10" />
          </Reveal>
          <Reveal direction='up' delay={0.1}>
            <h2 className="text-4xl md:text-5xl text-[#4A2C2A] mb-6 tracking-wide">
              Why Choose Us
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF78] to-transparent mx-auto mb-6"></div>
          </Reveal>
          <Reveal direction='up' delay={0.1}>
            <p className="text-gray-600 text-xl">
              Built on trust, driven by results
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {reasons.map((reason, index) => (
            <Reveal direction='up' delay={index* 0.2}>
              <div key={index} className="text-center group">
                <div className="relative inline-block mb-6">
                  {/* Outer ring */}
                  <div className="absolute inset-0 w-24 h-24 rounded-full border-2 border-[#C9A55A]/30 group-hover:border-[#C9A55A] transition-all duration-300 group-hover:scale-110"></div>
                  {/* Inner circle */}
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[#C9A55A]/10 to-[#D4AF78]/10 flex items-center justify-center group-hover:from-[#C9A55A]/20 group-hover:to-[#D4AF78]/20 transition-all duration-300">
                    <reason.icon size={48} strokeWidth={1.5} className="text-[#C9A55A] group-hover:text-[#D4AF78] transition-colors duration-300" />
                  </div>
                </div>

                <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#C9A55A] to-transparent mx-auto mb-4"></div>

                <h3 className="text-2xl text-[#4A2C2A] mb-3 tracking-wide">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}