import React from 'react';
import { motion } from 'motion/react';

interface GlyphProps {
  className?: string;
  size?: number;
  active?: boolean;
}

/**
 * Animated Vault / Security Glyph
 */
export const VaultGlyph: React.FC<GlyphProps> = ({ className = "text-[#2F5D50]", active = false }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
        {/* Outer Hexagon Shield Frame */}
        <path
          d="M16 3L27 8V16C27 22.5 22.2 27.5 16 29C9.8 27.5 5 22.5 5 16V8L16 3Z"
          fill="currentColor"
          fillOpacity={active ? "0.15" : "0.08"}
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        {/* Animated Spinning Lock Dial Ring */}
        <motion.circle
          cx="16"
          cy="15"
          r="6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeDasharray="3 3"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          style={{ originX: "16px", originY: "15px" }}
        />

        {/* Inner Lock Shackle & Keyhole */}
        <motion.path
          d="M13 13V11C13 9.34 14.34 8 16 8C17.66 8 19 9.34 19 11V13"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          animate={active ? { y: [0, -1, 0] } : {}}
          transition={{ duration: 1.5, repeat: Infinity }}
        />

        {/* Pulsing Core Center Point */}
        <motion.circle
          cx="16"
          cy="16"
          r="2"
          fill="currentColor"
          animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
};

/**
 * Animated Wallet / Ledger Settlement Glyph
 */
