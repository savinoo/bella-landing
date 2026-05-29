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
    <section className="px-6 py-24 bg-white border-y border-[#F2D9CF]">
      <div className="max-w-6xl mx-auto">
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

        <div className="mt-14 grid md:grid-cols-3 gap-6 md:gap-4">
          {tempos.map(({ step, icon: Icon, title, body, accent }, i) => {
            const color = accent === "coral" ? "#FF6F61" : "#25D366"
            return (
              <div key={title} className="relative">
                <div className="h-full p-8 rounded-2xl border border-[#ECECEC] bg-white">
                  <div className="flex items-center justify-between">
                    <div
                      className="inline-flex size-12 items-center justify-center rounded-full"
                      style={{ backgroundColor: `${color}1A`, color }}
                    >
                      <Icon className="size-6" strokeWidth={1.5} />
                    </div>
                    <span className="font-serif text-2xl text-[#D4D4D4]">
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
                {i < tempos.length - 1 ? (
                  <span
                    aria-hidden
                    className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 text-2xl text-[#D4D4D4]"
                  >
                    →
                  </span>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
