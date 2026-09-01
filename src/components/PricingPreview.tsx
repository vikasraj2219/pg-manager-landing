import { PRODUCT_URL } from '../lib/data'

export default function PricingPreview() {
  return (
    <section id="pricing" className="section-pad py-20 md:py-28 rule bg-paper-dim text-center">
      <div className="container-content flex flex-col items-center">
        <h2 className="text-3xl md:text-[2.6rem] leading-[1.12] max-w-md">
          Simple, scalable access.
        </h2>
        <p className="mt-5 text-ink/60 text-base leading-relaxed max-w-md">
          Explore PG Manager and choose the plan that fits your operation, from a single property to a growing portfolio.
        </p>
        <a
          href={PRODUCT_URL}
          className="mt-8 bg-ink text-paper px-7 py-3.5 rounded-sm text-sm font-medium hover:bg-ink-soft transition-colors"
        >
          Open PG Manager →
        </a>
      </div>
    </section>
  )
}
