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
    <section className="px-6 py-24 bg-[#FFF4F0]">
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

        <div className="mt-12 grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <img
              src="/founders-rio.jpg"
              alt="Lucas e Thaiz, o time carioca por trás da Bella, com o Rio de Janeiro ao fundo"
              width={1400}
              height={1866}
              loading="lazy"
              className="w-full aspect-[4/5] object-cover rounded-3xl shadow-[0_24px_64px_-16px_rgba(15,15,15,0.18)]"
              style={{ objectPosition: "center 26%" }}
            />
            <p className="mt-3 text-sm text-[#737373] text-center">
              A gente, no Rio. Quem vai cuidar da sua clínica de perto.
            </p>
          </div>

          <div className="space-y-4">
            {steps.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="flex gap-4 p-6 rounded-2xl border border-[#F2D9CF] bg-white"
              >
                <div className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF6F61]/10 text-[#FF6F61]">
                  <Icon className="size-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0F0F0F]">
                    {title}
                  </h3>
                  <p className="mt-1 text-base text-[#404040] leading-relaxed">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
