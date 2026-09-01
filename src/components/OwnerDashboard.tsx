import BrowserFrame from './BrowserFrame'
import DashboardOverview from './visuals/DashboardOverview'
import { PRODUCT_URL } from '../lib/data'

export default function OwnerDashboard() {
  return (
    <section className="section-pad py-20 md:py-28 rule bg-paper-dim">
      <div className="container-content">
        <div className="max-w-xl mb-10">
          <h2 className="text-3xl md:text-[2.6rem] leading-[1.12]">
            Your entire business, at a glance.
          </h2>
          <p className="mt-5 text-ink/60 text-base leading-relaxed">
            Occupancy, revenue, pending rent and available beds — one dashboard, built to reflect what&rsquo;s happening across your properties right now.
          </p>
        </div>
        <BrowserFrame>
          <DashboardOverview />
        </BrowserFrame>
        <a
          href={PRODUCT_URL}
          className="mt-7 inline-block text-sm font-medium text-ink border-b border-ink/30 hover:border-ink transition-colors"
        >
          Open PG Manager →
        </a>
      </div>
    </section>
  )
}
