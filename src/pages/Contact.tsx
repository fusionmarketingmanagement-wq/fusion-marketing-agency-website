import { useState, type FormEvent } from 'react'
import { Seo } from '@/components/seo/Seo'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Accordion } from '@/components/ui/Accordion'
import { Reveal } from '@/components/motion/Reveal'
import { siteConfig } from '@/data/site'
import { services } from '@/data/services'
import { cn } from '@/lib/utils'

type FormState = {
  fullName: string
  businessName: string
  email: string
  phone: string
  service: string
  budget: string
  message: string
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const initialForm: FormState = {
  fullName: '',
  businessName: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  message: '',
}

const faq = [
  {
    id: 'response',
    question: 'How quickly will you respond?',
    answer: 'We aim to respond within one business day during Sunday–Thursday working hours.',
  },
  {
    id: 'call',
    question: 'Is the strategy call really free?',
    answer: 'Yes. The first conversation is a free audit-oriented discussion to see if we are a fit.',
  },
  {
    id: 'whatsapp',
    question: 'Can I reach you on WhatsApp?',
    answer: 'Yes. Use the WhatsApp button for faster mobile outreach — we typically reply during business hours.',
  },
]

export function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [status, setStatus] = useState<FormStatus>('idle')

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.fullName.trim()) next.fullName = 'Full name is required'
    if (!form.businessName.trim()) next.businessName = 'Business name is required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Enter a valid email'
    }
    if (!form.service) next.service = 'Select a service'
    if (!form.message.trim()) next.message = 'Message is required'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (!validate()) return

    setStatus('submitting')

    // Demo handler — replace with your form endpoint when ready.
    const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        })
        if (!response.ok) throw new Error('Request failed')
      } else {
        await new Promise((resolve) => setTimeout(resolve, 700))
      }
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  const fieldClass = (key: keyof FormState) =>
    cn(
      'w-full rounded-2xl border bg-background-soft px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-text-soft',
      errors[key]
        ? 'border-destructive focus:border-destructive'
        : 'border-border focus:border-charcoal focus:bg-surface focus:shadow-[0_0_0_4px_var(--focus-ring)]',
    )

  return (
    <>
      <Seo
        title="Contact Us | Fusion Marketing Management — Dubai Digital Marketing Agency"
        description="Contact Fusion Marketing Management in Business Bay, Dubai for a free growth plan discussion."
        path="/contact"
      />

      <section className="pt-28 md:pt-32">
        <div className="container-shell pb-12">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Let’s map your free growth plan."
              description="Share a few details and we’ll follow up with clear next steps. Form submissions are demo-mode until a backend endpoint is configured."
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-[2rem] border border-border bg-surface p-6 shadow-[var(--shadow-md)] md:p-8"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <label className="block text-sm">
                  <span className="mb-2 block text-muted-foreground">Full name</span>
                  <input
                    className={fieldClass('fullName')}
                    value={form.fullName}
                    onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
                    autoComplete="name"
                  />
                  {errors.fullName ? <span className="mt-1 block text-xs text-destructive">{errors.fullName}</span> : null}
                </label>
                <label className="block text-sm">
                  <span className="mb-2 block text-muted-foreground">Business name</span>
                  <input
                    className={fieldClass('businessName')}
                    value={form.businessName}
                    onChange={(e) => setForm((f) => ({ ...f, businessName: e.target.value }))}
                    autoComplete="organization"
                  />
                  {errors.businessName ? (
                    <span className="mt-1 block text-xs text-destructive">{errors.businessName}</span>
                  ) : null}
                </label>
                <label className="block text-sm">
                  <span className="mb-2 block text-muted-foreground">Email</span>
                  <input
                    type="email"
                    className={fieldClass('email')}
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    autoComplete="email"
                  />
                  {errors.email ? <span className="mt-1 block text-xs text-destructive">{errors.email}</span> : null}
                </label>
                <label className="block text-sm">
                  <span className="mb-2 block text-muted-foreground">Phone</span>
                  <input
                    type="tel"
                    className={fieldClass('phone')}
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    autoComplete="tel"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-2 block text-muted-foreground">Required service</span>
                  <select
                    className={fieldClass('service')}
                    value={form.service}
                    onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                  {errors.service ? <span className="mt-1 block text-xs text-destructive">{errors.service}</span> : null}
                </label>
                <label className="block text-sm">
                  <span className="mb-2 block text-muted-foreground">Monthly marketing budget</span>
                  <select
                    className={fieldClass('budget')}
                    value={form.budget}
                    onChange={(e) => setForm((f) => ({ ...f, budget: e.target.value }))}
                  >
                    <option value="">Select a range</option>
                    <option value="under-10k">Under AED 10k</option>
                    <option value="10-25k">AED 10k – 25k</option>
                    <option value="25-50k">AED 25k – 50k</option>
                    <option value="50k-plus">AED 50k+</option>
                  </select>
                </label>
              </div>
              <label className="mt-4 block text-sm">
                <span className="mb-2 block text-muted-foreground">Message</span>
                <textarea
                  rows={5}
                  className={fieldClass('message')}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                />
                {errors.message ? <span className="mt-1 block text-xs text-destructive">{errors.message}</span> : null}
              </label>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button type="submit" size="lg" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending…' : 'Send message'}
                </Button>
                <p className="text-xs text-muted-foreground">
                  Demo handler active
                  {import.meta.env.VITE_FORM_ENDPOINT ? ' · endpoint configured' : ' · set VITE_FORM_ENDPOINT to connect'}
                </p>
              </div>

              {status === 'success' ? (
                <p className="mt-4 rounded-2xl border border-success/25 bg-success-soft px-4 py-3 text-sm text-success" role="status">
                  Demo success: your message was validated locally. No data was sent to a live backend unless an endpoint is configured.
                </p>
              ) : null}
              {status === 'error' ? (
                <p className="mt-4 rounded-2xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive" role="alert">
                  Something went wrong submitting to the configured endpoint. Please try again or email us directly.
                </p>
              ) : null}
            </form>
          </Reveal>

          <div className="space-y-4">
            <Reveal>
              <div className="rounded-3xl border border-border bg-surface p-6 shadow-[var(--shadow-sm)]">
                <h2 className="font-display text-xl">Business details</h2>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li>
                    <span className="block text-foreground">{siteConfig.address.line1}</span>
                    {siteConfig.address.line2}
                  </li>
                  <li>
                    <a href={`mailto:${siteConfig.email}`} className="hover:text-ink">
                      {siteConfig.email}
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${siteConfig.phoneTel}`} className="hover:text-ink">
                      {siteConfig.phone}
                    </a>
                  </li>
                  <li>
                    {siteConfig.hours.weekdays}
                    <br />
                    {siteConfig.hours.weekend}
                  </li>
                </ul>
                <Button href={siteConfig.whatsappUrl} external className="mt-6 w-full sm:w-auto">
                  WhatsApp Us
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-[var(--shadow-sm)]">
                <div className="relative aspect-[16/11]">
                  <img
                    src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80"
                    alt="Dubai skyline near Business Bay"
                    width={1200}
                    height={825}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-border bg-surface-elevated p-4 shadow-[var(--shadow-sm)] backdrop-blur">
                    <p className="font-display text-sm">{siteConfig.address.line1}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{siteConfig.address.line2}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background-soft py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-2">
          <SectionHeading eyebrow="FAQ" title="Contact FAQ" />
          <Accordion items={faq} />
        </div>
      </section>
    </>
  )
}
