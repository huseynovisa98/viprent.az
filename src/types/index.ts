export type VehicleCategory = 'all' | 'luxury' | 'suv' | 'sports' | 'minivan' | 'business';

export interface Vehicle {
  id: string;
  name: string;
  category: 'luxury' | 'suv' | 'sports' | 'minivan' | 'business';
  categoryLabel: string;
  year: number;
  engine: string;
  power: string;
  acceleration: string;
  seats: number;
  transmission: string;
  fuel: string;
  priceAZN: number;
  weeklyPriceAZN: number;
  depositAZN: number;
  chauffeurAvailable: boolean;
  chauffeurOnly?: boolean;
  imageUrl: string;
  galleryUrls?: string[];
  badge?: string;
  features: string[];
  description: string;
}

export type Currency = 'AZN' | 'USD' | 'EUR';

export interface BookingDetails {
  vehicleId: string;
  startDate: string;
  endDate: string;
  pickupLocation: string;
  withChauffeur: boolean;
  includeAirportTransfer: boolean;
  customerName: string;
  customerPhone: string;
  flightNumber?: string;
  notes?: string;
}
