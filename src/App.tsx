import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { AboutSection } from './components/AboutSection';
import { SolutionsSection } from './components/SolutionsSection';
import { PureDistribution } from './components/PureDistribution';
import { BrandShowcase } from './components/BrandShowcase';
import { WhyRealtech } from './components/WhyRealtech';
import { PanIndiaNetwork } from './components/PanIndiaNetwork';
import { OperationsWorkflow } from './components/OperationsWorkflow';
import { DealerEcosystem } from './components/DealerEcosystem';
import { TechnologyPlatform } from './components/TechnologyPlatform';
import { VisualShowcase } from './components/VisualShowcase';
import { CompanyValues } from './components/CompanyValues';
import { CallToAction } from './components/CallToAction';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PartnerModal } from './components/PartnerModal';

export const App: React.FC = () => {
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);

  const openPartnerModal = () => setIsPartnerModalOpen(true);
  const closePartnerModal = () => setIsPartnerModalOpen(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-rtv-orange selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenPartnerModal={openPartnerModal} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Section 5: Hero Section */}
        <Hero onOpenPartnerModal={openPartnerModal} />

        {/* Section 6: Verified Statistics Strip */}
        <StatsSection />

        {/* Section 7: About Realtech Vision & 15+ Years Evolution */}
        <AboutSection />

        {/* Section 8: What We Distribute (Solutions & Categories) */}
        <SolutionsSection onOpenPartnerModal={openPartnerModal} />

        {/* Section 11: 100% Pure Distribution Model */}
        <PureDistribution />

        {/* Section 9: Brand Ecosystem */}
        <BrandShowcase onOpenPartnerModal={openPartnerModal} />

        {/* Section 10: Why Businesses Choose Realtech */}
        <WhyRealtech />

        {/* Section 12: Interactive PAN-India Network */}
        <PanIndiaNetwork />

        {/* Section 13: Operational Workflow & Pipeline */}
        <OperationsWorkflow />

        {/* Section 14: Dealer Growth Ecosystem */}
        <DealerEcosystem onOpenPartnerModal={openPartnerModal} />

        {/* Section 15: Technology-Driven Distribution (Realconnect Platform) */}
        <TechnologyPlatform />

        {/* Section 16: Visual Hardware Showcase */}
        <VisualShowcase />

        {/* Section 17: Company Values - Built Around Trust */}
        <CompanyValues />

        {/* Section 18: Final Call to Action */}
        <CallToAction onOpenPartnerModal={openPartnerModal} />

        {/* Section 19: Contact, Branches & Onboarding Application */}
        <ContactSection />
      </main>

      {/* Section 20: Corporate Footer */}
      <Footer onOpenPartnerModal={openPartnerModal} />

      {/* Onboarding & Partner Application Modal */}
      <PartnerModal isOpen={isPartnerModalOpen} onClose={closePartnerModal} />
    </div>
  );
};

export default App;
