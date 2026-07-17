import { Suspense, lazy } from 'react'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Seo } from '@/components/seo/Seo'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { CaseStudyCard } from '@/components/ui/CaseStudyCard'
import { Accordion, AnimatedCounter, MetricCard } from '@/components/ui/Accordion'
import { Testimonials } from '@/components/ui/unique-testimonial'
import { Reveal, StaggerContainer, StaggerItem, MagneticButton } from '@/components/motion/Reveal'
import { services, processSteps } from '@/data/services'
import { caseStudies } from '@/data/caseStudies'
import { siteConfig } from '@/data/site'

const GrowthEngineScene = lazy(() =>
  import('@/components/three/GrowthEngineScene').then((m) => ({ default: m.GrowthEngineScene })),
)

const platforms = ['Google', 'Meta', 'Shopify', 'HubSpot', 'TikTok', 'WordPress']

const whyPoints = [
  {
    title: 'Strategy before execution',
    description: 'Every engagement starts with commercial goals, tracking reality and funnel gaps — not a media plan template.',
  },
  {
    title: 'Connected marketing systems',
    description: 'Paid media, creative, web and automation share one brief so channels reinforce each other.',
  },
  {
    title: 'Conversion-focused creative',
    description: 'Messaging is built for Dubai buyers and tested against the metrics that matter to sales.',
  },
  {
    title: 'Transparent performance tracking',
    description: 'You always know cost-per-lead, pipeline contribution and what changed week to week.',
  },
]

const homeFaq = [
  {
    id: 'who',
    question: 'Who is Fusion built for?',
    answer:
      'Business owners, entrepreneurs and corporates in Dubai and the UAE who need measurable leads and sales — not vanity metrics.',
  },
  {
    id: 'start',
    question: 'How do engagements start?',
    answer:
      'With a free strategy conversation and audit of tracking, offers, creative and channel mix. From there we propose a clear growth plan.',
  },
]

