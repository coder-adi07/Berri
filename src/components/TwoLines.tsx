import React from 'react';
import { ArrowRight, Activity, HeartPulse, Check, Sparkles } from 'lucide-react';
import { Product, PRODUCTS } from '../data/berriData';

interface TwoLinesProps {
  onSelectProduct: (p: Product) => void;
}

export const TwoLines: React.FC<TwoLinesProps> = ({ onSelectProduct }) => {
  const fitProduct = PRODUCTS.find(p => p.id === 'dragon-fruit') || PRODUCTS[0];
  const lyteProduct = PRODUCTS.find(p => p.id === 'strawberry') || PRODUCTS[4];

  return (
    <section className="py-24 bg-berri-cream/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white text-berri-navy border border-slate-200 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-berri-teal" />
            <span>Two Lines • Two Moods</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-berri-navy font-display tracking-tight">
            Tailored for Activity. Formulated for Recovery.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Whether powering through high-intensity training or nursing family back to health, choose the proven organic formula for your moment.
          </p>
        </div>

        {/* Split Cards: Fit on Left, Lyte on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* 1. Berri Fit® Active Hydration */}
          <div className="rounded-3xl bg-gradient-to-br from-white via-white to-amber-50/40 border border-slate-200 p-8 sm:p-12 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-amber-100/70 text-amber-900 text-xs font-extrabold uppercase tracking-wider">
                  <Activity className="w-3.5 h-3.5 text-amber-700" />
                  <span>Active Sports Hydration</span>
                </div>
                <span className="text-xs font-mono font-bold text-slate-400">LINE 01</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-berri-navy font-display mb-3">
                Berri Fit®
              </h3>

              <div className="text-base sm:text-lg font-bold text-amber-800 mb-4">
                Our Natural Sports Drink for Rapid Hydration
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
                The world's first organic plant-based fitness beverage for active hydration. Perfect for workout replenishment, casual athletes, yogis, weekend warriors, and active kids needing clean energy without synthetic laboratory chemicals.
              </p>

              {/* Verified Key Highlights */}
              <ul className="space-y-3 mb-8">
                {[
                  '1/2 the Calories & 1/3 the Sugar of leading sports drinks',
                  'Adaptogens: Peruvian Maca Root & Canadian Ginseng Root',
                  'Organic Manuka Honey & Natural Plant Carbohydrates',
                  'Pure Young Coconut Water for bioavailable potassium'
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual & CTA */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <div className="h-28 flex items-center">
                <img
                  src={fitProduct.cutout}
                  alt={fitProduct.name}
                  className="max-h-full w-auto object-contain drop-shadow-md group-hover:scale-108 transition-transform duration-300"
                />
                <div className="ml-4">
                  <div className="text-xs font-bold text-slate-400 uppercase">Featured</div>
                  <div className="text-sm font-extrabold text-berri-navy">{fitProduct.name}</div>
                  <div className="text-xs text-amber-700 font-semibold">{fitProduct.price}</div>
                </div>
              </div>

              <button
                onClick={() => {
                  onSelectProduct(fitProduct);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-5 py-3 rounded-full bg-berri-navy text-white text-xs font-bold hover:bg-amber-600 transition-colors flex items-center space-x-1.5"
              >
                <span>Explore Fit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 2. Berri Lyte® Rapid Response Hydration */}
          <div className="rounded-3xl bg-gradient-to-br from-white via-white to-rose-50/40 border border-slate-200 p-8 sm:p-12 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-rose-100/70 text-rose-900 text-xs font-extrabold uppercase tracking-wider">
                  <HeartPulse className="w-3.5 h-3.5 text-rose-700" />
                  <span>Oral Electrolyte Solution</span>
                </div>
                <span className="text-xs font-mono font-bold text-slate-400">LINE 02</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-berri-navy font-display mb-3">
                Berri Lyte®
              </h3>

              <div className="text-base sm:text-lg font-bold text-rose-800 mb-4">
                Rapid Response Electrolyte Drinks
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
                The world’s first organic plant-based rapid response electrolyte solution. Clinically recommended by pediatricians for infants, children, and adults recovering from fever, flu, dehydration, and intense exhaustion.
              </p>

              {/* Verified Key Highlights */}
              <ul className="space-y-3 mb-8">
                {[
                  'Aliged with WHO guidelines for oral dehydration replenishment',
                  'Recommended by Boston Children’s Hospital Pediatric Gastroenterology',
                  'Plant-based zinc from South American Guava for immune defense',
                  'Zero artificial red/blue dyes; sweetened with organic sweet potato'
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual & CTA */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <div className="h-28 flex items-center">
                <img
                  src={lyteProduct.cutout}
                  alt={lyteProduct.name}
                  className="max-h-full w-auto object-contain drop-shadow-md group-hover:scale-108 transition-transform duration-300"
                />
                <div className="ml-4">
                  <div className="text-xs font-bold text-slate-400 uppercase">Featured</div>
                  <div className="text-sm font-extrabold text-berri-navy">{lyteProduct.name}</div>
                  <div className="text-xs text-rose-700 font-semibold">{lyteProduct.price}</div>
                </div>
              </div>

              <button
                onClick={() => {
                  onSelectProduct(lyteProduct);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-5 py-3 rounded-full bg-berri-navy text-white text-xs font-bold hover:bg-rose-600 transition-colors flex items-center space-x-1.5"
              >
                <span>Explore Lyte</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

