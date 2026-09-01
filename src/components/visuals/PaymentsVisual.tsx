const stats = [
  { label: "Today's collection", value: '₹38,200' },
  { label: 'Monthly collection', value: '₹4.8L' },
  { label: 'Pending rent', value: '₹68,000' },
  { label: 'Overdue rent', value: '₹21,000' },
]

export default function PaymentsVisual() {
  return (
    <div className="p-5 sm:p-6">
      <div className="text-[11px] uppercase tracking-wide text-slate-soft font-mono mb-4">Collection summary</div>
      <div className="grid grid-cols-2 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded border border-ink/10 bg-white/60 p-3.5">
            <div className="text-[11px] text-slate-soft">{s.label}</div>
            <div className="text-base font-semibold text-ink mt-1">{s.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
