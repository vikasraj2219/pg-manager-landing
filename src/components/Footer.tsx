import { PRODUCT_URL } from '../lib/data'

const columns = [
  { title: 'Product', links: [{ label: 'Product', href: '#showcase' }, { label: 'Solutions', href: '#solutions' }, { label: 'Pricing', href: '#pricing' }] },
  { title: 'Account', links: [{ label: 'Login', href: PRODUCT_URL }, { label: 'Open PG Manager', href: PRODUCT_URL }] },
  { title: 'Legal', links: [{ label: 'Privacy', href: '#' }, { label: 'Terms', href: '#' }] },
]

export default function Footer() {
  return (
    <footer className="section-pad py-16">
      <div className="container-content">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.4fr,repeat(3,1fr)] gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <img src="/images/logo.png" alt="PG Manager" className="h-8 w-8 rounded-[6px] object-cover" />
              <span className="font-serif text-base text-ink">PG Manager</span>
            </div>
            <p className="mt-4 text-sm text-ink/50 max-w-[220px]">
              The operating system for PG &amp; hostel businesses.
            </p>
            <a
              href={PRODUCT_URL}
              className="mt-5 inline-block text-sm font-medium text-ink border-b border-ink/30 hover:border-ink transition-colors"
            >
              Open PG Manager →
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <div className="text-xs uppercase tracking-wide text-ink/40 mb-3">{col.title}</div>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-ink/65 hover:text-ink transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-ink/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-ink/40">
          <span>© {new Date().getFullYear()} PG Manager. All rights reserved.</span>
          <span>Made for PG &amp; hostel operators.</span>
        </div>
      </div>
    </footer>
  )
}
