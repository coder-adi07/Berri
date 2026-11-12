import React, { useState } from 'react';
import { INGREDIENTS, Ingredient } from '../data/berriData';
import { Droplets, Sparkles, MapPin, Heart, ShieldCheck } from 'lucide-react';

export const IngredientOrbit: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeIng = INGREDIENTS[selectedIdx];

  return (
    <section id="ingredients" className="py-24 bg-white relative overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-emerald-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200/60 text-xs font-bold uppercase tracking-wider mb-4">
            <Droplets className="w-3.5 h-3.5 text-emerald-600" />
            <span>True-to-Nature Ingredients</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-berri-navy font-display tracking-tight">
            Eight Pure Botanicals. Infinite Vitality.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            No artificial flavors, colors, or synthetic preservatives. Every nutrient is bio-available, organically harvested, and ethically sourced.
          </p>
        </div>

        {/* Desktop Orbit Showcase & Interactive Botanical Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Ingredients 0 to 3 */}
          <div className="lg:col-span-4 space-y-4">
            {INGREDIENTS.slice(0, 4).map((ing, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedIdx(idx)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center space-x-4 ${
                    isSelected
                      ? 'bg-berri-navy text-white shadow-lg border-berri-navy translate-x-2'
                      : 'bg-slate-50/70 border-slate-200/80 hover:bg-white hover:border-emerald-300 text-berri-navy'
                  }`}
                >
                  <div className="w-14 h-14 rounded-xl bg-white p-1.5 shrink-0 shadow-xs border border-slate-100 flex items-center justify-center overflow-hidden">
                    <img
                      src={ing.image}
                      alt={ing.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold font-display truncate">{ing.name}</h4>
                      <span className={`text-[10px] font-mono ${isSelected ? 'text-emerald-300' : 'text-slate-400'}`}>
                        0{idx + 1}
                      </span>
                    </div>
                    <p className={`text-xs mt-0.5 truncate ${isSelected ? 'text-white/80' : 'text-slate-500'}`}>
                      {ing.origin}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Column: Center Bottle Stage with Active Botanical Focus */}
          <div className="lg:col-span-4 relative flex flex-col items-center justify-center text-center">
            {/* Center Circular Ring */}
            <div className="w-72 h-72 sm:w-88 sm:h-88 rounded-full border-2 border-dashed border-emerald-300/40 absolute flex items-center justify-center animate-spin" style={{ animationDuration: '60s' }}>
              <div className="w-4 h-4 rounded-full bg-emerald-500 absolute -top-2" />
              <div className="w-3 h-3 rounded-full bg-teal-400 absolute -bottom-1.5" />
            </div>

            {/* Central Product Bottle Silhouette */}
            <div className="relative z-10 w-44 sm:w-52 h-80 sm:h-96 flex items-center justify-center">
              <img
                src="/assets/cutouts/fit/dragon-fruit.webp"
                alt="Berri Pure Botanical Bottle"
                className="max-h-full max-w-full object-contain drop-shadow-2xl"
              />
            </div>

            {/* Active Ingredient Spotlight Card */}
            <div className="relative z-20 mt-4 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-slate-200/80 shadow-xl max-w-sm w-full">
              <div className="flex items-center space-x-2 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{activeIng.origin}</span>
              </div>
              <h3 className="text-xl font-black text-berri-navy font-display">
                {activeIng.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium leading-relaxed">
                {activeIng.benefits}
              </p>
            </div>
          </div>

          {/* Right Column: Ingredients 4 to 7 */}
          <div className="lg:col-span-4 space-y-4">
            {INGREDIENTS.slice(4, 8).map((ing, idx) => {
              const realIdx = idx + 4;
              const isSelected = selectedIdx === realIdx;
              return (
                <div
                  key={realIdx}
                  onClick={() => setSelectedIdx(realIdx)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center space-x-4 ${
                    isSelected
                      ? 'bg-berri-navy text-white shadow-lg border-berri-navy -translate-x-2'
                      : 'bg-slate-50/70 border-slate-200/80 hover:bg-white hover:border-emerald-300 text-berri-navy'
                  }`}
                >
                  <div className="w-14 h-14 rounded-xl bg-white p-1.5 shrink-0 shadow-xs border border-slate-100 flex items-center justify-center overflow-hidden">
                    <img
                      src={ing.image}
                      alt={ing.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold font-display truncate">{ing.name}</h4>
                      <span className={`text-[10px] font-mono ${isSelected ? 'text-emerald-300' : 'text-slate-400'}`}>
                        0{realIdx + 1}
                      </span>
                    </div>
                    <p className={`text-xs mt-0.5 truncate ${isSelected ? 'text-white/80' : 'text-slate-500'}`}>
                      {ing.origin}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Verbatim Footnote */}
        <div className="mt-14 pt-6 border-t border-slate-100 text-center text-xs text-slate-400">
          *All flavors and preservatives are sourced naturally from USDA Certified organic suppliers.
        </div>
      </div>
    </section>
  );
};

