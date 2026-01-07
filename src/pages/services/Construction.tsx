import { Reveal } from '../animations/Reveal';
import { RoyalDividerLarge } from '../components/RoyalDivider';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CheckCircle } from 'lucide-react';
import waterproof1 from "../../assets/waterproofing1.jpeg";
import waterproof2 from "../../assets/waterproofing2.jpeg";
import mosaic1 from "../../assets/mosaic1.jpeg";
import mosaic2 from "../../assets/mosaic2.jpeg";

const features = [
  'Residential Construction',
  'Commercial Projects',
  'Infrastructure Development',
  'Quality Materials',
  'Timely Delivery',
  'Safety Standards',
  'Modern Techniques',
  'Cost-Effective Solutions',
];

const projectTypes = [
  {
    title: 'Residential Buildings',
    description: 'Luxury apartments, villas, and housing complexes with modern amenities.',
    image: 'https://images.unsplash.com/photo-1706808849827-7366c098b317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2NjIyMDg4OHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Commercial Spaces',
    description: 'Office buildings, retail centers, and mixed-use developments.',
    image: 'https://images.unsplash.com/photo-1764983265127-8ec30a9c7b64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcHJvcGVydHklMjBidWlsZGluZ3xlbnwxfHx8fDE3NjYyMzIxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Infrastructure',
    description: 'Roads, utilities, and community infrastructure projects.',
    image: 'https://images.unsplash.com/photo-1723107638858-331404b1a09a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY2MjI3MTA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function Construction() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1723107638858-331404b1a09a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY2MjI3MTA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Construction"
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
              Construction Services
            </h1>
            <div className="w-32 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF78] to-transparent mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-white/90">
              Building excellence with precision and quality
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
                  Expert Construction Solutions
                </h2>
                <div className="w-24 h-[3px] bg-gradient-to-r from-[#C9A55A] to-transparent mb-8"></div>

                <p className="text-gray-700 text-xl leading-relaxed mb-6">
                  With decades of experience in construction, we deliver projects that exceed expectations. Our commitment to quality, safety, and timely delivery makes us the preferred choice for residential, commercial, and infrastructure development.
                </p>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  We employ modern construction techniques, use premium materials, and maintain strict safety standards throughout every project phase. Our experienced team ensures that your vision becomes reality while staying within budget and timeline.
                </p>
              </div>
            </Reveal>
            <Reveal direction='left' delay={0.1}>
              <div className="relative">
                <div className="absolute inset-0 border-4 border-[#C9A55A]/20 transform translate-x-4 translate-y-4"></div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1723107638858-331404b1a09a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY2MjI3MTA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Construction site"
                  className="relative w-full h-[500px] object-cover shadow-2xl"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* China Mosaic Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-[#FBF8F3]">
        <div className="max-w-7xl mx-auto">
          <Reveal direction='up' delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-[#4A2C2A] mb-8 tracking-wide" style={{ fontFamily: 'serif' }}>
                China Mosaic Services
              </h2>
              <div className="w-24 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF78] to-transparent mx-auto mb-8"></div>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Premium China mosaic flooring and decorative solutions for elegant, durable surfaces
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Reveal direction='right' delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 border-4 border-[#C9A55A]/20 transform translate-x-4 translate-y-4"></div>
                <ImageWithFallback
                  src={mosaic1}
                  // src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3NhaWMlMjBmbG9vcmluZyUyMHRpbGV8ZW58MXx8fHwxNzY2MjM1NjE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="China mosaic flooring"
                  className="relative w-full h-[400px] object-cover shadow-2xl"
                />
              </div>
            </Reveal>
            <Reveal direction='left' delay={0.3}>
              <div className="relative">
                <div className="absolute inset-0 border-4 border-[#C9A55A]/20 transform -translate-x-4 translate-y-4"></div>
                <ImageWithFallback
                  // src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aWxlZCUyMGJhdGhyb29tJTIwZmxvb3J8ZW58MXx8fHwxNzY2MjM1NjQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  src={mosaic2}
                  alt="Decorative mosaic patterns"
                  className="relative w-full h-[400px] object-cover shadow-2xl"
                />
              </div>
            </Reveal>
          </div>

          <div className="mt-16 text-center">
            <Reveal direction='up' delay={0.4}>
              <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
                China mosaic flooring offers a strong, economical, and low-maintenance solution for industrial, commercial, and residential spaces. Our expert execution ensures precise finishing, durability, and long-term usability across high-traffic and functional areas.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Waterproofing Section */}
      <section className="py-24 px-4 bg-[#FBF8F3]">
        <div className="max-w-7xl mx-auto">
          <Reveal direction='up' delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-[#4A2C2A] mb-8 tracking-wide" style={{ fontFamily: 'serif' }}>
                Waterproofing Solutions
              </h2>
              <div className="w-24 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF78] to-transparent mx-auto mb-8"></div>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Advanced waterproofing systems to protect your structures from water damage
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Reveal direction='right' delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 border-4 border-[#C9A55A]/20 transform translate-x-4 translate-y-4"></div>
                <ImageWithFallback
                  src={waterproof1}
                  // src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcnByb29maW5nJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2NjIzNTc4Mnw&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Waterproofing application"
                  className="relative w-full h-[400px] object-cover shadow-2xl"
                />
              </div>
            </Reveal>
            <Reveal direction='left' delay={0.3}>
              <div className="relative">
                <div className="absolute inset-0 border-4 border-[#C9A55A]/20 transform -translate-x-4 translate-y-4"></div>
                <ImageWithFallback
                  src={waterproof2}
                  // src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29mJTIwd2F0ZXJwcm9vZmluZ3xlbnwxfHx8fDE3NjYyMzU4MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Roof waterproofing"
                  className="relative w-full h-[400px] object-cover shadow-2xl"
                />
              </div>
            </Reveal>
          </div>

          <div className="mt-16 text-center">
            <Reveal direction='up' delay={0.4}>
              <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
                Our waterproofing solutions protect structures from seepage and water damage, ensuring long-term durability and reduced maintenance. We deliver reliable waterproofing for roofs, terraces, basements, and wet areas across residential, commercial, and industrial projects.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-[#FBF8F3]">
        <div className="max-w-7xl mx-auto">
          <Reveal direction='up' delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-[#4A2C2A] mb-8 tracking-wide" style={{ fontFamily: 'serif' }}>
                Our Capabilities
              </h2>
              <div className="w-24 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF78] to-transparent mx-auto"></div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Reveal direction='up' delay={index * 0.2}>
                <div key={index} className="bg-white py-5 px-4 shadow-lg hover:shadow-xl transition-all duration-500 border-l-4 border-[#C9A55A] group h-full flex items-center gap-4">
                  <CheckCircle className="text-[#C9A55A] shrink-0 group-hover:scale-110 transition-transform duration-300" size={24} />
                  <span className="text-gray-700 text-lg">{feature}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal direction='up' delay={0.1}>

            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-[#4A2C2A] mb-8 tracking-wide" style={{ fontFamily: 'serif' }}>
                Project Types
              </h2>
              <div className="w-24 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF78] to-transparent mx-auto mb-8"></div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {projectTypes.map((type, index) => (
              <Reveal direction='up' delay={index * 0.2}>
                <div key={index} className="group relative bg-white shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden">
                  <div className="relative h-72 overflow-hidden">
                    <ImageWithFallback
                      src={type.image}
                      alt={type.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#4A2C2A]/90 to-transparent"></div>
                  </div>

                  <div className="p-8">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A55A] to-[#D4AF78]"></div>
                    <h3 className="text-2xl text-[#4A2C2A] mb-4 tracking-wide" style={{ fontFamily: 'serif' }}>
                      {type.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {type.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
