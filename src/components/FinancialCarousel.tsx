import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { financialCarousel } from '../lib/data'
import { visualRegistry } from '../lib/visualRegistry'

export default function FinancialCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 340, behavior: 'smooth' })
  }

  return (
    <section className="section-pad py-20 md:py-28 rule bg-paper-dim">
      <div className="container-content">
        <div className="flex items-end justify-between mb-8 gap-4">
          <h2 className="text-3xl md:text-[2.6rem] leading-[1.12] max-w-md">
            Stay on top of your numbers.
          </h2>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll(-1)}
              aria-label="Scroll left"
              className="h-9 w-9 rounded-full border border-ink/15 flex items-center justify-center text-ink/60 hover:border-ink/35 hover:text-ink transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Scroll right"
              className="h-9 w-9 rounded-full border border-ink/15 flex items-center justify-center text-ink/60 hover:border-ink/35 hover:text-ink transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div ref={trackRef} className="flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-1 px-1 pb-2">
          {financialCarousel.map((item) => {
            const Visual = visualRegistry[item.visual]
            return (
              <div
                key={item.id}
                className="shrink-0 w-[82%] sm:w-[46%] lg:w-[32%] snap-start rounded-lg border border-ink/10 bg-paper-card overflow-hidden"
              >
                <div className="p-6 pb-0">
                  <h3 className="text-lg font-serif text-ink">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-ink/55 leading-relaxed">{item.body}</p>
                </div>
                <div className="mt-4 border-t border-ink/5 bg-white/40">
                  <Visual />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
