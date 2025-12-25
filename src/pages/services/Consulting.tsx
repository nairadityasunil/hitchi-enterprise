import { Reveal } from '../animations/Reveal';
import { RoyalDividerLarge } from '../components/RoyalDivider';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CheckCircle, TrendingUp, Shield, FileText, Target } from 'lucide-react';

const services = [
  'Market Analysis',
  'Investment Strategy',
  'Feasibility Studies',
  'Portfolio Management',
  'Risk Assessment',
  'Financial Planning',
  'Legal Consultation',
  'Exit Strategy Planning',
];

const consultingAreas = [
  {
    icon: TrendingUp,
    title: 'Investment Advisory',
    description: 'Strategic guidance on property investments with maximum ROI potential and risk mitigation strategies.',
  },
  {
    icon: Shield,
    title: 'Due Diligence',
    description: 'Comprehensive property evaluation including legal, technical, and financial assessments.',
  },
  {
    icon: FileText,
    title: 'Market Research',
    description: 'In-depth analysis of market trends, pricing dynamics, and growth opportunities.',
  },
  {
    icon: Target,
    title: 'Strategic Planning',
    description: 'Long-term real estate strategies aligned with your financial goals and objectives.',
  },
];

export function Consulting() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMGRlYWx8ZW58MXx8fHwxNzY2MjA2MzA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Consulting"
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
              Consulting & Brokerage
            </h1>
            <div className="w-32 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF78] to-transparent mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-white/90">
              Expert insights for informed real estate decisions
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
                  src="https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMGRlYWx8ZW58MXx8fHwxNzY2MjA2MzA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Consulting services"
                  className="relative w-full h-[500px] object-cover shadow-2xl"
                />
              </div>
            </Reveal>
            <Reveal direction='left' delay={0.1}>

              <div>
                <h2 className="text-4xl md:text-5xl text-[#4A2C2A] mb-8 tracking-wide" style={{ fontFamily: 'serif' }}>
                  Strategic Real Estate Consulting
                </h2>
                <div className="w-24 h-[3px] bg-gradient-to-r from-[#C9A55A] to-transparent mb-8"></div>

                <p className="text-gray-700 text-xl leading-relaxed mb-6">
                  Make confident real estate decisions backed by expert analysis and market intelligence. Our consulting services provide comprehensive insights into market trends, investment opportunities, and strategic planning for your real estate portfolio.
                </p>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  From feasibility studies to risk assessment, we offer end-to-end consulting solutions that help you maximize returns while minimizing risks. Our experienced consultants bring decades of market knowledge to every engagement.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Consulting Areas */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#FBF8F3] to-white">
        <div className="max-w-7xl mx-auto">
          <Reveal direction='up' delay={0.1}>

            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-[#4A2C2A] mb-8 tracking-wide" style={{ fontFamily: 'serif' }}>
                Our Expertise
              </h2>
              <div className="w-24 h-0.75 bg-gradient-to-r from-transparent via-[#D4AF78] to-transparent mx-auto mb-8"></div>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {consultingAreas.map((area, index) => (
              <Reveal direction='up' delay={index * 0.2}>

                <div key={index} className="bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-t-4 border-[#C9A55A] group">
                  <div className="w-16 h-16 mb-6 bg-gradient-to-br from-[#C9A55A]/10 to-[#D4AF78]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <area.icon size={32} strokeWidth={1.5} className="text-[#C9A55A]" />
                  </div>
                  <h3 className="text-2xl text-[#4A2C2A] mb-4 tracking-wide" style={{ fontFamily: 'serif' }}>
                    {area.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal direction='up' delay={0.1}>

            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-[#4A2C2A] mb-8 tracking-wide" style={{ fontFamily: 'serif' }}>
                Comprehensive Services
              </h2>
              <div className="w-24 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF78] to-transparent mx-auto"></div>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Reveal direction='up' delay={index * 0.2}>

                <div key={index} className="bg-gradient-to-br from-white to-[#FBF8F3] p-6 shadow-lg hover:shadow-xl transition-all duration-500 border-l-4 border-[#C9A55A] group">
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

      {/* Why Choose Us */}
      <section className="py-24 px-4 bg-[#FBF8F3]">
        <div className="max-w-6xl mx-auto">
          <Reveal direction='up' delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-[#4A2C2A] mb-8 tracking-wide" style={{ fontFamily: 'serif' }}>
                Why Choose Our Consulting Services
              </h2>
              <div className="w-24 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF78] to-transparent mx-auto mb-8"></div>
            </div>
          </Reveal>
          <Reveal direction='up' delay={0.1}>

          <div className="bg-white p-12 shadow-2xl border-t-4 border-[#C9A55A]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-[#C9A55A] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl text-[#4A2C2A] mb-2">Data-Driven Insights</h4>
                    <p className="text-gray-600">Our recommendations are backed by comprehensive market data and analytics.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-[#C9A55A] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl text-[#4A2C2A] mb-2">Industry Experience</h4>
                    <p className="text-gray-600">Decades of combined experience in real estate markets and trends.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-[#C9A55A] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl text-[#4A2C2A] mb-2">Tailored Solutions</h4>
                    <p className="text-gray-600">Every strategy is customized to your unique goals and circumstances.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-[#C9A55A] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl text-[#4A2C2A] mb-2">Transparent Process</h4>
                    <p className="text-gray-600">Clear communication and detailed reporting at every stage.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-[#C9A55A] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl text-[#4A2C2A] mb-2">Proven Track Record</h4>
                    <p className="text-gray-600">Successful outcomes across diverse real estate projects and investments.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-[#C9A55A] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl text-[#4A2C2A] mb-2">Ongoing Support</h4>
                    <p className="text-gray-600">Continuous guidance and support beyond initial consultation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
