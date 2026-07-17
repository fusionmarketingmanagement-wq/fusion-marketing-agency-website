import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow ? (
        <p className="section-label mb-3 font-mono text-[11px] uppercase tracking-[0.22em]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-[clamp(1.75rem,3vw,2.75rem)] text-foreground">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-base text-muted-foreground md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
