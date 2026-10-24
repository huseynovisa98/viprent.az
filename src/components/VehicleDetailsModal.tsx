import React from 'react';
import { X, Check, Gauge, Fuel, Users, Shield, Calendar, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { Vehicle, Currency } from '../types';
import { formatPrice } from '../data/vehicles';

interface VehicleDetailsModalProps {
  vehicle: Vehicle | null;
  currency: Currency;
  isOpen: boolean;
  onClose: () => void;
  onBookNow: (vehicle: Vehicle) => void;
}

export const VehicleDetailsModal: React.FC<VehicleDetailsModalProps> = ({
  vehicle,
  currency,
  isOpen,
  onClose,
  onBookNow,
}) => {
  if (!isOpen || !vehicle) return null;

  const priceFormatted = formatPrice(vehicle.priceAZN, currency);
  const weeklyFormatted = formatPrice(vehicle.weeklyPriceAZN, currency);
  const depositFormatted = formatPrice(vehicle.depositAZN, currency);

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Salam, VipRent.az! ${vehicle.name} (${vehicle.year}) haqqında ətraflı məlumat almaq və bron etmək istəyirəm.`
    );
    window.open(`https://wa.me/994502202020?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#0F1117] border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header with image */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-[#141720] shrink-0">
          <img
            src={vehicle.imageUrl}
            alt={vehicle.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1117] via-transparent to-black/50" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white bg-black/60 hover:bg-[#D4AF37] hover:text-black backdrop-blur-md rounded-xl transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on image */}
          <div className="absolute bottom-4 left-5 sm:left-6 right-5 sm:right-6">
            <div className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-1">
              {vehicle.categoryLabel} · {vehicle.year}
            </div>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white">
              {vehicle.name}
            </h2>
          </div>
        </div>

        {/* Scrollable details */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6">
          {/* Key Specs Matrix */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Texniki Xüsusiyyətlər
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 bg-[#141720] rounded-xl border border-white/5">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <Gauge className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Güc & Sürət</span>
                </div>
                <div className="font-bold text-white text-sm mt-1">{vehicle.power}</div>
                <div className="text-[10px] text-slate-400">{vehicle.acceleration}</div>
              </div>

              <div className="p-3 bg-[#141720] rounded-xl border border-white/5">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <Fuel className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Mühərrik</span>
                </div>
                <div className="font-bold text-white text-sm mt-1 truncate">{vehicle.engine}</div>
                <div className="text-[10px] text-slate-400">{vehicle.fuel}</div>
              </div>

              <div className="p-3 bg-[#141720] rounded-xl border border-white/5">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Oturacaq sayı</span>
                </div>
                <div className="font-bold text-white text-sm mt-1">{vehicle.seats} Nəfərlik</div>
                <div className="text-[10px] text-slate-400">V.I.P. Salon</div>
              </div>

              <div className="p-3 bg-[#141720] rounded-xl border border-white/5">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Transmissiya</span>
                </div>
                <div className="font-bold text-white text-sm mt-1 truncate">{vehicle.transmission}</div>
                <div className="text-[10px] text-slate-400">4MATIC / AWD</div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Avtomobil Haqqında
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {vehicle.description}
            </p>
          </div>

          {/* Included Features */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Salona və İcarəyə Daxildir
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {vehicle.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 bg-black/40 rounded-xl border border-white/5 text-xs text-slate-200"
                >
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rental Terms Quick Summary */}
          <div className="p-4 bg-[#141720] rounded-2xl border border-white/10 text-xs space-y-2">
            <div className="flex items-center gap-2 font-bold text-white text-sm">
              <Shield className="w-4 h-4 text-[#D4AF37]" />
              <span>İcarə Şərtləri və Tələblər</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-slate-300">
              <div>• <strong>Minimum yaş:</strong> 21+ yaş</div>
              <div>• <strong>Sürücülük stajı:</strong> 2+ il</div>
              <div>• <strong>Depozit məbləği:</strong> {depositFormatted}</div>
            </div>
          </div>
        </div>

        {/* Footer with CTA */}
        <div className="p-5 sm:p-6 bg-[#141720] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div>
            <div className="text-[11px] text-slate-400 uppercase tracking-wider">Günlük İcarə Qiyməti</div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
                {priceFormatted}
              </span>
              <span className="text-xs text-slate-400">/ gün</span>
              <span className="text-xs text-[#D4AF37] ml-2">
                (7+ gün: {weeklyFormatted}/gün)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleWhatsApp}
              className="px-4 py-3 rounded-xl bg-white/5 hover:bg-[#25D366]/20 border border-white/10 hover:border-[#25D366] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span className="hidden sm:inline">WhatsApp ilə Əlaqə</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onBookNow(vehicle);
              }}
              className="flex-1 sm:flex-initial px-6 py-3 rounded-xl bg-gradient-to-r from-[#F5E6BE] via-[#D4AF37] to-[#AA820A] hover:brightness-110 active:scale-95 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/25 transition-all cursor-pointer"
            >
              <span>İndi Rezervasiya Et</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
