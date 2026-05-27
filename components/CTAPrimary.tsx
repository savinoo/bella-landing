import { cn } from "@/lib/utils"

type Props = {
  href: string
  children: React.ReactNode
  className?: string
}

export function CTAPrimary({ href, children, className }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-[#25D366] hover:bg-[#1EA952] text-white font-medium text-base shadow-[0_4px_14px_rgba(37,211,102,0.25)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.35)] transition-all duration-200 hover:-translate-y-[1px] motion-reduce:transform-none",
        className
      )}
    >
      {children}
    </a>
  )
}
