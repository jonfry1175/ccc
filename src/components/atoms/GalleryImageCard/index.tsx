import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Props {
  src: string;
  alt: string;
  width?: number;
  name?: string;
  height?: number;
}

export default function GalleryImageCard({ src, alt, name }: Props) {
  return (
    <Card className="relative overflow-hidden border border-primaryRed/15 bg-white/90 shadow-sm transition hover:-translate-y-1 hover:border-primaryRed/30 hover:shadow-lg">
      <CardContent className="p-0">
        <Dialog>
          {/* Gambar kecil jadi trigger untuk membuka dialog */}
          <DialogTrigger asChild>
            <div className="flex h-48 w-full cursor-pointer flex-col items-center justify-center gap-4 p-6">
              {/* Gambar */}
              <div className="relative h-24 w-full">
                <Image src={src} alt={alt} fill className="object-contain" />
              </div>
              {/* Nama sertifikat */}
              <p className="text-center text-sm font-semibold text-textBlack">
                {name}
              </p>
            </div>
          </DialogTrigger>

          {/* Dialog menampilkan gambar resolusi penuh */}
          <DialogContent className="max-w-4xl rounded-2xl bg-white p-6 shadow-xl">
            <DialogHeader>
              <DialogTitle className="text-center text-lg font-bold">
                {name}
              </DialogTitle>
            </DialogHeader>
            <div className="flex justify-center">
              <Image
                src={src}
                alt={alt}
                width={800}
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
