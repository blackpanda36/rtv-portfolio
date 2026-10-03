import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SolutionsSection } from './components/SolutionsSection';
import { BrandShowcase } from './components/BrandShowcase';
import { BecomePartnerSection } from './components/BecomePartnerSection';
import { PanIndiaNetwork } from './components/PanIndiaNetwork';
import { Footer } from './components/Footer';
import { PartnerModal } from './components/PartnerModal';

export const App: React.FC = () => {
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);

  const openPartnerModal = () => setIsPartnerModalOpen(true);
  const closePartnerModal = () => setIsPartnerModalOpen(false);

  return (
    <div className="min-h-screen bg-white text-[#13191E] flex flex-col font-sans selection:bg-[#FD5C08] selection:text-white relative">
      {/* Minimalist Microsoft UHF Navbar with Official Logo */}
      <Navbar onOpenPartnerModal={openPartnerModal} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Minimal Hero Banner with Direct Portal Access */}
        <Hero onOpenPartnerModal={openPartnerModal} />

        {/* Core Hardware & Solutions Focus Grid */}
        <SolutionsSection onOpenPartnerModal={openPartnerModal} />

        {/* Premier Technology Brand Alliances */}
        <BrandShowcase onOpenPartnerModal={openPartnerModal} />

        {/* 4-Step Partner Onboarding & Purchasing Guide */}
        <BecomePartnerSection onOpenPartnerModal={openPartnerModal} />

        {/* 5 Strategic Regional Super-Hubs */}
        <PanIndiaNetwork />
      </main>

      {/* Clean 4-Column Minimal Footer */}
      <Footer onOpenPartnerModal={openPartnerModal} />

      {/* Streamlined Dealer Onboarding Modal */}
      <PartnerModal isOpen={isPartnerModalOpen} onClose={closePartnerModal} />
    </div>
  );
};

export default App;
