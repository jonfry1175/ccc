import MarqueeDemo from "@/components/atoms/MarqueeLogoPartner";

export default function Partner() {
  return (
    <section className="px-4 py-16 bg-lightGold md:py-20">
      <div className=" max-w-6xl mx-auto text-center">
        <h1 className="inline-block mb-6 text-3xl text-center font-bold text-navy-DEFAULT md:text-4xl relative">
          <span className="text-center relative z-10 text-primaryRed">
            Mitra & Klien Kami
          </span>
          <span className="absolute bottom-0 left-0 w-full h-3 bg-gold opacity-40 z-0"></span>
        </h1>
        <p className="mt-4 text-primaryRed max-w-2xl mx-auto mb-12">
          Kami berkolaborasi dengan perusahaan maritim terkemuka di seluruh dunia untuk memberikan solusi talenta yang luar biasa.
        </p>

        {/* Partner logo marquee */}
        <div className="space-y-4 text-center border-2 rounded-md border-primaryGold bg-gold/10 hover:bg-gold/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg">
          <h3 className="text-lg font-semibold text-primaryRed mb-4">
            Dipercaya oleh Pemimpin Maritim di Seluruh Dunia
          </h3>
          <MarqueeDemo />
        </div>
      </div>
    </section>
  );
}
