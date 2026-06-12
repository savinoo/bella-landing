import { Check } from "lucide-react"
import { LUCAS_WHATSAPP_URL } from "./urls"

const itens = [
  "Atendente de IA no WhatsApp da clínica",
  "Agendamento direto no Google Calendar",
  "Confirmação de horário e captura de cada lead",
  "Instalada na voz e nos preços da sua clínica",
  "No ar em um dia útil",
  "Painel de resultados incluso",
]

export function Preco() {
  return (
    <section id="preco" className="scroll-mt-28 md:scroll-mt-24 px-5 sm:px-6 py-20 md:py-28">
      <div className="max-w-3xl mx-auto text-center">
        <p className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#7A6A61]">
          <span aria-hidden className="size-1.5 rounded-full bg-[#FF6F61]" />
          Investimento
        </p>
        <h2 className="mt-4 font-serif text-[2rem] leading-[1.1] md:text-5xl font-medium tracking-[-0.02em] text-[#0F0F0F]">
          Quanto custa
        </h2>
      </div>

      <div className="mt-10 md:mt-14 max-w-lg mx-auto">
        <div className="relative rounded-[1.75rem] p-[1.5px] bg-gradient-to-br from-[#FF6F61] via-[#FFB347] to-[#FF6F61] shadow-[0_20px_60px_-20px_rgba(255,111,97,0.45)]">
          <div className="sheen-track" aria-hidden />
          <div className="relative rounded-[calc(1.75rem-1.5px)] bg-white p-7 md:p-10">
            <div className="text-center">
              <div className="flex flex-wrap items-baseline justify-center gap-x-2">
                <span className="font-serif text-6xl font-medium tracking-tight text-[#0F0F0F]">
                  R$497
                </span>
                <span className="text-lg text-[#737373]">setup único</span>
              </div>
              <div className="mt-2 flex flex-wrap items-baseline justify-center gap-x-2">
                <span className="font-serif text-3xl font-medium text-[#0F0F0F]">
                  + R$397
                </span>
                <span className="text-lg text-[#737373]">por mês</span>
              </div>
              <p className="mt-5 leading-relaxed text-[#404040]">
                O setup deixa a Bella no ar com a voz, os procedimentos e a
                agenda da sua clínica. A mensalidade cobre a operação, o
                monitoramento e os ajustes de todo mês.
              </p>
            </div>

            <hr className="my-8 border-[#F0E6E0]" />

            <ul className="space-y-3">
              {itens.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    className="mt-1 size-4 shrink-0 text-[#25D366]"
                    strokeWidth={2.5}
                  />
                  <span className="text-base text-[#404040]">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={LUCAS_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center h-12 px-6 rounded-full bg-[#25D366] hover:bg-[#1EA952] text-white font-medium text-base shadow-[0_4px_14px_rgba(37,211,102,0.25)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.35)] transition-all duration-200 hover:-translate-y-[1px] motion-reduce:transform-none"
            >
              Montar a minha proposta
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
