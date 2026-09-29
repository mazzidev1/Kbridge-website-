import React from 'react';

interface CpuKbridgeIconProps {
  className?: string;
}

export const CpuKbridgeIcon: React.FC<CpuKbridgeIconProps> = ({ className = "w-10 h-10" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} transition-transform duration-200 hover:scale-105`}
    >
      {/* --- CPU Connector Pins (3 pins per side) --- */}
      {/* Top Pins */}
      <line x1="36" y1="8" x2="36" y2="20" stroke="#0C1D30" strokeWidth="5.5" strokeLinecap="round" />
      <line x1="50" y1="8" x2="50" y2="20" stroke="#0C1D30" strokeWidth="5.5" strokeLinecap="round" />
      <line x1="64" y1="8" x2="64" y2="20" stroke="#0C1D30" strokeWidth="5.5" strokeLinecap="round" />

      {/* Bottom Pins */}
      <line x1="36" y1="80" x2="36" y2="92" stroke="#0C1D30" strokeWidth="5.5" strokeLinecap="round" />
      <line x1="50" y1="80" x2="50" y2="92" stroke="#0C1D30" strokeWidth="5.5" strokeLinecap="round" />
      <line x1="64" y1="80" x2="64" y2="92" stroke="#0C1D30" strokeWidth="5.5" strokeLinecap="round" />

      {/* Left Pins */}
      <line x1="8" y1="36" x2="20" y2="36" stroke="#0C1D30" strokeWidth="5.5" strokeLinecap="round" />
      <line x1="8" y1="50" x2="20" y2="50" stroke="#0C1D30" strokeWidth="5.5" strokeLinecap="round" />
      <line x1="8" y1="64" x2="20" y2="64" stroke="#0C1D30" strokeWidth="5.5" strokeLinecap="round" />

      {/* Right Pins */}
      <line x1="80" y1="36" x2="92" y2="36" stroke="#0C1D30" strokeWidth="5.5" strokeLinecap="round" />
      <line x1="80" y1="50" x2="92" y2="50" stroke="#0C1D30" strokeWidth="5.5" strokeLinecap="round" />
      <line x1="80" y1="64" x2="92" y2="64" stroke="#0C1D30" strokeWidth="5.5" strokeLinecap="round" />

      {/* --- Outer Chip Package Frame --- */}
      <rect 
        x="19" 
        y="19" 
        width="62" 
        height="62" 
        rx="9" 
        fill="#EEEEE6" 
        stroke="#0C1D30" 
        strokeWidth="6" 
        strokeLinejoin="round" 
      />

      {/* --- Inner Die / Central Box (with amber background) --- */}
      <rect 
        x="29.5" 
        y="29.5" 
        width="41" 
        height="41" 
        rx="6" 
        fill="#EAA53A" 
        stroke="#0C1D30" 
        strokeWidth="3.5" 
      />

      {/* --- Official kbridge Bridge Icon in the Inner Box --- */}
      {/* Arch */}
      <path 
        d="M38.5 54 A11.5 11.5 0 0 1 61.5 54" 
        stroke="#0C1D30" 
        strokeWidth="3.3" 
        strokeLinecap="round" 
        fill="none" 
      />
      {/* Crossbar */}
      <path 
        d="M37 54 L63 54" 
        stroke="#0C1D30" 
        strokeWidth="3.3" 
        strokeLinecap="round" 
      />
      {/* Vertical Support Columns */}
      <path 
        d="M44.5 44 L44.5 59.5" 
        stroke="#0C1D30" 
        strokeWidth="3.3" 
        strokeLinecap="round" 
      />
      <path 
        d="M55.5 44 L55.5 59.5" 
        stroke="#0C1D30" 
        strokeWidth="3.3" 
        strokeLinecap="round" 
      />
    </svg>
  );
};
