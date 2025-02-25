import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import GalleryImageCard from "@/components/atoms/GalleryImageCard";
import { certifiedsData } from "@/lib/DataCertified";

export default function Certified() {
  return (
    <section className="py-16 md:py-24 bg-[#E6DFD2]">
      <div className="container max-w-6xl mx-auto px-4 md:px-10">
        <div className="text-center mb-14">
          <h2 className="inline-block text-3xl font-bold text-navy-DEFAULT md:text-4xl relative">
            <span className="relative z-10">Certified By</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-gold opacity-30 z-0"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {certifiedsData.map((testimonial, index) => (
            <GalleryImageCard
              key={index}
              src={testimonial.image}
              alt={`Certified ${index + 1}`}
              width={10}
              height={10}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
