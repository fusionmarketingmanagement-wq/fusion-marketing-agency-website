export type CaseStudy = {
  id: string
  industry: string
  campaignType: string
  title: string
  challenge: string
  approach: string
  summary: string
  metricLabel: string
  metricValue: string
  services: string[]
  image: string
}

export const caseStudyFilters = [
  'All',
  'E-commerce',
  'Real Estate',
  'Healthcare',
  'F&B',
  'Retail',
  'Logistics',
] as const

export const caseStudies: CaseStudy[] = [
  {
    id: 'ecommerce-funnel',
    industry: 'E-commerce',
    campaignType: 'Catalog + Remarketing',
    title: 'Rebuilding an e-commerce funnel from checkout backward',
    challenge: 'Weak product feed quality and unstructured Meta spend produced traffic without purchases.',
    approach:
      'Catalog cleanup, Shopping structure, and dynamic remarketing aligned to high-intent behaviour.',
    summary:
      'Feed quality and remarketing rebuilt paid contribution from catalog to checkout.',
    metricLabel: 'ROAS lift',
    metricValue: '5.2x',
    services: ['E-commerce Advertising', 'Paid Media'],
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'real-estate-leads',
    industry: 'Real Estate',
    campaignType: 'Lead Generation',
    title: 'Qualified property inquiries for a Dubai sales team',
    challenge: 'High lead volume with low sales readiness and slow follow-up.',
    approach:
      'Offer-led landing pages, lead scoring, and WhatsApp automation for faster response.',
    summary:
      'Inquiry quality and sales handoff speed improved through offer-led pages and faster follow-up.',
    metricLabel: 'CPL reduction',
    metricValue: '48%',
    services: ['Lead Generation', 'AI Automation'],
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'healthcare-awareness',
    industry: 'Healthcare',
    campaignType: 'Paid Social + Search',
    title: 'Local clinic demand with compliant creative',
    challenge: 'Regulatory-sensitive messaging and unclear channel attribution.',
    approach:
      'Compliant creative systems, search intent capture, and transparent weekly reporting.',
    summary:
      'Clinic growth system balancing trust messaging with measurable inquiries.',
    metricLabel: 'Inquiry growth',
    metricValue: '+132%',
    services: ['Paid Media', 'Content Creation'],
    image:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'fnb-local',
    industry: 'F&B',
    campaignType: 'Local Acquisition',
    title: 'Driving footfall and delivery orders for a Dubai kitchen brand',
    challenge: 'Seasonal demand swings and fragmented creative across platforms.',
    approach:
      'Offer calendars, geo-targeted campaigns, and creative testing tied to menu launches.',
    summary:
      'Local acquisition playbook for F&B brands competing on speed and relevance.',
    metricLabel: 'ROAS',
    metricValue: '4.4x',
    services: ['Social Media', 'Paid Media'],
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'retail-omni',
    industry: 'Retail',
    campaignType: 'Full-Funnel Media',
    title: 'Connecting store visits and online demand for a retail brand',
    challenge: 'Online and offline journeys measured in separate silos.',
    approach:
      'Unified tracking, audience bridging, and landing experiences matched to campaign intent.',
    summary:
      'Retail system connecting awareness media to measurable store and web actions.',
    metricLabel: 'Conversion lift',
    metricValue: '+67%',
    services: ['Paid Media', 'Website Development'],
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'logistics-b2b',
    industry: 'Logistics',
    campaignType: 'B2B Lead Gen',
    title: 'B2B inquiry engine for a regional logistics provider',
    challenge: 'Long sales cycles and low-quality form fills from broad targeting.',
    approach:
      'Account-based creative, intent keywords, and nurture sequences for operations decision-makers.',
    summary:
      'B2B pipeline system prioritizing qualified opportunities over volume.',
    metricLabel: 'SQL rate',
    metricValue: '2.1x',
    services: ['Lead Generation', 'Content Creation'],
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
  },
]

export const aggregateMetrics = [
  { label: 'Campaigns launched', value: '240+' },
  { label: 'Qualified leads supported', value: '18k+' },
  { label: 'Industries served', value: '12+' },
  { label: 'Client retention', value: '92%' },
] as const
