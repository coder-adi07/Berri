import React from 'react';
import { RETAILER_FRAMES } from '../data/berriData';
import { MapPin, ArrowRight, Store } from 'lucide-react';

export const RetailerMarquee: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white text-berri-navy border border-slate-200 text-xs font-bold uppercase tracking-wider mb-3">
          <Store className="w-3.5 h-3.5 text-berri-teal" />
          <span>Where to Buy</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-berri-navy font-display">
          Available at Leading Natural & Organic Retailers
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-2">
          Find Berri Fit® and Berri Lyte® in the beverage or pediatric health aisles nationwide.
        </p>
      </div>

      {/* Sliding Retailer Logo Carousel (Official Frames) */}
      <div className="w-full overflow-hidden whitespace-nowrap py-4">
        <div className="inline-flex animate-marquee items-center space-x-12 sm:space-x-16">
          {RETAILER_FRAMES.concat(RETAILER_FRAMES).map((frame, idx) => (
            <div
              key={idx}
              className="h-16 sm:h-20 w-36 sm:w-48 bg-white rounded-2xl border border-slate-200/80 p-3 shadow-xs flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105"
            >
              <img
                src={frame}
                alt="Authorized Retailer"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA to Official Store Locator */}
      <div className="mt-10 text-center">
        <a
          href="https://berriorganics.com/pages/store-locator"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-berri-navy text-white text-xs sm:text-sm font-bold shadow-md hover:bg-berri-royal hover:shadow-lg transition-all"
        >
          <MapPin className="w-4 h-4 text-berri-teal" />
          <span>Search Your Nearest Store Locator</span>
          <ArrowRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </section>
  );
};

