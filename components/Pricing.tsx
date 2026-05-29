import { Check } from "lucide-react"
import { CTAPrimary } from "@/components/CTAPrimary"
import { Eyebrow } from "@/components/Eyebrow"

const WHATSAPP_URL =
  "https://wa.me/5528999301848?text=Oi%20Lucas%2C%20vi%20a%20Bella%20no%20site%20e%20quero%20saber%20mais%20pra%20minha%20cl%C3%ADnica"

const features = [
  "Atendente de IA no WhatsApp da clínica",
  "Agendamento direto no Google Calendar",
  "Captura de cada lead que chega",
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
        <div className="relative p-8 md:p-10 rounded-3xl bg-white border-2 border-[#25D366] shadow-[0_4px_32px_-8px_rgba(37,211,102,0.16)]">
          <div className="text-center">
            <p className="text-[#404040] leading-relaxed">
              Cada clínica tem um volume e uma realidade. Por isso a gente monta
              a proposta junto com você, com uma entrada pra começar e uma parte
              que só vale quando a Bella prova resultado no seu WhatsApp. A
              mensalidade cobre a operação, o monitoramento e os ajustes.
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
    </section>
  )
}
