export type Testimonial = {
  id: number
  quote: string
  author: string
  role: string
  avatar: string
  placeholder: true
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      'Fusion rebuilt our Google Ads account in two weeks and our cost-per-lead dropped by half. Inquiries we can actually close, not just clicks.',
    author: 'Layla H.',
    role: 'Retail founder · Sample quote',
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    placeholder: true,
  },
  {
    id: 2,
    quote:
      'The AI automation they built handles our WhatsApp lead follow-up while we sleep. Response time went from hours to minutes.',
    author: 'Omar A.',
    role: 'Sales director · Sample quote',
    avatar:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
    placeholder: true,
  },
  {
    id: 3,
    quote:
      'Our Shopify ad spend finally has a strategy behind it. Catalog cleanup and remarketing made the numbers readable again.',
    author: 'Fatima N.',
    role: 'E-commerce founder · Sample quote',
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    placeholder: true,
  },
]
