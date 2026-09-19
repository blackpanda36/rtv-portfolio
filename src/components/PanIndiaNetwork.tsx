import React, { useState } from 'react';
import { MapPin, Navigation, Phone, CheckCircle2, Truck } from 'lucide-react';
import { BRANCHES } from '../data/companyData';

export const PanIndiaNetwork: React.FC = () => {
  const [activeBranchId, setActiveBranchId] = useState('chennai');

  const selectedBranch = BRANCHES.find((b) => b.id === activeBranchId) || BRANCHES[0];

  const cityPositions: Record<string, { x: number; y: number; label: string }> = {
    delhi: { x: 200, y: 170, label: 'Delhi' },
    surat: { x: 145, y: 310, label: 'Surat' },
    hyderabad: { x: 235, y: 390, label: 'Hyderabad' },
    bangalore: { x: 205, y: 490, label: 'Bangalore' },
    chennai: { x: 245, y: 495, label: 'Chennai (HO)' },
  };

  const hoPos = cityPositions['chennai'];

  return (
    <section id="network" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 border border-orange-200 text-rtv-orange text-xs font-bold uppercase tracking-wider mb-3">
            <Navigation className="w-3.5 h-3.5" />
            <span>National Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading tracking-tight mb-4">
            Connected Across India
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Headquartered in Chennai with strategic distribution centers in Delhi, Hyderabad, Bangalore, and Surat—powering next-day deliveries and reliable supply across every Indian state.
          </p>
        </div>

        {/* Interactive Map & Branch Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Map Visualization Left (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-rtv-orange font-bold">
                  Distribution Topology
                </span>
                <h4 className="text-sm font-bold text-slate-800 mt-0.5">
                  Central Hub & Regional Depots
                </h4>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                <span className="w-2 h-2 rounded-full bg-rtv-orange" />
                <span>Serving Dealers Across India</span>
              </div>
            </div>

            {/* Custom Interactive SVG Map */}
            <div className="relative w-full aspect-[5/6] max-h-[540px] mx-auto flex items-center justify-center">
              <svg
                viewBox="0 0 500 600"
                className="w-full h-full filter drop-shadow-xs"
                aria-label="India Distribution Network Map"
              >
                {/* Stylized clean geometric background of India */}
                <path
                  d="M 180 50 
                     L 240 70 
                     L 290 120 
                     L 260 160 
                     L 360 210 
                     L 430 200 
                     L 450 250 
                     L 390 280 
                     L 330 290 
                     L 290 350 
                     L 265 470 
                     L 240 540 
                     L 210 570 
                     L 180 520 
                     L 140 430 
                     L 110 330 
                     L 100 270 
                     L 70 240 
                     L 110 180 
                     L 160 160 
                     Z"
                  fill="#FFFFFF"
                  stroke="#CBD5E1"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />

                {/* Regional boundaries subtle rings */}
                <circle cx="250" cy="300" r="140" fill="none" stroke="#E2E8F0" strokeDasharray="4 4" />
                <circle cx="250" cy="300" r="220" fill="none" stroke="#F1F5F9" strokeDasharray="6 6" />

                {/* Distribution vectors connecting Chennai HO to all 4 hubs */}
                {Object.entries(cityPositions).map(([cityKey, pos]) => {
                  if (cityKey === 'chennai') return null;
                  const isSelected = activeBranchId === cityKey;

                  return (
                    <g key={cityKey}>
                      <line
                        x1={hoPos.x}
                        y1={hoPos.y}
                        x2={pos.x}
                        y2={pos.y}
                        stroke={isSelected ? '#EE6E00' : '#94A3B8'}
                        strokeWidth={isSelected ? '2.5' : '1.5'}
                        strokeDasharray={isSelected ? 'none' : '4 4'}
                        opacity={isSelected ? '0.95' : '0.45'}
                      />
                    </g>
                  );
                })}

                {/* City Nodes */}
                {Object.entries(cityPositions).map(([cityKey, pos]) => {
                  const isSelected = activeBranchId === cityKey;
                  const isHO = cityKey === 'chennai';

                  return (
                    <g
                      key={cityKey}
                      className="cursor-pointer group"
                      onClick={() => setActiveBranchId(cityKey)}
                    >
                      {/* Halo ring for selected */}
                      {isSelected && (
                        <circle
                          cx={pos.x}
                          cy={pos.y}
                          r="14"
                          fill="none"
                          stroke="#EE6E00"
                          strokeWidth="2"
                        />
                      )}

                      {/* Main Node Point */}
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r={isHO ? '8' : '6'}
                        fill={isHO ? '#EE6E00' : isSelected ? '#EE6E00' : '#2563EB'}
                        stroke="#FFFFFF"
                        strokeWidth="2"
                      />

                      {/* City Label */}
                      <text
                        x={pos.x + 12}
                        y={pos.y + 4}
                        fill={isSelected ? '#EE6E00' : '#334155'}
                        fontSize={isHO ? '13' : '11'}
                        fontWeight={isHO || isSelected ? 'bold' : '500'}
                        fontFamily="Inter, sans-serif"
                      >
                        {pos.label}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Quick interactive city buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4 pt-4 border-t border-slate-200">
              {BRANCHES.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setActiveBranchId(b.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeBranchId === b.id
                      ? 'bg-rtv-orange text-white'
                      : 'bg-white text-slate-700 hover:text-slate-950 border border-slate-200'
                  }`}
                >
                  {b.city} {b.isHeadquarter && '★'}
                </button>
              ))}
            </div>
          </div>

          {/* Active Branch Detail Card Right (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs relative">
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-xs font-mono font-bold uppercase px-3 py-1 rounded-full ${
                    selectedBranch.isHeadquarter
                      ? 'bg-rtv-orange text-white'
                      : 'bg-blue-50 text-blue-700 border border-blue-200'
                  }`}
                >
                  {selectedBranch.type}
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  Node: {selectedBranch.city.toUpperCase()}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 font-heading mb-1">
                {selectedBranch.city} Distribution Center
              </h3>
              <p className="text-xs font-semibold text-rtv-orange mb-6">
                {selectedBranch.state}, India
              </p>

              {/* Specs & Capabilities */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-600 border-t border-b border-slate-200 py-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-rtv-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 block text-xs">Facility Address</span>
                    <span className="font-medium text-slate-900">{selectedBranch.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Truck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 block text-xs">Transit Commitment</span>
                    <span className="font-semibold text-emerald-600">{selectedBranch.transitTime}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 block text-xs">Coverage Area</span>
                    <span className="font-medium text-slate-800">{selectedBranch.coverageArea}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-rtv-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 block text-xs">Direct Channel Line</span>
                    <a href={`tel:${selectedBranch.phone}`} className="font-mono text-slate-900 hover:text-rtv-orange">
                      {selectedBranch.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Head office note if HQ */}
              {selectedBranch.isHeadquarter && (
                <div className="mt-6 p-4 rounded-xl bg-orange-50/60 border border-orange-200">
                  <span className="text-xs font-bold text-rtv-orange uppercase tracking-wider block mb-1">
                    Central Distribution Operations
                  </span>
                  <p className="text-xs text-slate-600">
                    Located in Chennai's prominent Ritchie Street commercial tech cluster, serving as the central coordination hub for all multi-state inventory allocation and warranty services.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
