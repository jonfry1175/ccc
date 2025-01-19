import Image from 'next/image'

type Client = {
  id: number
  name: string
  image: string
  link: string
}

const clients: Client[] = [
  {
    id: 1,
    name: 'Cloudlink',
    image: '/portofolio-cloudlink.png',
    link: '#'
  },
  {
    id: 2,
    name: 'Kesling',
    image: '/portofolio-kesling.png',
    link: '#'
  },
  {
    id: 3,
    name: 'NBM',
    image: '/portofolio-nbm.png',
    link: '#'
  },
  {
    id: 4,
    name: 'Optima Jasa',
    image: '/portofolio-optimajasa.png',
    link: '#'
  },
  {
    id: 5,
    name: 'SRN',
    image: '/portofolio-srn.png',
    link: '#'
  }
]

export default function Showcase() {
  return (
    <section id="showcase" className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Klien Kami
          </h2>
          <p className="text-text-main/70">
            Beberapa perusahaan yang telah mempercayakan pengembangan website mereka kepada kami
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {clients.map((client) => (
            <a
              key={client.id}
              href={client.link}
              className="group relative aspect-[3/2] bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-4 flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={client.image}
                alt={`${client.name} website`}
                fill
                className="object-contain p-4 transition-transform group-hover:scale-105"
                sizes="(max-width: 768px) 40vw, (max-width: 1024px) 33vw, 20vw"
              />
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-text-main/70 mb-6">
            Dan masih banyak lagi perusahaan yang telah menjadi klien kami
          </p>
          <a 
            href="#contact"
            className="inline-block px-8 py-3 bg-blue-primary text-white rounded-full hover:bg-blue-primary/90 font-medium"
          >
            MULAI PROJECT
          </a>
        </div>
      </div>
    </section>
  )
} 