import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Scale, Building2 } from 'lucide-react';

interface ForBusinessesSectionProps {
  onOpenDemo: () => void;
  onOpenWaitlist: () => void;
}

export const ForBusinessesSection: React.FC<ForBusinessesSectionProps> = ({ onOpenDemo, onOpenWaitlist }) => {
  const [invoiceAmount, setInvoiceAmount] = useState<number>(100000);
  const [termDays, setTermDays] = useState<number>(60);

  // Calculations
  const advancePercent = 0.90; // 90% advance
  const estimatedAdvance = invoiceAmount * advancePercent;
  const estimatedFeeRate = termDays === 30 ? 0.012 : termDays === 60 ? 0.022 : 0.032;
  const estimatedFee = invoiceAmount * estimatedFeeRate;
  const netPaidNow = estimatedAdvance - estimatedFee;
  const reservePaidLater = invoiceAmount - estimatedAdvance;

  return (
    <section id="for-businesses" className="py-20 border-b border-[#CFCDC0] bg-[#F7F7F2]">
      <div className="max-w-[1120px] mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="font-body font-semibold text-[12px] tracking-wider uppercase text-[#0C1D30] mb-3 flex items-center gap-2.5">
              <span className="w-5.5 h-[1.5px] bg-[#EAA53A]"></span>
              For Suppliers, Exporters & Business Owners
            </div>
            
            <h2 className="font-display font-medium text-[32px] sm:text-[40px] tracking-tight leading-[1.12] text-[#0C1D30]">
              Needing capital for your invoices today?
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-body text-[16.5px] text-[#30455C] leading-[1.6]"
          >
            Stop waiting 30 to 90 days for customers to pay. Unlock working capital instantly against your outstanding invoices so you can pay suppliers, meet payroll, and scale your business without debt.
          </motion.p>
        </div>

        {/* Interactive Working Capital Estimator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Calculator Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-[#EEEEE6] border border-[#CFCDC0] rounded-[4px] p-6 sm:p-8 flex flex-col justify-between shadow-xs"
          >
            <div>
              <div className="flex justify-between items-center pb-4 border-b border-[#CFCDC0] mb-6">
                <span className="font-body font-semibold text-[12px] uppercase text-[#0C1D30] tracking-wider flex items-center gap-2">
                  <motion.div
                    animate={{
                      scale: [1, 1.25, 1],
                      rotate: [0, 15, -15, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                    className="w-5 h-5 shrink-0 flex items-center justify-center"
                  >
                    <img src="/icon-amber-round.svg" alt="kbridge" className="w-5 h-5 rounded-full object-contain" />
                  </motion.div>
                  Instant Liquidity Estimator
                </span>
                <span className="text-[12px] text-[#EAA53A] font-body font-bold">
                  24-Hour Settlement
                </span>
              </div>

              {/* Invoice Value Slider */}
              <div className="mb-8">
                <div className="flex justify-between items-baseline mb-3">
                  <label className="text-[14px] font-medium text-[#0C1D30] font-body">
                    Invoice Amount (USDC)
                  </label>
                  <span className="font-mono text-[22px] font-semibold text-[#0C1D30]">
                    {invoiceAmount.toLocaleString()} USDC
                  </span>
                </div>

                <input
                  type="range"
                  min={10000}
                  max={500000}
                  step={5000}
                  value={invoiceAmount}
                  onChange={(e) => setInvoiceAmount(Number(e.target.value))}
                  className="w-full h-2 bg-[#CFCDC0] rounded-lg appearance-none cursor-pointer accent-[#EAA53A]"
                />
                
                <div className="flex justify-between text-[11px] font-mono text-[#30455C] mt-2">
                  <span>10,000 USDC</span>
                  <span>250,000 USDC</span>
                  <span>500,000+ USDC</span>
                </div>
              </div>

              {/* Term Selection */}
              <div className="mb-8">
                <label className="text-[14px] font-medium text-[#0C1D30] font-body block mb-3">
                  Payment Term Remaining
                </label>
                
                <div className="grid grid-cols-3 gap-3">
                  {[30, 60, 90].map((days) => (
                    <button
                      key={days}
                      onClick={() => setTermDays(days)}
                      className={`py-2.5 px-3 rounded-[3px] font-mono text-[13px] border transition-all cursor-pointer text-center ${
                        termDays === days
                          ? 'bg-[#0C1D30] text-[#F7F7F2] border-[#0C1D30] font-semibold shadow-xs'
                          : 'bg-white text-[#30455C] border-[#CFCDC0] hover:border-[#0C1D30]'
                      }`}
                    >
                      {days} Days
                    </button>
                  ))}
                </div>
              </div>

              {/* Results Breakdown Box */}
              <div className="bg-white rounded-[3px] p-5 border border-[#CFCDC0] space-y-3 font-body">
                <div className="flex justify-between items-center text-[13.5px]">
                  <span className="text-[#30455C]">Immediate Advance (90%)</span>
                  <span className="font-mono font-medium text-[#0C1D30]">
                    {estimatedAdvance.toLocaleString()} USDC
                  </span>
                </div>

                <div className="flex justify-between items-center text-[13.5px]">
                  <span className="text-[#30455C]">Estimated Facilitation Fee</span>
                  <span className="font-mono text-[#EAA53A] font-semibold">
                    -{estimatedFee.toLocaleString(undefined, { maximumFractionDigits: 0 })} USDC
                  </span>
                </div>

                <div className="pt-3 border-t border-[#CFCDC0] flex justify-between items-baseline">
                  <div>
                    <span className="text-[14px] font-semibold text-[#0C1D30]">
                      Capital Unlocked in 24 Hours
                    </span>
                    <p className="text-[11.5px] text-[#30455C]">
                      Remaining 10% ({reservePaidLater.toLocaleString()} USDC) paid upon client maturity
                    </p>
                  </div>
                  <span className="font-mono text-[22px] font-bold text-[#0C1D30]">
                    {netPaidNow.toLocaleString(undefined, { maximumFractionDigits: 0 })} USDC
                  </span>
                </div>

                <div className="pt-2 text-[11.5px] font-mono text-[#30455C] flex items-center justify-between border-t border-gray-100">
                  <span>Settlement Network:</span>
                  <span className="text-[#0C1D30] font-semibold">Hedera (Sub-second finality)</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenDemo}
                className="flex-1 btn btn-primary py-3.5 text-[14.5px] flex items-center justify-center gap-2 group cursor-pointer bg-[#0C1D30] hover:bg-[#EAA53A] hover:text-[#0C1D30] text-white shadow-md transition-colors"
              >
                <span>Book a demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={onOpenWaitlist}
                className="flex-1 btn btn-ghost py-3.5 text-[14.5px] flex items-center justify-center gap-2 cursor-pointer border border-[#CFCDC0] hover:border-[#0C1D30] text-[#0C1D30] transition-colors"
              >
                <span>Join waitlist</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: 3 Value Proposition Cards for Invoice Holders */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            
            {/* Card 1: Non-Recourse & Debt-Free */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white border border-[#CFCDC0] p-6 rounded-[3px] shadow-sm flex items-start gap-4 group"
            >
              <div className="w-11 h-11 rounded-[8px] bg-[#EAA53A]/15 border border-[#EAA53A]/30 text-[#0C1D30] flex items-center justify-center shrink-0 group-hover:bg-[#0C1D30] group-hover:text-[#EAA53A] transition-colors p-2.5">
                <Scale className="w-5 h-5" />
              </div>

              <div>
                <h3 className="font-body font-semibold text-[16px] text-[#0C1D30] mb-1">
                  Non-Recourse &amp; Debt-Free
                </h3>
                <p className="font-body text-[13.5px] text-[#30455C] leading-relaxed">
                  Liquidate trade receivables in USDC without adding liability to your balance sheet or diluting business ownership.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Rapid Digital Approval */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white border border-[#CFCDC0] p-6 rounded-[3px] shadow-sm flex items-start gap-4 group"
            >
              <div className="w-11 h-11 rounded-[8px] bg-[#EAA53A]/15 border border-[#EAA53A]/30 text-[#0C1D30] flex items-center justify-center shrink-0 group-hover:bg-[#0C1D30] transition-colors p-2">
                <img src="/icon-amber-round.svg" alt="kbridge" className="w-7 h-7 rounded-full object-contain" />
              </div>

              <div>
                <h3 className="font-body font-semibold text-[16px] text-[#0C1D30] mb-1">
                  Rapid Digital Approval on Hedera
                </h3>
                <p className="font-body text-[13.5px] text-[#30455C] leading-relaxed">
                  Upload your invoice and purchase orders. Automated verification on Hedera delivers binding decisions and USDC payouts in under 2 hours.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Institutional Investor Pool */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white border border-[#CFCDC0] p-6 rounded-[3px] shadow-sm flex items-start gap-4 group"
            >
              <div className="w-11 h-11 rounded-[8px] bg-[#EAA53A]/15 border border-[#EAA53A]/30 text-[#0C1D30] flex items-center justify-center shrink-0 group-hover:bg-[#0C1D30] group-hover:text-[#EAA53A] transition-colors p-2.5">
                <Building2 className="w-5 h-5" />
              </div>

              <div>
                <h3 className="font-body font-semibold text-[16px] text-[#0C1D30] mb-1">
                  Institutional USDC Investor Pool
                </h3>
                <p className="font-body text-[13.5px] text-[#30455C] leading-relaxed">
                  Invoices are tokenized on Hedera with verified institutional funds competing to deploy USDC capital at competitive terms.
                </p>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};

