import { Users, GraduationCap, LineChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      icon: Users,
      title: "Recruitment & Placement",
      description:
        "Job to job recruitment solutions for cruise lines and maritime professionals."
    },
    {
      icon: GraduationCap,
      title: "Training Programs",
      description: "Industry-standard training and certification programs."
    },
    {
      icon: LineChart,
      title: "Career Development",
      description: "Professional growth and career development opportunities."
    }
  ];

  return (
    <section className="px-4 py-16 md:py-24 bg-color1">
      <div className="container max-w-6xl mx-auto">
        <h1 className="mb-12 text-3xl font-bold text-center text-textColor md:text-4xl">
          Our Services
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="transition-shadow bg-white border-none shadow-lg hover:shadow-xl"
            >
              <CardContent className="px-6 pt-6 space-y-4 text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-full bg-gray-50">
                  <service.icon className="w-6 h-6 text-color1" />
                </div>
                <h1 className="text-xl font-semibold text-color1">
                  {service.title}
                </h1>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
