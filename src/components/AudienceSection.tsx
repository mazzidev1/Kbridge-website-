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
          className="max-w-[680px] mb-[52px]"
        >
          <div className="font-body font-semibold text-[12px] tracking-wider uppercase text-[#0C1D30] mb-4 flex items-center gap-2.5">
            <span className="w-5.5 h-[1.5px] bg-[#EAA53A]"></span>
            Built on Hedera • Private Credit &amp; USDC Liquidity
          </div>
          <h2 className="font-display font-medium text-[28px] sm:text-[36px] tracking-tight leading-[1.15] text-[#0C1D30]">
            Built for institutional investors and funding originators alike.
          </h2>
        </motion.div>

        {/* Audience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* For Investors */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
            className="bg-[#F7F7F2] border border-[#CFCDC0] rounded-[4px] p-[32px] sm:p-[42px] flex flex-col justify-between hover:bg-white hover:border-[#EAA53A]/70 hover:shadow-xl transition-all duration-300 group cursor-pointer"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-body text-[12px] uppercase tracking-wide text-[#0C1D30] font-semibold flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#EAA53A]" />
                  For Investors &amp; Funds
                </span>
                <span className="w-8 h-8 rounded-full bg-[#EAA53A]/15 flex items-center justify-center text-[#0C1D30] group-hover:bg-[#0C1D30] group-hover:text-[#EAA53A] group-hover:scale-105 transition-all duration-200">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>

              <h3 className="font-display text-[22px] sm:text-[25px] font-medium text-[#0C1D30] mb-3.5 leading-snug group-hover:text-[#EAA53A] transition-colors">
                Onchain access to off-chain yield through tokenized private credit.
              </h3>
              
              <p className="text-[14.5px] text-[#30455C] leading-relaxed mb-6 font-body">
                Subscribe with USDC to fractionalized invoice pools on Hedera. Token share value is marked to the underlying pool and tracks verified contract performance.
              </p>
            </div>

            <ul className="list-none pt-4 border-t border-[#CFCDC0]/80 space-y-3 font-body">
              <li className="flex gap-3 items-start text-[14px] text-[#30455C]">
                <Check className="w-4 h-4 text-[#EAA53A] shrink-0 mt-0.5" />
                <span>Subscribe with USDC to standardized 30, 60, and 90-day invoice pools on Hedera</span>
              </li>
              <li className="flex gap-3 items-start text-[14px] text-[#30455C]">
                <Check className="w-4 h-4 text-[#EAA53A] shrink-0 mt-0.5" />
                <span>Token value tracks the pool and is marked to verified receivables</span>
              </li>
              <li className="flex gap-3 items-start text-[14px] text-[#30455C]">
                <Check className="w-4 h-4 text-[#EAA53A] shrink-0 mt-0.5" />
                <span>Transparent Hedera Consensus Service audit trail for debtor records</span>
              </li>
              <li className="flex gap-3 items-start text-[14px] text-[#30455C]">
                <Check className="w-4 h-4 text-[#EAA53A] shrink-0 mt-0.5" />
                <span>Automated settlement payouts in USDC directly to your institutional account</span>
              </li>
            </ul>
          </motion.div>

          {/* For Originating Partners */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
            className="bg-[#F7F7F2] border border-[#CFCDC0] rounded-[4px] p-[32px] sm:p-[42px] flex flex-col justify-between hover:bg-white hover:border-[#EAA53A]/70 hover:shadow-xl transition-all duration-300 group cursor-pointer"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-body text-[12px] uppercase tracking-wide text-[#0C1D30] font-semibold flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#EAA53A]" />
                  For Lenders &amp; Financing Partners
                </span>
                <span className="w-8 h-8 rounded-full bg-[#EAA53A]/15 flex items-center justify-center text-[#0C1D30] group-hover:bg-[#0C1D30] group-hover:text-[#EAA53A] group-hover:scale-105 transition-all duration-200">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>

              <h3 className="font-display text-[22px] sm:text-[25px] font-medium text-[#0C1D30] mb-3.5 leading-snug group-hover:text-[#EAA53A] transition-colors">
                Scale your loan book with automated private credit syndication.
              </h3>
              
              <p className="text-[14.5px] text-[#30455C] leading-relaxed mb-6 font-body">
                Kbridge connects originating partners directly with institutional stablecoin capital on Hedera. Tokenize receivables into investment pools to distribute risk efficiently in USDC.
              </p>
            </div>

            <ul className="list-none pt-4 border-t border-[#CFCDC0]/80 space-y-3 font-body">
              <li className="flex gap-3 items-start text-[14px] text-[#30455C]">
                <Check className="w-4 h-4 text-[#EAA53A] shrink-0 mt-0.5" />
                <span>Real-time tracking of pool subscriptions and USDC syndication on Hedera</span>
              </li>
              <li className="flex gap-3 items-start text-[14px] text-[#30455C]">
                <Check className="w-4 h-4 text-[#EAA53A] shrink-0 mt-0.5" />
                <span>Automated waterfall repayment split in USDC at customer maturity</span>
              </li>
              <li className="flex gap-3 items-start text-[14px] text-[#30455C]">
                <Check className="w-4 h-4 text-[#EAA53A] shrink-0 mt-0.5" />
                <span>One-click exportable audit trail verified by Hedera Hashgraph</span>
              </li>
              <li className="flex gap-3 items-start text-[14px] text-[#30455C]">
                <Check className="w-4 h-4 text-[#EAA53A] shrink-0 mt-0.5" />
                <span>Predictable micro-cent network transaction fees with zero gas volatility</span>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
