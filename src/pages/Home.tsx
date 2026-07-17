import { MessageCircle } from 'lucide-react'
import { Seo } from '@/components/seo/Seo'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { CaseStudyCard } from '@/components/ui/CaseStudyCard'
import { Accordion, AnimatedCounter, MetricCard } from '@/components/ui/Accordion'
import { Testimonials } from '@/components/ui/unique-testimonial'
import { EpochHero } from '@/components/ui/EpochHero'
import { Reveal, StaggerContainer, StaggerItem } from '@/components/motion/Reveal'
import { services, processSteps } from '@/data/services'
import { caseStudies } from '@/data/caseStudies'
import { siteConfig } from '@/data/site'

const whyPoints = [
  {
    title: 'Strategy before execution',
    description:
      'Every engagement starts with commercial goals, tracking reality and funnel gaps — not a media plan template.',
  },
  {
    title: 'Connected marketing systems',
    description:
      'Paid media, creative, web and automation share one brief so channels reinforce each other.',
  },
  {
    title: 'Conversion-focused creative',
    description:
      'Messaging is built for Dubai buyers and tested against the metrics that matter to sales.',
  },
  {
    title: 'Transparent performance tracking',
    description:
      'You always know cost-per-lead, pipeline contribution and what changed week to week.',
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

      <EpochHero />

      <div className="bg-background text-foreground">
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

        <section className="bg-background-soft py-20 md:py-28">
          <div className="container-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface p-6 shadow-[var(--shadow-md)] md:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(17,17,17,0.06),transparent_55%)]" />
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
                      <div
                        key={item.label}
                        className="rounded-2xl border border-border bg-background-soft p-4"
                      >
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
                  <div className="rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow-sm)]">
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

        <section className="border-y border-border bg-background-soft py-20 md:py-28">
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
              <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-[linear-gradient(90deg,rgba(17,17,17,0.08),rgba(17,17,17,0.55),rgba(17,17,17,0.08))] md:block" />
              {processSteps.map((step, index) => (
                <Reveal key={step.step} delay={index * 0.08}>
                  <div className="relative rounded-3xl border border-border bg-surface p-5 shadow-[var(--shadow-sm)]">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-charcoal font-mono text-xs text-text-inverse">
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

        <section className="bg-background-soft py-20 md:py-28">
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
              <div className="relative overflow-hidden rounded-[2rem] border border-[#d8dce2] bg-[linear-gradient(135deg,#ffffff,#eceef1)] px-6 py-14 text-center shadow-[var(--shadow-lg)] md:px-12">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(17,17,17,0.07),transparent_52%)]" />
                <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
                <div className="relative">
                  <h2 className="mx-auto max-w-2xl text-balance text-[clamp(1.8rem,4vw,3rem)]">
                    Ready to build a stronger growth system?
                  </h2>
                  <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                    Book a free strategy call or message us on WhatsApp. We&apos;ll map where growth
                    is leaking and what to fix first.
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
      </div>
    </>
  )
}
