import { ReactNode } from 'react'

export default function BrowserFrame({
  children,
  label = 'nilaaya/dashboard',
}: {
  children: ReactNode
  label?: string
}) {
  return (
    <div className="rounded-lg border border-ink/10 bg-paper-card shadow-[0_1px_0_rgba(18,21,27,0.04)] overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-ink/10 bg-ink/[0.02]">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        </div>
        <div className="ml-2 text-[11px] font-mono text-slate-soft tracking-tight">{label}</div>
      </div>
      <div className="bg-paper-card">{children}</div>
    </div>
  )
}
