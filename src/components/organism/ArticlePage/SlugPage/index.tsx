import { articles } from "@/lib/DataArticle";
import Image from "next/image";

export default function SlugPage({ slug }: { slug: string }) {
  const findSlug = articles.find((article) => article.slug === slug);

  if (!findSlug) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Artikel tidak ditemukan</h1>
      </div>
    );
  }

  return (
    <article className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <Image
          src={findSlug.image}
          alt={findSlug.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/50" />

        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-7xl mx-auto">
          <div className="space-y-4">
            <div className="flex items-center gap-4 max-w-3xl mx-auto px-6">
              <span className="px-3 py-1 bg-lightGold text-white text-sm font-medium rounded-full">
                {findSlug.category}
              </span>
              <span className="text-white/90 text-sm">{findSlug.date}</span>
            </div>

            <h1 className="max-w-3xl mx-auto px-6  text-3xl md:text-4xl lg:text-5xl font-bold text-white ">
              {findSlug.title}
            </h1>

            <p className="text-white/90 text-lg max-w-3xl mx-auto px-6 py-4">
              {findSlug.description}
            </p>
          </div>
        </div>
      </div>

      {/* Dynamic Article Content */}
      <div className="max-w-2xl mx-auto px-6 py-12">
        <div
          className="prose lg:prose-lg text-primaryRed text-justify"
          dangerouslySetInnerHTML={{ __html: findSlug.content }}
        />
      </div>
    </article>
  );
}
