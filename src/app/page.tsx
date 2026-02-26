import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Screenshots from '@/components/Screenshots'
import Feedback from '@/components/Feedback'
import Changelog from '@/components/Changelog'
import Footer from '@/components/Footer'
import Stars from '@/components/Stars'
import Nav from '@/components/Nav'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Stars />
      <Nav />
      <Hero />
      <Features />
      <Screenshots />
      <Feedback />
      <Changelog />
      <Footer />
    </main>
  )
}