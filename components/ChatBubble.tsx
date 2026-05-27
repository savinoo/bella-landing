import { cn } from "@/lib/utils"

type Props = {
  from: "client" | "bella"
  text: string
}

export function ChatBubble({ from, text }: Props) {
  const isClient = from === "client"
  return (
    <div
      className={cn(
        "flex bubble-enter",
        isClient ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[78%] px-3 py-2 text-[13px] leading-snug shadow-sm",
          isClient
            ? "bg-[#dcf8c6] text-[#0F0F0F] rounded-2xl rounded-tr-sm"
            : "bg-white text-[#0F0F0F] rounded-2xl rounded-tl-sm"
        )}
      >
        {text}
      </div>
    </div>
  )
}
