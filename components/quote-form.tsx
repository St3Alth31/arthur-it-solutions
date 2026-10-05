"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Check } from "lucide-react"
import { copy, type Copy } from "@/content/copy"
import { serviceKeys, site, whatsappLink, type ServiceKey } from "@/content/site"
import { useLanguage } from "@/components/language-provider"
import { serviceIcons } from "@/components/service-icons"
import { NAVIGATE_EVENT, type NavigateDetail } from "@/lib/scroll-to"

type QuoteState = {
  services: ServiceKey[]
  scope: Partial<Record<ServiceKey, string>>
  propertyType: string
  location: string
  otherArea: string
  name: string
  phone: string
  method: string
  notes: string
}

const empty: QuoteState = {
  services: [],
  scope: {},
  propertyType: "",
  location: "",
  otherArea: "",
  name: "",
  phone: "",
  method: "whatsapp",
  notes: "",
}

const STEP_COUNT = 4

const isServiceKey = (v: string | null): v is ServiceKey => !!v && (serviceKeys as readonly string[]).includes(v)

const labelOf = (options: { value: string; label: string }[], value: string) =>
  options.find((o) => o.value === value)?.label ?? value

/** Rows echoed back on confirmation and sent to the client, in the given language. */
function summarise(t: Copy, s: QuoteState) {
  const f = t.form
  const details = s.services
    .filter((key) => s.scope[key])
    .map((key) => `${t.services.items[key].title}: ${labelOf(f.scope.questions[key].options, s.scope[key]!)}`)
  const location =
    s.location === "other" ? s.otherArea.trim() : labelOf(f.property.locations, s.location)

  return [
    { label: f.summary.services, value: s.services.map((key) => t.services.items[key].title).join(", ") },
    { label: f.summary.details, value: details.join("; ") },
    { label: f.summary.property, value: labelOf(f.property.types, s.propertyType) },
    { label: f.summary.location, value: location },
    { label: f.summary.name, value: s.name.trim() },
    { label: f.summary.phone, value: s.phone.trim() },
    { label: f.summary.method, value: labelOf(f.contact.methods, s.method) },
    { label: f.summary.notes, value: s.notes.trim() },
  ].filter((row) => row.value)
}

/** The client reads requests in English, whatever language the visitor used. */
const messageFor = (s: QuoteState) =>
  ["Quote request from the website", ...summarise(copy.en, s).map((r) => `${r.label}: ${r.value}`)].join("\n")

const labelClass = "label text-white/70 mb-2 block"
const inputClass =
  "h-12 w-full rounded-none border border-white/20 bg-transparent px-4 text-base text-white placeholder:text-white/35 focus:border-yellow focus:outline-none transition-colors"
const errorClass = "label text-sm text-yellow mt-2"

/** Radio group drawn as selectable tiles. */
function ChoiceGroup({
  name,
  legend,
  options,
  value,
  onChange,
  error,
  columns = "sm:grid-cols-3",
}: {
  name: string
  legend: string
  options: { value: string; label: string }[]
  value: string
  onChange: (v: string) => void
  error?: string
  columns?: string
}) {
  return (
    <fieldset aria-describedby={error ? `${name}-error` : undefined}>
      <legend className={labelClass}>{legend}</legend>
      <div className={`grid grid-cols-2 ${columns} gap-2`}>
        {options.map((o) => {
          const checked = value === o.value
          return (
            <label
              key={o.value}
              className={`flex items-center min-h-12 px-4 py-2.5 border cursor-pointer text-[0.95rem] leading-snug transition-colors duration-200 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-yellow has-[:focus-visible]:outline-offset-2 ${
                checked
                  ? "border-yellow bg-night-raised text-white"
                  : "border-white/15 text-white/75 hover:border-white/40"
              }`}
            >
              <input
                type="radio"
                name={name}
                value={o.value}
                checked={checked}
                onChange={() => onChange(o.value)}
                className="sr-only"
              />
              {o.label}
            </label>
          )
        })}
      </div>
      {error && (
        <p id={`${name}-error`} className={errorClass}>
          {error}
        </p>
      )}
    </fieldset>
  )
}

