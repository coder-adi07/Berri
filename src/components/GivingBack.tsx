import React from 'react';
import { FOUNDER_STORY } from '../data/berriData';
import { Heart, Sparkles, ShieldCheck, ExternalLink, Gift } from 'lucide-react';

export const GivingBack: React.FC = () => {
  return (
    <section id="giving-back" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Card */}
        <div className="rounded-3xl bg-gradient-to-br from-berri-cream via-white to-rose-50/50 border border-rose-100 p-8 sm:p-14 shadow-lg relative overflow-hidden">
          {/* Ambient decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto space-y-8 relative z-10">
            {/* Kicker badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 fill-current text-rose-600" />
              <span>You Shop • We Donate to Defy Cancer</span>
            </div>

            {/* Title & Founder Story (Verbatim from About Us) */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-berri-navy font-display tracking-tight">
                {FOUNDER_STORY.heading}
              </h2>

              <p className="mt-6 text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
                {FOUNDER_STORY.quote}
              </p>

              <p className="mt-4 text-base sm:text-lg text-berri-navy font-semibold leading-relaxed">
                {FOUNDER_STORY.mission}
              </p>
            </div>

            {/* Impact Metrics & Program Detail */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {/* Wish Upon a Teen Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black uppercase tracking-wider text-rose-600">
                      Wish Upon a Teen (1%)
                    </span>
                    <Gift className="w-5 h-5 text-rose-500" />
                  </div>
                  <h4 className="text-lg font-bold text-berri-navy font-display mb-2">
                    Design My Room® Program
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Donations provide games, music, arts and crafts, books, picture frames, blankets and decals for hospital rooms of teens battling cancer. As of 2020, Berri Brands has helped fund over 530 Design My Rooms.
                  </p>
                </div>
              </div>

              {/* The Jimmy Fund Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black uppercase tracking-wider text-berri-teal">
                      The Jimmy Fund (2%)
                    </span>
                    <ShieldCheck className="w-5 h-5 text-berri-teal" />
                  </div>
                  <h4 className="text-lg font-bold text-berri-navy font-display mb-2">
                    Dana-Farber Cancer Institute
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Supporting cutting-edge pediatric oncology research, specialized patient care, and clinical trials seeking cures for pediatric cancer.
                  </p>
                </div>
              </div>
            </div>

            {/* MANDATORY VERBATIM CHARITY DISCLOSURE */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 text-xs text-slate-600 space-y-2">
              <div className="font-bold text-berri-navy uppercase tracking-wider text-[11px] flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Official Commercial Co-Venturer Disclosure</span>
              </div>
              <p className="leading-relaxed font-normal text-slate-700">
                {FOUNDER_STORY.disclosure}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

