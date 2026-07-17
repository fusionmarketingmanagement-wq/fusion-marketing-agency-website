import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'

const HomePage = lazy(() =>
  import('@/pages/Home').then((m) => ({ default: m.HomePage })),
)
const AboutPage = lazy(() =>
  import('@/pages/About').then((m) => ({ default: m.AboutPage })),
)
const ServicesPage = lazy(() =>
  import('@/pages/Services').then((m) => ({ default: m.ServicesPage })),
)
const CaseStudiesPage = lazy(() =>
  import('@/pages/CaseStudies').then((m) => ({ default: m.CaseStudiesPage })),
)
const ContactPage = lazy(() =>
  import('@/pages/Contact').then((m) => ({ default: m.ContactPage })),
)

function RouteFallback() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center pt-28">
      <div className="h-10 w-10 animate-pulse rounded-full border border-accent/40 bg-accent/20" />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="case-studies" element={<CaseStudiesPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
