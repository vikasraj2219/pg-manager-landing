const points = [30, 42, 38, 55, 60, 52, 68, 74, 70, 82, 88, 94]
const width = 560
const height = 140
const max = Math.max(...points)
const stepX = width / (points.length - 1)
const path = points
  .map((p, i) => `${i === 0 ? 'M' : 'L'} ${i * stepX} ${height - (p / max) * (height - 16)}`)
  .join(' ')

export default function AnalyticsVisual() {
  return (
    <div className="p-5 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="text-[11px] uppercase tracking-wide text-slate-soft font-mono">Revenue trend — example data</div>
        <div className="text-xs text-slate-soft">Last 12 months</div>
      </div>
      <div className="rounded border border-ink/10 bg-white/60 p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-32" preserveAspectRatio="none">
          <path d={path} fill="none" stroke="#2F5D50" strokeWidth={2.5} />
          <path
            d={`${path} L ${width} ${height} L 0 ${height} Z`}
            fill="url(#analytics-gradient)"
            opacity={0.18}
          />
          <defs>
            <linearGradient id="analytics-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2F5D50" />
              <stop offset="100%" stopColor="#2F5D50" stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
        <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-ink/10">
          <div>
            <div className="text-[11px] text-slate-soft">Revenue growth</div>
            <div className="text-sm font-semibold text-ledger mt-0.5">+38% YoY</div>
          </div>
          <div>
            <div className="text-[11px] text-slate-soft">Avg. occupancy</div>
            <div className="text-sm font-semibold text-ink mt-0.5">89%</div>
          </div>
          <div>
            <div className="text-[11px] text-slate-soft">Tenant growth</div>
            <div className="text-sm font-semibold text-ink mt-0.5">+64 tenants</div>
          </div>
        </div>
      </div>
    </div>
  )
}
