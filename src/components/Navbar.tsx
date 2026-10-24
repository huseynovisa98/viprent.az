import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, ShieldCheck } from 'lucide-react';
import { Currency } from '../types';

interface NavbarProps {
  currentCurrency: Currency;
  onCurrencyChange: (c: Currency) => void;
  onOpenRequirements: () => void;
  onQuickBookGeneral: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentCurrency,
  onCurrencyChange,
  onOpenRequirements,
  onQuickBookGeneral,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currencies: Currency[] = ['AZN', 'USD', 'EUR'];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-white/10 bg-[#07080B]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="/"
            className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4AF37] via-[#AA820A] to-[#604905] p-[1px] shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center">
              <div className="w-full h-full bg-[#07080B] rounded-[7px] flex items-center justify-center">
                <span className="font-serif-luxury text-base font-bold text-[#D4AF37] group-hover:scale-105 transition-transform">
                  VR
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury text-xl font-extrabold tracking-wider text-white">
                VipRent<span className="text-[#D4AF37]">.az</span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 uppercase -mt-0.5">
                Baku Luxury Car Rental
              </span>
            </div>
          </a>

          {/* Zone 2: Clean Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <button
              onClick={() => scrollToSection('fleet-section')}
              className="hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Avtopark / Flot
            </button>
            <button
              onClick={() => scrollToSection('services-section')}
              className="hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Xidmətlər
            </button>
            <button
              onClick={onOpenRequirements}
              className="hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>İcarə Qaydaları</span>
            </button>
            <button
              onClick={() => scrollToSection('reviews-section')}
              className="hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Rəylər
            </button>
            <button
              onClick={() => scrollToSection('faq-section')}
              className="hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact-section')}
              className="hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Əlaqə
            </button>
          </nav>

          {/* Zone 3: Actions (Currency + WhatsApp & Direct Call) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Currency Switcher */}
            <div className="hidden sm:flex items-center bg-[#141720] border border-white/10 rounded-lg p-0.5">
              {currencies.map((curr) => (
                <button
                  key={curr}
                  onClick={() => onCurrencyChange(curr)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded transition-all cursor-pointer ${
                    currentCurrency === curr
                      ? 'bg-[#D4AF37] text-black shadow-sm font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>

            {/* Quick Hotline direct */}
            <a
              href="tel:+994502202020"
              className="hidden md:flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="tabular-nums">+994 50 220 20 20</span>
            </a>

            {/* Primary Action Button (WhatsApp Quick Booking) */}
            <button
              onClick={onQuickBookGeneral}
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#F5E6BE] via-[#D4AF37] to-[#AA820A] hover:brightness-110 active:scale-95 transition-all rounded-lg shadow-md shadow-[#D4AF37]/25 cursor-pointer whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-black/20" />
              <span>Rezervasiya</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg bg-white/5 border border-white/10"
              aria-label="Menyu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0D13] border-b border-white/10 px-6 py-6 space-y-4">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <span className="text-xs uppercase tracking-wider text-slate-400">Valyuta seçimi:</span>
            <div className="flex items-center bg-[#141720] border border-white/10 rounded-lg p-0.5">
              {currencies.map((curr) => (
                <button
                  key={curr}
                  onClick={() => onCurrencyChange(curr)}
                  className={`px-3 py-1 text-xs font-semibold rounded ${
                    currentCurrency === curr
                      ? 'bg-[#D4AF37] text-black font-bold'
                      : 'text-slate-400'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-3 text-base font-medium text-slate-200">
            <button
              onClick={() => scrollToSection('fleet-section')}
              className="text-left py-2 hover:text-[#D4AF37]"
            >
              Avtopark / Flot
            </button>
            <button
              onClick={() => scrollToSection('services-section')}
              className="text-left py-2 hover:text-[#D4AF37]"
            >
              Xidmətlər (Transfer & Şofer)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRequirements();
              }}
              className="text-left py-2 hover:text-[#D4AF37] flex items-center justify-between"
            >
              <span>İcarə Qaydaları & Tələblər</span>
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            </button>
            <button
              onClick={() => scrollToSection('reviews-section')}
              className="text-left py-2 hover:text-[#D4AF37]"
            >
              Müştəri Rəyləri
            </button>
            <button
              onClick={() => scrollToSection('faq-section')}
              className="text-left py-2 hover:text-[#D4AF37]"
            >
              Tez-tez Verilən Suallar (FAQ)
            </button>
            <button
              onClick={() => scrollToSection('contact-section')}
              className="text-left py-2 hover:text-[#D4AF37]"
            >
              Əlaqə & Ünvan
            </button>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="tel:+994502202020"
              className="flex items-center justify-center gap-2 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium text-sm"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span className="tabular-nums">+994 50 220 20 20</span>
            </a>
            <a
              href="https://wa.me/994502202020?text=Salam,%20VipRent.az%20vasit%C9%99sil%C9%99%20avtomobil%20icar%C9%99si%20haqq%Cplacednda%20m%C9%99lumat%20almaq%20ist%C9%99yir%C9%99m."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-lg bg-[#25D366] text-black font-bold text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-black/20" />
              <span>WhatsApp ilə Yazın</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
