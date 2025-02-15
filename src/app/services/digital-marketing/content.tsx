'use client'

import React from 'react'
import { motion } from 'motion/react'
import { Megaphone, BarChart, Users, Search, Instagram, Mail } from 'lucide-react'

const features = [
    {
        title: 'Social Media Marketing',
        description: 'Strategi pemasaran di media sosial yang efektif untuk meningkatkan engagement dan brand awareness.',
        Icon: Instagram
    },
    {
        title: 'Search Engine Optimization (SEO)',
        description: 'Optimasi website untuk meningkatkan peringkat di mesin pencari dan mendatangkan traffic organik.',
        Icon: Search
    },
    {
        title: 'Content Marketing',
        description: 'Pembuatan dan distribusi konten berkualitas yang menarik target audiens Anda.',
        Icon: Megaphone
    },
    {
        title: 'Email Marketing',
        description: 'Kampanye email yang terukur dan personal untuk membangun hubungan dengan pelanggan.',
        Icon: Mail
    },
    {
        title: 'Analytics & Reporting',
        description: 'Analisis data dan laporan performa untuk mengoptimalkan strategi marketing.',
        Icon: BarChart
    },
    {
        title: 'Community Management',
        description: 'Pengelolaan komunitas online untuk membangun hubungan yang kuat dengan audiens.',
        Icon: Users
    }
]

export default function DigitalMarketingContent() {
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
                        Digital Marketing
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
                        Tingkatkan Presence Digital Anda
                    </h1>
                    <p className="text-base sm:text-lg text-text-main/70">
                        Kami membantu bisnis Anda tumbuh di dunia digital dengan strategi pemasaran yang terukur dan efektif
                    </p>
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
                        Mulai Perjalanan Digital Marketing Anda
                    </h2>
                    <p className="text-base sm:text-lg text-text-main/70 mb-8">
                        Hubungi kami untuk konsultasi gratis dan temukan strategi digital marketing yang tepat untuk bisnis Anda
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
