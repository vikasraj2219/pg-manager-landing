import BrowserFrame from './BrowserFrame'
import MultiPropertyVisual from './visuals/MultiPropertyVisual'
import { PRODUCT_URL } from '../lib/data'

export default function MultiProperty() {
  return (
    <section id="solutions" className="section-pad py-20 md:py-28 rule">
      <div className="container-content grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-3xl md:text-[2.6rem] leading-[1.12] max-w-md">
            One login. Multiple properties.
          </h2>
          <p className="mt-5 text-ink/60 text-base leading-relaxed max-w-md">
            Manage your growing property portfolio from one place, with occupancy, revenue and expenses visible across every property you run.
          </p>
          <a
            href={PRODUCT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block bg-ink text-paper px-6 py-3.5 rounded-sm text-sm font-medium hover:bg-ink-soft transition-colors"
          >
            Open PG Manager →
          </a>
        </div>
        <BrowserFrame label="nilaaya/portfolio">
          <MultiPropertyVisual />
        </BrowserFrame>
      </div>
    </section>
  )
}
