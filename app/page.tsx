import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AppsGrid from '@/components/AppsGrid'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AppsGrid />
      <Footer />
    </main>
  )
}
