'use client'

import About from '@/components/sections/about'
import Clients from '@/components/sections/clients'
import Contact from '@/components/sections/contact'
import Hero from '@/components/sections/hero'
import Pricing from '@/components/sections/pricing'
import Services from '@/components/sections/services'
import WhyUs from '@/components/sections/why-us'
import { sendGTMEvent } from '@next/third-parties/google'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    sendGTMEvent({
      event: 'conversion',
      value: {
        send_to: 'AW-11565537272/W0gdCLmEkIwaEPiv8Ior'
      }
    })

    console.log(window.dataLayer)
  }, [])

  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Clients />
        <Pricing />
        <Contact />
      </main>
    </>
  )
}
