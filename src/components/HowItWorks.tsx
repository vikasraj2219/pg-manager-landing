import { howItWorks } from '../lib/data'

export default function HowItWorks() {
  return (
    <section className="section-pad py-20 md:py-28 rule">
      <div className="container-content">
        <h2 className="text-3xl md:text-[2.6rem] leading-[1.12] max-w-lg mb-12">
          Five steps to get started.
        </h2>
        <div className="grid sm:grid-cols-5 gap-6 sm:gap-4">
          {howItWorks.map((s, i) => (
            <div key={s.step} className="relative">
              <div className="text-xs font-mono text-brass-deep mb-3">{s.step}</div>
              <h3 className="text-base font-medium text-ink">{s.title}</h3>
              <p className="mt-1.5 text-sm text-ink/55 leading-relaxed">{s.body}</p>
              {i < howItWorks.length - 1 && (
                <div className="hidden sm:block absolute top-1.5 -right-2 h-px w-4 bg-ink/15" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
