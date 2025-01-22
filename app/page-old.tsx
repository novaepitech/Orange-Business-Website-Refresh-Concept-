import Hero from '@/components/hero'
import Services from '@/components/services'
import Expertise from '@/components/expertise'
import Partners from '@/components/partners'
import Testimonials from '@/components/testimonials'
import CaseStudies from '@/components/case-studies'
import Sustainability from '@/components/sustainability'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Expertise />
      <Partners />
      <Testimonials />
      <CaseStudies />
      <Sustainability />
      <Contact />
      <Footer />
    </main>
  )
}

