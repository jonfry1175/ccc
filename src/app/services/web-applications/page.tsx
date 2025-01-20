import { createMetadata } from '../shared-metadata'
import WebApplicationsContent from './content'

export const metadata = createMetadata({
  title: 'Aplikasi Web | Meta Solusi Digital',
  description: 'Jasa pembuatan aplikasi web yang powerful dan scalable untuk kebutuhan bisnis. Solusi enterprise dengan teknologi modern dan performa tinggi.',
  path: '/services/web-applications'
})

export default function WebApplicationsPage() {
  return <WebApplicationsContent />
} 