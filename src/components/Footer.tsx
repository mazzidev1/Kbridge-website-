import React from 'react';
import { Mail } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 pb-10 font-body">
      <div className="max-w-[1120px] mx-auto px-5 sm:px-8">
        
        {/* Footer Top */}
        <div className="flex justify-between items-center flex-wrap gap-6 pb-[28px] border-b border-[#CFCDC0]">
          <div>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="focus:outline-none block group"
            >
              <Logo showSubtext={false} />
            </a>
            <p className="font-body text-[12px] text-[#EAA53A] font-medium mt-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EAA53A]" />
              The Bridge for Private Credit &amp; Stablecoin Liquidity • Built on Hedera
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[13.5px] text-[#30455C]">
            <button 
              onClick={() => scrollTo('how')} 
              className="hover:text-[#0C1D30] transition-colors cursor-pointer"
            >
              How it works
            </button>
            <button 
              onClick={() => scrollTo('for-businesses')} 
              className="hover:text-[#0C1D30] transition-colors cursor-pointer"
            >
              Get Funded
            </button>
            <button 
              onClick={() => scrollTo('audiences')} 
              className="hover:text-[#0C1D30] transition-colors cursor-pointer"
            >
              For investors
            </button>
            <button 
              onClick={() => scrollTo('security')} 
              className="hover:text-[#0C1D30] transition-colors cursor-pointer"
            >
              Security
            </button>
            <button 
              onClick={() => scrollTo('demo')} 
              className="hover:text-[#0C1D30] transition-colors cursor-pointer"
            >
              Book a demo
            </button>
            
            <a 
              href="mailto:contact@kundabox.com" 
              className="flex items-center gap-1.5 text-[#0C1D30] hover:text-[#EAA53A] font-body text-[13.5px] font-medium transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#EAA53A]" />
              <span>contact@kundabox.com</span>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 flex flex-col md:flex-row justify-between gap-[14px] items-start md:items-center">
          <p className="text-[12px] text-[#30455C] max-w-[640px] leading-[1.6]">
            kbridge is a Kundabox Corporation technology portal that facilitates the tokenization and transfer of invoice-backed receivables between originating financing partners and investors. kbridge is not a lender, does not hold client funds, and does not provide investment advice. Access is limited to verified institutional and accredited participants subject to underlying regulatory approval.
          </p>

          <div className="flex flex-col md:items-end gap-1">
            <p className="text-[12px] text-[#0C1D30] font-body font-semibold whitespace-nowrap">
              © 2026 Kundabox Corporation.
            </p>
            <a 
              href="mailto:contact@kundabox.com" 
              className="text-[12.5px] text-[#EAA53A] hover:underline font-body font-medium"
            >
              contact@kundabox.com
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
