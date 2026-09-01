import { useEffect, useState } from 'react'
import { PRODUCT_URL } from '../lib/data'

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`md:hidden fixed bottom-0 inset-x-0 z-40 section-pad pb-4 pt-3 bg-gradient-to-t from-paper via-paper/95 to-transparent transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <a
        href={PRODUCT_URL}
        className="block text-center bg-ink text-paper py-3.5 rounded-sm text-sm font-medium shadow-[0_4px_20px_rgba(18,21,27,0.18)]"
      >
        Open PG Manager →
      </a>
    </div>
  )
}
