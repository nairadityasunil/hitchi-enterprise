import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group"
          aria-label="Back to top"
        >
          <div className="relative w-12 h-12 bg-linear-to-r from-[#C9A55A] via-[#D4AF78] to-[#C9A55A] rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center">
            <ChevronUp 
              size={20} 
              className="text-white transition-transform duration-300 group-hover:-translate-y-1" 
            />
            {/* Decorative ring */}
            <div className="absolute inset-0 w-12 h-12 rounded-full border border-[#C9A55A]/30 animate-pulse" />
          </div>
        </button>
      )}
    </>
  );
}
