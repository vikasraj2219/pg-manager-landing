import { capabilities } from '../lib/data'

export default function CapabilityStrip() {
  return (
    <section className="section-pad py-7 rule">
      <div className="container-content">
        <div className="flex overflow-x-auto no-scrollbar -mx-1 px-1">
          {capabilities.map((c, i) => (
            <span
              key={c}
              className={`shrink-0 text-sm text-ink/65 whitespace-nowrap px-5 first:pl-0 ${
                i !== capabilities.length - 1 ? 'border-r border-ink/10' : ''
              }`}
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
