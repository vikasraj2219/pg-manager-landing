const properties = [
  { name: 'Sunrise PG — Kondapur', rooms: 24, beds: 68, status: 'Active' },
  { name: 'Blue Nest Hostel — Gachibowli', rooms: 18, beds: 52, status: 'Active' },
  { name: 'Maple Residency — Madhapur', rooms: 12, beds: 30, status: 'Setup' },
]

export default function PropertyVisual() {
  return (
    <div className="p-5 sm:p-6">
      <div className="text-[11px] uppercase tracking-wide text-slate-soft font-mono mb-4">Your properties</div>
      <div className="space-y-2">
        {properties.map((p) => (
          <div
            key={p.name}
            className="flex items-center justify-between rounded border border-ink/10 bg-white/60 px-4 py-3"
          >
            <div>
              <div className="text-sm font-medium text-ink">{p.name}</div>
              <div className="text-xs text-slate-soft mt-0.5">{p.rooms} rooms &middot; {p.beds} beds</div>
            </div>
            <span
              className={
                'text-[11px] px-2 py-1 rounded-sm font-medium ' +
                (p.status === 'Active' ? 'bg-ledger/10 text-ledger' : 'bg-brass/10 text-brass-deep')
              }
            >
              {p.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
