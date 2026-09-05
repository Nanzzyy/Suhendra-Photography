export type Service = {
  number: string;
  title: string;
  description: string;
  detail: string;
  image: string;
  imageAlt: string;
  tags: readonly string[];
  priceList: readonly {
    label: string;
    value: string;
  }[];
  priceNote: string;
};

export type PortfolioItem = {
  id: string;
  src: string;
  alt: string;
  category: string;
  tags: readonly string[];
  title: string;
  orientation: "portrait" | "landscape" | "square";
  collection: "Wedding" | "Pre-wedding" | "Event";
  position?: string;
  isPlaceholder?: boolean;
};

const webImages = {
  baliCeremony:
    "https://images.pexels.com/photos/30810568/pexels-photo-30810568.jpeg?auto=compress&cs=tinysrgb&w=1800",
  baliPrewedding:
    "https://images.pexels.com/photos/30704298/pexels-photo-30704298.jpeg?auto=compress&cs=tinysrgb&w=1800",
  indonesianPrewedding:
    "https://images.pexels.com/photos/30723349/pexels-photo-30723349.jpeg?auto=compress&cs=tinysrgb&w=1800",
  beachWedding:
    "https://images.pexels.com/photos/15861753/pexels-photo-15861753.jpeg?auto=compress&cs=tinysrgb&w=1800",
  beachCouple:
    "https://images.pexels.com/photos/10889735/pexels-photo-10889735.jpeg?auto=compress&cs=tinysrgb&w=1800",
  seaweedCouple:
    "https://images.pexels.com/photos/10889663/pexels-photo-10889663.jpeg?auto=compress&cs=tinysrgb&w=1800",
  receptionHands:
    "https://images.pexels.com/photos/10091571/pexels-photo-10091571.jpeg?auto=compress&cs=tinysrgb&w=1800",
  receptionSparklers:
    "https://images.pexels.com/photos/11794592/pexels-photo-11794592.jpeg?auto=compress&cs=tinysrgb&w=1800",
  indoorPortrait:
    "https://images.pexels.com/photos/4101119/pexels-photo-4101119.jpeg?auto=compress&cs=tinysrgb&w=1800",
  beachWeddingWide:
    "https://images.pexels.com/photos/32113385/pexels-photo-32113385.jpeg?auto=compress&cs=tinysrgb&w=1800",
  beachBrideGroom:
    "https://images.pexels.com/photos/18858563/pexels-photo-18858563.jpeg?auto=compress&cs=tinysrgb&w=1800",
} as const;

