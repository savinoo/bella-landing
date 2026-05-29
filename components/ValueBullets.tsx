import { Calendar, Clock, ShieldCheck, Sparkles } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Eyebrow } from "@/components/Eyebrow"

type Bullet = {
  icon: LucideIcon
  title: string
  body: string
}

const bullets: Bullet[] = [
  {
    icon: Clock,
    title: "Responde 24 horas",
    body: "Cliente chega no WhatsApp às 23h e a Bella responde em segundos. Sem perder lead pra clínica concorrente que respondeu primeiro.",
  },
  {
    icon: Calendar,
    title: "Agenda no Google Calendar",
    body: "Cliente confirma horário e o evento aparece no seu Calendar sem digitação dupla. Você abre o celular e vê a agenda cheia.",
  },
  {
    icon: Sparkles,
    title: "Treinada na sua clínica",
    body: "Sabe que drenagem linfática custa R$ 150 e dura 60 minutos. Sabe seu endereço, horário e formas de pagamento. Fala com a voz da sua clínica.",
  },
  {
    icon: ShieldCheck,
    title: "PT BR sem alucinação",
    body: "Não inventa data, não inventa preço. Quando não sabe, transfere pra você no Telegram.",
  },
]

export function ValueBullets() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <Eyebrow>O que a Bella faz</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-[-0.02em] text-[#0F0F0F]">
            Atende, agenda, captura.
          </h2>
          <p className="mt-4 text-lg text-[#404040]">
            Quatro coisas que cliente sente na pele.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {bullets.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group p-8 rounded-2xl border border-[#ECECEC] bg-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(15,15,15,0.06)] hover:border-[#D4D4D4] motion-reduce:transform-none"
            >
              <div className="inline-flex size-12 items-center justify-center rounded-full bg-[#25D366]/8 text-[#25D366]">
                <Icon className="size-6" strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#0F0F0F]">
                {title}
              </h3>
              <p className="mt-3 text-base text-[#404040] leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
