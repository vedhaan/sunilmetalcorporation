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
    <footer className="bg-ink text-cream/80">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="bg-cream rounded-full p-1.5 w-14 h-14 mb-3">
            <img src="/logo.jpg" alt="Sunil Metal Corporation" className="w-full h-full rounded-full object-contain" />
          </div>
          <p>Importers & Exporters, Ferrous & Non-Ferrous Metal dealers — Since 1985</p>

          <div className="flex gap-2 mt-4">
            {badges.map((b) => (
              <span
                key={b}
                className="font-mono text-[10px] uppercase tracking-wide text-bronze-shine/80 border border-cream/15 rounded-full px-2.5 py-1"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold text-cream mb-2">Quick Links</p>
          <ul className="space-y-1">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-bronze-shine transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-cream mb-2">Office</p>
          <p>103, Neelkanth Plaza, Shahibaug, Ahmedabad – 380 004</p>
          {/* <p>Tel: (+91 79) 2562 5146</p> */}
          <p className="font-semibold text-cream mt-3 mb-1">Factory</p>
          <p>243 to 245, G.I.D.C. Ind. Estate, Odhav, Ahmedabad – 382 415</p>
          {/* <p>Tel: (+91 79) 2287 1981</p> */}
        </div>

        <div>
          <p className="font-semibold text-cream mb-2">Email</p>
          <a href="mailto:sunilmetal@yahoo.com" className="hover:text-bronze-shine transition-colors">
            sunilmetal@yahoo.com
          </a>
          <br></br>
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

      <div className="border-t border-cream/10 text-center text-xs py-4 text-cream/60 space-y-1">
        <p>© {new Date().getFullYear()} Sunil Metal Corporation. All rights reserved.</p>
        <p className="text-cream/40">GST: 24AAVPB1273H1ZS</p>
      </div>
    </footer>
  )
}