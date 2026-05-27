import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Eyebrow } from "@/components/Eyebrow"

const faqs = [
  {
    q: "Quanto custa pra manter rodando depois?",
    a: "A Bella usa OpenAI ou Anthropic na chave de API sua. Custo médio fica entre R$ 30 e R$ 80 por mês dependendo do volume de conversas. Você paga a empresa de IA diretamente, não passa pela gente. A mensalidade nossa de R$ 197 é opcional e inclui monitoramento, correção de bug quando aparecer e um ajuste de prompt por mês.",
  },
  {
    q: "E se não funcionar pra minha clínica?",
    a: "Você paga R$ 1.000 no fechamento do contrato. Os outros R$ 997 só são cobrados depois que a Bella estiver 30 dias rodando no WhatsApp da sua clínica. Se em 30 dias ela não atender pelo menos 5 leads reais da sua clínica, você não paga a segunda parcela. Sem letra miúda.",
  },
  {
    q: "Quanto tempo até estar no ar?",
    a: "1 dia útil. Você manda os procedimentos, preços, horário e endereço. Eu monto, treino no contexto da sua clínica, conecto no seu número do WhatsApp e testamos juntos antes de liberar pros clientes.",
  },
]

export function FAQ() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <Eyebrow>Perguntas frequentes</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-[-0.02em] text-[#0F0F0F]">
            O que clínica perguntou primeiro
          </h2>
        </div>

        <Accordion className="mt-12 divide-y divide-[#ECECEC] border-y border-[#ECECEC]">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="py-2">
              <AccordionTrigger className="text-left text-lg font-medium text-[#0F0F0F] py-5 hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-[#404040] leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
