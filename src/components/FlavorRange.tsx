import React, { useState } from 'react';
import { ShoppingBag, Eye, Check, Sparkles, ArrowRight } from 'lucide-react';
import { PRODUCTS, Product } from '../data/berriData';
import { useCart } from '../context/CartContext';

interface FlavorRangeProps {
  onSelectProduct: (product: Product) => void;
}

export const FlavorRange: React.FC<FlavorRangeProps> = ({ onSelectProduct }) => {
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState<'all' | 'fit' | 'lyte' | 'lyte-advanced' | 'samplers'>('all');
  const [addedId, setAddedId] = useState<string | null>(null);

  const tabs = [
    { id: 'all', label: 'All Flavors', count: PRODUCTS.length },
    { id: 'fit', label: 'Berri Fit® Active', count: PRODUCTS.filter(p => p.line === 'fit').length },
    { id: 'lyte', label: 'Berri Lyte® Rapid', count: PRODUCTS.filter(p => p.line === 'lyte').length },
    { id: 'lyte-advanced', label: 'Lyte Advanced', count: PRODUCTS.filter(p => p.line === 'lyte-advanced').length },
    { id: 'samplers', label: 'Variety Packs', count: PRODUCTS.filter(p => p.line === 'samplers').length }
  ];

  const filtered = activeTab === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.line === activeTab);

  const handleQuickAdd = (p: Product) => {
    addToCart(p, 1);
    setAddedId(p.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <section id="flavors" className="py-24 bg-slate-50/70 relative overflow-hidden">
      {/* Endless Marquee of Verified Keywords */}
      <div className="w-full bg-berri-navy text-white py-3.5 overflow-hidden whitespace-nowrap mb-16 shadow-inner">
        <div className="inline-flex animate-marquee text-xs sm:text-sm font-extrabold uppercase tracking-widest text-berri-ice/90 space-x-12">
          <span>• 100% Plant-Based Electrolytes</span>
          <span>• Zero Artificial Dyes or Preservatives</span>
          <span>• Recommended by World Health Organization (WHO) Standard</span>
          <span>• Pediatrician Approved</span>
          <span>• USDA Certified Organic</span>
          <span>• Less Sugar* & Fewer Calories*</span>
          <span>• Organic Guava, Coconuts, Maca & Sea Salt</span>
          <span>• Wish Upon a Teen (1%) & The Jimmy Fund (2%)</span>
          {/* Duplicate for seamless infinite loop */}
          <span>• 100% Plant-Based Electrolytes</span>
          <span>• Zero Artificial Dyes or Preservatives</span>
          <span>• Recommended by World Health Organization (WHO) Standard</span>
          <span>• Pediatrician Approved</span>
          <span>• USDA Certified Organic</span>
          <span>• Less Sugar* & Fewer Calories*</span>
          <span>• Organic Guava, Coconuts, Maca & Sea Salt</span>
          <span>• Wish Upon a Teen (1%) & The Jimmy Fund (2%)</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white text-berri-navy border border-slate-200 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-berri-teal" />
              <span>Explore The Lineup</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-berri-navy font-display tracking-tight">
              Pick Your Pack & Flavor
            </h2>
            <p className="text-base text-slate-600 mt-2 max-w-xl">
              Authentic organic fruits, doctor-approved rehydration, and plant electrolytes designed for every member of the family.
            </p>
          </div>

          {/* Filter Tabs with Counts */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-1.5 ${
                  activeTab === tab.id
                    ? 'bg-berri-navy text-white shadow-sm'
                    : 'text-slate-600 hover:text-berri-navy hover:bg-slate-50'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map(product => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl border border-slate-200/80 p-5 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Card Bar */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {product.lineLabel.split(' ')[0]} {product.lineLabel.split(' ')[1]}
                </span>
                {product.badge && (
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-berri-ice text-berri-blue border border-berri-blue/20">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Bottle Stage with Colored Glow */}
              <div
                className="relative h-64 sm:h-72 flex items-center justify-center p-4 cursor-pointer overflow-hidden rounded-2xl group-hover:bg-slate-50/50 transition-colors"
                onClick={() => {
                  onSelectProduct(product);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                {/* Soft ambient radial liquid glow */}
                <div
                  className="absolute inset-0 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                  style={{ backgroundColor: product.color }}
                />

                <img
                  src={product.cutout}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain relative z-10 transition-transform duration-300 group-hover:scale-108 group-hover:-translate-y-2 drop-shadow-md"
                />

                {/* Hover Quick View Pill */}
                <div className="absolute bottom-3 inset-x-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex justify-center">
                  <span className="px-3.5 py-1.5 rounded-full bg-berri-navy/90 backdrop-blur-sm text-white text-xs font-bold shadow-md flex items-center space-x-1">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View on Stage</span>
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="pt-4 space-y-2">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-black text-berri-navy font-display group-hover:text-berri-teal transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-lg font-black text-berri-navy">
                    {product.price}
                  </span>
                </div>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>

                {/* Nutrition micro-chips */}
                <div className="flex items-center space-x-2 pt-1 text-[11px] text-slate-500 font-semibold">
                  <span>{product.calories}</span>
                  <span>•</span>
                  <span>{product.sugar}</span>
                  <span>•</span>
                  <span>{product.size}</span>
                </div>

                {/* Actions */}
                <div className="pt-4 flex items-center space-x-2">
                  <button
                    onClick={() => handleQuickAdd(product)}
                    className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5 shadow-sm ${
                      addedId === product.id
                        ? 'bg-emerald-600 text-white'
                        : 'bg-berri-navy text-white hover:bg-berri-royal hover:shadow-md'
                    }`}
                  >
                    {addedId === product.id ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added to Cart!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Quick Add</span>
                      </>
                    )}
                  </button>

                  <a
                    href={product.officialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl border border-slate-200 text-slate-500 hover:text-berri-navy hover:border-slate-300 transition-colors"
                    title="View official page"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

