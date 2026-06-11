import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function DemoShell({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle: string
  children: React.ReactNode
}) {
  return (
    <main className="min-h-dvh px-5 py-8 md:py-14">
      <div className="mx-auto max-w-md">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-[#737373] transition hover:text-[#0F0F0F]"
          >
            <ArrowLeft className="size-4" /> bella
          </Link>
          <span className="rounded-full border border-[#ECECEC] bg-white px-3 py-1 text-[11px] uppercase tracking-wide text-[#737373]">
            Demonstração com dados de exemplo
          </span>
        </div>
        <h1 className="mt-6 text-2xl font-semibold tracking-[-0.02em] text-[#0F0F0F]">
          {title}
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-[#404040]">{subtitle}</p>
        <div className="mt-8">{children}</div>
      </div>
    </main>
  )
}
