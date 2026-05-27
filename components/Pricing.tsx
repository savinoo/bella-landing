import { Check } from "lucide-react"
import { CTAPrimary } from "@/components/CTAPrimary"
import { Eyebrow } from "@/components/Eyebrow"

const WHATSAPP_URL =
  "https://wa.me/5528999301848?text=Oi%20Lucas%2C%20vi%20a%20Bella%20no%20site%20e%20quero%20saber%20mais%20pra%20minha%20cl%C3%ADnica"

const features = [
  "Atendente IA no WhatsApp da clínica",
  "Agendamento no Google Calendar",
  "Treinamento nos procedimentos da clínica",
  "Captura de lead em planilha",
  "Setup completo em 1 dia útil",
  "Suporte 30 dias inclusos",
]

export function Pricing() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <Eyebrow>Investimento</Eyebrow>
        <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-[-0.02em] text-[#0F0F0F]">
          Pague o setup. A garantia faz o resto.
        </h2>
      </div>

      <div className="mt-12 max-w-lg mx-auto">
        <div className="relative p-8 md:p-10 rounded-3xl bg-white border-2 border-[#25D366] shadow-[0_4px_32px_-8px_rgba(37,211,102,0.16)]">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25D366]/8 border border-[#25D366]/30 text-[#1EA952] text-xs font-medium uppercase tracking-wider">
              <span className="size-1.5 rounded-full bg-[#25D366]" />
              30 dias de garantia
            </span>
          </div>

          <div className="mt-6 text-center">
            <div className="font-serif text-5xl md:text-6xl font-medium tracking-[-0.02em] text-[#0F0F0F]">
              R$ 1.997
            </div>
            <p className="mt-2 text-[#404040]">Setup único da sua Bella</p>
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

          <hr className="my-8 border-[#ECECEC]" />

          <div className="space-y-1.5 text-sm text-[#404040]">
            <p>R$ 1.000 no contrato</p>
            <p>R$ 997 depois de 30 dias rodando</p>
            <p className="pt-2 text-[#737373]">
              Mensalidade opcional R$ 197/mês a partir do mês 2 para manutenção,
              monitoramento e ajustes
            </p>
          </div>

          <CTAPrimary href={WHATSAPP_URL} className="mt-8 w-full">
            Quero pra minha clínica
          </CTAPrimary>

          <p className="mt-4 text-xs text-[#737373] text-center">
            API key OpenAI ou Anthropic é sua, R$ 30 a 80 por mês
          </p>
        </div>
      </div>
    </section>
  )
}
