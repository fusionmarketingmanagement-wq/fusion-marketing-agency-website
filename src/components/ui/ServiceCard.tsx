import { Link } from 'react-router-dom'
import { ArrowUpRight, Bot, Code2, Megaphone, PenLine, Share2, ShoppingCart, Users } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import type { Service } from '@/data/services'
import { cn } from '@/lib/utils'

const icons = {
  megaphone: Megaphone,
  bot: Bot,
  share: Share2,
  cart: ShoppingCart,
  users: Users,
  code: Code2,
  pen: PenLine,
} as const

type ServiceCardProps = {
  service: Service
  className?: string
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const Icon = icons[service.icon]
  const reduce = useReducedMotion()

  return (
    <motion.article
      className={cn(
        'group relative overflow-hidden rounded-3xl border border-border bg-surface p-6 transition-colors hover:border-accent/35',
        className,
      )}
      whileHover={reduce ? undefined : { y: -4, rotateX: 2, rotateY: -2 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-accent-secondary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative flex items-start justify-between">
        <span className="font-mono text-xs text-muted-foreground">{service.number}</span>
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-light text-accent">
          <Icon className="h-5 w-5" aria-hidden />
        </div>
      </div>
      <h3 className="relative mt-6 font-display text-xl text-foreground">{service.title}</h3>
      <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">{service.short}</p>
      <Link
        to={`/services#${service.id}`}
        className="relative mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
      >
        Explore service
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </motion.article>
  )
}
