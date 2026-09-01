import { ShieldCheck } from 'lucide-react'
import { securityPoints } from '../lib/data'

export default function Security() {
  return (
    <section className="section-pad py-20 md:py-28 rule">
      <div className="container-content">
        <h2 className="text-3xl md:text-[2.6rem] leading-[1.12] max-w-lg mb-12">
          Built for serious property operations.
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {securityPoints.map((p) => (
            <div key={p.title} className="rounded-lg border border-ink/10 bg-paper-card p-6">
              <ShieldCheck size={18} className="text-ledger" />
              <h3 className="mt-3 text-base font-medium text-ink">{p.title}</h3>
              <p className="mt-1.5 text-sm text-ink/55 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
