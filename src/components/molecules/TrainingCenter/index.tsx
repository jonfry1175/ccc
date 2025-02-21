import { Card, CardContent } from "@/components/ui/card";
import { crews } from "@/lib/DataCrew";
import { trainings } from "@/lib/DataTraining";

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
            <Card key={index} className="bg-white ">
              <CardContent className="px-6 pt-6 space-y-4 text-center">
                <img
                  src={training.image}
                  alt="crew"
                  className="object-cover w-full h-48"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
