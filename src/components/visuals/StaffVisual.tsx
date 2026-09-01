const roles = [
  { role: 'Owner', access: 'Full access — all properties' },
  { role: 'Manager', access: 'Sunrise PG, Blue Nest Hostel' },
  { role: 'Accountant', access: 'Billing & payments only' },
  { role: 'Security', access: 'Check-in / check-out only' },
]

export default function StaffVisual() {
  return (
    <div className="p-5 sm:p-6">
      <div className="text-[11px] uppercase tracking-wide text-slate-soft font-mono mb-4">Team access</div>
      <div className="space-y-2">
        {roles.map((r) => (
          <div key={r.role} className="flex items-center justify-between rounded border border-ink/10 bg-white/60 px-4 py-2.5">
            <span className="text-xs font-medium text-ink">{r.role}</span>
            <span className="text-[11px] text-slate-soft">{r.access}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
