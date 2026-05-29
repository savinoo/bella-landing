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
  title: "Bella, atrai, atende e agenda para clínica de estética | Savino",
  description:
    "A gente traz cliente nova com conteúdo, a Bella responde no WhatsApp 24 horas e agenda no Google Calendar, e você vê de onde veio cada cliente. Feita no Rio, a gente vai até a sua clínica.",
  openGraph: {
    title: "Bella, atrai, atende e agenda para clínica de estética",
    description:
      "Traz cliente nova, atende no WhatsApp 24h, agenda no Calendar e mostra de onde veio cada cliente. Feita no Rio, a gente vai até você.",
    url: "https://bella.savinoteam.tech",
    siteName: "Bella by Savino",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bella, atrai, atende e agenda para clínica de estética",
    description:
      "Traz cliente nova, atende no WhatsApp 24h, agenda no Calendar e mostra de onde veio cada cliente. Feita no Rio, a gente vai até você.",
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
      <body className="grain min-h-full bg-[#FBF6F3] font-sans text-[#0F0F0F]">
        {children}
      </body>
    </html>
  )
}
