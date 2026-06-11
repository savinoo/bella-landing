import Link from "next/link"
import { ArrowRight, CalendarCheck, Layers, FolderLock } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Eyebrow } from "@/components/Eyebrow"

type Demo = { href: string; icon: LucideIcon; title: string; body: string }

const demos: Demo[] = [
  {
    href: "/demo/confirmacao",
    icon: CalendarCheck,
    title: "Confirmação e sinal Pix",
    body: "A Bella confirma cada horário um dia antes e segura o compromisso com sinal por Pix nos procedimentos maiores.",
  },
  {
    href: "/demo/pacotes",
    icon: Layers,
    title: "Controle de pacotes",
    body: "Cliente comprou 10 sessões e fez 6. A Bella sabe, avisa e nunca deixa pacote virar bagunça de caderno.",
  },
  {
    href: "/demo/prontuario",
    icon: FolderLock,
    title: "Ficha da cliente em ordem",
    body: "Termo de consentimento, fotos de antes e depois e dados guardados do jeito que a LGPD pede.",
  },
]

export function RecursosDemo() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <Eyebrow>Veja por dentro</Eyebrow>
        <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-[-0.02em] text-[#0F0F0F]">
          Toque e veja a Bella trabalhando.
        </h2>
        <p className="mt-4 text-[#404040]">
          Três demonstrações interativas, do jeito que aparecem pra você e
          pra sua cliente.
        </p>
      </div>
      <div className="mt-12 max-w-5xl mx-auto grid gap-5 md:grid-cols-3">
        {demos.map(({ href, icon: Icon, title, body }) => (
          <Link
            key={href}
            href={href}
            className="group rounded-2xl border border-[#ECECEC] bg-white p-8 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#FF6F61] hover:shadow-[0_16px_40px_-16px_rgba(255,111,97,0.35)] motion-reduce:transform-none"
          >
            <div className="inline-flex size-12 items-center justify-center rounded-full bg-[#FF6F61]/10 text-[#FF6F61]">
              <Icon className="size-6" strokeWidth={1.5} />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[#0F0F0F]">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#404040]">{body}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#0F0F0F]">
              Ver demonstração
              <ArrowRight className="size-4 text-[#FF6F61] transition group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
