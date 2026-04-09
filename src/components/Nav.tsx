import { useState, useEffect } from 'react'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-20 py-5"
        style={{
          backgroundColor: scrolled ? 'rgba(250,250,250,0.95)' : 'transparent',
          borderBottom: scrolled ? '1px solid #E5E5E5' : '1px solid transparent',
          transition: 'background-color 0.3s ease, border-color 0.3s ease',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={close}
          className="text-[#111111] text-2xl tracking-[0.02em] font-light select-none"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Webblätt
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#priser"
            className="text-sm text-[#888888] hover:text-[#111111] transition-colors duration-200"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Priser
          </a>
          <a
            href="#kontakt"
            className="text-sm text-[#888888] hover:text-[#111111] transition-colors duration-200"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Kontakt
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-6 h-6 cursor-pointer bg-transparent border-none p-0"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Stäng meny' : 'Öppna meny'}
        >
          <span
            className="block h-px bg-[#111111] transition-all duration-300 origin-center"
            style={{
              transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block h-px bg-[#111111] transition-all duration-300"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block h-px bg-[#111111] transition-all duration-300 origin-center"
            style={{
              transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      <div
        className="fixed top-0 left-0 right-0 z-40 md:hidden flex flex-col items-start px-6 pt-20 pb-8 gap-6 bg-[#FAFAFA] border-b border-[#E5E5E5]"
        style={{
          transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.3s ease',
        }}
      >
        <a
          href="#priser"
          onClick={close}
          className="text-base text-[#111111] tracking-[0.04em]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Priser
        </a>
        <a
          href="#kontakt"
          onClick={close}
          className="text-base text-[#111111] tracking-[0.04em]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Kontakt
        </a>
        <a
          href="tel:0793404202"
          className="text-sm text-[#888888]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          079 340 42 02
        </a>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          onClick={close}
        />
      )}
    </>
  )
}
