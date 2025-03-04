import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen py-4 bg-color1 flex items-center overflow-hidden">
      {/* Background overlay for better readability */}

      {/* Background image */}
      <div className="absolute inset-0 opacity-30 ">
        <Image
          src="/images/hero.jpg"
          alt="Background"
          className="object-cover w-full h-full"
          width={1920}
          height={1080}
        />
      </div>

      <div className="relative py-0 md:py-8 px-6 md:px-10 mx-auto max-w-6xl z-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-12 pt-20 lg:pt-0">
          {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-block lg:block border-b-2 border-gold pb-2 mb-2 w-3/4 lg:w-1/2">
                <h2 className="text-xl text-gold uppercase tracking-wider font-medium mb-1 text-shadow-md">
                  Professional Manning Service
                </h2>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter text-white space-y-2">
                <span className="block text-white">Marina</span>
                <span className="block text-white">Prima</span>
                <span className="block text-white">Sukses</span>
              </h1>
              <p className="max-w-lg text-white text-xl leading-relaxed font-semibold bg-navy-DEFAULT/40 p-4 rounded-md backdrop-blur-sm border-l-4 border-gold">
                Specialized Recruiting & Manning for Hospitality, Restaurant &
                Deck Engineering Professionals.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gold text-white shadow-md px-8 font-semibold hover:bg-gold-dark"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gold text-gold px-8 font-semibold hover:bg-gold/10 hover:text-gold-light"
              >
                Learn More
              </Button>
            </div>
          </div>
          {/* Image Section */}
          <div className="lg:w-1/2 max-w-[400px] lg:max-w-[500px] mx-auto">
            <div className="relative w-full overflow-hidden rounded-xl shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-navy-DEFAULT/80 via-navy-DEFAULT/20 to-transparent z-10 transition-all duration-500 group-hover:from-navy-DEFAULT/70 group-hover:via-navy-DEFAULT/10"></div>
              <div className="absolute inset-0 border border-gold/30 rounded-xl z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Image
                src="/images/hero.jpg"
                alt="Cruise ship in tropical waters"
                className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                width={800}
                height={600}
                priority
              />
              <div className="absolute bottom-0 left-0 w-full p-5 z-20 transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                <p className="text-white font-medium text-lg text-shadow-lg">
                  Connecting talent with opportunity in maritime industries
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
