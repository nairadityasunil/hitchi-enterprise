import { ImageWithFallback } from './figma/ImageWithFallback';
import { RoyalDividerLarge } from './RoyalDivider';
import { ArrowRight } from 'lucide-react';

const detailedServices = [
  {
    title: 'Construction',
    description: 'End-to-end residential, commercial, and infrastructure development.',
    details: 'We focus on quality materials, timely delivery, safety standards, and modern construction practices. Our experienced team ensures every project meets the highest industry standards while maintaining cost-effectiveness.',
    image: 'https://images.unsplash.com/photo-1723107638858-331404b1a09a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY2MjI3MTA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Construction site',
  },
  {
    title: 'Agriculture & Non-Agriculture Land',
    description: 'Buying, selling, and land conversion services.',
    details: 'We highlight legal clarity, zoning expertise, comprehensive documentation, and investment potential. Our team assists with all aspects of land transactions, ensuring smooth conversions and profitable investments.',
    image: 'https://images.unsplash.com/photo-1688320243376-69b68a8f656f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBsYW5kJTIwZmllbGR8ZW58MXx8fHwxNzY2MjYyOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Agricultural land',
  },
  {
    title: 'Sale & Purchase',
    description: 'Professional assistance for buying and selling properties.',
    details: 'We emphasize fair valuation, skilled negotiation, smooth transactions, and complete paperwork. Our services ensure you get the best deal whether you are buying your dream property or selling your asset.',
    image: 'https://images.unsplash.com/photo-1764983265127-8ec30a9c7b64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcHJvcGVydHklMjBidWlsZGluZ3xlbnwxfHx8fDE3NjYyMzIxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Commercial property',
  },
  {
    title: 'Consulting & Brokerage',
    description: 'Position as a trusted real-estate consultant.',
    details: 'We offer market insights, feasibility studies, investment guidance, and strategic advice. Our consulting services help you make informed decisions backed by comprehensive market research and analysis.',
    image: 'https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMGRlYWx8ZW58MXx8fHwxNzY2MjA2MzA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Business consultation',
  },
];

export function DetailedServices() {
  return (
    <section className="py-28 px-4 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0M5QTU1QSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <RoyalDividerLarge className="mb-12" />
          <h2 className="text-5xl md:text-6xl text-[#4A2C2A] mb-8 tracking-wide" style={{ fontFamily: 'serif' }}>
            Detailed Services
          </h2>
          <div className="w-32 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF78] to-transparent mx-auto mb-8"></div>
          <p className="text-gray-600 text-2xl tracking-wide">
            Comprehensive solutions for all your real estate needs
          </p>
        </div>

        <div className="space-y-32">
          {detailedServices.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-16 items-center group`}
            >
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden shadow-2xl">
                  {/* Decorative frame */}
                  <div className="absolute inset-0 border-4 border-[#C9A55A]/30 z-10 pointer-events-none"></div>
                  <div className="absolute top-2 left-2 right-2 bottom-2 border border-[#D4AF78]/50 z-10 pointer-events-none"></div>
                  
                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#C9A55A] via-[#D4AF78] to-[#C9A55A] z-20"></div>
                  
                  <ImageWithFallback
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  
                  {/* Elegant overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A2C2A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Corner accents */}
                  <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-[#C9A55A] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-[#C9A55A] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              
              <div className="lg:w-1/2 space-y-8">
                <div className="inline-block">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-3 h-3 bg-[#C9A55A] transform rotate-45"></div>
                    <div className="w-2 h-2 bg-[#D4AF78] rounded-full"></div>
                    <div className="w-3 h-3 bg-[#C9A55A] transform rotate-45"></div>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl text-[#4A2C2A] mb-4 tracking-wide" style={{ fontFamily: 'serif' }}>
                    {service.title}
                  </h3>
                  <div className="w-32 h-[3px] bg-gradient-to-r from-[#C9A55A] via-[#D4AF78] to-transparent"></div>
                </div>
                
                <p className="text-gray-700 text-2xl leading-relaxed" style={{ fontFamily: 'serif' }}>
                  {service.description}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {service.details}
                </p>
                
                {/* Learn more button */}
                <button className="group/btn flex items-center gap-3 text-[#C9A55A] hover:text-[#D4AF78] transition-colors duration-300 text-lg">
                  <span className="tracking-wide">Learn More</span>
                  <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform duration-300" />
                  <div className="h-[2px] w-0 group-hover/btn:w-12 bg-[#C9A55A] transition-all duration-300"></div>
                </button>
                
                {/* Decorative element */}
                <div className="pt-6">
                  <svg width="120" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="4" fill="#C9A55A"/>
                    <path d="M25 15 L50 15" stroke="#C9A55A" strokeWidth="2"/>
                    <path d="M55 15 L62 8 L69 15 L62 22 Z" fill="#D4AF78"/>
                    <path d="M74 15 L100 15" stroke="#C9A55A" strokeWidth="2"/>
                    <circle cx="105" cy="15" r="3" fill="#D4AF78"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}