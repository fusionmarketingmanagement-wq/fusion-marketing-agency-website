import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import type { CaseStudy } from '@/data/caseStudies'
import { cn } from '@/lib/utils'

type CaseStudyCardProps = {
  study: CaseStudy
  className?: string
  featured?: boolean
}

export function CaseStudyCard({ study, className, featured }: CaseStudyCardProps) {
  return (
    <motion.article
      layout
      className={cn(
        'group overflow-hidden rounded-3xl border border-border bg-surface shadow-[var(--shadow-sm)]',
        featured && 'md:col-span-2',
        className,
      )}
    >
      <div className={cn('grid', featured ? 'md:grid-cols-2' : 'grid-cols-1')}>
        <div className="relative aspect-[16/11] overflow-hidden">
          <img
            src={study.image}
            alt=""
            width={1000}
            height={688}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/30 bg-white/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground shadow-[var(--shadow-sm)] backdrop-blur">
              {study.industry}
            </span>
            {study.placeholder ? (
              <span className="rounded-full border border-border bg-accent-soft px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-graphite backdrop-blur">
                Sample
              </span>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col justify-between p-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">
              {study.campaignType}
            </p>
            <h3 className="mt-3 font-display text-xl text-foreground md:text-2xl">{study.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{study.summary}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-background-soft p-4">
                <p className="text-xs text-text-muted">Challenge</p>
                <p className="mt-1 text-sm text-foreground/90">{study.challenge}</p>
              </div>
              <div className="rounded-2xl border border-border bg-background-soft p-4">
                <p className="text-xs text-text-muted">Approach</p>
                <p className="mt-1 text-sm text-foreground/90">{study.approach}</p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-end justify-between gap-4">
            <div>
              <p className="font-display text-3xl text-foreground">{study.metricValue}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                {study.metricLabel}
              </p>
            </div>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-medium text-graphite hover:text-ink"
            >
              View details
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
