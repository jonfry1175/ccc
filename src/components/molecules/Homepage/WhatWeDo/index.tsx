import SectionHeading from "@/components/atoms/SectionHeading";
import Image from "next/image";

const whatWeDo = [
  {
    image: "/images/whatwedo/1.png",
    description: "Talent Acquisition & Recruitment",
  },
  {
    image: "/images/whatwedo/2.png",
    description: "Talent Interview & Assessment",
  },
  {
    image: "/images/whatwedo/3.png",
    description: "Pre-Deployment Training & Skill Refresher Programs",
  },
  {
    image: "/images/whatwedo/4.png",
    description: "Employment Visa & Document Assistance",
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 md:px-10">
        <SectionHeading
          eyebrow="Layanan Kami"
          title="Layanan Akhir-ke-Akhir untuk Kru Kapal Pesiar"
          description="Mengelola setiap tahapan perjalanan kandidat mulai dari seleksi hingga siap berlayar bersama armada internasional."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {whatWeDo.map((service) => (
            <article
              key={service.description}
              className="flex h-full flex-col gap-4 rounded-2xl border border-primaryRed/10 bg-offWhite p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-primaryRed/30 hover:shadow-lg"
            >
              <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full bg-white p-4 shadow">
                <Image
                  src={service.image}
                  alt={service.description}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm font-semibold text-textBlack">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
