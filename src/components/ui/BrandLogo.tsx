import { cn } from '@/lib/utils'
import { siteConfig } from '@/data/site'

type BrandLogoProps = {
  className?: string
  imgClassName?: string
  /** Compact header mark vs slightly larger footer mark */
  variant?: 'header' | 'footer'
}

/** Fusion wordmark — source stays 1500×500; display size is CSS-controlled. */
export function BrandLogo({ className, imgClassName, variant = 'header' }: BrandLogoProps) {
  const isHeader = variant === 'header'

  return (
    <span
      className={cn(
        'header-logo flex shrink-0 items-center overflow-hidden',
        isHeader
          ? 'h-14 w-[clamp(160px,18vw,280px)] max-w-[280px]'
          : 'h-12 w-[clamp(180px,22vw,240px)] max-w-[240px]',
        className,
      )}
    >
      <img
        src={siteConfig.logo}
        alt={siteConfig.name}
        width={1500}
        height={500}
        className={cn(
          'block h-full w-full max-h-14 max-w-[280px] object-contain object-left',
          imgClassName,
        )}
        decoding="async"
      />
    </span>
  )
}
