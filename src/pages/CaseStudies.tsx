import { useMemo, useState } from 'react'
import { LayoutGroup, motion } from 'framer-motion'
import { Seo } from '@/components/seo/Seo'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CaseStudyCard } from '@/components/ui/CaseStudyCard'
import { MetricCard } from '@/components/ui/Accordion'
import { Reveal } from '@/components/motion/Reveal'
import { aggregateMetrics, caseStudies, caseStudyFilters } from '@/data/caseStudies'
import { cn } from '@/lib/utils'

export function CaseStudiesPage() {
  const [filter, setFilter] = useState<(typeof caseStudyFilters)[number]>('All')

  const filtered = useMemo(() => {
    if (filter === 'All') return caseStudies
    return caseStudies.filter((study) => study.industry === filter)
  }, [filter])

  return (
    <>
      <Seo
        title="Case Studies & Results | Fusion Marketing Management — Dubai"
        description="Sample case studies illustrating how Fusion structures challenges, approaches and performance outcomes across Dubai industries."
        path="/case-studies"
      />

      <section className="pt-28 md:pt-32">
        <div className="container-shell pb-12">
          <Reveal>
            <SectionHeading
              eyebrow="Case studies"
              title="Proof-oriented storytelling — clearly marked as samples."
              description="Metrics and scenarios below are illustrative placeholders for design and process demonstration. Verified client results will replace them when available."
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-shell">
          <LayoutGroup>
            <div className="mb-8 flex flex-wrap gap-2">
              {caseStudyFilters.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-sm transition-colors',
                    filter === item ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {filter === item ? (
                    <motion.span
                      layoutId="case-filter"
                      className="absolute inset-0 rounded-full border border-accent/40 bg-accent/15"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  ) : null}
                  <span className="relative z-10">{item}</span>
                </button>
              ))}
            </div>

            <motion.div layout className="grid gap-4 lg:grid-cols-2">
              {filtered.map((study) => (
                <CaseStudyCard key={study.id} study={study} />
              ))}
            </motion.div>
          </LayoutGroup>

          {!filtered.length ? (
            <p className="mt-8 text-center text-muted-foreground">No sample cases in this industry yet.</p>
          ) : null}
        </div>
      </section>

      <section className="border-y border-border bg-background-secondary py-20">
        <div className="container-shell">
          <SectionHeading
            align="center"
            eyebrow="Aggregate"
            title="Sample performance board"
            description="Placeholder totals for layout — not verified client aggregate results."
            className="mb-10"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aggregateMetrics.map((metric) => (
              <MetricCard
                key={metric.label}
                value={metric.value}
                label={metric.label}
                note={metric.note}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-shell">
          <div className="rounded-[2rem] border border-border bg-surface px-6 py-12 text-center">
            <h2 className="text-3xl">Want a growth system built around your numbers?</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Share your funnel and we&apos;ll outline where to audit first.
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
