import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "QR da Bella | Bella",
  robots: { index: false, follow: false },
}

export default function QrPage() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-white px-6 py-10">
      <p className="font-serif text-2xl font-medium text-[#0F0F0F]">
        bella<span className="text-[#FF6F61]">.</span>
      </p>
      <p className="mt-2 text-center text-[17px] text-[#404040]">
        Aponte a câmera e converse com a Bella
      </p>
      <div className="mt-6 rounded-3xl border border-[#ECECEC] bg-white p-4 shadow-[0_20px_60px_-20px_rgba(15,15,15,0.25)]">
        <Image src="/qr-bella.png" alt="QR code da Bella no WhatsApp" width={320} height={320} priority />
      </div>
      <p className="mt-6 text-center text-sm text-[#737373]">
        Teste como se fosse cliente. Ela responde na hora.
      </p>
      <Link href="/campo" className="mt-10 text-sm text-[#737373]">
        ← campo
      </Link>
    </main>
  )
}
