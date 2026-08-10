import React from 'react';
import { Cpu, ShieldCheck, Database, ArrowUpRight } from 'lucide-react';

export const PartnerBanner: React.FC = () => {
  return (
    <section className="bg-[#EEEEE6] text-[#101C2B] py-10 border-y border-[#CFCDC0]">
      <div className="max-w-[1120px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Main Title & Subtitle */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-[6px] bg-[#2F5D50]/10 text-[#2F5D50] flex items-center justify-center shrink-0 border border-[#2F5D50]/20 shadow-xs">
              <Cpu className="w-6 h-6 text-[#2F5D50]" />
            </div>

            <div>
              <div className="font-body font-semibold text-[11px] text-[#2F5D50] uppercase tracking-wider mb-1">
                Kundabox Corporation
              </div>
              <h2 className="font-display font-medium text-[20px] sm:text-[22px] leading-tight text-[#101C2B]">
                Your Engineering Partner for RWA Tokenization Infrastructure
              </h2>
            </div>
          </div>

          {/* Infrastructure Feature Badges */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 font-body text-[12.5px] text-[#3C4859]">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-white border border-[#CFCDC0] shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-[#2F5D50]" />
              <span className="font-medium text-[#101C2B]">Institutional Audited Smart Contracts</span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-white border border-[#CFCDC0] shadow-2xs">
              <Database className="w-4 h-4 text-[#2F5D50]" />
              <span className="font-medium text-[#101C2B]">Full-Stack On-Chain Ledger</span>
            </div>

            <a
              href="mailto:contact@kundabox.com"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[4px] bg-[#2F5D50] hover:bg-[#101C2B] text-white font-sans text-[12.5px] font-medium transition-colors cursor-pointer shadow-xs"
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

