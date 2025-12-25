import { RoyalDividerLarge } from './RoyalDivider';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { Reveal } from '../animations/Reveal';

export function CallToAction() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-28 px-4 bg-gradient-to-b from-white via-[#FBF8F3] to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#C9A55A] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4AF78] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Reveal direction='up' delay={0.1}>
            <RoyalDividerLarge className="mb-12" />
          </Reveal>

          <Reveal direction='up' delay={0.1}>
            <h2 className="text-5xl md:text-6xl text-[#4A2C2A] mb-10 tracking-wide" style={{ fontFamily: 'serif' }}>
              Get In Touch With Us
            </h2>
            <div className="w-32 h-[3px] bg-linear-to-r from-transparent via-[#D4AF78] to-transparent mx-auto mb-10"></div>
          </Reveal>

          <Reveal direction='up' delay={0.1}>
            <p className="text-gray-700 text-2xl mb-4 max-w-3xl mx-auto leading-relaxed">
              Ready to Start Your Journey?
            </p>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Let us help you find the perfect property, build your dream project, or make a smart investment.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <Reveal direction='right' delay={0.1}>
            <div className="bg-white/95 backdrop-blur-sm p-10 shadow-2xl border-t-4 border-[#C9A55A] rounded-2xl relative overflow-hidden">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-[#C9A55A]/10 to-transparent rounded-bl-full"></div>

              <h3 className="text-3xl text-[#4A2C2A] mb-8 tracking-wide relative z-10" style={{ fontFamily: 'serif' }}>
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="group">
                  <label htmlFor="name" className="block text-gray-700 mb-2 tracking-wide font-medium transition-colors duration-300 group-focus-within:text-[#C9A55A]">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 pr-12 border-2 border-gray-200 focus:border-[#C9A55A] focus:shadow-lg focus:shadow-[#C9A55A]/20 outline-none transition-all duration-300 rounded-lg bg-white hover:bg-gray-50 placeholder-transparent peer"
                      placeholder="Enter your name"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#C9A55A]/10 flex items-center justify-center opacity-0 peer-focus:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 rounded-full bg-[#C9A55A]"></div>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-gray-700 mb-2 tracking-wide font-medium transition-colors duration-300 group-focus-within:text-[#C9A55A]">
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 pr-12 border-2 border-gray-200 focus:border-[#C9A55A] focus:shadow-lg focus:shadow-[#C9A55A]/20 outline-none transition-all duration-300 rounded-lg bg-white hover:bg-gray-50 placeholder-transparent peer"
                      placeholder="Enter your email"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#C9A55A]/10 flex items-center justify-center opacity-0 peer-focus:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 rounded-full bg-[#C9A55A]"></div>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="phone" className="block text-gray-700 mb-2 tracking-wide font-medium transition-colors duration-300 group-focus-within:text-[#C9A55A]">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 pr-12 border-2 border-gray-200 focus:border-[#C9A55A] focus:shadow-lg focus:shadow-[#C9A55A]/20 outline-none transition-all duration-300 rounded-lg bg-white hover:bg-gray-50 placeholder-transparent peer"
                      placeholder="Enter your phone number"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#C9A55A]/10 flex items-center justify-center opacity-0 peer-focus:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 rounded-full bg-[#C9A55A]"></div>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="service" className="block text-gray-700 mb-2 tracking-wide font-medium transition-colors duration-300 group-focus-within:text-[#C9A55A]">
                    Service Interested In *
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 pr-12 border-2 border-gray-200 focus:border-[#C9A55A] focus:shadow-lg focus:shadow-[#C9A55A]/20 outline-none transition-all duration-300 rounded-lg bg-white hover:bg-gray-50 appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="construction">Construction</option>
                      <option value="land">Land Services</option>
                      <option value="sale-purchase">Sale & Purchase</option>
                      <option value="consulting">Consulting & Brokerage</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-gray-700 mb-2 tracking-wide font-medium transition-colors duration-300 group-focus-within:text-[#C9A55A]">
                    Message *
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 pr-12 border-2 border-gray-200 focus:border-[#C9A55A] focus:shadow-lg focus:shadow-[#C9A55A]/20 outline-none transition-all duration-300 rounded-lg bg-white hover:bg-gray-50 resize-none placeholder-transparent peer"
                      placeholder="Tell us about your requirements"
                    ></textarea>
                    <div className="absolute right-3 top-6 w-6 h-6 rounded-full bg-[#C9A55A]/10 flex items-center justify-center opacity-0 peer-focus:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 rounded-full bg-[#C9A55A]"></div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="group relative w-full px-10 py-4 bg-linear-to-r from-[#C9A55A] to-[#D4AF78] text-white hover:shadow-2xl transition-all duration-300 tracking-wider flex items-center justify-center gap-3 rounded-lg overflow-hidden transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-[#D4AF78] to-[#C9A55A] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative z-10 font-semibold">Send Message</span>
                  <Send size={20} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </Reveal>

          {/* Contact Information */}
          <div className="flex flex-col h-full">
            <Reveal direction='left' delay={0.1}>
              <div className="bg-white/95 backdrop-blur-sm p-10 shadow-2xl border-t-4 border-[#D4AF78] rounded-2xl relative overflow-hidden grow">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-[#D4AF78]/10 to-transparent rounded-bl-full"></div>

                <h3 className="text-3xl text-[#4A2C2A] mb-8 tracking-wide relative z-10" style={{ fontFamily: 'serif' }}>
                  Contact Information
                </h3>

                <div className="space-y-1 relative z-10 text-sm">
                  <div className="flex items-start gap-4 group hover:bg-linear-to-r hover:from-[#C9A55A]/5 hover:to-transparent p-4 -mx-4 rounded-xl transition-all duration-300 cursor-pointer">
                    <div className="w-14 h-14 bg-linear-to-br from-[#C9A55A]/10 to-[#D4AF78]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#C9A55A]/20 transition-all duration-300">
                      <Phone className="text-[#C9A55A] group-hover:text-[#D4AF78] transition-colors duration-300" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[#4A2C2A] text-xl mb-2 tracking-wide font-medium group-hover:text-[#C9A55A] transition-colors duration-300">Call Us</h4>
                      <a
                        href="tel:+919825361826"
                        className="text-gray-600 text-lg hover:text-gray-700 transition-colors duration-300"
                      >
                        +91-98253 61826
                      </a>

                    </div>
                  </div>

                  <div className="h-[2px] bg-linear-to-r from-[#C9A55A]/20 to-transparent"></div>

                  <div className="flex items-start gap-4 group hover:bg-linear-to-r hover:from-[#C9A55A]/5 hover:to-transparent p-4 -mx-4 rounded-xl transition-all duration-300 cursor-pointer">
                    <div className="w-14 h-14 bg-linear-to-br from-[#C9A55A]/10 to-[#D4AF78]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#C9A55A]/20 transition-all duration-300">
                      <Mail className="text-[#C9A55A] group-hover:text-[#D4AF78] transition-colors duration-300" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[#4A2C2A] text-xl mb-2 tracking-wide font-medium group-hover:text-[#C9A55A] transition-colors duration-300">Email Us</h4>
                      <a
                        href="mailto:info@propertypro.com"
                        className="text-gray-600 text-lg hover:text-gray-700 transition-colors duration-300"
                      >
                        chiragmomaya@gmail.com
                      </a>

                    </div>
                  </div>

                  <div className="h-[2px] bg-linear-to-r from-[#C9A55A]/20 to-transparent"></div>

                  <div className="flex items-start gap-4 group hover:bg-linear-to-r hover:from-[#C9A55A]/5 hover:to-transparent p-4 -mx-4 rounded-xl transition-all duration-300 cursor-pointer">
                    <div className="w-14 h-14 bg-linear-to-br from-[#C9A55A]/10 to-[#D4AF78]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#C9A55A]/20 transition-all duration-300">
                      <MapPin className="text-[#C9A55A] group-hover:text-[#D4AF78] transition-colors duration-300" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[#4A2C2A] text-xl mb-2 tracking-wide font-medium group-hover:text-[#C9A55A] transition-colors duration-300">Visit Us</h4>
                      <p className="text-gray-600 text-lg hover:text-gray-700 transition-colors duration-300">29, Jagruti Complex, Plot No. 236-237, Ward 12-C, Lilashah Nagar, Gandhidham - Kachchh - 370201</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mt-3">
                <Reveal direction="up" delay={0.1}>
                  <div className="relative group pt-[56.25%] rounded-xl overflow-hidden shadow-2xl border border-white/10">
                    <iframe
                      src="https://www.google.com/maps?q=23.071872,70.127839&z=16&output=embed"
                      className="absolute inset-0 w-full h-full"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Hitchi Enterprise Location"
                    />

                    <div className="absolute inset-0 z-10 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <a
                        href="https://www.google.com/maps?q=23.071872,70.127839"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-lg bg-[#C9A55A] text-white font-semibold shadow-lg hover:bg-[#D4AF78] transition-colors duration-300"
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>
                </Reveal>
              </div>
            </Reveal>
          </div>
        </div>

        <RoyalDividerLarge className="mt-20" />
      </div>
    </section>
  );
}