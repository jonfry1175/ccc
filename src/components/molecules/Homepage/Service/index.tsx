import SectionHeading from "@/components/atoms/SectionHeading";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const uniqueValue = [
  {
    id: 1,
    value:
      "Sepenuhnya memenuhi standar MLC 2006 dan tersertifikasi ISO 9001:2015.",
  },
  {
    id: 2,
    value:
      "Tim rekrutmen terdiri dari eks pelaut berpengalaman dengan wawasan operasional mendalam.",
  },
  {
    id: 3,
    value:
      "Rekrutmen transparan tanpa biaya tersembunyi, sesuai mandat prinsipal kami.",
  },
  {
    id: 4,
    value:
      "Koordinator kru khusus mendampingi setiap klien untuk memastikan operasi yang mulus.",
  },
  {
    id: 5,
    value:
      "Kemitraan luas dengan institusi perhotelan membuka akses ke kandidat terbaik.",
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      id="unique-value"
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-primaryRed/5 via-primaryRed/10 to-primaryGold/10 py-20"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(227,30,36,0.12),transparent_60%)]"
        aria-hidden
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 md:px-10">
        <SectionHeading
          eyebrow="Nilai Utama"
          title="Mengapa Mitra Memilih Kami"
          description="Kami bekerja sebagai perpanjangan tim Anda, memastikan standar internasional terpenuhi sekaligus merawat kandidat secara berkelanjutan."
          align="left"
        />

        <ul className="space-y-4">
          {uniqueValue.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -45 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="flex items-start gap-4 rounded-2xl border border-primaryRed/20 bg-white/80 p-5 backdrop-blur"
            >
              <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primaryRed text-sm font-semibold text-white">
                {index + 1}
              </span>
              <p className="text-sm text-darkGray/85 md:text-base">
                {item.value}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
