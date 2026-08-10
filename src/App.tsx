/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PartnerBanner } from './components/PartnerBanner';
import { HowItWorks } from './components/HowItWorks';
import { ForBusinessesSection } from './components/ForBusinessesSection';
import { AudienceSection } from './components/AudienceSection';
import { SecuritySection } from './components/SecuritySection';
import { WaitlistSection } from './components/WaitlistSection';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { FundingRequestModal } from './components/FundingRequestModal';

export default function App() {
  const [isDemoOpen, setIsDemoOpen] = useState<boolean>(false);
  const [isFundingOpen, setIsFundingOpen] = useState<boolean>(false);

  const scrollToWaitlist = () => {
    const wlEl = document.getElementById('waitlist');
    if (wlEl) {
      wlEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsDemoOpen(true);
    }
  };

  const scrollToFunding = () => {
    const el = document.getElementById('for-businesses');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsFundingOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#EEEEE6] text-[#101C2B] flex flex-col font-body scroll-smooth">
      {/* Navigation Header */}
      <Header
        onOpenDemo={() => setIsDemoOpen(true)}
        onOpenWaitlist={scrollToWaitlist}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenDemo={() => setIsDemoOpen(true)}
          onOpenWaitlist={scrollToWaitlist}
        />

        {/* Engineering Partner Infrastructure Banner */}
        <PartnerBanner />

        {/* How it Works */}
        <HowItWorks />

        {/* Dedicated Section for People/Businesses Who Want Invoices Funded */}
        <ForBusinessesSection
          onOpenDemo={() => setIsDemoOpen(true)}
          onOpenWaitlist={scrollToWaitlist}
        />

        {/* Audience Section (For Investors & For Originators) */}
        <AudienceSection />

        {/* Security Section (With Animated Icons Grid) */}
        <SecuritySection />

        {/* Waitlist & Book Demo CTA Section */}
        <WaitlistSection 
          onOpenDemo={() => setIsDemoOpen(true)} 
          onOpenWaitlist={scrollToWaitlist}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Demo Booking Modal */}
      <DemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
      />

      {/* Funding Quote Modal for Businesses/Suppliers */}
      <FundingRequestModal
        isOpen={isFundingOpen}
        onClose={() => setIsFundingOpen(false)}
      />
    </div>
  );
}
