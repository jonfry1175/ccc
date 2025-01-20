import { createMetadata } from '../shared-metadata'
import MobileApplicationsContent from './content'

export const metadata = createMetadata({
  title: 'Aplikasi Mobile | Meta Solusi Digital',
  description: 'Pengembangan aplikasi mobile iOS dan Android berkualitas tinggi. Kami membangun aplikasi native dan cross-platform dengan fokus pada user experience.',
  path: '/services/mobile-applications'
})

export default function MobileApplicationsPage() {
  return <MobileApplicationsContent />
} 