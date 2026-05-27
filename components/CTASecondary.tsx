import { cn } from "@/lib/utils"

type Props = {
  href: string
  children: React.ReactNode
  className?: string
}

export function CTASecondary({ href, children, className }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center h-12 px-6 rounded-full border border-[#D4D4D4] hover:border-[#0F0F0F] text-[#0F0F0F] font-medium text-base bg-white transition-all duration-200 hover:-translate-y-[1px] motion-reduce:transform-none",
        className
      )}
    >
      {children}
    </a>
  )
}
