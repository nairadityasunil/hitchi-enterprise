import { Reveal } from '../animations/Reveal';
import { RoyalDividerLarge } from './RoyalDivider';
import { FileSearch, Users, Hammer, Key } from 'lucide-react';

const steps = [
  {
    icon: FileSearch,
    number: '01',
    title: 'Consultation',
    description:
      'We begin with understanding your needs, goals, and budget to create a tailored strategy.',
  },
  {
    icon: Users,
    number: '02',
    title: 'Planning',
    description:
      'Our team develops a comprehensive plan with detailed timelines and clear milestones.',
  },
  {
    icon: Hammer,
    number: '03',
    title: 'Execution',
    description:
      'We execute the project with precision, maintaining quality and adhering to schedules.',
  },
  {
    icon: Key,
    number: '04',
    title: 'Delivery',
    description:
      'Final handover with complete documentation and ongoing support for your peace of mind.',
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-28 px-4 bg-gradient-to-b from-[#FBF8F3] to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 border border-[#C9A55A] rounded-full" />
        <div className="absolute bottom-20 left-20 w-96 h-96 border border-[#D4AF78] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <Reveal direction="up" delay={0.1}>
            <RoyalDividerLarge className="mb-12" />
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <h2
              className="text-5xl md:text-6xl text-[#4A2C2A] mb-8 tracking-wide"
              style={{ fontFamily: 'serif' }}
            >
              Our Process
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <div className="w-32 h-[3px] rounded-full bg-gradient-to-r from-transparent via-[#D4AF78] to-transparent mx-auto mb-8" />
          </Reveal>

          <Reveal direction="up" delay={0.25}>
            <p className="text-gray-600 text-2xl tracking-wide">
              A proven methodology for exceptional results
            </p>
          </Reveal>
        </div>

        {/* Process cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8 items-stretch">
          {steps.map((step, index) => (
            <Reveal
              key={index}
              direction="right"          // ✅ LEFT → RIGHT
              delay={index * 0.12}     // ✅ stagger
            >
              <div className="relative group bg-white p-10 h-full flex flex-col border border-[#C9A55A]/20 shadow-lg hover:shadow-2xl hover:border-[#C9A55A] transition-all duration-500 transform hover:-translate-y-3">
                {/* Step number */}
                <div
                  className="
                    absolute -top-7 left-1/2 -translate-x-1/2
                    md:left-auto md:-translate-x-0 md:-right-6
                    z-20 w-12 h-12
                    bg-gradient-to-br from-[#C9A55A] to-[#D4AF78]
                    rounded-full flex items-center justify-center
                    text-white text-2xl
                    shadow-[0_12px_30px_rgba(0,0,0,0.25)]
                    ring-4 ring-white
                  "
                  style={{ fontFamily: 'serif' }}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#C9A55A]/10 to-[#D4AF78]/10 rounded-full flex items-center justify-center shadow group-hover:scale-110 transition-transform duration-500">
                    <step.icon size={40} strokeWidth={1.5} className="text-[#C9A55A]" />
                  </div>
                </div>

                <div className="w-16 h-[2px] bg-gradient-to-r from-[#C9A55A] to-transparent mb-4" />

                <h3
                  className="text-2xl text-[#4A2C2A] mb-4 tracking-wide"
                  style={{ fontFamily: 'serif' }}
                >
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                <button
                  type="button"
                  className="mt-auto inline-flex items-center text-md text-[#7B3F00] font-semibold tracking-wide hover:text-[#5a2c00] transition-colors duration-300"
                >
                  Learn more
                  <span className="ml-2 text-2xl">→</span>
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
