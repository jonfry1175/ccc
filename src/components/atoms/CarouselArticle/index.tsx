import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CarouselArticleItem {
  src: string;
  alt: string;
  slug: string;
  title: string;
  description: string;
}

interface Props {
  articles: CarouselArticleItem[];
  loop?: boolean;
  dragFree?: boolean;
  slidesToScroll?: number;
}

export default function CarouselArticle({
  articles,
  loop = false,
  dragFree = true,
  slidesToScroll = 1
}: Props) {
  return (
    <div className="relative">
      <Carousel
        opts={{
          align: "start",
          loop,
          dragFree,
          slidesToScroll
        }}
        className="w-full cursor-grab active:cursor-grabbing"
      >
        <CarouselContent className="-ml-4">
          {articles.map((article, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-[85%] md:basis-[50%] lg:basis-[33%]"
            >
              <Card className="overflow-hidden shadow-lg">
                <div className="relative h-[200px]">
                  <Image
                    src={article.src || "/placeholder.svg"}
                    alt={article.alt || "placeholder"}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h1 className="text-lg font-semibold text-color1 line-clamp-2">
                    {article.title}
                  </h1>
                  <p className="text-sm text-color1 line-clamp-2">
                    {article.description}
                  </p>
                  <Link
                    href={`/article/${article.slug}`}
                    className="inline-block mt-3 text-color1 hover:underline"
                  >
                    Read More
                  </Link>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* 🚀 Tombol Navigasi */}
        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 transition" />
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 transition" />
      </Carousel>
    </div>
  );
}
