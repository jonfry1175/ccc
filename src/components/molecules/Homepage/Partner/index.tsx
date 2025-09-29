import SectionHeading from "@/components/atoms/SectionHeading";
import MarqueeDemo from "@/components/atoms/MarqueeLogoPartner";

export default function Partner() {
  return (
    <section className="bg-gradient-to-br from-primaryRed/6 via-white to-primaryGold/10 py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 text-center md:px-10">
        <SectionHeading
          eyebrow="Kolaborasi"
          title="Dipercaya Oleh Pemimpin Maritim Dunia"
          description="Kami menjalin hubungan strategis dengan operator kapal pesiar global yang menuntut standar tertinggi pada kru mereka."
        />

        <div className="rounded-3xl border border-primaryRed/15 bg-white/80 p-8 shadow-lg backdrop-blur">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-primaryRed">
            Armada yang Kami Layani
          </h3>
          <div className="mt-6">
            <MarqueeDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
