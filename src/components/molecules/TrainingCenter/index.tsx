import GalleryImageCard from "@/components/atoms/GalleryImageCard";
import { Card, CardContent } from "@/components/ui/card";
import { crews } from "@/lib/DataCrew";
import { trainings } from "@/lib/DataTraining";
import Image from "next/image";

export default function TrainingCenter() {
  return (
    <section className="px-4 py-16 bg-white md:py-24">
      <div className="container max-w-6xl mx-auto">
        <h1 className="mb-12 text-3xl font-bold text-center text-color1 md:text-4xl">
          Training Facility
        </h1>
        <div className="">
          <video
            src="/images/training/11.mp4"
            controls
            className="w-full h-auto max-h-[500px] rounded-lg object-cover aspect-video"
          ></video>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-3">
          {trainings.map((training, index) => (
            <GalleryImageCard
              key={index}
              src={training.image}
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
