export const siteConfig = {
  name: 'Fusion Marketing Management',
  shortName: 'Fusion',
  tagline: 'Dubai Growth & Automation Agency',
  description:
    'A Dubai-based digital marketing agency helping business owners, entrepreneurs, and corporates grow through paid media, AI automation, social strategy, and high-performance web experiences.',
  url: 'https://www.fusionmarketingmgmt.com',
  email: 'hello@fusionmarketingmgmt.com',
  phone: '+971 4 123 4567',
  phoneTel: '+97141234567',
  whatsapp: '+971 50 123 4567',
  whatsappUrl: 'https://wa.me/971501234567',
  address: {
    line1: 'Office 1204, Marasi Business Bay Tower',
    line2: 'Business Bay, Dubai, UAE',
  },
  hours: {
    weekdays: 'Sunday to Thursday, 9:00 AM – 6:00 PM',
    weekend: 'Friday and Saturday, Closed',
  },
  social: {
    instagram: 'https://www.instagram.com/',
    facebook: 'https://www.facebook.com/',
  },
  ogImage:
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
} as const

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Contact', href: '/contact' },
] as const
