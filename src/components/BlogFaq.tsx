import React, { useState } from 'react';
import { BLOGS, FAQS } from '../data/berriData';
import { ChevronDown, ArrowRight, HelpCircle, BookOpen, Mail, CheckCircle2 } from 'lucide-react';

export const BlogFaq: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(prev => (prev === index ? null : index));
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2500);
  };

  return (
    <section id="faqs" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* 1. Official Blog Articles */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-berri-ice text-berri-navy border border-slate-200 text-xs font-bold uppercase tracking-wider mb-3">
                <BookOpen className="w-3.5 h-3.5 text-berri-teal" />
                <span>The Clean Hydration Journal</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-berri-navy font-display tracking-tight">
                Latest Articles & Pediatric Insights
              </h2>
            </div>
            <a
              href="https://berriorganics.com/blogs/blog"
              target="_blank"
              rel="noreferrer"
              className="text-xs sm:text-sm font-bold text-berri-teal hover:underline flex items-center space-x-1"
            >
              <span>View all on official blog</span>
              <span>→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOGS.map((blog, idx) => (
              <a
                key={idx}
                href={blog.url}
                target="_blank"
                rel="noreferrer"
                className="group bg-slate-50 rounded-3xl border border-slate-200/80 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-200">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      {blog.date}
                    </div>
                    <h3 className="text-lg font-bold text-berri-navy font-display group-hover:text-berri-teal transition-colors leading-snug">
                      {blog.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/60 flex items-center text-xs font-bold text-berri-navy group-hover:text-berri-teal">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* 2. Official FAQs (Verbatim from /pages/faq) */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-berri-ice text-berri-navy border border-slate-200 text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-berri-teal" />
              <span>Answers to Common Questions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-berri-navy font-display tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Verified answers directly from the official Berri Organics knowledgebase.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left bg-white hover:bg-slate-50 flex items-center justify-between transition-colors focus:outline-none"
                  >
                    <span className="font-bold text-sm sm:text-base text-berri-navy font-display pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-berri-teal' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-5 pt-0 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Newsletter & Final Call-to-Action */}
        <div className="rounded-3xl bg-gradient-to-r from-berri-navy to-berri-blue p-8 sm:p-14 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl space-y-3 text-center md:text-left">
            <div className="text-xs font-bold uppercase tracking-widest text-emerald-300">
              Join the Movement
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-display">
              Subscribe To Receive Updates, Deals & News!
            </h3>
            <p className="text-xs sm:text-sm text-white/80 font-normal">
              Subscribe to our newsletter for exclusive updates, special offers, and a taste delivered straight to your inbox.
            </p>
          </div>

          <div className="w-full md:w-auto shrink-0 max-w-md">
            {subscribed ? (
              <div className="p-4 rounded-2xl bg-white/10 border border-emerald-400/50 text-white flex items-center space-x-2 text-sm font-bold">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Thank you for subscribing! Check your inbox soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white text-berri-navy text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-berri-teal"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-full bg-berri-teal text-white text-xs sm:text-sm font-bold shadow-md hover:bg-emerald-500 transition-colors whitespace-nowrap"
                >
                  Subscribe Today
                </button>
              </form>
            )}
            <div className="text-[11px] text-white/60 mt-2 text-center md:text-left">
              By signing up to receive emails from Berri Organics, you agree to our privacy policy.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

