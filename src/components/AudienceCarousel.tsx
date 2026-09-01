import { personas } from '../lib/data'

export default function AudienceCarousel() {
  return (
    <section className="section-pad py-20 md:py-28 rule bg-paper-dim">
      <div className="container-content">
        <h2 className="text-3xl md:text-[2.6rem] leading-[1.12] max-w-lg mb-10">
          Built for the way you run your business.
        </h2>
        <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-1 px-1 pb-2">
          {personas.map((p) => (
            <div
              key={p.title}
              className="shrink-0 w-[74%] sm:w-[46%] lg:w-[31%] snap-start rounded-lg border border-ink/10 bg-paper-card p-7"
            >
              <h3 className="text-lg font-serif text-ink">{p.title}</h3>
              <p className="mt-2.5 text-sm text-ink/60 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
