import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-blue-light pt-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-sm font-medium text-text-main/80 uppercase tracking-wider">
              SOLUSI DIGITAL TERPERCAYA
            </span>
            <h1 className="text-5xl font-bold leading-tight">
              Membantu Anda Membangun Website Berkualitas
            </h1>
            <Link 
              href="#contact"
              className="inline-block px-8 py-3 bg-blue-primary text-white rounded-full hover:bg-blue-primary/90 font-medium"
            >
              HUBUNGI KAMI
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/hero-image.webp"
              alt="Website Development"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-blue-primary">98%</div>
            <div className="text-sm text-text-main/70 mt-2">Tingkat Keberhasilan</div>
          </div>
          <div className="bg-blue-primary text-white p-8 rounded-lg">
            <div className="text-4xl font-bold">15K</div>
            <div className="text-sm opacity-90 mt-2">Pelanggan Puas</div>
          </div>
          <div className="bg-[#0F172A] text-white p-8 rounded-lg">
            <div className="text-4xl font-bold">900+</div>
            <div className="text-sm opacity-90 mt-2">Staf di Seluruh Dunia</div>
          </div>
        </div>
      </div>
    </section>
  )
} 