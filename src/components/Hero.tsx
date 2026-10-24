import React, { useState } from 'react';
import { Calendar, MapPin, UserCheck, Car, ArrowRight, Shield, Clock, Sparkles } from 'lucide-react';
import { VehicleCategory } from '../types';

interface HeroProps {
  onSearch: (criteria: {
    category: VehicleCategory;
    withDriver: boolean;
    pickupLocation: string;
    startDate: string;
    endDate: string;
  }) => void;
  onOpenRequirements: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch, onOpenRequirements }) => {
  const [category, setCategory] = useState<VehicleCategory>('all');
  const [withDriver, setWithDriver] = useState<boolean>(true);
  const [pickupLocation, setPickupLocation] = useState<string>('Heydər Əliyev Hava Limanı (GYD)');
  const [startDate, setStartDate] = useState<string>('2026-10-25');
  const [endDate, setEndDate] = useState<string>('2026-10-28');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      category,
      withDriver,
      pickupLocation,
      startDate,
      endDate,
    });

    const fleetEl = document.getElementById('fleet-section');
    if (fleetEl) {
      fleetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-10 pb-16 overflow-hidden">
      {/* Background with luxury gradient & high-res subtle overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1920&q=80"
          alt="Baku Luxury Night Drive"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center brightness-35 filter scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080B] via-[#07080B]/80 to-transparent" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#07080B]/50 to-[#07080B]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 sm:pt-14">
        {/* Editorial Subtitle Marker */}
        <div className="flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
          <span className="w-6 h-[1px] bg-[#D4AF37]" />
          <span>V.I.P. Car Rental & Chauffeur Service · Baku, Azerbaijan</span>
        </div>

        {/* Hero Headline */}
        <div className="max-w-4xl mb-6">
          <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] text-balance">
            Bakıda Lüks Avtomobil İcarəsi və{' '}
            <span className="gold-gradient-text">VIP Şofer Xidməti</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
            Mercedes S-Class, G-Class, Range Rover və Maybach modelləri. Heydər Əliyev
            Hava Limanında fərdi adla qarşılanma, diplomatik səfərlər və toy kortejləri üçün
            qüsursuz avtopark.
          </p>
        </div>

        {/* Luxury Search & Filter Engine Card */}
        <div className="mt-8 glass-panel-gold rounded-2xl p-4 sm:p-6 shadow-2xl shadow-black/80 max-w-5xl">
          <form onSubmit={handleSearchSubmit} className="space-y-4">
            {/* Top toggle bar: With/Without Driver & Requirements quick link */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
              <div className="flex items-center p-1 bg-[#0F1117] rounded-xl border border-white/10">
                <button
                  type="button"
                  onClick={() => setWithDriver(true)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 cursor-pointer ${
                    withDriver
                      ? 'bg-[#D4AF37] text-black shadow-md font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Şoferlə (Sürücü ilə)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setWithDriver(false)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 cursor-pointer ${
                    !withDriver
                      ? 'bg-[#D4AF37] text-black shadow-md font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Car className="w-3.5 h-3.5" />
                  <span>Sürücüsüz İcarə</span>
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span>Minimum yaş 21+</span>
                <span aria-hidden="true">·</span>
                <button
                  type="button"
                  onClick={onOpenRequirements}
                  className="text-[#D4AF37] hover:underline underline-offset-4 cursor-pointer"
                >
                  Bütün tələblər
                </button>
              </div>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {/* Pickup Location */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Təhvil alma yeri</span>
                </label>
                <select
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  className="w-full bg-[#0B0D13] border border-white/15 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                >
                  <option value="Heydər Əliyev Hava Limanı (GYD)">Heydər Əliyev Aeroportu (GYD)</option>
                  <option value="Port Baku / Şəhər Mərkəzi">Port Baku / Şəhər Mərkəzi</option>
                  <option value="Otel və ya Şəxsi Ünvan">Otel və ya Şəxsi Ünvan</option>
                  <option value="Ağ Şəhər (White City)">Ağ Şəhər (White City)</option>
                </select>
              </div>

              {/* Start Date */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Götürülmə tarixi</span>
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full bg-[#0B0D13] border border-white/15 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors [color-scheme:dark]"
                />
              </div>

              {/* End Date */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Qaytarılma tarixi</span>
                </label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full bg-[#0B0D13] border border-white/15 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors [color-scheme:dark]"
                />
              </div>

              {/* Car Type Category */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Avtomobil kateqoriyası</span>
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as VehicleCategory)}
                  className="w-full bg-[#0B0D13] border border-white/15 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                >
                  <option value="all">Bütün Avtomobillər (12)</option>
                  <option value="luxury">Lüks Sedanlar</option>
                  <option value="suv">SUV & Off-Road</option>
                  <option value="sports">İdman & Kabriolet</option>
                  <option value="minivan">VIP Minivan & Mikroavtobus</option>
                  <option value="business">Biznes Klass</option>
                </select>
              </div>
            </div>

            {/* Submit Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>3 gün və daha çox icarələrdə aeroportda qarşılanma <strong>pulsuzdur</strong></span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#F5E6BE] via-[#D4AF37] to-[#AA820A] hover:brightness-110 active:scale-95 transition-all rounded-xl shadow-lg shadow-[#D4AF37]/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Avtomobilləri Göstər</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* 4-Column Proof & Trust Banner in a full-width row below */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 border-t border-white/10 pt-6">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#D4AF37] shrink-0">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-white tabular-nums">50+ Premium Flot</div>
              <div className="text-xs text-slate-400 mt-0.5">Mercedes, Range Rover, Maybach</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#D4AF37] shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-white">100% KASKO Sığorta</div>
              <div className="text-xs text-slate-400 mt-0.5">Tam rəsmi hüquqi zəmanət</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#D4AF37] shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-white tabular-nums">15 Dəqiqəyə Təhvil</div>
              <div className="text-xs text-slate-400 mt-0.5">Minimal sənədləşmə & dərhal açar</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#D4AF37] shrink-0">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-white tabular-nums">24/7 VIP Şofer & GYD</div>
              <div className="text-xs text-slate-400 mt-0.5">Aeroportda adla qarşılanma</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
