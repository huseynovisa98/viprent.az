import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FleetCatalog } from './components/FleetCatalog';
import { ServicesSection } from './components/ServicesSection';
import { TrustAndFAQ } from './components/TrustAndFAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VehicleDetailsModal } from './components/VehicleDetailsModal';
import { BookingModal } from './components/BookingModal';
import { RequirementsModal } from './components/RequirementsModal';
import { VEHICLES } from './data/vehicles';
import { Vehicle, VehicleCategory, Currency } from './types';
import { MessageCircle, Phone } from 'lucide-react';

export default function App() {
  const [currency, setCurrency] = useState<Currency>('AZN');
  const [activeCategory, setActiveCategory] = useState<VehicleCategory>('all');
  const [bookingVehicle, setBookingVehicle] = useState<Vehicle | null>(null);
  const [detailsVehicle, setDetailsVehicle] = useState<Vehicle | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isRequirementsOpen, setIsRequirementsOpen] = useState(false);

  // Handlers
  const handleSelectForBooking = (vehicle: Vehicle) => {
    setBookingVehicle(vehicle);
    setIsBookingOpen(true);
  };

  const handleSelectForDetails = (vehicle: Vehicle) => {
    setDetailsVehicle(vehicle);
    setIsDetailsOpen(true);
  };

  const handleQuickBookGeneral = () => {
    // Open booking modal with top flagship car as default
    setBookingVehicle(VEHICLES[0]);
    setIsBookingOpen(true);
  };

  const handleQuickBookService = (serviceName: string) => {
    // Pick an appropriate car for the service
    if (serviceName.toLowerCase().includes('hava limanı') || serviceName.toLowerCase().includes('transfer')) {
      const vClass = VEHICLES.find((v) => v.category === 'minivan') || VEHICLES[0];
      setBookingVehicle(vClass);
    } else if (serviceName.toLowerCase().includes('toy') || serviceName.toLowerCase().includes('gəlin')) {
      const g63 = VEHICLES.find((v) => v.name.includes('G 63')) || VEHICLES[1];
      setBookingVehicle(g63);
    } else {
      setBookingVehicle(VEHICLES[0]);
    }
    setIsBookingOpen(true);
  };

  const handleHeroSearch = (criteria: {
    category: VehicleCategory;
    withDriver: boolean;
    pickupLocation: string;
    startDate: string;
    endDate: string;
  }) => {
    setActiveCategory(criteria.category);
  };

  return (
    <div className="min-h-screen bg-[#07080B] text-slate-100 flex flex-col selection:bg-[#D4AF37]/30 selection:text-white">
      {/* 1. Global Navigation Bar */}
      <Navbar
        currentCurrency={currency}
        onCurrencyChange={setCurrency}
        onOpenRequirements={() => setIsRequirementsOpen(true)}
        onQuickBookGeneral={handleQuickBookGeneral}
      />

      {/* 2. Hero Section with Search Engine */}
      <Hero
        onSearch={handleHeroSearch}
        onOpenRequirements={() => setIsRequirementsOpen(true)}
      />

      {/* 3. Luxury Fleet Showcase Grid */}
      <FleetCatalog
        currentCurrency={currency}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        onSelectForDetails={handleSelectForDetails}
        onSelectForBooking={handleSelectForBooking}
      />

      {/* 4. Core VIP Services */}
      <ServicesSection onQuickBookService={handleQuickBookService} />

      {/* 5. Customer Testimonials & FAQ Accordion */}
      <TrustAndFAQ />

      {/* 6. Contact & Baku Central Office */}
      <ContactSection />

      {/* 7. VIP Footer */}
      <Footer onOpenRequirements={() => setIsRequirementsOpen(true)} />

      {/* Interactive Modals & Drawers */}
      <VehicleDetailsModal
        vehicle={detailsVehicle}
        currency={currency}
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        onBookNow={handleSelectForBooking}
      />

      <BookingModal
        vehicle={bookingVehicle}
        currency={currency}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      <RequirementsModal
        isOpen={isRequirementsOpen}
        onClose={() => setIsRequirementsOpen(false)}
        onProceedToBooking={() => {
          const el = document.getElementById('fleet-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Floating Action Button for Quick WhatsApp Concierge */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        <a
          href="https://wa.me/994502202020?text=Salam,%20VipRent.az%20vasit%C9%99sil%C9%99%20avtomobil%20icar%C9%99si%20haqq%C9%99nda%20m%C9%99lumat%20almaq%20ist%C9%99yir%C9%99m."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-xs uppercase tracking-wider rounded-full shadow-2xl shadow-black/80 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          title="WhatsApp VIP Dəstək"
        >
          <MessageCircle className="w-5 h-5 fill-black/20" />
          <span className="hidden sm:inline">WhatsApp Dəstək</span>
        </a>
      </div>
    </div>
  );
}
