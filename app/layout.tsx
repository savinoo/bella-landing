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
  style: ["normal", "italic"],
  axes: ["SOFT", "opsz"],
})

const DESCRIPTION =
  "A Bella atrai, atende e agenda as clientes da sua clínica de estética no WhatsApp, 24h por dia. R$497 de setup e R$397 por mês."

export const metadata: Metadata = {
  title: "Bella, atrai, atende e agenda para clínica de estética | Savino",
  description: DESCRIPTION,
  openGraph: {
    title: "Bella, atrai, atende e agenda para clínica de estética",
    description: DESCRIPTION,
    url: "https://bella.savinoteam.tech",
    siteName: "Bella by Savino",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bella, atrai, atende e agenda para clínica de estética",
    description: DESCRIPTION,
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
