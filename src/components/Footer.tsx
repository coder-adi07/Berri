import React from 'react';
import { POLICY_NOTES } from '../data/berriData';
import { ShieldCheck, Heart, MapPin, ExternalLink, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-berri-dark text-white pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Grid: Logo & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="inline-block">
              <img
                src="/assets/logo_footer.svg"
                alt="Berri Organics"
                className="h-10 w-auto object-contain"
              />
            </a>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Plant-based, USDA Organic electrolyte solutions engineered for active families, athletes, and rapid hydration needs.
            </p>
            <div className="flex items-center space-x-3 text-xs text-emerald-400 font-semibold pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>100% USDA Certified Organic • Non-GMO</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-3">
              <a
                href="https://www.facebook.com/BerriOrganics/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-berri-teal transition-colors flex items-center justify-center text-xs font-bold"
                aria-label="Facebook"
              >
                FB
              </a>
              <a
                href="https://www.instagram.com/berriorganics/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-berri-teal transition-colors flex items-center justify-center text-xs font-bold"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href="https://www.tiktok.com/@berriorganics"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-berri-teal transition-colors flex items-center justify-center text-xs font-bold"
                aria-label="TikTok"
              >
                TT
              </a>
              <a
                href="https://www.linkedin.com/company/berri-pro/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-berri-teal transition-colors flex items-center justify-center text-xs font-bold"
                aria-label="LinkedIn"
              >
                IN
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Shop Collections
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#flavors" className="hover:text-berri-teal transition-colors">
                  Berri Fit® Active Hydration
                </a>
              </li>
              <li>
                <a href="#flavors" className="hover:text-berri-teal transition-colors">
                  Berri Lyte® Oral Rehydration
                </a>
              </li>
              <li>
                <a href="#flavors" className="hover:text-berri-teal transition-colors">
                  Berri Lyte® Advanced Formula
                </a>
              </li>
              <li>
                <a href="#flavors" className="hover:text-berri-teal transition-colors">
                  Variety Sampler Packs
                </a>
              </li>
              <li>
                <a
                  href="https://berriorganics.com/collections/all"
                  target="_blank"
                  rel="noreferrer"
                  className="text-berri-teal font-semibold flex items-center space-x-1 hover:underline"
                >
                  <span>Official Online Store</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Learn & About Column */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Learn & Company
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#pillars" className="hover:text-berri-teal transition-colors">
                  Why Berri Organics
                </a>
              </li>
              <li>
                <a href="#ingredients" className="hover:text-berri-teal transition-colors">
                  8 Pure Botanicals
                </a>
              </li>
              <li>
                <a href="#giving-back" className="hover:text-berri-teal transition-colors">
                  Giving Back to Defy Cancer
                </a>
              </li>
              <li>
                <a
                  href="https://berriorganics.com/pages/about-us"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-berri-teal transition-colors"
                >
                  About Us (Founder Story)
                </a>
              </li>
              <li>
                <a
                  href="https://berriorganics.com/pages/wholesale-account-request"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-berri-teal transition-colors"
                >
                  Wholesale Account Request
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Policies */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Customer Care
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#faqs" className="hover:text-berri-teal transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a
                  href="https://berriorganics.com/pages/store-locator"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-berri-teal transition-colors flex items-center space-x-1"
                >
                  <MapPin className="w-3.5 h-3.5 text-berri-teal" />
                  <span>Store Locator</span>
                </a>
              </li>
              <li>
                <a
                  href="https://berriorganics.com/pages/contact-us"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-berri-teal transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li className="pt-2 text-slate-400 text-[11px]">
                {POLICY_NOTES.guarantee}
              </li>
              <li className="text-slate-400 text-[11px]">
                {POLICY_NOTES.shipping}
              </li>
            </ul>
          </div>
        </div>

        {/* Mandatory Concept & Disclosure Notes */}
        <div className="space-y-4 text-xs text-slate-400 leading-relaxed text-center sm:text-left">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
              <span className="font-semibold text-white">
                {POLICY_NOTES.conceptNote}
              </span>
            </div>
            <div className="text-[11px] text-slate-400 italic">
              {POLICY_NOTES.pricesNote}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 pt-2 gap-2">
            <div>
              © {new Date().getFullYear()} Berri Organics. Redesigned with creative excellence.
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://berriorganics.com/policies/privacy-policy"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Privacy Policy
              </a>
              <span>•</span>
              <a
                href="https://berriorganics.com/policies/terms-of-service"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Terms of Service
              </a>
              <span>•</span>
              <a
                href="https://berriorganics.com/policies/shipping-policy"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Shipping Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

