import { useState } from 'react'
import { Plus } from 'lucide-react'
import { faqs } from '../lib/data'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-pad py-20 md:py-28 rule">
      <div className="container-content max-w-2xl">
        <h2 className="text-3xl md:text-[2.6rem] leading-[1.12] mb-12">Questions, answered.</h2>
        <div>
          {faqs.map((f, i) => {
            const open = openIndex === i
            return (
              <div key={f.q} className="border-b border-ink/10">
                <button
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                >
                  <span className="text-base text-ink font-medium">{f.q}</span>
                  <Plus
                    size={18}
                    className={`shrink-0 text-ink/50 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}
                  />
                </button>
                {open && (
                  <p className="pb-5 text-sm text-ink/60 leading-relaxed pr-8">{f.a}</p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
