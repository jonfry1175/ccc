import ArticlePage from "@/components/molecules/Homepage/Article";
import Navbar from "@/components/atoms/Navbar";
import Footer from "@/components/atoms/Footer";
import Image from "next/image";
import Link from "next/link";
import { articlesMetadata } from "../metadata";

export const metadata = articlesMetadata;

export default function ArticleListPage() {
  return (
    <div className="flex min-h-screen flex-col bg-offWhite text-textBlack">
      <Navbar />
      <main className="flex-1">
        <section className="relative isolate overflow-hidden bg-darkGray py-20 text-primaryWhite">
          <Image
            src="/images/imagetraining.jpg"
            alt="Ilustrasi artikel Christianity Crisis Center"
            fill
            sizes="100vw"
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 via-black/60 to-black/30" />

          <div className="mx-auto max-w-6xl px-4 py-20 text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primaryRed/80">
              Artikel
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              Cerita, Tips Karier, dan Sharing Rohani dari Komunitas
            </h1>
            <p className="mt-6 text-base text-primaryWhite/85 md:text-lg">
              Temukan kisah inspiratif, panduan pengembangan karier, dan
              pembelajaran rohani yang mendampingi perjalanan profesional Anda.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/apply-now" className="inline-block">
                <button className="rounded-md bg-primaryRed px-4 py-2 text-sm font-semibold text-primaryWhite hover:bg-secondaryRed">
                  Gabung Program Karier
                </button>
              </Link>
              <Link href="/hubungi-kami" className="inline-block">
                <button className="rounded-md border border-primaryWhite/30 bg-white/10 px-4 py-2 text-sm font-medium text-primaryWhite hover:bg-primaryWhite/10">
                  Hubungi Tim CCC
                </button>
              </Link>
            </div>
          </div>
        </section>

        <ArticlePage />
      </main>
      <Footer />
    </div>
  );
}