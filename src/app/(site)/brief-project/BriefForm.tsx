"use client";

import { useActionState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { briefUpload, budgets, businessTypes, deadlines, features } from "@/content/brief";
import { siteConfig } from "@/content/site";
import { waLink } from "@/lib/wa";
import { CtaLink } from "@/components/ui/CtaLink";
import { submitBrief, type BriefFormState } from "./actions";

const initialState: BriefFormState = { status: "idle" };

const inputClass =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";
const labelClass = "mb-1.5 block text-sm font-semibold text-ink";

export function BriefForm() {
  const [state, formAction, pending] = useActionState(submitBrief, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-line bg-white p-8 text-center sm:p-12">
        <CheckCircle2 className="mx-auto size-12 text-secondary" />
        <h2 className="mt-4 text-xl font-bold text-ink">Brief Anda sudah kami terima!</h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted">
          Tim kami akan menghubungi Anda via WhatsApp dalam 1×24 jam kerja. Ingin
          respon lebih cepat? Chat kami langsung.
        </p>
        <div className="mt-6">
          <CtaLink href={waLink(siteConfig.waMessages.default)} variant="whatsapp" track="whatsapp" place="brief">
            Chat via WhatsApp
          </CtaLink>
        </div>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="rounded-2xl border border-line bg-white p-6 sm:p-10"
      aria-describedby={state.status === "error" ? "form-error" : undefined}
    >
      {/* Honeypot: hidden from humans, bots fill it. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Nama <span className="text-primary">*</span>
          </label>
          <input id="name" name="name" required className={inputClass} placeholder="Nama Anda" />
        </div>
        <div>
          <label htmlFor="whatsapp" className={labelClass}>
            Nomor WhatsApp <span className="text-primary">*</span>
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            required
            inputMode="tel"
            className={inputClass}
            placeholder="08xxxxxxxxxx"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={inputClass}
            placeholder="nama@email.com"
          />
        </div>
        <div>
          <label htmlFor="businessType" className={labelClass}>
            Jenis bisnis
          </label>
          <select id="businessType" name="businessType" className={inputClass} defaultValue="">
            <option value="" disabled>
              Pilih jenis bisnis
            </option>
            {businessTypes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className={labelClass}>
            Perkiraan budget
          </label>
          <select id="budget" name="budget" className={inputClass} defaultValue="">
            <option value="" disabled>
              Pilih rentang budget
            </option>
            {budgets.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="deadline" className={labelClass}>
            Target selesai
          </label>
          <select id="deadline" name="deadline" className={inputClass} defaultValue="">
            <option value="" disabled>
              Pilih target waktu
            </option>
            {deadlines.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <fieldset className="mt-6">
        <legend className={labelClass}>Fitur yang dibutuhkan</legend>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {features.map((option) => (
            <label
              key={option.value}
              className="flex cursor-pointer items-center gap-2.5 rounded-xl border border-line px-4 py-2.5 text-sm text-ink transition-colors has-checked:border-primary has-checked:bg-primary-soft"
            >
              <input
                type="checkbox"
                name="features"
                value={option.value}
                className="size-4 accent-primary"
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-6">
        <label htmlFor="message" className={labelClass}>
          Ceritakan kebutuhan Anda
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={inputClass}
          placeholder="Contoh: Saya punya usaha katering dan butuh website untuk katalog menu + pemesanan via WhatsApp..."
        />
      </div>

      <div className="mt-6">
        <label htmlFor="attachments" className={labelClass}>
          Lampiran (opsional)
        </label>
        <input
          id="attachments"
          name="attachments"
          type="file"
          multiple
          accept={briefUpload.accept.join(",")}
          className="block w-full text-sm text-muted file:mr-4 file:rounded-lg file:border-0 file:bg-primary-soft file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-primary-dark hover:file:bg-primary/10"
        />
        <p className="mt-1.5 text-xs text-muted">
          Maksimal {briefUpload.maxFiles} file, {briefUpload.maxFileSizeMB}MB per file: logo,
          contoh desain, atau dokumen brief.
        </p>
      </div>

      {state.status === "error" && (
        <p id="form-error" role="alert" className="mt-5 text-sm font-medium text-red-600">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-colors hover:bg-primary-dark disabled:opacity-60 sm:w-auto"
      >
        {pending && <Loader2 className="size-4 animate-spin" />}
        {pending ? "Mengirim..." : "Kirim Brief"}
      </button>
    </form>
  );
}
