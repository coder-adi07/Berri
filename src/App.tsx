import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Pillars } from './components/Pillars';
import { FlavorRange } from './components/FlavorRange';
import { WhyBetter } from './components/WhyBetter';
import { TwoLines } from './components/TwoLines';
import { IngredientOrbit } from './components/IngredientOrbit';
import { ProofSection } from './components/ProofSection';
import { GivingBack } from './components/GivingBack';
import { RetailerMarquee } from './components/RetailerMarquee';
import { BlogFaq } from './components/BlogFaq';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { DropletCursor } from './components/DropletCursor';
import { PRODUCTS, Product } from './data/berriData';

export const App: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState<Product>(PRODUCTS[0]); // Dragon fruit by default

  const handleSelectProduct = (product: Product) => {
    setActiveProduct(product);
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-berri-cream/60 selection:bg-berri-teal selection:text-white">
        {/* Custom Subtle Water Droplet Cursor */}
        <DropletCursor />

        {/* Global Navigation Header */}
        <Header onSelectProduct={handleSelectProduct} />

        {/* Main Sections */}
        <main className="flex-1">
          {/* 01 Hero with Signature Liquid Color Flood */}
          <Hero
            activeProduct={activeProduct}
            onSelectProduct={handleSelectProduct}
          />

          {/* 02 Four Pillars of Clean Hydration */}
          <Pillars />

          {/* 03 Pick Your Pack & Numbered Flavor Showcase */}
          <FlavorRange onSelectProduct={handleSelectProduct} />

          {/* 04 Why Berri Organics is Better & Comparison Matrix */}
          <WhyBetter />

          {/* 05 Two Lines, Two Moods (Active Fit vs Rapid Lyte) */}
          <TwoLines onSelectProduct={handleSelectProduct} />

          {/* 06 True-to-Nature Ingredients Orbit */}
          <IngredientOrbit />

          {/* 07 Medical Proof, Customer Reviews & Video Stories */}
          <ProofSection />

          {/* 08 Giving Back to Defy Cancer & Founder Story */}
          <GivingBack />

          {/* 09 Where to Buy & Retailer Marquee */}
          <RetailerMarquee />

          {/* 10 Clean Hydration Journal & Verbatim FAQs */}
          <BlogFaq />
        </main>

        {/* 11 Premium Footer with Verbatim Concept Note */}
        <Footer />

        {/* Interactive Demo Cart Drawer */}
        <CartDrawer />
      </div>
    </CartProvider>
  );
};

export default App;

