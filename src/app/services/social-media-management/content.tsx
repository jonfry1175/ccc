'use client'

import React from 'react'
import { motion } from 'motion/react'
import {
    LightbulbIcon,
    PencilRuler,
    LayoutGrid,
    Users,
    BarChart3,
    Megaphone
} from 'lucide-react'
import {
    BsInstagram,
    BsFacebook,
    BsTiktok,
    BsThreads
} from 'react-icons/bs'

const socialPlatforms = [
    { icon: BsInstagram, name: 'Instagram' },
    { icon: BsFacebook, name: 'Facebook' },
    { icon: BsTiktok, name: 'TikTok' },
    { icon: BsThreads, name: 'Threads' }
]

const features = [
    {
        title: 'Strategi Konten',
        description: 'Kembangkan strategi konten yang tepat sasaran untuk target market Anda. Setiap konten dirancang dengan tujuan yang jelas.',
        Icon: LightbulbIcon
    },
    {
        title: 'Kreasi Konten',
        description: 'Ciptakan konten menarik yang meningkatkan engagement. Desain visual yang memukau dengan pesan yang tepat.',
        Icon: PencilRuler
    },
    {
        title: 'Pengelolaan Platform',
        description: 'Kelola semua platform media sosial secara profesional dan konsisten. Tingkatkan presence brand Anda di setiap platform.',
        Icon: LayoutGrid
    },
    {
        title: 'Manajemen Komunitas',
        description: 'Bangun hubungan yang kuat dengan followers. Tingkatkan loyalitas komunitas untuk pertumbuhan brand yang berkelanjutan.',
        Icon: Users
    },
    {
        title: 'Analisis Performa',
        description: 'Pantau dan analisis performa setiap konten. Data yang akurat untuk pengembangan strategi yang lebih efektif.',
        Icon: BarChart3
    },
    {
        title: 'Manajemen Kampanye',
        description: 'Rancang dan implementasikan kampanye yang efektif. Capai target bisnis Anda melalui strategi yang terukur.',
        Icon: Megaphone
    }
]

export default function SocialMediaManagementContent() {
    return (
        <div className="py-12 sm:py-16">
            <div className="container px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center mb-12"
                >
                    <span className="text-xs sm:text-sm font-medium text-blue-primary uppercase tracking-wider">
                        Social Media Management
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
                        Tingkatkan Performa Media Sosial Anda
                    </h1>
                    <p className="text-base sm:text-lg text-text-main/70">
                        Kami membantu mengembangkan dan mengelola presence brand Anda di media sosial secara profesional
                    </p>
                </motion.div>

                {/* Social Media Platforms Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto mb-16"
                >
                    <div className="text-center mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3">Platform Utama</h2>
                        <p className="text-sm sm:text-base text-text-main/70">
                            Fokus pada platform media sosial yang paling relevan untuk bisnis Anda
                        </p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {socialPlatforms.map((platform) => (
                            <motion.div
                                key={platform.name}
                                whileHover={{ scale: 1.05 }}
                                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all"
                            >
                                <platform.icon className="w-8 h-8 text-blue-primary" />
                                <span className="text-sm font-medium text-text-main/70">{platform.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 h-full">
                                <div className="p-6">
                                    <div className="w-12 h-12 bg-blue-primary/10 rounded-lg flex items-center justify-center mb-4">
                                        <feature.Icon className="w-6 h-6 text-blue-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-text-main/70">{feature.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center mt-16"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                        Mulai Mengoptimalkan Media Sosial Anda
                    </h2>
                    <p className="text-base sm:text-lg text-text-main/70 mb-8">
                        Hubungi kami untuk konsultasi gratis dan temukan strategi pengelolaan media sosial yang tepat untuk bisnis Anda
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-primary hover:bg-blue-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-primary/60 transition-colors duration-200"
                    >
                        Hubungi Kami
                    </a>
                </motion.div>
            </div>
        </div>
    )
} 