import SectionHeading from "@/components/atoms/SectionHeading";
import { FaRegHandshake } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { GoGoal } from "react-icons/go";

const highlights = [
  {
    icon: FaRegHandshake,
    title: "Komitmen Kami",
    description:
      "Menghubungkan talenta terbaik Indonesia dengan perusahaan kapal pesiar dunia melalui kemitraan jangka panjang dan rekrutmen beretika.",
  },
  {
    icon: FaRegEye,
    title: "Visi Kami",
    description:
      "Menjadi partner pilihan yang dipercaya untuk menghadirkan kru profesional dengan pelayanan unggul dan pengalaman tamu yang luar biasa.",
  },
  {
    icon: GoGoal,
    title: "Misi Kami",
    description:
      "Menyediakan solusi SDM komprehensif mulai dari seleksi, pelatihan, hingga penempatan sehingga kru siap berkarier secara global.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-offWhite py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 md:px-10">
        <SectionHeading
          eyebrow="Identitas Kami"
          title="Mengembangkan Talenta Maritim Sejak 2015"
          description="Kami hadir sebagai penghubung antara armada kapal pesiar global dan tenaga kerja Indonesia yang siap tampil profesional."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {highlights.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group flex h-full flex-col justify-between rounded-2xl border border-primaryRed/15 bg-white p-8 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primaryRed/10 text-primaryRed">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-textBlack">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-darkGray/80">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
