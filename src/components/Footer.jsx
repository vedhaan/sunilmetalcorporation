export default function Footer() {
  return (
    <footer className="bg-ink text-cream/80">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="bg-cream rounded-full p-1.5 w-14 h-14 mb-3">
            <img src="/logo.jpg" alt="Sunil Metal Corporation" className="w-full h-full rounded-full object-contain" />
          </div>
          <p>Importers & Exporters, Ferrous & Non-Ferrous Metal Merchants — Since 1985</p>
        </div>
        <div>
          <p className="font-semibold text-cream mb-2">Quick Links</p>
          <ul className="space-y-1">
            <li>Home</li>
            <li>About & History</li>
            <li>Materials We Deal In</li>
            <li>Certifications & Gallery</li>
            <li>Contact / RFQ</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-cream mb-2">Office</p>
          <p>103, Neelkanth Plaza, Shahibaug, Ahmedabad – 380 004</p>
          <p>Tel: (+91 79) 2562 5146</p>
          <p className="font-semibold text-cream mt-3 mb-1">Factory</p>
          <p>243–245, G.I.D.C. Ind. Estate, Odhav, Ahmedabad – 382 415</p>
          <p>Tel: (+91 79) 2287 1981</p>
        </div>
        <div>
          <p className="font-semibold text-cream mb-2">Email</p>
          <p>sunilmetal@yahoo.com</p>
        </div>
      </div>
      <div className="border-t border-cream/10 text-center text-xs py-4 text-cream/60">
        © {new Date().getFullYear()} Sunil Metal Corporation. All rights reserved.
      </div>
    </footer>
  )
}