import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(17,17,17,0.38)] disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'border border-charcoal bg-charcoal text-text-inverse shadow-[0_8px_22px_rgba(17,17,17,0.18)] hover:-translate-y-0.5 hover:border-charcoal-hover hover:bg-charcoal-hover hover:shadow-[0_12px_28px_rgba(17,17,17,0.23)] active:translate-y-0 active:shadow-[0_5px_14px_rgba(17,17,17,0.16)]',
        secondary:
          'border border-border-strong bg-surface text-ink shadow-[var(--shadow-sm)] hover:border-[rgba(17,17,17,0.25)] hover:bg-accent-soft',
        ghost: 'text-foreground hover:bg-accent-soft',
        outline:
          'border border-border-strong bg-surface text-ink shadow-[var(--shadow-sm)] hover:border-[rgba(17,17,17,0.25)] hover:bg-accent-soft',
      },
      size: {
        sm: 'h-10 px-4 text-sm',
        md: 'h-11 px-5 text-sm',
        lg: 'h-12 px-6 text-base',
        icon: 'h-11 w-11',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    href?: string
    external?: boolean
    children?: ReactNode
  }

export function Button({
  className,
  variant,
  size,
  href,
  external,
  children,
  onClick,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className)

  if (href) {
    if (external || href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')) {
      return (
        <a
          href={href}
          className={classes}
          target={external || href.startsWith('http') ? '_blank' : undefined}
          rel={external || href.startsWith('http') ? 'noopener noreferrer' : undefined}
          onClick={onClick as never}
        >
          {children}
        </a>
      )
    }

    return (
      <Link to={href} className={classes} onClick={onClick as never}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
