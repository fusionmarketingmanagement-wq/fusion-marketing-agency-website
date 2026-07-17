import { Link } from 'react-router-dom'
import { Facebook, Instagram } from 'lucide-react'
import { navLinks, siteConfig } from '@/data/site'
import { services } from '@/data/services'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background-secondary">
      <div className="container-shell grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Link to="/" className="inline-flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground font-display text-sm font-bold text-background">
              F
            </span>
            <span className="font-display text-sm font-semibold">{siteConfig.name}</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Paid media, AI automation, social strategy and high-performance web — fused into measurable growth for Dubai businesses.
          </p>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Navigate</p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="text-sm text-foreground/85 hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Services</p>
          <ul className="mt-4 space-y-2">
            {services.slice(0, 6).map((service) => (
              <li key={service.id}>
                <Link to={`/services#${service.id}`} className="text-sm text-foreground/85 hover:text-accent">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-accent">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a href={`tel:${siteConfig.phoneTel}`} className="hover:text-accent">
                {siteConfig.phone}
              </a>
              <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground/70">
                Placeholder
              </span>
            </li>
            <li>
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.line2}
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground hover:border-accent/40"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground hover:border-accent/40"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center rounded-full border border-border bg-surface px-4 text-sm hover:border-accent/40"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-shell flex flex-col gap-3 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-foreground">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
