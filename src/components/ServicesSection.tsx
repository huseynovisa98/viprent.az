import React from 'react';
import { ArrowUpRight, Check, Plane, UserCheck, HeartHandshake, Briefcase, MessageCircle } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/services';

interface ServicesSectionProps {
  onQuickBookService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onQuickBookService }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'airport-transfer':
        return <Plane className="w-5 h-5 text-[#D4AF37]" />;
      case 'chauffeur-service':
        return <UserCheck className="w-5 h-5 text-[#D4AF37]" />;
      case 'wedding-escort':
        return <HeartHandshake className="w-5 h-5 text-[#D4AF37]" />;
      case 'corporate-fleet':
        return <Briefcase className="w-5 h-5 text-[#D4AF37]" />;
      default:
        return <UserCheck className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  const handleServiceWhatsApp = (service: ServiceItem) => {
    const msg = encodeURIComponent(
      `Salam, VipRent.az! "${service.title}" xidməti haqqında məlumat və rezervasiya şərtlərini öyrənmək istəyirəm.`
    );
    window.open(`https://wa.me/994502202020?text=${msg}`, '_blank');
  };

  return (
    <section id="services-section" className="py-24 relative bg-[#090A0F] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-2">
            <span className="w-5 h-[1px] bg-[#D4AF37]" />
            <span>Fərdi V.I.P. Xidmətlər</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Yalnız Avtomobil Deyil, Tam Lüks Xidmət Təcrübəsi
          </h2>
          <p className="mt-3 text-sm text-slate-400 leading-relaxed">
            Heydər Əliyev Beynəlxalq Hava Limanında qarşılanmadan, möhtəşəm toy kortejlərinə
            və beynəlxalq nümayəndə heyətlərinin müşayiətinə qədər bütün logistika həlləri.
          </p>
        </div>

        {/* Asymmetric Bento-style Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-[#0F1117] rounded-3xl border border-white/10 hover:border-[#D4AF37]/50 overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image banner */}
              <div className="relative aspect-[16/8] w-full overflow-hidden bg-[#141720]">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1117] via-[#0F1117]/40 to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-[#D4AF37]/40 px-3 py-1 rounded-md text-[11px] font-semibold text-[#D4AF37] uppercase tracking-wider">
                  {service.badge}
                </div>

                {/* Service number */}
                <div className="absolute top-4 right-4 text-xs font-mono font-bold text-white/50">
                  0{index + 1}
                </div>
              </div>

              {/* Service Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                      {getIcon(service.id)}
                    </div>
                    <span className="text-xs text-slate-400 font-medium">{service.subtitle}</span>
                  </div>

                  <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <div className="mt-5 space-y-2 border-t border-white/5 pt-4">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Bar */}
                <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between gap-4">
                  <div className="text-xs font-semibold text-[#D4AF37]">
                    {service.pricingHint}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleServiceWhatsApp(service)}
                      className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-[#25D366]/20 border border-white/10 text-xs font-semibold text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>WhatsApp</span>
                    </button>

                    <button
                      onClick={() => onQuickBookService(service.title)}
                      className="px-4 py-2.5 rounded-xl bg-[#D4AF37] hover:brightness-110 active:scale-95 text-black text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md shadow-[#D4AF37]/20 cursor-pointer"
                    >
                      <span>Sifariş Et</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
