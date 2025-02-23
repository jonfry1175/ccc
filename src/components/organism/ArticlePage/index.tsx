import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { articles } from "@/lib/DataArticle";

export default function ArticlePage() {
  return (
    <div className="max-w-6xl mx-auto px-10 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-color1">Article</h1>
        <p className="text-color1 max-w-2xl mx-auto">
          Discover the latest insights on cruises, travel tips, and vacation
          planning with MSP Cruises.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.slug}
            className="bg-color4 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48 w-full">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <p className={`text-sm font-medium text-color1`}>
                  {article.category}
                </p>
                <span className="text-sm text-color1">{article.date}</span>
              </div>
              <h1 className="text-xl font-semibold mb-2 line-clamp-2 text-color1">
                {article.title}
              </h1>
              <p className="text-color1 mb-4 line-clamp-2">
                {article.description}
              </p>
              <Link
                href={`/article/${article.slug}`}
                className="inline-flex items-center text-color1 hover:text-color1/50 hover:underline transition-colors"
              >
                Read More
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
