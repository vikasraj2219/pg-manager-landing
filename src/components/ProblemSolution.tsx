import { X, Check } from 'lucide-react'
import { beforeList, afterList } from '../lib/data'

export default function ProblemSolution() {
  return (
    <section className="section-pad py-20 md:py-28 rule bg-paper-dim">
      <div className="container-content">
        <h2 className="text-3xl md:text-[2.6rem] leading-[1.12] max-w-lg mb-12">
          Replace PG management chaos with one system.
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-lg border border-ink/10 bg-paper-card p-7">
            <div className="text-xs text-ink/45 mb-5">Before</div>
            <ul className="space-y-3.5">
              {beforeList.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-ink/60">
                  <X size={15} className="mt-0.5 shrink-0 text-rust/70" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-ink/15 bg-ink text-paper p-7">
            <div className="text-xs text-paper/45 mb-5">With PG Manager</div>
            <ul className="space-y-3.5">
              {afterList.map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm text-paper/80">
                  <Check size={15} className="mt-0.5 shrink-0 text-brass-soft" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
