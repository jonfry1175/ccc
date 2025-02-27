import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonial() {
  const testimonials = [
    {
      quote:
        "MSP helped me find my dream job at a luxury cruise line. Their support throughout the process was exceptional!",
      name: "Sarah Johnson",
      position: "Cruise Director"
    },
    {
      quote:
        "Working with MSP has been a game-changer for our recruitment needs. They consistently deliver top talent.",
      name: "Michael Chen",
      position: "HR Manager"
    },
    {
      quote:
        "The team at MSP goes above and beyond to ensure both candidates and employers find the perfect match.",
      name: "Emma Rodriguez",
      position: "Chief Steward"
    }
  ];

  return (
    <section className="px-4 py-16 md:py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-10">
        <div className="text-center">
          <h1 className="inline-block mb-12 text-3xl text-center font-bold text-color1 md:text-4xl relative">
            <span className="text-center">What Will People Say</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-color1 opacity-30 z-0"></span>
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gold border-none ">
              <CardContent className="px-6 pt-6 space-y-4">
                <div className="flex justify-start">
                  <Quote className="w-8 h-8 opacity-50 text-color1" />
                </div>
                <p className="text-color1 min-h-[80px]">{testimonial.quote}</p>
                <div className="pt-4 space-y-1">
                  <h1 className="font-semibold text-color1">
                    {testimonial.name}
                  </h1>
                  <p className="text-sm text-color4">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
