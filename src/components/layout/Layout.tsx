import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export function Layout() {
  const location = useLocation()
  const reduce = useReducedMotion()
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }, [location.pathname, reduce])

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="grain min-h-screen bg-background text-foreground">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          id="main"
          key={location.pathname}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />

      <AnimatePresence>
        {showTop ? (
          <motion.button
            type="button"
            aria-label="Back to top"
            className="fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-[var(--shadow-md)]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            onClick={() => window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })}
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
