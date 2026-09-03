export const PRODUCT_URL = 'https://pg.waghmare.site'
export const DASHBOARD_URL = 'https://pg.waghmare.site/dashboard'
export const LOGIN_URL = 'https://pg.waghmare.site/login'

export const navLinks = [
  { label: 'Product', href: '#showcase' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing', href: '#pricing' },
]

export const capabilities = [
  'Property Management',
  'Rooms & Beds',
  'Tenants',
  'Rent & Billing',
  'Payments',
  'Expenses',
  'Maintenance',
  'Analytics',
]

export const beforeList = [
  'Rent tracked on Excel sheets',
  'Tenant requests over WhatsApp',
  'Paper registers for check-in / check-out',
  'Rent calculated by hand every month',
  'Tenant documents scattered everywhere',
]

export const afterList = [
  'Centralized property dashboard',
  'Live bed-by-bed occupancy',
  'One record per tenant',
  'Automatic rent & billing',
  'Tracked payments & expenses',
]

export type ShowcaseTab = {
  id: string
  tab: string
  category: string
  headline: string
  body: string
  points: string[]
  visual: string
}

export const showcaseTabs: ShowcaseTab[] = [
  {
    id: 'property',
    tab: 'Properties',
    category: 'Property management',
    headline: 'Manage every property from one place.',
    body: 'Add buildings, floors, rooms and beds once, and see the structure of every property you run without switching between spreadsheets for each one.',
    points: ['Unlimited floors and rooms per property', 'Manager assigned per property', 'One account, every property'],
    visual: 'property',
  },
  {
    id: 'roombed',
    tab: 'Rooms & Beds',
    category: 'Rooms & beds',
    headline: "Know exactly what's available.",
    body: 'Every bed shows a live status \u2014 available, occupied, reserved, in notice period or under maintenance \u2014 so you can allocate the next tenant in seconds.',
    points: ['Bed-level occupancy grid', 'Reserve beds ahead of check-in', 'Beds blocked automatically for repairs'],
    visual: 'roombed',
  },
  {
    id: 'tenant',
    tab: 'Tenants',
    category: 'Tenant management',
    headline: 'Every tenant, every detail, organized.',
    body: 'Each tenant has one record \u2014 contact details, room and bed, rent, deposit, documents and stay history \u2014 instead of being split across notebooks and phone contacts.',
    points: ['Full tenant profile in one screen', 'KYC & document status in the same record', 'Searchable across all properties'],
    visual: 'tenant',
  },
  {
    id: 'billing',
    tab: 'Billing',
    category: 'Rent & billing',
    headline: "Know who's paid, who hasn't, and what's due.",
    body: 'Rent, electricity, food and other charges are calculated automatically each cycle, with late fees and discounts applied consistently.',
    points: ['Automatic monthly bill generation', 'Electricity, food and add-on charges', 'Outstanding balance always visible'],
    visual: 'rent',
  },
  {
    id: 'payments',
    tab: 'Payments',
    category: 'Payments',
    headline: 'Turn rent collection into a simple workflow.',
    body: "See today's collection, what's pending and what's overdue at a glance, and record payments as they come in.",
    points: ['Daily and monthly collection view', 'Pending and overdue rent flagged', 'Full payment history per tenant'],
    visual: 'payments',
  },
  {
    id: 'expenses',
    tab: 'Expenses',
    category: 'Expense management',
    headline: 'Know where your PG money goes.',
    body: 'Log electricity, food, repairs, staff and other costs by property, and see revenue against expenses to understand what each property actually earns.',
    points: ['Expense categories built for PG operations', 'Property-wise cost breakdown', 'Revenue minus expenses, automatically'],
    visual: 'expenses',
  },
  {
    id: 'maintenance',
    tab: 'Maintenance',
    category: 'Maintenance',
    headline: 'Keep every request under control.',
    body: 'Requests move from reported to assigned, in progress and resolved, with the room, tenant, staff member and cost attached.',
    points: ['Clear request status pipeline', 'Priority and room tagged automatically', 'Full history per property'],
    visual: 'maintenance',
  },
  {
    id: 'analytics',
    tab: 'Analytics',
    category: 'Business analytics',
    headline: 'Turn your data into better decisions.',
    body: 'Revenue, expenses, occupancy and collections, tracked over time so you can see how each property is actually performing.',
    points: ['Revenue trend across the portfolio', 'Property-wise performance', 'Collections vs. expenses'],
    visual: 'analytics',
  },
]

export const personas = [
  { title: 'PG owners', body: 'Manage your entire property from one system.' },
  { title: 'Hostel operators', body: 'Keep rooms, tenants and operations organized.' },
  { title: 'Multi-property owners', body: 'Manage multiple properties centrally.' },
  { title: 'Property managers', body: 'Coordinate daily operations efficiently.' },
  { title: 'Co-living operators', body: 'Scale operations with structured workflows.' },
]

export const howItWorks = [
  { step: '01', title: 'Create your account', body: 'Set up your organization in a few minutes.' },
  { step: '02', title: 'Add your property', body: 'Enter property details and building structure.' },
  { step: '03', title: 'Configure rooms & beds', body: 'Create floors, rooms and bed inventory to match reality.' },
  { step: '04', title: 'Add tenants', body: 'Import existing tenants or add them as they move in.' },
  { step: '05', title: 'Start managing', body: 'Track rent, payments, expenses and maintenance from day one.' },
]

export const securityPoints = [
  { title: 'Secure authentication', body: 'Access is protected at every sign-in.' },
  { title: 'Role-based access', body: 'Owners, managers and staff see only what their role needs.' },
  { title: 'Protected documents', body: 'Tenant IDs and agreements are kept scoped to authorized roles.' },
  { title: 'Activity tracking', body: 'Key financial and tenant actions are recorded.' },
  { title: 'Controlled permissions', body: 'Access can be scoped by property, not just by role.' },
]

export type PricingPlan = {
  name: string
  tagline: string
  scale: string
  features: string[]
  featured?: boolean
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    tagline: 'For a single PG or hostel property.',
    scale: 'For one property',
    features: ['Property, room & bed setup', 'Tenant management & KYC', 'Rent & billing', 'Payments tracking'],
  },
  {
    name: 'Growth',
    tagline: 'For an operation adding properties.',
    scale: 'For a growing portfolio',
    features: ['Everything in Starter', 'Multiple properties, one login', 'Expense tracking', 'Maintenance workflow', 'Staff accounts & role-based access'],
    featured: true,
  },
  {
    name: 'Portfolio',
    tagline: 'For multi-property operators & PG chains.',
    scale: 'For larger portfolios',
    features: ['Everything in Growth', 'Consolidated portfolio analytics', 'Unlimited staff accounts', 'Priority support'],
  },
]

