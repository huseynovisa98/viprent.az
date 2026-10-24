import { Vehicle } from '../types';

export const VEHICLES: Vehicle[] = [
  {
    id: 'mercedes-s-class-w223',
    name: 'Mercedes-Benz S-Class S580 (W223)',
    category: 'luxury',
    categoryLabel: 'Lüks Sedan',
    year: 2024,
    engine: '4.0L V8 Biturbo + EQ Boost',
    power: '503 a.g.',
    acceleration: '4.4 san (0-100)',
    seats: 4,
    transmission: '9G-Tronic Avtomat',
    fuel: 'Benzin (Premium 98)',
    priceAZN: 500,
    weeklyPriceAZN: 450,
    depositAZN: 600,
    chauffeurAvailable: true,
    imageUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80',
    galleryUrls: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
    ],
    badge: 'V.I.P. Flotman',
    features: [
      'Masaj və soyutma funksiyalı Nappa dəri oturacaqlar',
      'Burmester High-End 4D Surround səs sistemi',
      'Panoramik lyuk & arxa V.I.P. planşet idarəetməsi',
      'MDU & KASKO tam sığorta daxildir',
      'Pulsuz Wi-Fi və premium sərinləşdirici içkilər'
    ],
    description: 'Biznes görüşlər, dövlət nümayəndəlikləri və xüsusi tədbirlər üçün alman mühəndisliyinin ən yüksək zirvəsi. Sürücü ilə və ya sürücüsüz təhvil verilir.'
  },
  {
    id: 'mercedes-g63-amg',
    name: 'Mercedes-AMG G 63 (G-Class)',
    category: 'suv',
    categoryLabel: 'SUV & Off-Road',
    year: 2024,
    engine: '4.0L V8 AMG Biturbo',
    power: '585 a.g.',
    acceleration: '4.5 san (0-100)',
    seats: 5,
    transmission: 'AMG SPEEDSHIFT TCT 9G',
    fuel: 'Benzin (Super 98)',
    priceAZN: 750,
    weeklyPriceAZN: 680,
    depositAZN: 1000,
    chauffeurAvailable: true,
    imageUrl: 'https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?auto=format&fit=crop&w=1200&q=80',
    galleryUrls: [
      'https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
    ],
    badge: 'Ən Çox Tələb Olunan',
    features: [
      'AMG Performance səsboğucu sistemi (Sport Exhaust)',
      'Qara Edition Night Package interyer və eksteryer',
      'Tam ötürücülü 4MATIC+ və 3 diferensial kilidi',
      'Bakı və bölgələr üzrə 24/7 yol dəstəyi',
      'KASKO və İcbari sığorta daxildir'
    ],
    description: 'Baku küçələrində və dağlıq marşrutlarda (Qəbələ, Şahdağ) bənzərsiz status, güc və dominant görünüş. Toy kortejlərinin əvəzolunmaz lideri.'
  },
  {
    id: 'bmw-7-series-g70',
    name: 'BMW 7 Series 740i M-Sport (G70)',
    category: 'luxury',
    categoryLabel: 'Lüks Sedan',
    year: 2024,
    engine: '3.0L TwinPower Turbo 6-Silindr',
    power: '381 a.g.',
    acceleration: '5.2 san (0-100)',
    seats: 5,
    transmission: '8-Pilləli Steptronic Sport',
    fuel: 'Benzin / Mild Hybrid',
    priceAZN: 450,
    weeklyPriceAZN: 400,
    depositAZN: 500,
    chauffeurAvailable: true,
    imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80',
    badge: 'Yeni Nəsil',
    features: [
      '31.3 düymlük BMW Theatre Screen 8K arxa kinoteatr',
      'İkonik kristal işıqlandırma və BMW Curved Display',
      'Bowers & Wilkins Diamond Surround audio',
      'Pnevmatik aktiv asqı sistemi (Ultra Comfort)',
      'Şəhərdaxili və aeroportda pulsuz təhvil'
    ],
    description: 'Gələcəyin lüks sedanı. Arxa oturacaqda 31 düymlük kinoteatr ekranı və kristal interyer ilə rəsmi qonaqlar üçün ən müasir seçim.'
  },
  {
    id: 'range-rover-autobiography',
    name: 'Range Rover Autobiography LWB',
    category: 'suv',
    categoryLabel: 'SUV & Off-Road',
    year: 2024,
    engine: '4.4L Twin-Turbo V8',
    power: '530 a.g.',
    acceleration: '4.6 san (0-100)',
    seats: 5,
    transmission: 'ZF 8-Pilləli Avtomat',
    fuel: 'Benzin',
    priceAZN: 650,
    weeklyPriceAZN: 580,
    depositAZN: 800,
    chauffeurAvailable: true,
    imageUrl: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=1200&q=80',
    badge: 'Lüks Aristokrat',
    features: [
      'Uzadılmış baza (LWB) - maksimum arxa ayaq məsafəsi',
      'Aktiv səs-küyboğucu Meridian Signature 1600W audio',
      'İntellektual pnevmoasqı və tam ötürücülü AWD',
      'Şəxsi sürücü ilə təminat imkanı',
      'KASKO sığorta və limitsiz şəhərdaxili yürüş'
    ],
    description: 'Kral ailəsinin rahatlığı və Britaniya zərifliyi. Şəhərdə və magistral yollarda mütləq səssizlik və maksimum komfortun təcəssümü.'
  },
  {
    id: 'mercedes-v-class-vip',
    name: 'Mercedes-Benz V-Class Maybach VIP Lounge',
    category: 'minivan',
    categoryLabel: 'VIP Minivan',
    year: 2024,
    engine: '2.0L Twin-Turbo Dizel / Benzin',
    power: '237 a.g.',
    acceleration: '7.8 san (0-100)',
    seats: 7,
    transmission: '9G-Tronic Avtomat',
    fuel: 'Dizel / Benzin',
    priceAZN: 400,
    weeklyPriceAZN: 350,
    depositAZN: 400,
    chauffeurAvailable: true,
    imageUrl: 'https://images.unsplash.com/photo-1570733577524-3a047079e80d?auto=format&fit=crop&w=1200&q=80',
    badge: 'Biznes Nümayəndəliyi',
    features: [
      'Maybach First-Class elektrikli uzanan kreslolar',
      'Smart TV, Apple TV, PlayStation və HDMI qoşulma',
      'Mini-bar, soyuducu, Nespresso qəhvə aparatı',
      'Ulduzlu tavan (Starlight Ceiling) ambiansı',
      'Kostyumlu, xarici dil bilən şəxsi sürücü xidməti'
    ],
    description: 'Təkərlər üzərində şəxsi təyyarə salonu. Heydər Əliyev Hava Limanı transferləri, diplomatik qonaqlar və ailəvi VIP səfərlər üçün ideal.'
  },
  {
    id: 'rolls-royce-ghost',
    name: 'Rolls-Royce Ghost Black Badge',
    category: 'luxury',
    categoryLabel: 'Lüks Sedan',
    year: 2023,
    engine: '6.75L Twin-Turbo V12',
    power: '600 a.g.',
    acceleration: '4.7 san (0-100)',
    seats: 4,
    transmission: 'Satellite Aided 8-Pilləli',
    fuel: 'Benzin (Super 98)',
    priceAZN: 1400,
    weeklyPriceAZN: 1250,
    depositAZN: 2000,
    chauffeurAvailable: true,
    chauffeurOnly: true,
    imageUrl: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&w=1200&q=80',
    badge: 'Ultra V.I.P.',
    features: [
      'Əl işi Starlight Headliner (ulduzlu səma tavanı)',
      'Elektriklə bağlanan qapılar və pnevmo "Magic Carpet" asqı',
      'Yalnız peşəkar kostyumlu şəxsi sürücü ilə təqdim olunur',
      'Qonaq qarşılanması və toy mərasimləri üçün eksklüziv',
      'VIP eskort müşayiəti təşkil edilə bilər'
    ],
    description: 'Dünyanın ən prestijli avtomobili. Qüsursuz sakitlik, əl işi interyer və statusunuzun ən yüksək səviyyədə təmsili.'
  },
  {
    id: 'porsche-panamera-4s',
    name: 'Porsche Panamera 4S Gran Turismo',
    category: 'sports',
    categoryLabel: 'İdman & Kabriolet',
    year: 2024,
    engine: '2.9L Twin-Turbo V6',
    power: '440 a.g.',
    acceleration: '4.1 san (0-100)',
    seats: 4,
    transmission: '8-Pilləli Porsche Doppelkupplung (PDK)',
    fuel: 'Benzin (Premium 98)',
    priceAZN: 480,
    weeklyPriceAZN: 420,
    depositAZN: 600,
    chauffeurAvailable: true,
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    badge: 'İdman Zərifliyi',
    features: [
      'Sport Chrono paketi və idman səsboğucu sistemi',
      '14 istiqamətli elektrik tənzimlənən idman oturacaqları',
      'BOSE Surround səs sistemi',
      'PASM adaptiv pnevmatik asqı',
      'Şəhər daxilində operativ çatdırılma'
    ],
    description: 'İdman avtomobilinin adrenalin dolu dinamikası və dördqapılı sedanın premium rahatlığı bir arada. Sükan arxasında əsl həzz.'
  },
  {
    id: 'cadillac-escalade-platinum',
    name: 'Cadillac Escalade Platinum ESV',
    category: 'suv',
    categoryLabel: 'SUV & Off-Road',
    year: 2023,
    engine: '6.2L EcoTec3 V8',
    power: '420 a.g.',
    acceleration: '5.9 san (0-100)',
    seats: 7,
    transmission: '10-Pilləli Hydra-Matic',
    fuel: 'Benzin',
    priceAZN: 600,
    weeklyPriceAZN: 520,
    depositAZN: 700,
    chauffeurAvailable: true,
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
    badge: 'Maksimum Ölçü',
    features: [
      '38 düymlük əyri Curved OLED cihazlar paneli',
      '36 dinamikli AKG Studio Reference səs sistemi',
      'Genişləndirilmiş ESV baqaj tutumu (çoxsaylı çamadanlar)',
      'Gecəgörmə kamerası (Night Vision) və Magnetic Ride Control',
      'Böyük nümayəndə heyətləri üçün idealdır'
    ],
    description: 'Amerika lüksünün nəhəng simvolu. 7 nəfərlik komfortlu salon, nəhəng baqaj həcmi və möhtəşəm yol təhlükəsizliyi.'
  },
  {
    id: 'bentley-continental-gt',
    name: 'Bentley Continental GT V8 Mulliner',
    category: 'sports',
    categoryLabel: 'İdman & Kabriolet',
    year: 2023,
    engine: '4.0L Twin-Turbo V8',
    power: '550 a.g.',
    acceleration: '3.9 san (0-100)',
    seats: 4,
    transmission: '8-Pilləli İki Muftalı Avtomat',
    fuel: 'Benzin (Super 98)',
    priceAZN: 950,
    weeklyPriceAZN: 850,
    depositAZN: 1200,
    chauffeurAvailable: true,
    imageUrl: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80',
    badge: 'Kupe Şah əsəri',
    features: [
      'Bentley Rotating Display 3-tərəfli fırlanan panel',
      'Almaz naxışlı əl tikişi Mulliner dəri interyer',
      'Naim for Bentley 2200W premium audio',
      'Aktiv stabilizasiya sistemi (Bentley Dynamic Ride)',
      'Foto və video çəkilişlər üçün ən estetik seçim'
    ],
    description: 'Britaniya sənətkarlığının şah əsəri. Klip, fotosessiya, toy korteji və ya unudulmaz həftəsonu üçün ən zövqlü seçim.'
  },
  {
    id: 'mercedes-e-class-w213',
    name: 'Mercedes-Benz E-Class E300 AMG Line',
    category: 'business',
    categoryLabel: 'Biznes Klass',
    year: 2023,
    engine: '2.0L Turbo 4-Silindr',
    power: '258 a.g.',
    acceleration: '6.2 san (0-100)',
    seats: 5,
    transmission: '9G-Tronic Avtomat',
    fuel: 'Benzin',
    priceAZN: 220,
    weeklyPriceAZN: 190,
    depositAZN: 350,
    chauffeurAvailable: true,
    imageUrl: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
    badge: 'Optimal Biznes',
    features: [
      'AMG Line idman dizayn paketi və 19" disklər',
      'Widescreen Cockpit qoşa monitorlar',
      'Burmester Surround səs sistemi',
      'Ekonomik yanacaq sərfiyyatı və rahat idarəetmə',
      'Şirkətlər üçün aylıq icarədə xüsusi endirimlər'
    ],
    description: 'Hər gün üçün ideal biznes sedanı. Şəhərdaxili görüşlər, hava limanı transferləri və uzunmüddətli korporativ icarə üçün ən sərfəli həll.'
  },
  {
    id: 'toyota-land-cruiser-300',
    name: 'Toyota Land Cruiser 300 V6 Twin Turbo',
    category: 'suv',
    categoryLabel: 'SUV & Off-Road',
    year: 2024,
    engine: '3.5L Twin-Turbo V6',
    power: '415 a.g.',
    acceleration: '6.7 san (0-100)',
    seats: 7,
    transmission: '10-Pilləli Direct Shift Avtomat',
    fuel: 'Benzin',
    priceAZN: 380,
    weeklyPriceAZN: 330,
    depositAZN: 500,
    chauffeurAvailable: true,
    imageUrl: 'https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&w=1200&q=80',
    badge: 'Maksimum Etibarlılıq',
    features: [
      'Multi-Terrain Select və Crawl Control',
      'JBL Synthesis 14 dinamikli audio sistemi',
      'Soyuduculu mərkəzi konsol qutusu',
      'Azərbaycanın istənilən rayonuna sərbəst səyahət',
      'KASKO və icbari sığorta daxildir'
    ],
    description: 'Əfsanəvi dözümlülük və yüksək komfort. Bakıdan Qəbələ, Şahdağ, Lənkəran və Naxçıvan istiqamətinə ailəvi və işgüzar səfərlər üçün etibarlı tərəfdaş.'
  },
  {
    id: 'mercedes-sprinter-vip',
    name: 'Mercedes-Benz Sprinter VIP Business Jet',
    category: 'minivan',
    categoryLabel: 'VIP Minivan / Bus',
    year: 2023,
    engine: '3.0L V6 CDI Dizel',
    power: '190 a.g.',
    acceleration: 'Maks. Komfort',
    seats: 14,
    transmission: '7G-Tronic Plus Avtomat',
    fuel: 'Dizel',
    priceAZN: 550,
    weeklyPriceAZN: 480,
    depositAZN: 500,
    chauffeurAvailable: true,
    chauffeurOnly: true,
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    badge: '14 Nəfərlik VIP',
    features: [
      'Geniş Maybach tipli anatomik dəri oturacaqlar',
      '43" Smart TV, HDMI, Wi-Fi və karaoke sistemi',
      'Avtomatik qatlanan iş masaları və 220V elektrik yuvaları',
      'İki zonalı gücləndirilmiş kondisioner sistemi',
      'Yalnız peşəkar sertifikatlı sürücü ilə təmin edilir'
    ],
    description: 'Beynəlxalq konfranslar, böyük nümayəndə heyətləri, korporativ komandalar və V.I.P. qonaqlar üçün ən yüksək səviyyəli mikroavtobus.'
  }
];

export const CURRENCY_RATES = {
  AZN: 1,
  USD: 1.70, // 1 USD = 1.70 AZN -> price / 1.70
  EUR: 1.85, // 1 EUR = 1.85 AZN -> price / 1.85
};

export function formatPrice(priceAZN: number, currency: 'AZN' | 'USD' | 'EUR'): string {
  if (currency === 'AZN') {
    return `${priceAZN} ₼`;
  } else if (currency === 'USD') {
    const converted = Math.round(priceAZN / CURRENCY_RATES.USD);
    return `$${converted}`;
  } else {
    const converted = Math.round(priceAZN / CURRENCY_RATES.EUR);
    return `€${converted}`;
  }
}
