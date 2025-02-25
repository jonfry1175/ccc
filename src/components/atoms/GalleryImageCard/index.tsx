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
    <Card className="relative overflow-hidden border-none bg-transparent shadow-none">
      <CardContent className="p-0">
        <Dialog>
          {/* Gambar kecil jadi trigger untuk membuka dialog */}
          <DialogTrigger asChild>
            <div className="relative w-full h-48 cursor-pointer hover:scale-105 transition-all duration-300 flex items-center justify-center bg-white rounded-lg p-5 shadow-md hover:shadow-lg">
              <Image
                src={src}
                alt={alt}
                layout="fill"
                objectFit="contain"
                className="p-3"
              />
            </div>
          </DialogTrigger>

          {/* Dialog menampilkan gambar resolusi penuh */}
          <DialogContent className="max-w-4xl p-6 bg-white rounded-lg shadow-xl">
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
