import SectionHeading from "@/components/atoms/SectionHeading";
import GalleryImageCard from "@/components/atoms/GalleryImageCard";
import { certifiedsData } from "@/lib/DataCertified";

export default function Certified() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:px-10">
        <SectionHeading
          eyebrow="Kepercayaan"
          title="Sertifikasi & Pengakuan Resmi"
          description="Legalitas operasi kami didukung penuh oleh regulator kemaritiman Indonesia dan standar internasional."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {certifiedsData.map((testimonial, index) => (
            <GalleryImageCard
              key={index}
              src={testimonial.image}
              alt={`Certified ${index + 1}`}
              name={testimonial.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
