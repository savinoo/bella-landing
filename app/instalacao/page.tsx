import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { InstalacaoForm } from "@/components/landing/InstalacaoForm"

export const metadata: Metadata = {
  title: "Instalação | Bella",
}

export default function InstalacaoPage() {
  return (
    <main className="min-h-dvh px-5 py-8 md:py-14">
      <div className="mx-auto max-w-md">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-[#737373] transition hover:text-[#0F0F0F]"
        >
          <ArrowLeft className="size-4" /> bella
        </Link>

        <h1 className="mt-6 font-serif text-[2rem] font-medium leading-[1.1] tracking-[-0.02em] text-[#0F0F0F]">
          Vamos colocar a Bella no ar.
        </h1>
        <p className="mt-3 text-base leading-relaxed text-[#404040]">
          Preenche junto com a responsável da clínica. Leva uns cinco minutos e
          é tudo que a Bella precisa pra começar.
        </p>

        <div className="mt-8">
          <InstalacaoForm />
        </div>
      </div>
    </main>
  )
}
