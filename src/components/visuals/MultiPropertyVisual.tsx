const rows = [
  { name: 'Sunrise PG — Kondapur', occupancy: 94, revenue: '₹2.1L', pending: '₹18K' },
  { name: 'Blue Nest Hostel — Gachibowli', occupancy: 88, revenue: '₹1.6L', pending: '₹32K' },
  { name: 'Maple Residency — Madhapur', occupancy: 76, revenue: '₹1.1L', pending: '₹18K' },
]

export default function MultiPropertyVisual() {
  return (
    <div className="p-5 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="text-[11px] uppercase tracking-wide text-slate-soft font-mono">Portfolio performance</div>
        <div className="text-xs text-slate-soft">3 properties</div>
      </div>
      <div className="rounded border border-ink/10 bg-white/60 overflow-hidden">
        <div className="grid grid-cols-[1.4fr,0.8fr,0.7fr,0.7fr] gap-2 px-4 py-2 text-[11px] text-slate-soft border-b border-ink/10">
          <span>Property</span>
          <span>Occupancy</span>
          <span>Revenue</span>
          <span>Pending</span>
        </div>
        {rows.map((r) => (
          <div key={r.name} className="grid grid-cols-[1.4fr,0.8fr,0.7fr,0.7fr] gap-2 px-4 py-3 items-center border-b border-ink/5 last:border-0">
            <span className="text-xs text-ink">{r.name}</span>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-10 rounded-full bg-ink/[0.08] overflow-hidden">
                <div className="h-full bg-ledger" style={{ width: `${r.occupancy}%` }} />
              </div>
              <span className="text-[11px] font-mono text-slate-soft">{r.occupancy}%</span>
            </div>
            <span className="text-xs font-mono text-ink">{r.revenue}</span>
            <span className="text-xs font-mono text-brass-deep">{r.pending}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
