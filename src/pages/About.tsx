import { Seo } from '@/components/seo/Seo'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal, StaggerContainer, StaggerItem } from '@/components/motion/Reveal'
import { fusionPillars, team, timeline } from '@/data/about'
import { siteConfig } from '@/data/site'

export function AboutPage() {
  return (
    <>
      <Seo
        title="About Us | Fusion Marketing Management — Dubai Digital Marketing Agency"
        description="Learn how Fusion Marketing Management fuses paid media, AI automation, social, web and content into one growth engine for Dubai businesses."
        path="/about"
      />

      <section className="relative overflow-hidden pt-28 md:pt-32">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
        <div className="container-shell pb-16 md:pb-24">
          <Reveal>
            <SectionHeading
              eyebrow="About Fusion"
              title="Founded on a simple frustration with reports that never became revenue."
              description="Fusion started because a performance marketer and a data-automation engineer kept watching Dubai SMEs get burned by agencies that optimized for decks — not qualified leads."
            />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-background-secondary py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Our story"
              title="The agency we wished existed."
              description="Paid media, content, automation and web development working from one dashboard, one strategist, and one number that matters — qualified leads that turn into paying clients."
            />
          </Reveal>
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <Reveal key={item.year} delay={index * 0.06}>
                <div className="rounded-2xl border border-border bg-surface p-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                    {item.year} — {item.title}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-shell grid gap-4 md:grid-cols-3">
          {[
            {
              label: 'Mission',
              title: 'Make world-class growth marketing accessible to every Dubai business.',
              body: 'Not just corporates with in-house teams — the entrepreneur running their first campaign deserves the same rigor.',
            },
            {
              label: 'Vision',
              title: 'Become the AI-powered growth partner the UAE market defaults to.',
              body: 'Every client campaign informed by automation and instrumentation, not just intuition.',
            },
            {
              label: 'Promise',
              title: 'Transparent numbers, no vanity metrics.',
              body: 'You always know cost-per-lead, ROAS and pipeline value — reported plainly on a schedule you set.',
            },
          ].map((item) => (
            <Reveal key={item.label}>
              <div className="h-full rounded-3xl border border-border bg-surface p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">{item.label}</p>
                <h3 className="mt-4 font-display text-xl">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-background-secondary py-20 md:py-28">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <div className="absolute inset-0 rounded-full border border-border/70" />
              <div className="absolute inset-8 rounded-full border border-accent/25" />
              <div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/40 bg-accent/15 text-center shadow-[0_0_40px_rgba(108,124,255,0.25)]">
                <span className="font-display text-sm font-semibold leading-tight">
                  Growth
                  <br />
                  Engine
                </span>
              </div>
              {fusionPillars.map((pillar, index) => {
                const angle = (index / fusionPillars.length) * Math.PI * 2 - Math.PI / 2
                const radius = 42
                const x = 50 + Math.cos(angle) * radius
                const y = 50 + Math.sin(angle) * radius
                return (
                  <div
                    key={pillar}
                    className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-surface px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground shadow-lg"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    {pillar}
                  </div>
                )
              })}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="Fusion philosophy"
              title="Why we're not just an ads agency."
              description="The best results happen where disciplines collide — where targeting informs creative, and automation feeds the next strategic move."
            />
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li>Performance + Creative: ad data shapes what content we produce next.</li>
              <li>Automation + Strategy: AI handles repetition so strategists decide what moves revenue.</li>
              <li>Web + Ads: landing pages and campaigns are built together, never handed off separately.</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Built for the UAE"
              title="Local market fluency, not a copy-pasted global playbook."
              description="Dubai buyer behaviour, ad costs and platform mix don't match London or New York. We plan media in AED, understand Ramadan and summer seasonality, and build bilingual campaigns for Arabic and English audiences."
            />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-4">
                <h3 className="font-display text-lg">UAE ad compliance</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Campaigns structured within UAE advertising and data expectations from day one.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-4">
                <h3 className="font-display text-lg">Bilingual campaigns</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Arabic and English creative tested independently for each audience segment.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-[2rem] border border-border">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                alt="Premium Dubai workspace representing Fusion's local market focus"
                width={1200}
                height={900}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-background-secondary py-20 md:py-28">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Team"
              title="Strategists, builders and automators"
              description="Team portraits below use placeholder stock imagery."
              className="mb-10"
            />
          </Reveal>
          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <article className="overflow-hidden rounded-3xl border border-border bg-surface">
                  <img
                    src={member.image}
                    alt=""
                    width={500}
                    height={500}
                    loading="lazy"
                    className="aspect-square w-full object-cover"
                  />
                  <div className="p-5">
                    <h3 className="font-display text-lg">{member.name}</h3>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                      {member.role}
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-shell">
          <Reveal>
            <div className="rounded-[2rem] border border-border bg-surface px-6 py-12 text-center md:px-12">
              <h2 className="text-[clamp(1.8rem,3.5vw,2.75rem)]">Start the conversation</h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                Tell us where growth is stalling. We&apos;ll show you a clearer system.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="/contact" size="lg">
                  Get Free Proposal
                </Button>
                <Button href="/case-studies" variant="outline" size="lg">
                  See Sample Work
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{siteConfig.email}</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
