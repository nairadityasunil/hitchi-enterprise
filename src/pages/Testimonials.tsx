import { RoyalDividerLarge } from './components/RoyalDivider';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Residential Client',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    rating: 5,
    text: 'PropertyPro helped us find our dream home. Their professionalism, market knowledge, and dedication made the entire process smooth and stress-free. Highly recommended!',
    project: 'Luxury Villa Purchase',
  },
  {
    name: 'Priya Sharma',
    role: 'Commercial Investor',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    rating: 5,
    text: 'The consulting services provided by PropertyPro were exceptional. Their market analysis and investment strategy helped us achieve 30% ROI on our commercial property investment.',
    project: 'Commercial Plaza Investment',
  },
  {
    name: 'Amit Patel',
    role: 'Land Developer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    rating: 5,
    text: 'Outstanding land conversion services. They handled all the legal complexities and zoning approvals seamlessly. True professionals in every sense.',
    project: 'Agricultural Land Conversion',
  },
  {
    name: 'Sneha Reddy',
    role: 'Property Seller',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    rating: 5,
    text: 'Sold my property at the best market price thanks to PropertyPro. Their negotiation skills and marketing strategy were impressive. The transaction was completed smoothly.',
    project: 'Residential Property Sale',
  },
  {
    name: 'Vikram Singh',
    role: 'Construction Client',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    rating: 5,
    text: 'The construction quality and project management exceeded our expectations. They delivered our commercial building on time and within budget. Exceptional work!',
    project: 'Office Building Construction',
  },
  {
    name: 'Ananya Desai',
    role: 'First-time Buyer',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop',
    rating: 5,
    text: 'As a first-time buyer, I was nervous about the process. PropertyPro guided me through every step with patience and expertise. Couldn\'t have asked for better service!',
    project: 'First Home Purchase',
  },
];

const stats = [
  { number: '500+', label: 'Happy Clients' },
  { number: '4.9/5', label: 'Average Rating' },
  { number: '95%', label: 'Client Satisfaction' },
  { number: '300+', label: 'Five-Star Reviews' },
];

export function Testimonials() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-28 px-4 bg-gradient-to-b from-[#4A2C2A] to-[#3A1F1D] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-[#C9A55A] rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 border border-[#D4AF78] rounded-full"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <RoyalDividerLarge className="mb-12" />
          <h1 className="text-5xl md:text-7xl mb-8 tracking-wide" style={{ fontFamily: 'serif' }}>
            Client Testimonials
          </h1>
          <div className="w-32 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF78] to-transparent mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-white/90">
            Discover what our clients say about their experience with us
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#FBF8F3] to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl bg-gradient-to-r from-[#C9A55A] to-[#D4AF78] bg-clip-text text-transparent mb-3" style={{ fontFamily: 'serif' }}>
                  {stat.number}
                </div>
                <div className="text-gray-600 text-lg tracking-wide">{stat.label}</div>
                <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#C9A55A] to-transparent mx-auto mt-4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl text-[#4A2C2A] mb-8 tracking-wide" style={{ fontFamily: 'serif' }}>
              What Our Clients Say
            </h2>
            <div className="w-24 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF78] to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-[#FBF8F3] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-t-4 border-[#C9A55A] relative group">
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <Quote size={60} className="text-[#C9A55A]" />
                </div>
                
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-[#C9A55A] fill-[#C9A55A]" />
                  ))}
                </div>
                
                {/* Testimonial text */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                {/* Project tag */}
                <div className="mb-6 inline-block px-4 py-1 bg-gradient-to-r from-[#C9A55A]/10 to-[#D4AF78]/10 text-[#4A2C2A] text-sm">
                  {testimonial.project}
                </div>
                
                {/* Client info */}
                <div className="flex items-center gap-4 pt-6 border-t border-[#C9A55A]/20">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#C9A55A]"
                  />
                  <div>
                    <h4 className="text-[#4A2C2A] text-lg tracking-wide" style={{ fontFamily: 'serif' }}>
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#FBF8F3] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-[#4A2C2A] mb-8 tracking-wide" style={{ fontFamily: 'serif' }}>
              Client Success Stories
            </h2>
            <div className="w-24 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF78] to-transparent mx-auto mb-8"></div>
            <p className="text-gray-600 text-xl">
              Real stories from real clients about their journey with PropertyPro
            </p>
          </div>

          <div className="bg-white p-12 shadow-2xl border-t-4 border-[#C9A55A] text-center">
            <Quote size={60} className="text-[#C9A55A] mx-auto mb-8 opacity-30" />
            <blockquote className="text-2xl md:text-3xl text-gray-700 mb-8 italic leading-relaxed" style={{ fontFamily: 'serif' }}>
              "Working with PropertyPro was the best decision we made. Their expertise, professionalism, and commitment to client satisfaction is unmatched in the industry."
            </blockquote>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#C9A55A] to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-[#4A2C2A]" style={{ fontFamily: 'serif' }}>— Leading Real Estate Investors</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#4A2C2A] to-[#3A1F1D] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6 tracking-wide" style={{ fontFamily: 'serif' }}>
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of satisfied clients who trusted us with their real estate journey
          </p>
          <button className="px-12 py-4 bg-gradient-to-r from-[#C9A55A] to-[#D4AF78] text-white hover:shadow-2xl hover:shadow-[#C9A55A]/60 transition-all duration-300 tracking-wider">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}
