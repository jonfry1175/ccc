import { createMetadata } from './shared-metadata'

export const metadata = createMetadata({
  title: 'Layanan Kami',
  description: 'Layanan pengembangan website, aplikasi web, dan aplikasi mobile profesional untuk membantu pertumbuhan bisnis Anda.',
  path: '/services'
})

export default function ServicesPage() {
  return (
    <main className="py-20">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">Layanan Kami</h1>
        {/* Add your services content here */}
      </div>
    </main>
  )
} 