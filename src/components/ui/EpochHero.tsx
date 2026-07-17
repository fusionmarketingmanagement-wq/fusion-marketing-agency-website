import { useEffect, useRef, useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { LogoMarquee } from '@/components/ui/LogoMarquee'
import { siteConfig } from '@/data/site'

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4'

export function EpochHero() {
  const navigate = useNavigate()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoReady, setVideoReady] = useState(false)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)

  // Defer heavy CloudFront video so first paint is instant (gradient poster).
  useEffect(() => {
    let cancelled = false
    let idleId: number | undefined
    let timeoutId: ReturnType<typeof setTimeout> | undefined

    const start = () => {
      if (!cancelled) setShouldLoadVideo(true)
    }

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(start, { timeout: 900 })
    } else {
      timeoutId = setTimeout(start, 120)
    }

    return () => {
      cancelled = true
      if (idleId !== undefined && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId)
      }
      if (timeoutId !== undefined) clearTimeout(timeoutId)
    }
  }, [])

  useEffect(() => {
    if (!shouldLoadVideo) return
    const video = videoRef.current
    if (!video) return

    const onReady = () => {
      setVideoReady(true)
      void video.play().catch(() => {
        // Autoplay can fail; muted + playsInline usually works.
      })
    }

    video.addEventListener('canplay', onReady)
    video.load()

    return () => {
      video.removeEventListener('canplay', onReady)
    }
  }, [shouldLoadVideo])

  return (
    <div className="w-full bg-background px-3 pb-6 pt-20 sm:px-4 sm:pt-24 md:px-6 md:pt-28">
      <section className="relative mx-auto flex min-h-[min(72vh,560px)] w-full max-w-[1400px] flex-col overflow-hidden rounded-[28px] border border-border bg-surface shadow-[var(--shadow-lg)] sm:min-h-[520px] sm:rounded-[36px] md:h-[600px] md:min-h-0 md:rounded-[48px]">
        {/* Instant poster — visible before remote video buffers */}
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_70%_40%,#d4dce8_0%,#eef1f5_42%,#f5f6f8_100%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-16 top-1/4 z-0 h-64 w-64 rounded-full bg-[#b8c4d4]/50 blur-3xl sm:h-80 sm:w-80"
          aria-hidden
        />

        <div className="pointer-events-none absolute inset-0 z-[1] select-none overflow-hidden">
          {shouldLoadVideo ? (
            <video
              ref={videoRef}
              src={VIDEO_SRC}
              muted
              loop
              playsInline
              preload="auto"
              className={`h-full w-full scale-105 object-cover transition-opacity duration-700 ${
                videoReady ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ) : null}
        </div>

        <div className="relative z-20 flex flex-1 flex-col items-start px-5 pb-28 pt-10 sm:px-8 sm:pb-32 sm:pt-12 md:px-16 md:pb-28 md:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-xl"
          >
            <h1 className="font-display text-[clamp(1.85rem,7.2vw,3.5rem)] font-medium leading-[1.12] tracking-tight text-foreground">
              Foundation of the
              <br />
              new digital epoch
            </h1>
            <p className="mt-3 max-w-md font-sans text-[13px] leading-relaxed text-muted-foreground sm:mt-4 sm:text-[14px] md:text-[15px]">
              Designing products, powering ecosystems and laying the foundation of a decentralized
              web for enterprises, builders and communities alike.
            </p>
            <motion.button
              type="button"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/contact')}
              className="mt-6 rounded-full border border-charcoal bg-charcoal px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(17,17,17,0.18)] hover:text-white sm:mt-8 sm:px-6 sm:py-3"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>

        <div className="absolute inset-x-3 bottom-5 z-30 flex justify-center sm:inset-x-6 sm:bottom-8 md:bottom-10">
          <motion.nav
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="flex max-w-full items-center rounded-full border border-border bg-surface-elevated px-1 py-1 shadow-[var(--shadow-md)] backdrop-blur-2xl sm:px-1.5 sm:py-1.5"
            aria-label="Hero navigation"
          >
            <Link
              to="/"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-charcoal font-display text-sm font-semibold text-white shadow-[var(--shadow-sm)] sm:h-9 sm:w-9"
              aria-label={`${siteConfig.name} home`}
            >
              F
            </Link>
            <button
              type="button"
              className="hidden px-3 py-2 text-[12px] font-semibold text-text-muted transition-colors hover:text-foreground sm:inline md:px-4"
            >
              Products
            </button>
            <button
              type="button"
              className="hidden px-3 py-2 text-[12px] font-semibold text-text-muted transition-colors hover:text-foreground md:inline md:px-4"
            >
              Docs
            </button>
            <Link
              to="/contact"
              className="ml-1 inline-flex shrink-0 items-center gap-1 rounded-full border border-border bg-surface px-3.5 py-1.5 text-[11px] font-semibold text-foreground shadow-[var(--shadow-sm)] transition-all hover:border-border-strong sm:px-5 sm:py-2 sm:text-[12px]"
            >
              Get in touch
              <ChevronRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </motion.nav>
        </div>
      </section>

      <div className="mx-auto mt-8 w-full max-w-[1400px] sm:mt-10">
        <LogoMarquee />
      </div>
    </div>
  )
}