export const faqs = [
  { q: 'What is PG Manager?', a: 'PG Manager is a management platform built for PG and hostel businesses. It brings properties, rooms, beds, tenants, rent, payments, expenses and maintenance into one system, in place of spreadsheets, paper registers and WhatsApp.' },
  { q: 'Who is PG Manager for?', a: 'PG owners, hostel operators, multi-property owners, property managers and co-living operators who currently run their operations manually or across disconnected tools.' },
  { q: 'Can I manage multiple properties?', a: 'Yes. You can add multiple properties to one login and see consolidated occupancy, revenue and expense reporting across all of them.' },
  { q: 'Can I manage rooms and beds?', a: 'Yes. You can configure floors, rooms and individual beds, and track each bed\u2019s status \u2014 available, occupied, reserved, in notice period or under maintenance.' },
  { q: 'Can I manage tenants?', a: 'Yes. Each tenant has one record covering contact details, room and bed, rent, deposit, documents and stay history.' },
  { q: 'Can I track rent and payments?', a: 'Yes. Rent and other charges are calculated each billing cycle, and payments are recorded against each tenant with a full history.' },
  { q: 'Can I track expenses?', a: 'Yes. Expenses are logged by category and property, so you can see revenue against costs.' },
  { q: 'How do I get started?', a: 'Open PG Manager and set up your account \u2014 add your first property, configure rooms and beds, then add your tenants.' },
]
