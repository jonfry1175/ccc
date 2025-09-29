import { articles } from "@/lib/DataArticle";
import SlugPage from "@/components/organism/ArticlePage/SlugPage";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// ✅ Fungsi metadata dinamis berdasarkan slug
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>; // Menggunakan Promise sesuai error
}): Promise<Metadata> {
  const { slug } = await params; // ✅ Await di sini untuk menghindari error

  const article = articles.find((article) => article.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found - Christianity Crisis Center",
      description:
        "Explore the latest career insights and community stories from Christianity Crisis Center.",
    };
  }

  return {
    title: `${article.title} | Christianity Crisis Center`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: [article.image],
    },
    metadataBase: new URL("https://www.mpsjakarta.com/"), // Ganti sesuai domain kamu
  };
}

// ✅ Komponen Artikel dengan Slug
export default async function ArticlePageSlug({
  params,
}: {
  params: Promise<{ slug: string }>; // Menggunakan Promise
}) {
  const { slug } = await params; // ✅ Await params untuk menghindari error

  const article = articles.find((article) => article.slug === slug);
  if (!article) {
    notFound(); // Return 404 jika slug tidak ditemukan
  }

  return (
    <div>
      <SlugPage slug={slug} />
    </div>
  );
}
