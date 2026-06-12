import Link from "next/link"
import { LUCAS_WHATSAPP_URL, PAINEL_DEMO_URL } from "./urls"

const demoLinks = [
  { href: "/demo/confirmacao", label: "Confirmação e sinal Pix" },
  { href: "/demo/pacotes", label: "Controle de pacotes" },
  { href: "/demo/prontuario", label: "Ficha da cliente" },
]

export function Footer() {
  return (
    <footer className="px-5 sm:px-6 py-14 md:py-16 border-t border-[#F2D9CF]">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-serif text-3xl tracking-tight text-[#0F0F0F]">
            bella<span className="text-[#FF6F61]">.</span>
          </p>
          <p className="mt-3 max-w-xs text-[#404040]">
            Feito no Rio por Lucas e Thaiz.
          </p>
          <a
            href={LUCAS_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center text-sm font-medium text-[#0F0F0F] underline underline-offset-4 decoration-[#25D366]/60 hover:decoration-[#25D366] transition-colors"
          >
            Falar com a gente no WhatsApp
          </a>
        </div>

        <nav aria-label="Demonstrações">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#7A6A61]">
            Veja por dentro
          </p>
          <ul className="mt-4 space-y-2.5">
            {demoLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-[#5C5350] hover:text-[#0F0F0F] transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={PAINEL_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#5C5350] hover:text-[#0F0F0F] transition-colors"
              >
                Painel de resultados
              </a>
            </li>
            <li>
              <Link
                href="/instalacao"
                className="text-sm text-[#5C5350] hover:text-[#0F0F0F] transition-colors"
              >
                Instalação
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="max-w-6xl mx-auto">
        <p className="mt-12 text-xs text-[#7A6A61]">© 2026 Bella</p>
      </div>
    </footer>
  )
}
