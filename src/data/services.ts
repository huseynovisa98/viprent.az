export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  pricingHint: string;
  imageUrl: string;
  badge: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'airport-transfer',
    title: 'Heydər Əliyev Hava Limanı VIP Transfer',
    subtitle: 'Baku GYD Airport Meet & Greet',
    description: 'Uçuşunuzu onlayn izləyirik, sizi və ya dəyərli qonaqlarınızı terminalın çıxışında fərdi ad lövhəsi ilə qarşılayır, baqajınızı daşıyır və rahatlıqla təyinat nöqtəsinə çatdırırıq.',
    features: [
      'Uçuş gecikmələrində 60 dəqiqə pulsuz gözləmə',
      'VIP ad lövhəsi ilə fərdi qarşılanma (Meet & Greet)',
      'Baqajın avtomobilə yerləşdirilməsi və təhlükəsiz daşınması',
      'Salonda pulsuz yüksəksürətli Wi-Fi və sərin içkilər'
    ],
    pricingHint: '80 ₼-dən başlayan qiymətlərlə',
    imageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
    badge: '24/7 Fasiləsiz'
  },
  {
    id: 'chauffeur-service',
    title: 'Şoferlə Lüks İcarə (VIP Chauffeur)',
    subtitle: 'Şəxsi peşəkar sürücü xidməti',
    description: 'Sükan arxasında yorulmadan, Bakının intensiv tıxaclarını düşünmədən yalnız işinizə və istirahətinizə fokuslanın. Xarici dil bilən, kostyumlu və etiket qaydalarına bələd şəxsi sürücülər.',
    features: [
      'Rəsmi kostyumlu, xarici dil bilən peşəkar sürücülər',
      'Şəhərin alternativ marşrutlarını mükəmməl bilmə',
      'Saatlıq, günlük və ya aylıq fərdi qrafik',
      'Konfidensiallıq və təhlükəsizlik zəmanəti'
    ],
    pricingHint: 'Gündəlik +50 ₼ sürücü haqqı',
    imageUrl: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80',
    badge: 'Biznes Standart'
  },
  {
    id: 'wedding-escort',
    title: 'Toy və Tədbir Kortejləri (Gəlin Maşını)',
    subtitle: 'Xüsusi günləriniz üçün unudulmaz kortej',
    description: 'Həyatınızın ən gözəl günündə möhtəşəm Mercedes S-Class, G-Wagon və Rolls-Royce kortejləri. Peşəkar sürücülər, koordinasiyalı hərəkət və zövqlü bəzədilmə.',
    features: [
      'Ağ və qara rəngdə eyni model lüks avtomobil kortejləri',
      'Gəlin maşını üçün zövqlü gül və lent bəzədilməsi',
      'Foto və video çəkilişlər üçün tam təmizlənmiş avtomobillər',
      'Təcrübəli kortej kapitanı ilə koordinasiya'
    ],
    pricingHint: 'Xüsusi paket təklifləri',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    badge: 'Premium Kortej'
  },
  {
    id: 'corporate-fleet',
    title: 'Qonaq Qarşılanması & Korporativ Avtopark',
    subtitle: 'Diplomatik və biznes nümayəndəlikləri',
    description: 'Beynəlxalq konfranslar, forumlar, səfirliklər və xarici şirkətlər üçün rəsmi nümayəndə heyətlərinin daşınması. Rəsmi müqavilə, ƏDV və bank köçürməsi ilə ödəniş imkanı.',
    features: [
      'V-Class və Sprinter VIP mikroavtobuslarla qrup transferləri',
      'Möhtəşəm təşkilatçılıq və 7/24 operativ menecer',
      'Rəsmi müqavilə, elektron qaimə və bank köçürməsi',
      'Uzunmüddətli icarədə korporativ xüsusi tariflər'
    ],
    pricingHint: 'Fərdi korporativ təklif',
    imageUrl: 'https://images.unsplash.com/photo-1570733577524-3a047079e80d?auto=format&fit=crop&w=1200&q=80',
    badge: 'B2B & Korporativ'
  }
];
