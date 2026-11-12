import React from 'react';
import { PILLARS } from '../data/berriData';
import { CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export const Pillars: React.FC = () => {
  return (
    <section id="pillars" className="py-20 bg-white border-y border-slate-100 relative overflow-hidden">
      {/* Background ambient decorative tint */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-berri-ice/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-berri-ice text-berri-navy border border-berri-blue/15 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-berri-teal" />
            <span>Four Pillars of Clean Hydration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-berri-navy font-display tracking-tight leading-tight">
            The Hydration Families Trust When They Need It Most.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            We're Berri Organics. And we don't think you should have to choose.
            <span className="font-semibold text-berri-navy block mt-1">
              Real electrolytes. Real ingredients. Real taste. No compromises.
            </span>
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-2xl bg-berri-cream/60 border border-slate-100 hover:border-berri-teal/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Official Pillar Icon */}
                <div className="w-16 h-16 rounded-2xl bg-white shadow-xs border border-slate-100 flex items-center justify-center p-3 mb-6 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={pillar.icon}
                    alt={pillar.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="text-xl font-bold text-berri-navy font-display mb-2 flex items-center justify-between">
                  <span>{pillar.title}</span>
                  <span className="text-xs font-mono text-slate-400">0{idx + 1}</span>
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center space-x-1.5 text-xs font-semibold text-berri-teal">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* USDA Organic Certification Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-900 via-berri-navy to-berri-blue text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-5">
            <div className="w-16 h-16 rounded-2xl bg-white p-2 flex items-center justify-center shrink-0 shadow-md">
              <img
                src="/assets/usda_organic_seal.svg"
                alt="USDA Organic Seal"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                Certified Integrity
              </div>
              <h4 className="text-lg sm:text-xl font-bold font-display">
                USDA Certified Organic & Non-GMO
              </h4>
              <p className="text-xs sm:text-sm text-white/80 font-normal mt-0.5">
                Free of GMOs, synthetic pesticides, chemical dyes, erythritol, and artificial sweeteners.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center space-x-2 text-xs font-semibold text-white/90 bg-white/10 px-4 py-2.5 rounded-full border border-white/20">
            <ShieldCheck className="w-4 h-4 text-emerald-300" />
            <span>Pediatrician Approved Formulation</span>
          </div>
        </div>

        {/* Footnote */}
        <div className="mt-4 text-center text-xs text-slate-400">
          *Less sugar compared to leading traditional sports drinks and pediatric oral electrolyte solutions. Sweetened with a blend of natural sweeteners.
        </div>
      </div>
    </section>
  );
};

