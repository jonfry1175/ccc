import { TestimonialCard } from "@/components/atoms/TestimonialCard";

export default function TestimonialCrew() {
  const testimonials = [
    {
      quote:
        "Thanks to Marina Prima Sukses, I was able to secure a position on a top cruise line. The process was smooth, and they guided me every step of the way, from interviews to deployment. I highly recommendthem to anyone looking for a career at sea!",
      name: " Anggi P. ",
      position: "Waiter",

      avatar: "/images/crew/1.jpeg"
    },
    {
      quote:
        "The staff at Marina Prima Sukses was incredibly professional, supportive and humble. They helped me with my documents, visa, and interview preparation. Now, I am working on a luxury cruise ship andloving every moment!",
      name: "Dandi E.",
      position: "Housekeeping Attendant",

      avatar: "/images/crew/2.jpeg"
    },
    {
      quote:
        "I never imagined working on a cruise ship until I found Marina Prima Sukses. They connected me with the perfect job, and now I am traveling the world while earning a great income. Thank you for changing mylife!",
      name: "Jufri M.",
      position: "Deck Crew",

      avatar: "/images/crew/3.jpeg"
    },
    {
      quote:
        "Unlike other agencies, Marina Prima Sukses was 100% transparent. There were no hidden fees, and they ensured that I understood the entire process. I feel lucky to have found such a trustworthy hiring partner.",
      name: "Komang W.",
      position: "Bartender",

      avatar: "/images/crew/4.jpeg"
    },
    {
      quote:
        "I started as a kitchen steward, and with Marina Prima Sukses' support, I have now been promoted to assistant chef! They truly care about crew members’ career growth and provide amazing opportunities.",
      name: "Naida S.",
      position: "Assistant Chef",

      avatar: "/images/crew/5.jpeg"
    },
    {
      quote:
        "Choosing Marina Prima Sukses was the best decision of my career. Their guidance, professionalism, and strong connections with cruise lines made it possible for me to land a great job onboard. Highly recommended!",
      name: "Taufik M.",
      position: " Engine Technician",

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
