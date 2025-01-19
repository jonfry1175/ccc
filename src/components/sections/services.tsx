import Link from 'next/link'

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Layanan Pembuatan Website Terlengkap
          </h2>
          <Link 
            href="#services"
            className="inline-block px-8 py-3 bg-blue-primary text-white rounded-full hover:bg-blue-primary/90 font-medium"
          >
            SEMUA LAYANAN
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg border">
            <h3 className="text-xl font-semibold mb-4">Website E-commerce</h3>
            <p className="text-text-main/70">
              Kami menawarkan layanan pembuatan website e-commerce yang responsif dan aman, 
              membantu Anda menjalankan bisnis online dengan mudah dan efektif, serta 
              meningkatkan penjualan produk Anda.
            </p>
          </div>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="text-lg font-medium">Website Informasi</h3>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="text-lg font-medium">Website Portofolio</h3>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="text-lg font-medium">Website Pendidikan</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 