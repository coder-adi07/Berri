import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, ChevronDown, ChevronRight, Sparkles, MapPin, Heart, ShieldCheck, Activity, Droplets } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS, Product } from '../data/berriData';

interface HeaderProps {
  onSelectProduct?: (product: Product) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSelectProduct }) => {
  const { totalCount, openCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [shopMenuOpen, setShopMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const [activeMegaLine, setActiveMegaLine] = useState<'fit' | 'lyte' | 'lyte-advanced' | 'samplers'>('fit');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const lineProducts = PRODUCTS.filter(p => p.line === activeMegaLine);

  return (
    <>
      {/* Top verified announcement bar */}
      <div className="bg-berri-navy text-white text-xs font-medium py-2 px-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden sm:flex items-center space-x-2 text-berri-ice/80">
            <ShieldCheck className="w-3.5 h-3.5 text-berri-teal" />
            <span>45-Day Money-Back Guarantee</span>
          </div>

          <div className="flex-1 text-center font-semibold tracking-wide">
            <span className="text-berri-teal font-bold mr-1">$6.99 flat shipping</span>
            <span className="text-white/60">•</span>
            <span className="ml-1 text-white">Free shipping on orders +$75</span>
            <span className="hidden md:inline text-white/50 text-[11px] ml-2">
              (Prices as listed on berriorganics.com)
            </span>
          </div>

          <div className="hidden sm:flex items-center space-x-3 text-xs text-white/80">
            <a
              href="https://berriorganics.com/pages/store-locator"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-1 hover:text-berri-teal transition-colors"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Store Locator</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3.5 border-b border-slate-100'
            : 'bg-white/90 backdrop-blur-sm py-5 border-b border-slate-200/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Original Brand Logo */}
          <div className="flex items-center">
            <a href="#" className="inline-block group focus:outline-none py-1">
              <img
                src="/assets/logo_header.svg"
                alt="Berri Organics"
                className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-102"
              />
            </a>
          </div>

          {/* Center: Nav links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Shop with Mega Menu Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setShopMenuOpen(true)}
              onMouseLeave={() => setShopMenuOpen(false)}
            >
              <button
                className="flex items-center space-x-1 font-semibold text-sm tracking-wide text-berri-navy hover:text-berri-teal transition-colors py-2"
                onClick={() => setShopMenuOpen(prev => !prev)}
              >
                <span>Shop</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${shopMenuOpen ? 'rotate-180 text-berri-teal' : ''}`} />
              </button>

              {/* Mega Menu Dropdown */}
              {shopMenuOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[780px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="grid grid-cols-12 gap-6">
                    {/* Line Tabs */}
                    <div className="col-span-4 border-r border-slate-100 pr-4 space-y-1">
                      <div className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-3">
                        Hydration Lines
                      </div>
                      {[
                        { id: 'fit', label: 'Berri Fit®', sub: 'Active Sports Hydration', color: 'text-amber-600' },
                        { id: 'lyte', label: 'Berri Lyte®', sub: 'Pediatrician Approved (WHO)', color: 'text-rose-600' },
                        { id: 'lyte-advanced', label: 'Berri Lyte® Advanced', sub: 'Rapid + Elderberry Boost', color: 'text-purple-600' },
                        { id: 'samplers', label: 'Variety Samplers', sub: 'Multi-Flavor Packs', color: 'text-teal-600' },
                      ].map(tab => (
                        <button
                          key={tab.id}
                          className={`w-full text-left px-3.5 py-2.5 rounded-xl transition-all ${
                            activeMegaLine === tab.id
                              ? 'bg-berri-ice text-berri-navy font-bold shadow-sm'
                              : 'text-slate-600 hover:bg-slate-50'
                          }`}
                          onMouseEnter={() => setActiveMegaLine(tab.id as any)}
                          onClick={() => setActiveMegaLine(tab.id as any)}
                        >
                          <div className="text-sm font-semibold flex items-center justify-between">
                            <span>{tab.label}</span>
                          </div>
                          <div className="text-xs text-slate-500 font-normal mt-0.5">{tab.sub}</div>
                        </button>
                      ))}

                      <div className="pt-4 mt-3 border-t border-slate-100">
                        <a
                          href="https://berriorganics.com/collections/all"
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-semibold text-berri-teal hover:underline flex items-center space-x-1"
                        >
                          <span>View all collections on official store</span>
                          <span>→</span>
                        </a>
                      </div>
                    </div>

                    {/* Products Grid in active line */}
                    <div className="col-span-8">
                      <div className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-3 flex justify-between">
                        <span>Featured Bottles</span>
                        <span className="text-berri-teal">100% Organic</span>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        {lineProducts.slice(0, 3).map(prod => (
                          <div
                            key={prod.id}
                            className="group p-3 rounded-xl border border-slate-100 hover:border-berri-teal/40 hover:bg-slate-50/50 transition-all text-center cursor-pointer"
                            onClick={() => {
                              onSelectProduct?.(prod);
                              setShopMenuOpen(false);
                            }}
                          >
                            <div className="h-28 flex items-center justify-center relative overflow-hidden mb-2">
                              <img
                                src={prod.cutout}
                                alt={prod.name}
                                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="text-xs font-bold text-berri-navy truncate">{prod.name}</div>
                            <div className="text-[11px] text-slate-500">{prod.price}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#pillars"
              className="font-medium text-sm text-berri-navy/80 hover:text-berri-teal transition-colors"
            >
              Why Berri
            </a>

            <a
              href="#flavors"
              className="font-medium text-sm text-berri-navy/80 hover:text-berri-teal transition-colors"
            >
              Flavors
            </a>

            <a
              href="#ingredients"
              className="font-medium text-sm text-berri-navy/80 hover:text-berri-teal transition-colors"
            >
              Ingredients
            </a>

            <a
              href="#giving-back"
              className="font-medium text-sm text-berri-navy/80 hover:text-berri-teal transition-colors flex items-center space-x-1"
            >
              <Heart className="w-3.5 h-3.5 text-rose-500" />
              <span>Giving Back</span>
            </a>

            <a
              href="#faqs"
              className="font-medium text-sm text-berri-navy/80 hover:text-berri-teal transition-colors"
            >
              FAQ
            </a>
          </nav>

          {/* Right: Actions (Store Locator, Cart Trigger, Mobile Toggle) */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <a
              href="https://berriorganics.com/pages/store-locator"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center space-x-1.5 text-xs font-semibold text-berri-navy/80 hover:text-berri-teal transition-colors border border-slate-200 px-3.5 py-1.5 rounded-full hover:border-berri-teal"
            >
              <MapPin className="w-3.5 h-3.5 text-berri-teal" />
              <span>Find in Store</span>
            </a>

            {/* Cart Trigger Button */}
            <button
              onClick={openCart}
              className="relative p-2.5 rounded-full bg-berri-ice text-berri-navy hover:bg-berri-teal hover:text-white transition-all shadow-sm group focus:outline-none"
              aria-label="Open Cart Drawer"
            >
              <ShoppingBag className="w-5 h-5 transition-transform group-hover:scale-110" />
              {totalCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-berri-royal text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-md animate-pulse-soft">
                  {totalCount}
                </span>
              )}
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-berri-navy hover:text-berri-teal transition-colors focus:outline-none rounded-lg hover:bg-slate-100"
              aria-label="Open mobile navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Right Slide-In Curtain / Drawer (Half Screen Length-wise, OUTSIDE header so not trapped by backdrop-blur) */}
      <div
        className={`fixed inset-0 z-[99998] lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
        }`}
      >
        {/* Soft Dim Backdrop Overlay */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity duration-300"
          aria-hidden="true"
        />

        {/* Right Sliding Curtain (Berri Signature Royal Blue: #134074) */}
        <div
          style={{ backgroundColor: '#134074' }}
          className={`fixed inset-y-0 right-0 w-[65vw] min-w-[275px] max-w-sm shadow-2xl flex flex-col justify-between z-[99999] transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Curtain Top Bar (Berri Teal Ribbon Header: #00A896) */}
          <div
            style={{ backgroundColor: '#00A896' }}
            className="p-4 flex items-center justify-between shadow-sm shrink-0"
          >
            <a href="#" onClick={() => setMobileMenuOpen(false)} className="inline-block">
              <img
                src="/assets/logo_footer.svg"
                alt="Berri Organics"
                className="h-7 w-auto object-contain brightness-0 invert drop-shadow-sm"
              />
            </a>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/35 text-white flex items-center justify-center transition-all focus:outline-none shadow-sm"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5 text-white stroke-[2.5]" />
            </button>
          </div>

          {/* Exact Navbar Menus List */}
          <div className="flex-1 overflow-y-auto px-5 py-6 space-y-1">
            <div className="text-[10px] font-black uppercase tracking-widest text-[#00E5FF] mb-3 px-1">
              Navigation Menu
            </div>

            {/* 1. Shop (with toggleable accordion sub-lines - hidden by default, shows on click) */}
            <div className="border-b border-white/10 pb-2 mb-1">
              <button
                type="button"
                onClick={() => setMobileShopOpen(prev => !prev)}
                className="w-full flex items-center justify-between text-lg font-black text-white hover:text-[#00E5FF] py-2.5 transition-colors font-display text-left focus:outline-none"
              >
                <span className="flex items-center space-x-2.5">
                  <ShoppingBag className="w-5 h-5 text-[#00E5FF]" />
                  <span>Shop</span>
                </span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${
                    mobileShopOpen ? 'rotate-180 text-[#00E5FF]' : 'text-white/60'
                  }`}
                />
              </button>

              {/* Sub-lines (Hidden by default, shown on click) */}
              {mobileShopOpen && (
                <div className="pl-6 pt-1 pb-2 space-y-2 animate-in fade-in slide-in-from-top-1 duration-200">
                  <a
                    href="#flavors"
                    onClick={() => {
                      setActiveMegaLine('fit');
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center space-x-2.5 text-xs text-slate-200 hover:text-[#00E5FF] py-1.5 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shrink-0"></span>
                    <span>Berri Fit® Active Hydration</span>
                  </a>
                  <a
                    href="#flavors"
                    onClick={() => {
                      setActiveMegaLine('lyte');
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center space-x-2.5 text-xs text-slate-200 hover:text-[#00E5FF] py-1.5 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                    <span>Berri Lyte® Oral Rehydration</span>
                  </a>
                  <a
                    href="#flavors"
                    onClick={() => {
                      setActiveMegaLine('lyte-advanced');
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center space-x-2.5 text-xs text-slate-200 hover:text-[#00E5FF] py-1.5 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0"></span>
                    <span>Berri Lyte® Advanced</span>
                  </a>
                  <a
                    href="#flavors"
                    onClick={() => {
                      setActiveMegaLine('samplers');
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center space-x-2.5 text-xs text-slate-200 hover:text-[#00E5FF] py-1.5 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                    <span>Variety Sampler Packs</span>
                  </a>
                </div>
              )}
            </div>

            {/* 2. Why Berri */}
            <a
              href="#pillars"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-base font-bold text-white hover:text-[#00E5FF] py-3 border-b border-white/10 transition-colors font-display"
            >
              <span>Why Berri</span>
              <ChevronRight className="w-4 h-4 text-white/50" />
            </a>

            {/* 3. Flavors */}
            <a
              href="#flavors"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-base font-bold text-white hover:text-[#00E5FF] py-3 border-b border-white/10 transition-colors font-display"
            >
              <span>Flavors</span>
              <ChevronRight className="w-4 h-4 text-white/50" />
            </a>

            {/* 4. Ingredients */}
            <a
              href="#ingredients"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-base font-bold text-white hover:text-[#00E5FF] py-3 border-b border-white/10 transition-colors font-display"
            >
              <span>Ingredients</span>
              <ChevronRight className="w-4 h-4 text-white/50" />
            </a>

            {/* 5. Giving Back */}
            <a
              href="#giving-back"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-base font-bold text-white hover:text-[#00E5FF] py-3 border-b border-white/10 transition-colors font-display"
            >
              <span className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-rose-400" />
                <span>Giving Back</span>
              </span>
              <ChevronRight className="w-4 h-4 text-white/50" />
            </a>

            {/* 6. FAQ */}
            <a
              href="#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-base font-bold text-white hover:text-[#00E5FF] py-3 border-b border-white/10 transition-colors font-display"
            >
              <span>FAQ</span>
              <ChevronRight className="w-4 h-4 text-white/50" />
            </a>

            {/* 7. Store Locator */}
            <a
              href="https://berriorganics.com/pages/store-locator"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between text-base font-bold text-[#00E5FF] hover:underline py-3 border-b border-white/10 transition-colors font-display"
            >
              <span className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Store Locator</span>
              </span>
              <ChevronRight className="w-4 h-4 text-white/50" />
            </a>
          </div>

          {/* Curtain Bottom Information (Berri Royal Accent) */}
          <div
            style={{ backgroundColor: '#0E3059' }}
            className="p-3.5 space-y-2 border-t border-white/15 text-white shrink-0"
          >
            <div className="flex items-center space-x-2.5">
              <img
                src="/assets/usda_organic_seal.svg"
                alt="USDA Organic"
                className="w-8 h-8 object-contain bg-white rounded-lg p-0.5 shadow-xs"
              />
              <div className="text-[11px] leading-tight">
                <div className="font-extrabold text-white">USDA Certified Organic</div>
                <div className="text-emerald-300 font-medium">Zero Artificial Ingredients</div>
              </div>
            </div>

            <div className="pt-1.5 flex items-center justify-between text-[11px] text-white/80 font-semibold border-t border-white/10">
              <span>45-Day Guarantee</span>
              <span>•</span>
              <span>Free shipping $75+</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

