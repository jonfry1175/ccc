import { TestimonialCard } from "@/components/atoms/TestimonialCard";

export default function TestimonialCrew() {
  const testimonials = [
    {
      quote:
        "MSP helped me find my dream job at a luxury cruise line. Their support throughout the process was exceptional!",
      name: "Sarah Johnson",
      position: "Cruise Director",
      company: "Royal Caribbean",
      avatar: "/images/crew/1.jpeg"
    },
    {
      quote:
        "Working with MSP has been a game-changer for our recruitment needs. They consistently deliver top talent.",
      name: "Michael Chen",
      position: "HR Manager",
      company: "Princess Cruises",
      avatar: "/images/crew/2.jpeg"
    },
    {
      quote:
        "The team at MSP goes above and beyond to ensure both candidates and employers find the perfect match.",
      name: "Emily Davis",
      position: "Hospitality Manager",
      company: "Carnival Cruises",
      avatar: "/images/crew/3.jpeg"
    },
    {
      quote:
        "I found my perfect role through MSP. The process was smooth, and they supported me every step of the way.",
      name: "James Wilson",
      position: "Head Chef",
      company: "Norwegian Cruise Line",
      avatar: "/images/crew/4.jpeg"
    },
    {
      quote:
        "MSP's commitment to matching the right people with the right jobs is unmatched. Highly recommended!",
      name: "Anna Martinez",
      position: "Bartender",
      company: "Celebrity Cruises",
      avatar: "/images/crew/5.jpeg"
    },
    {
      quote:
        "Thanks to MSP, I’ve had the opportunity to travel the world while doing what I love. Best decision ever!",
      name: "Robert Anderson",
      position: "Entertainment Director",
      company: "Holland America Line",
      avatar: "/images/crew/6.jpeg"
    }
  ];

  return (
    <section className="px-4 py-16 md:py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="inline-block text-3xl text-center font-bold text-navy-DEFAULT md:text-4xl relative">
            <span className="text-center relative z-10 text-color1">
              What Our Crew Say
            </span>
          </h1>
          <p className="mt-4 text-color1 max-w-2xl mx-auto">
            Here&apos;s what some of them have to say about working with Marina
            Prima Sukses.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} bgColor="bg-gold" />
          ))}
        </div>
      </div>
    </section>
  );
}
