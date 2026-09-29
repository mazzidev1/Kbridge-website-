import React from 'react';
import { ShieldCheck, Database, ArrowUpRight } from 'lucide-react';
import { CpuKbridgeIcon } from './CpuKbridgeIcon';

export const PartnerBanner: React.FC = () => {
  return (
    <section className="bg-[#EEEEE6] text-[#0C1D30] py-10 border-y border-[#CFCDC0]">
      <div className="max-w-[1120px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Main Title & Subtitle */}
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[8px] bg-[#EAA53A]/15 text-[#0C1D30] flex items-center justify-center shrink-0 border border-[#EAA53A]/35 shadow-xs">
              <CpuKbridgeIcon className="w-9 h-9 sm:w-11 sm:h-11" />
            </div>

            <div>
              <div className="font-body font-semibold text-[11px] text-[#EAA53A] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EAA53A]" />
                Hedera Network Infrastructure • 100% USDC Tokenized Receivables
              </div>
              <h2 className="font-display font-medium text-[20px] sm:text-[22px] leading-tight text-[#0C1D30]">
                Engineering Infrastructure for RWA Receivable Tokenization
              </h2>
            </div>
          </div>

          {/* Infrastructure Feature Badges */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 font-body text-[12.5px] text-[#30455C]">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-white border border-[#CFCDC0] shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-[#EAA53A]" />
              <span className="font-medium text-[#0C1D30]">Hedera Consensus Service (HCS)</span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-white border border-[#CFCDC0] shadow-2xs">
              <Database className="w-4 h-4 text-[#EAA53A]" />
              <span className="font-medium text-[#0C1D30]">100% USDC On-Chain Settlements</span>
            </div>

            <a
              href="mailto:contact@kundabox.com"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[4px] bg-[#0C1D30] hover:bg-[#EAA53A] hover:text-[#0C1D30] text-white font-sans text-[12.5px] font-medium transition-colors cursor-pointer shadow-xs"
            >
              <span>Engineering Support</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

