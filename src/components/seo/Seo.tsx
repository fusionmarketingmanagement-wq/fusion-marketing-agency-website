import { useEffect } from 'react'
import { siteConfig } from '@/data/site'

type SeoProps = {
  title: string
  description: string
  path?: string
  jsonLd?: Record<string, unknown>
}

export function Seo({ title, description, path = '/', jsonLd }: SeoProps) {
  useEffect(() => {
    document.title = title

    const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
      let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.content = content
    }

    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:url', `${siteConfig.url}${path === '/' ? '/' : path}`)
    setMeta('property', 'og:image', siteConfig.ogImage)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = `${siteConfig.url}${path === '/' ? '/' : path}`

    let script = document.getElementById('page-jsonld') as HTMLScriptElement | null
    if (jsonLd) {
      if (!script) {
        script = document.createElement('script')
        script.type = 'application/ld+json'
        script.id = 'page-jsonld'
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(jsonLd)
    } else if (script) {
      script.remove()
    }
  }, [title, description, path, jsonLd])

  return null
}
