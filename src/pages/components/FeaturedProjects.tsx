import { RoyalDividerLarge } from './RoyalDivider';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Calendar } from 'lucide-react';

const projects = [
  {
    title: 'Luxury Residential Complex',
    location: 'Downtown District',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1706808849827-7366c098b317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2NjIyMDg4OHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Residential',
  },
  {
    title: 'Commercial Plaza Development',
    location: 'Business Hub',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1764983265127-8ec30a9c7b64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcHJvcGVydHklMjBidWlsZGluZ3xlbnwxfHx8fDE3NjYyMzIxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Commercial',
  },
  {
    title: 'Agricultural Land Conversion',
    location: 'Green Valley',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1688320243376-69b68a8f656f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBsYW5kJTIwZmllbGR8ZW58MXx8fHwxNzY2MjYyOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Land Development',
  },
];

export function FeaturedProjects() {
  return (
    <section className="py-28 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <RoyalDividerLarge className="mb-12" />
          <h2 className="text-5xl md:text-6xl text-[#4A2C2A] mb-8 tracking-wide" style={{ fontFamily: 'serif' }}>
            Featured Projects
          </h2>
          <div className="w-32 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF78] to-transparent mx-auto mb-8"></div>
          <p className="text-gray-600 text-2xl tracking-wide">
            Excellence delivered across diverse projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="group relative bg-white shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden transform hover:-translate-y-2">
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A2C2A]/80 to-transparent"></div>
                
                {/* Category badge */}
                <div className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-[#C9A55A] to-[#D4AF78] text-white text-sm tracking-wider">
                  {project.category}
                </div>
                
                {/* Decorative border */}
                <div className="absolute inset-4 border-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Content */}
              <div className="p-8 relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A55A] via-[#D4AF78] to-[#C9A55A]"></div>
                
                <h3 className="text-2xl text-[#4A2C2A] mb-4 tracking-wide" style={{ fontFamily: 'serif' }}>
                  {project.title}
                </h3>
                
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-[#C9A55A]" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-[#C9A55A]" />
                    <span>{project.year}</span>
                  </div>
                </div>
                
                <div className="w-16 h-[2px] bg-gradient-to-r from-[#C9A55A] to-transparent mt-6"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
