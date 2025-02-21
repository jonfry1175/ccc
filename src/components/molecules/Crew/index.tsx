import GalleryImageCard from "@/components/atoms/GalleryImageCard";
import { Card, CardContent } from "@/components/ui/card";
import { crews } from "@/lib/DataCrew";
import Image from "next/image";

export default function Crew() {
  return (
    <section className="px-4 py-16 md:py-24 bg-color4">
      <div className="container max-w-6xl mx-auto">
        <h1 className="mb-12 text-3xl font-bold text-center text-white md:text-4xl">
          Our Crew
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {crews.map((crew, index) => (
            <GalleryImageCard
              key={index}
              src={crew.image}
              alt="training"
              width={300}
              height={300}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
