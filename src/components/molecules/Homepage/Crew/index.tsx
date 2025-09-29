import CarouselComponent from "@/components/atoms/CarouselImage";
import { crews } from "@/lib/DataCrew";

export default function Crew() {
  const crewImages = crews.map((crew) => ({
    src: crew.image,
    alt: `Crew Member ${crew.id}`,
  }));

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-12">
          <h1 className="inline-block text-3xl font-bold text-primaryRed md:text-4xl relative">
            <span className="relative z-10">Our Crew </span>
            {/* <span className="absolute bottom-0 left-0 w-full h-3 bg-gold opacity-40 z-0"></span> */}
          </h1>
          <p className="mt-4 text-primaryRed max-w-2xl mx-auto">
            Meet some of our outstanding crew members who exemplify the high
            standards of professionalism and expertise that Christianity Crisis
            Center is known for in the maritime industry.
          </p>
        </div>

        <div className="mt-10 bg-gold shadow-xl rounded-xl overflow-hidden border border-primaryGold/10">
          <div className="p-6 bg-navy-DEFAULT/5 border-b border-primaryGold/10">
            <h3 className="text-xl font-semibold text-primaryRed">
              Professional Crew Gallery
            </h3>
            <p className="text-sm text-primaryRed mt-1">
              Swipe to view our skilled maritime professionals
            </p>
          </div>
          <div className="p-6">
            <CarouselComponent
              images={crewImages}
              loop={true}
              slidesToScroll={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
