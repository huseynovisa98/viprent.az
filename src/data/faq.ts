export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const FAQS: FAQItem[] = [
  {
    question: 'Avtomobili icarəyə götürmək üçün hansı sənədlər tələb olunur?',
    answer: 'Azərbaycan vətəndaşları üçün: etibarlı şəxsiyyət vəsiqəsi və ən azı 2 illik təcrübəsi olan sürücülük vəsiqəsi tələb olunur. Xarici vətəndaşlar üçün isə: xarici pasport və beynəlxalq və ya öz ölkəsinin etibarlı sürücülük vəsiqəsi kifayətdir.',
    category: 'Sənədlər'
  },
  {
    question: 'Minimum yaş və sürücülük stajı tələbi nə qədərdir?',
    answer: 'Biznes və standart sinif avtomobillər üçün minimum yaş həddi 21 yaş və 2 il sürücülük stajıdır. Premium SUV (məsələn, G63 AMG) və lüks modellər (Rolls-Royce, S-Class, Bentley) üçün minimum yaş 24 yaş və 3 il təcrübə tələb olunur. Sürücülü icarə zamanı yaş məhdudiyyəti yoxdur.',
    category: 'Tələblər'
  },
  {
    question: 'Depozit (girov) necə ödənilir və nə vaxt geri qaytarılır?',
    answer: 'Depozit avtomobil təhvil verilərkən nağd və ya bank kartından bloklanaraq qəbul edilir. Avtomobil saz vəziyyətdə, cəriməsiz təhvil verildikdən dərhal sonra (və ya yol polisinin elektron cərimə sisteminin yoxlanılmasından sonra 1-3 iş günü ərzində) depozit tam həcmdə müştəriyə geri ödənilir.',
    category: 'Ödəniş'
  },
  {
    question: 'Avtomobili Heydər Əliyev Hava Limanında və ya oteldə təhvil almaq mümkündürmü?',
    answer: 'Bəli, tamamilə mümkündür! Əməkdaşımız avtomobili Heydər Əliyev Beynəlxalq Aeroportuna (GYD), qaldığınız otelə və ya Bakı şəhəri üzrə istənilən ünvana təyin olunan saatda çatdırır. 3 gün və daha çox müddətə icarə edildikdə aeroportda təhvil-təslim tamamilə pulsuzdur.',
    category: 'Çatdırılma'
  },
  {
    question: 'Sürücü ilə (şoferlə) icarəyə nə daxildir?',
    answer: 'Sürücülü icarə zamanı peşəkar, kostyumlu və şəhəri mükəmməl bilən sürücü, avtomobilin tam sığortası, avtomobilin gündəlik təmizliyi təmin olunur. Şəhərdaxili transferlərdə yanacaq qiymətə daxildir; şəhərlərarası və ya uzunmüddətli səfərlərdə yanacaq xərcləri müqaviləyə uyğun tənzimlənir.',
    category: 'Xidmətlər'
  },
  {
    question: 'Sığorta şərtləri necədir? Avtomobillər sığortalanıbmı?',
    answer: 'Bütün avtomobillərimiz icbari və tam KASKO sığorta təminatına malikdir. Müqavilə şərtlərinə və yol hərəkəti qaydalarına riayət olunduqda, gözlənilməz sığorta hadisələrində müştəri maliyyə məsuliyyətindən tam azad olunur.',
    category: 'Sığorta'
  }
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  comment: string;
  rating: number;
  carRented: string;
  avatarUrl: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Fərid Məmmədov',
    role: 'Təsisçi & CEO',
    company: 'Caspian Energy Tech',
    comment: 'Xarici tərəfdaşlarımızın Bakı səfəri üçün 2 ədəd Mercedes S-Class W223 və 1 ədəd V-Class sifariş etdik. Dəqiqlik, sürücülərin yüksək səviyyəli etikası və avtomobillərin salon təmizliyi heyranedici idi.',
    rating: 5,
    carRented: 'Mercedes S-Class & V-Class',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: '2',
    name: 'Leyla Əliyeva',
    role: 'Toy Təşkilatçısı & Event Director',
    company: 'Baku Wedding Atelier',
    comment: 'Toy kortejlərimiz üçün daimi olaraq VipRent.az ilə əməkdaşlıq edirik. Ağ G63 AMG və Maybach korteji toya xüsusi əzəmət qatdı. Vaxtında çatdırılma və yüksək peşəkarlıq üçün təşəkkürlər!',
    rating: 5,
    carRented: 'Mercedes G63 AMG & Maybach',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: '3',
    name: 'David Von Berg',
    role: 'Regional Direktoru',
    company: 'DAX Logistics Frankfurt',
    comment: 'I travel frequently to Baku for oil & gas projects. VipRent arranged GYD airport pick-up with a driver speaking fluent English. Seamless booking, no hidden fees, excellent Range Rover Autobiography.',
    rating: 5,
    carRented: 'Range Rover Autobiography',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  }
];
