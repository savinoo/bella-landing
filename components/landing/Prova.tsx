import { ArrowUpRight } from "lucide-react"
import { PAINEL_DEMO_URL } from "./urls"

export function Prova() {
  return (
    <section className="px-5 sm:px-6 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-[#F2D9CF] bg-white/70 px-6 py-10 md:px-12 md:py-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 -right-16 h-56 w-56 rounded-full bg-[#FFB347]/[0.2] blur-[80px]"
          />
          <h2 className="max-w-2xl font-serif text-[1.75rem] leading-[1.15] md:text-4xl font-medium tracking-[-0.02em] text-[#0F0F0F]">
            Cada atendimento vira número que você vê.
          </h2>
          <p className="mt-3 max-w-xl text-base md:text-lg text-[#404040]">
            Painel com agendamentos, origem de cada cliente e faltas evitadas.
          </p>
          <a
            href={PAINEL_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#0F0F0F] underline underline-offset-4 decoration-[#FF6F61]/50 hover:decoration-[#FF6F61] transition-colors"
          >
            Ver o painel de exemplo
            <ArrowUpRight className="size-4 text-[#FF6F61]" />
          </a>
        </div>
      </div>
    </section>
  )
}
