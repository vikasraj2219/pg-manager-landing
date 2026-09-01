import { PRODUCT_URL } from '../lib/data'

export default function FinalCTA() {
  return (
    <section className="section-pad py-24 md:py-32 rule bg-ink text-paper text-center">
      <div className="container-content flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl leading-[1.05] text-paper max-w-3xl">
          Ready to run your PG business smarter?
        </h2>
        <p className="mt-6 text-paper/60 text-base md:text-lg max-w-lg">
          Bring your properties, tenants, payments and daily operations into one powerful platform.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a
            href={PRODUCT_URL}
            className="bg-paper text-ink px-7 py-3.5 rounded-sm text-sm font-medium hover:bg-paper-dim transition-colors"
          >
            Open PG Manager →
          </a>
          <a
            href="#showcase"
            className="px-7 py-3.5 rounded-sm text-sm font-medium border border-paper/25 text-paper hover:border-paper/50 transition-colors"
          >
            Explore Features ↑
          </a>
        </div>
      </div>
    </section>
  )
}
