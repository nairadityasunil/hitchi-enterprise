interface RoyalDividerProps {
  className?: string;
  variant?: 'gold' | 'rose-gold';
}

export function RoyalDivider({ className = '', variant = 'gold' }: RoyalDividerProps) {
  const color = variant === 'gold' ? '#C9A55A' : '#D4AF78';
  
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg width="120" height="20" viewBox="0 0 120 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 10 L35 10" stroke={color} strokeWidth="1.5"/>
        <circle cx="45" cy="10" r="3" fill={color}/>
        <path d="M50 10 L55 5 L60 10 L55 15 Z" fill={color}/>
        <circle cx="75" cy="10" r="3" fill={color}/>
        <path d="M85 10 L120 10" stroke={color} strokeWidth="1.5"/>
      </svg>
    </div>
  );
}

export function RoyalDividerLarge({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg width="300" height="40" viewBox="0 0 300 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Left side */}
        <path d="M0 20 L70 20" stroke="url(#gold-gradient-left)" strokeWidth="2"/>
        <circle cx="80" cy="20" r="5" fill="#C9A55A"/>
        <circle cx="80" cy="20" r="3" fill="#D4AF78"/>
        <circle cx="95" cy="20" r="2.5" fill="#C9A55A"/>
        
        {/* Center ornament */}
        <path d="M110 20 L120 10 L130 20 L120 30 Z" fill="#C9A55A"/>
        <circle cx="120" cy="20" r="3" fill="#D4AF78"/>
        <path d="M135 15 L145 20 L135 25 Z" fill="#D4AF78"/>
        <circle cx="150" cy="20" r="6" fill="none" stroke="#C9A55A" strokeWidth="1.5"/>
        <circle cx="150" cy="20" r="3" fill="#D4AF78"/>
        <path d="M165 15 L155 20 L165 25 Z" fill="#D4AF78"/>
        <path d="M170 20 L180 10 L190 20 L180 30 Z" fill="#C9A55A"/>
        <circle cx="180" cy="20" r="3" fill="#D4AF78"/>
        
        {/* Right side */}
        <circle cx="205" cy="20" r="2.5" fill="#C9A55A"/>
        <circle cx="220" cy="20" r="5" fill="#C9A55A"/>
        <circle cx="220" cy="20" r="3" fill="#D4AF78"/>
        <path d="M230 20 L300 20" stroke="url(#gold-gradient-right)" strokeWidth="2"/>
        
        <defs>
          <linearGradient id="gold-gradient-left" x1="0" y1="0" x2="70" y2="0">
            <stop offset="0%" stopColor="#C9A55A" stopOpacity="0"/>
            <stop offset="100%" stopColor="#C9A55A" stopOpacity="1"/>
          </linearGradient>
          <linearGradient id="gold-gradient-right" x1="230" y1="0" x2="300" y2="0">
            <stop offset="0%" stopColor="#C9A55A" stopOpacity="1"/>
            <stop offset="100%" stopColor="#C9A55A" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function RoyalCornerOrnament({ className = '', position = 'top-left' }: { className?: string; position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) {
  const rotation = {
    'top-left': '0',
    'top-right': '90',
    'bottom-right': '180',
    'bottom-left': '270',
  }[position];

  return (
    <div className={className} style={{ transform: `rotate(${rotation}deg)` }}>
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0 L0 40 C0 40 10 35 20 30 C30 25 40 10 40 0 Z" fill="url(#corner-gradient)" fillOpacity="0.4"/>
        <path d="M0 0 L0 25 C0 25 8 22 15 18 C22 14 25 8 25 0 Z" stroke="#C9A55A" strokeWidth="1.5" fill="none"/>
        <circle cx="12" cy="12" r="2" fill="#D4AF78"/>
        <path d="M5 5 L10 0" stroke="#C9A55A" strokeWidth="1"/>
        <path d="M0 10 L5 5" stroke="#C9A55A" strokeWidth="1"/>
        <defs>
          <linearGradient id="corner-gradient" x1="0" y1="0" x2="40" y2="40">
            <stop offset="0%" stopColor="#C9A55A"/>
            <stop offset="100%" stopColor="#D4AF78"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
