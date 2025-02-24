import CarouselComponent from "@/components/atoms/CarouselImage";
import GalleryImageCard from "@/components/atoms/GalleryImageCard";

import { crews } from "@/lib/DataCrew";

export default function Crew() {
  const crewImages = crews.map((crew) => ({
    src: crew.image,
    alt: `Training Image ${crew.id}`
  }));
  return (
    <section className=" py-16 md:py-24 bg-color4">
      <div className=" max-w-6xl mx-auto px-10">
        <h1 className="mb-12 text-3xl font-bold text-center text-color1 md:text-4xl">
          Our Crew
        </h1>

        <div className="mt-8">
          <CarouselComponent
            images={crewImages}
            loop={false}
            slidesToScroll={1}
          />
        </div>
      </div>
    </section>
  );
}
