const stats = [
  { label: 'Occupancy', value: '92%', tone: 'ledger' },
  { label: 'Revenue (MTD)', value: '\u20B94.8L', tone: 'ink' },
  { label: 'Pending rent', value: '\u20B968K', tone: 'brass' },
  { label: 'Available beds', value: '8', tone: 'ink' },
]

const bars = [62, 70, 58, 80, 74, 88, 92]
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export default function DashboardOverview() {
  return (
    <div className="p-5 sm:p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-[11px] uppercase tracking-wide text-slate-soft font-mono">Demo visualization</div>
          <div className="text-sm font-semibold text-ink mt-0.5">Portfolio overview — all properties</div>
        </div>
        <div className="hidden sm:block text-xs text-slate-soft font-mono">Sep 2026</div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {stats.map((s) => (
          <div key={s.label} className="rounded border border-ink/10 bg-white/60 p-3">
            <div className="text-[11px] text-slate-soft">{s.label}</div>
            <div
              className={
                'text-lg font-semibold mt-1 ' +
                (s.tone === 'ledger' ? 'text-ledger' : s.tone === 'brass' ? 'text-brass-deep' : 'text-ink')
              }
            >
              {s.value}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded border border-ink/10 bg-white/60 p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-ink">Rent collection this week</span>
          <span className="text-[11px] text-slate-soft font-mono">demo data</span>
        </div>
        <div className="flex items-end gap-3 h-28">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <div
                className="w-full rounded-t-sm bg-ledger/80"
                style={{ height: `${h}%` }}
              />
              <span className="text-[10px] text-slate-soft font-mono">{days[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
