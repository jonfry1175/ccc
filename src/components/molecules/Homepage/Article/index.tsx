import SectionHeading from "@/components/atoms/SectionHeading";
import CarouselArticle from "@/components/atoms/CarouselArticle";
import { articles } from "@/lib/DataArticle";

export default function ArticlePage() {
  return (
    <section id="articles" className="bg-white py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 md:px-10">
        <SectionHeading
          eyebrow="Artikel"
          title="Cerita dan Wawasan dari Armada Kami"
          description="Ikuti kisah sukses kru kami, panduan karier, dan pembaruan terbaru dari dunia kapal pesiar."
        />

        <CarouselArticle
          articles={articles.map((article) => ({
            src: article.image,
            alt: article.title,
            slug: article.slug,
            title: article.title,
            description: article.description,
          }))}
          slidesToScroll={1}
        />
      </div>
    </section>
  );
}
