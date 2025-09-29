import CarouselArticle from "@/components/atoms/CarouselArticle";
import { articles } from "@/lib/DataArticle";

export default function ArticlePage() {
  return (
    <section id="articles" className="min-h-screen px-4 bg-white md:py-24">
      <div className="max-w-6xl mx-auto px-10 py-12">
        <div className="text-center mb-12">
          <h1 className="inline-block mb-12 text-3xl font-bold text-primaryRed md:text-4xl relative">
            <span>Artikel</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-primaryRed opacity-30"></span>
          </h1>
          <p className="text-primaryRed max-w-2xl mx-auto">
            Temukan wawasan terbaru tentang kapal pesiar, tips perjalanan, dan perencanaan liburan bersama MSP Cruises.
          </p>
        </div>

        {/* 🚀 **CarouselArticle** */}
        <CarouselArticle
          articles={articles.map((article) => ({
            src: article.image,
            alt: article.title,
            slug: article.slug,
            title: article.title,
            description: article.description
          }))}
          slidesToScroll={1}
        />
      </div>
    </section>
  );
}
