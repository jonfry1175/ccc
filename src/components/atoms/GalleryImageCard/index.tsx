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

export default function GalleryImageCard({
  src,
  alt,
  width = 300,
  height = 300
}: Props) {
  return (
    <Card className="bg-white border-2 border-color4 rounded-lg">
      <CardContent className="px-6 pt-6 space-y-4 text-center">
        <Dialog>
          {/* Gambar kecil jadi trigger untuk membuka dialog */}
          <DialogTrigger asChild>
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              loading="lazy"
              className="object-cover w-full h-48 rounded-md cursor-pointer hover:scale-105 transition-transform duration-200"
            />
          </DialogTrigger>

          {/* Dialog menampilkan gambar resolusi penuh */}
          <DialogContent className="max-w-4xl p-4 bg-white rounded-lg ">
            <DialogHeader>
              {/* <DialogTitle className="text-center">{alt}</DialogTitle> */}
            </DialogHeader>
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
