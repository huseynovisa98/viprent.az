import React, { useState, useId } from 'react';
import { X, Calendar, MapPin, User, Phone, CheckCircle, MessageCircle, AlertCircle, ShieldCheck } from 'lucide-react';
import { Vehicle, Currency } from '../types';
import { formatPrice } from '../data/vehicles';

interface BookingModalProps {
  vehicle: Vehicle | null;
  currency: Currency;
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  vehicle,
  currency,
  isOpen,
  onClose,
}) => {
  const [startDate, setStartDate] = useState('2026-10-25');
  const [endDate, setEndDate] = useState('2026-10-28');
  const [withDriver, setWithDriver] = useState(false);
  const [airportPickup, setAirportPickup] = useState(false);
  const [location, setLocation] = useState('Heydər Əliyev Hava Limanı (GYD)');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('+994 ');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');

  const startDateInputId = useId();
  const endDateInputId = useId();
  const locationSelectId = useId();
  const customerNameInputId = useId();
  const customerPhoneInputId = useId();
  const notesTextareaId = useId();

  if (!isOpen || !vehicle) return null;

  // Calculate rental days
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = end.getTime() - start.getTime();
  const diffDays = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

  // Pricing calculations
  const baseRate = diffDays >= 7 ? vehicle.weeklyPriceAZN : vehicle.priceAZN;
  const carRentalTotalAZN = baseRate * diffDays;
  const driverFeeAZN = withDriver ? 50 * diffDays : 0;
  // Free airport delivery for 3+ days
  const airportFeeAZN = airportPickup ? (diffDays >= 3 ? 0 : 30) : 0;
  const totalAZN = carRentalTotalAZN + driverFeeAZN + airportFeeAZN;

  const totalFormatted = formatPrice(totalAZN, currency);
  const depositFormatted = formatPrice(vehicle.depositAZN, currency);

  const generateWhatsAppMessage = () => {
    return encodeURIComponent(
      `*VipRent.az — Avtomobil Rezervasiyası Sorğusu*\n\n` +
      `🚗 *Model:* ${vehicle.name} (${vehicle.year})\n` +
      `📅 *Müddət:* ${startDate} — ${endDate} (${diffDays} gün)\n` +
      `📍 *Təhvil yeri:* ${location}\n` +
      `🤵 *Şəxsi Sürücü:* ${withDriver ? 'Bəli (+50 ₼/gün)' : 'Xeyr (Sürücüsüz)'}\n` +
      `✈️ *Aeroport qarşılanma:* ${airportPickup ? (diffDays >= 3 ? 'Bəli (Pulsuz)' : 'Bəli (+30 ₼)') : 'Xeyr'}\n` +
      `💰 *Cəmi Məbləğ:* ${totalAZN} AZN (~${totalFormatted})\n` +
      `🛡️ *Depozit:* ${vehicle.depositAZN} AZN (Geri qaytarılan)\n` +
      `👤 *Müştəri:* ${customerName || 'Təqdim olunmayıb'}\n` +
      `📞 *Əlaqə nömrəsi:* ${customerPhone}\n` +
      (notes ? `📝 *Qeyd:* ${notes}\n` : '') +
      `\nZəhmət olmasa mövcudluğu təsdiq edin!`
    );
  };

  const handleWhatsAppBooking = () => {
    const msg = generateWhatsAppMessage();
    window.open(`https://wa.me/994502202020?text=${msg}`, '_blank');
  };

  const handleOnlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomId = `VR-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingId(randomId);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0F1117] border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/10 bg-[#141720]">
          <div>
            <div className="text-[11px] font-semibold text-[#D4AF37] uppercase tracking-wider">
              Rezervasiya və Qiymət Hesablanması
            </div>
            <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white mt-0.5">
              {vehicle.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl bg-white/5 border border-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {!isSubmitted ? (
            <form onSubmit={handleOnlineSubmit} className="space-y-6">
              {/* Selected Car Preview Strip */}
              <div className="flex items-center gap-4 p-3 bg-black/40 rounded-2xl border border-white/5">
                <img
                  src={vehicle.imageUrl}
                  alt={vehicle.name}
                  referrerPolicy="no-referrer"
                  className="w-24 h-16 sm:w-28 sm:h-18 object-cover rounded-xl shrink-0"
                />
                <div className="flex-1 min-w-0 text-xs">
                  <div className="font-bold text-white truncate text-sm sm:text-base">
                    {vehicle.name}
                  </div>
                  <div className="text-slate-400 mt-0.5">
                    {vehicle.categoryLabel} · {vehicle.year} · {vehicle.seats} Oturacaq
                  </div>
                  <div className="text-[#D4AF37] font-semibold mt-1">
                    Günlük: {formatPrice(vehicle.priceAZN, currency)} / gün
                  </div>
                </div>
              </div>

              {/* Date & Location Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor={startDateInputId} className="block text-xs font-medium text-slate-300 mb-1.5">
                    Götürülmə tarixi
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]" />
                    <input
                      id={startDateInputId}
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full bg-[#0B0D13] border border-white/15 rounded-xl pl-10 pr-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4AF37] [color-scheme:dark]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor={endDateInputId} className="block text-xs font-medium text-slate-300 mb-1.5">
                    Qaytarılma tarixi
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]" />
                    <input
                      id={endDateInputId}
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full bg-[#0B0D13] border border-white/15 rounded-xl pl-10 pr-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4AF37] [color-scheme:dark]"
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor={locationSelectId} className="block text-xs font-medium text-slate-300 mb-1.5">
                    Təhvil alma ünvanı
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]" />
                    <select
                      id={locationSelectId}
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full bg-[#0B0D13] border border-white/15 rounded-xl pl-10 pr-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="Heydər Əliyev Hava Limanı (GYD)">Heydər Əliyev Beynəlxalq Aeroportu (GYD Terminal 1)</option>
                      <option value="Port Baku Residence / Neftçilər pr.">Port Baku Residence / Neftçilər prospekti</option>
                      <option value="Four Seasons Hotel Baku">Four Seasons Hotel Baku</option>
                      <option value="JW Marriott Absheron Baku">JW Marriott Absheron Baku</option>
                      <option value="Ağ Şəhər (Baku White City)">Ağ Şəhər (Baku White City)</option>
                      <option value="Fərdi ünvan (şəhər daxili)">Digər ünvan (menecerlə dəqiqləşdiriləcək)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Extra Services Toggles */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Əlavə V.I.P. Seçimlər:
                </div>

                {vehicle.chauffeurAvailable && (
                  <label className="flex items-center justify-between p-3.5 bg-[#141720] rounded-xl border border-white/10 hover:border-[#D4AF37]/50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={withDriver || !!vehicle.chauffeurOnly}
                        disabled={!!vehicle.chauffeurOnly}
                        onChange={(e) => setWithDriver(e.target.checked)}
                        className="w-4 h-4 accent-[#D4AF37] rounded"
                      />
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-white">
                          Şəxsi Şofer Xidməti (VIP Chauffeur)
                        </div>
                        <div className="text-[11px] text-slate-400">
                          Kostyumlu, təcrübəli və şəhəri mükəmməl bilən sürücü
                        </div>
                      </div>
                    </div>
                    <div className="text-xs font-bold text-[#D4AF37] tabular-nums">
                      +50 ₼ / gün
                    </div>
                  </label>
                )}

                <label className="flex items-center justify-between p-3.5 bg-[#141720] rounded-xl border border-white/10 hover:border-[#D4AF37]/50 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={airportPickup}
                      onChange={(e) => setAirportPickup(e.target.checked)}
                      className="w-4 h-4 accent-[#D4AF37] rounded"
                    />
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-white">
                        Hava Limanında Adla Qarşılanma (Meet & Greet)
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {diffDays >= 3 ? '3+ günlük icarələrdə tamamilə pulsuzdur' : 'Baqaj daşınması və fərdi lövhə'}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs font-bold text-[#D4AF37] tabular-nums">
                    {diffDays >= 3 ? 'PULSUZ' : '+30 ₼'}
                  </div>
                </label>
              </div>

              {/* Customer Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label htmlFor={customerNameInputId} className="block text-xs font-medium text-slate-300 mb-1.5">
                    Adınız və Soyadınız *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      id={customerNameInputId}
                      type="text"
                      placeholder="Məs. Elnur Həsənov"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-[#0B0D13] border border-white/15 rounded-xl pl-10 pr-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor={customerPhoneInputId} className="block text-xs font-medium text-slate-300 mb-1.5">
                    Telefon nömrəsi (WhatsApp) *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      id={customerPhoneInputId}
                      type="tel"
                      placeholder="+994 50 123 45 67"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full bg-[#0B0D13] border border-white/15 rounded-xl pl-10 pr-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4AF37] tabular-nums"
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor={notesTextareaId} className="block text-xs font-medium text-slate-300 mb-1.5">
                    Xüsusi qeyd və ya uçuş nömrəsi (isteğe bağlı)
                  </label>
                  <textarea
                    id={notesTextareaId}
                    rows={2}
                    placeholder="Məs. Uçuş J2-076, uşaq oturacağı lazımdır və s."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-[#0B0D13] border border-white/15 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              {/* Price Calculation Summary Box */}
              <div className="p-4 bg-gradient-to-br from-[#141720] to-[#0A0C10] rounded-2xl border border-[#D4AF37]/30 space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>İcarə müddəti:</span>
                  <span className="font-semibold text-white">{diffDays} gün</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Avtomobil icarəsi ({baseRate} ₼/gün):</span>
                  <span className="font-semibold text-white tabular-nums">{carRentalTotalAZN} ₼</span>
                </div>
                {withDriver && (
                  <div className="flex justify-between text-slate-300">
                    <span>Şəxsi Sürücü haqqı:</span>
                    <span className="font-semibold text-white tabular-nums">+{driverFeeAZN} ₼</span>
                  </div>
                )}
                {airportPickup && (
                  <div className="flex justify-between text-slate-300">
                    <span>Aeroport transferi:</span>
                    <span className="font-semibold text-white tabular-nums">
                      {airportFeeAZN === 0 ? '0 ₼ (Pulsuz)' : `+${airportFeeAZN} ₼`}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-slate-400 pt-2 border-t border-white/10">
                  <span>Qaytarılan Depozit:</span>
                  <span className="font-medium text-slate-200 tabular-nums">{depositFormatted}</span>
                </div>

                <div className="flex items-baseline justify-between pt-2 border-t border-white/15">
                  <span className="text-sm font-bold text-white">Yekun İcarə Məbləği:</span>
                  <div className="text-right">
                    <span className="text-xl sm:text-2xl font-bold text-[#D4AF37] tabular-nums">
                      {totalFormatted}
                    </span>
                    <div className="text-[10px] text-slate-400">({totalAZN} AZN)</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-black/20" />
                  <span>WhatsApp ilə Sifariş Et</span>
                </button>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#F5E6BE] via-[#D4AF37] to-[#AA820A] hover:brightness-110 active:scale-95 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/20 transition-all cursor-pointer"
                >
                  <CheckCircle className="w-4 h-4 fill-black/20" />
                  <span>Onlayn Rezervasiya Et</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Kartınızdan heç bir ilkin ödəniş çıxılmır. Təhvil zamanı ödənir.</span>
              </div>
            </form>
          ) : (
            /* Success confirmation screen */
            <div className="py-8 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37] flex items-center justify-center mx-auto text-[#D4AF37]">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div>
                <h3 className="font-serif-luxury text-2xl font-bold text-white">
                  Rezervasiyanız Qəbul Olundu!
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-md mx-auto">
                  Rezervasiya nömrəniz: <strong className="text-[#D4AF37] font-mono">{bookingId}</strong>.
                  Menecerimiz 5 dəqiqə ərzində <span className="text-white">{customerPhone}</span> nömrəsi ilə əlaqə saxlayaraq sifarişinizi təsdiqləyəcək.
                </p>
              </div>

              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-slate-400">Avtomobil:</span>
                  <span className="font-semibold text-white">{vehicle.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Tarixlər:</span>
                  <span className="font-semibold text-white">{startDate} — {endDate} ({diffDays} gün)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Təhvil yeri:</span>
                  <span className="font-semibold text-white">{location}</span>
                </div>
                <div className="flex justify-between border-t border-white/10 pt-2">
                  <span className="text-slate-400">Cəmi məbləğ:</span>
                  <span className="font-bold text-[#D4AF37]">{totalFormatted}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="px-6 py-3 rounded-xl bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-black/20" />
                  <span>WhatsApp ilə Sürətləndir</span>
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs cursor-pointer"
                >
                  Pəncərəni bağla
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
