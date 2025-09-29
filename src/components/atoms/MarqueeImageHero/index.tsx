import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const reviews = [
  { id: 1, img: "/images/cruise/4.jpg" },
  { id: 2, img: "/images/cruise/5.jpg" },
  { id: 3, img: "/images/cruise/6.jpg" },
  { id: 4, img: "/images/cruise/7.jpg" },
  { id: 5, img: "/images/cruise/8.jpg" },
  { id: 6, img: "/images/cruise/9.jpg" },
];

const firstRow = reviews;

const MarqueLogo = ({ img, id }: { img: string; id: number }) => (
  <figure className="flex h-32 w-[220px] items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-lg backdrop-blur">
    <Image
      className="h-full w-full object-cover"
      alt={`Armada ${id}`}
      src={img}
      width={320}
      height={180}
      sizes="(min-width: 768px) 220px, 60vw"
      priority={id === 1}
    />
  </figure>
);

export default function MarqueeImageHero() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:24s] py-4">
        {firstRow.map((review) => (
          <MarqueLogo key={review.id} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
