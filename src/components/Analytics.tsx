import BrowserFrame from './BrowserFrame'
import AnalyticsVisual from './visuals/AnalyticsVisual'

const metrics = [
  { label: 'Revenue', value: '₹4.8L' },
  { label: 'Expenses', value: '₹1.9L' },
  { label: 'Occupancy', value: '92%' },
  { label: 'Collections', value: '93%' },
]

export default function Analytics() {
  return (
    <section className="section-pad py-20 md:py-28 rule">
      <div className="container-content grid lg:grid-cols-[1fr,1.2fr] gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-[2.6rem] leading-[1.12] max-w-md">
            Turn your data into better decisions.
          </h2>
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
        </div>
        <BrowserFrame label="pg.waghmare.site/analytics">
          <AnalyticsVisual />
        </BrowserFrame>
      </div>
    </section>
  )
}
