import { Link } from 'react-router-dom'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about-us', label: 'About & History' },
  { to: '/materials-we-deal-in', label: 'Materials We Deal In' },
  { to: '/certifications-facility-gallery', label: 'Certifications & Gallery' },
  { to: '/contact-rfq', label: 'Contact / RFQ' },
]

const badges = ['MRAI', 'ANMA']

export default function Footer() {
  return (
    <footer
      className="text-ink/70 border-t border-ink/10"
      style={{
        backgroundImage: `
          radial-gradient(circle at 15% 20%, rgba(234,201,138,0.18), transparent 45%),
          radial-gradient(circle at 90% 10%, rgba(181,80,42,0.08), transparent 45%),
          linear-gradient(180deg, #FAF6EF 0%, #F3E9D8 100%)
        `,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="w-32 h-22 mb-3">
            <img src="/logo-remove.jpg" alt="Sunil Metal Corporation" className="w-full h-full" />
          </div>
          <p className="text-ink/70">Importers & Exporters, Ferrous & Non-Ferrous Metal dealers — Since 1985</p>

          <div className="flex gap-2 mt-4">
            {badges.map((b) => (
              <span
                key={b}
                className="font-mono text-[10px] uppercase tracking-wide text-bronze-deep border border-ink/15 rounded-full px-2.5 py-1"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold text-ink mb-2">Quick Links</p>
          <ul className="space-y-1">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-ink/70 hover:text-oxide transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-ink mb-2">Office</p>
          <p className="text-ink/70">103, Neelkanth Plaza, Shahibaug, Ahmedabad – 380 004</p>
          <p className="font-semibold text-ink mt-3 mb-1">Factory</p>
          <p className="text-ink/70">243 to 245, G.I.D.C. Ind. Estate, Odhav, Ahmedabad – 382 415</p>
        </div>

        <div>
          <p className="font-semibold text-ink mb-2">Email</p>
          <a href="mailto:sunilmetal@yahoo.com" className="text-ink/70 hover:text-oxide transition-colors">
            sunilmetal@yahoo.com
          </a>
          <br />
          <a
            href="https://wa.me/919824086604?text=Hi%2C%20I%27d%20like%20to%20get%20in%20touch."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold text-cream bg-oxide hover:bg-bronze-deep rounded-full px-4 py-2 transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-ink/10 text-center text-xs py-4 text-ink/50 space-y-1">
        <p>© {new Date().getFullYear()} Sunil Metal Corporation. All rights reserved.</p>
        <p className="text-ink/35">GST: 24AAVPB1273H1ZS</p>
      </div>
    </footer>
  )
}