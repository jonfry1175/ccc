import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export default function GalleryImageCard({ src, alt, width, height }: Props) {
  return (
    <Card className="relative overflow-hidden border-none  bg-inherit">
      <CardContent className="p-0">
        <Dialog>
          {/* Gambar kecil jadi trigger untuk membuka dialog */}
          <DialogTrigger asChild>
            <div className="relative w-full h-48 cursor-pointer hover:scale-105 transition-transform duration-200">
              <Image
                src={src}
                alt={alt}
                layout="fill"
                objectFit="fit"
                className=""
              />
            </div>
          </DialogTrigger>

          {/* Dialog menampilkan gambar resolusi penuh */}
          <DialogContent className="max-w-4xl p-4 bg-white rounded-lg">
            <DialogHeader></DialogHeader>
            <div className="flex justify-center">
              <Image
                src={src}
                alt={alt}
                width={800} // Ukuran gambar penuh
                height={800}
                className="object-contain rounded-lg max-h-[80vh]"
              />
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
