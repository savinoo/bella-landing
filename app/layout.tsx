import type { Metadata } from "next"
import { Geist, Fraunces } from "next/font/google"
import "./globals.css"

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
})

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  axes: ["SOFT", "opsz"],
})

export const metadata: Metadata = {
  title: "Bella, atendente IA para clínica de estética | Savino",
  description:
    "A Bella responde os leads da sua clínica de estética no WhatsApp 24 horas e agenda no Google Calendar. Feita no Rio, instalada e acompanhada pela gente, no ar em um dia útil.",
  openGraph: {
    title: "Bella, atendente IA para clínica de estética",
    description: "Atende no WhatsApp 24h e agenda no Calendar. Feita no Rio, a gente vai na sua clínica.",
    url: "https://bella.savinoteam.tech",
    siteName: "Bella by Savino",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bella, atendente IA para clínica de estética",
    description: "Atende no WhatsApp 24h e agenda no Calendar. Feita no Rio, a gente vai na sua clínica.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geist.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#FAFAFA] font-sans text-[#0F0F0F]">
        {children}
      </body>
    </html>
  )
}
