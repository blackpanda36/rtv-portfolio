import React from 'react';
import {
  Camera,
  Network,
  HardDrive,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

interface SolutionsSectionProps {
  onOpenPartnerModal: () => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onOpenPartnerModal }) => {
  const cards = [
    {
      id: 'cctv-optics',
      badge: 'FLAGSHIP LINE',
      badgeColor: 'bg-[#FD5C08] text-white',
      title: 'Ultra-HD 4K ColorVu Cameras & AI Decoders',
      description:
        'Equip enterprise facilities with 24/7 vivid color surveillance, AI smart perimeter intrusion detection, and centralized multi-channel decoding NVRs.',
      actionText: 'Explore CCTV portfolio',
      link: '#case-studies',
      category: 'Video Surveillance',
      specs: '4K / 8MP • ColorVu 24/7 • AI AcuSense',
      graphicBg: 'from-[#13191E] via-[#1A222B] to-[#24303D]',
      icon: Camera
    },
    {
      id: 'poe-network',
      badge: 'ENTERPRISE POE',
      badgeColor: 'bg-[#13191E] text-white border border-[#374151]',
      title: 'Enterprise Managed PoE+ Switches & Routers',
      description:
        'Deliver reliable high-power PoE up to 250 meters. Engineered with 6kV surge suppression and dedicated VLAN isolation for smooth video streams.',
      actionText: 'Explore PoE switching',
      link: '#case-studies',
      category: 'Data Connectivity',
      specs: '8/16/24 Ports • 250m Reach • 6kV Surge',
      graphicBg: 'from-[#13191E] via-[#1E2530] to-[#1E293B]',
      icon: Network
    },
    {
      id: 'storage-it',
      badge: 'CONTINUOUS DUTY',
      badgeColor: 'bg-[#047857] text-white',
      title: 'Surveillance HDDs (2TB to 10TB Workloads)',
      description:
        'Purpose-calibrated drives for continuous multi-camera write workloads. Zero frame degradation and factory direct serial warranty verification.',
      actionText: 'View storage lines',
      link: '#case-studies',
      category: 'Storage Infrastructure',
      specs: 'Toshiba / WD • 1M Hours MTBF • 3-Yr Warranty',
      graphicBg: 'from-[#13191E] via-[#172322] to-[#1C2F2B]',
      icon: HardDrive
    },
    {
      id: 'access-control',
      badge: 'UNIFIED ACCESS',
      badgeColor: 'bg-[#FD5C08] text-white',
      title: 'Touchless Biometric Terminals & Smart Locks',
      description:
        'Secure corporate perimeters with sub-0.5 second facial recognition, RFID turnstile integrations, and real-time cloud attendance logging.',
      actionText: 'Explore access control',
      link: '#case-studies',
      category: 'Premises Access',
      specs: 'Touchless Face/RFID • Real-Time Cloud Sync',
      graphicBg: 'from-[#13191E] via-[#1D212B] to-[#252233]',
      icon: ShieldCheck
    }
  ];

  return (
    <section id="solutions" className="py-14 sm:py-18 bg-white border-b border-[#e6e6e6]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Microsoft Style: Left-Aligned Clean H2) */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-[#13191E] font-sans tracking-tight">
            Trending Hardware & Surveillance Solutions
          </h2>
          <p className="text-sm sm:text-base text-[#5A6573] max-w-2xl mt-1">
            Pure wholesale supply of tier-1 global hardware for system integrators, dealers, and security contractors across India.
          </p>
        </div>

        {/* Microsoft 4-Card Multi-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                className="ms-card flex flex-col justify-between group overflow-hidden bg-white border border-[#e6e6e6] hover:border-[#FD5C08]/50"
              >
                {/* Visual Header / Graphic Card (16:9 Aspect Ratio) */}
                <div className={`relative h-48 bg-gradient-to-br ${card.graphicBg} p-5 flex flex-col justify-between overflow-hidden text-white`}>
                  
                  {/* Subtle Grid Pattern */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

                  {/* Top Badge */}
                  <div className="flex items-center justify-between relative z-10">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-[2px] uppercase tracking-wider ${card.badgeColor}`}>
                      {card.badge}
                    </span>
                    <span className="text-[11px] font-mono text-white/70">
                      {card.category}
                    </span>
                  </div>

                  {/* Center Icon Graphic */}
                  <div className="flex items-center justify-center my-auto relative z-10">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>

                  {/* Bottom Specs Strip */}
                  <div className="relative z-10 pt-2 border-t border-white/15 text-[11px] text-white/80 font-mono flex items-center justify-between">
                    <span>{card.specs}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[#13191E] leading-snug mb-2 group-hover:text-[#FD5C08] group-hover:underline transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-[13px] text-[#5A6573] leading-relaxed mb-6 font-normal">
                      {card.description}
                    </p>
                  </div>

                  {/* Action Link (Microsoft Blue Link with Chevron) */}
                  <div className="pt-2">
                    <button
                      onClick={onOpenPartnerModal}
                      className="ms-btn-primary w-full justify-between text-xs py-2"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 ms-chevron" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SolutionsSection;
