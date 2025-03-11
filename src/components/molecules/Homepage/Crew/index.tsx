import CarouselComponent from "@/components/atoms/CarouselImage";

import { crews } from "@/lib/DataCrew";

export default function Crew() {
  const crewImages = crews.map((crew) => ({
    src: crew.image,
    alt: `Training Image ${crew.id}`
  }));
  return (
    <section className=" py-16 md:py-24 bg-gold">
      <div className=" max-w-6xl mx-auto px-10 text-center">
        <h1 className="inline-block text-3xl font-bold text-color1 md:text-4xl relative">
          Our Crew
          <span className="absolute bottom-0 left-0 w-full h-3 bg-color1 opacity-30 z-0"></span>
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
