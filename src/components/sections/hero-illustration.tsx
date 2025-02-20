import { motion } from 'framer-motion'

export function HeroIllustration() {
    return (
        <div className="relative w-full h-full min-h-[400px]">
            {/* Floating Platform */}
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-20, 0, -20] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
                <div className="w-64 h-64 rounded-full bg-gradient-to-b from-blue-500/20 to-blue-600/20 backdrop-blur-xl border border-blue-500/30" />
            </motion.div>

            {/* Floating Devices */}
            <motion.div
                initial={{ y: 0, rotate: 0 }}
                animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/4 left-1/4"
            >
                <div className="w-32 h-48 rounded-2xl bg-gradient-to-tr from-blue-600/40 to-blue-400/40 backdrop-blur-xl border border-blue-400/30 shadow-lg shadow-blue-500/20" />
            </motion.div>

            <motion.div
                initial={{ y: 0, rotate: 0 }}
                animate={{ y: [15, -15, 15], rotate: [0, -5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/3 right-1/4"
            >
                <div className="w-48 h-32 rounded-xl bg-gradient-to-bl from-blue-500/40 to-blue-300/40 backdrop-blur-xl border border-blue-400/30 shadow-lg shadow-blue-500/20" />
            </motion.div>

            {/* Floating Icons */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ y: 0, opacity: 0.5 }}
                    animate={{
                        y: [-20, 20, -20],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.5
                    }}
                    className="absolute"
                    style={{
                        top: `${20 + (i * 15)}%`,
                        left: `${15 + (i * 18)}%`,
                    }}
                >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r from-blue-${400 + (i * 100)}/40 to-blue-${300 + (i * 100)}/40 backdrop-blur-xl border border-blue-400/30`} />
                </motion.div>
            ))}

            {/* Glowing Orbs */}
            <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/4 right-1/3"
            >
                <div className="w-4 h-4 rounded-full bg-blue-400 blur-sm" />
            </motion.div>

            <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute bottom-1/3 left-1/3"
            >
                <div className="w-3 h-3 rounded-full bg-blue-300 blur-sm" />
            </motion.div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ filter: 'blur(1px)' }}>
                <motion.path
                    d="M 100 100 Q 200 150, 300 100"
                    stroke="rgba(59, 130, 246, 0.2)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.path
                    d="M 200 200 Q 250 150, 300 200"
                    stroke="rgba(59, 130, 246, 0.2)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                />
            </svg>
        </div>
    )
} 