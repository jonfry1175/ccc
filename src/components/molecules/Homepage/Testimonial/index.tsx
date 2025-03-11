import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Testimonial() {
  const testimonials = [
    {
      quote:
        "MSP helped me find my dream job at a luxury cruise line. Their support throughout the process was exceptional! The team truly understood my career goals and matched me with the perfect opportunity.",
      name: "Sarah Johnson",
      position: "Cruise Director",
      company: "Royal Caribbean",
      avatar: "/images/crew/1.jpeg" // Using existing images as avatars
    },
    {
      quote:
        "Working with MSP has been a game-changer for our recruitment needs. They consistently deliver top talent and understand our company culture perfectly. Their screening process is thorough and efficient.",
      name: "Michael Chen",
      position: "HR Manager",
      company: "Princess Cruises",
      avatar: "/images/crew/2.jpeg"
    },
    {
      quote:
        "The team at MSP goes above and beyond to ensure both candidates and employers find the perfect match. Their industry knowledge and commitment to excellence make them stand out in maritime recruitment.",
      name: "Emma Rodriguez",
      position: "Chief Steward",
      company: "Norwegian Cruise Line",
      avatar: "/images/crew/3.jpeg"
    }
  ];

  return (
    <section className="px-4 py-16 md:py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="inline-block text-3xl text-center font-bold text-navy-DEFAULT md:text-4xl relative">
            <span className="text-center relative z-10">What Our Clients Say</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-gold opacity-40 z-0"></span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We pride ourselves on the relationships we build with our clients and candidates. 
            Here&apos;s what some of them have to say about working with Marina Prima Sukses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white border border-gold/20 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <CardContent className="p-8 space-y-6 relative">
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Quote className="w-12 h-12 text-gold rotate-180" />
                </div>
                
                <p className="text-navy-DEFAULT/80 min-h-[120px] italic leading-relaxed relative z-10">
                  &quot;{testimonial.quote}&quot;
                </p>
                
                <div className="pt-6 flex items-center space-x-4 border-t border-gold/10">
                  <div className="overflow-hidden rounded-full w-12 h-12 bg-gold/20 flex-shrink-0">
                    <Image 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h1 className="font-semibold text-navy-DEFAULT">
                      {testimonial.name}
                    </h1>
                    <p className="text-sm text-navy-DEFAULT/70">{testimonial.position}</p>
                    <p className="text-xs text-gold font-medium mt-1">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
