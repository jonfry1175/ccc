import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const reviews = [
  { id: 1, img: "/images/cruise/4.jpg" },
  { id: 2, img: "/images/cruise/5.jpg" },
  { id: 3, img: "/images/cruise/6.jpg" },
  { id: 4, img: "/images/cruise/7.jpg" },
  { id: 5, img: "/images/cruise/8.jpg" },
  { id: 6, img: "/images/cruise/9.jpg" }
];

const firstRow = reviews;

const MarqueLogo = ({ img, id }: { img: string; id: number }) => {
  return (
    <figure className="flex items-center justify-center  overflow-hidden w-[850px] h-[350px]">
      <Image
        className="object-cover w-full h-full rounded-lg"
        alt={`Partner logo ${id}`}
        src={img}
        width={800}
        height={800}
      />
    </figure>
  );
};

export default function MarqueeImageHero() {
  return (
    <div className="relative flex px-5 w-full flex-col bg-gold items-center justify-center overflow-hidden">
      <Marquee
        pauseOnHover
        className="[--duration:20s] pauseOnHover max-w-full md:mx-auto py-10"
      >
        {firstRow.map((review) => (
          <MarqueLogo key={review.id} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
