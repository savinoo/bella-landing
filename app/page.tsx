import { SiteHeader } from "@/components/SiteHeader"
import { Hero } from "@/components/Hero"
import { Reveal } from "@/components/Reveal"
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
    <>
      <SiteHeader />
      <main className="flex flex-col">
        <Hero />
        <Reveal>
          <FunilCompleto />
        </Reveal>
        <Reveal>
          <ValueBullets />
        </Reveal>
        <Reveal>
          <ComoFunciona />
        </Reveal>
        <Reveal>
          <FAQ />
        </Reveal>
        <Reveal>
          <Pricing />
        </Reveal>
        <VideoSection />
        <Reveal>
          <LiveDemo />
        </Reveal>
        <Footer />
      </main>
    </>
  )
}
