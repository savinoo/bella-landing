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
    "Responde leads no WhatsApp 24h e agenda direto no Google Calendar. Setup R$ 1.997 com 30 dias de garantia.",
  openGraph: {
    title: "Bella, atendente IA para clínica de estética",
    description: "Responde leads no WhatsApp 24h e agenda no Calendar",
    url: "https://bella.savinoteam.tech",
    siteName: "Bella by Savino",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bella, atendente IA para clínica de estética",
    description: "Responde leads no WhatsApp 24h e agenda no Calendar",
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
