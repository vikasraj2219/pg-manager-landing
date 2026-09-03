import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import BrowserFrame from './BrowserFrame'
import { showcaseTabs } from '../lib/data'
import { visualRegistry } from '../lib/visualRegistry'

export default function ProductShowcase() {
  const [activeId, setActiveId] = useState(showcaseTabs[0].id)
  const active = showcaseTabs.find((t) => t.id === activeId) ?? showcaseTabs[0]
  const Visual = visualRegistry[active.visual]

  return (
    <section id="showcase" className="section-pad py-20 md:py-28 rule">
      <div className="container-content">
        <div className="max-w-lg mb-10">
          <h2 className="text-3xl md:text-[2.6rem] leading-[1.12]">
            Everything your PG business needs, in one place.
          </h2>
        </div>

        <div className="flex gap-2 overflow-x-auto no-scrollbar mb-8 -mx-1 px-1">
          {showcaseTabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveId(t.id)}
              className={`shrink-0 text-sm px-4 py-2 rounded-full border transition-colors ${
                t.id === activeId
                  ? 'bg-ink text-paper border-ink'
                  : 'border-ink/15 text-ink/60 hover:border-ink/35 hover:text-ink'
              }`}
            >
              {t.tab}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-[0.85fr,1.15fr] gap-10 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-xs uppercase tracking-wide text-brass-deep font-mono mb-3">
                {active.category}
              </div>
              <h3 className="text-2xl md:text-[1.9rem] leading-[1.14] text-ink max-w-sm">
                {active.headline}
              </h3>
              <p className="mt-4 text-sm text-ink/60 leading-relaxed max-w-sm">{active.body}</p>
              <ul className="mt-6 space-y-2.5">
                {active.points.map((p) => (
                  <li key={p} className="text-sm text-ink/75 flex items-start gap-2.5">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-ledger shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <BrowserFrame label={`nilaaya/${active.id}`}>
                <Visual />
              </BrowserFrame>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
