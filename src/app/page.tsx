import About from '@/components/sections/about'
import Clients from '@/components/sections/clients'
import Contact from '@/components/sections/contact'
import Hero from '@/components/sections/hero'
import Pricing from '@/components/sections/pricing'
import Services from '@/components/sections/services'
import WhyUs from '@/components/sections/why-us'

export default function Home() {
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
