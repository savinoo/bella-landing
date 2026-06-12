"use client"

import { useRef, useState } from "react"
import { Check } from "lucide-react"

const INTAKE_URL = "https://savinoteam.tech/api/intake"
const TIMEOUT_MS = 15_000

const REQUIRED_FIELDS = [
  "clinic_name",
  "owner_name",
  "owner_whatsapp",
  "clinic_whatsapp",
  "business_hours_text",
  "procedures_text",
] as const

type Status = "idle" | "sending" | "success" | "error"
type FieldErrors = Record<string, string>

const inputBase =
  "w-full rounded-xl border bg-white px-4 text-base text-[#0F0F0F] placeholder:text-[#B5A69D] outline-none transition-colors focus:border-[#FF6F61] focus:ring-2 focus:ring-[#FF6F61]/20"

function fieldClass(hasError: boolean, extra = "h-13") {
  return `${inputBase} ${extra} ${hasError ? "border-red-400" : "border-[#EADFD8]"}`
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string
  name: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-medium text-[#0F0F0F]"
      >
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${name}-error`} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  )
}

function validate(data: FormData): FieldErrors {
  const errors: FieldErrors = {}
  for (const name of REQUIRED_FIELDS) {
    const value = String(data.get(name) ?? "").trim()
    if (!value) errors[name] = "Preenche esse campo pra continuar."
  }
  const deposit = String(data.get("deposit_threshold_brl") ?? "").trim()
  if (deposit && Number.isNaN(Number(deposit.replace(",", ".")))) {
    errors.deposit_threshold_brl = "Coloca só o número, tipo 150."
  }
  return errors
}

function buildPayload(data: FormData) {
  const text = (name: string) => String(data.get(name) ?? "").trim()
  const deposit = text("deposit_threshold_brl")
  return {
    clinic_name: text("clinic_name"),
    owner_name: text("owner_name"),
    owner_whatsapp: text("owner_whatsapp"),
    clinic_whatsapp: text("clinic_whatsapp"),
    address: text("address"),
    instagram: text("instagram"),
    business_hours_text: text("business_hours_text"),
    procedures_text: text("procedures_text"),
    voice_text: text("voice_text"),
    pix_key: text("pix_key"),
    deposit_threshold_brl: deposit ? Number(deposit.replace(",", ".")) : null,
    calendar_email: text("calendar_email"),
    consent_model_ok: data.get("consent_model_ok") === "on",
    notes: text("notes"),
    website: text("website"),
    source: "landing-instalacao",
  }
}

export function InstalacaoForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [errors, setErrors] = useState<FieldErrors>({})
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const fieldErrors = validate(data)
    setErrors(fieldErrors)
    if (Object.keys(fieldErrors).length > 0) {
      const firstInvalid = Object.keys(fieldErrors)[0]
      const el = form.elements.namedItem(firstInvalid)
      if (el instanceof HTMLElement) el.focus()
      return
    }

    setStatus("sending")
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
    try {
      const res = await fetch(INTAKE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buildPayload(data)),
        signal: controller.signal,
      })
      if (!res.ok) throw new Error(`intake respondeu ${res.status}`)
      setStatus("success")
    } catch {
      setStatus("error")
    } finally {
      clearTimeout(timer)
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-[#25D366]/40 bg-[#25D366]/10 p-8 text-center">
        <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#25D366]">
          <Check className="size-6 text-white" strokeWidth={3} />
        </span>
        <p className="mt-5 font-serif text-2xl font-medium tracking-[-0.01em] text-[#0F0F0F]">
          Recebido. A Bella começa a ser preparada agora.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle")
            setErrors({})
          }}
          className="mt-6 inline-flex h-12 items-center justify-center rounded-full border border-[#EADFD8] bg-white px-6 text-base font-medium text-[#0F0F0F] transition-colors hover:border-[#FF6F61]"
        >
          Preencher outra clínica
        </button>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
      <Field label="Nome da clínica" name="clinic_name" error={errors.clinic_name}>
        <input
          id="clinic_name"
          name="clinic_name"
          type="text"
          required
          autoComplete="organization"
          aria-invalid={Boolean(errors.clinic_name)}
          aria-describedby={errors.clinic_name ? "clinic_name-error" : undefined}
          className={fieldClass(Boolean(errors.clinic_name))}
        />
      </Field>

      <Field label="Nome da responsável" name="owner_name" error={errors.owner_name}>
        <input
          id="owner_name"
          name="owner_name"
          type="text"
          required
          autoComplete="name"
          aria-invalid={Boolean(errors.owner_name)}
          aria-describedby={errors.owner_name ? "owner_name-error" : undefined}
          className={fieldClass(Boolean(errors.owner_name))}
        />
      </Field>

      <Field
        label="WhatsApp da responsável"
        name="owner_whatsapp"
        error={errors.owner_whatsapp}
      >
        <input
          id="owner_whatsapp"
          name="owner_whatsapp"
          type="tel"
          required
          inputMode="tel"
          placeholder="(21) 99999-9999"
          aria-invalid={Boolean(errors.owner_whatsapp)}
          aria-describedby={
            errors.owner_whatsapp ? "owner_whatsapp-error" : undefined
          }
          className={fieldClass(Boolean(errors.owner_whatsapp))}
        />
      </Field>

      <Field
        label="WhatsApp da clínica que a Bella vai atender"
        name="clinic_whatsapp"
        error={errors.clinic_whatsapp}
      >
        <input
          id="clinic_whatsapp"
          name="clinic_whatsapp"
          type="tel"
          required
          inputMode="tel"
          placeholder="(21) 99999-9999"
          aria-invalid={Boolean(errors.clinic_whatsapp)}
          aria-describedby={
            errors.clinic_whatsapp ? "clinic_whatsapp-error" : undefined
          }
          className={fieldClass(Boolean(errors.clinic_whatsapp))}
        />
      </Field>

      <Field label="Endereço e bairro" name="address">
        <input
          id="address"
          name="address"
          type="text"
          autoComplete="street-address"
          className={fieldClass(false)}
        />
      </Field>

      <Field label="Instagram" name="instagram">
        <input
          id="instagram"
          name="instagram"
          type="text"
          placeholder="@clinica"
          autoComplete="off"
          className={fieldClass(false)}
        />
      </Field>

      <Field
        label="Horário de funcionamento"
        name="business_hours_text"
        error={errors.business_hours_text}
      >
        <input
          id="business_hours_text"
          name="business_hours_text"
          type="text"
          required
          placeholder="seg a sáb, 9h às 18h"
          aria-invalid={Boolean(errors.business_hours_text)}
          aria-describedby={
            errors.business_hours_text ? "business_hours_text-error" : undefined
          }
          className={fieldClass(Boolean(errors.business_hours_text))}
        />
      </Field>

      <Field
        label="Procedimentos, valores e duração"
        name="procedures_text"
        error={errors.procedures_text}
      >
        <textarea
          id="procedures_text"
          name="procedures_text"
          rows={6}
          required
          placeholder="Drenagem linfática, R$150, 60 min (um por linha)"
          aria-invalid={Boolean(errors.procedures_text)}
          aria-describedby={
            errors.procedures_text ? "procedures_text-error" : undefined
          }
          className={fieldClass(Boolean(errors.procedures_text), "py-3.5")}
        />
      </Field>

      <Field label="Como a clínica fala com a cliente" name="voice_text">
        <textarea
          id="voice_text"
          name="voice_text"
          rows={3}
          placeholder="carinhosa e direta, chama de você, usa emoji com moderação"
          className={fieldClass(false, "py-3.5")}
        />
      </Field>

      <Field label="Chave Pix da clínica (pro sinal de agendamento)" name="pix_key">
        <input
          id="pix_key"
          name="pix_key"
          type="text"
          autoComplete="off"
          className={fieldClass(false)}
        />
      </Field>

      <Field
        label="Cobrar sinal a partir de (R$)"
        name="deposit_threshold_brl"
        error={errors.deposit_threshold_brl}
      >
        <input
          id="deposit_threshold_brl"
          name="deposit_threshold_brl"
          type="number"
          min={0}
          step="any"
          inputMode="numeric"
          placeholder="150"
          aria-invalid={Boolean(errors.deposit_threshold_brl)}
          aria-describedby={
            errors.deposit_threshold_brl
              ? "deposit_threshold_brl-error"
              : undefined
          }
          className={fieldClass(Boolean(errors.deposit_threshold_brl))}
        />
      </Field>

      <Field label="E-mail da agenda Google" name="calendar_email">
        <input
          id="calendar_email"
          name="calendar_email"
          type="email"
          inputMode="email"
          autoComplete="email"
          className={fieldClass(false)}
        />
      </Field>

      <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-[#EADFD8] bg-white p-4">
        <input
          type="checkbox"
          name="consent_model_ok"
          className="mt-0.5 size-6 shrink-0 accent-[#25D366]"
        />
        <span className="text-base leading-snug text-[#0F0F0F]">
          Usar o termo de consentimento padrão da Bella
        </span>
      </label>

      <Field label="Observações" name="notes">
        <textarea
          id="notes"
          name="notes"
          rows={3}
          className={fieldClass(false, "py-3.5")}
        />
      </Field>

      {/* Honeypot. Humanos não veem nem preenchem. */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website">Não preencher</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "error" ? (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-base text-red-700">
          Não consegui enviar agora. Tenta de novo ou me chama no WhatsApp.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-6 text-base font-medium text-white shadow-[0_4px_14px_rgba(37,211,102,0.25)] transition-all duration-200 hover:bg-[#1EA952] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <span
              aria-hidden
              className="size-5 animate-spin rounded-full border-2 border-white/40 border-t-white"
            />
            Enviando
          </>
        ) : (
          "Enviar pra instalação"
        )}
      </button>
    </form>
  )
}
