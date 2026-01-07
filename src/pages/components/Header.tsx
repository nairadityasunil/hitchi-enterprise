import { ChevronDown, X, Home, Info, Briefcase, Workflow, Mail } from "lucide-react";
import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import htichiLogo from "../../assets/htichi_logo.png";

const SERVICES = [
  { name: "Construction", path: "/construction" },
  { name: "Land Services", path: "/land-services" },
  { name: "Sale & Purchase", path: "/sale-purchase" },
  { name: "Consulting", path: "/consulting" },
];

const SECTIONS = ["home", "services", "process", "contact"];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";
  const isServicePage = useMemo(
    () => SERVICES.some((s) => s.path === location.pathname),
    [location.pathname]
  );

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
  }, [mobileMenuOpen]);

  // Click outside handler for desktop services
  useEffect(() => {
    if (!servicesOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleClickOutside);
    return () => document.removeEventListener("pointerdown", handleClickOutside);
  }, [servicesOpen]);

  // Reset mobile services when menu closes
  useEffect(() => {
    if (!mobileMenuOpen) {
      setTimeout(() => setMobileServicesOpen(false), 300);
    }
  }, [mobileMenuOpen]);

  // Scroll to section
  const scrollToSection = useCallback(
    (id: string) => {
      setMobileMenuOpen(false);
      setServicesOpen(false);
      setMobileServicesOpen(false);

      const scrollToElement = () => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      };

      if (isHome) {
        scrollToElement();
      } else {
        navigate("/");
        setTimeout(scrollToElement, 150);
      }
    },
    [isHome, navigate]
  );

  // Active section detection
  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      const offset = window.scrollY + 120;

      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && offset >= el.offsetTop && offset < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const getLinkClass = (isActive: boolean) =>
    `relative text-[15px] font-medium transition-all duration-300 hover:text-[#3E2723] hover:-translate-y-[1px] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#C9A55A] after:transition-all after:duration-300 ${isActive ? "text-[#3E2723] after:w-full" : "text-gray-600 after:w-0 hover:after:w-full"
    }`;

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button onClick={() => scrollToSection("home")} aria-label="Go to home">
              <img src={htichiLogo} alt="Htichi Enterprises" className="h-10" />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("home")}
                className={getLinkClass(isHome && activeSection === "home")}
              >
                Home
              </button>

              {/* Services Dropdown */}
              <div
                ref={servicesRef}
                className="relative"
              >
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`${getLinkClass(
                    (isHome && activeSection === "services") || isServicePage
                  )} flex items-center gap-1`}
                >
                  Services
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {servicesOpen && (
                  <div className="absolute left-0 mt-3 w-56 bg-white rounded-xl shadow-lg border border-black/5 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    {SERVICES.map((service, index) => (
                      <NavLink
                        key={service.path}
                        to={service.path}
                        onClick={() => setServicesOpen(false)}
                        style={{ animationDelay: `${index * 30}ms` }}
                        className={({ isActive }) =>
                          `block px-5 py-3 text-sm transition-all duration-200 ${isActive
                            ? "bg-[#C9A55A]/15 text-[#C9A55A] font-medium"
                            : "text-gray-700 hover:bg-black/5 hover:pl-6"
                          }`
                        }
                      >
                        {service.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => scrollToSection("process")}
                className={getLinkClass(isHome && activeSection === "process")}
              >
                Process
              </button>

              <NavLink to="/about" className={({ isActive }) => getLinkClass(isActive)}>
                About
              </NavLink>

              <button
                onClick={() => scrollToSection("contact")}
                className="ml-2 px-6 py-2.5 rounded-full bg-[#4A2C2A] text-white text-sm font-semibold hover:bg-[#3A1F1D] transition-all hover:scale-[1.03] active:scale-[0.98]"
              >
                Get in Touch
              </button>
            </nav>

            {/* Mobile Menu Button - Animated Hamburger */}
            <button
              className="md:hidden relative w-10 h-10 flex items-center justify-center text-[#3E2723] hover:bg-black/5 rounded-lg transition-all active:scale-95"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span className="w-full h-0.5 bg-current rounded-full transition-all"></span>
                <span className="w-full h-0.5 bg-current rounded-full transition-all"></span>
                <span className="w-full h-0.5 bg-current rounded-full transition-all"></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Full Screen with Blur */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-500 ${mobileMenuOpen ? "visible" : "invisible"
          }`}
      >
        {/* Animated Background with Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-[#4A2C2A] via-[#3E2723] to-[#2A1A18] transition-all duration-700 ${mobileMenuOpen ? "opacity-95 scale-100" : "opacity-0 scale-105"
            }`}
        />

        {/* Decorative Elements */}
        <div className={`absolute inset-0 overflow-hidden transition-opacity duration-700 ${mobileMenuOpen ? "opacity-100" : "opacity-0"}`}>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A55A]/10 rounded-full blur-3xl" style={{ transform: "translate(40%, -40%)" }} />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C9A55A]/5 rounded-full blur-3xl" style={{ transform: "translate(-40%, 40%)" }} />
        </div>

        {/* Close Button - Animated X */}
        <button
          onClick={() => setMobileMenuOpen(false)}
          className={`absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300 ${mobileMenuOpen ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-50 opacity-0"
            }`}
          style={{ transitionDelay: mobileMenuOpen ? "400ms" : "0ms" }}
          aria-label="Close menu"
        >
          <X size={24} strokeWidth={2} />
        </button>

        {/* Menu Content - Centered */}
        <div className="relative h-full flex flex-col items-center justify-center px-8">
          {/* Logo */}
          <div
            className={`mb-12 transition-all duration-500 ${mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            style={{ transitionDelay: mobileMenuOpen ? "200ms" : "0ms" }}
          >
            <img src={htichiLogo} alt="Htichi Enterprises" className="h-12 brightness-0 invert" />
          </div>

          {/* Navigation Items */}
          <nav className="flex flex-col items-center space-y-4 w-full max-w-xs">
            {/* Home */}
            <button
              onClick={() => scrollToSection("home")}
              className={`group w-full flex items-center justify-between px-6 py-4 rounded-2xl backdrop-blur-md border transition-all duration-300 hover:scale-105 active:scale-95 ${isHome && activeSection === "home"
                  ? "bg-[#C9A55A]/30 border-[#C9A55A]/50 text-[#C9A55A]"
                  : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                } ${mobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"}`}
              style={{ transitionDelay: mobileMenuOpen ? "300ms" : "0ms" }}
            >
              <span className="flex items-center gap-3 text-lg font-semibold">
                <Home size={20} />
                Home
              </span>
              <ChevronDown size={18} className="-rotate-90 opacity-50" />
            </button>

            {/* About */}
            <NavLink
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `group w-full flex items-center justify-between px-6 py-4 rounded-2xl backdrop-blur-md border transition-all duration-300 hover:scale-105 active:scale-95 ${isActive
                  ? "bg-[#C9A55A]/30 border-[#C9A55A]/50 text-[#C9A55A]"
                  : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                } ${mobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"}`
              }
              style={{ transitionDelay: mobileMenuOpen ? "350ms" : "0ms" }}
            >
              <span className="flex items-center gap-3 text-lg font-semibold">
                <Info size={20} />
                About
              </span>
              <ChevronDown size={18} className="-rotate-90 opacity-50" />
            </NavLink>

            {/* Services - Expandable */}
            <div
              className={`w-full transition-all duration-300 ${mobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
                }`}
              style={{ transitionDelay: mobileMenuOpen ? "400ms" : "0ms" }}
            >
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`group w-full flex items-center justify-between px-6 py-4 rounded-2xl backdrop-blur-md border transition-all duration-300 hover:scale-105 active:scale-95 ${(isHome && activeSection === "services") || isServicePage
                    ? "bg-[#C9A55A]/30 border-[#C9A55A]/50 text-[#C9A55A]"
                    : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                  }`}
              >
                <span className="flex items-center gap-3 text-lg font-semibold">
                  <Briefcase size={20} />
                  Services
                </span>
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : "-rotate-90"
                    } opacity-50`}
                />
              </button>

              {/* Services Submenu */}
              <div
                className={`overflow-hidden transition-all duration-400 ${mobileServicesOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
                  }`}
              >
                <div className="space-y-2 pl-4">
                  {SERVICES.map((service, index) => (
                    <NavLink
                      key={service.path}
                      to={service.path}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileServicesOpen(false);
                      }}
                      className={({ isActive }) =>
                        `block px-6 py-3 rounded-xl backdrop-blur-md border text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95 ${isActive
                          ? "bg-[#C9A55A]/20 border-[#C9A55A]/30 text-[#C9A55A]"
                          : "bg-white/5 border-white/20 text-white/90 hover:bg-white/10"
                        } ${mobileServicesOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                        }`
                      }
                      style={{
                        transitionDelay: mobileServicesOpen ? `${index * 60}ms` : "0ms",
                      }}
                    >
                      {service.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {/* Process */}
            <button
              onClick={() => scrollToSection("process")}
              className={`group w-full flex items-center justify-between px-6 py-4 rounded-2xl backdrop-blur-md border transition-all duration-300 hover:scale-105 active:scale-95 ${isHome && activeSection === "process"
                  ? "bg-[#C9A55A]/30 border-[#C9A55A]/50 text-[#C9A55A]"
                  : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                } ${mobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"}`}
              style={{ transitionDelay: mobileMenuOpen ? "450ms" : "0ms" }}
            >
              <span className="flex items-center gap-3 text-lg font-semibold">
                <Workflow size={20} />
                Process
              </span>
              <ChevronDown size={18} className="-rotate-90 opacity-50" />
            </button>

            {/* Contact CTA */}
            <button
              onClick={() => scrollToSection("contact")}
              className={`w-full mt-6 px-6 py-5 rounded-2xl bg-gradient-to-r from-[#C9A55A] to-[#B8944A] text-[#2A1A18] text-lg font-bold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 flex items-center justify-center gap-3 ${mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              style={{ transitionDelay: mobileMenuOpen ? "500ms" : "0ms" }}
            >
              <Mail size={22} />
              Get in Touch
            </button>
          </nav>

          {/* Footer Info */}
          <div
            className={`absolute bottom-8 text-center transition-all duration-500 ${mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            style={{ transitionDelay: mobileMenuOpen ? "600ms" : "0ms" }}
          >
            <p className="text-white/50 text-sm">© 2024 Htichi Enterprises</p>
          </div>
        </div>
      </div>
    </>
  );
}