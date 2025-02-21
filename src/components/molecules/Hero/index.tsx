import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-4 bg-color1 lg:py-24">
      <div className="px-10 mx-auto md:max-w-3xl lg:max-w-6xl">
        <div className="flex flex-col-reverse items-center gap-8 lg:flex-row lg:gap-12">
          <div className="space-y-6 text-center lg:w-1/2 lg:text-left">
            <div className="space-y-2">
              <h1 className="flex flex-col text-3xl font-bold tracking-tighter text-white text-[48px] gap-4">
                <span className="block">Marina</span>
                <span className="block text-color2">Prima</span>
                <span className="block">Sukses</span>
              </h1>

              <p className="max-w-[600px] text-white  dark:text-gray-400">
                Specialized Recruiting & Staffing for Hospitality, Restaurant &
                Deck Engineering Professionals.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row md:min-[400px]:flex-row">
              <Button className="text-white bg-color2 hover:bg-color3">
                Get Started
              </Button>
              <Button className="text-white bg-color2/90 hover:bg-color3">
                Learn More
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 w-full max-w-[500px] mx-auto lg:max-w-none">
            <div className="relative w-full overflow-hidden rounded-md shadow-lg">
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
