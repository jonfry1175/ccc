import { createMetadata } from '../shared-metadata'
import SocialMediaManagementContent from './content'

export const metadata = createMetadata({
    title: 'Social Media Management | Meta Solusi Digital',
    description: 'Layanan pengelolaan media sosial profesional untuk meningkatkan brand awareness, engagement, dan pertumbuhan bisnis Anda di platform sosial media.',
    path: '/services/social-media-management'
})

export default function SocialMediaManagementPage() {
    return <SocialMediaManagementContent />
} 