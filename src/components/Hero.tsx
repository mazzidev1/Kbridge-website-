import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { VaultGlyph, LedgerWalletGlyph, RWATokenGlyph } from './AnimatedGlyphs';
import { CpuKbridgeIcon } from './CpuKbridgeIcon';
import founderImage from '../assets/images/founders_visible_faces_1790669395769.jpg';

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
  const [imageError, setImageError] = useState(false);

  const invoiceTypes = {
    construction: { label: 'Construction', amount: '85,000 USDC', terms: '20 days', advanceRate: '90%' },
    logistics: { label: 'Logistics', amount: '140,000 USDC', terms: '30 days', advanceRate: '88%' },
    manufacturing: { label: 'Export Goods', amount: '210,000 USDC', terms: '45 days', advanceRate: '92%' },
  };

  const currentInvoice = invoiceTypes[activeTab];

  const handleGetPaidClick = () => {
    setIsPaid(true);
    setTimeout(() => {
      setIsPaid(false);
    }, 4000);
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-36 sm:pt-20 sm:pb-48 lg:pb-56 border-b border-[#CFCDC0]">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#EAA53A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1120px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 sm:gap-14 items-center">
        
        {/* Left Column: Heading and CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="font-body font-semibold text-[12px] tracking-wider uppercase text-[#0C1D30] mb-5 flex items-center gap-2">
            <span>The bridge for private credit &amp; stablecoin liquidity</span>
            <span className="text-[#30455C]">•</span>
            <span className="text-[#EAA53A] font-medium">Built on Hedera</span>
          </div>
          
          <h1 className="font-display font-medium text-[38px] sm:text-[48px] lg:text-[54px] leading-[1.08] tracking-tight text-[#0C1D30] max-w-[560px]">
            Turn unpaid invoices into immediate working capital.
          </h1>
          
          <p className="font-body text-[17px] text-[#30455C] max-w-[520px] my-6 leading-[1.65]">
            Kbridge connects institutional stablecoin capital with verified trade receivables through tokenized investment pools on the Hedera network. Advance up to 90% of your receivables in 24 hours in USDC without debt or dilution.
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
              className="btn btn-ghost hover:bg-[#0C1D30]/5 transition-colors cursor-pointer border border-[#CFCDC0]"
            >
              Join waitlist
            </button>
          </div>

          <div className="font-body text-[13px] text-[#30455C] flex flex-wrap items-center gap-2 font-medium pt-2 border-t border-[#CFCDC0]/60 max-w-[520px]">
            <span>100% USDC Settlement</span>
            <span>•</span>
            <span>Marked to pool performance</span>
            <span>•</span>
            <span className="text-[#0C1D30] font-semibold">Hedera Network</span>
          </div>
        </motion.div>

        {/* Right Hero Illustration with Founder Image and Overlay Floating Invoice Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Main Visual Frame with Realistic Founder & Working Environment */}
          <div className="relative w-full max-w-[500px] aspect-[4/3.6] rounded-[4px] border border-[#CFCDC0] shadow-xl overflow-hidden bg-[#E2E1D7] group">
            {!imageError ? (
              <img 
                src={founderImage} 
                alt="Trade supplier founders in a modern export logistics operations office" 
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-[center_12%] filter grayscale-[8%] contrast-[104%] group-hover:scale-[1.02] transition-transform duration-700"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#101C2B] via-[#0C1D30] to-[#182C44] flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 rounded-[8px] bg-[#EAA53A]/20 border border-[#EAA53A]/40 flex items-center justify-center mb-4">
                  <CpuKbridgeIcon className="w-10 h-10" />
                </div>
                <span className="font-display text-[20px] text-white font-medium">Hedera Tokenized Receivables</span>
                <span className="text-[12.5px] font-mono text-[#EAA53A] mt-1.5">100% USDC Liquidity Engine</span>
              </div>
            )}
            
            {/* Subtle Gradient Vignette restricted to bottom 25% only */}
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0C1D30]/65 via-[#0C1D30]/15 to-transparent pointer-events-none" />

            {/* Micro Badge for Context on Photo - top right corner, no dot */}
            <div className="absolute top-3 right-3 text-white/90 text-[11px] font-mono pointer-events-none z-20 flex items-center">
              <span className="bg-[#0C1D30]/80 px-2.5 py-1 rounded-[2px] backdrop-blur-xs border border-white/10 text-white font-mono text-[11px]">
                Verified Trade Originator • Hedera
              </span>
            </div>

            {/* Interactive Feature Glyphs Overlay on Top of Hero Image */}
            <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5">
              
              {/* Vault Glyph Button */}
              <div className="relative group/tooltip">
                <button
                  type="button"
                  onClick={() => setActiveBadge('lock')}
                  aria-label="Toggle Vault Security Specification"
                  title="Audited Smart Contract Vault"
                  className={`w-9 h-9 sm:w-11 sm:h-11 bg-white shadow-2xl flex items-center justify-center rounded-[6px] border cursor-pointer transition-all p-1.5 sm:p-2 ${
                    activeBadge === 'lock' ? 'border-[#EAA53A] ring-2 ring-[#EAA53A]/40 scale-105 bg-white' : 'border-gray-200'
                  }`}
                >
                  <VaultGlyph active={activeBadge === 'lock'} className="w-full h-full text-[#0C1D30]" />
                </button>
                <div className="absolute left-0 top-full mt-1.5 hidden group-hover/tooltip:block bg-[#0C1D30] text-white text-[11px] font-mono py-1 px-2 rounded whitespace-nowrap z-30 shadow-lg">
                  Audited Hedera Vault
                </div>
              </div>

              {/* Ledger Wallet Glyph Button */}
              <div className="relative group/tooltip">
                <button
                  type="button"
                  onClick={() => setActiveBadge('wallet')}
                  aria-label="Toggle Ledger Wallet Verification"
                  title="Immutable Hedera Ledger"
                  className={`w-9 h-9 sm:w-11 sm:h-11 bg-white shadow-2xl flex items-center justify-center rounded-[6px] border cursor-pointer transition-all p-1.5 sm:p-2 ${
                    activeBadge === 'wallet' ? 'border-[#EAA53A] ring-2 ring-[#EAA53A]/40 scale-105 bg-white' : 'border-gray-200'
                  }`}
                >
                  <LedgerWalletGlyph active={activeBadge === 'wallet'} className="w-full h-full text-[#0C1D30]" />
                </button>
                <div className="absolute left-0 top-full mt-1.5 hidden group-hover/tooltip:block bg-[#0C1D30] text-white text-[11px] font-mono py-1 px-2 rounded whitespace-nowrap z-30 shadow-lg">
                  Hedera Consensus (HCS)
                </div>
              </div>

              {/* RWA Token Capital Glyph Button */}
              <div className="relative group/tooltip">
                <button
                  type="button"
                  onClick={() => setActiveBadge('dollar')}
                  aria-label="Toggle Tokenized RWA Working Capital"
                  title="Tokenized RWA Working Capital"
                  className={`w-9 h-9 sm:w-11 sm:h-11 bg-white shadow-2xl flex items-center justify-center rounded-[6px] border cursor-pointer transition-all p-1.5 sm:p-2 ${
                    activeBadge === 'dollar' ? 'border-[#EAA53A] ring-2 ring-[#EAA53A]/40 scale-105 bg-white' : 'border-gray-200'
                  }`}
                >
                  <RWATokenGlyph active={activeBadge === 'dollar'} className="w-full h-full text-[#0C1D30]" />
                </button>
                <div className="absolute left-0 top-full mt-1.5 hidden group-hover/tooltip:block bg-[#0C1D30] text-white text-[11px] font-mono py-1 px-2 rounded whitespace-nowrap z-30 shadow-lg">
                  USDC Receivable Pools
                </div>
              </div>

            </div>
          </div>

          {/* Floating Interactive Live Invoice Payout Card - Shifted down to fully reveal faces */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="absolute -bottom-28 sm:-bottom-36 md:-bottom-40 lg:-bottom-48 right-1 sm:-right-4 lg:-right-6 w-[285px] sm:w-[325px] bg-white border border-[#CFCDC0] rounded-[4px] shadow-2xl p-4 sm:p-4.5 z-20 font-body"
          >
            <div>
              {/* Tab Selector for Quick Industry Mockup */}
              <div className="flex border-b border-gray-100 pb-2.5 mb-3 gap-1.5">
                {(['construction', 'logistics', 'manufacturing'] as const).map((key) => (
                  <button
                    key={key}
                    onClick={() => { setActiveTab(key); setIsPaid(false); }}
                    className={`text-[11px] font-mono px-2 py-1 rounded-[2px] transition-colors cursor-pointer capitalize ${
                      activeTab === key
                        ? 'bg-[#0C1D30] text-white font-medium'
                        : 'text-gray-500 hover:text-black hover:bg-gray-100'
                    }`}
                  >
                    {key}
                  </button>
                ))}
              </div>

              <div>
                {/* Main Card Content */}
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-display font-medium text-[22px] sm:text-[24px] text-[#0C1D30] leading-none mb-1">
                        Invoice
                      </h3>
                      <p className="font-mono text-[11px] text-gray-500 uppercase">
                        #INV-{activeTab}-2026 • Hedera
                      </p>
                    </div>

                    <span className="bg-[#EAA53A]/15 text-[#0C1D30] font-mono text-[11px] font-semibold px-2.5 py-1 rounded-[2px] border border-[#EAA53A]/30">
                      {currentInvoice.amount}
                    </span>
                  </div>

                  {/* Service Badge & Term details */}
                  <div className="space-y-2.5 my-4 pt-3 border-t border-gray-100">
                    <div className="flex justify-between items-center text-[13px]">
                      <div className="flex items-center gap-2">
                        <span className="w-16 h-3 bg-[#EAA53A]/30 rounded-full inline-block" />
                        <span className="font-medium text-gray-700">{currentInvoice.label}</span>
                      </div>
                      <span className="font-mono text-[12px] text-gray-500">Advance {currentInvoice.advanceRate}</span>
                    </div>

                    <div className="flex justify-between items-center text-[13px]">
                      <span className="text-gray-500">Payment Terms</span>
                      <span className="font-medium text-[#0C1D30] font-mono">{currentInvoice.terms}</span>
                    </div>

                    <div className="flex justify-between items-center text-[11.5px] font-mono text-[#30455C] pt-1">
                      <span>Network / Asset</span>
                      <span className="text-[#0C1D30] font-semibold">Hedera • USDC</span>
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
                      className="bg-[#0C1D30] text-white p-3 rounded-[3px] text-center font-medium text-[13.5px] flex items-center justify-center gap-2 shadow-inner border border-[#EAA53A]/40"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#EAA53A] animate-bounce" />
                      Payout Sent in USDC on Hedera
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
                      className="w-full bg-[#0C1D30] hover:bg-[#EAA53A] hover:text-[#0C1D30] text-[#F7F7F2] font-medium py-3 rounded-[3px] text-[14.5px] transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer group"
                    >
                      <span>Get Instant Payout in USDC</span>
                      <ArrowRight className="w-4 h-4 text-[#EAA53A] group-hover:text-[#0C1D30] group-hover:translate-x-0.5 transition-all" />
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
