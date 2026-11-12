import React, { useState } from 'react';
import { WHY_POINTS } from '../data/berriData';
import { ShieldCheck, Check, X, Sparkles, Droplets } from 'lucide-react';

export const WhyBetter: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const comparisonRows = [
    {
      feature: 'Electrolyte Source',
      berri: 'Organic Coconut Water, Guava & Sea Salt',
      sportsDrinks: 'Synthetic Sodium & Potassium Chlorides',
      pedialyte: 'Synthetic Electrolyte Salts',
      water: 'Trace minerals only'
    },
    {
      feature: 'Sugar Content & Sweeteners',
      berri: '4-6g naturally occurring (Fruits, Honey, Monk Fruit)',
      sportsDrinks: '21g - 36g processed cane sugar or HFCS',
      pedialyte: '9g - 12g dextrose and artificial sucralose',
      water: '0g'
    },
    {
      feature: 'Artificial Dyes (Red 40, Yellow 5/6, Blue 1)',
      berri: 'ZERO (Colored 100% by real fruits)',
      sportsDrinks: 'Artificial petroleum-based dyes',
      pedialyte: 'Synthetic dyes present in most variants',
      water: 'None'
    },
    {
      feature: 'WHO Oral Rehydration Standard',
      berri: 'Fully aligned glucose:sodium ratio & osmolarity',
      sportsDrinks: 'Fails WHO guidelines (too hypertonic)',
      pedialyte: 'Aligned (clinical profile)',
      water: 'Does not rehydrate rapidly in illness/sweat'
    },
    {
      feature: 'USDA Certified Organic',
      berri: '100% USDA Certified Organic',
      sportsDrinks: 'Non-organic laboratory formulations',
      pedialyte: 'Non-organic',
      water: 'N/A'
    },
    {
      feature: 'Philanthropy Support',
      berri: 'Wish Upon a Teen (1%) & The Jimmy Fund (2%)',
      sportsDrinks: 'None',
      pedialyte: 'None',
      water: 'None'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-berri-ice text-berri-navy border border-slate-200 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-berri-teal" />
            <span>Clean Science & Nutrition</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-berri-navy font-display tracking-tight">
            Why Berri Organics is Better
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Formulated for maximum oral rehydration efficiency without the sugar spikes or artificial chemicals.
          </p>
        </div>

        {/* 4 Stat-Style Callouts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {WHY_POINTS.map((item, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl border transition-all duration-300 relative flex flex-col justify-between ${
                activeTab === idx
                  ? 'bg-berri-navy text-white shadow-xl scale-102 border-berri-navy'
                  : 'bg-slate-50/70 text-berri-navy border-slate-200/80 hover:bg-white hover:shadow-md'
              }`}
              onMouseEnter={() => setActiveTab(idx)}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-2xl font-mono font-black ${activeTab === idx ? 'text-berri-teal' : 'text-slate-400'}`}>
                    {item.num}
                  </span>
                  <div className={`w-12 h-12 rounded-2xl p-2.5 flex items-center justify-center ${activeTab === idx ? 'bg-white/10' : 'bg-white shadow-xs'}`}>
                    <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                  </div>
                </div>

                <h3 className={`text-xl font-bold font-display mb-3 ${activeTab === idx ? 'text-white' : 'text-berri-navy'}`}>
                  {item.title}
                </h3>

                <p className={`text-sm leading-relaxed ${activeTab === idx ? 'text-white/80' : 'text-slate-600'}`}>
                  {item.subtext}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-current/10 flex items-center space-x-1.5 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-berri-teal" />
                <span>Verified Benefit</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Comparison Table */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-sm overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-berri-teal">
              Side-by-Side Comparison
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-berri-navy font-display mt-1">
              Berri vs. Conventional Sports Drinks vs. Water
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Based on official clinical criteria, ingredient declarations, and WHO oral rehydration standards.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-4 px-4 font-bold text-slate-500 uppercase text-xs w-1/4">Criteria</th>
                  <th className="py-4 px-4 font-black text-white bg-berri-navy rounded-t-xl text-center w-1/4">
                    Berri Organics®
                  </th>
                  <th className="py-4 px-4 font-semibold text-slate-600 text-center w-1/4">Traditional Sports Drinks</th>
                  <th className="py-4 px-4 font-semibold text-slate-600 text-center w-1/4">Pedialyte / Pharmacies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="hover:bg-white/60 transition-colors">
                    <td className="py-4 px-4 font-bold text-berri-navy text-xs sm:text-sm">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 text-center font-bold text-berri-navy bg-berri-ice/60 border-x border-berri-navy/10 text-xs sm:text-sm">
                      <div className="flex items-center justify-center space-x-1.5 text-emerald-700 font-extrabold">
                        <Check className="w-4 h-4 shrink-0" />
                        <span>{row.berri}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center text-slate-600 text-xs">
                      {row.sportsDrinks}
                    </td>
                    <td className="py-4 px-4 text-center text-slate-600 text-xs">
                      {row.pedialyte}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 text-center text-xs text-slate-400">
            *Footnote: Less sugar and fewer calories compared to leading sports drink brands. All nutritional claims verified against official FDA guidelines and packaging declarations.
          </div>
        </div>
      </div>
    </section>
  );
};

