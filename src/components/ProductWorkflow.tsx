import { workflowSteps } from '../lib/data'

export default function ProductWorkflow() {
  return (
    <section className="section-pad py-20 md:py-28 rule bg-paper-dim">
      <div className="container-content">
        <h2 className="text-3xl md:text-[2.6rem] leading-[1.12] max-w-lg mb-12">
          How the modules connect.
        </h2>
        <div className="flex items-center gap-0 overflow-x-auto no-scrollbar -mx-1 px-1 pb-2">
          {workflowSteps.map((step, i) => (
            <div key={step} className="flex items-center shrink-0">
              <div className="rounded-full border border-ink/15 bg-paper-card px-5 py-2.5 text-sm text-ink whitespace-nowrap">
                {step}
              </div>
              {i < workflowSteps.length - 1 && (
                <div className="w-8 sm:w-10 h-px bg-ink/20 shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
