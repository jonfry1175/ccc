import { motion } from 'framer-motion'
import { Code2, Database, Globe2, Laptop, Server } from 'lucide-react'

export function HeroIllustration() {
    return (
        <div className="relative w-full h-full min-h-[400px]">
            {/* Main Platform - Central Hub */}
            <motion.div
                initial={{ y: 0, rotate: 0 }}
                animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
                <div className="w-72 h-72 rounded-full bg-gradient-to-b from-blue-600/10 to-blue-900/20 backdrop-blur-xl border border-blue-500/20 shadow-2xl shadow-blue-500/10 relative overflow-hidden">
                    {/* Inner rings */}
                    <div className="absolute inset-2 rounded-full border border-blue-400/20 animate-[spin_10s_linear_infinite]" />
                    <div className="absolute inset-8 rounded-full border border-blue-400/15 animate-[spin_15s_linear_infinite]" />
                    <div className="absolute inset-14 rounded-full border border-blue-400/10 animate-[spin_20s_linear_infinite]" />
                </div>
            </motion.div>

            {/* Floating Devices with Tech Icons */}
            <motion.div
                initial={{ y: 0, rotate: 0 }}
                animate={{ y: [-15, 15, -15], rotate: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/4 left-1/4"
            >
                <div className="w-40 h-56 rounded-2xl bg-gradient-to-tr from-blue-900/40 to-blue-800/20 backdrop-blur-xl border border-blue-700/30 shadow-lg shadow-blue-500/20 p-4 flex flex-col items-center justify-center gap-3">
                    <Globe2 className="w-8 h-8 text-blue-400/80" />
                    <div className="text-xs text-blue-300/80 text-center">Web Solutions</div>
                    {/* Code snippet effect */}
                    <div className="w-full space-y-1">
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ width: '60%' }}
                                animate={{ width: ['60%', '80%', '60%'] }}
                                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                                className="h-1 bg-blue-400/20 rounded-full"
                            />
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Server/Database Platform */}
            <motion.div
                initial={{ y: 0, rotate: 0 }}
                animate={{ y: [15, -15, 15], rotate: [0, -8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/3 right-1/4"
            >
                <div className="w-48 h-40 rounded-xl bg-gradient-to-bl from-blue-800/30 to-blue-900/40 backdrop-blur-xl border border-blue-700/30 shadow-lg shadow-blue-500/20 p-4 flex flex-col items-center justify-center gap-3">
                    <Server className="w-8 h-8 text-blue-400/80" />
                    <div className="text-xs text-blue-300/80">Cloud Infrastructure</div>
                    {/* Server status indicators */}
                    <div className="flex gap-2">
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{ opacity: [0.4, 1, 0.4] }}
                                transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                                className="w-2 h-2 rounded-full bg-blue-400"
                            />
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Floating Tech Icons */}
            {[
                { Icon: Code2, label: 'Development' },
                { Icon: Database, label: 'Data' },
                { Icon: Laptop, label: 'Solutions' }
            ].map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ y: 0, opacity: 0.5, scale: 1 }}
                    animate={{
                        y: [-20, 20, -20],
                        opacity: [0.5, 0.8, 0.5],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 4 + i,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.5
                    }}
                    className="absolute"
                    style={{
                        top: `${25 + (i * 20)}%`,
                        left: `${20 + (i * 20)}%`,
                    }}
                >
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-900/60 to-blue-800/40 backdrop-blur-xl border border-blue-700/30 flex items-center justify-center shadow-lg shadow-blue-500/10">
                            <item.Icon className="w-6 h-6 text-blue-400/80" />
                        </div>
                        <div className="text-[10px] text-blue-300/60">{item.label}</div>
                    </div>
                </motion.div>
            ))}

            {/* Orbital Paths */}
            <svg className="absolute inset-0 w-full h-full" style={{ filter: 'blur(0.5px)' }}>
                {/* Curved orbital paths */}
                {[...Array(3)].map((_, i) => (
                    <motion.path
                        key={i}
                        d={`M ${100 + i * 50} ${150 + i * 20} Q ${250} ${100 + i * 30}, ${400 - i * 50} ${150 + i * 20}`}
                        stroke="rgba(59, 130, 246, 0.1)"
                        strokeWidth="1"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1, 0] }}
                        transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                    />
                ))}
            </svg>

            {/* Glowing Points */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration: 2 + i * 0.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.2
                    }}
                    className="absolute"
                    style={{
                        top: `${15 + (i * 15)}%`,
                        left: `${10 + (i * 15)}%`,
                        width: `${4 - (i % 3)}px`,
                        height: `${4 - (i % 3)}px`
                    }}
                >
                    <div className="w-full h-full rounded-full bg-blue-400 blur-[2px]" />
                </motion.div>
            ))}

            {/* Space particles effect */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-px h-px bg-blue-300/40"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0]
                        }}
                        transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2
                        }}
                    />
                ))}
            </div>
        </div>
    )
} 