export const siteContent = {
  brand: {
    name: "Suhendra",
    descriptor: "Photography",
  },
  navigation: [
    { label: "Home", href: "#top" },
    { label: "Tentang", href: "#tentang" },
    { label: "Layanan", href: "#layanan" },
    { label: "Karya", href: "#karya" },
    { label: "Proses", href: "#proses" },
    { label: "Kontak Kami", href: "#kontak" },
  ],
  hero: {
    eyebrow: "Wedding photography dan film di Bali",
    title: "Cerita yang terasa",
    titleAccent: "setelah harinya berlalu.",
    description:
      "Dokumentasi perayaan di Bali yang jujur, elegan, dan tetap terasa bertahun-tahun kemudian.",
    image: webImages.baliCeremony,
    mobileImage: webImages.beachCouple,
  },
  about: {
    eyebrow: "Pendekatan kami",
    title: "Bukan sekadar merekam. Kami menjaga rasa di dalamnya.",
    paragraphs: [
      "Setiap perayaan memiliki ritmenya sendiri. Kami hadir dengan tenang, membaca momen, dan menangkap hal-hal kecil yang sering luput: tatapan, sentuhan, dan tawa yang terjadi tanpa arahan.",
      "Dengan perpaduan dokumenter dan editorial, hasil akhirnya terasa natural sekaligus refined. Tidak berlebihan, tidak lekang oleh tren.",
    ],
  },
  services: [
    {
      number: "01",
      title: "Fotografi Pernikahan",
      description: "Dokumentasi pernikahan yang hangat, spontan, dan timeless.",
      detail: "Wedding Day · Ceremony · Celebration",
      image: webImages.baliCeremony,
      imageAlt: "Momen pasangan dalam perayaan pernikahan bernuansa tropis",
      tags: ["Wedding Bali", "Wedding", "Pernikahan"],
      priceList: [
        { label: "Wedding day", value: "Hubungi kami" },
        { label: "Ceremony dan celebration", value: "Hubungi kami" },
        { label: "Album dan tambahan", value: "Sesuai kebutuhan" },
      ],
      priceNote: "Harga final menyesuaikan tanggal, durasi, lokasi, dan kebutuhan produksi.",
    },
    {
      number: "02",
      title: "Film Pernikahan",
      description: "Film sinematik yang membawa kembali suasana dan emosi hari Anda.",
      detail: "Highlight · Full story",
      image: webImages.beachWeddingWide,
      imageAlt: "Pasangan pengantin dalam suasana intim dan sinematik",
      tags: ["Wedding Bali", "Wedding", "Film"],
      priceList: [
        { label: "Highlight film", value: "Hubungi kami" },
        { label: "Full story film", value: "Hubungi kami" },
        { label: "Add-on dokumentasi", value: "Sesuai kebutuhan" },
      ],
      priceNote: "Pilihan film ditentukan dari durasi acara, jumlah kru, dan kebutuhan cerita.",
    },
    {
      number: "03",
      title: "Pre-wedding",
      description: "Sesi yang personal dengan arahan natural dan lokasi yang bermakna.",
      detail: "Concept · Styling · Direction",
      image: webImages.baliPrewedding,
      imageAlt: "Pasangan berjalan di tepi pantai saat sesi pre-wedding",
      tags: ["Wedding Bali", "Pre-wedding", "Pernikahan"],
      priceList: [
        { label: "Sesi foto", value: "Hubungi kami" },
        { label: "Konsep dan styling", value: "Hubungi kami" },
        { label: "Lokasi tambahan", value: "Sesuai kebutuhan" },
      ],
      priceNote: "Penawaran disusun berdasarkan konsep, durasi, lokasi, dan kebutuhan styling.",
    },
    {
      number: "04",
      title: "Dokumentasi Acara",
      description: "Liputan visual menyeluruh untuk perayaan pribadi maupun korporat.",
      detail: "Birthday · Gathering · Corporate",
      image: webImages.receptionHands,
      imageAlt: "Pasangan dan tamu berbagi momen di wedding reception",
      tags: ["Wedding", "Event", "Celebration"],
      priceList: [
        { label: "Acara pribadi", value: "Hubungi kami" },
        { label: "Gathering dan corporate", value: "Hubungi kami" },
        { label: "Tambahan jam liputan", value: "Sesuai kebutuhan" },
      ],
      priceNote: "Harga disesuaikan dengan format acara, jumlah tamu, durasi, dan area liputan.",
    },
    {
      number: "05",
      title: "Creative & Styling",
      description: "Konsep visual terarah agar seluruh detail terasa selaras dalam kamera.",
      detail: "Decor · Make-up · Visual direction",
      image: webImages.indoorPortrait,
      imageAlt: "Pasangan dalam suasana perayaan dengan dekorasi yang hangat",
      tags: ["Wedding Bali", "Creative", "Styling"],
      priceList: [
        { label: "Creative direction", value: "Hubungi kami" },
        { label: "Styling dan decor", value: "Hubungi kami" },
        { label: "Make-up direction", value: "Sesuai kebutuhan" },
      ],
      priceNote: "Ruang lingkup creative dan styling ditentukan dari konsep visual yang dipilih.",
    },
    {
      number: "06",
      title: "Paket Perayaan",
      description: "Solusi terkurasi untuk dokumentasi dan kebutuhan hari istimewa Anda.",
      detail: "Documentation · Decor · Catering",
      image: webImages.beachBrideGroom,
      imageAlt: "Pasangan pengantin dalam suasana perayaan yang intim",
      tags: ["Wedding Bali", "Wedding", "Full service"],
      priceList: [
        { label: "Dokumentasi", value: "Hubungi kami" },
        { label: "Decor dan catering", value: "Hubungi kami" },
        { label: "Kebutuhan tambahan", value: "Sesuai kebutuhan" },
      ],
      priceNote: "Paket dirancang bersama berdasarkan skala, prioritas, dan kebutuhan hari perayaan.",
    },
  ] satisfies Service[],
  portfolio: [
    {
      id: "wedding-quiet-promise",
      src: webImages.baliCeremony,
      alt: "Momen hangat pasangan dalam perayaan pernikahan bernuansa tropis",
      category: "Wedding",
      tags: ["Wedding Bali", "Wedding", "Pernikahan"],
      title: "A quiet promise",
      orientation: "portrait",
      collection: "Wedding",
      position: "center 40%",
    },
    {
      id: "celebration-evening-in-bloom",
      src: webImages.receptionHands,
      alt: "Pasangan berbagi momen di wedding reception dengan suasana hangat",
      category: "Celebration",
      tags: ["Wedding", "Event", "Reception"],
      title: "An evening in bloom",
      orientation: "landscape",
      collection: "Event",
    },
    {
      id: "prewedding-where-light-stays",
      src: webImages.indonesianPrewedding,
      alt: "Pasangan berjalan di tepi pantai saat matahari terbenam",
      category: "Pre-wedding",
      tags: ["Wedding Bali", "Pre-wedding", "Pernikahan"],
      title: "Where the light stays",
      orientation: "portrait",
      collection: "Pre-wedding",
    },
    {
      id: "editorial-softly-forever",
      src: webImages.beachWeddingWide,
      alt: "Pasangan pengantin dalam suasana editorial yang intim",
      category: "Editorial",
      tags: ["Wedding Bali", "Wedding", "Editorial"],
      title: "Softly, forever",
      orientation: "landscape",
      collection: "Wedding",
      position: "center 44%",
    },
    {
      id: "placeholder-wedding-before-the-vows",
      src: webImages.beachWedding,
      alt: "Foto referensi pasangan pengantin di tepi pantai",
      category: "Wedding",
      tags: ["Wedding Bali", "Wedding", "Pernikahan"],
      title: "Before the vows",
      orientation: "landscape",
      collection: "Wedding",
      position: "center 35%",
      isPlaceholder: true,
    },
    {
      id: "placeholder-wedding-hands-in-the-aisle",
      src: webImages.beachBrideGroom,
      alt: "Foto referensi pasangan pengantin berdiri di tepi pantai",
      category: "Wedding",
      tags: ["Wedding Bali", "Wedding", "Pernikahan"],
      title: "Hands in the aisle",
      orientation: "portrait",
      collection: "Wedding",
      position: "center 54%",
      isPlaceholder: true,
    },
    {
      id: "placeholder-wedding-the-last-dance",
      src: webImages.receptionSparklers,
      alt: "Foto referensi pasangan merayakan pernikahan bersama tamu",
      category: "Wedding",
      tags: ["Wedding Bali", "Wedding", "Reception"],
      title: "The last dance",
      orientation: "landscape",
      collection: "Wedding",
      position: "center 52%",
      isPlaceholder: true,
    },
    {
      id: "placeholder-wedding-under-open-skies",
      src: webImages.beachCouple,
      alt: "Foto referensi pasangan dalam suasana natural di pantai",
      category: "Wedding",
      tags: ["Wedding Bali", "Wedding", "Pernikahan"],
      title: "Under open skies",
      orientation: "portrait",
      collection: "Wedding",
      position: "center 33%",
      isPlaceholder: true,
    },
    {
      id: "placeholder-prewedding-salt-on-the-air",
      src: webImages.indonesianPrewedding,
      alt: "Foto referensi pasangan dalam sesi pre-wedding di tepi pantai",
      category: "Pre-wedding",
      tags: ["Wedding Bali", "Pre-wedding", "Pernikahan"],
      title: "Salt on the air",
      orientation: "portrait",
      collection: "Pre-wedding",
      position: "center 46%",
      isPlaceholder: true,
    },
    {
      id: "placeholder-prewedding-slow-afternoon",
      src: webImages.baliPrewedding,
      alt: "Foto referensi pasangan dalam suasana editorial yang lembut",
      category: "Pre-wedding",
      tags: ["Wedding Bali", "Pre-wedding", "Pernikahan"],
      title: "A slow afternoon",
      orientation: "landscape",
      collection: "Pre-wedding",
      position: "center 58%",
      isPlaceholder: true,
    },
    {
      id: "placeholder-event-tables-in-the-evening",
      src: webImages.receptionHands,
      alt: "Foto referensi pasangan di tengah suasana reception",
      category: "Event",
      tags: ["Wedding", "Event", "Details"],
      title: "Tables in the evening",
      orientation: "landscape",
      collection: "Event",
      position: "center 45%",
      isPlaceholder: true,
    },
    {
      id: "placeholder-event-room-full-of-laughter",
      src: webImages.indoorPortrait,
      alt: "Foto referensi pasangan dalam suasana perayaan yang hangat",
      category: "Event",
      tags: ["Wedding", "Event", "Celebration"],
      title: "A room full of laughter",
      orientation: "portrait",
      collection: "Event",
      position: "center 40%",
      isPlaceholder: true,
    },
    {
      id: "placeholder-wedding-after-the-ceremony",
      src: webImages.beachWeddingWide,
      alt: "Foto referensi pasangan pengantin dalam suasana perayaan",
      category: "Wedding",
      tags: ["Wedding Bali", "Wedding", "Pernikahan"],
      title: "After the ceremony",
      orientation: "landscape",
      collection: "Wedding",
      position: "center 48%",
      isPlaceholder: true,
    },
    {
      id: "placeholder-wedding-in-between-moments",
      src: webImages.seaweedCouple,
      alt: "Foto referensi momen candid pasangan di pesisir Bali",
      category: "Wedding",
      tags: ["Wedding Bali", "Wedding", "Pernikahan"],
      title: "In between moments",
      orientation: "portrait",
      collection: "Wedding",
      position: "center 62%",
      isPlaceholder: true,
    },
    {
      id: "placeholder-wedding-until-the-light-fades",
      src: webImages.receptionSparklers,
      alt: "Foto referensi suasana reception menjelang malam",
      category: "Wedding",
      tags: ["Wedding Bali", "Wedding", "Pernikahan"],
      title: "Until the light fades",
      orientation: "landscape",
      collection: "Wedding",
      position: "center 60%",
      isPlaceholder: true,
    },
  ] satisfies PortfolioItem[],
  process: [
    {
      number: "01",
      title: "Kenali cerita Anda",
      description: "Kami mulai dengan percakapan ringan tentang rencana, karakter, dan hal yang paling berarti bagi Anda.",
    },
    {
      number: "02",
      title: "Rancang pengalaman",
      description: "Timeline, referensi, dan kebutuhan visual disusun bersama agar hari Anda mengalir tanpa terasa kaku.",
    },
    {
      number: "03",
      title: "Nikmati momennya",
      description: "Di hari acara, Anda cukup hadir sepenuhnya. Kami menangani cerita visualnya dengan tenang dan detail.",
    },
  ],
  contact: {
    eyebrow: "Mulai cerita Anda di Bali",
    title: "Momen di Bali yang ingin dikenang?",
    description:
      "Ceritakan tanggal, lokasi, dan gambaran perayaan Anda. Kami akan membantu menemukan pendekatan yang paling tepat.",
    whatsappMessage:
      "Halo Suhendra Photography, saya ingin berdiskusi mengenai dokumentasi acara.",
    instagramUrl: "https://www.instagram.com/",
  },
} as const;

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";

export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  siteContent.contact.whatsappMessage,
)}`;
