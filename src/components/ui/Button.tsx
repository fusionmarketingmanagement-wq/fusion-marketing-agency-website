import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-accent text-primary-foreground shadow-[0_0_24px_rgba(108,124,255,0.28)] hover:bg-[#7b89ff] hover:shadow-[0_0_32px_rgba(108,124,255,0.4)]',
        secondary:
          'border border-border bg-surface-light/60 text-foreground hover:border-white/20 hover:bg-surface-light',
        ghost: 'text-foreground hover:bg-white/5',
        outline:
          'border border-white/15 bg-transparent text-foreground hover:border-accent/50 hover:bg-accent/10',
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
