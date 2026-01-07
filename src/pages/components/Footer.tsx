import { Mail, Phone, MapPin } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navigate = useNavigate();

  const handleNavigation = (path: string, e: React.MouseEvent) => {
    if (path.startsWith('#') && !isHomePage) {
      e.preventDefault();
      navigate(`/${path}`);
    }
  };
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '#services' },
    { name: 'Process', path: '#process' },
    { name: 'Contact', path: '#contact' }
  ];

  const services = [
    { name: 'Construction', path: '/construction' },
    { name: 'Land Services', path: '/land-services' },
    { name: 'Sale & Purchase', path: '/sale-purchase' },
    { name: 'Consulting', path: '/consulting' }
  ];

  return (
    <footer className="bg-gradient-to-b from-[#4A2C2A] to-[#3A1F1D] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl tracking-wide">Hitchi Enterprises</h3>
              <div className="mt-2 w-20 h-[2px] bg-gradient-to-r from-[#C9A55A] to-transparent" />
            </div>

            <p className="text-white/80 leading-relaxed max-w-md">
              Your trusted partner in real estate development, construction, and
              comprehensive property solutions across India.
            </p>

            {/* Social Links */}
            {/* <div className="flex items-center gap-4 pt-2">
              <a
                href="tel:+919825361826"
                className="w-11 h-11 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition"
                title="Phone"
              >
                <Phone size={18} className="text-[#C9A55A]" />
              </a>
              <a
                href="mailto:chiragmomaya@gmail.com"
                className="w-11 h-11 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition"
                title="Email"
              >
                <Mail size={18} className="text-[#C9A55A]" />
              </a>
              <a
                href="https://www.google.com/maps?q=23.071872,70.127839"
                target="_blank"
                rel="noopener noreferrer"
                title="Get Directions"
                className="w-11 h-11 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition"
              >
                <MapPin size={18} className="text-[#C9A55A]" />
              </a>
            </div> */}
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-10">
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="w-12 h-[1px] bg-gradient-to-r from-[#C9A55A] to-transparent mb-5" />
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.name}>
                    {item.path.startsWith('#') ? (
                      <a
                        href={item.path}
                        onClick={(e) => handleNavigation(item.path, e)}
                        className="text-white/80 hover:text-[#C9A55A] transition"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `text-white/80 hover:text-[#C9A55A] transition ${isActive ? 'text-[#C9A55A]' : ''
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <div className="w-12 h-[1px] bg-gradient-to-r from-[#C9A55A] to-transparent mb-5" />
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.path}>
                    <NavLink
                      to={service.path}
                      className={({ isActive }) =>
                        `text-white/80 hover:text-[#C9A55A] transition ${isActive ? 'text-[#C9A55A]' : ''
                        }`
                      }
                    >
                      {service.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="w-12 h-[1px] bg-gradient-to-r from-[#C9A55A] to-transparent mb-5" />
            <ul className="space-y-5">
              <li className="flex gap-3">
                <Phone size={18} className="text-[#C9A55A] mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+919825361826"
                  className="text-white/80 hover:text-white transition"
                >
                  +91-98253-61826
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-[#C9A55A] mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:chiragmomaya@gmail.com"
                  className="text-white/80 hover:text-white transition"
                >
                  chiragmomaya@gmail.com
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin size={18} className="text-[#C9A55A] mt-0.5 flex-shrink-0" />
                <a
                  href="https://goo.gl/maps/xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition"
                >
                  29, Jagruti Complex, Plot No. 236–237,<br />
                  Ward 12-C, Lilashah Nagar,<br />
                  Gandhidham – Kachchh – 370201
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm tracking-wide">
            © {new Date().getFullYear()} Htichi Enterprises. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
