import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, ShoppingBag, Droplets, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { Product, PRODUCTS } from '../data/berriData';
import { useCart } from '../context/CartContext';

interface HeroProps {
  activeProduct: Product;
  onSelectProduct: (product: Product) => void;
}

export const Hero: React.FC<HeroProps> = ({ activeProduct, onSelectProduct }) => {
  const { addToCart, openCart } = useCart();
  const [activeLine, setActiveLine] = useState<'all' | 'fit' | 'lyte' | 'lyte-advanced'>('all');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [waveHeight, setWaveHeight] = useState(24);
  const heroRef = useRef<HTMLDivElement>(null);

  // Filtered flavors based on activeLine
  const displayedFlavors = activeLine === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.line === activeLine);

  const currentIndex = displayedFlavors.findIndex(p => p.id === activeProduct.id);
  const safeIndex = currentIndex !== -1 ? currentIndex : 0;

  // Next / Prev handlers
  const handlePrev = () => {
    const nextIdx = (safeIndex - 1 + displayedFlavors.length) % displayedFlavors.length;
    onSelectProduct(displayedFlavors[nextIdx]);
  };

  const handleNext = () => {
    const nextIdx = (safeIndex + 1) % displayedFlavors.length;
    onSelectProduct(displayedFlavors[nextIdx]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [safeIndex, displayedFlavors]);

  // Subtle mouse tilt effect on hero bottle
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  // Trigger liquid wave rise on flavor change
  useEffect(() => {
    setWaveHeight(10);
    const timer = setTimeout(() => {
      setWaveHeight(32);
    }, 50);
    return () => clearTimeout(timer);
  }, [activeProduct.id]);

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden transition-colors duration-700 ease-in-out pt-6 pb-12 select-none"
      style={{
        backgroundColor: '#FAFAF9'
      }}
    >
      {/* 1. SIGNATURE LIQUID FLOOD TRANSITION (Rising Meniscus Wave) */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none transition-all duration-700 ease-out"
        style={{
          height: `${waveHeight}%`,
          background: `linear-gradient(to top, ${activeProduct.color}22 0%, ${activeProduct.color}08 70%, transparent 100%)`
        }}
      >
        {/* Animated Meniscus Wave SVG */}
        <svg
          className="absolute -top-12 inset-x-0 w-full h-14 text-white/30 fill-current opacity-70 transition-all duration-700"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          style={{ color: activeProduct.color }}
        >
          <path
            d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,58.7C672,43,768,21,864,21.3C960,21,1056,43,1152,53.3C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fillOpacity="0.12"
          />
        </svg>
      </div>

      {/* Ambient Radial Liquid Glow in Background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl pointer-events-none transition-all duration-700 opacity-40"
        style={{
          background: `radial-gradient(circle, ${activeProduct.color} 0%, transparent 70%)`
        }}
      />

      {/* Floating Real Ingredient Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glass of Strawberry Drink on Left */}
        <div
          className="absolute hidden md:block left-6 lg:left-14 top-1/3 w-36 lg:w-44 transition-transform duration-500 will-change-transform animate-float-gentle"
          style={{
            transform: `translate3d(${mousePos.x * -25}px, ${mousePos.y * -25}px, 0)`,
            animationDelay: '0s'
          }}
        >
          <img
            src="/assets/element_strawberry_glass.png"
            alt="Real fruit hydration in glass"
            className="w-full h-auto drop-shadow-xl"
          />
          <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-2 text-center">
            Real Fruit • No Dyes
          </div>
        </div>

        {/* Coconut Element on Right */}
        <div
          className="absolute hidden md:block right-8 lg:right-24 top-1/4 w-32 lg:w-40 transition-transform duration-500 will-change-transform animate-float-gentle"
          style={{
            transform: `translate3d(${mousePos.x * 30}px, ${mousePos.y * 30}px, 0)`,
            animationDelay: '1.5s'
          }}
        >
          <img
            src="/assets/element_coconut.png"
            alt="Organic Young Coconut Water"
            className="w-full h-auto drop-shadow-xl"
          />
          <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-2 text-center">
            Young Coconut Water
          </div>
        </div>

        {/* Crisp Apple Slices on Bottom Right */}
        <div
          className="absolute hidden lg:block right-16 bottom-20 w-32 transition-transform duration-500 will-change-transform animate-float-gentle"
          style={{
            transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * 20}px, 0)`,
            animationDelay: '3s'
          }}
        >
          <img
            src="/assets/element_apple_slices.png"
            alt="Real fruit slices"
            className="w-full h-auto drop-shadow-lg opacity-85"
          />
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex-1 flex flex-col justify-center">
        {/* Line Switcher Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 sm:mb-8">
          <div className="inline-flex p-1.5 bg-white/90 backdrop-blur-md rounded-full shadow-sm border border-slate-200/80">
            {[
              { id: 'all', label: 'All Flavors' },
              { id: 'fit', label: 'Berri Fit® Active' },
              { id: 'lyte', label: 'Berri Lyte® Rapid' },
              { id: 'lyte-advanced', label: 'Lyte Advanced' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveLine(tab.id as any);
                  const firstInLine = tab.id === 'all'
                    ? PRODUCTS[0]
                    : PRODUCTS.find(p => p.line === tab.id);
                  if (firstInLine) onSelectProduct(firstInLine);
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeLine === tab.id
                    ? 'bg-berri-navy text-white shadow-sm'
                    : 'text-berri-navy/70 hover:text-berri-navy hover:bg-slate-100/70'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="hidden sm:flex items-center space-x-2 bg-white/80 px-3.5 py-1.5 rounded-full border border-slate-200/60 text-xs font-semibold text-slate-600">
            <img src="/assets/usda_organic_seal.svg" alt="USDA Organic" className="w-4 h-4 object-contain" />
            <span>100% USDA Certified Organic</span>
          </div>
        </div>

        {/* Center Grid: Left Text, Center Bottle Stage, Right Quick Stats & Rail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[520px]">
          {/* Left Column: Product Info & CTAs */}
          <div className="lg:col-span-4 text-center lg:text-left space-y-5">
            {/* Kicker badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200/80 shadow-xs">
              <span
                className="w-2.5 h-2.5 rounded-full animate-pulse"
                style={{ backgroundColor: activeProduct.color }}
              />
              <span className="text-xs font-bold uppercase tracking-wider text-berri-navy">
                {activeProduct.lineLabel}
              </span>
              {activeProduct.badge && (
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-berri-navy text-white ml-1">
                  {activeProduct.badge}
                </span>
              )}
            </div>

            {/* Flavor Title & Verbatim Brand Messaging */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-berri-navy font-display leading-[1.08]">
                {activeProduct.name}
              </h1>
              <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                {activeProduct.description}
              </p>
            </div>

            {/* Verbatim Verified Pillar Badges */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-1">
              {activeProduct.benefits.map((b, i) => (
                <span
                  key={i}
                  className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white/80 text-berri-navy border border-slate-200/80 shadow-xs"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-berri-teal" />
                  <span>{b}</span>
                </span>
              ))}
            </div>

            {/* Nutritional & Price Summary */}
            <div className="pt-2 flex items-center justify-center lg:justify-start space-x-6">
              <div>
                <div className="text-2xl font-bold text-berri-navy">{activeProduct.price}</div>
                <div className="text-xs text-slate-500">{activeProduct.size}</div>
              </div>
              <div className="h-9 w-px bg-slate-200" />
              <div>
                <div className="text-sm font-bold text-berri-navy">{activeProduct.calories}</div>
                <div className="text-xs text-slate-500">{activeProduct.sugar}</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <button
                onClick={() => addToCart(activeProduct, 1)}
                className="px-6 py-3.5 rounded-full bg-berri-navy text-white text-sm font-bold shadow-lg hover:shadow-xl hover:bg-berri-royal transition-all duration-200 flex items-center space-x-2 group"
              >
                <ShoppingBag className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>Add to Cart — {activeProduct.price}</span>
              </button>

              <a
                href="#flavors"
                className="px-5 py-3.5 rounded-full bg-white border border-slate-200 text-sm font-bold text-berri-navy hover:border-berri-teal hover:text-berri-teal transition-all"
              >
                Explore Range
              </a>

              <a
                href="https://berriorganics.com/pages/store-locator"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-berri-teal hover:border-berri-teal transition-all"
                title="Find in store locator"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Center Column: Big Stage Bottle with 3D Tilt & Giant Translucent Name */}
          <div className="lg:col-span-5 relative flex items-center justify-center py-4">
            {/* Giant Translucent Flavor Name Behind Bottle */}
            <div
              className="absolute font-display font-black text-6xl sm:text-7xl lg:text-8xl tracking-tighter uppercase pointer-events-none select-none transition-all duration-700 text-center leading-none z-0"
              style={{
                color: activeProduct.color,
                opacity: 0.12,
                transform: `translate3d(${mousePos.x * -18}px, ${mousePos.y * -18}px, 0)`
              }}
            >
              {activeProduct.name}
            </div>

            {/* Realistic Center Bottle Hero Composite */}
            <div
              className="relative z-10 transition-transform duration-300 ease-out will-change-transform max-w-[340px] sm:max-w-[420px] lg:max-w-[460px]"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 12}deg) rotateX(${mousePos.y * -12}deg) translateY(${mousePos.y * 10}px)`
              }}
            >
              <img
                key={activeProduct.id}
                src={activeProduct.heroRender}
                alt={`${activeProduct.name} - ${activeProduct.lineLabel}`}
                className="w-full h-auto object-contain transition-all duration-500 animate-in fade-in zoom-in-95"
              />
            </div>

            {/* Prev / Next Stage Controls */}
            <button
              onClick={handlePrev}
              className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md shadow-md border border-slate-200/80 flex items-center justify-center text-berri-navy hover:text-berri-teal hover:scale-105 transition-all"
              aria-label="Previous Flavor"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md shadow-md border border-slate-200/80 flex items-center justify-center text-berri-navy hover:text-berri-teal hover:scale-105 transition-all"
              aria-label="Next Flavor"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Column: Vertical Flavor Progress Rail & True-to-Nature Highlights */}
          <div className="lg:col-span-3 space-y-6">
            {/* Vertical Flavor Rail (Interactive Thumbnails) */}
            <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-slate-200/70 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Flavor Selection ({safeIndex + 1}/{displayedFlavors.length})
                </span>
                <span className="text-xs font-extrabold text-berri-navy">{activeProduct.name}</span>
              </div>

              {/* Progress Bar (Fill Level) */}
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-4">
                <div
                  className="h-full transition-all duration-500 rounded-full"
                  style={{
                    width: `${((safeIndex + 1) / displayedFlavors.length) * 100}%`,
                    backgroundColor: activeProduct.color
                  }}
                />
              </div>

              {/* Thumbnails Rail */}
              <div className="grid grid-cols-4 lg:grid-cols-3 gap-2 max-h-[220px] overflow-y-auto pr-1">
                {displayedFlavors.map(prod => (
                  <button
                    key={prod.id}
                    onClick={() => onSelectProduct(prod)}
                    className={`p-1.5 rounded-xl border transition-all flex flex-col items-center justify-center ${
                      prod.id === activeProduct.id
                        ? 'border-berri-navy bg-slate-50 shadow-sm scale-105 ring-2 ring-berri-teal/30'
                        : 'border-slate-100 hover:border-slate-300 bg-white'
                    }`}
                    title={prod.name}
                  >
                    <div className="h-14 flex items-center justify-center">
                      <img
                        src={prod.cutout}
                        alt={prod.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <span className="text-[10px] font-bold text-slate-700 truncate w-full text-center mt-1">
                      {prod.name.split(' ')[0]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Key Botanical Ingredients Box */}
            <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-slate-200/70 shadow-xs">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center space-x-1.5">
                <Droplets className="w-3.5 h-3.5 text-berri-teal" />
                <span>True-to-Nature Ingredients</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeProduct.keyIngredients.map((ing, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-50 text-slate-700 border border-slate-100"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ticker / Verified Statement Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6">
        <div className="py-3 px-6 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/60 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-3">
          <div className="flex items-center space-x-2 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-semibold text-berri-navy">Official Formula:</span>
            <span>Recommended by the World Health Organization (WHO) for rapid oral rehydration.</span>
          </div>

          <div className="flex items-center space-x-4 text-slate-500 font-semibold">
            <span>Plant-Based</span>
            <span>•</span>
            <span>Less Sugar*</span>
            <span>•</span>
            <span>Proven to Hydrate</span>
            <span>•</span>
            <span>Tastes Great</span>
          </div>
        </div>
      </div>
    </section>
  );
};

