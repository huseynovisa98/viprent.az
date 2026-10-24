import React from 'react';
import { X, ShieldCheck, UserCheck, FileText, CreditCard, Fuel, Clock, MapPin, CheckCircle2 } from 'lucide-react';

interface RequirementsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToBooking: () => void;
}

export const RequirementsModal: React.FC<RequirementsModalProps> = ({
  isOpen,
  onClose,
  onProceedToBooking,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0F1117] border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/10 bg-[#141720]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-semibold text-[#D4AF37] uppercase tracking-wider">
                Rəsmi Qaydalar
              </div>
              <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white">
                İcarə Qaydaları və Tələblər
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl bg-white/5 border border-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6 text-xs sm:text-sm">
          {/* Grid of Requirements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Age & Experience */}
            <div className="p-4 bg-[#141720] rounded-2xl border border-white/5 space-y-2">
              <div className="flex items-center gap-2 font-bold text-white">
                <UserCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>Yaş və Sürücülük Təcrübəsi</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Standart və biznes klass avtomobillər üçün minimum <strong>21 yaş</strong> və <strong>2 il</strong> sürücülük təcrübəsi. Lüks və idman modelləri üçün minimum <strong>24 yaş</strong> və <strong>3 il</strong> staj tələb olunur.
              </p>
              <div className="text-[11px] text-[#D4AF37]">
                * Şoferlə (sürücülü) icarədə yaş məhdudiyyəti yoxdur.
              </div>
            </div>

            {/* Documents */}
            <div className="p-4 bg-[#141720] rounded-2xl border border-white/5 space-y-2">
              <div className="flex items-center gap-2 font-bold text-white">
                <FileText className="w-4 h-4 text-[#D4AF37]" />
                <span>Tələb Olunan Sənədlər</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                <strong>Azərbaycan vətəndaşları:</strong> Şəxsiyyət vəsiqəsi və etibarlı Sürücülük vəsiqəsi.
              </p>
              <p className="text-slate-300 text-xs leading-relaxed">
                <strong>Əcnəbi vətəndaşlar:</strong> Xarici pasport və beynəlxalq və ya milli sürücülük vəsiqəsi.
              </p>
            </div>

            {/* Deposit Policy */}
            <div className="p-4 bg-[#141720] rounded-2xl border border-white/5 space-y-2">
              <div className="flex items-center gap-2 font-bold text-white">
                <CreditCard className="w-4 h-4 text-[#D4AF37]" />
                <span>Depozit (Girov) Qaydası</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Avtomobil modelindən asılı olaraq 350 – 1000 ₼ arası depozit tələb edilir. Depozit avtomobil təhvil verildikdə nağd və ya kart bloklaması ilə götürülür və avtomobil saz təhvil verildikdən sonra <strong>tam geri qaytarılır</strong>.
              </p>
            </div>

            {/* Fuel & Cleanliness */}
            <div className="p-4 bg-[#141720] rounded-2xl border border-white/5 space-y-2">
              <div className="flex items-center gap-2 font-bold text-white">
                <Fuel className="w-4 h-4 text-[#D4AF37]" />
                <span>Yanacaq və Təmizlik</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Avtomobillər tam təmiz, dezinfeksiya olunmuş və dolu çənlə təqdim olunur. Eyni səviyyədə yanacaq və təmizliklə qəbul edilir (Full-to-Full sistemi).
              </p>
            </div>
          </div>

          {/* Delivery & Timings */}
          <div className="p-4 bg-[#141720] rounded-2xl border border-white/5 space-y-3">
            <div className="flex items-center gap-2 font-bold text-white">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span>Çatdırılma və Təhvil Məntəqələri</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Heydər Əliyev Beynəlxalq Aeroportu (GYD)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Bakının istənilən oteli və ya fərdi ünvanı</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Port Baku & Şəhər Mərkəzi ofisimiz</span>
              </div>
            </div>
          </div>

          {/* Insurance */}
          <div className="p-4 bg-gradient-to-r from-[#D4AF37]/10 to-transparent rounded-2xl border border-[#D4AF37]/30 flex items-center justify-between gap-4">
            <div>
              <div className="font-bold text-white text-sm">100% KASKO və İcbari Sığorta</div>
              <div className="text-xs text-slate-300 mt-0.5">
                Bütün avtoparkımız rəsmi tam sığortalıdır. Sizin təhlükəsizliyiniz və rahatlığınız ən birinci prioritetimizdir.
              </div>
            </div>
            <div className="text-xl font-bold text-[#D4AF37] shrink-0 font-mono">
              100% KASKO
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 sm:p-6 bg-[#141720] border-t border-white/10 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-slate-200 transition-colors cursor-pointer"
          >
            Bağla
          </button>
          <button
            onClick={() => {
              onClose();
              onProceedToBooking();
            }}
            className="px-6 py-2.5 rounded-xl bg-[#D4AF37] hover:brightness-110 active:scale-95 text-black text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-[#D4AF37]/20 cursor-pointer"
          >
            Avtoparka Keç və Seç
          </button>
        </div>
      </div>
    </div>
  );
};
