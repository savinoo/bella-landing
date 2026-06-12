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
  { label: "Cartão pra imprimir", href: "/campo/cartao", external: false },
  { label: "QR na tela (plano B)", href: "/campo/qr", external: false },
  { label: "Site da Cris", href: "https://savinoteam.tech/cris", external: true },
]

const rota = [
  "Corredor de 1,6 km, do metrô Saens Peña ao Largo da Segunda-Feira (volta pelo Afonso Pena)",
  "10 portas em 8 endereços, o mapa mostra os prédios. Izidro 18, Shopping 45 e CB 44 têm DUAS portas cada (sala/andar na lista abaixo)",
  "Cris Tavares é a visita âncora (leve o savinoteam.tech/cris aberto)",
  "NÃO visitar Danielle Sales (recusou em 01/06, estacionada, reativar só com prova real)",
  "Registrar cada visita em áudio no caminho pra próxima (nome, com quem falou, contato da dona, reação, próximo passo)",
]

const ROTA_MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&origin=Esta%C3%A7%C3%A3o%20Saens%20Pe%C3%B1a%2C%20Pra%C3%A7a%20Saens%20Pe%C3%B1a%2C%20Tijuca%2C%20Rio%20de%20Janeiro&destination=Rua%20Conde%20de%20Bonfim%2C%2044%2C%20Tijuca%2C%20Rio%20de%20Janeiro&waypoints=Rua%20Desembargador%20Izidro%2C%2018%2C%20Tijuca%2C%20Rio%20de%20Janeiro%7CPra%C3%A7a%20Saens%20Pe%C3%B1a%2C%2045%2C%20Tijuca%2C%20Rio%20de%20Janeiro%7CRua%20Conde%20de%20Bonfim%2C%20375%2C%20Tijuca%2C%20Rio%20de%20Janeiro%7CRua%20Conde%20de%20Bonfim%2C%20346%2C%20Tijuca%2C%20Rio%20de%20Janeiro%7CRua%20Conde%20de%20Bonfim%2C%20106%2C%20Tijuca%2C%20Rio%20de%20Janeiro%7CRua%20Conde%20de%20Bonfim%2C%2099%2C%20Tijuca%2C%20Rio%20de%20Janeiro&travelmode=walking"

const paradas = [
  { onde: "Desembargador Izidro 18, sala 310", quem: "Dra. Cris Tavares (ÂNCORA)", nota: "demo savinoteam.tech/cris no bolso · WhatsApp 21 99526-3089 · @dracristavares" },
  { onde: "Shopping 45 da praça, salas 701/702", quem: "Dra. Sandra Azevedo", nota: "dermato dona do negócio, site de 2017, sem automação nenhuma · WhatsApp 21 97548-4724" },
  { onde: "Mesmo prédio, salas 1006-1009", quem: "Maison Regato", nota: "25 anos na Tijuca, formulário de callback no site = dor aberta · WhatsApp 21 99638-1081 · @maison_regato" },
  { onde: "Desembargador Izidro 18, sala 509", quem: "Clínica Tiago Silveira", nota: "dermato solo, agenda cheia de procedimento · WhatsApp 21 99300-8670 · @clinicatiagosilveira" },
  { onde: "Conde de Bonfim 375, sala 806", quem: "Ana Lucia Lino esteticista", nota: "solo, quase sem presença digital, confirmar na portaria · só fixo 21 3088-8641" },
  { onde: "Conde de Bonfim 346, loja 309", quem: "O Bem Spa Urbano", nota: "widget no site mas atendimento humano · WhatsApp 21 98638-4919 · @obemspaurbano" },
  { onde: "Conde de Bonfim 106, loja 108", quem: "Pelo Sim Pelo Não depilação", nota: "loja de rua, site antigo sem WhatsApp · fixo 21 3901-3937" },
  { onde: "Conde de Bonfim 99, sala 407", quem: "Espaço Priscila Lauredo", nota: "vende PACOTE de sessões, demo de pacotes cai como luva · WhatsApp 21 99977-7914 · @espacopriscilalauredo" },
  { onde: "Conde de Bonfim 44, loja B", quem: "Bella Up depilação", nota: "decisão no balcão, agendamento por telefone fixo 21 2254-7644 · @bellaupoficial" },
  { onde: "Mesmo prédio, sala 1803", quem: "Dra. Thaís Sena HOF", nota: "atende em 2 endereços, WhatsApp é o gargalo · WhatsApp 21 97424-2398 · @drathaissena" },
]

const objecoes = [
  {
    q: "Quanto custa?",
    a: "O teste de trinta dias não custa nada e você decide com os números na mão. Depois são R$497 de setup e R$397 por mês. Se a Bella salvar duas clientes de madrugada no mês, ela se pagou.",
  },
  {
    q: "Já temos IA no WhatsApp.",
    a: "Que bom, vocês já saíram na frente da maioria. Me tira uma curiosidade, ela marca direto na agenda de vocês, cobra o sinal e sabe o saldo do pacote da cliente, ou ela responde e a equipe termina o resto na mão?",
    nota: "escuta; depois, manda um oi nesse número como se fosse cliente e compara com a sua. Se a sua fizer tudo igual, me fala e eu sigo meu caminho",
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
  "Trial é oferta de boca na visita, nunca material público nem mensagem fria. Desconto e isenção de setup continuam carta na manga",
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
            Oferta de boca na visita. Trinta dias de teste com o preço dito na mesma frase, depoimento com números combinado na entrada e métrica de fechamento acertada antes (se agendar X no mês, fechamos?). Máximo 3 testes simultâneos, ativação em 48h. Landing e cartão continuam só com o preço cheio.
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
          <a
            href={ROTA_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex h-12 items-center justify-center rounded-full bg-[#0F0F0F] px-5 text-[15px] font-medium text-white"
          >
            Abrir rota a pé no Google Maps
          </a>
          <ol className="mt-4 space-y-2.5">
            {paradas.map((p, i) => (
              <li key={p.quem} className="rounded-xl border border-[#EADFD8] bg-white px-3.5 py-2.5">
                <p className="text-[14px] font-semibold text-[#0F0F0F]">
                  {i + 1}. {p.quem}
                </p>
                <p className="text-[13px] text-[#404040]">{p.onde}</p>
                <p className="text-[12px] text-[#7A6A61]">{p.nota}</p>
              </li>
            ))}
          </ol>
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
                    Minha proposta é assim. Trinta dias de teste pra você ver
                    funcionando com seus preços e sua agenda, eu configuro tudo.
                    No fim a gente olha os números juntos. Fazendo sentido, vira
                    assinatura de R$497 de setup e R$397 por mês. Não fazendo,
                    desliga e tá tudo certo.
                  </Fala>
                  <Fala>
                    Em troca do teste eu peço uma coisa só, seu depoimento com
                    os números se funcionar. E a gente já combina agora o que
                    valida, tipo quantos agendamentos no mês fariam valer. Topa
                    testar?
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
