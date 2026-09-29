import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Mail } from 'lucide-react';

interface WaitlistSectionProps {
  onOpenDemo: () => void;
  onOpenWaitlist?: () => void;
}

export const WaitlistSection: React.FC<WaitlistSectionProps> = ({ onOpenDemo, onOpenWaitlist }) => {
  const [wlName, setWlName] = useState('');
  const [wlEmail, setWlEmail] = useState('');
  const [wlConfirmed, setWlConfirmed] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!wlEmail) return;
    setWlConfirmed(true);
  };

  const handleScrollToWaitlist = () => {
    if (onOpenWaitlist) {
      onOpenWaitlist();
    } else {
      const el = document.getElementById('waitlist-input');
      if (el) el.focus();
    }
  };

  return (
    <section className="py-24 border-b border-[#CFCDC0]">
      <div className="max-w-[1120px] mx-auto px-5 sm:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 sm:gap-14 items-center bg-[#F7F7F2] border border-[#CFCDC0] p-8 sm:p-12 md:p-14 rounded-[3px] shadow-sm"
        >
          {/* Left CTA */}
          <div>
            <div className="font-body font-semibold text-[12px] tracking-wider uppercase text-[#0C1D30] mb-3 flex items-center gap-2.5">
              <span className="w-4 h-[1px] bg-[#EAA53A]"></span>
              Built on Hedera • Private Credit &amp; USDC Liquidity
            </div>
            
            <h2 id="demo" className="font-display font-medium text-[28px] sm:text-[36px] tracking-tight text-[#0C1D30] leading-tight mb-3.5">
              Experience the future of trade receivable liquidity.
            </h2>
            
            <p className="text-[15.5px] text-[#30455C] max-w-[460px] leading-relaxed font-body">
              Kbridge connects institutional stablecoin capital with verified trade receivables through tokenized investment pools on Hedera. 100% denominated and settled in USDC with no fiat delays.
            </p>

            <div className="mt-4 pt-4 border-t border-[#CFCDC0]/60 flex items-center gap-2 text-[13.5px] font-body text-[#0C1D30]">
              <Mail className="w-4 h-4 shrink-0 text-[#EAA53A]" />
              <span>Inquiries: <a href="mailto:contact@kundabox.com" className="underline font-semibold hover:text-[#EAA53A]">contact@kundabox.com</a></span>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-3.5 items-center">
              <button
                onClick={onOpenDemo}
                className="btn btn-primary bg-[#0C1D30] text-white hover:bg-[#EAA53A] hover:text-[#0C1D30] flex items-center gap-2 cursor-pointer transition-colors w-full sm:w-auto shadow-xs"
              >
                Book a demo
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleScrollToWaitlist}
                className="btn btn-ghost border border-[#CFCDC0] hover:border-[#0C1D30] text-[#0C1D30] cursor-pointer w-full sm:w-auto"
              >
                Join waitlist
              </button>
            </div>
          </div>

          {/* Right Inline Waitlist Form */}
          <form id="waitlist" onSubmit={handleWaitlistSubmit} className="flex flex-col gap-3.5 bg-white p-5 sm:p-7 border border-[#CFCDC0] rounded-[2px] shadow-xs">
            <span className="font-body font-semibold text-[12px] uppercase tracking-wide text-[#30455C]">
              Join the priority access network
            </span>
            
            <div>
              <input
                id="wl-name"
                type="text"
                placeholder="Full name"
                value={wlName}
                onChange={(e) => setWlName(e.target.value)}
                className="w-full border border-[#B9B6A6] bg-[#F7F7F2] p-3 text-[14.5px] rounded-[2px] text-[#0C1D30] focus:outline-none focus:border-[#EAA53A] font-body"
              />
            </div>
            
            <div>
              <input
                id="wl-email"
                type="email"
                required
                placeholder="Work email *"
                value={wlEmail}
                onChange={(e) => setWlEmail(e.target.value)}
                className="w-full border border-[#B9B6A6] bg-[#F7F7F2] p-3 text-[14.5px] rounded-[2px] text-[#0C1D30] focus:outline-none focus:border-[#EAA53A] font-body"
              />
            </div>

            <button
              type="submit"
              className={`btn ${wlConfirmed ? 'bg-[#EAA53A] text-[#0C1D30]' : 'bg-[#0C1D30] text-white hover:bg-[#EAA53A] hover:text-[#0C1D30]'} w-full transition-colors font-medium cursor-pointer py-3 text-[14.5px] shadow-xs`}
            >
              {wlConfirmed ? 'Added to waitlist ✓' : 'Join the waitlist'}
            </button>

            {wlConfirmed && (
              <motion.div 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[12.5px] text-[#0C1D30] font-body mt-1 flex items-center gap-1.5 font-medium"
              >
                <CheckCircle2 className="w-4 h-4 shrink-0 text-[#EAA53A]" />
                <span>You're on the list — we'll reach out before general access opens.</span>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};
