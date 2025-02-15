import { createMetadata } from '../shared-metadata'
import DigitalMarketingContent from './content'

export const metadata = createMetadata({
    title: 'Digital Marketing | Meta Solusi Digital',
    description: 'Layanan digital marketing profesional untuk meningkatkan visibilitas online, engagement, dan konversi. Kami membantu bisnis Anda tumbuh di era digital.',
    path: '/services/digital-marketing'
})

export default function DigitalMarketingPage() {
    return <DigitalMarketingContent />
} 