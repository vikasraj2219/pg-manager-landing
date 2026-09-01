const docs = [
  { name: 'Aadhaar card', status: 'Verified' },
  { name: 'Rent agreement', status: 'Signed' },
  { name: 'Passport photo', status: 'Verified' },
  { name: 'Local address proof', status: 'Pending' },
]

const statusStyle: Record<string, string> = {
  Verified: 'bg-ledger/10 text-ledger',
  Signed: 'bg-ledger/10 text-ledger',
  Pending: 'bg-brass/10 text-brass-deep',
}

export default function KycVisual() {
  return (
    <div className="p-5 sm:p-6">
      <div className="text-[11px] uppercase tracking-wide text-slate-soft font-mono mb-4">Tenant documents</div>
      <div className="space-y-2">
        {docs.map((d) => (
          <div key={d.name} className="flex items-center justify-between rounded border border-ink/10 bg-white/60 px-4 py-2.5">
            <span className="text-xs text-ink">{d.name}</span>
            <span className={`text-[11px] px-2 py-0.5 rounded-sm font-medium ${statusStyle[d.status]}`}>{d.status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
