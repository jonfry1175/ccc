import { FaRegHandshake } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { GoGoal } from "react-icons/go";

export default function About() {
  return (
    <section id="about" className="px-4 py-16 md:py-24">
      <div className="max-w-6xl px-10 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {/* Global Reach */}
          <div className="space-y-4 text-center border-2 rounded-md border-primaryGold bg-gold/10 hover:bg-gold/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg">
            <div className="flex items-center justify-center w-16 mt-8 h-16 mx-auto rounded-full bg-primaryRed">
              <FaRegHandshake className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-primaryRed">
              Komitmen Kami
            </h3>
            <p className="text-primaryRed px-6 pb-8">
              Kami berkomitmen untuk menjalin kemitraan yang kuat dengan Anda,
              dengan memanfaatkan 31 tahun pengalaman industri kami dan solusi
              tenaga kerja terdepan untuk memberikan talenta luar biasa dan
              mendorong pertumbuhan dan kesuksesan bersama.
            </p>
          </div>

          {/* Industry Excellence */}
          <div className="space-y-4 text-center border-2 rounded-md border-primaryGold bg-gold/10 hover:bg-gold/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg">
            <div className="flex items-center justify-center w-16 mt-8 h-16 mx-auto rounded-full bg-primaryRed">
              <FaRegEye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-primaryRed">Visi Kami</h3>
            <p className="text-primaryRed px-6 pb-8">
              Menjadi mitra utama bagi perusahaan perhotelan yang mencari
              tenaga kerja yang andal, terampil, dan berdedikasi yang
              meningkatkan penyampaian layanan dan kepuasan tamu mereka.
            </p>
          </div>

          {/* Expert Team */}
          <div className="space-y-4 text-center border-2 rounded-md border-primaryGold bg-gold/10 hover:bg-gold/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg">
            <div className="flex items-center justify-center w-16 mt-8 h-16 mx-auto rounded-full bg-primaryRed">
              <GoGoal className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-primaryRed">Misi Kami</h3>
            <p className="text-primaryRed px-6 pb-8">
              Misi kami adalah menjadi mitra global pilihan untuk bisnis
              perhotelan yang membutuhkan tenaga kerja yang andal dan terampil.
              Dengan memupuk kolaborasi lintas budaya dan memberikan solusi
              tenaga kerja yang disesuaikan, kami bertujuan untuk
              berkontribusi pada kesuksesan klien kami di seluruh dunia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
