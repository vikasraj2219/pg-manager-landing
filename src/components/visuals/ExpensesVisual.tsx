const categories = [
  { label: 'Food', value: 62, amount: '₹1.4L' },
  { label: 'Electricity', value: 40, amount: '₹92K' },
  { label: 'Staff', value: 34, amount: '₹78K' },
  { label: 'Repairs', value: 18, amount: '₹41K' },
  { label: 'Internet', value: 8, amount: '₹12K' },
]

export default function ExpensesVisual() {
  return (
    <div className="p-5 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="text-[11px] uppercase tracking-wide text-slate-soft font-mono">Expenses by category</div>
        <div className="text-xs text-slate-soft">Net revenue ₹2.6L</div>
      </div>
      <div className="space-y-3">
        {categories.map((c) => (
          <div key={c.label}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-ink">{c.label}</span>
              <span className="text-slate-soft font-mono">{c.amount}</span>
            </div>
            <div className="h-1.5 rounded-full bg-ink/[0.06] overflow-hidden">
              <div className="h-full bg-brass" style={{ width: `${c.value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
