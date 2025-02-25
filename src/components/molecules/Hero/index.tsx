import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="h-[100vh] relative flex items-center bg-navy-DEFAULT overflow-hidden">
      {/* Background overlay with stronger gradient for better navbar text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-DEFAULT/90 via-navy-DEFAULT/80 to-navy-DEFAULT/90 z-10"></div>

      {/* Background image for large screens */}
      <div className="absolute inset-0 opacity-30 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Background"
          className="object-cover"
          fill
          priority
        />
      </div>

      <div className="container px-6 md:px-10 mx-auto max-w-6xl z-20">
        <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:gap-12 pt-16">
          <div className="space-y-8 text-center lg:w-1/2 lg:text-left">
            <div className="space-y-4">
              <div className="inline-block lg:block border-b-2 border-gold pb-2 mb-2 w-3/4 lg:w-1/2">
                <h2 className="text-xl text-gold uppercase tracking-wider font-medium mb-1 text-shadow-md">Professional Staffing Services</h2>
              </div>
              <h1 className="flex flex-col text-4xl font-bold tracking-tighter text-white lg:text-5xl gap-2">
                <span className="block text-shadow-lg drop-shadow-md">Marina</span>
                <span className="block text-[#2163AD] drop-shadow-lg">Prima</span>
                <span className="block text-gold drop-shadow-lg">Sukses</span>
              </h1>

              <p className="max-w-[600px] text-white text-opacity-90 text-lg leading-relaxed font-medium drop-shadow-md mx-auto lg:mx-0 lg:pr-10">
                Specialized Recruiting & Staffing for Hospitality, Restaurant &
                Deck Engineering Professionals.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row md:min-[400px]:flex-row mt-4 justify-center lg:justify-start">
              <Button size="lg" className="text-white bg-gold hover:bg-gold-dark shadow-md px-8 font-semibold">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-gold border-2 text-gold hover:bg-gold/10 hover:text-gold-light shadow-md backdrop-blur-sm px-8 font-semibold">
                Learn More
              </Button>
            </div>

            <div className="hidden lg:flex gap-8 mt-10 pt-4 border-t border-white/20 text-white">
              <div className="text-center">
                <p className="text-3xl font-bold text-gold">15+</p>
                <p className="text-sm uppercase mt-1">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gold">500+</p>
                <p className="text-sm uppercase mt-1">Professionals Placed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gold">98%</p>
                <p className="text-sm uppercase mt-1">Client Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full max-w-[400px] lg:max-w-[500px] mx-auto">
            <div className="relative w-full overflow-hidden rounded-lg shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-t from-navy-DEFAULT/70 via-transparent to-transparent z-10"></div>
              <Image
                src="/images/hero.jpg"
                alt="Cruise ship in tropical waters"
                className="object-cover"
                width={800}
                height={600}
                priority
              />
              <div className="absolute bottom-0 left-0 w-full p-4 z-20">
                <p className="text-white font-medium text-shadow-md">Connecting talent with opportunity in maritime industries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
