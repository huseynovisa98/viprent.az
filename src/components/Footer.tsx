import React from 'react';
import { Phone, MessageCircle, MapPin, Mail, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenRequirements: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRequirements }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050608] border-t border-white/10 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#D4AF37] via-[#AA820A] to-[#604905] p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#07080B] rounded-[7px] flex items-center justify-center">
                  <span className="font-serif-luxury text-sm font-bold text-[#D4AF37]">
                    VR
                  </span>
                </div>
              </div>
              <span className="font-serif-luxury text-xl font-bold text-white tracking-wide">
                VipRent<span className="text-[#D4AF37]">.az</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Bakıda lüks və premium avtomobillərin icarəsi, Heydər Əliyev Beynəlxalq Aeroportu transferləri, diplomatik nümayəndəliklərin qarşılanması və fərdi VIP şofer xidməti.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#D4AF37]">
              <ShieldCheck className="w-4 h-4" />
              <span>100% KASKO & İcbari Sığorta</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <div className="font-serif-luxury text-sm font-bold text-white uppercase tracking-wider">
              Avtopark / Flot
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => scrollTo('fleet-section')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Lüks Sedanlar (Mercedes S-Class, BMW 7)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('fleet-section')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Premium SUV & Off-Road (G63 AMG, Range Rover)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('fleet-section')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  İdman & Kabriolet (Bentley, Porsche)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('fleet-section')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  VIP Minivan & Mikroavtobus (Maybach V-Class)
                </button>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-3">
            <div className="font-serif-luxury text-sm font-bold text-white uppercase tracking-wider">
              Xidmətlər & Qaydalar
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => scrollTo('services-section')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Aeroport VIP Transfer (GYD)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services-section')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Şəxsi Şoferlə İcarə (VIP Chauffeur)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services-section')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Toy Korteji & Gəlin Maşını
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenRequirements}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer text-[#D4AF37]"
                >
                  İcarə Tələbləri & Depozit Şərtləri
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <div className="font-serif-luxury text-sm font-bold text-white uppercase tracking-wider">
              24/7 Əlaqə
            </div>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <a href="tel:+994502202020" className="hover:text-white tabular-nums">
                  +994 50 220 20 20
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <a
                  href="https://wa.me/994502202020"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] tabular-nums"
                >
                  WhatsApp: +994 50 220 20 20
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Neftçilər prospekti 151, Port Baku, Bakı</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>info@viprent.az</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            © 2026 VipRent.az — Bütün hüquqlar qorunur. Bakı, Azərbaycan.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span>Məxfilik siyasəti</span>
            <span aria-hidden="true">·</span>
            <span>İstifadə qaydaları</span>
            <span aria-hidden="true">·</span>
            <span>KASKO Sığorta Şərtləri</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
