import { NavLink, Link } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about-us', label: 'About & History' },
  { to: '/materials-we-deal-in', label: 'Materials We Deal In' },
  { to: '/certifications-facility-gallery', label: 'Certifications & Gallery' },
  { to: '/contact-rfq', label: 'Contact / RFQ' },
]

export default function Header() {
  return (
    <header className="bg-ink text-cream">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" aria-label="Sunil Metal Corporation — Home">
          <img src="/logo.jpg" alt="Sunil Metal Corporation" className="h-14 w-14 rounded-full object-cover" />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? 'text-bronze-shine font-semibold'
                  : 'text-cream hover:text-bronze-shine transition-colors'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact-rfq"
          className="hidden md:inline-block bg-bronze-core hover:bg-bronze-deep text-cream text-sm font-semibold px-4 py-2 rounded transition-colors"
        >
          Request a Quote
        </Link>
      </div>
    </header>
  )
}