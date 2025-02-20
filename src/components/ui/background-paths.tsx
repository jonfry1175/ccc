"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function FloatingPaths({
    position,
    pathColor = 'currentColor',
    pathCount = 36,
    animationDuration = 20,
    strokeWidth = 0.5
}: {
    position: number
    pathColor?: string
    pathCount?: number
    animationDuration?: number
    strokeWidth?: number
}) {
    const paths = Array.from({ length: pathCount }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position
            } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position
            } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position
            } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        width: strokeWidth + i * 0.03,
    }))

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke={pathColor}
                        strokeWidth={path.width}
                        strokeOpacity={0.2 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: animationDuration + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

interface BackgroundPathsProps extends React.HTMLAttributes<HTMLDivElement> {
    pathColor?: string;
    pathCount?: number;
    animationDuration?: number;
    strokeWidth?: number;
}

export function BackgroundPaths({
    className,
    pathColor,
    pathCount,
    animationDuration,
    strokeWidth,
    children,
    ...props
}: BackgroundPathsProps) {
    return (
        <div className={cn("relative w-full overflow-hidden", className)} {...props}>
            <div className="absolute inset-0">
                <FloatingPaths
                    position={1}
                    pathColor={pathColor}
                    pathCount={pathCount}
                    animationDuration={animationDuration}
                    strokeWidth={strokeWidth}
                />
                <FloatingPaths
                    position={-1}
                    pathColor={pathColor}
                    pathCount={pathCount}
                    animationDuration={animationDuration}
                    strokeWidth={strokeWidth}
                />
            </div>
            {children}
        </div>
    );
}
