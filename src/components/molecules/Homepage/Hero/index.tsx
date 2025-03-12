import CarouselComponent from "@/components/atoms/CarouselImage";
import { cruise } from "@/lib/DataCarousel";
import React from "react";

export default function Hero() {
  const cruiseImages = cruise.map((item) => ({
    src: item.image,
    alt: `Cruise ${item.id}`
  }));

  return (
    <div className="bg-gold">
      <CarouselComponent images={cruiseImages} loop={true} slidesToScroll={1} />
    </div>
  );
}
