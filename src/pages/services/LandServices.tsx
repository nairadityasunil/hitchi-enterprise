import { Reveal } from '../animations/Reveal';
import { RoyalDividerLarge } from '../components/RoyalDivider';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CheckCircle } from 'lucide-react';

const services = [
  'Agricultural Land Purchase',
  'Non-Agricultural Land',
  'Land Conversion Services',
  'Zoning Expertise',
  'Legal Documentation',
  'Investment Analysis',
  'Market Valuation',
  'Title Verification',
];

export function LandServices() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1688320243376-69b68a8f656f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBsYW5kJTIwZmllbGR8ZW58MXx8fHwxNzY2MjYyOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Land Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <Reveal direction='up' delay={0.1}>
            <RoyalDividerLarge className="mb-8" />
          </Reveal>
          <Reveal direction='up' delay={0.2}>
            <h1 className="text-5xl md:text-7xl text-white mb-6 tracking-wide" style={{ fontFamily: 'serif' }}>
              Land Services
            </h1>
            <div className="w-32 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF78] to-transparent mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-white/90">
              Agricultural & Non-Agricultural Land Solutions
            </p>
          </Reveal>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal direction='right' delay={0.1}>

              <div className="relative">
                <div className="absolute inset-0 border-4 border-[#C9A55A]/20 transform -translate-x-4 -translate-y-4"></div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1688320243376-69b68a8f656f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBsYW5kJTIwZmllbGR8ZW58MXx8fHwxNzY2MjYyOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Agricultural land"
                  className="relative w-full h-[500px] object-cover shadow-2xl"
                />
              </div>
            </Reveal>
            <Reveal direction='left' delay={0.1}>

              <div>
                <h2 className="text-4xl md:text-5xl text-[#4A2C2A] mb-8 tracking-wide" style={{ fontFamily: 'serif' }}>
                  Comprehensive Land Solutions
                </h2>
                <div className="w-24 h-[3px] bg-gradient-to-r from-[#C9A55A] to-transparent mb-8"></div>

                <p className="text-gray-700 text-xl leading-relaxed mb-6">
                  Whether you are looking to invest in industrial land, non-agricultural land, mining land, agricultural land, or acquire clusters of land for mega projects, our expertise ensures smooth transactions and strategic investments. We manage the complete process, including acquisition, compliance, and documentation.
                </p>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Our team specializes in zoning regulations, legal compliance, and market analysis to help you make informed decisions. From initial consultation to final documentation, we provide comprehensive support throughout your land transaction journey.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#FBF8F3] to-white">
        <div className="max-w-7xl mx-auto">
          <Reveal direction='up' delay={0.1}>

            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-[#4A2C2A] mb-8 tracking-wide" style={{ fontFamily: 'serif' }}>
                Our Land Services
              </h2>
              <div className="w-24 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF78] to-transparent mx-auto"></div>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Reveal direction='up' delay={index * 0.2}>
                <div key={index} className="bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-500 border-l-4 border-[#C9A55A] group">
                  <div className="flex items-center gap-4">
                    <CheckCircle className="text-[#C9A55A] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={24} />
                    <span className="text-gray-700 text-lg">{service}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal direction='up' delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-[#4A2C2A] mb-8 tracking-wide" style={{ fontFamily: 'serif' }}>
                Why Choose Our Land Services
              </h2>
              <div className="w-24 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF78] to-transparent mx-auto mb-8"></div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Reveal direction='up' delay={0.1}>
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#C9A55A]/10 to-[#D4AF78]/10 rounded-full flex items-center justify-center">
                  <div className="text-4xl text-[#C9A55A]">📋</div>
                </div>
                <h3 className="text-2xl text-[#4A2C2A] mb-4 tracking-wide" style={{ fontFamily: 'serif' }}>
                  Legal Clarity
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Complete due diligence and clear title verification for all land transactions.
                </p>
              </div>
            </Reveal>
            <Reveal direction='up' delay={0.2}>
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#C9A55A]/10 to-[#D4AF78]/10 rounded-full flex items-center justify-center">
                  <div className="text-4xl text-[#C9A55A]">🎯</div>
                </div>
                <h3 className="text-2xl text-[#4A2C2A] mb-4 tracking-wide" style={{ fontFamily: 'serif' }}>
                  Expert Guidance
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Professional advice on zoning, conversion, and investment potential.
                </p>
              </div>
            </Reveal>
            <Reveal direction='up' delay={0.3}>
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#C9A55A]/10 to-[#D4AF78]/10 rounded-full flex items-center justify-center">
                  <div className="text-4xl text-[#C9A55A]">💰</div>
                </div>
                <h3 className="text-2xl text-[#4A2C2A] mb-4 tracking-wide" style={{ fontFamily: 'serif' }}>
                  Maximum ROI
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategic planning to maximize your investment returns and growth potential.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
