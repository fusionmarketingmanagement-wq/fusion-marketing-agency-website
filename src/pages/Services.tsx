import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Seo } from '@/components/seo/Seo'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Accordion } from '@/components/ui/Accordion'
import { Reveal } from '@/components/motion/Reveal'
import { processSteps, services } from '@/data/services'
import { Bot, Code2, Megaphone, PenLine, Share2, ShoppingCart, Users } from 'lucide-react'

const icons = {
  megaphone: Megaphone,
  bot: Bot,
  share: Share2,
  cart: ShoppingCart,
  users: Users,
  code: Code2,
  pen: PenLine,
} as const

const faq = [
  {
    id: 'budget',
    question: 'What budgets do you typically work with?',
    answer:
      'We work with growth-stage budgets where media, creative and tracking can be instrumented properly. Exact ranges depend on channel mix and offer maturity — we’ll advise honestly in the strategy call.',
  },
  {
    id: 'timeline',
    question: 'How quickly can we launch?',
    answer:
      'Most engagements begin with an audit, then a build sprint for tracking, pages and campaigns. Launch timing depends on asset readiness and approval cycles.',
  },
  {
    id: 'reporting',
    question: 'How do you report performance?',
    answer:
      'Plain-language weekly or bi-weekly reporting focused on cost-per-lead, qualified inquiries, ROAS where relevant, and the decisions those numbers drive.',
  },
  {
    id: 'ai',
    question: 'Do you replace our team with AI?',
    answer:
      'No. Automation handles repetitive follow-up and reporting so your team spends more time on closing and strategy.',
  },
]

export function ServicesPage() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location.hash])

  return (
    <>
      <Seo
        title="Our Services | Google Ads, AI Automation & Social Media Marketing — Fusion"
        description="Explore Fusion Marketing Management services: paid media, AI automation, social, e-commerce ads, lead generation, website development and content creation."
        path="/services"
      />

      <section className="pt-28 md:pt-32">
        <div className="container-shell pb-12">
          <Reveal>
            <SectionHeading
              eyebrow="Services"
              title="Six primary disciplines, plus content that supports them all."
              description="Each service is built to compound the others — so channels share data, creative and conversion paths."
            />
          </Reveal>
        </div>
      </section>

      <div className="sticky top-[76px] z-30 border-y border-border bg-surface-elevated/95 backdrop-blur-xl">
        <div className="container-shell flex gap-2 overflow-x-auto py-3">
          {services.map((service) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="whitespace-nowrap rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted-foreground shadow-[var(--shadow-sm)] hover:border-border-dark hover:bg-accent-soft hover:text-ink"
            >
              {service.title}
            </a>
          ))}
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="container-shell space-y-16">
          {services.map((service) => {
            const Icon = icons[service.icon]
            return (
              <Reveal key={service.id}>
                <article
                  id={service.id}
                  className="scroll-mt-36 grid gap-8 rounded-[2rem] border border-border bg-surface p-6 shadow-[var(--shadow-md)] md:grid-cols-[0.9fr_1.1fr] md:p-10"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#dde1e7] bg-[#eef0f3] text-charcoal">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {service.number}
                    </p>
                    <h2 className="mt-2 font-display text-3xl">{service.title}</h2>
                    <p className="mt-4 text-muted-foreground">{service.short}</p>
                    <Button href="/contact" className="mt-8">
                      {service.cta}
                    </Button>
                  </div>
                  <div className="grid gap-4">
                    <div className="rounded-2xl border border-border bg-background-soft p-5">
                      <h3 className="font-display text-lg">Business problem</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{service.problem}</p>
                    </div>
                    <div className="rounded-2xl border border-border bg-background-soft p-5">
                      <h3 className="font-display text-lg">Solution</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{service.solution}</p>
                    </div>
                    <div className="rounded-2xl border border-border bg-background-soft p-5">
                      <h3 className="font-display text-lg">Deliverables</h3>
                      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                        {service.deliverables.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-[#d9dde3] bg-[#f1f2f4] p-5">
                      <h3 className="font-display text-lg">Expected business impact</h3>
                      <p className="mt-2 text-sm text-foreground/90">{service.impact}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="border-y border-border bg-background-soft py-20">
        <div className="container-shell">
          <SectionHeading align="center" eyebrow="Process" title="How engagements move" className="mb-10" />
          <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="flex h-full min-h-[240px] flex-col rounded-3xl border border-border bg-surface p-6 shadow-[var(--shadow-sm)]"
              >
                <p className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-charcoal font-mono text-xs text-white">
                  {step.step}
                </p>
                <h3 className="mt-5 font-display text-xl text-foreground">{step.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-2">
          <SectionHeading eyebrow="FAQ" title="Services questions" />
          <Accordion items={faq} />
        </div>
      </section>

      <section className="pb-24">
        <div className="container-shell">
          <div className="rounded-[2rem] border border-border bg-surface px-6 py-12 text-center shadow-[var(--shadow-md)]">
            <h2 className="text-3xl">Ready to map the right service mix?</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Book a free strategy call and we&apos;ll recommend the system — not a random channel list.
            </p>
            <Button href="/contact" size="lg" className="mt-8">
              Book Free Strategy Call
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
