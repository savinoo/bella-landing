import { Hero } from "@/components/Hero"
import { VideoSection } from "@/components/VideoSection"
import { ValueBullets } from "@/components/ValueBullets"
import { FAQ } from "@/components/FAQ"
import { Pricing } from "@/components/Pricing"
import { LiveDemo } from "@/components/LiveDemo"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <VideoSection />
      <ValueBullets />
      <FAQ />
      <Pricing />
      <LiveDemo />
      <Footer />
    </main>
  )
}
