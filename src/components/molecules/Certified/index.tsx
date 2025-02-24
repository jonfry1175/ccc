import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import GalleryImageCard from "@/components/atoms/GalleryImageCard";
import { certifiedsData } from "@/lib/DataCertified";

export default function Certified() {
  return (
    <section className="px-4 py-16 md:py-24 bg-color4">
      <div className="container max-w-6xl mx-auto px-10">
        <h1 className="mb-12 text-3xl font-bold text-center text-color1 md:text-4xl">
          Certified By
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
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
