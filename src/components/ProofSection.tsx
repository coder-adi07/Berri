import React, { useState } from 'react';
import { MEDICAL_QUOTE, REVIEWS, VIDEO_STORIES, VideoStory } from '../data/berriData';
import { VideoModal } from './VideoModal';
import { Star, ShieldCheck, Play, Quote, Sparkles, CheckCircle2 } from 'lucide-react';

export const ProofSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoStory | null>(null);

  return (
    <section className="py-24 bg-slate-50/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white text-berri-navy border border-slate-200 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-berri-teal" />
            <span>Verified Trust & Proof</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-berri-navy font-display tracking-tight">
            Backed by Pediatricians. Loved by Families.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Real medical recommendations, verified parent testimonials, and thousands of life-changing recovery stories.
          </p>
        </div>

        {/* 1. FEATURED VERBATIM MEDICAL QUOTE (Boston Children's Hospital) */}
        <div className="mb-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-berri-dark via-berri-navy to-berri-blue text-white shadow-xl relative overflow-hidden border border-white/10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-berri-teal/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Medical Badge */}
            <div className="lg:col-span-3 text-center lg:text-left space-y-3">
              <div className="inline-flex p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <ShieldCheck className="w-8 h-8 text-emerald-400" />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                Clinical Recommendation
              </div>
              <div className="text-lg font-black font-display text-white">
                World Health Organization Standard
              </div>
            </div>

            {/* Right: Verbatim Medical Statement */}
            <div className="lg:col-span-9 space-y-4">
              <Quote className="w-8 h-8 text-berri-teal opacity-60" />
              <blockquote className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-white/95 italic">
                "{MEDICAL_QUOTE.quote}"
              </blockquote>
              <div className="pt-2 text-sm font-bold text-emerald-300 flex items-center space-x-2">
                <span>— {MEDICAL_QUOTE.author}, {MEDICAL_QUOTE.institution}</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
          </div>
        </div>

        {/* 2. VERIFIED REVIEWS GRID (Rebekah D, Cole L, Sarah M, Nikki Gagnon) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {review.highlight && (
                  <div className="text-xs font-extrabold uppercase tracking-wider text-berri-teal mb-2">
                    {review.highlight}
                  </div>
                )}

                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <div className="text-xs font-bold text-berri-navy">{review.author}</div>
                {review.role && (
                  <div className="text-[11px] text-slate-500 font-normal leading-tight mt-0.5">
                    {review.role}
                  </div>
                )}
                <div className="text-[10px] text-emerald-600 font-semibold flex items-center space-x-1 mt-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified Purchase</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3. "THOUSANDS OF LIFE CHANGING BERRI ORGANICS STORIES!" VIDEO GALLERY */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-berri-teal">
                Community Video Gallery
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-berri-navy font-display mt-1">
                Thousands of Life Changing Berri Organics Stories!
              </h3>
            </div>
            <div className="text-xs font-semibold text-slate-500">
              Click any story to watch real customer video
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {VIDEO_STORIES.map(story => (
              <div
                key={story.id}
                onClick={() => setSelectedVideo(story)}
                className="group relative aspect-[9/16] rounded-2xl overflow-hidden bg-slate-900 cursor-pointer shadow-md hover:shadow-xl transition-all hover:scale-103"
              >
                <img
                  src={story.thumbnail}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Play Button Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-berri-navy shadow-lg group-hover:scale-115 group-hover:bg-berri-teal group-hover:text-white transition-all">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>

                {/* Caption Title */}
                <div className="absolute bottom-3 inset-x-3 text-white text-[11px] font-bold line-clamp-2 leading-tight">
                  {story.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      <VideoModal
        story={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </section>
  );
};

