import { motion } from 'framer-motion'
import BrowserFrame from './BrowserFrame'
import DashboardOverview from './visuals/DashboardOverview'
import { PRODUCT_URL } from '../lib/data'

const chips = [
  { label: '92% Occupancy', pos: '-top-5 -left-6 sm:-left-10', delay: 0.5 },
  { label: '₹4.8L Collected', pos: '-bottom-6 -left-4 sm:-left-8', delay: 0.65 },
  { label: '12 Payments Pending', pos: 'top-1/3 -right-6 sm:-right-10', delay: 0.8 },
]

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 section-pad overflow-hidden">
      <div className="container-content grid lg:grid-cols-[1fr,1fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-[11px] tracking-wide text-brass-deep font-mono mb-5">
            PG &amp; hostel management platform
          </div>
          <h1 className="text-[2.5rem] leading-[1.08] sm:text-5xl sm:leading-[1.08] md:text-[3.4rem] md:leading-[1.06] text-ink max-w-xl">
            Run your entire PG business from one powerful platform.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-ink/65 max-w-md leading-relaxed">
            Manage properties, rooms, beds, tenants, rent, payments, expenses and daily operations from one centralized platform built for PG and hostel businesses.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={PRODUCT_URL}
              className="bg-ink text-paper px-6 py-3.5 rounded-sm text-sm font-medium hover:bg-ink-soft transition-colors"
            >
              Open PG Manager →
            </a>
            <a
              href="#showcase"
              className="px-6 py-3.5 rounded-sm text-sm font-medium border border-ink/20 text-ink hover:border-ink/40 transition-colors"
            >
              Explore Product ↓
            </a>
          </div>
          <p className="mt-6 text-xs text-ink/45">
            No demo to book, no form to fill — open the product directly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative rotate-[1deg]">
            <BrowserFrame>
              <DashboardOverview />
            </BrowserFrame>
          </div>

          {chips.map((c) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: c.delay }}
              className={`hidden sm:block absolute ${c.pos} bg-paper-card border border-ink/10 rounded-sm px-3 py-2 text-xs font-medium text-ink shadow-[0_4px_16px_rgba(18,21,27,0.08)]`}
            >
              {c.label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
