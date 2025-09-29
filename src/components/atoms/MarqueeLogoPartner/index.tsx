import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    img: "/images/partner/1.png",
  },
  {
    id: 2,
    img: "/images/partner/2.png",
  },
  {
    id: 3,
    img: "/images/partner/3.png",
  },
];

const firstRow = reviews; // Ambil semua logo tanpa pemotongan

const MarqueLogo = ({ img, id }: { img: string; id: number }) => (
  <figure className="mx-4 flex h-20 w-40 items-center justify-center rounded-xl border border-primaryRed/10 bg-white px-6 py-4 shadow-sm">
    <Image
      className="h-full w-full object-contain"
      alt={`Partner logo ${id}`}
      src={img}
      width={200}
      height={40}
      sizes="160px"
    />
  </figure>
);

export default function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:22s] py-4">
        {firstRow.map((review) => (
          <MarqueLogo key={review.id} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
