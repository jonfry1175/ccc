import { Card, CardContent } from "@/components/ui/card";
import { crews } from "@/lib/DataCrew";

export default function Crew() {
  return (
    <section className="px-4 py-16 md:py-24 bg-color1">
      <div className="container max-w-6xl mx-auto">
        <h1 className="mb-12 text-3xl font-bold text-center text-textColor md:text-4xl">
          Our Crew
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {crews.map((crew, index) => (
            <Card
              key={index}
              className="transition-shadow bg-white border-none shadow-lg hover:shadow-xl"
            >
              <CardContent className="px-6 pt-6 space-y-4 text-center">
                <img
                  src={crew.image}
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
