import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { LogoMarquee } from '@/components/ui/LogoMarquee'
import { siteConfig } from '@/data/site'

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4'

export function EpochHero() {
  const navigate = useNavigate()

  return (
    <div className="w-full bg-background px-4 pb-6 pt-24 md:px-6 md:pt-28">
      <section className="relative mx-auto flex h-[600px] w-full max-w-[1400px] flex-col overflow-hidden rounded-[48px] border border-border bg-surface shadow-[var(--shadow-lg)]">
        <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
          <video
            src={VIDEO_SRC}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full scale-105 object-cover transition-transform duration-1000"
          />
        </div>

        <div className="relative z-20 flex flex-1 flex-col items-start px-8 pt-12 md:px-16 md:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <h1 className="font-display text-[42px] font-medium tracking-tight text-foreground md:text-[56px]">
              Foundation of the
              <br />
              new digital epoch
            </h1>
            <p className="mt-4 max-w-md font-sans text-[14px] leading-relaxed text-muted-foreground md:text-[15px]">
              Designing products, powering ecosystems and laying the foundation of a decentralized
              web for enterprises, builders and communities alike.
            </p>
            <motion.button
              type="button"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/contact')}
              className="mt-8 rounded-full border border-charcoal bg-charcoal px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(17,17,17,0.18)] hover:text-white"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 z-30 -translate-x-1/2">
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center rounded-full border border-border bg-surface-elevated px-1.5 py-1.5 shadow-[var(--shadow-md)] backdrop-blur-2xl"
            aria-label="Hero navigation"
          >
            <Link
              to="/"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-charcoal font-display text-sm font-semibold text-white shadow-[var(--shadow-sm)]"
              aria-label={`${siteConfig.name} home`}
            >
              F
            </Link>
            <button
              type="button"
              className="px-4 py-2 text-[12px] font-semibold text-text-muted transition-colors hover:text-foreground"
            >
              Products
            </button>
            <button
              type="button"
              className="px-4 py-2 text-[12px] font-semibold text-text-muted transition-colors hover:text-foreground"
            >
              Docs
            </button>
            <Link
              to="/contact"
              className="ml-1 inline-flex items-center gap-1 rounded-full border border-border bg-surface px-5 py-2 text-[12px] font-semibold text-foreground shadow-[var(--shadow-sm)] transition-all hover:border-border-strong"
            >
              Get in touch
              <ChevronRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </motion.nav>
        </div>
      </section>

      <div className="mx-auto mt-10 w-full max-w-[1400px]">
        <LogoMarquee />
      </div>
    </div>
  )
}
