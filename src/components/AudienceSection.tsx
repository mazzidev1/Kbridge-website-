import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Building2, Check, ArrowUpRight } from 'lucide-react';

export const AudienceSection: React.FC = () => {
  return (
    <section id="audiences" className="py-20 border-b border-[#CFCDC0]">
      <div className="max-w-[1120px] mx-auto px-5 sm:px-8">
        {/* Section Head */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[600px] mb-[52px]"
        >
          <div className="font-body font-semibold text-[12px] tracking-wider uppercase text-[#2F5D50] mb-4 flex items-center gap-2.5">
            <span className="w-5.5 h-[1px] bg-[#2F5D50]"></span>
            Two sides, one unified ledger
          </div>
          <h2 className="font-display font-medium text-[28px] sm:text-[36px] tracking-tight leading-[1.15] text-[#101C2B]">
            Built for institutional investors and funding originators alike.
          </h2>
        </motion.div>

        {/* Audience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#CFCDC0] border border-[#CFCDC0] rounded-[2px] overflow-hidden">
          
          {/* For Investors */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#F7F7F2] p-[32px] sm:p-[42px] flex flex-col justify-between hover:bg-white transition-colors group"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-body text-[12px] uppercase tracking-wide text-[#2F5D50] font-semibold flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  For Investors & Funds
                </span>
                <span className="w-8 h-8 rounded-full bg-[#2F5D50]/10 flex items-center justify-center text-[#2F5D50] group-hover:bg-[#2F5D50] group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

              <h3 className="font-display text-[22px] sm:text-[25px] font-medium text-[#101C2B] mb-3.5 leading-snug">
                Institutional yields backed by short-term real economy trade.
              </h3>
              
              <p className="text-[14.5px] text-[#3C4859] leading-relaxed mb-6 font-body">
                Access fractionalized invoice shares with transparent maturity dates, verified debtor risk profiles, and on-chain ownership recording.
              </p>
            </div>

            <ul className="list-none pt-4 border-t border-[#CFCDC0] space-y-3 font-body">
              <li className="flex gap-3 items-start text-[14px] text-[#3C4859]">
                <Check className="w-4 h-4 text-[#2F5D50] shrink-0 mt-0.5" />
                <span>Standardized 30, 60, and 90-day invoice shelf positions</span>
              </li>
              <li className="flex gap-3 items-start text-[14px] text-[#3C4859]">
                <Check className="w-4 h-4 text-[#2F5D50] shrink-0 mt-0.5" />
                <span>Share-level ownership recorded on-chain, auditable in real time</span>
              </li>
              <li className="flex gap-3 items-start text-[14px] text-[#3C4859]">
                <Check className="w-4 h-4 text-[#2F5D50] shrink-0 mt-0.5" />
                <span>Full access to verified underlying invoice contracts and debtor profiles</span>
              </li>
              <li className="flex gap-3 items-start text-[14px] text-[#3C4859]">
                <Check className="w-4 h-4 text-[#2F5D50] shrink-0 mt-0.5" />
                <span>Automated settlement payouts directly to your institutional account</span>
              </li>
            </ul>
          </motion.div>

          {/* For Originating Partners */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#F7F7F2] p-[32px] sm:p-[42px] flex flex-col justify-between hover:bg-white transition-colors group"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-body text-[12px] uppercase tracking-wide text-[#2F5D50] font-semibold flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  For Lenders & Financing Partners
                </span>
                <span className="w-8 h-8 rounded-full bg-[#2F5D50]/10 flex items-center justify-center text-[#2F5D50] group-hover:bg-[#2F5D50] group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

              <h3 className="font-display text-[22px] sm:text-[25px] font-medium text-[#101C2B] mb-3.5 leading-snug">
                Scale your loan book with automated syndication.
              </h3>
              
              <p className="text-[14.5px] text-[#3C4859] leading-relaxed mb-6 font-body">
                Originate receivables, tokenise them instantly through kbridge, and distribute risk across a network of accredited capital providers.
              </p>
            </div>

            <ul className="list-none pt-4 border-t border-[#CFCDC0] space-y-3 font-body">
              <li className="flex gap-3 items-start text-[14px] text-[#3C4859]">
                <Check className="w-4 h-4 text-[#2F5D50] shrink-0 mt-0.5" />
                <span>Real-time tracking of share sales and syndication progress</span>
              </li>
              <li className="flex gap-3 items-start text-[14px] text-[#3C4859]">
                <Check className="w-4 h-4 text-[#2F5D50] shrink-0 mt-0.5" />
                <span>Automated waterfall repayment split at customer maturity</span>
              </li>
              <li className="flex gap-3 items-start text-[14px] text-[#3C4859]">
                <Check className="w-4 h-4 text-[#2F5D50] shrink-0 mt-0.5" />
                <span>One-click exportable audit trail for compliance and reporting</span>
              </li>
              <li className="flex gap-3 items-start text-[14px] text-[#3C4859]">
                <Check className="w-4 h-4 text-[#2F5D50] shrink-0 mt-0.5" />
                <span>Flexible origination fee structures with automatic smart contract execution</span>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
