import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "A Bella substitui a minha equipe?",
    a: "Não. Ela reforça quem você já tem. Responde o que chega no WhatsApp e transfere a conversa pra uma pessoa com um toque quando precisa.",
  },
  {
    q: "E se ela não souber responder?",
    a: "Ela chama você no WhatsApp e avisa a cliente que uma pessoa vai continuar a conversa. Nada de resposta inventada.",
  },
  {
    q: "Quanto tempo pra entrar no ar?",
    a: "Um dia útil. Você manda os procedimentos, os preços e os horários. A gente monta, testa junto e libera.",
  },
  {
    q: "E os dados das minhas clientes?",
    a: "Ficam guardados com segurança, do jeito que a LGPD pede. Nada é compartilhado com terceiros.",
  },
  {
    q: "Preciso trocar de número?",
    a: "Não. A Bella funciona no WhatsApp que a sua clínica já usa. Sua cliente nem percebe a diferença.",
  },
]

export function Faq() {
  return (
    <section id="perguntas" className="scroll-mt-28 md:scroll-mt-24 px-5 sm:px-6 py-20 md:py-24">
      <div className="max-w-3xl mx-auto">
        <p className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#7A6A61]">
          <span aria-hidden className="size-1.5 rounded-full bg-[#FF6F61]" />
          Perguntas
        </p>
        <h2 className="mt-4 font-serif text-[2rem] leading-[1.1] md:text-5xl font-medium tracking-[-0.02em] text-[#0F0F0F]">
          O que toda dona pergunta primeiro.
        </h2>

        <Accordion className="mt-10 divide-y divide-[#EFE3DC] border-y border-[#EFE3DC]">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="py-2">
              <AccordionTrigger className="py-5 text-left text-base md:text-lg font-medium text-[#0F0F0F] hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-[#404040]">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
