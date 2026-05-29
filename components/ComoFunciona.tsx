import { MapPin, Rocket, RefreshCw } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Eyebrow } from "@/components/Eyebrow"

type Step = { icon: LucideIcon; title: string; body: string }

const steps: Step[] = [
  {
    icon: MapPin,
    title: "A gente visita a sua clínica",
    body: "Você conhece a gente pessoalmente e a gente entende como a sua clínica fala com a cliente. Sem suporte que some, sem robô distante.",
  },
  {
    icon: Rocket,
    title: "No ar em um dia útil",
    body: "A Bella entra no seu WhatsApp treinada nos seus procedimentos, preços e horários, pronta pra atender e agendar.",
  },
  {
    icon: RefreshCw,
    title: "A gente acompanha todo mês",
    body: "Monitoramento, correção quando aparece e um ajuste por mês, pra ela ficar melhor com o tempo.",
  },
]

export function ComoFunciona() {
  return (
    <section className="px-6 py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <Eyebrow>Como funciona</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-[-0.02em] text-[#0F0F0F]">
            A gente vai até você.
          </h2>
          <p className="mt-4 text-lg text-[#404040] leading-relaxed">
            A Bella não é um aplicativo que você instala sozinha e vira problema
            seu. A gente vai na sua clínica, monta a Bella na voz e nos preços de
            vocês, e fica junto acompanhando. Time carioca, do seu lado.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="p-8 rounded-2xl border border-[#ECECEC] bg-[#FAFAFA]"
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
