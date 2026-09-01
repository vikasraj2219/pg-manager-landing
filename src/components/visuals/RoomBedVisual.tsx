const statuses = [
  'occupied', 'occupied', 'available', 'occupied',
  'occupied', 'notice', 'occupied', 'available',
  'occupied', 'occupied', 'maintenance', 'occupied',
  'available', 'occupied', 'occupied', 'reserved',
] as const

const styles: Record<(typeof statuses)[number], string> = {
  occupied: 'bg-ledger/85',
  available: 'bg-white border border-ink/15',
  reserved: 'bg-brass/70',
  maintenance: 'bg-rust/70',
  notice: 'bg-brass-soft/60',
}

const legend: { key: (typeof statuses)[number]; label: string }[] = [
  { key: 'occupied', label: 'Occupied' },
  { key: 'available', label: 'Available' },
  { key: 'reserved', label: 'Reserved' },
  { key: 'notice', label: 'Notice period' },
  { key: 'maintenance', label: 'Maintenance' },
]

export default function RoomBedVisual() {
  return (
    <div className="p-5 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="text-[11px] uppercase tracking-wide text-slate-soft font-mono">Bed occupancy — Floor 2</div>
        <div className="text-xs text-slate-soft">8 available</div>
      </div>
      <div className="grid grid-cols-4 gap-2.5 mb-5">
        {statuses.map((s, i) => (
          <div
            key={i}
            className={`aspect-square rounded-sm ${styles[s]} flex items-center justify-center text-[10px] font-mono text-white/90`}
          >
            {s === 'available' ? <span className="text-ink/40">{`B${i + 1}`}</span> : `B${i + 1}`}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-1.5">
        {legend.map((l) => (
          <div key={l.key} className="flex items-center gap-1.5">
            <span className={`h-2.5 w-2.5 rounded-sm ${styles[l.key]}`} />
            <span className="text-[11px] text-slate-soft">{l.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
