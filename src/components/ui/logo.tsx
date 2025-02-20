export function Logo({ className = '', fill = 'currentColor' }: { className?: string, fill?: string }) {
    return (
        <svg
            viewBox="0 0 100 60"
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20 10 L40 50 L60 10 L80 50 L100 10"
                stroke={fill}
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
} 