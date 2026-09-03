import BrowserFrame from './BrowserFrame'
import AnalyticsVisual from './visuals/AnalyticsVisual'
import { PRODUCT_URL } from '../lib/data'

const metrics = [
  { label: 'Occupancy', value: '92%' },
  { label: 'Active tenants', value: '38' },
  { label: 'Available beds', value: '8' },
  { label: 'Collections', value: '93%' },
]

export default function Analytics() {
  return (
    <section className="section-pad py-20 md:py-28 rule">
      <div className="container-content grid lg:grid-cols-[1fr,1.2fr] gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-[2.6rem] leading-[1.12] max-w-md">
            Your business, backed by data.
          </h2>
          <p className="mt-5 text-ink/60 text-base leading-relaxed max-w-sm">
            Revenue, occupancy and collections tracked over time, so you can see how each property is actually performing &mdash; not just this month, but the trend behind it.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 max-w-sm">
            {metrics.map((m) => (
              <div key={m.label} className="rounded border border-ink/10 bg-paper-card p-4">
                <div className="text-[11px] text-ink/45">{m.label}</div>
                <div className="text-lg font-semibold text-ink mt-1">{m.value}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-ink/40 max-w-sm">
            Figures shown are illustrative demo data.
          </p>
          <a
            href={PRODUCT_URL}
            className="mt-6 inline-block text-sm font-medium text-ink border-b border-ink/30 hover:border-ink transition-colors"
          >
            Open PG Manager →
          </a>
        </div>
        <BrowserFrame label="nilaaya/analytics">
          <AnalyticsVisual />
        </BrowserFrame>
      </div>
    </section>
  )
}
