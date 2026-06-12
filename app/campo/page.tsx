import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CampoChecklist } from "@/components/landing/CampoChecklist"
import { BELLA_WHATSAPP_URL, PAINEL_DEMO_URL } from "@/components/landing/urls"

export const metadata: Metadata = {
  title: "Campo | Bella",
  robots: { index: false, follow: false },
}

const quickLinks = [
  { label: "Bella no WhatsApp", href: BELLA_WHATSAPP_URL, external: true },
  { label: "Demo Confirmação", href: "/demo/confirmacao", external: false },
  { label: "Demo Pacotes", href: "/demo/pacotes", external: false },
  { label: "Demo Ficha", href: "/demo/prontuario", external: false },
  { label: "Painel de exemplo", href: PAINEL_DEMO_URL, external: true },
  { label: "Formulário de instalação", href: "/instalacao", external: false },
  { label: "Site da Cris", href: "https://savinoteam.tech/cris", external: true },
]

const rota = [
  "Tijuca, 8 a 12 clínicas, horário morto (10h-11h30 e 15h-16h30)",
  "Cris Tavares é a visita âncora (leve o savinoteam.tech/cris aberto)",
  "NÃO visitar Danielle Sales (recusou em 01/06, estacionada, reativar só com prova real)",
  "Registrar cada visita em áudio no caminho pra próxima (nome, com quem falou, contato da dona, reação, próximo passo)",
]

const objecoes = [
  {
    q: "Quanto custa?",
    a: "R$497 pra deixar no ar com a sua cara, seus preços e sua agenda, e R$397 por mês pela operação. Uma cliente nova que ela salvar de madrugada já paga o mês.",
  },
  {
    q: "Já temos atendente.",
    a: "E continua tendo. A Bella trabalha quando ela não está e filtra o repetitivo de dia. Sua atendente vira a supervisora, ela assume qualquer conversa com um toque.",
  },
  {
    q: "Robô é impessoal.",
    a: "Concordo, e por isso ela não finge ser pessoa nem tenta resolver tudo. Agiliza preço e horário com o tom de vocês, e o delicado vai pra sua equipe na hora. Testa aí e me diz se pareceu fria.",
  },
  {
    q: "E os dados das minhas clientes?",
    a: "Ficam guardados com segurança, nada é compartilhado, dentro da LGPD. É a mesma informação que a recepção já anota, só que organizada. E se você encerrar, eu te entrego seus dados e apago tudo.",
  },
  {
    q: "Me deixa pensar.",
    a: "Claro. Te mando o resumo por WhatsApp hoje com o link da demonstração. O que precisaria ter nesse resumo pra valer a conversa?",
    nota: "escuta, anota, combina o dia do retorno",
  },
]

const nuncaFazer = [
  "Falar de concorrência ou criar urgência falsa",
  "Anunciar trial, desconto ou isenção (isenção dos 3 primeiros é carta na manga, só depois de objeção real de preço)",
  "Pedir reunião ou visita longa na abertura, o menor passo é sempre o QR",
  "Monólogo de funcionalidades, uma pergunta por vez",
  "Prometer que a Bella não erra",
]

const triggerCls =
  "py-5 text-left text-base font-medium text-[#0F0F0F] hover:no-underline"
const contentCls = "pb-5 text-base leading-relaxed text-[#404040]"
const accordionCls = "divide-y divide-[#EFE3DC] border-y border-[#EFE3DC]"

