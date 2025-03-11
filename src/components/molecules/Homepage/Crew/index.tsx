import CarouselComponent from "@/components/atoms/CarouselImage";
import { crews } from "@/lib/DataCrew";

export default function Crew() {
  const crewImages = crews.map((crew) => ({
    src: crew.image,
    alt: `Crew Member ${crew.id}`
  }));
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-navy-DEFAULT/10 to-gold/20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-12">
          <h1 className="inline-block text-3xl font-bold text-navy-DEFAULT md:text-4xl relative">
            <span className="relative z-10">Our Crew Excellence</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-gold opacity-40 z-0"></span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Meet some of our outstanding crew members who exemplify the high standards of 
            professionalism and expertise that Marina Prima Sukses is known for in the maritime industry.
          </p>
        </div>

        <div className="mt-10 bg-white shadow-xl rounded-xl overflow-hidden border border-gold/10">
          <div className="p-6 bg-navy-DEFAULT/5 border-b border-gold/10">
            <h3 className="text-xl font-semibold text-navy-DEFAULT">Professional Crew Gallery</h3>
            <p className="text-sm text-gray-500 mt-1">Swipe to view our skilled maritime professionals</p>
          </div>
          <div className="p-6">
            <CarouselComponent
              images={crewImages}
              loop={true}
              slidesToScroll={1}
            />
          </div>
          <div className="bg-navy-DEFAULT/5 py-4 px-6 text-left border-t border-gold/10">
            <p className="text-sm text-navy-DEFAULT/70">
              Our crew members are highly trained professionals with international certifications 
              and extensive experience in the maritime industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
