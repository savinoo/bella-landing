import { Check } from "lucide-react"
import { CTAPrimary } from "@/components/CTAPrimary"
import { Eyebrow } from "@/components/Eyebrow"

const WHATSAPP_URL =
  "https://wa.me/5528999301848?text=Oi%20Lucas%2C%20vi%20a%20Bella%20no%20site%20e%20quero%20saber%20mais%20pra%20minha%20cl%C3%ADnica"

const features = [
  "Conteúdo de vídeo pra atrair cliente nova",
  "Atendente de IA no WhatsApp da clínica",
  "Agendamento direto no Google Calendar",
  "Captura de cada lead que chega",
  "Página de métricas mostrando de onde veio cada cliente",
  "Instalada na voz e nos preços da sua clínica",
  "No ar em um dia útil",
  "Acompanhamento e ajustes todo mês",
]

export function Pricing() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <Eyebrow>Investimento</Eyebrow>
        <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-[-0.02em] text-[#0F0F0F]">
          Uma proposta do tamanho da sua clínica.
        </h2>
      </div>

      <div className="mt-12 max-w-lg mx-auto">
        <div className="relative rounded-[1.75rem] p-[1.5px] bg-gradient-to-br from-[#FF6F61] via-[#FFB347] to-[#FF6F61] shadow-[0_20px_60px_-20px_rgba(255,111,97,0.45)]">
          <div className="sheen-track" aria-hidden />
          <div className="relative rounded-[calc(1.75rem-1.5px)] bg-white p-8 md:p-10">
            <div className="text-center">
              <div className="flex items-baseline justify-center gap-2">
                <span className="font-serif text-6xl font-medium tracking-tight text-[#0F0F0F]">
                  R$497
                </span>
                <span className="text-[#737373] text-lg">setup único</span>
              </div>
              <div className="mt-2 flex items-baseline justify-center gap-2">
                <span className="font-serif text-3xl font-medium text-[#0F0F0F]">
                  + R$397
                </span>
                <span className="text-[#737373] text-lg">por mês</span>
              </div>
              <p className="mt-5 text-[#404040] leading-relaxed">
                O setup deixa a Bella no ar com a voz, os procedimentos e a agenda
                da sua clínica. A mensalidade cobre a operação, o monitoramento e
                os ajustes de todo mês.
              </p>
            </div>

            <hr className="my-8 border-[#ECECEC]" />

            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check
                    className="mt-1 size-4 flex-shrink-0 text-[#25D366]"
                    strokeWidth={2.5}
                  />
                  <span className="text-[#404040] text-base">{f}</span>
                </li>
              ))}
            </ul>

            <CTAPrimary href={WHATSAPP_URL} className="mt-8 w-full">
              Montar a minha proposta
            </CTAPrimary>
          </div>
        </div>
      </div>
    </section>
  )
}