function Fala({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-xl border-l-2 border-[#FF6F61]/60 bg-white/70 px-4 py-3 text-[#0F0F0F]">
      {children}
    </p>
  )
}

function Nota({ children }: { children: React.ReactNode }) {
  return <p className="mt-2 text-sm text-[#7A6A61]">{children}</p>
}

export default function CampoPage() {
  return (
    <main className="min-h-dvh px-5 py-8 md:py-14">
      <div className="mx-auto max-w-md">
        <Link
          href="/"
          className="text-sm text-[#737373] transition hover:text-[#0F0F0F]"
        >
          bella<span className="text-[#FF6F61]">.</span>
        </Link>

        <h1 className="mt-5 font-serif text-[2rem] font-medium leading-[1.1] tracking-[-0.02em] text-[#0F0F0F]">
          Campo de hoje
        </h1>

        <nav aria-label="Links rápidos" className="mt-6 grid grid-cols-2 gap-3">
          {quickLinks.map((l) =>
            l.external ? (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex min-h-16 items-center justify-between gap-2 rounded-2xl border px-4 py-3 text-[15px] font-medium leading-snug transition-colors ${
                  l.label === "Bella no WhatsApp"
                    ? "col-span-2 border-transparent bg-[#25D366] text-white hover:bg-[#1EA952]"
                    : "border-[#EADFD8] bg-white text-[#0F0F0F] hover:border-[#FF6F61]"
                }`}
              >
                {l.label}
                <ArrowUpRight
                  className={`size-4 shrink-0 ${
                    l.label === "Bella no WhatsApp"
                      ? "text-white/80"
                      : "text-[#FF6F61]"
                  }`}
                />
              </a>
            ) : (
              <Link
                key={l.label}
                href={l.href}
                className="flex min-h-16 items-center rounded-2xl border border-[#EADFD8] bg-white px-4 py-3 text-[15px] font-medium leading-snug text-[#0F0F0F] transition-colors hover:border-[#FF6F61]"
              >
                {l.label}
              </Link>
            )
          )}
        </nav>

        <div className="mt-6 rounded-3xl border border-[#F2D9CF] bg-white p-6">
          <p className="font-serif text-2xl font-medium tracking-[-0.01em] text-[#0F0F0F]">
            R$497 de setup e R$397 por mês.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[#7A6A61]">
            Isenção do setup só como carta na manga, nunca anunciada.
          </p>
        </div>

        <section className="mt-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#7A6A61]">
            Rota
          </p>
          <ul className="mt-3 space-y-2">
            {rota.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-[15px] leading-snug text-[#404040]"
              >
                <span
                  aria-hidden
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-[#FFB347]"
                />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#7A6A61]">
            Roteiro
          </p>
          <Accordion className={`mt-3 ${accordionCls}`}>
            <AccordionItem value="recepcao" className="py-2">
              <AccordionTrigger className={triggerCls}>
                Recepção (30s)
              </AccordionTrigger>
              <AccordionContent className={contentCls}>
                <Nota>
                  30 segundos, objetivo é o cartão + contato da dona, NÃO vender
                </Nota>
                <div className="mt-3 space-y-3">
                  <Fala>
                    Oi, tudo bem? Sou o Lucas, desenvolvedor aqui do Rio. Eu fiz
                    uma assistente que responde o WhatsApp da clínica quando
                    ninguém consegue, de noite e no fim de semana. Não vim
                    vender nada agora. Esse cartão tem um QR code, ela responde
                    na hora como se você fosse cliente. Testa quando der. Se
                    fizer sentido, consigo o contato da responsável?
                  </Fala>
                  <Nota>Se a atendente se interessar</Nota>
                  <Fala>
                    Pra você é até melhor, ela filtra aquelas cinquenta
                    perguntas repetidas de preço e te deixa com a cliente que tá
                    na sua frente. Quem assume a conversa quando quer é você.
                  </Fala>
                  <Nota>Se travar, deixar o cartão e sair leve</Nota>
                  <Fala>
                    Sem problema nenhum. Fica com o cartão, qualquer coisa meu
                    contato tá atrás.
                  </Fala>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="dona" className="py-2">
              <AccordionTrigger className={triggerCls}>
                Dona presente (2min)
              </AccordionTrigger>
              <AccordionContent className={contentCls}>
                <Nota>
                  2 minutos, objetivo é ela testar o número ALI ou marcar
                  retorno
                </Nota>
                <div className="mt-3 space-y-3">
                  <Fala>
                    Posso te fazer uma pergunta rápida? Quantas clientes chamam
                    vocês no WhatsApp depois das 19h ou no domingo?
                  </Fala>
                  <Nota>deixa responder, não corrige</Nota>
                  <Fala>
                    Eu fiz uma assistente que responde na hora, 24h. Informa
                    preço, agenda no calendário, confirma horário pra reduzir
                    falta. Quer ver? Manda um oi nesse número como se você fosse
                    cliente.
                  </Fala>
                  <Nota>aponta o QR do cartão, ela testa NO CELULAR DELA</Nota>
                  <Fala>
                    Importante, ela não substitui sua equipe. Caso fora do
                    roteiro ela transfere pra vocês na hora, e qualquer conversa
                    sua equipe assume quando quiser.
                  </Fala>
                  <Fala>
                    O investimento é R$497 de setup e R$397 por mês. Se não
                    fizer sentido pra vocês, você me fala e tá tudo certo, sem
                    insistência. Faz sentido eu te mostrar com os procedimentos
                    e preços da sua clínica?
                  </Fala>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="mt-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#7A6A61]">
            Objeções
          </p>
          <p className="mt-2 text-sm text-[#7A6A61]">
            responder curto, sempre devolvendo a decisão pra ela
          </p>
          <Accordion className={`mt-3 ${accordionCls}`}>
            {objecoes.map((o) => (
              <AccordionItem key={o.q} value={o.q} className="py-2">
                <AccordionTrigger className={triggerCls}>
                  {o.q}
                </AccordionTrigger>
                <AccordionContent className={contentCls}>
                  <Fala>{o.a}</Fala>
                  {o.nota ? <Nota>{o.nota}</Nota> : null}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="mt-8">
          <Accordion className={accordionCls}>
            <AccordionItem value="nunca" className="py-2">
              <AccordionTrigger className={triggerCls}>
                O que nunca fazer
              </AccordionTrigger>
              <AccordionContent className={contentCls}>
                <ul className="space-y-2.5">
                  {nuncaFazer.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        aria-hidden
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-[#FF6F61]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="mt-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#7A6A61]">
            Checklist antes de sair
          </p>
          <div className="mt-3">
            <CampoChecklist />
          </div>
        </section>

        <p className="mt-12 text-center text-xs text-[#7A6A61]">
          página interna da equipe
        </p>
      </div>
    </main>
  )
}
