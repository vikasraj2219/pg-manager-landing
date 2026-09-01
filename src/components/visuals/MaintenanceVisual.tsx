const columns = [
  { title: 'Reported', items: ['Leaking tap — Room 108'] },
  { title: 'Assigned', items: ['AC service — Room 204'] },
  { title: 'In progress', items: ['WiFi router — Floor 3'] },
  { title: 'Resolved', items: ['Door lock — Room 301'] },
]

export default function MaintenanceVisual() {
  return (
    <div className="p-5 sm:p-6">
      <div className="text-[11px] uppercase tracking-wide text-slate-soft font-mono mb-4">Maintenance pipeline</div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {columns.map((col) => (
          <div key={col.title} className="rounded border border-ink/10 bg-white/60 p-2.5">
            <div className="text-[10px] font-medium text-slate-soft mb-2">{col.title}</div>
            {col.items.map((item) => (
              <div key={item} className="rounded-sm bg-ink/[0.04] px-2 py-2 text-[10.5px] text-ink leading-snug">
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
