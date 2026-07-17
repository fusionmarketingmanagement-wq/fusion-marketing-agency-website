export type Service = {
  id: string
  number: string
  title: string
  short: string
  problem: string
  solution: string
  deliverables: string[]
  impact: string
  cta: string
  icon: 'megaphone' | 'bot' | 'share' | 'cart' | 'users' | 'code' | 'pen'
}

export const services: Service[] = [
  {
    id: 'paid-media',
    number: '01',
    title: 'Google & Facebook Ads',
    short:
      'Full-funnel paid campaigns across Search, Display, Meta and Instagram — built on conversion tracking, not guesswork.',
    problem:
      'Ad spend without clean tracking and offer alignment burns budget and produces leads that never convert.',
    solution:
      'We rebuild account structure, conversion tracking, audiences and creative testing so every dirham maps to a measurable inquiry or sale.',
    deliverables: [
      'Account audit and rebuild',
      'Conversion tracking and CRM mapping',
      'Search, Performance Max and Meta campaigns',
      'Weekly optimization and plain-language reporting',
    ],
    impact: 'Lower cost-per-lead and clearer attribution from click to pipeline.',
    cta: 'Improve My Paid Media',
    icon: 'megaphone',
  },
  {
    id: 'ai-automation',
    number: '02',
    title: 'AI Automation',
    short:
      'Custom AI workflows for lead scoring, chat follow-up and reporting — so your team spends time closing, not chasing.',
    problem:
      'Leads go cold when follow-up is manual, slow, or buried in spreadsheets and WhatsApp threads.',
    solution:
      'We design automation that scores inbound leads, triggers responses, and surfaces the opportunities that need a human closer.',
    deliverables: [
      'Lead routing and scoring workflows',
      'WhatsApp / CRM follow-up automation',
      'Reporting dashboards',
      'Human handoff rules',
    ],
    impact: 'Faster response times and more consistent follow-up without adding headcount.',
    cta: 'Automate My Follow-Up',
    icon: 'bot',
  },
  {
    id: 'social-media',
    number: '03',
    title: 'Social Media Marketing',
    short:
      'Strategy, content calendars and community management that build a brand people actually follow.',
    problem:
      'Inconsistent posting and vanity metrics leave brands visible but not memorable — or convertible.',
    solution:
      'We align social content to offers, audience segments and paid amplification so organic and paid reinforce each other.',
    deliverables: [
      'Positioning and content pillars',
      'Monthly content calendars',
      'Community management',
      'Creative for organic and paid reuse',
    ],
    impact: 'Stronger brand recall and warmer audiences for paid acquisition.',
    cta: 'Plan My Social Strategy',
    icon: 'share',
  },
  {
    id: 'ecommerce-advertising',
    number: '04',
    title: 'E-commerce Advertising',
    short:
      'Catalog-driven Shopping and dynamic remarketing that turns browsers into repeat buyers.',
    problem:
      'Broken product feeds, weak creative and siloed platforms leave e-commerce brands paying for traffic that never purchases.',
    solution:
      'We fix catalog quality, rebuild Shopping and Meta catalog campaigns, and layer remarketing around high-intent behaviour.',
    deliverables: [
      'Feed and catalog cleanup',
      'Shopping and catalog campaigns',
      'Dynamic remarketing',
      'ROAS and contribution margin reporting',
    ],
    impact: 'More efficient acquisition and clearer return on ad spend.',
    cta: 'Scale My Store Ads',
    icon: 'cart',
  },
  {
    id: 'lead-generation',
    number: '05',
    title: 'Lead Generation',
    short:
      'Landing pages, offers and nurture sequences engineered around one goal: qualified inquiries.',
    problem:
      'Traffic without a conversion path produces clicks, not sales conversations.',
    solution:
      'We design offers, landing experiences and nurture flows that qualify intent before a sales handoff.',
    deliverables: [
      'Offer and landing page systems',
      'Form and CRM capture',
      'Nurture sequences',
      'Lead quality scoring',
    ],
    impact: 'Higher inquiry volume with better sales-ready qualification.',
    cta: 'Build My Lead System',
    icon: 'users',
  },
  {
    id: 'website-development',
    number: '06',
    title: 'Website Development',
    short:
      'Fast, conversion-focused websites and landing pages built to turn traffic into pipeline.',
    problem:
      'Slow or unclear websites leak paid traffic and undermine trust before a visitor ever converts.',
    solution:
      'We build performance-minded sites and landing pages where messaging, proof and CTAs align with campaign intent.',
    deliverables: [
      'Conversion-focused page design',
      'Fast, responsive development',
      'Analytics and event tracking',
      'Iterative CRO improvements',
    ],
    impact: 'Higher conversion rates from the same traffic volume.',
    cta: 'Rebuild My Website',
    icon: 'code',
  },
  {
    id: 'content-creation',
    number: '07',
    title: 'Digital Content Creation',
    short:
      'Ad creative, landing copy and brand assets that support paid media and sales conversations.',
    problem:
      'Generic creative underperforms because it does not speak to local buyers or campaign intent.',
    solution:
      'We produce bilingual-ready creative systems informed by performance data — not one-off assets.',
    deliverables: [
      'Ad creative systems',
      'Landing and offer copy',
      'Brand messaging frameworks',
      'Asset libraries for testing',
    ],
    impact: 'Stronger message-market fit across organic and paid channels.',
    cta: 'Upgrade My Creative',
    icon: 'pen',
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Audit',
    description: 'We review tracking, creative, offers and funnel leaks before recommending spend.',
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'A clear growth plan maps channels, budgets and KPIs to commercial outcomes.',
  },
  {
    step: '03',
    title: 'Launch',
    description: 'Campaigns, pages and automations go live with instrumentation from day one.',
  },
  {
    step: '04',
    title: 'Scale',
    description: 'We double down on what converts and cut what does not — reported plainly.',
  },
] as const
