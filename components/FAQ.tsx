import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Eyebrow } from "@/components/Eyebrow"

const faqs = [
  {
    q: "Quanto custa?",
    a: "A gente monta a proposta junto com você, porque depende do volume da sua clínica. Tem uma entrada pra começar, uma parte amarrada a resultado e uma mensalidade pra operação. Chama no WhatsApp que a gente fecha os números com você.",
  },
  {
    q: "E se não funcionar pra minha clínica?",
    a: "Parte do valor só vale depois que a Bella estiver rodando e atendendo cliente de verdade no seu WhatsApp. O risco de começar fica do nosso lado, não do seu.",
  },
  {
    q: "A IA não vai inventar coisa errada com a minha cliente?",
    a: "A Bella só fala do que está cadastrado na sua clínica. Não inventa preço, não inventa horário e não confirma o que não sabe. Quando foge do que ela conhece, passa pra uma pessoa na hora.",
  },
  {
    q: "Quanto tempo até estar no ar?",
    a: "Um dia útil. Você manda os procedimentos, preços, horário e endereço. A gente monta, treina no contexto da sua clínica, conecta no WhatsApp e testa junto antes de liberar pra cliente.",
  },
  {
    q: "Vocês também trazem cliente nova ou só atendem?",
    a: "Os dois. Além da Bella atender e agendar quem já chama, a gente produz conteúdo de vídeo pra trazer cliente nova, e mostra qual conteúdo virou agendamento. É o funil inteiro, não só o atendimento.",
  },
  {
    q: "Como vocês sabem que funcionou?",
    a: "Você tem uma página sua de métricas que liga cada peça de conteúdo ao lead e ao agendamento que ela trouxe, com a evolução ao longo do tempo. Dá pra ver de onde veio cada cliente. Sem isso ninguém consegue provar resultado de verdade.",
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
