import { useEffect, useRef, useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export type AccordionItem = {
  id: string
  question: string
  answer: string
}

type AccordionProps = {
  items: AccordionItem[]
  className?: string
}

export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null)

  return (
    <div className={cn('space-y-3', className)}>
      {items.map((item) => {
        const open = openId === item.id
        return (
          <div
            key={item.id}
            className={cn(
              'overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-sm)]',
              open && 'border-[rgba(17,17,17,0.24)] bg-[#f7f7f6]',
            )}
          >
            <h3>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium text-foreground hover:text-ink"
                aria-expanded={open}
                aria-controls={`panel-${item.id}`}
                id={`accordion-${item.id}`}
                onClick={() => setOpenId(open ? null : item.id)}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={cn(
                    'h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300',
                    open && 'rotate-180',
                  )}
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  id={`panel-${item.id}`}
                  role="region"
                  aria-labelledby={`accordion-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

type MetricCardProps = {
  value: ReactNode
  label: string
  note?: string
  className?: string
}

export function MetricCard({ value, label, note, className }: MetricCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-sm)]',
        className,
      )}
    >
      <p className="font-display text-3xl font-semibold text-foreground md:text-4xl">
        {value}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
      {note ? (
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-text-soft">
          {note}
        </p>
      ) : null}
    </div>
  )
}

export function AnimatedCounter({
  value,
  suffix = '',
  decimals = 0,
}: {
  value: number
  suffix?: string
  decimals?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value)
      return
    }

    const duration = 1400
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(value * eased)
      if (progress < 1) requestAnimationFrame(tick)
    }

    const id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [started, value])

  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  )
}
