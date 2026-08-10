import React from 'react';
import { Logo } from './Logo';

interface HeaderProps {
  onOpenDemo: () => void;
  onOpenWaitlist: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenDemo,
  onOpenWaitlist,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#EEEEE6]/92 backdrop-blur-md border-b border-[#CFCDC0]">
      <nav className="max-w-[1120px] mx-auto px-5 sm:px-8 h-[76px] flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="focus:outline-none group cursor-pointer"
        >
          <Logo subtext="Kundabox Corporation" />
        </a>

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

        <div className="flex gap-2 sm:gap-2.5 items-center">
          <button
            onClick={onOpenWaitlist}
            className="btn btn-ghost btn-sm text-[13px] border border-[#CFCDC0] hover:border-[#101C2B] text-[#101C2B]"
          >
            Join waitlist
          </button>
          
          <button
            onClick={onOpenDemo}
            className="btn btn-primary btn-sm text-[13px] bg-[#101C2B] text-[#F7F7F2] hover:bg-[#1E3D34]"
          >
            Book a demo
          </button>
        </div>
      </nav>
    </header>
  );
};
