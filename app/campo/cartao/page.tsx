import type { Metadata } from "next"
import Link from "next/link"
import { ArrowDownToLine } from "lucide-react"

export const metadata: Metadata = {
  title: "Cartão pra imprimir | Bella",
  robots: { index: false, follow: false },
}

const instrucoes = [
  "Pedir impressão frente e verso do PDF A6 (10,5 x 14,8 cm)",
  "Papel mais firme que tiver, 250g ou 300g",
  "30 cópias",
  "Conferir UM impresso antes da tiragem, o QR tem que abrir a conversa da Bella de primeira",
]

export default function CartaoPage() {
  return (
    <main className="min-h-dvh px-5 py-8 md:py-14">
      <div className="mx-auto max-w-md">
        <Link href="/campo" className="text-sm text-[#737373] transition hover:text-[#0F0F0F]">
          ← campo
        </Link>
        <h1 className="mt-5 font-serif text-[2rem] font-medium leading-[1.1] tracking-[-0.02em] text-[#0F0F0F]">
          Cartão pra imprimir
        </h1>
        <div className="mt-6 grid gap-3">
          <a
            href="/cartao-a6.pdf"
            download
            className="flex h-14 items-center justify-between rounded-2xl bg-[#0F0F0F] px-5 text-[15px] font-medium text-white"
          >
            Cartão A6 frente e verso (principal)
            <ArrowDownToLine className="size-5 text-white/80" />
          </a>
          <a
            href="/cartao-90x50.pdf"
            download
            className="flex h-14 items-center justify-between rounded-2xl border border-[#EADFD8] bg-white px-5 text-[15px] font-medium text-[#0F0F0F]"
          >
            Cartão de visita 90 x 50 (extra)
            <ArrowDownToLine className="size-5 text-[#FF6F61]" />
          </a>
        </div>
        <section className="mt-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#7A6A61]">
            Na papelaria
          </p>
          <ul className="mt-3 space-y-2">
            {instrucoes.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[15px] leading-snug text-[#404040]">
                <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-[#FF6F61]" />
                {item}
              </li>
            ))}
          </ul>
        </section>
        <p className="mt-10 text-center text-xs text-[#A89A91]">página interna da equipe</p>
      </div>
    </main>
  )
}