export function HomePage() {
  return (
    <>
      <Seo
        title="Fusion Marketing Management | Digital Marketing Agency in Dubai"
        description={siteConfig.description}
        path="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'MarketingAgency',
          name: siteConfig.name,
          url: siteConfig.url,
          telephone: siteConfig.phoneTel,
          email: siteConfig.email,
          image: siteConfig.ogImage,
          address: {
            '@type': 'PostalAddress',
            streetAddress: siteConfig.address.line1,
            addressLocality: 'Business Bay, Dubai',
            addressCountry: 'AE',
          },
          areaServed: 'United Arab Emirates',
          sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
        }}
      />

      <section className="relative overflow-hidden pt-28 md:pt-32">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" aria-hidden />
        <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-accent/20 blur-[100px]" aria-hidden />
        <div className="pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-accent-secondary/15 blur-[110px]" aria-hidden />

        <div className="container-shell grid items-center gap-12 pb-20 lg:grid-cols-2 lg:gap-16 lg:pb-28">
          <div>
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                Dubai Growth &amp; Automation Agency
              </p>
              <h1 className="mt-5 max-w-xl text-balance text-[clamp(2.2rem,5vw,4rem)] font-semibold">
                Marketing systems built to generate{' '}
                <span className="text-gradient">measurable growth</span>.
              </h1>
              <p className="mt-6 max-w-lg text-pretty text-base text-muted-foreground md:text-lg">
                Fusion Marketing Management combines paid media, AI automation, social strategy and high-performance web
                experiences to turn attention into qualified leads and sales.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <MagneticButton>
                  <Button href="/contact" size="lg" className="w-full sm:w-auto">
                    Get Your Free Growth Plan
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </MagneticButton>
                <Button href="/case-studies" variant="outline" size="lg" className="w-full sm:w-auto">
                  View Our Work
                </Button>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Built for ambitious businesses in Dubai and beyond.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="flex justify-center lg:justify-end">
            <Suspense
              fallback={
                <div className="aspect-square w-full max-w-lg animate-pulse rounded-[2rem] border border-border bg-surface" />
              }
            >
              <GrowthEngineScene />
            </Suspense>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-background-secondary/80 py-8">
        <div className="container-shell">
          <p className="mb-5 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Platforms we build growth systems on
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {platforms.map((name) => (
              <span
                key={name}
                className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted-foreground"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Services"
              title="Six disciplines. One growth engine."
              description="Every service is designed to compound the others — paid media fuels data, data fuels automation, automation fuels faster, cheaper leads."
              className="mb-12"
            />
          </Reveal>
          <StaggerContainer className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <StaggerItem key={service.id}>
                <ServiceCard service={service} />
              </StaggerItem>
            ))}
          </StaggerContainer>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Plus digital content creation as a supporting capability across campaigns.
          </p>
        </div>
      </section>

      <section className="bg-background-secondary py-20 md:py-28">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface p-6 md:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(108,124,255,0.18),transparent_55%)]" />
              <div className="relative">
                <SectionHeading
                  eyebrow="Why Fusion"
                  title="Marketing held accountable to revenue, not reach."
                  description="We're not a content mill or a media-buying black box. Every engagement answers one question: did this move inquiries and sales?"
                />
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    { label: 'Avg. sample ROAS', value: '4.8x' },
                    { label: 'Sample CPL reduction', value: '63%' },
                    { label: 'Industries supported', value: '12+' },
                    { label: 'UAE market focus', value: 'Local' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl border border-border bg-background/50 p-4">
                      <p className="font-display text-2xl text-foreground">{item.value}</p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
          <StaggerContainer className="space-y-4">
            {whyPoints.map((point) => (
              <StaggerItem key={point.title}>
                <div className="rounded-2xl border border-border bg-surface p-5">
                  <h3 className="font-display text-lg text-foreground">{point.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{point.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Results"
              title="Sample performance signals"
              description="Figures below are illustrative placeholders until verified client metrics are published."
              className="mb-10"
            />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <MetricCard
              value={<AnimatedCounter value={240} suffix="+" />}
              label="Campaigns launched"
              note="Sample figure"
            />
            <MetricCard
              value={<AnimatedCounter value={18} suffix="k+" />}
              label="Qualified leads supported"
              note="Sample figure"
            />
            <MetricCard
              value={<AnimatedCounter value={12} suffix="+" />}
              label="Industries served"
              note="Sample figure"
            />
            <MetricCard
              value={<AnimatedCounter value={92} suffix="%" />}
              label="Client retention"
              note="Sample figure"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-background-secondary py-20 md:py-28">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Process"
              title="A connected path from audit to scale"
              className="mb-12"
            />
          </Reveal>
          <div className="relative grid gap-4 md:grid-cols-4">
            <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent md:block" />
            {processSteps.map((step, index) => (
              <Reveal key={step.step} delay={index * 0.08}>
                <div className="relative rounded-3xl border border-border bg-surface p-5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 bg-accent/10 font-mono text-xs text-accent">
                    {step.step}
                  </span>
                  <h3 className="mt-4 font-display text-xl">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Case studies"
              title="Illustrative growth scenarios"
              description="Sample case cards showing how we structure challenges, approaches and outcomes."
              className="mb-10"
            />
          </Reveal>
          <div className="grid gap-4 lg:grid-cols-2">
            {caseStudies.slice(0, 3).map((study, index) => (
              <CaseStudyCard key={study.id} study={study} featured={index === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-secondary py-20 md:py-28">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Testimonials"
              title="What growth-focused teams say"
              className="mb-4"
            />
          </Reveal>
          <Testimonials />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-shell grid gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Quick answers before we talk" />
          </Reveal>
          <Accordion items={homeFaq} />
        </div>
      </section>

      <section className="pb-24">
        <div className="container-shell">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface px-6 py-14 text-center md:px-12">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(108,124,255,0.28),transparent_55%)]" />
              <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
              <div className="relative">
                <h2 className="mx-auto max-w-2xl text-balance text-[clamp(1.8rem,4vw,3rem)]">
                  Ready to build a stronger growth system?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                  Book a free strategy call or message us on WhatsApp. We&apos;ll map where growth is leaking and what to fix first.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button href="/contact" size="lg">
                    Book Free Strategy Call
                  </Button>
                  <Button href={siteConfig.whatsappUrl} external variant="outline" size="lg">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Us
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
