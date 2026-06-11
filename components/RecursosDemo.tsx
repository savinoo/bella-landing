import Link from "next/link"
import { ArrowRight, CalendarCheck, Layers, FolderLock } from "lucide-react"
import { Eyebrow } from "@/components/Eyebrow"

const demos = [
  {
    href: "/demo/confirmacao",
    icon: CalendarCheck,
    title: "Confirmação e sinal Pix",
    desc: "A Bella confirma cada horário um dia antes e segura o compromisso com sinal por Pix nos procedimentos maiores.",
  },
  {
    href: "/demo/pacotes",
    icon: Layers,
    title: "Controle de pacotes",
    desc: "Cliente comprou 10 sessões e fez 6. A Bella sabe, avisa e nunca deixa pacote virar bagunça de caderno.",
  },
  {
    href: "/demo/prontuario",
    icon: FolderLock,
    title: "Ficha da cliente em ordem",
    desc: "Termo de consentimento, fotos de antes e depois e dados guardados do jeito que a LGPD pede.",
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
        {demos.map((d) => (
          <Link
            key={d.href}
            href={d.href}
            className="group rounded-3xl border border-[#ECECEC] bg-white p-7 transition hover:border-[#FF6F61] hover:shadow-[0_16px_40px_-16px_rgba(255,111,97,0.35)]"
          >
            <d.icon className="size-6 text-[#FF6F61]" strokeWidth={2} />
            <h3 className="mt-4 text-lg font-semibold text-[#0F0F0F]">{d.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#404040]">{d.desc}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#FF6F61]">
              Ver demonstração
              <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
