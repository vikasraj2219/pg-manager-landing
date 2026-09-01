const rows = [
  { name: 'Ananya Kulkarni', room: '204 / B2', rent: 12500, extra: 800, status: 'Paid' },
  { name: 'Rohit Sinha', room: '108 / B1', rent: 11000, extra: 600, status: 'Due' },
  { name: 'Devika Rao', room: '301 / B3', rent: 13500, extra: 900, status: 'Overdue' },
]

const statusStyle: Record<string, string> = {
  Paid: 'bg-ledger/10 text-ledger',
  Due: 'bg-brass/10 text-brass-deep',
  Overdue: 'bg-rust/10 text-rust',
}

export default function RentVisual() {
  return (
    <div className="p-5 sm:p-6">
      <div className="text-[11px] uppercase tracking-wide text-slate-soft font-mono mb-4">This month&rsquo;s billing</div>
      <div className="rounded border border-ink/10 bg-white/60 overflow-hidden">
        <div className="grid grid-cols-[1fr,auto,auto] gap-3 px-4 py-2 text-[11px] text-slate-soft border-b border-ink/10">
          <span>Tenant</span>
          <span>Amount</span>
          <span>Status</span>
        </div>
        {rows.map((r) => (
          <div key={r.name} className="grid grid-cols-[1fr,auto,auto] gap-3 px-4 py-2.5 items-center border-b border-ink/5 last:border-0">
            <div>
              <div className="text-xs font-medium text-ink">{r.name}</div>
              <div className="text-[11px] text-slate-soft">{r.room}</div>
            </div>
            <span className="text-xs font-mono text-ink">₹{(r.rent + r.extra).toLocaleString('en-IN')}</span>
            <span className={`text-[11px] px-2 py-0.5 rounded-sm font-medium ${statusStyle[r.status]} justify-self-end`}>{r.status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
