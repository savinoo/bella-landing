import Link from "next/link"
import {
  ArrowRight,
  CalendarCheck,
  FolderLock,
  Layers,
  MessageCircle,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { BELLA_WHATSAPP_URL } from "./urls"

type Feature = {
  href: string
  external?: boolean
  icon: LucideIcon
  title: string
  body: string
  badge: string
}

const features: Feature[] = [
  {
    href: BELLA_WHATSAPP_URL,
    external: true,
    icon: MessageCircle,
    title: "Atende e agenda 24h",
    body: "Responde dúvida, informa preço e marca direto na agenda, no tom da sua clínica.",
    badge: "Conversar agora",
  },
  {
    href: "/demo/confirmacao",
    icon: CalendarCheck,
    title: "Confirmação e sinal Pix",
    body: "Confirma cada horário um dia antes e segura o compromisso com sinal por Pix.",
    badge: "Ver demonstração",
  },
  {
    href: "/demo/pacotes",
    icon: Layers,
    title: "Controle de pacotes",
    body: "Cliente comprou 10 sessões e fez 6. A Bella sabe, avisa e sugere a renovação.",
    badge: "Ver demonstração",
  },
  {
    href: "/demo/prontuario",
    icon: FolderLock,
    title: "Ficha da cliente em ordem",
    body: "Termo de consentimento, fotos de antes e depois e dados do jeito que a LGPD pede.",
    badge: "Ver demonstração",
  },
]

function CardInner({ icon: Icon, title, body, badge }: Feature) {
  return (
    <>
      <span className="inline-flex size-12 items-center justify-center rounded-full bg-[#FF6F61]/10 text-[#FF6F61]">
        <Icon className="size-6" strokeWidth={1.5} />
      </span>
      <h3 className="mt-5 font-serif text-xl md:text-2xl font-medium tracking-[-0.01em] text-[#0F0F0F]">
        {title}
      </h3>
      <p className="mt-2.5 text-[15px] md:text-base leading-relaxed text-[#404040]">
        {body}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#0F0F0F]">
        {badge}
        <ArrowRight className="size-4 text-[#FF6F61] transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none" />
      </span>
    </>
  )
}

const cardClass =
  "group flex flex-col items-start rounded-3xl border border-[#EFE3DC] bg-white p-7 md:p-9 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#FF6F61] hover:shadow-[0_20px_48px_-20px_rgba(255,111,97,0.4)] motion-reduce:transform-none"

export function Features() {
  return (
    <section id="features" className="scroll-mt-28 md:scroll-mt-24 px-5 sm:px-6 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#7A6A61]">
            <span aria-hidden className="size-1.5 rounded-full bg-[#FF6F61]" />
            O que ela faz
          </p>
          <h2 className="mt-4 font-serif text-[2rem] leading-[1.1] md:text-5xl font-medium tracking-[-0.02em] text-[#0F0F0F]">
            Toque e veja a Bella trabalhando.
          </h2>
        </div>

        <div className="mt-10 md:mt-14 grid gap-4 md:gap-6 md:grid-cols-2">
          {features.map((f) =>
            f.external ? (
              <a
                key={f.title}
                href={f.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
              >
                <CardInner {...f} />
              </a>
            ) : (
              <Link key={f.title} href={f.href} className={cardClass}>
                <CardInner {...f} />
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  )
}
