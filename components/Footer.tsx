export function Footer() {
  return (
    <footer className="px-6 py-16 border-t border-[#ECECEC]">
      <div className="max-w-6xl mx-auto">
        <p className="font-serif text-3xl text-[#0F0F0F] tracking-tight">
          Bella
        </p>
        <p className="mt-4 text-[#404040] max-w-md">
          Atendente de IA para clínica de estética. Construída por Lucas Savino,
          engenheiro de IA.
        </p>
        <a
          href="https://savinoteam.tech"
          className="mt-4 inline-block text-sm text-[#737373] underline-offset-4 hover:underline"
        >
          savinoteam.tech
        </a>
        <p className="mt-10 text-xs text-[#737373]">© 2026</p>
      </div>
    </footer>
  )
}
