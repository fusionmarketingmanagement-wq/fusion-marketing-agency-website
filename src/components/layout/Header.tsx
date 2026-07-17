import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks, siteConfig } from '@/data/site'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-4">
      <div
        className={cn(
          'container-shell flex h-16 items-center justify-between rounded-2xl border border-transparent px-4 transition-all duration-300 md:h-[68px] md:px-5',
          scrolled || open
            ? 'border-border bg-background/75 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl'
            : 'bg-transparent',
        )}
      >
        <Link to="/" className="flex items-center gap-3" aria-label={`${siteConfig.name} home`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground font-display text-sm font-bold text-background">
            F
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block font-display text-sm font-semibold">Fusion Marketing</span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              Management · Dubai
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                cn(
                  'rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground',
                  isActive && 'bg-white/5 text-foreground',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button href="/contact" size="sm">
            Get Free Proposal
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="container-shell mt-2 overflow-hidden rounded-3xl border border-border bg-background/95 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="flex flex-col gap-1 p-4" aria-label="Mobile">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'rounded-2xl px-4 py-3 text-base text-muted-foreground',
                      isActive && 'bg-surface text-foreground',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Button href="/contact" className="mt-3 w-full" onClick={() => setOpen(false)}>
                Get Free Proposal
              </Button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
