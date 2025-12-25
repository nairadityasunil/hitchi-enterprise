import { Reveal } from '../animations/Reveal';
import { RoyalDividerLarge } from '../components/RoyalDivider';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CheckCircle } from 'lucide-react';

const services = [
  'Property Valuation',
  'Market Analysis',
  'Negotiation Support',
  'Legal Documentation',
  'Title Search', 
  'Home Inspection Coordination',
  'Closing Assistance',
  'Post-Sale Support',
];

export function SalePurchase() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1706808849827-7366c098b317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2NjIyMDg4OHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Property Sale"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <Reveal direction='up' delay={0.1}>
            <RoyalDividerLarge className="mb-8" />
          </Reveal>
          <Reveal direction='up' delay={0.1}>
            <h1 className="text-5xl md:text-7xl text-white mb-6 tracking-wide" style={{ fontFamily: 'serif' }}>
              Sale & Purchase
            </h1>
            <div className="w-32 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF78] to-transparent mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-white/90">
              Your trusted partner for property transactions
            </p>
          </Reveal>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-[#FBF8F3]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal direction='right' delay={0.1}>
              <div>
                <h2 className="text-4xl md:text-5xl text-[#4A2C2A] mb-8 tracking-wide" style={{ fontFamily: 'serif' }}>
                  Seamless Property Transactions
                </h2>
                <div className="w-24 h-[3px] bg-gradient-to-r from-[#C9A55A] to-transparent mb-8"></div>

                <p className="text-gray-700 text-xl leading-relaxed mb-6">
                  Whether you're buying your dream property or selling your valuable asset, we provide end-to-end support throughout the transaction. Our experienced team ensures fair valuations, smooth negotiations, and complete legal compliance.
                </p>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  We understand that property transactions are significant decisions. That's why we offer personalized service, market expertise, and transparent processes to help you achieve your real estate goals with confidence.
                </p>
              </div>
            </Reveal>
            <Reveal direction='left' delay={0.1}>

              <div className="relative">
                <div className="absolute inset-0 border-4 border-[#C9A55A]/20 transform translate-x-4 translate-y-4"></div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMGRlYWx8ZW58MXx8fHwxNzY2MjA2MzA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Property transaction"
                  className="relative w-full h-[500px] object-cover shadow-2xl"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 bg-[#FBF8F3]">
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

      {/* Process Steps */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal direction='up' delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-[#4A2C2A] mb-8 tracking-wide" style={{ fontFamily: 'serif' }}>
                Our Transaction Process
              </h2>
              <div className="w-24 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF78] to-transparent mx-auto mb-8"></div>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Reveal direction='right' delay={0.1}>
            <div className="bg-gradient-to-br from-white to-[#FBF8F3] p-10 shadow-lg border-t-4 border-[#C9A55A]">
              <h3 className="text-3xl text-[#4A2C2A] mb-6 tracking-wide" style={{ fontFamily: 'serif' }}>
                For Buyers
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A55A] to-[#D4AF78] flex items-center justify-center text-white flex-shrink-0">1</div>
                  <div>
                    <h4 className="text-lg text-[#4A2C2A] mb-1">Initial Consultation</h4>
                    <p className="text-gray-600">Understanding your requirements and budget</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A55A] to-[#D4AF78] flex items-center justify-center text-white flex-shrink-0">2</div>
                  <div>
                    <h4 className="text-lg text-[#4A2C2A] mb-1">Property Search</h4>
                    <p className="text-gray-600">Curated listings matching your criteria</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A55A] to-[#D4AF78] flex items-center justify-center text-white flex-shrink-0">3</div>
                  <div>
                    <h4 className="text-lg text-[#4A2C2A] mb-1">Site Visits & Inspection</h4>
                    <p className="text-gray-600">Detailed property tours and evaluation</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A55A] to-[#D4AF78] flex items-center justify-center text-white flex-shrink-0">4</div>
                  <div>
                    <h4 className="text-lg text-[#4A2C2A] mb-1">Negotiation & Closing</h4>
                    <p className="text-gray-600">Securing the best deal and completing formalities</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction='left' delay={0.1}>
            <div className="bg-gradient-to-br from-white to-[#FBF8F3] p-10 shadow-lg border-t-4 border-[#D4AF78]">
              <h3 className="text-3xl text-[#4A2C2A] mb-6 tracking-wide" style={{ fontFamily: 'serif' }}>
                For Sellers
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A55A] to-[#D4AF78] flex items-center justify-center text-white flex-shrink-0">1</div>
                  <div>
                    <h4 className="text-lg text-[#4A2C2A] mb-1">Property Valuation</h4>
                    <p className="text-gray-600">Accurate market-based pricing analysis</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A55A] to-[#D4AF78] flex items-center justify-center text-white flex-shrink-0">2</div>
                  <div>
                    <h4 className="text-lg text-[#4A2C2A] mb-1">Marketing Strategy</h4>
                    <p className="text-gray-600">Professional listing and promotion</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A55A] to-[#D4AF78] flex items-center justify-center text-white flex-shrink-0">3</div>
                  <div>
                    <h4 className="text-lg text-[#4A2C2A] mb-1">Buyer Screening</h4>
                    <p className="text-gray-600">Connecting with qualified buyers</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A55A] to-[#D4AF78] flex items-center justify-center text-white flex-shrink-0">4</div>
                  <div>
                    <h4 className="text-lg text-[#4A2C2A] mb-1">Transaction Completion</h4>
                    <p className="text-gray-600">Managing all paperwork and legalities</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
