import React from 'react';

interface LogoProps {
  className?: string;
  subtext?: string;
  showSubtext?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', subtext = 'A Kundabox Corporation portal', showSubtext = true }) => {
  return (
    <div className={`flex items-center gap-[12px] sm:gap-[14px] shrink-0 ${className}`}>
      <div className="flex items-center gap-[8px] sm:gap-[10px] shrink-0">
        {/* Boxed 'K' logo matching uploaded image */}
        <div className="w-[30px] h-[30px] border-[1.5px] border-[#101C2B] flex items-center justify-center font-mono font-semibold text-[16px] text-[#101C2B] leading-none select-none rounded-[1px]">
          K
        </div>
        <span className="font-body font-medium text-[22px] tracking-tight text-[#101C2B] leading-none">
          kbridge
        </span>
      </div>

      {showSubtext && (
        <div className="hidden sm:block text-[11px] text-[#3C4859] border-l border-[#B9B6A6] pl-3.5 leading-tight max-w-[160px] tracking-normal font-body">
          {subtext}
        </div>
      )}
    </div>
  );
};
