import React, { useState } from 'react';
import { ChevronDown, Star, MessageSquareQuote, HelpCircle, ShieldCheck } from 'lucide-react';
import { FAQS, TESTIMONIALS } from '../data/faq';

export const TrustAndFAQ: React.FC = () => {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      {/* 1. Customer Testimonials Section */}
      <div id="reviews-section">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-2">
              <span className="w-5 h-[1px] bg-[#D4AF37]" />
              <span>Etibar və Rəylər</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Müştərilərimizin Təcrübəsi
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center text-[#D4AF37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
              ))}
            </div>
            <span className="text-sm font-bold text-white tabular-nums">4.9 / 5.0</span>
            <span className="text-xs text-slate-400">(Google Reviews & VIP Sifarişlər)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[#0F1117] rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-[#D4AF37]/40 transition-all flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-[#D4AF37]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-6 h-6 text-white/20" />
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-white/5 flex items-center gap-3.5">
                <img
                  src={item.avatarUrl}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border border-[#D4AF37]/40 shrink-0"
                />
                <div className="min-w-0">
                  <div className="text-sm font-bold text-white truncate">{item.name}</div>
                  <div className="text-[11px] text-slate-400 truncate">{item.role} · {item.company}</div>
                  <div className="text-[10px] text-[#D4AF37] font-medium mt-0.5">
                    İcarə: {item.carRented}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. FAQ Accordion Section */}
      <div id="faq-section" className="pt-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Məlumat Mərkəzi</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Tez-tez Verilən Suallar (FAQ)
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-400">
            Avtomobil icarəsi, depozit qaydaları, hava limanı transferləri və sənədləşmə ilə bağlı ən vacib suallara aydın cavablar.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openFAQIndex === index;
            return (
              <div
                key={index}
                className="bg-[#0F1117] rounded-2xl border border-white/10 overflow-hidden transition-colors hover:border-white/20"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-semibold text-sm sm:text-base text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-[#D4AF37] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#D4AF37]/10' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 mt-1">
                    <p className="pt-3">{faq.answer}</p>
                    <div className="mt-3 text-[11px] text-[#D4AF37] flex items-center gap-1.5 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Kateqoriya: {faq.category}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
