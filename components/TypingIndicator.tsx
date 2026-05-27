export function TypingIndicator() {
  return (
    <div className="flex justify-start bubble-enter">
      <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-3 shadow-sm">
        <div className="flex gap-1 items-end h-2">
          <span className="size-1.5 rounded-full bg-[#737373] typing-dot" />
          <span
            className="size-1.5 rounded-full bg-[#737373] typing-dot"
            style={{ animationDelay: "0.15s" }}
          />
          <span
            className="size-1.5 rounded-full bg-[#737373] typing-dot"
            style={{ animationDelay: "0.3s" }}
          />
        </div>
      </div>
    </div>
  )
}
