'use client'

import About from '@/components/sections/about'
import Clients from '@/components/sections/clients'
import Contact from '@/components/sections/contact'
import Hero from '@/components/sections/hero'
import Pricing from '@/components/sections/pricing'
import Services from '@/components/sections/services'
import WhyUs from '@/components/sections/why-us'
import { sendGTMEvent } from '@next/third-parties/google'
import { useLayoutEffect } from 'react'

export default function Home() {
  // useLayoutEffect runs synchronously after all DOM mutations
  // This ensures the event is sent exactly once, before the browser repaints
  useLayoutEffect(() => {
    // Add this to check dataLayer
    console.log('Current dataLayer:', JSON.stringify(window.dataLayer))

    sendGTMEvent({
      event: 'conversion',
      value: {
        send_to: 'AW-11565537272/W0gdCLmEkIwaEPiv8Ior'
      }
    })

    // Check dataLayer after event
    setTimeout(() => {
      console.log('DataLayer after event:', JSON.stringify(window.dataLayer))
    }, 100)
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
