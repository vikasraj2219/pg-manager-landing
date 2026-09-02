import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, PRODUCT_URL } from '../lib/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="section-pad">
        <div
          className={`container-content flex items-center justify-between rounded-lg transition-all duration-300 ${
            scrolled
              ? 'bg-paper/85 backdrop-blur-md border border-ink/10 px-4 py-2.5 shadow-[0_1px_0_rgba(18,21,27,0.04)]'
              : 'bg-transparent border border-transparent px-2 py-2'
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5">
            <img src="/images/logo.png" alt="PG Manager" className="h-8 w-8 rounded-[6px] object-cover" />
            <span className="font-serif text-base text-ink">PG Manager</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-ink/70 hover:text-ink transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href={PRODUCT_URL} className="text-sm text-ink/70 hover:text-ink transition-colors px-2">
              Login
            </a>
            <a
              href={PRODUCT_URL}
              className="text-sm font-medium bg-ink text-paper px-4 py-2 rounded-sm hover:bg-ink-soft transition-colors"
            >
              Open PG Manager →
            </a>
          </div>

          <button
            className="md:hidden p-2 text-ink"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="container-content md:hidden mt-2 bg-paper border border-ink/10 rounded-lg p-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-ink/80 py-2.5 border-b border-ink/5 last:border-0"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-2 mt-3">
              <a href={PRODUCT_URL} className="text-sm text-center py-2.5 border border-ink/15 rounded-sm text-ink">
                Login
              </a>
              <a
                href={PRODUCT_URL}
                onClick={() => setOpen(false)}
                className="text-sm text-center font-medium bg-ink text-paper py-2.5 rounded-sm"
              >
                Open PG Manager →
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
