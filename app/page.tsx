import { Header } from "@/components/landing/Header"
import { Hero } from "@/components/landing/Hero"
import { Features } from "@/components/landing/Features"
import { QuemEntrega } from "@/components/landing/QuemEntrega"
import { Prova } from "@/components/landing/Prova"
import { Preco } from "@/components/landing/Preco"
import { Faq } from "@/components/landing/Faq"
import { Footer } from "@/components/landing/Footer"
import { Reveal } from "@/components/Reveal"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Reveal>
          <Features />
        </Reveal>
        <Reveal>
          <QuemEntrega />
        </Reveal>
        <Reveal>
          <Prova />
        </Reveal>
        <Reveal>
          <Preco />
        </Reveal>
        <Reveal>
          <Faq />
        </Reveal>
      </main>
      <Footer />
    </>
  )
}
