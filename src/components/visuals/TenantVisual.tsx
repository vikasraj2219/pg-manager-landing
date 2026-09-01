export default function TenantVisual() {
  return (
    <div className="p-5 sm:p-6">
      <div className="text-[11px] uppercase tracking-wide text-slate-soft font-mono mb-4">Tenant profile</div>
      <div className="rounded border border-ink/10 bg-white/60 p-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-full bg-ink/10 flex items-center justify-center text-sm font-semibold text-ink">AK</div>
          <div>
            <div className="text-sm font-medium text-ink">Ananya Kulkarni</div>
            <div className="text-xs text-slate-soft">Room 204 &middot; Bed B2</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <div className="text-slate-soft">Monthly rent</div>
            <div className="text-ink font-medium mt-0.5">₹12,500</div>
          </div>
          <div>
            <div className="text-slate-soft">Deposit</div>
            <div className="text-ink font-medium mt-0.5">₹25,000</div>
          </div>
          <div>
            <div className="text-slate-soft">Check-in</div>
            <div className="text-ink font-medium mt-0.5">14 Jan 2026</div>
          </div>
          <div>
            <div className="text-slate-soft">KYC status</div>
            <div className="text-ledger font-medium mt-0.5">Verified</div>
          </div>
        </div>
      </div>
    </div>
  )
}
