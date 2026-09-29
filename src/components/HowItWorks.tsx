import React from 'react';
import { motion } from 'motion/react';
import { FileCheck, Coins, ArrowRightLeft } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Originate & Verify Receivables',
      icon: FileCheck,
      desc: 'Financing partners and trade suppliers submit verified invoices and documentation to the Kbridge engine. Each receivable is audited, risk-graded, and structured into tokenized pools on Hedera.',
    },
    {
      step: '02',
      title: 'Tokenize Pools on Hedera & Mark to Market',
      icon: Coins,
      desc: 'Kbridge records contracts on Hedera’s auditable on-chain ledger. Token share value is marked to the underlying pool and tracks verified debtor collections as positions reach maturity with sub-second finality.',
    },
    {
      step: '03',
      title: 'Subscribe with USDC & Instant Settlement',
      icon: ArrowRightLeft,
      desc: 'Accredited institutional investors subscribe with USDC to fractionalized invoice pools. On debtor maturity, smart contracts execute automated waterfall settlement and distribute yields in USDC with predictable, micro-cent fees on Hedera.',
    },
  ];

  return (
    <section id="how" className="py-20 border-b border-[#CFCDC0]">
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
            Built on Hedera • 100% USDC Liquidity
          </div>
          <h2 className="font-display font-medium text-[28px] sm:text-[36px] tracking-tight leading-[1.18] text-[#0C1D30]">
            The bridge for private credit and stablecoin liquidity.
          </h2>
          <p className="text-[16px] text-[#30455C] mt-3.5 max-w-[620px] leading-relaxed">
            Kbridge connects institutional stablecoin capital with verified trade receivables through tokenized investment pools on Hedera. Zero fiat wire friction, 100% USDC.
          </p>
        </motion.div>

        {/* Steps List with Motion Animations */}
        <div className="border-t border-[#CFCDC0]">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="grid grid-cols-1 sm:grid-cols-[60px_1fr] md:grid-cols-[100px_1.2fr_1.8fr] gap-6 md:gap-8 py-[36px] border-b border-[#CFCDC0] items-start hover:bg-white/40 transition-colors px-2 rounded-[2px]"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[13px] text-[#EAA53A] font-semibold">
                    {item.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#EAA53A]/15 flex items-center justify-center text-[#0C1D30] md:hidden">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="hidden md:flex w-10 h-10 rounded-full bg-[#EAA53A]/15 items-center justify-center text-[#0C1D30] shrink-0 border border-[#EAA53A]/30 shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-[22px] font-medium text-[#0C1D30]">
                    {item.title}
                  </h3>
                </div>

                <div>
                  <p className="text-[#30455C] text-[15px] leading-relaxed font-body">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
