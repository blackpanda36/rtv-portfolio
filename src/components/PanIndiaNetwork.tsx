import React, { useState } from 'react';
import { MapPin, Navigation, Phone, CheckCircle2, Truck, ArrowUpRight } from 'lucide-react';
import { BRANCHES } from '../data/companyData';

export const PanIndiaNetwork: React.FC = () => {
  const [activeBranchId, setActiveBranchId] = useState('chennai');

  const selectedBranch = BRANCHES.find((b) => b.id === activeBranchId) || BRANCHES[0];

  const cityPositions: Record<string, { x: number; y: number; label: string; code: string }> = {
    delhi: { x: 200, y: 170, label: 'Delhi', code: 'DEL-01' },
    surat: { x: 145, y: 310, label: 'Surat', code: 'ST-02' },
    hyderabad: { x: 235, y: 390, label: 'Hyderabad', code: 'HYD-03' },
    bangalore: { x: 205, y: 490, label: 'Bangalore', code: 'BLR-04' },
    chennai: { x: 245, y: 495, label: 'Chennai (HO)', code: 'MAA-HQ' },
  };

  const hoPos = cityPositions['chennai'];

  return (
    <section id="network" className="py-24 sm:py-32 bg-white relative border-t border-slate-100">
      {/* Precision corner crosshairs */}
      <div className="absolute top-6 left-6 font-mono text-xs text-slate-300 select-none pointer-events-none">+</div>
      <div className="absolute top-6 right-6 font-mono text-xs text-slate-300 select-none pointer-events-none">+</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono uppercase tracking-widest mb-4">
            <Navigation className="w-3.5 h-3.5 text-rtv-orange" />
            <span>TOPOLOGY // GIS-GRID-07</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 font-heading tracking-tight leading-[1.1] mb-5">
            National Logistics Grid & Regional Depots
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Strategic physical distribution footprint connecting our Ritchie Street Chennai central command hub with regional stock depots across Northern, Western, Central, and Southern India.
          </p>
        </div>

        {/* Interactive Map & Branch Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Map Visualization Left (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50/50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                  GIS DISTRIBUTION TOPOLOGY
                </span>
                <h3 className="text-sm font-bold text-slate-950 mt-0.5">
                  5 Strategically Staged Regional Logistics Nodes
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>TELEMETRY // NOMINAL</span>
              </div>
            </div>

            {/* Custom Interactive SVG Map with Technical GIS Aesthetics */}
            <div className="relative w-full aspect-[5/6] max-h-[520px] mx-auto flex items-center justify-center">
              <svg
                viewBox="0 0 500 600"
                className="w-full h-full filter drop-shadow-2xs"
                aria-label="India Distribution Network Map"
              >
                {/* Technical grid overlay */}
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F1F5F9" strokeWidth="0.8" />
                  </pattern>
                </defs>
                <rect width="500" height="600" fill="url(#grid)" />

                {/* Stylized clean geometric boundary of India */}
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
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />

                {/* Regional radar range rings */}
                <circle cx="250" cy="300" r="140" fill="none" stroke="#E2E8F0" strokeDasharray="3 3" />
                <circle cx="250" cy="300" r="220" fill="none" stroke="#F1F5F9" strokeDasharray="4 4" />

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
                        strokeWidth={isSelected ? '2.5' : '1.2'}
                        strokeDasharray={isSelected ? 'none' : '4 4'}
                        opacity={isSelected ? '1' : '0.5'}
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
                          r="16"
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
                        fill={isHO ? '#EE6E00' : isSelected ? '#EE6E00' : '#0F172A'}
                        stroke="#FFFFFF"
                        strokeWidth="2"
                      />

                      {/* Node Code */}
                      <text
                        x={pos.x + 12}
                        y={pos.y - 4}
                        fill="#94A3B8"
                        fontSize="9"
                        fontFamily="monospace"
                      >
                        {pos.code}
                      </text>

                      {/* City Label */}
                      <text
                        x={pos.x + 12}
                        y={pos.y + 8}
                        fill={isSelected ? '#EE6E00' : '#0F172A'}
                        fontSize={isHO ? '13' : '11'}
                        fontWeight={isHO || isSelected ? 'bold' : '600'}
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
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4 pt-4 border-t border-slate-200/80">
              {BRANCHES.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setActiveBranchId(b.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    activeBranchId === b.id
                      ? 'bg-slate-950 text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:text-slate-950 border border-slate-200/80'
                  }`}
                >
                  {b.city} {b.isHeadquarter && '★'}
                </button>
              ))}
            </div>
          </div>

          {/* Active Branch Detail Card Right (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200/80 rounded-3xl p-7 sm:p-8 shadow-xs relative">
              <div className="flex items-center justify-between mb-5">
                <span
                  className={`text-xs font-mono font-bold uppercase px-3.5 py-1 rounded-full ${
                    selectedBranch.isHeadquarter
                      ? 'bg-rtv-orange text-white'
                      : 'bg-slate-100 text-slate-800 border border-slate-200'
                  }`}
                >
                  {selectedBranch.type}
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  NODE // {selectedBranch.city.toUpperCase()}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-950 font-heading tracking-tight mb-1">
                {selectedBranch.city} Distribution Center
              </h3>
              <p className="text-xs font-semibold font-mono text-rtv-orange mb-6">
                {selectedBranch.state}, India
              </p>

              {/* Specs & Capabilities */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-600 border-t border-b border-slate-200/80 py-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-rtv-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-xs font-mono">Facility Address</span>
                    <span className="font-semibold text-slate-900">{selectedBranch.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Truck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-xs font-mono">Transit Commitment</span>
                    <span className="font-bold text-emerald-700">{selectedBranch.transitTime}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-800 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-xs font-mono">Coverage Area</span>
                    <span className="font-semibold text-slate-800">{selectedBranch.coverageArea}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-rtv-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-xs font-mono">Direct Channel Line</span>
                    <a href={`tel:${selectedBranch.phone}`} className="font-mono font-bold text-slate-950 hover:text-rtv-orange transition-colors">
                      {selectedBranch.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Head office note if HQ */}
              {selectedBranch.isHeadquarter && (
                <div className="mt-6 p-4 rounded-2xl bg-orange-50/50 border border-orange-200/60">
                  <span className="text-xs font-mono font-bold text-rtv-orange uppercase tracking-wider block mb-1">
                    Central Operations Hub
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
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
