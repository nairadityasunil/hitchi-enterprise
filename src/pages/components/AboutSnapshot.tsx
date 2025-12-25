import { Reveal } from '../animations/Reveal';
import { RoyalDividerLarge } from './RoyalDivider';

export function AboutSnapshot() {
  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <Reveal direction="up" delay={0.1}>
          <RoyalDividerLarge className="mb-10" />
        </Reveal>

        <Reveal direction="up" delay={0.1}>
        <h2 className="text-4xl md:text-5xl text-[#4A2C2A] mb-8 tracking-wide">
          Your Trusted Partner in Real Estate
        </h2>
        </Reveal>

        <Reveal direction="up" delay={0.1}>
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF78] to-transparent mx-auto mb-8"></div>
        </Reveal>

        <Reveal direction="up" delay={0.1}>
        <p className="text-gray-700 text-xl mb-6 leading-relaxed">
          With over two decades of experience in the property development and real estate sector,
          we have established ourselves as a trusted name in construction, land acquisition, and
          property consulting.
        </p>
        </Reveal>

        <Reveal direction="up" delay={0.1}>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
          Our commitment to ethical practices, market knowledge, and transparent operations ensures
          that every client receives personalized service and expert guidance throughout their real
          estate journey.
        </p>
        </Reveal>

        <Reveal direction="up" delay={0.1}>
        <RoyalDividerLarge className="mt-10" />
        </Reveal>
      </div>
    </section>
  );
}