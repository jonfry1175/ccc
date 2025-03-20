import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    img: "/images/partner/1.png"
  },
  {
    id: 2,
    img: "/images/partner/2.png"
  },
  {
    id: 3,
    img: "/images/partner/3.png"
  }
];

const firstRow = reviews; // Ambil semua logo tanpa pemotongan

const MarqueLogo = ({ img, id }: { img: string; id: number }) => {
  return (
    <figure className="flex items-center justify-center  mx-4 overflow-hidden ">
      <Image
        className="object-contain w-full h-full"
        alt={`Partner logo ${id}`}
        src={img}
        width={200}
        height={40}
      />
    </figure>
  );
};

export default function MarqueeDemo() {
  return (
    <div className="relative flex  px-5 w-full flex-col bg-white rounded-lg items-center justify-center overflow-hidden  ">
      <Marquee
        pauseOnHover
        className="[--duration:20s] pauseOnHover max-w-full   md:mx-auto py-10"
      >
        {firstRow.map((review) => (
          <MarqueLogo key={review.id} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
