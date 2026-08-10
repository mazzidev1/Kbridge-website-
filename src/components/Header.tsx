import React, { useState } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenDemo: () => void;
  onOpenWaitlist: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenDemo,
  onOpenWaitlist,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#EEEEE6]/95 backdrop-blur-md border-b border-[#CFCDC0]">
      <nav className="max-w-[1120px] mx-auto px-4 sm:px-8 h-[70px] sm:h-[76px] flex items-center justify-between gap-2">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="focus:outline-none group cursor-pointer shrink-0"
        >
          <Logo subtext="Kundabox Corporation" />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex gap-7 text-[14px] font-body font-medium">
          <button 
            onClick={() => scrollTo('how')}
            className="text-[#3C4859] hover:text-[#101C2B] transition-colors cursor-pointer"
          >
            How it works
          </button>
          <button 
            onClick={() => scrollTo('for-businesses')}
            className="text-[#3C4859] hover:text-[#101C2B] transition-colors cursor-pointer"
          >
            Get Funded
          </button>
          <button 
            onClick={() => scrollTo('audiences')}
            className="text-[#3C4859] hover:text-[#101C2B] transition-colors cursor-pointer"
          >
            For investors
          </button>
          <button 
            onClick={() => scrollTo('security')}
            className="text-[#3C4859] hover:text-[#101C2B] transition-colors cursor-pointer"
          >
            Security
          </button>
        </div>

        {/* Header Action Buttons & Mobile Toggle */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onOpenWaitlist}
            className="hidden lg:inline-flex btn btn-ghost btn-sm text-[13px] border border-[#CFCDC0] hover:border-[#101C2B] text-[#101C2B] px-3.5 py-1.5 whitespace-nowrap"
          >
            Join waitlist
          </button>
          
          <button
            onClick={onOpenDemo}
            className="hidden lg:inline-flex btn btn-primary btn-sm text-[13px] bg-[#101C2B] text-[#F7F7F2] hover:bg-[#1E3D34] px-3.5 py-1.5 whitespace-nowrap shadow-2xs font-medium"
          >
            Book a demo
          </button>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden h-[34px] w-[34px] sm:h-[36px] sm:w-[36px] text-[#101C2B] hover:bg-[#CFCDC0]/50 rounded-[4px] transition-colors cursor-pointer border border-[#CFCDC0] bg-white/80 flex items-center justify-center shrink-0"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#EEEEE6] border-b border-[#CFCDC0] px-5 py-6 flex flex-col gap-5 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-1 font-body font-medium text-[15px] border-b border-[#CFCDC0] pb-4">
            <button 
              onClick={() => scrollTo('how')}
              className="text-left text-[#101C2B] hover:text-[#2F5D50] py-2.5 px-2 rounded hover:bg-black/5 transition-colors"
            >
              How it works
            </button>
            <button 
              onClick={() => scrollTo('for-businesses')}
              className="text-left text-[#101C2B] hover:text-[#2F5D50] py-2.5 px-2 rounded hover:bg-black/5 transition-colors"
            >
              Get Funded
            </button>
            <button 
              onClick={() => scrollTo('audiences')}
              className="text-left text-[#101C2B] hover:text-[#2F5D50] py-2.5 px-2 rounded hover:bg-black/5 transition-colors"
            >
              For investors
            </button>
            <button 
              onClick={() => scrollTo('security')}
              className="text-left text-[#101C2B] hover:text-[#2F5D50] py-2.5 px-2 rounded hover:bg-black/5 transition-colors"
            >
              Security
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }}
              className="w-full btn btn-primary bg-[#101C2B] text-white hover:bg-[#2F5D50] py-3 text-[14px] flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Book a demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenWaitlist(); }}
              className="w-full btn btn-ghost border border-[#CFCDC0] bg-white text-[#101C2B] py-3 text-[14px] shadow-2xs"
            >
              Join waitlist
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
