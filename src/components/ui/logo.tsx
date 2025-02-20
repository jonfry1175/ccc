import Image from 'next/image'

interface LogoProps {
    className?: string
}

export function Logo({ className = '' }: LogoProps) {
    return (
        <Image
            src="/logo-m.png"
            alt="Meta Solusi Digital Logo"
            width={100}
            height={60}
            className={className}
            priority
        />
    )
} 