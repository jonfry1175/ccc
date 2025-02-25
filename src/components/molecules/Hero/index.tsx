import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-4 bg-navy-DEFAULT lg:py-24">
      <div className="px-10 mx-auto max-w-6xl">
        <div className="flex flex-col-reverse items-center gap-8 lg:flex-row lg:gap-12">
          <div className="space-y-6 text-center lg:w-1/2 lg:text-left">
            <div className="space-y-3">
              <h1 className="flex flex-col text-3xl font-bold tracking-tighter text-white text-[48px] gap-4 text-shadow">
                <span className="block">Marina</span>
                <span className="block bg-gradient-to-r from-color2/90 to-color2 bg-clip-text text-transparent">Prima</span>
                <span className="block text-gold drop-shadow-md">Sukses</span>
              </h1>

              <p className="max-w-[600px] text-white text-opacity-90 text-base leading-relaxed font-medium drop-shadow-sm">
                Specialized Recruiting & Staffing for Hospitality, Restaurant &
                Deck Engineering Professionals.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:min-[400px]:flex-row mt-2">
              <Button className="text-white bg-gold hover:bg-gold-dark shadow-md">
                Get Started
              </Button>
              <Button variant="outline" className="border-gold text-gold hover:bg-gold/10 hover:text-gold-light shadow-sm backdrop-blur-sm">
                Learn More
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 w-full max-w-[500px] mx-auto lg:max-w-none">
            <div className="relative w-full overflow-hidden rounded-md shadow-xl">
              <Image
                src="/images/hero.jpg"
                alt="Cruise ship in tropical waters"
                className="object-cover"
                width={800}
                height={600}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
