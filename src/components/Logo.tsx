import React from 'react';

interface LogoProps {
  className?: string;
  subtext?: string;
  showSubtext?: boolean;
  variant?: 'light' | 'dark' | 'amber';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  subtext = 'A Kundabox Corporation portal', 
  showSubtext = true,
  variant = 'light',
  size = 'md'
}) => {
  const iconSize = size === 'sm' ? 'w-[26px] h-[26px]' : size === 'lg' ? 'w-[38px] h-[38px]' : 'w-[32px] h-[32px]';
  const textSize = size === 'sm' ? 'text-[19px]' : size === 'lg' ? 'text-[26px]' : 'text-[23px]';

  // SVG bridge mark colors according to lockup variant
  const circleFill = variant === 'amber' ? '#0C1D30' : '#EAA53A';
  const bridgeColor = variant === 'amber' ? '#EAA53A' : '#0C1D30';
  const kColor = variant === 'amber' ? '#0C1D30' : '#EAA53A';
  const bridgeTextColor = variant === 'dark' ? '#FFFFFF' : '#0C1D30';

  return (
    <div className={`flex items-center gap-[12px] sm:gap-[14px] shrink-0 ${className}`}>
      <div className="flex items-center gap-[9px] sm:gap-[11px] shrink-0">
        {/* Official kbridge SVG Icon */}
        <svg 
          className={`${iconSize} shrink-0 transition-transform duration-200 group-hover:scale-105`} 
          viewBox="0 0 100 100" 
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="50" fill={circleFill} />
          {/* Arch */}
          <path 
            d="M26 58 A24 24 0 0 1 74 58" 
            stroke={bridgeColor} 
            strokeWidth="6.8" 
            strokeLinecap="round" 
            fill="none" 
          />
          {/* Crossbar */}
          <path 
            d="M23 58 L77 58" 
            stroke={bridgeColor} 
            strokeWidth="6.8" 
            strokeLinecap="round" 
          />
          {/* Vertical Pillars */}
          <path 
            d="M39.5 38 L39.5 69" 
            stroke={bridgeColor} 
            strokeWidth="6.8" 
            strokeLinecap="round" 
          />
          <path 
            d="M60.5 38 L60.5 69" 
            stroke={bridgeColor} 
            strokeWidth="6.8" 
            strokeLinecap="round" 
          />
        </svg>

        {/* Wordmark with amber 'k' and navy 'bridge' */}
        <span className={`font-sans font-medium ${textSize} tracking-tight leading-none select-none flex items-baseline`}>
          <span style={{ color: kColor }}>k</span>
          <span style={{ color: bridgeTextColor }}>bridge</span>
        </span>
      </div>

      {showSubtext && (
        <div className={`hidden sm:block text-[11px] border-l pl-3.5 leading-tight max-w-[160px] tracking-normal font-body ${
          variant === 'dark' ? 'text-gray-300 border-gray-600' : 'text-[#30455C] border-[#CFCDC0]'
        }`}>
          {subtext}
        </div>
      )}
    </div>
  );
};
