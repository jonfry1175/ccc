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

              <p className="max-w-[600px] text-white text-xl leading-relaxed font-semibold drop-shadow-lg mx-auto lg:mx-0 lg:pr-10 bg-navy-DEFAULT/40 p-3 rounded-md backdrop-blur-sm border-l-4 border-gold">
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
          </div>
          <div className="lg:w-1/2 w-full max-w-[400px] lg:max-w-[500px] mx-auto">
            <div className="relative w-full overflow-hidden rounded-xl shadow-2xl transform hover:scale-[1.03] transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-t from-navy-DEFAULT/80 via-navy-DEFAULT/20 to-transparent z-10 
                group-hover:from-navy-DEFAULT/70 group-hover:via-navy-DEFAULT/10 transition-all duration-500"></div>

              <div className="absolute inset-0 border border-gold/30 rounded-xl z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <Image
                src="/images/hero.jpg"
                alt="Cruise ship in tropical waters"
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                width={800}
                height={600}
                priority
              />
              <div className="absolute bottom-0 left-0 w-full p-5 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white font-medium text-shadow-lg text-lg">Connecting talent with opportunity in maritime industries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
