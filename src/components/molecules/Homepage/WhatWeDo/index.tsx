import { Card, CardContent } from "@/components/ui/card";

export default function WhatWeDo() {
  const whatWeDo = [
    {
      image: "/images/whatwedo/1.png",
      description: "Talent Acquisition & Recruitment"
    },
    {
      image: "/images/whatwedo/2.png",
      description: "Talent Interview & Assessment"
    },
    {
      image: "/images/whatwedo/3.png",
      description: "Pre-Deployment Training & Skill Refresher Programs"
    },
    {
      image: "/images/whatwedo/4.png",
      description: "Employment Visa & Document Assistance"
    }
  ];

  return (
    <section id="about" className="px-4 py-16 md:py-24 bg-gold">
      <div className="max-w-6xl px-10 mx-auto">
        <div>
          <h1 className="inline-block mb-12 text-3xl font-bold text-color1 md:text-4xl relative">
            What We Do
            <span className="absolute bottom-0 left-0 w-full h-3 bg-color1 opacity-30 z-0"></span>
          </h1>
        </div>
        <div className="mb-16 space-y-4 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeDo.map((service, index) => (
              <Card
                key={index}
                className="space-y-4 text-center border-8 rounded-md border-gold bg-gold/10 hover:bg-gold/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg"
              >
                <CardContent className="px-6 pt-6 space-y-4 text-center">
                  <img
                    src={service.image}
                    alt="Service Image"
                    className="w-full h-40 object-cover rounded-md filter invert-[11%] sepia-[31%] saturate-[800%] hue-rotate-[180deg]"
                  />

                  <p className="text-color1">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
