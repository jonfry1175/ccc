export const COMPANY_NAME = "Meta Solusi Digital";
export const PHONE = "+62 821-1880-7755";
export const WEBSITE = "metasolusdigital.com";

export const SERVICES = [
  {
    title: "Pengembangan Website",
    description:
      "Kami membuat situs web berkinerja tinggi dan ramah pengguna yang disesuaikan dengan kebutuhan bisnis Anda.",
    icon: "globe",
  },
  {
    title: "Aplikasi Web",
    description:
      "Kami menyediakan layanan pengembangan aplikasi web terbaik yang disesuaikan dengan kebutuhan Anda.",
    icon: "window",
  },
  {
    title: "Aplikasi Mobile",
    description:
      "Kami unggul dalam menciptakan aplikasi seluler iOS dan Android berkinerja tinggi.",
    icon: "mobile",
  },
  {
    title: "Pemasaran Digital",
    description:
      "Kami menyediakan layanan pemasaran digital yang komprehensif, termasuk SEO, PPC, dan pemasaran email.",
    icon: "megaphone",
  },
];

export const PRICING_PLANS = [
  {
    name: "Paket Bisnis",
    price: 4000000,
    period: "/Tahun",
    features: [
      "6 Halaman Responsif",
      "5 Hari Pengerjaan",
      "2x Kesempatan Revisi",
      "5 Halaman Optimasi SEO Dasar",
      "10 Konten Visual Premium",
    ],
  },
  {
    name: "Paket Premium",
    price: 5500000,
    period: "/Tahun",
    features: [
      "10 Halaman Responsif",
      "7 Hari Pengerjaan",
      "5x Kesempatan Revisi",
      "10 Halaman Optimasi SEO Dasar",
      "20 Konten Visual Premium",
    ],
  },
  {
    name: "Paket Enterprise",
    price: 4000000,
    period: "/Tahun",
    features: [
      "20 Halaman Responsif",
      "14 Hari Pengerjaan",
      "10x Kesempatan Revisi",
      "20 Halaman Optimasi SEO Dasar",
      "50 Konten Visual Premium",
    ],
  },
];

export const SOCIAL_LINKS = {
  facebook: "Meta Solusi Digital",
  instagram: "metasolusdigitalco",
  tiktok: "metasolusdigitalco",
  linkedin: "Meta Solusi Digital",
};

export const CLIENTS = [
  {
    name: "SIKELIM",
    url: "sikelim.kemkes.go.id",
    image: "/clients/sikelim.png",
  },
  {
    name: "SINBM",
    url: "sinbm.badanpangan.go.id",
    image: "/clients/sinbm.png",
  },
  {
    name: "SRN KLHK",
    url: "srn-klhk.com",
    image: "/clients/srn.png",
  },
  {
    name: "Optima Jasa",
    url: "optimajasa.co.id",
    image: "/clients/optimajasa.png",
  },
  {
    name: "Cloudlink",
    url: "cloudlink.co.id",
    image: "/clients/cloudlink.png",
  },
];

export const WHATSAPP_NUMBER = "6282118807755";
export const WHATSAPP_FORMATTED = "+62 821 1880 7755";
export const WHATSAPP_MESSAGE =
  "Halo, saya tertarik dengan layanan website dari Meta Solusi Digital.";

export const getWhatsAppLink = (message: string = WHATSAPP_MESSAGE) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
