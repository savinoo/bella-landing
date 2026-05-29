import { Hero } from "@/components/Hero"
import { FunilCompleto } from "@/components/FunilCompleto"
import { ValueBullets } from "@/components/ValueBullets"
import { ComoFunciona } from "@/components/ComoFunciona"
import { FAQ } from "@/components/FAQ"
import { Pricing } from "@/components/Pricing"
import { VideoSection } from "@/components/VideoSection"
import { LiveDemo } from "@/components/LiveDemo"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <FunilCompleto />
      <ValueBullets />
      <ComoFunciona />
      <FAQ />
      <Pricing />
      <VideoSection />
      <LiveDemo />
      <Footer />
    </main>
  )
}
