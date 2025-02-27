import MarqueeDemo from "@/components/atoms/MarqueeLogoPartner";

export default function Partner() {
  return (
    <section className="px-4 py-16 bg-white md:py-24">
      <div className="container max-w-6xl mx-auto text-center">
        <h1 className="inline-block mb-12 text-3xl text-center font-bold text-color1 md:text-4xl relative">
          <span className="text-center">Our Partner</span>
          <span className="absolute bottom-0 left-0 w-full h-3 bg-color1 opacity-30 z-0"></span>
        </h1>

        <div>
          <MarqueeDemo />
        </div>
      </div>
    </section>
  );
}
