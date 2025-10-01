import MarqueeImageHero from "@/components/atoms/MarqueeImageHero";
import SectionHeading from "@/components/atoms/SectionHeading";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { label: "Talenta Ditempatkan", value: "8.9K+" },
  { label: "Klien Internasional", value: "4+" },
  { label: "Tahun Pengalaman", value: "32" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primaryRed via-primaryRed/95 to-primaryGold/60 text-primaryWhite">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),transparent_55%)]" />
      <div
        className="absolute inset-y-0 left-1/2 hidden w-[40rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl md:block"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-24 md:px-10 md:pb-28">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.9fr)]">
          <div className="space-y-8 text-left">
            <SectionHeading
              eyebrow="Sejak 2015"
              title="Christianity Crisis Center"
              description="Mendampingi komunitas Kristen melalui pelatihan kerja, mentoring, dan jejaring peluang yang memberdayakan keluarga dan pelayanan."
              align="left"
              className="max-w-xl"
              eyebrowClassName="bg-primaryWhite/15 text-primaryWhite"
              titleClassName="text-4xl font-semibold text-primaryWhite md:text-5xl"
              descriptionClassName="text-base text-primaryWhite/85 md:text-lg"
            />

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-primaryWhite text-primaryRed hover:bg-primaryWhite/90"
              >
                <Link href="/apply-now">Daftar Sekarang</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-primaryWhite/70 bg-transparent text-primaryWhite hover:bg-primaryWhite/10"
              >
                <Link href="/training-center">Jelajahi Pelatihan</Link>
              </Button>
            </div>

            <dl className="grid grid-cols-2 gap-6 pt-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm"
                >
                  <dt className="text-xs font-medium uppercase tracking-[0.2em] text-primaryWhite/70">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-2xl font-semibold text-primaryWhite">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div
              className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-primaryWhite/20 to-primaryWhite/5 blur-3xl"
              aria-hidden
            />
            <div className="overflow-hidden rounded-[2.5rem] border border-primaryWhite/20 bg-primaryWhite/10 shadow-2xl backdrop-blur-md">
              <Image
                src="/images/cruise/4.jpg"
                alt="Program pelatihan kerja Christianity Crisis Center"
                width={960}
                height={720}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-6 rounded-3xl border border-primaryWhite/15 bg-primaryWhite/10 p-6 backdrop-blur-md md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl text-left text-sm text-primaryWhite/80">
              Dipercaya oleh armada kapal pesiar global untuk menghadirkan
              talenta Indonesia berkualitas.
            </div>
            <MarqueeImageHero />
          </div>
        </div>
      </div>
    </section>
  );
}
