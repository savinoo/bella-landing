import { Megaphone, MessageCircle, LineChart } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Eyebrow } from "@/components/Eyebrow"

type Tempo = {
  step: string
  icon: LucideIcon
  title: string
  body: string
  accent: "coral" | "green"
}

const tempos: Tempo[] = [
  {
    step: "01",
    icon: Megaphone,
    title: "Atrai",
    body: "Conteúdo de vídeo que faz cliente nova chamar a sua clínica.",
    accent: "coral",
  },
  {
    step: "02",
    icon: MessageCircle,
    title: "Atende",
    body: "A Bella responde na hora e agenda, de dia e de noite.",
    accent: "green",
  },
  {
    step: "03",
    icon: LineChart,
    title: "Mostra",
    body: "Uma página sua mostra de onde veio cada cliente e como evolui ao longo do tempo.",
    accent: "coral",
  },
]

export function FunilCompleto() {
  return (
    <section className="relative overflow-hidden px-6 py-28 bg-white border-y border-[#F2D9CF]">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[44rem] rounded-full bg-[#FF6F61]/10 blur-3xl"
      />
      <div className="relative max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <Eyebrow>O funil completo</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-[-0.02em] text-[#0F0F0F]">
            Da primeira mensagem até a agenda cheia.
          </h2>
          <p className="mt-4 text-lg text-[#404040] leading-relaxed">
            A gente cuida das três pontas. Traz cliente nova com conteúdo,
            atende na hora pelo WhatsApp, e mostra de onde cada agendamento veio.
          </p>
        </div>

        <div className="relative mt-16">
          <div
            aria-hidden
            className="hidden md:block absolute left-8 right-8 top-14 h-[2px] rounded-full bg-gradient-to-r from-[#FF6F61] via-[#25D366] to-[#FF6F61] opacity-40"
          />
          <div className="grid md:grid-cols-3 gap-6 md:gap-5">
            {tempos.map(({ step, icon: Icon, title, body, accent }) => {
              const color = accent === "coral" ? "#FF6F61" : "#25D366"
              return (
                <div
                  key={title}
                  className="relative z-10 h-full p-8 rounded-2xl border border-[#ECECEC] bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_rgba(15,15,15,0.12)] hover:border-[#F2D9CF] motion-reduce:transform-none"
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="inline-flex size-14 items-center justify-center rounded-2xl border"
                      style={{
                        backgroundColor: `${color}14`,
                        color,
                        borderColor: `${color}33`,
                      }}
                    >
                      <Icon className="size-6" strokeWidth={1.5} />
                    </div>
                    <span
                      className="font-serif-display text-4xl"
                      style={{ color: `${color}80` }}
                    >
                      {step}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-[#0F0F0F]">
                    {title}
                  </h3>
                  <p className="mt-3 text-base text-[#404040] leading-relaxed">
                    {body}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
