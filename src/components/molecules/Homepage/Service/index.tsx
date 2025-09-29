import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const UniqueValue = [
    {
      id: 1,
      value:
        "Sepenuhnya Memenuhi Standar MLC 2006 & Bersertifikat ISO 9001:2015."
    },
    {
      id: 2,
      value:
        "Tim rekrutmen & staf kantor kami terdiri dari mantan pelaut berpengalaman dengan keahlian luas di industri kapal pesiar dan perhotelan."
    },
    {
      id: 3,
      value:
        "Kami menjunjung tinggi standar etika tertinggi, memastikan tidak ada biaya aplikasi atau pemrosesan yang dibebankan di luar yang diamanatkan oleh prinsipal kami."
    },
    {
      id: 4,
      value:
        "Setiap klien jalur pelayaran ditugaskan seorang koordinator kru yang berdedikasi, didukung oleh tim pemrosesan dan penjadwalan khusus untuk operasi yang lancar."
    },
    {
      id: 5,
      value:
        "Kami telah menjalin kemitraan yang kuat dengan institusi perhotelan terkemuka di seluruh Indonesia, yang memberi kami akses prioritas ke lulusan/kandidat luar biasa."
    }
  ];

  return (
    <section id="about" className="px-4 py-16 md:py-24" ref={sectionRef}>
      <div className="max-w-6xl px-10 mx-auto">
        <section className="bg-white py-5 text-primaryRed">
          <div className="max-w-6xl mx-auto space-y-4 px-4">
            <motion.h1
              className="text-3xl font-bold mb-20"
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              Proposisi Nilai Unik Kami
            </motion.h1>
            <div className="text-left w-full">
              <ul className="space-y-4 list-disc pl-5 w-full">
                {UniqueValue.map((item, index) => (
                  <motion.li
                    key={item.id}
                    className="text-primaryRed w-full text-left ml-0"
                    initial={{ opacity: 0, x: -50 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {item.value}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
