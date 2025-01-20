import { createMetadata } from '../shared-metadata'
import WebDevelopmentContent from './content'

export const metadata = createMetadata({
  title: 'Pengembangan Website | Meta Solusi Digital',
  description: 'Layanan pengembangan website profesional dengan fokus pada performa, SEO, dan pengalaman pengguna. Kami membangun website modern yang sesuai kebutuhan bisnis Anda.',
  path: '/services/web-development'
})

export default function WebDevelopmentPage() {
  return <WebDevelopmentContent />
} 