import React from 'react';
import { motion } from 'motion/react';
import { FileCheck, Coins, ArrowRightLeft } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Originate & Submit',
      icon: FileCheck,
      desc: 'A supplier sells goods or services on 30, 60, or 90-day credit. The financing partner or supplier submits the verified invoice and purchase orders to the kbridge engine.',
    },
    {
      step: '02',
      title: 'Tokenise & fractionalize',
      icon: Coins,
      desc: 'kbridge records the receivable, maturity date, and discount terms on an auditable ledger, issuing fractionalized digital shares backed 1:1 by the underlying contract.',
    },
    {
      step: '03',
      title: 'Fund & automatically settle',
      icon: ArrowRightLeft,
      desc: 'Accredited investors purchase shelf shares. On customer payment maturity, smart contracts automatically distribute principal and yield directly to share holders.',
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
          className="max-w-[600px] mb-[52px]"
        >
          <div className="font-body font-semibold text-[12px] tracking-wider uppercase text-[#2F5D50] mb-4 flex items-center gap-2.5">
            <span className="w-5.5 h-[1px] bg-[#2F5D50]"></span>
            How the bridge works
          </div>
          <h2 className="font-display font-medium text-[28px] sm:text-[36px] tracking-tight leading-[1.18] text-[#101C2B]">
            From invoice to instant liquidity in three transparent steps.
          </h2>
          <p className="text-[16px] text-[#3C4859] mt-3.5 max-w-[520px]">
            Nothing about real-economy invoice economics changes — suppliers get paid early, investors earn yield, and every transfer is permanently recorded.
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
                  <span className="font-mono text-[13px] text-[#9C7B2E] font-semibold">
                    {item.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#2F5D50]/10 flex items-center justify-center text-[#2F5D50] md:hidden">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="hidden md:flex w-10 h-10 rounded-full bg-[#2F5D50]/10 items-center justify-center text-[#2F5D50] shrink-0 border border-[#2F5D50]/20 shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-[22px] font-medium text-[#101C2B]">
                    {item.title}
                  </h3>
                </div>

                <div>
                  <p className="text-[#3C4859] text-[15px] leading-relaxed font-body">
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

