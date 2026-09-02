import { Check } from 'lucide-react'
import { pricingPlans, PRODUCT_URL } from '../lib/data'

export default function PricingPreview() {
  return (
    <section id="pricing" className="section-pad py-20 md:py-28 rule bg-paper-dim">
      <div className="container-content">
        <div className="max-w-lg mb-12">
          <h2 className="text-3xl md:text-[2.6rem] leading-[1.12]">
            Simple, scalable access.
          </h2>
          <p className="mt-5 text-ink/60 text-base leading-relaxed">
            Choose the plan that fits your operation today, and move up as your portfolio grows &mdash; your data comes with you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-lg p-7 flex flex-col ${
                plan.featured
                  ? 'bg-ink text-paper border border-ink'
                  : 'bg-paper-card border border-ink/10'
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-7 text-[11px] font-medium bg-brass text-ink px-2.5 py-1 rounded-sm">
                  Most popular
                </span>
              )}
              <h3 className={`text-xl font-serif ${plan.featured ? 'text-paper' : 'text-ink'}`}>
                {plan.name}
              </h3>
              <p className={`mt-2 text-sm ${plan.featured ? 'text-paper/60' : 'text-ink/55'}`}>
                {plan.tagline}
              </p>
              <div className={`mt-6 text-sm ${plan.featured ? 'text-brass-soft' : 'text-brass-deep'}`}>
                {plan.scale}
              </div>
              <ul className="mt-6 space-y-2.5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check size={15} className={`mt-0.5 shrink-0 ${plan.featured ? 'text-brass-soft' : 'text-ledger'}`} />
                    <span className={plan.featured ? 'text-paper/85' : 'text-ink/70'}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={PRODUCT_URL}
                className={`mt-8 text-center text-sm font-medium py-3 rounded-sm transition-colors ${
                  plan.featured
                    ? 'bg-paper text-ink hover:bg-paper-dim'
                    : 'border border-ink/20 text-ink hover:border-ink/40'
                }`}
              >
                Open PG Manager →
              </a>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-ink/40">
          Exact pricing is available inside the app based on your properties and beds.
        </p>
      </div>
    </section>
  )
}
