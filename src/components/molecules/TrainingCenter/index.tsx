import CarouselComponent from "@/components/atoms/CarouselImage";

import { trainings } from "@/lib/DataTraining";

export default function TrainingCenter() {
  // Convert data trainings jadi format yang sesuai untuk CarouselComponent
  const trainingImages = trainings.map((training) => ({
    src: training.image,
    alt: `Training Image ${training.id}`
  }));

  return (
    <section className="px-4 py-16 bg-white md:py-24">
      <div className="container max-w-6xl mx-auto px-10">
        <h1 className="mb-12 text-3xl font-bold text-center text-color1 md:text-4xl">
          Training Facility
        </h1>
        <div className=""></div>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 ">
          <video
            src="/images/training/11.mp4"
            controls
            className="w-full h-[400px] md:h-[600px] object-cover rounded-lg"
          ></video>
          <CarouselComponent
            images={trainingImages}
            loop={false}
            slidesToScroll={1}
          />
        </div>
      </div>
    </section>
  );
}
