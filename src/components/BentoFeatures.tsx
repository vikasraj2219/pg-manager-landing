import { bentoCards } from '../lib/data'
import { visualRegistry } from '../lib/visualRegistry'

const sizeClass: Record<string, string> = {
  lg: 'md:col-span-3 md:row-span-2',
  md: 'md:col-span-3',
  sm: 'md:col-span-3',
}

export default function BentoFeatures() {
  return (
    <section id="features" className="section-pad py-20 md:py-28 rule bg-paper-dim">
      <div className="container-content">
        <h2 className="text-3xl md:text-[2.6rem] leading-[1.12] max-w-lg mb-12">
          Built around how PG businesses actually operate.
        </h2>

        <div className="grid md:grid-cols-6 gap-4 auto-rows-fr">
          {bentoCards.map((card) => {
            const Visual = visualRegistry[card.visual]
            return (
              <div
                key={card.id}
                className={`rounded-lg border border-ink/10 bg-paper-card overflow-hidden flex flex-col ${sizeClass[card.size]}`}
              >
                <div className="p-6 pb-0">
                  <h3 className="text-lg font-serif text-ink">{card.title}</h3>
                  <p className="mt-1.5 text-sm text-ink/55 leading-relaxed">{card.body}</p>
                </div>
                <div className="mt-4 flex-1 border-t border-ink/5 bg-white/40">
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
