export type Service = {
  number: string;
  title: string;
  description: string;
  detail: string;
};

export type PortfolioItem = {
  id: string;
  src: string;
  alt: string;
  category: string;
  title: string;
  orientation: "portrait" | "landscape" | "square";
  collection: "Wedding" | "Pre-wedding" | "Event";
  position?: string;
};

export const siteContent = {
  brand: {
    name: "Suhendra",
    descriptor: "Photography",
  },
  navigation: [
    { label: "Tentang", href: "#tentang" },
    { label: "Layanan", href: "#layanan" },
    { label: "Karya", href: "#karya" },
    { label: "Proses", href: "#proses" },
  ],
  hero: {
    eyebrow: "Photography · Film · Event Stories",
    title: "Cerita yang terasa,",
    titleAccent: "jauh setelah hari berlalu.",
    description:
      "Kami mengabadikan perayaan di Bali dengan pendekatan yang jujur, elegan, dan penuh perhatian—agar setiap gambar tetap hidup dari generasi ke generasi.",
  },
  about: {
    eyebrow: "Pendekatan kami",
    title: "Bukan sekadar merekam. Kami menjaga setiap rasa di dalamnya.",
    paragraphs: [
      "Setiap perayaan memiliki ritmenya sendiri. Kami hadir dengan tenang, membaca momen, dan menangkap hal-hal kecil yang sering luput—tatapan, sentuhan, dan tawa yang terjadi tanpa arahan.",
      "Dengan perpaduan dokumenter dan editorial, hasil akhirnya terasa natural sekaligus refined. Tidak berlebihan, tidak lekang oleh tren.",
    ],
  },
  services: [
    {
      number: "01",
      title: "Fotografi Pernikahan",
      description: "Dokumentasi pernikahan yang hangat, spontan, dan timeless.",
      detail: "Wedding Day · Ceremony · Celebration",
    },
    {
      number: "02",
      title: "Film Pernikahan",
      description: "Film sinematik yang membawa kembali suasana dan emosi hari Anda.",
      detail: "Highlight · Full story",
    },
    {
      number: "03",
      title: "Pre-wedding",
      description: "Sesi yang personal dengan arahan natural dan lokasi yang bermakna.",
      detail: "Concept · Styling · Direction",
    },
    {
      number: "04",
      title: "Dokumentasi Acara",
      description: "Liputan visual menyeluruh untuk perayaan pribadi maupun korporat.",
      detail: "Birthday · Gathering · Corporate",
    },
    {
      number: "05",
      title: "Creative & Styling",
      description: "Konsep visual terarah agar seluruh detail terasa selaras dalam kamera.",
      detail: "Decor · Make-up · Visual direction",
    },
    {
      number: "06",
      title: "Paket Perayaan",
      description: "Solusi terkurasi untuk dokumentasi dan kebutuhan hari istimewa Anda.",
      detail: "Documentation · Decor · Catering",
    },
  ] satisfies Service[],
  portfolio: [
    {
      id: "wedding-quiet-promise",
      src: "/images/portfolio-ceremony.jpg",
      alt: "Momen hangat pasangan dalam perayaan pernikahan bernuansa tropis",
      category: "Wedding",
      title: "A quiet promise",
      orientation: "portrait",
      collection: "Wedding",
      position: "center 40%",
    },
    {
      id: "celebration-evening-in-bloom",
      src: "/images/portfolio-reception.jpg",
      alt: "Detail meja perayaan dengan cahaya lilin yang elegan",
      category: "Celebration",
      title: "An evening in bloom",
      orientation: "landscape",
      collection: "Event",
    },
    {
      id: "prewedding-where-light-stays",
      src: "/images/portfolio-prewedding.jpg",
      alt: "Pasangan berjalan di tepi pantai saat matahari terbenam",
      category: "Pre-wedding",
      title: "Where the light stays",
      orientation: "portrait",
      collection: "Pre-wedding",
    },
    {
      id: "editorial-softly-forever",
      src: "/images/hero-wedding.jpg",
      alt: "Pasangan pengantin dalam suasana editorial yang intim",
      category: "Editorial",
      title: "Softly, forever",
      orientation: "landscape",
      collection: "Wedding",
      position: "center 44%",
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
    eyebrow: "Mulai sebuah cerita di Bali",
    title: "Punya momen di Bali yang ingin dikenang?",
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
