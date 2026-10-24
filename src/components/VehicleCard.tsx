import React, { useState } from 'react';
import { Users, Gauge, Fuel, MessageCircle, CalendarCheck, Info, ArrowUpRight } from 'lucide-react';
import { Vehicle, Currency } from '../types';
import { formatPrice } from '../data/vehicles';

interface VehicleCardProps {
  vehicle: Vehicle;
  currency: Currency;
  onSelectForDetails: (vehicle: Vehicle) => void;
  onSelectForBooking: (vehicle: Vehicle) => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({
  vehicle,
  currency,
  onSelectForDetails,
  onSelectForBooking,
}) => {
  const [imageError, setImageError] = useState(false);

  const priceFormatted = formatPrice(vehicle.priceAZN, currency);
  const weeklyFormatted = formatPrice(vehicle.weeklyPriceAZN, currency);

  const handleWhatsAppDirect = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = encodeURIComponent(
      `Salam! VipRent.az saytından "${vehicle.name}" (${vehicle.year}) avtomobili ilə maraqlanıram. Günlük qiyməti ${vehicle.priceAZN} AZN. Rezervasiya üçün mövcudluğu təsdiq edə bilərsiniz?`
    );
    window.open(`https://wa.me/994502202020?text=${message}`, '_blank');
  };

  return (
    <div className="group relative bg-[#0F1117] rounded-2xl border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#D4AF37]/10">
      <div>
        {/* Image Container */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#141720]">
          {!imageError ? (
            <img
              src={vehicle.imageUrl}
              alt={vehicle.name}
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#141720] to-[#0A0C10]">
              <span className="font-serif-luxury text-lg font-bold text-[#D4AF37]">
                {vehicle.name}
              </span>
              <span className="text-xs text-slate-400 mt-1">{vehicle.categoryLabel}</span>
            </div>
          )}

          {/* Gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1117] via-transparent to-black/30 pointer-events-none" />

          {/* Top Badge */}
          {vehicle.badge && (
            <div className="absolute top-3 left-3 bg-[#07080B]/80 backdrop-blur-md border border-[#D4AF37]/40 px-2.5 py-1 rounded-md text-[11px] font-semibold text-[#D4AF37] tracking-wider uppercase">
              {vehicle.badge}
            </div>
          )}

          {/* Quick info button on top right */}
          <button
            onClick={() => onSelectForDetails(vehicle)}
            className="absolute top-3 right-3 p-2 rounded-lg bg-black/60 hover:bg-[#D4AF37] text-white hover:text-black backdrop-blur-md border border-white/20 transition-all cursor-pointer"
            title="Ətraflı texniki xüsusiyyətlər"
          >
            <Info className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5">
          {/* Category & Year typographic marker */}
          <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
            <span>{vehicle.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{vehicle.year} Buraxılış</span>
            {vehicle.chauffeurOnly && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-[#D4AF37]">Yalnız Sürücü ilə</span>
              </>
            )}
          </div>

          {/* Vehicle Name */}
          <h3 className="mt-1.5 font-serif-luxury text-lg sm:text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors line-clamp-1">
            {vehicle.name}
          </h3>

          {/* Key Specs unboxed list */}
          <div className="mt-4 grid grid-cols-2 gap-2.5 text-xs text-slate-300 border-y border-white/5 py-3">
            <div className="flex items-center gap-2">
              <Gauge className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span className="truncate">{vehicle.power} ({vehicle.acceleration})</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span>{vehicle.seats} Oturacaq</span>
            </div>
            <div className="flex items-center gap-2">
              <Fuel className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span className="truncate">{vehicle.engine}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#D4AF37] font-semibold text-[11px]">AUTO</span>
              <span className="truncate">{vehicle.transmission}</span>
            </div>
          </div>

          {/* Highlights brief */}
          <p className="mt-3 text-xs text-slate-400 line-clamp-2 leading-relaxed">
            {vehicle.description}
          </p>
        </div>
      </div>

      {/* Pricing & Actions Footer */}
      <div className="p-5 pt-0">
        <div className="flex items-baseline justify-between pt-3 border-t border-white/10 mb-4">
          <div>
            <div className="text-[11px] text-slate-400 uppercase tracking-wider">Günlük icarə</div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-bold text-white tabular-nums tracking-tight">
                {priceFormatted}
              </span>
              <span className="text-xs text-slate-400">/ gün</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] text-slate-400">Həftəlik tarif:</div>
            <div className="text-xs font-semibold text-[#D4AF37] tabular-nums">
              {weeklyFormatted} / gün
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-2">
          {/* WhatsApp Direct */}
          <button
            onClick={handleWhatsAppDirect}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-[#25D366]/20 border border-white/10 hover:border-[#25D366]/50 text-slate-200 hover:text-white transition-all text-xs font-semibold cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>WhatsApp</span>
          </button>

          {/* Book Now (Drawer) */}
          <button
            onClick={() => onSelectForBooking(vehicle)}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#F5E6BE] via-[#D4AF37] to-[#AA820A] hover:brightness-110 active:scale-95 text-black font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#D4AF37]/20 cursor-pointer"
          >
            <CalendarCheck className="w-3.5 h-3.5 fill-black/20" />
            <span>Rezervasiya</span>
          </button>
        </div>
      </div>
    </div>
  );
};
