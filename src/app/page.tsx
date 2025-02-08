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
import { getGTMConversionTag } from '@/config/analytics'

export default function Home() {
  useEffect(() => {
    const sendEvent = () => {
      if (window.dataLayer) {
        sendGTMEvent({
          event: 'conversion',
          value: getGTMConversionTag('PAGE_VIEW')
        })
      } else {
        console.warn('window.dataLayer is not defined')
      }
    }

    // Delay sending event to ensure GTM is loaded
    const timeoutId = setTimeout(sendEvent, 2000)
    return () => clearTimeout(timeoutId)
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
