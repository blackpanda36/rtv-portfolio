import React, { useState } from 'react';
import { Camera, Server, HardDrive, Network, Eye, Layers } from 'lucide-react';

export const VisualShowcase: React.FC = () => {
  const [activeItem, setActiveItem] = useState(0);

  const showcaseItems = [
    {
      title: 'Next-Gen AI IR Dome Surveillance Camera',
      category: 'CCTV & Video Security',
      formFactor: 'Vandal-Resistant Dome',
      resolution: '4MP / 8MP Ultra-HD',
      optics: 'Smart Dual-Illumination 30m IR',
      chassis: 'IP67 Weatherproof & IK10 Vandal-Proof',
      standard: 'H.265+ Compression',
      deployments: 'Commercial corporate offices, financial banks, educational campuses',
      tag: 'High Demand',
      icon: Camera
    },
    {
      title: 'Ultra-Long Range Perimeter Bullet Camera',
      category: 'CCTV & Video Security',
      formFactor: 'Industrial Bullet Enclosure',
      resolution: '4K Ultra-HD 8MP Sensor',
      optics: '50m Smart IR + Vehicle/Human Classification',
      chassis: 'Corrosion-Resistant Metal Housing',
      standard: 'Low-Light ColorVu Aperture F1.0',
      deployments: 'Highways, logistics warehouses, manufacturing yards, perimeter fencing',
      tag: 'Perimeter Defense',
      icon: Eye
    },
    {
      title: 'Enterprise 16CH / 32CH 4K Network Video Recorder (NVR)',
      category: 'Centralized Surveillance Storage',
      formFactor: '1.5U / 2U Rackmount Chassis',
      resolution: 'Up to 32-Channel 4K Decoding',
      optics: '4 x SATA Interfaces (Up to 40TB Total Capacity)',
      chassis: 'Dual Gigabit NICs, Redundant Power Support',
      standard: 'H.265+ Real-Time Streaming Bandwidth',
      deployments: 'Command & control centers, centralized surveillance hubs, multi-site retail',
      tag: 'Heavy Workload',
      icon: Server
    },
    {
      title: 'Enterprise 16-Port Gigabit PoE+ Distribution Switch',
      category: 'Network Infrastructure',
      formFactor: '19-Inch Metal Rackmount',
      resolution: '16x 100/1000M PoE + 2x Gigabit Uplink SFP',
      optics: '250W Total PoE Power Budget (30W per port)',
      chassis: 'Built-in 6kV Lightning Surge Protection',
      standard: 'Long-Range 250m Extended PoE Mode',
      deployments: 'High-density IP camera networks, VoIP communication, enterprise Wi-Fi',
      tag: 'Network Core',
      icon: Network
    },
    {
      title: 'Purpose-Built 24/7 Surveillance Hard Drives (2TB / 4TB)',
      category: 'Surveillance Duty Storage',
      formFactor: '3.5-Inch Serial ATA III (SATA 6Gb/s)',
      resolution: 'Continuous Multi-Stream Write Optimization',
      optics: 'Up to 64 HD Camera Streams Concurrently',
      chassis: 'Tarnish-Resistant Industrial Components',
      standard: 'Workload Rating 180TB/year',
      deployments: 'Continuous write-intensive NVRs, digital DVRs, security video vaults',
      tag: 'Zero Dropped Frames',
      icon: HardDrive
    }
  ];

  const current = showcaseItems[activeItem];
  const CurrentIcon = current.icon;

  return (
    <section className="py-24 bg-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 border border-orange-200 text-rtv-orange text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Hardware Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading tracking-tight mb-4">
            Visual Hardware Architecture
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A closer look at the core physical hardware categories distributed by Realtech Vision across India.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Selector Navigation List Left (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            {showcaseItems.map((item, idx) => (
              <button
                key={item.title}
                onClick={() => setActiveItem(idx)}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between ${
                  activeItem === idx
                    ? 'bg-orange-50/60 border-rtv-orange shadow-xs'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      activeItem === idx
                        ? 'bg-rtv-orange text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 border border-slate-200'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-rtv-orange block">
                      {item.category}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h4>
                  </div>
                </div>

                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                    activeItem === idx
                      ? 'bg-orange-100 text-rtv-orange font-bold'
                      : 'text-slate-400'
                  }`}
                >
                  0{idx + 1}
                </span>
              </button>
            ))}
          </div>

          {/* Active Hardware Spec Display Right (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50/70 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs flex flex-col justify-between relative">
            <div>
              {/* Top Meta */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-rtv-orange font-bold">
                  {current.category}
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                  {current.tag}
                </span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-rtv-orange">
                  <CurrentIcon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-heading">
                    {current.title}
                  </h3>
                  <span className="text-xs text-slate-500 font-mono">
                    Form Factor: {current.formFactor}
                  </span>
                </div>
              </div>

              {/* Technical Specifications Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <span className="text-[11px] font-mono text-slate-500 uppercase block mb-1">
                    Performance / Resolution
                  </span>
                  <span className="text-sm font-bold text-slate-900">{current.resolution}</span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <span className="text-[11px] font-mono text-slate-500 uppercase block mb-1">
                    Optics & Storage Architecture
                  </span>
                  <span className="text-sm font-bold text-slate-900">{current.optics}</span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <span className="text-[11px] font-mono text-slate-500 uppercase block mb-1">
                    Chassis & Environmental Rating
                  </span>
                  <span className="text-sm font-bold text-slate-900">{current.chassis}</span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <span className="text-[11px] font-mono text-slate-500 uppercase block mb-1">
                    Engineering Standard
                  </span>
                  <span className="text-sm font-bold text-slate-900">{current.standard}</span>
                </div>
              </div>

              {/* Typical Deployment Environments */}
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <span className="text-xs font-semibold text-slate-800 block mb-1">
                  Target Commercial Deployments:
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {current.deployments}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>Direct Wholesale Sourcing</span>
              <span className="text-rtv-orange font-semibold">Genuine Warranty Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
