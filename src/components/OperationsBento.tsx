import { operationsBento } from '../lib/data'
import { visualRegistry } from '../lib/visualRegistry'

export default function OperationsBento() {
  return (
    <section className="section-pad py-20 md:py-28 rule">
      <div className="container-content">
        <h2 className="text-3xl md:text-[2.6rem] leading-[1.12] max-w-lg mb-12">
          Keep daily operations under control.
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {operationsBento.map((item) => {
            const Visual = visualRegistry[item.visual]
            return (
              <div
                key={item.id}
                className="rounded-lg border border-ink/10 bg-paper-card overflow-hidden"
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
