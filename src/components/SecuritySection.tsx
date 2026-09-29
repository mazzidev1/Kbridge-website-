import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  BellRing, 
  FileDown, 
  Database, 
  Coins, 
  MonitorSmartphone 
} from 'lucide-react';

export const SecuritySection: React.FC = () => {
  const features = [
    {
      id: 'access-control',
      icon: ShieldCheck,
      title: 'Bank-grade access control',
      desc: 'Role-based permissions, encrypted at rest and in transit, with KYC and AML checks gating every participant account.',
      color: 'text-[#0C1D30]',
      bgColor: 'bg-[#EAA53A]/15',
    },
    {
      id: 'notifications',
      icon: BellRing,
      title: 'Real-time notifications',
      desc: 'Funding milestones, maturity dates, and USDC payouts land the moment they happen — in-portal, by email, or via webhook.',
      color: 'text-[#0C1D30]',
      bgColor: 'bg-[#EAA53A]/15',
    },
    {
      id: 'reporting',
      icon: FileDown,
      title: 'Reporting, exported',
      desc: 'Every position, statement, and audit trail exports to PDF or Excel in one click, formatted for your own financial records.',
      color: 'text-[#0C1D30]',
      bgColor: 'bg-[#EAA53A]/15',
    },
    {
      id: 'ledger',
      icon: Database,
      title: 'Hedera auditable ledger',
      desc: 'Each invoice and share pool is recorded on Hedera (HCS & EVM contracts), delivering sub-second finality and immutable auditability.',
      color: 'text-[#0C1D30]',
      bgColor: 'bg-[#EAA53A]/15',
    },
    {
      id: 'usdc-native',
      icon: Coins,
      title: '100% USDC, zero crypto volatility',
      desc: 'No volatile crypto tokens to manage. All invoice advances, investor yields, and loan repayments settle entirely in USDC.',
      color: 'text-[#0C1D30]',
      bgColor: 'bg-[#EAA53A]/15',
    },
    {
      id: 'responsive',
      icon: MonitorSmartphone,
      title: 'Responsive by design',
      desc: 'The full shelf and every invoice detail work the same way across desktop, tablet, and mobile browsers.',
      color: 'text-[#0C1D30]',
      bgColor: 'bg-[#EAA53A]/15',
    },
  ];

  return (
    <section id="security" className="py-20 border-b border-[#CFCDC0]">
      <div className="max-w-[1120px] mx-auto px-5 sm:px-8">
        {/* Section Head */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="max-w-[600px] mb-[52px]"
        >
          <div className="font-body font-semibold text-[12px] tracking-wider uppercase text-[#0C1D30] mb-4 flex items-center gap-2.5">
            <span className="w-5.5 h-[1.5px] bg-[#EAA53A]"></span>
            Built on Hedera • Enterprise Grade
          </div>
          <h2 className="font-display font-medium text-[28px] sm:text-[34px] tracking-tight leading-[1.18] text-[#0C1D30]">
            Secure by default. Powered by the Hedera network.
          </h2>
          <p className="text-[16px] text-[#30455C] mt-3.5 max-w-[520px]">
            Kbridge pairs institutional-grade compliance with Hedera Hashgraph speed and predictable micro-cent fees. Everything operates seamlessly in USDC.
          </p>
        </motion.div>

        {/* Feature Grid with Clean Lucide Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#CFCDC0] border border-[#CFCDC0] rounded-[2px] overflow-hidden">
          {features.map((feat, idx) => {
            const IconComponent = feat.icon;
            return (
              <motion.div 
                key={feat.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ backgroundColor: '#FFFFFF' }}
                className="bg-[#F7F7F2] p-[32px] sm:p-[28px] min-h-[190px] flex flex-col justify-between transition-colors group cursor-default"
              >
                <div>
                  {/* Circle Icon Badge */}
                  <motion.div 
                    whileHover={{ scale: 1.12, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.3 }}
                    className="w-[38px] h-[38px] border border-[#0C1D30]/30 rounded-full flex items-center justify-center mb-5 bg-[#F7F7F2] group-hover:border-[#EAA53A] group-hover:bg-[#EAA53A]/15 transition-colors shadow-xs"
                  >
                    <IconComponent className="w-[18px] h-[18px] text-[#0C1D30] group-hover:text-[#EAA53A] transition-colors" />
                  </motion.div>

                  <h3 className="text-[16px] font-semibold text-[#0C1D30] mb-2 font-body group-hover:text-[#EAA53A] transition-colors">
                    {feat.title}
                  </h3>
                  
                  <p className="text-[13.5px] text-[#30455C] leading-relaxed font-body">
                    {feat.desc}
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
