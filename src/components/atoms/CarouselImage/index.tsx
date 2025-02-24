import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

interface CarouselImage {
  src: string;
  alt: string;
}

interface Props {
  images: CarouselImage[];
  loop?: boolean;
  dragFree?: boolean;
  slidesToScroll?: number;
}

export default function CarouselComponent({
  images,
  loop = false,
  dragFree = true,
  slidesToScroll = 1
}: Props) {
  return (
    <div>
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
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-[75%] md:basis-[75%]"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="bg-customBlack2 rounded-lg overflow-hidden cursor-pointer">
                    <div className="relative h-[150px] md:h-[600px]">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt || "placeholder"}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                  <DialogHeader>
                    <DialogTitle></DialogTitle>
                  </DialogHeader>
                  <div className="relative w-full h-[300px] md:h-[450px]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
