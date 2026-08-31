import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about-us', label: 'About & History' },
  { to: '/materials-we-deal-in', label: 'Materials We Deal In' },
  { to: '/certifications-facility-gallery', label: 'Certifications & Gallery' },
  { to: '/contact-rfq', label: 'Contact / RFQ' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className="bg-cream text-ink border-b border-ink/10 relative z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" aria-label="Sunil Metal Corporation — Home">
          <img
            src="/logo-remove.jpg"
            alt="Sunil Metal Corporation"
            className="h-20 w-20 md:h-24 md:w-28"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? 'text-oxide font-semibold'
                  : 'text-ink/80 hover:text-oxide transition-colors'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact-rfq"
          className="hidden md:inline-block bg-oxide hover:bg-bronze-deep text-cream text-sm font-semibold px-4 py-2 rounded transition-colors"
        >
          Request a Quote
        </Link>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
        >
          <motion.span
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6.5 : 0 }}
            className="w-6 h-0.5 bg-ink block origin-center transition-colors"
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1 }}
            className="w-6 h-0.5 bg-ink block"
          />
          <motion.span
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6.5 : 0 }}
            className="w-6 h-0.5 bg-ink block origin-center transition-colors"
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-ink/40 backdrop-blur-sm md:hidden"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 w-72 max-w-[80%] bg-cream border-l border-ink/10 md:hidden flex flex-col px-6 py-8"
            >
              <nav className="flex flex-col gap-1 mt-16">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `py-3 border-b border-ink/10 text-base ${isActive ? 'text-oxide font-semibold' : 'text-ink'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>

              <Link
                to="/contact-rfq"
                className="mt-8 text-center bg-oxide hover:bg-bronze-deep text-cream text-sm font-semibold px-4 py-3 rounded transition-colors"
              >
                Request a Quote
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}