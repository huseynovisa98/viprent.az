import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+994 ');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact-section" className="py-24 relative bg-[#090A0F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Details & VIP Office */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-2">
                <span className="w-5 h-[1px] bg-[#D4AF37]" />
                <span>Birbaşa Əlaqə & Mərkəzi Ofis</span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Bizimlə Əlaqə Saxlayın
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Avtomobil icarəsi, Heydər Əliyev Hava Limanı transferləri və toy kortejləri üçün
                qaynar xəttimiz və WhatsApp xidmətimiz 24/7 aktivdir.
              </p>
            </div>

            <div className="space-y-4">
              {/* Phone & Hotline */}
              <div className="p-4 bg-[#0F1117] rounded-2xl border border-white/10 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Qaynar Xətt (24/7 Zənglər):</div>
                  <div className="flex flex-col sm:flex-row sm:gap-4 mt-1">
                    <a
                      href="tel:+994502202020"
                      className="text-sm sm:text-base font-bold text-white hover:text-[#D4AF37] transition-colors tabular-nums"
                    >
                      +994 50 220 20 20
                    </a>
                    <a
                      href="tel:+994124902020"
                      className="text-sm sm:text-base font-bold text-slate-300 hover:text-[#D4AF37] transition-colors tabular-nums"
                    >
                      +994 12 490 20 20
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Direct */}
              <div className="p-4 bg-[#0F1117] rounded-2xl border border-white/10 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 shrink-0">
                  <MessageCircle className="w-5 h-5 fill-[#25D366]/20" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-slate-400 font-medium">WhatsApp ilə dərhal yazın:</div>
                  <div className="text-sm sm:text-base font-bold text-white mt-1 tabular-nums">
                    +994 50 220 20 20
                  </div>
                  <a
                    href="https://wa.me/994502202020?text=Salam,%20VipRent.az%20vasit%C9%99sil%C9%99%20avtomobil%20icar%C9%99si%20haqq%C9%99nda%20m%C9%99lumat%20almaq%20ist%C9%99yir%C9%99m."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs font-semibold text-[#25D366] hover:underline"
                  >
                    Çatı açın →
                  </a>
                </div>
              </div>

              {/* Office Address */}
              <div className="p-4 bg-[#0F1117] rounded-2xl border border-white/10 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Mərkəzi Ofis və Təhvil Məntəqəsi:</div>
                  <div className="text-xs sm:text-sm font-semibold text-white mt-1">
                    Bakı şəhəri, Neftçilər prospekti 151 (Port Baku Towers yaxınlığı)
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Heydər Əliyev Beynəlxalq Aeroportu Terminal 1 (VIP qarşılanma zonası)
                  </div>
                </div>
              </div>

              {/* Working Hours & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#0F1117] rounded-2xl border border-white/10 flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <div>
                    <div className="text-[11px] text-slate-400">İş Rejimi:</div>
                    <div className="text-xs font-bold text-white">7/24 Fasiləsiz</div>
                  </div>
                </div>

                <div className="p-4 bg-[#0F1117] rounded-2xl border border-white/10 flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <div>
                    <div className="text-[11px] text-slate-400">E-poçt:</div>
                    <div className="text-xs font-bold text-white">booking@viprent.az</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Callback / Inquiry Form */}
          <div className="glass-panel-gold rounded-3xl p-6 sm:p-8 shadow-2xl">
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white mb-2">
              Sürətli Əlaqə və Zəng Sifarişi
            </h3>
            <p className="text-xs text-slate-300 mb-6">
              Məlumatlarınızı qeyd edin, menecerimiz 5 dəqiqə ərzində sizinlə əlaqə saxlayıb bütün detalları dəqiqləşdirsin.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Adınız və Soyadınız
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Məs. Rəşad Quliyev"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#0B0D13] border border-white/15 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Əlaqə Nömrəniz (WhatsApp aktiv)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+994 50 000 00 00"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#0B0D13] border border-white/15 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4AF37] tabular-nums"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Maraqlandığınız Avtomobil və ya Xidmət
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Məs. 3 günlük Mercedes S-Class lazımdır, aeroportda qarşılanma ilə..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#0B0D13] border border-white/15 rounded-xl px-4 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#F5E6BE] via-[#D4AF37] to-[#AA820A] hover:brightness-110 active:scale-95 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/25 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4 fill-black/20" />
                  <span>Sorğunu Göndər</span>
                </button>
              </form>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37] flex items-center justify-center mx-auto text-[#D4AF37]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif-luxury text-lg font-bold text-white">
                  Təşəkkür edirik!
                </h4>
                <p className="text-xs text-slate-300">
                  Sorğunuz qeydə alındı. Nümayəndəmiz 5 dəqiqə ərzində <span className="text-white font-medium">{phone}</span> nömrəsi ilə əlaqə saxlayacaq.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-[#D4AF37] underline underline-offset-4 cursor-pointer"
                >
                  Yeni sorğu göndər
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
