import { RoyalDividerLarge } from './components/RoyalDivider';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Target, Eye, Heart, Award, Users, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We conduct business with honesty, transparency, and ethical practices in every transaction.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for the highest quality in every project, exceeding industry standards consistently.',
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description: 'Our clients\' success and satisfaction are at the heart of everything we do.',
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'We embrace modern techniques and technology to deliver superior real estate solutions.',
  },
];


export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1764983265127-8ec30a9c7b64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcHJvcGVydHklMjBidWlsZGluZ3xlbnwxfHx8fDE3NjYyMzIxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="About HitChi Enterprises"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <RoyalDividerLarge className="mb-8" />
          <h1 className="text-5xl md:text-7xl text-white mb-6 tracking-wide" style={{ fontFamily: 'serif' }}>
            About HitChi Enterprises
          </h1>
          <div className="w-32 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF78] to-transparent mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-white/90">
            Building dreams, creating value, transforming communities
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl text-[#4A2C2A] mb-8 tracking-wide" style={{ fontFamily: 'serif' }}>
                Our Story
              </h2>
              <div className="w-24 h-[3px] bg-gradient-to-r from-[#C9A55A] to-transparent mb-8"></div>

              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                Founded in 2000, PropertyPro has grown from a small local firm to a leading real estate development company. Our journey has been marked by consistent dedication to quality, innovation, and client satisfaction.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Over the past two decades, we have completed 500+ projects across residential, commercial, and infrastructure sectors. Each project reflects our commitment to excellence and our understanding of what makes a property truly valuable.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                Today, we stand proud as a trusted name in real estate, backed by a team of experienced professionals and a track record of delivering exceptional results. Our success is measured not just in projects completed, but in the satisfaction of hundreds of happy clients who have realized their real estate dreams with us.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 border-4 border-[#C9A55A]/20 transform translate-x-4 translate-y-4"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1706808849827-7366c098b317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2NjIyMDg4OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our Story"
                className="relative w-full h-[500px] object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#FBF8F3] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 shadow-2xl border-t-4 border-[#C9A55A] relative group">
              <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <Eye size={80} className="text-[#C9A55A]" />
              </div>

              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-[#C9A55A]/10 to-[#D4AF78]/10 rounded-full flex items-center justify-center mb-8">
                  <Eye size={40} className="text-[#C9A55A]" />
                </div>

                <h2 className="text-4xl text-[#4A2C2A] mb-6 tracking-wide" style={{ fontFamily: 'serif' }}>
                  Our Vision
                </h2>
                <div className="w-20 h-[3px] bg-gradient-to-r from-[#C9A55A] to-transparent mb-6"></div>

                <p className="text-gray-700 text-lg leading-relaxed">
                  To be the most trusted and innovative real estate development company, creating sustainable communities and exceptional properties that enhance lives and create lasting value for generations to come.
                </p>
              </div>
            </div>

            <div className="bg-white p-12 shadow-2xl border-t-4 border-[#D4AF78] relative group">
              <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <Target size={80} className="text-[#C9A55A]" />
              </div>

              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-[#C9A55A]/10 to-[#D4AF78]/10 rounded-full flex items-center justify-center mb-8">
                  <Target size={40} className="text-[#C9A55A]" />
                </div>

                <h2 className="text-4xl text-[#4A2C2A] mb-6 tracking-wide" style={{ fontFamily: 'serif' }}>
                  Our Mission
                </h2>
                <div className="w-20 h-[3px] bg-gradient-to-r from-[#C9A55A] to-transparent mb-6"></div>

                <p className="text-gray-700 text-lg leading-relaxed">
                  To deliver exceptional real estate solutions through integrity, innovation, and excellence. We are committed to understanding our clients' needs and exceeding their expectations with quality construction, transparent dealings, and professional service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <RoyalDividerLarge className="mb-12" />
            <h2 className="text-4xl md:text-5xl text-[#4A2C2A] mb-8 tracking-wide" style={{ fontFamily: 'serif' }}>
              Our Core Values
            </h2>
            <div className="w-24 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF78] to-transparent mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 w-24 h-24 rounded-full border-2 border-[#C9A55A]/30 group-hover:border-[#C9A55A] transition-all duration-300 group-hover:scale-110"></div>
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[#C9A55A]/10 to-[#D4AF78]/10 flex items-center justify-center group-hover:from-[#C9A55A]/20 group-hover:to-[#D4AF78]/20 transition-all duration-300">
                    <value.icon size={48} strokeWidth={1.5} className="text-[#C9A55A] group-hover:text-[#D4AF78] transition-colors duration-300" />
                  </div>
                </div>

                <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#C9A55A] to-transparent mx-auto mb-4"></div>

                <h3 className="text-2xl text-[#4A2C2A] mb-3 tracking-wide" style={{ fontFamily: 'serif' }}>
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



    </div>
  );
}
