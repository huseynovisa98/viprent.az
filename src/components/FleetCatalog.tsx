import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Sparkles } from 'lucide-react';
import { Vehicle, VehicleCategory, Currency } from '../types';
import { VEHICLES } from '../data/vehicles';
import { VehicleCard } from './VehicleCard';

interface FleetCatalogProps {
  currentCurrency: Currency;
  activeCategory: VehicleCategory;
  onCategoryChange: (category: VehicleCategory) => void;
  onSelectForDetails: (vehicle: Vehicle) => void;
  onSelectForBooking: (vehicle: Vehicle) => void;
}

export const FleetCatalog: React.FC<FleetCatalogProps> = ({
  currentCurrency,
  activeCategory,
  onCategoryChange,
  onSelectForDetails,
  onSelectForBooking,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'recommended' | 'price-asc' | 'price-desc' | 'year'>('recommended');
  const [driverFilter, setDriverFilter] = useState<'all' | 'with-chauffeur'>('all');

  const categories: { key: VehicleCategory; label: string }[] = [
    { key: 'all', label: 'Hamısı' },
    { key: 'luxury', label: 'Lüks Sedanlar' },
    { key: 'suv', label: 'SUV & Off-Road' },
    { key: 'sports', label: 'İdman & Kabriolet' },
    { key: 'minivan', label: 'VIP Minivan & Bus' },
    { key: 'business', label: 'Biznes Klass' },
  ];

  const filteredVehicles = useMemo(() => {
    return VEHICLES.filter((car) => {
      // Category filter
      if (activeCategory !== 'all' && car.category !== activeCategory) {
        return false;
      }
      // Driver filter
      if (driverFilter === 'with-chauffeur' && !car.chauffeurAvailable) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = car.name.toLowerCase().includes(query);
        const matchesCategory = car.categoryLabel.toLowerCase().includes(query);
        const matchesEngine = car.engine.toLowerCase().includes(query);
        const matchesFeatures = car.features.some((f) => f.toLowerCase().includes(query));
        if (!matchesName && !matchesCategory && !matchesEngine && !matchesFeatures) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceAZN - b.priceAZN;
      if (sortBy === 'price-desc') return b.priceAZN - a.priceAZN;
      if (sortBy === 'year') return b.year - a.year;
      return 0; // recommended order
    });
  }, [activeCategory, driverFilter, searchQuery, sortBy]);

  return (
    <section id="fleet-section" className="py-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-2">
            <span className="w-5 h-[1px] bg-[#D4AF37]" />
            <span>VIP Avtopark · Bakı</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Premium və Lüks Avtomobil Flotumuz
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-2xl">
            Mercedes S-Class, G-Class, Maybach, Range Rover və BMW 7 seriyası. Hər bir
            avtomobil zəmanətli texniki sazlıqda, salon dezinfeksiyası aparılmış və KASKO sığorta ilə təqdim olunur.
          </p>
        </div>

        {/* Live counter */}
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span>Göstərilir:</span>
          <span className="font-bold text-[#D4AF37] text-sm tabular-nums">
            {filteredVehicles.length} / {VEHICLES.length}
          </span>
          <span>avtomobil</span>
        </div>
      </div>

      {/* Filter and Control Bar */}
      <div className="mt-8 space-y-4">
        {/* Interactive category buttons */}
        <div className="flex items-center gap-1.5 p-1.5 bg-[#0F1117] rounded-xl border border-white/10 overflow-x-auto scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => onCategoryChange(cat.key)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#D4AF37] text-black shadow-md font-bold'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Secondary controls: Search & Sort */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          {/* Search Box */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Model axtarın (məs. G63, S-Class, Maybach)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0F1117] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            {/* Driver Filter */}
            <div className="flex items-center bg-[#0F1117] border border-white/10 rounded-xl p-1 text-xs">
              <button
                onClick={() => setDriverFilter('all')}
                className={`px-3 py-1.5 rounded-lg font-medium cursor-pointer ${
                  driverFilter === 'all'
                    ? 'bg-white/10 text-white font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Hamısı
              </button>
              <button
                onClick={() => setDriverFilter('with-chauffeur')}
                className={`px-3 py-1.5 rounded-lg font-medium cursor-pointer ${
                  driverFilter === 'with-chauffeur'
                    ? 'bg-[#D4AF37] text-black font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Şoferlə mövcud
              </button>
            </div>

            {/* Sort Select */}
            <div className="relative shrink-0">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sıralama meyarı"
                className="bg-[#0F1117] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-slate-300 focus:outline-none focus:border-[#D4AF37] cursor-pointer"
              >
                <option value="recommended">Tövsiyə olunan</option>
                <option value="price-asc">Qiymət: Aşağıdan yuxarı</option>
                <option value="price-desc">Qiymət: Yuxarıdan aşağı</option>
                <option value="year">Ən yeni modellər</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Vehicles */}
      {filteredVehicles.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              currency={currentCurrency}
              onSelectForDetails={onSelectForDetails}
              onSelectForBooking={onSelectForBooking}
            />
          ))}
        </div>
      ) : (
        <div className="mt-12 p-12 text-center glass-panel rounded-2xl border border-white/10 max-w-lg mx-auto">
          <Sparkles className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
          <h3 className="font-serif-luxury text-lg font-bold text-white">
            Axtarışa uyğun avtomobil tapılmadı
          </h3>
          <p className="text-xs text-slate-400 mt-2">
            Zəhmət olmasa axtarış sorğusunu dəyişin və ya filtrləri sıfırlayın.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              onCategoryChange('all');
              setDriverFilter('all');
            }}
            className="mt-5 px-5 py-2.5 text-xs font-semibold bg-[#D4AF37] text-black rounded-xl hover:brightness-110 cursor-pointer"
          >
            Bütün Modelləri Göstər
          </button>
        </div>
      )}
    </section>
  );
};