export function QuoteForm() {
  const { t } = useLanguage()
  const f = t.form

  const [state, setState] = useState<QuoteState>(empty)
  const [step, setStep] = useState(0)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)
  const [sendError, setSendError] = useState(false)
  const [done, setDone] = useState<null | "sent" | "handoff">(null)

  const headingRef = useRef<HTMLHeadingElement>(null)
  const interacted = useRef(false)

  const update = (patch: Partial<QuoteState>) => setState((s) => ({ ...s, ...patch }))

  // Pre-select from ?service= (service tiles) and ?location=other (areas section).
  useEffect(() => {
    const apply = (params: URLSearchParams) => {
      const service = params.get("service")
      const location = params.get("location")
      if (!isServiceKey(service) && location !== "other") return
      setDone(null)
      setStep(0)
      setState((s) => ({
        ...s,
        services: isServiceKey(service) && !s.services.includes(service) ? [...s.services, service] : s.services,
        location: location === "other" ? "other" : s.location,
      }))
    }
    apply(new URLSearchParams(window.location.search))
    const onNavigate = (e: Event) => {
      const { id, params } = (e as CustomEvent<NavigateDetail>).detail
      if (id === "quote") apply(params)
    }
    window.addEventListener(NAVIGATE_EVENT, onNavigate)
    return () => window.removeEventListener(NAVIGATE_EVENT, onNavigate)
  }, [])

  // Move focus to the new step's heading so keyboard and screen reader users follow along.
  useEffect(() => {
    if (interacted.current) headingRef.current?.focus({ preventScroll: true })
  }, [step, done])

  const validate = (target: number) => {
    const e: Record<string, string> = {}
    if (target === 0 && state.services.length === 0) e.services = f.services.error
    if (target === 2) {
      if (!state.propertyType) e.propertyType = f.property.typeError
      if (!state.location) e.location = f.property.locationError
      else if (state.location === "other" && !state.otherArea.trim()) e.otherArea = f.property.otherError
    }
    if (target === 3) {
      if (!state.name.trim()) e.name = f.contact.nameError
      if (state.phone.replace(/\D/g, "").length < 9) e.phone = f.contact.phoneError
      if (!state.method) e.method = f.contact.methodError
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const goTo = (target: number) => {
    interacted.current = true
    setErrors({})
    setStep(target)
  }

  const next = () => {
    if (validate(step)) goTo(step + 1)
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (step < STEP_COUNT - 1) return next()
    if (!validate(step)) return
    interacted.current = true

    if (!site.quoteEndpoint) {
      setDone("handoff")
      return
    }

    setSubmitting(true)
    setSendError(false)
    try {
      const rows = summarise(copy.en, state)
      const res = await fetch(site.quoteEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Quote request: ${rows[0].value} for ${state.name.trim()}`,
          ...Object.fromEntries(rows.map((r) => [r.label.toLowerCase().replace(/\s+/g, "_"), r.value])),
          language: t.langName,
        }),
      })
      if (!res.ok) throw new Error(`Quote endpoint responded ${res.status}`)
      setDone("sent")
    } catch {
      setSendError(true)
    } finally {
      setSubmitting(false)
    }
  }

  const reset = () => {
    interacted.current = true
    setState(empty)
    setStep(0)
    setDone(null)
    setErrors({})
  }

  if (done) {
    const rows = summarise(t, state)
    const handoff = done === "handoff"
    return (
      <div role="status" className="border border-night-line p-6 md:p-10">
        <Check className="h-8 w-8 text-yellow mb-6" aria-hidden />
        <h3 ref={headingRef} tabIndex={-1} className="font-display font-black text-5xl leading-none text-white mb-4 outline-none">
          {handoff ? f.done.handoffTitle : f.done.title}
        </h3>
        <p className="text-lg leading-[1.6] text-white/80 max-w-md">{handoff ? f.done.handoffBody : f.done.body}</p>

        {handoff && (
          <a
            href={whatsappLink(messageFor(state))}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 bg-primary px-6 py-3.5 label text-lg text-white hover:bg-primary-deep transition-colors duration-300"
          >
            {f.done.handoffCta}
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        )}

        <h4 className="label text-white/60 mt-12 mb-4">{f.done.summaryTitle}</h4>
        <dl className="border-t border-night-line">
          {rows.map((row) => (
            <div key={row.label} className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-1 sm:gap-6 py-3.5 border-b border-night-line">
              <dt className="label text-white/55">{row.label}</dt>
              <dd className="text-white/90 min-w-0 break-words">{row.value}</dd>
            </div>
          ))}
        </dl>

        {!handoff && (
          <p className="mt-6 text-white/65">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-white/40 hover:border-white hover:text-white transition-colors"
            >
              {f.done.fix}
            </a>
          </p>
        )}

        <button
          type="button"
          onClick={reset}
          className="mt-8 label text-yellow border-b border-yellow pb-0.5 hover:text-white hover:border-white transition-colors"
        >
          {f.done.again}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={submit} noValidate>
      {/* Progress: these steps are a real sequence, so they are numbered */}
      <ol className="grid grid-cols-4 gap-2 mb-10" aria-label={f.stepOf(step + 1, STEP_COUNT)}>
        {f.steps.map((name, i) => {
          const reachable = i < step
          const current = i === step
          return (
            <li key={name}>
              <button
                type="button"
                disabled={!reachable}
                onClick={() => goTo(i)}
                aria-current={current ? "step" : undefined}
                className={`w-full text-left pt-3 border-t-[3px] transition-colors duration-300 ${
                  current ? "border-primary text-white" : reachable ? "border-white/50 text-white/75 hover:text-white" : "border-white/15 text-white/40"
                } disabled:cursor-default`}
              >
                <span className="label text-sm tabular block">{i + 1}</span>
                <span className="label text-sm hidden sm:block">{name}</span>
              </button>
            </li>
          )
        })}
      </ol>

      {step === 0 && (
        <fieldset aria-describedby={errors.services ? "services-error" : undefined}>
          <legend>
            <h3 ref={headingRef} tabIndex={-1} className="font-display font-black text-4xl md:text-5xl leading-none text-white outline-none">
              {f.services.title}
            </h3>
            <p className="mt-3 text-white/65">{f.services.hint}</p>
          </legend>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-2">
            {serviceKeys.map((key) => {
              const Icon = serviceIcons[key]
              const checked = state.services.includes(key)
              return (
                <label
                  key={key}
                  className={`relative flex flex-col gap-4 p-4 md:p-5 min-h-[8.5rem] border cursor-pointer transition-colors duration-200 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-yellow has-[:focus-visible]:outline-offset-2 ${
                    checked ? "border-yellow bg-night-raised" : "border-white/15 hover:border-white/40"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() =>
                      update({
                        services: checked ? state.services.filter((s) => s !== key) : [...state.services, key],
                      })
                    }
                    className="sr-only"
                  />
                  <Icon className={`h-7 w-7 ${checked ? "text-yellow" : "text-white/70"}`} strokeWidth={1.5} aria-hidden />
                  <span className={`font-display font-bold text-xl leading-tight ${checked ? "text-white" : "text-white/85"}`}>
                    {t.services.items[key].title}
                  </span>
                  <span
                    aria-hidden
                    className={`absolute top-3 right-3 h-5 w-5 flex items-center justify-center border ${
                      checked ? "bg-yellow border-yellow text-night" : "border-white/30"
                    }`}
                  >
                    {checked && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
                  </span>
                </label>
              )
            })}
          </div>
          {errors.services && (
            <p id="services-error" role="alert" className={errorClass}>
              {errors.services}
            </p>
          )}
        </fieldset>
      )}

      {step === 1 && (
        <div>
          <h3 ref={headingRef} tabIndex={-1} className="font-display font-black text-4xl md:text-5xl leading-none text-white outline-none">
            {f.scope.title}
          </h3>
          <p className="mt-3 text-white/65">{f.scope.hint}</p>
          <div className="mt-8 space-y-8">
            {state.services.map((key) => (
              <ChoiceGroup
                key={key}
                name={`scope-${key}`}
                legend={f.scope.questions[key].q}
                options={f.scope.questions[key].options}
                value={state.scope[key] ?? ""}
                onChange={(v) => update({ scope: { ...state.scope, [key]: v } })}
              />
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 ref={headingRef} tabIndex={-1} className="font-display font-black text-4xl md:text-5xl leading-none text-white outline-none">
            {f.property.title}
          </h3>
          <div className="mt-8 space-y-8">
            <ChoiceGroup
              name="propertyType"
              legend={f.property.typeLabel}
              options={f.property.types}
              value={state.propertyType}
              onChange={(v) => update({ propertyType: v })}
              error={errors.propertyType}
              columns="sm:grid-cols-2"
            />
            <ChoiceGroup
              name="location"
              legend={f.property.locationLabel}
              options={f.property.locations}
              value={state.location}
              onChange={(v) => update({ location: v })}
              error={errors.location}
            />
            {state.location === "other" && (
              <div>
                <label htmlFor="q-other" className={labelClass}>
                  {f.property.otherLabel}
                </label>
                <input
                  id="q-other"
                  type="text"
                  value={state.otherArea}
                  onChange={(e) => update({ otherArea: e.target.value })}
                  aria-invalid={!!errors.otherArea}
                  aria-describedby={errors.otherArea ? "q-other-error" : undefined}
                  className={inputClass}
                />
                {errors.otherArea && (
                  <p id="q-other-error" className={errorClass}>
                    {errors.otherArea}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3 ref={headingRef} tabIndex={-1} className="font-display font-black text-4xl md:text-5xl leading-none text-white outline-none">
            {f.contact.title}
          </h3>
          <div className="mt-8 space-y-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="q-name" className={labelClass}>
                  {f.contact.nameLabel}
                </label>
                <input
                  id="q-name"
                  type="text"
                  autoComplete="name"
                  value={state.name}
                  onChange={(e) => update({ name: e.target.value })}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "q-name-error" : undefined}
                  className={inputClass}
                />
                {errors.name && (
                  <p id="q-name-error" className={errorClass}>
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="q-phone" className={labelClass}>
                  {f.contact.phoneLabel}
                </label>
                <input
                  id="q-phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="+265 881 000 000"
                  value={state.phone}
                  onChange={(e) => update({ phone: e.target.value })}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "q-phone-error" : "q-phone-hint"}
                  className={`${inputClass} tabular`}
                />
                {errors.phone ? (
                  <p id="q-phone-error" className={errorClass}>
                    {errors.phone}
                  </p>
                ) : (
                  <p id="q-phone-hint" className="text-sm text-white/50 mt-2">
                    {f.contact.phoneHint}
                  </p>
                )}
              </div>
            </div>

            <ChoiceGroup
              name="method"
              legend={f.contact.methodLabel}
              options={f.contact.methods}
              value={state.method}
              onChange={(v) => update({ method: v })}
              error={errors.method}
            />

            <div>
              <label htmlFor="q-notes" className={labelClass}>
                {f.contact.notesLabel}
              </label>
              <textarea
                id="q-notes"
                rows={4}
                value={state.notes}
                onChange={(e) => update({ notes: e.target.value })}
                placeholder={f.contact.notesPlaceholder}
                className={`${inputClass} h-auto py-3 resize-none`}
              />
            </div>
          </div>
        </div>
      )}

      {sendError && (
        <p role="alert" className="mt-8 text-yellow leading-[1.6]">
          {f.sendError}{" "}
          <a
            href={whatsappLink(messageFor(state))}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            {f.done.handoffCta}
          </a>
        </p>
      )}

      <div className="mt-10 pt-6 border-t border-night-line flex items-center justify-between gap-6">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => goTo(step - 1)}
            className="label text-white/70 hover:text-white border-b border-transparent hover:border-white/50 pb-0.5 transition-colors"
          >
            {f.back}
          </button>
        ) : (
          <span className="label text-white/45">{f.stepOf(1, STEP_COUNT)}</span>
        )}
        <button
          type="submit"
          disabled={submitting}
          className="group inline-flex items-center gap-2 bg-primary px-6 py-3.5 label text-lg text-white hover:bg-primary-deep disabled:opacity-60 disabled:cursor-wait transition-colors duration-300"
        >
          {step < STEP_COUNT - 1 ? f.next : submitting ? f.sending : f.submit}
          <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </button>
      </div>
    </form>
  )
}