export const LedgerWalletGlyph: React.FC<GlyphProps> = ({ className = "text-[#2F5D50]", active = false }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
        {/* Back Card Layer */}
        <motion.path
          d="M6 9C6 7.89543 6.89543 7 8 7H22C23.1046 7 24 7.89543 24 9V11H6V9Z"
          fill="currentColor"
          fillOpacity="0.12"
          stroke="currentColor"
          strokeWidth="1.5"
          animate={{ y: [0, -1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Main Wallet Base Container */}
        <rect
          x="5"
          y="11"
          width="22"
          height="14"
          rx="2.5"
          fill="currentColor"
          fillOpacity={active ? "0.18" : "0.08"}
          stroke="currentColor"
          strokeWidth="1.8"
        />

        {/* Animated Digital Fold flap */}
        <path
          d="M5 15H27"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="2 2"
          opacity="0.6"
        />

        {/* Side Token Clasp / Chip */}
        <motion.rect
          x="19"
          y="15"
          width="7"
          height="6"
          rx="1.5"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.2"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ originX: "22.5px", originY: "18px" }}
        />

        {/* Glowing Chip Indicator */}
        <motion.circle
          cx="22.5"
          cy="18"
          r="1"
          fill="#FFF"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
      </svg>
    </div>
  );
};

/**
 * Animated RWA Token / Capital Glyph
 */
export const RWATokenGlyph: React.FC<GlyphProps> = ({ className = "text-[#2F5D50]", active = false }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
        {/* Outer Orbit Token Ring */}
        <motion.circle
          cx="16"
          cy="16"
          r="12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="8 4"
          animate={{ rotate: -360 }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          style={{ originX: "16px", originY: "16px" }}
        />

        {/* Inner Isometric RWA Block / Token Shield */}
        <motion.path
          d="M16 6L24 11V21L16 26L8 21V11L16 6Z"
          fill="currentColor"
          fillOpacity={active ? "0.22" : "0.10"}
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        {/* Currency / Liquidity Star Node */}
        <motion.path
          d="M16 10L17.5 14.5L22 16L17.5 17.5L16 22L14.5 17.5L10 16L14.5 14.5L16 10Z"
          fill="currentColor"
          animate={{ scale: [0.85, 1.15, 0.85], rotate: [0, 90, 180, 270, 360] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ originX: "16px", originY: "16px" }}
        />
      </svg>
    </div>
  );
};

/**
 * Animated Lightning Liquidity Glyph
 */
export const LightningGlyph: React.FC<GlyphProps> = ({ className = "text-[#2F5D50]" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <motion.path
          d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
          fill="currentColor"
          fillOpacity="0.8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          animate={{
            fillOpacity: [0.6, 1, 0.6],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
};

/**
 * Animated Shield Check Glyph
 */
export const AuditShieldGlyph: React.FC<GlyphProps> = ({ className = "text-[#2F5D50]" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path
          d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path
          d="M9 12L11 14L15 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
};

/**
 * Animated Notification Bell Glyph
 */
export const NotificationBellGlyph: React.FC<GlyphProps> = ({ className = "text-[#2F5D50]" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <motion.path
          d="M18 8A6 6 0 0 0 6 8C6 15 3 17 3 17H21S18 15 18 8Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ rotate: [-8, 8, -8] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ originX: "12px", originY: "2px" }}
        />
        <motion.path
          d="M13.73 21A2 2 0 0 1 10.27 21"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

/**
 * Animated Document Report Glyph
 */
export const DocumentReportGlyph: React.FC<GlyphProps> = ({ className = "text-[#2F5D50]" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path
          d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M14 2V8H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <motion.path
          d="M12 18V12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{ y: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.path
          d="M9 15L12 18L15 15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ y: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </svg>
    </div>
  );
};

/**
 * Animated On-Chain Database Glyph
 */
export const OnChainDatabaseGlyph: React.FC<GlyphProps> = ({ className = "text-[#2F5D50]" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="1.8" />
        <motion.path
          d="M21 12C21 13.66 16.97 15 12 15C7.03 15 3 13.66 3 12"
          stroke="currentColor"
          strokeWidth="1.8"
          animate={{ strokeOpacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <path d="M3 5V19C3 20.66 7.03 22 12 22C16.97 22 21 20.66 21 19V5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    </div>
  );
};

/**
 * Animated User Ease Glyph
 */
export const UserEaseGlyph: React.FC<GlyphProps> = ({ className = "text-[#2F5D50]" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <motion.path
          d="M16 11L18 13L22 9"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
      </svg>
    </div>
  );
};

/**
 * Animated Responsive Screen Glyph
 */
export const ResponsiveScreenGlyph: React.FC<GlyphProps> = ({ className = "text-[#2F5D50]" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <motion.circle
          cx="12"
          cy="10"
          r="2"
          fill="currentColor"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </svg>
    </div>
  );
};

/**
 * Animated Cpu Partner Infrastructure Glyph
 */
export const CpuPartnerGlyph: React.FC<GlyphProps> = ({ className = "text-[#2F5D50]" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <motion.rect
          x="8"
          y="8"
          width="8"
          height="8"
          rx="1"
          fill="currentColor"
          fillOpacity="0.2"
          stroke="currentColor"
          strokeWidth="1.5"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ originX: "12px", originY: "12px" }}
        />
        <path d="M9 1V4M15 1V4M9 20V23M15 20V23M1 9H4M1 15H4M20 9H23M20 15H23" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </div>
  );
};

/**
 * Animated Step 1 Originate Document Glyph
 */
export const OriginateDocGlyph: React.FC<GlyphProps> = ({ className = "text-[#2F5D50]" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <motion.path
          d="M9 12L11 14L15 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ scale: [0.95, 1.1, 0.95] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </svg>
    </div>
  );
};

/**
 * Animated Step 2 Fractionalize Token Glyph
 */
export const FractionalizeTokenGlyph: React.FC<GlyphProps> = ({ className = "text-[#2F5D50]" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <motion.circle
          cx="12"
          cy="12"
          r="9"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeDasharray="4 3"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ originX: "12px", originY: "12px" }}
        />
        <motion.path
          d="M12 7V17M7 12H17"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

/**
 * Animated Step 3 Settlement Transfer Glyph
 */
export const SettleTransferGlyph: React.FC<GlyphProps> = ({ className = "text-[#2F5D50]" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <motion.path
          d="M17 1 routing 7M7 17L17 7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <motion.path
          d="M7 10V17H14"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ x: [-1, 2, -1], y: [1, -2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M17 14V7H10"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ x: [1, -2, 1], y: [-1, 2, -1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
};
