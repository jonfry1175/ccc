import SectionHeading from "@/components/atoms/SectionHeading";
import { NumberTicker } from "@/components/ui/number-ticker";

const stats = [
  {
    id: 1,
    value: 100,
    suffix: "+",
    label: "Kru ditempatkan di Perusahaan Mitra Terpercaya",
  },
  {
    id: 2,
    value: 20,
    suffix: "+",
    label: "Perusahaan Mitra Terpercaya",
  },
  {
    id: 3,
    value: 10,
    suffix: " Tahun",
    label: "Pengalaman",
  },
  {
    id: 4,
    value: 98,
    suffix: "%",
    label: "Tingkat Penempatan Berhasil",
  },
];

export default function ImpactCard() {
  return (
    <section className="bg-offWhite py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 text-center md:px-10">
        <SectionHeading
          eyebrow="Dampak"
          title="Hasil Nyata untuk Komunitas dan Mitra"
          description="Data berikut menggambarkan jejak panjang kami dalam membangun karier global bagi tenaga kerja Indonesia."
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <article
              key={stat.id}
              className="rounded-2xl border border-primaryRed/15 bg-white p-6 shadow-sm"
            >
              <p className="text-3xl font-semibold text-primaryRed md:text-4xl">
                <NumberTicker value={stat.value} />
                {stat.suffix}
              </p>
              <p className="mt-2 text-sm text-darkGray/70">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
