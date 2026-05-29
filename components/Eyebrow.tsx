import type { LucideIcon } from "lucide-react"

type Props = {
  children: React.ReactNode
  icon?: LucideIcon
  withDot?: boolean
}

export function Eyebrow({ children, icon: Icon, withDot = false }: Props) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#ECECEC] bg-white text-[11px] font-medium uppercase tracking-[0.12em] text-[#404040]">
      {Icon ? <Icon className="size-3 text-[#FF6F61]" strokeWidth={2} /> : null}
      <span className="relative pr-1">
        {children}
        {withDot ? (
          <span className="absolute -right-0 top-1/2 -translate-y-1/2 size-1.5 rounded-full bg-[#FF6F61] animate-pulse" />
        ) : null}
      </span>
    </div>
  )
}
