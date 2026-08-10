import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { VaultGlyph, LedgerWalletGlyph, RWATokenGlyph } from './AnimatedGlyphs';

const founderImg = '/src/assets/images/hero_founder_portrait_1786354465043.jpg';

interface HeroProps {
  onOpenDemo: () => void;
  onOpenWaitlist: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenDemo,
  onOpenWaitlist,
}) => {
  const [activeTab, setActiveTab] = useState<'construction' | 'logistics' | 'manufacturing'>('construction');
  const [isPaid, setIsPaid] = useState(false);
  const [activeBadge, setActiveBadge] = useState<'lock' | 'wallet' | 'dollar'>('dollar');

  const invoiceTypes = {
    construction: { label: 'Construction', amount: '$85,000', terms: '20 days', advanceRate: '90%' },
    logistics: { label: 'Logistics', amount: '$140,000', terms: '30 days', advanceRate: '88%' },
    manufacturing: { label: 'Export Goods', amount: '$210,000', terms: '45 days', advanceRate: '92%' },
  };

  const currentInvoice = invoiceTypes[activeTab];

  const handleGetPaidClick = () => {
    setIsPaid(true);
    setTimeout(() => {
      setIsPaid(false);
    }, 4000);
  };

  return (
    <section className="py-16 md:py-24 border-b border-[#CFCDC0] relative overflow-hidden bg-[#EEEEE6]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2F5D50]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center">
        {/* Left Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="font-body font-semibold text-[12px] tracking-wider uppercase text-[#2F5D50] mb-5 flex items-center gap-2.5">
            <span className="w-5.5 h-[1px] bg-[#2F5D50]"></span>
            Instant invoice liquidity, verified on-chain
          </div>
          
          <h1 className="font-display font-medium text-[38px] sm:text-[48px] lg:text-[54px] leading-[1.08] tracking-tight text-[#101C2B] max-w-[560px]">
            Turn unpaid invoices into immediate working capital.
          </h1>
          
          <p className="font-body text-[17.5px] text-[#3C4859] max-w-[500px] my-6 leading-[1.65]">
            kbridge connects business owners and financing partners to transparent institutional liquidity. Advance up to 90% of your receivables in 24 hours without debt or dilution.
          </p>
          
          <div className="flex flex-wrap items-center gap-3.5 mb-8">
            <button
              onClick={onOpenDemo}
              className="btn btn-primary shadow-md hover:shadow-lg transition-all flex items-center gap-2 group cursor-pointer"
            >
              Book a demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            
            <button
              onClick={onOpenWaitlist}
              className="btn btn-ghost hover:bg-[#101C2B]/5 transition-colors cursor-pointer border border-[#CFCDC0]"
            >
              Join waitlist
            </button>
          </div>

          <div className="font-body text-[13px] text-[#3C4859] flex items-center gap-2.5 font-medium pt-2 border-t border-[#CFCDC0]/60 max-w-[480px]">
            <span className="w-2 h-2 rounded-full bg-[#2F5D50] animate-pulse"></span>
            Non-recourse options • Bank-grade compliance • Institutional investors
          </div>
        </motion.div>

        {/* Right Hero Illustration with Founder Image and Overlay Floating Invoice Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-none w-full"
        >
          {/* Main Card Frame - Taller & Wider to show more of smiling founder */}
          <div className="relative rounded-[8px] overflow-hidden shadow-2xl border border-[#101C2B]/10 bg-[#101C2B] h-[520px] sm:h-[580px] lg:h-[620px] flex items-end">
            {/* Background Founder Photo with framing optimized for smiling face */}
            <img
              src={founderImg}
              alt="Business founder smiling"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-[center_15%] opacity-95 filter contrast-[1.02]"
            />
            
            {/* Soft Subtle Gradient Overlay that preserves brightness on her face */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#101C2B]/80 via-[#101C2B]/10 to-transparent" />

            {/* Floating Interactive Elements Group */}
            <div className="relative z-20 w-full p-3.5 sm:p-6 lg:p-7 flex items-end gap-2.5 sm:gap-4">
              
              {/* Stacked Icon Badge Column (Left Side) - Animated Custom Vector Glyphs with Random Bounce/Shake */}
              <div className="flex flex-col gap-2.5 sm:gap-3 shrink-0">
                {/* Vault Security Glyph Button */}
                <motion.button
                  animate={{
                    y: [0, -7, 1, -5, 0],
                    rotate: [0, -5, 6, -3, 0],
                  }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 0.1,
                  }}
                  whileHover={{ scale: 1.15, rotate: 0 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveBadge('lock')}
                  className={`w-10 h-10 sm:w-14 sm:h-14 bg-white shadow-2xl flex items-center justify-center rounded-[6px] border cursor-pointer transition-all p-2 sm:p-2.5 ${
                    activeBadge === 'lock' ? 'border-[#2F5D50] ring-2 ring-[#2F5D50]/30 scale-105 bg-white' : 'border-gray-200'
                  }`}
                  title="Audited Vault Smart Contract"
                >
                  <VaultGlyph active={activeBadge === 'lock'} className="w-full h-full text-[#2F5D50]" />
                </motion.button>

                {/* Ledger Settlement Glyph Button */}
                <motion.button
                  animate={{
                    y: [0, -8, 2, -4, 0],
                    rotate: [0, 6, -5, 4, 0],
                  }}
                  transition={{
                    duration: 2.7,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 0.8,
                  }}
                  whileHover={{ scale: 1.15, rotate: 0 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveBadge('wallet')}
                  className={`w-10 h-10 sm:w-14 sm:h-14 bg-white shadow-2xl flex items-center justify-center rounded-[6px] border cursor-pointer transition-all p-2 sm:p-2.5 ${
                    activeBadge === 'wallet' ? 'border-[#2F5D50] ring-2 ring-[#2F5D50]/30 scale-105 bg-white' : 'border-gray-200'
                  }`}
                  title="Instant Ledger Settlement"
                >
                  <LedgerWalletGlyph active={activeBadge === 'wallet'} className="w-full h-full text-[#2F5D50]" />
                </motion.button>

                {/* RWA Token Capital Glyph Button */}
                <motion.button
                  animate={{
                    y: [0, -6, 2, -6, 0],
                    rotate: [0, -4, 5, -2, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                  whileHover={{ scale: 1.15, rotate: 0 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveBadge('dollar')}
                  className={`w-10 h-10 sm:w-14 sm:h-14 bg-white shadow-2xl flex items-center justify-center rounded-[6px] border cursor-pointer transition-all p-2 sm:p-2.5 ${
                    activeBadge === 'dollar' ? 'border-[#2F5D50] ring-2 ring-[#2F5D50]/30 scale-105 bg-white' : 'border-gray-200'
                  }`}
                  title="Tokenized RWA Working Capital"
                >
                  <RWATokenGlyph active={activeBadge === 'dollar'} className="w-full h-full text-[#2F5D50]" />
                </motion.button>
              </div>

              {/* White Invoice Card (Right Side) */}
              <motion.div 
                layout
                className="flex-grow bg-white/98 backdrop-blur-xs rounded-[4px] p-4 sm:p-6 shadow-2xl border border-gray-100 text-[#101C2B] font-body min-h-[200px] sm:min-h-[210px] flex flex-col justify-between max-w-[380px]"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-display font-medium text-[22px] sm:text-[24px] text-[#101C2B] leading-none mb-1">
                        Invoice
                      </h3>
                      <p className="font-mono text-[11px] text-gray-500 uppercase">
                        #INV-{activeTab}-2026
                      </p>
                    </div>

                    <span className="bg-[#2F5D50]/10 text-[#2F5D50] font-mono text-[11px] font-semibold px-2.5 py-1 rounded-[2px]">
                      {currentInvoice.amount}
                    </span>
                  </div>

                  {/* Service Badge & Term details */}
                  <div className="space-y-2.5 my-4 pt-3 border-t border-gray-100">
                    <div className="flex justify-between items-center text-[13px]">
                      <div className="flex items-center gap-2">
                        <span className="w-16 h-3 bg-gray-200 rounded-full inline-block" />
                        <span className="font-medium text-gray-700">{currentInvoice.label}</span>
                      </div>
                      <span className="font-mono text-[12px] text-gray-500">Advance {currentInvoice.advanceRate}</span>
                    </div>

                    <div className="flex justify-between items-center text-[13px]">
                      <span className="text-gray-500">Payment Terms</span>
                      <span className="font-medium text-[#101C2B] font-mono">{currentInvoice.terms}</span>
                    </div>
                  </div>
                </div>

                {/* Get Paid Action Button / Approved State */}
                <AnimatePresence mode="wait">
                  {isPaid ? (
                    <motion.div
                      key="paid"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="bg-[#2F5D50] text-white p-3 rounded-[3px] text-center font-medium text-[13.5px] flex items-center justify-center gap-2 shadow-inner"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-300 animate-bounce" />
                      Payout Sent • Funds in Account
                    </motion.div>
                  ) : (
                    <motion.button
                      key="unpaid"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleGetPaidClick}
                      className="w-full bg-[#2F5D50] hover:bg-[#23473D] text-[#F7F7F2] font-medium py-3 rounded-[3px] text-[14.5px] transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer group"
                    >
                      <span>Get Paid</span>
                      <Sparkles className="w-4 h-4 text-amber-300 group-hover:rotate-12 transition-transform" />
                    </motion.button>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

