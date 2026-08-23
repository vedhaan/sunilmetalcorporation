import { useState, useEffect } from 'react'
import { motion } from 'motion/react'

function getIsOpenNow() {
  const now = new Date()
  const day = now.getDay()
  const hour = now.getHours() + now.getMinutes() / 60
  const isMonToSat = day >= 1 && day <= 6
  const isWithinHours = hour >= 10 && hour < 19
  return isMonToSat && isWithinHours
}

export default function BusinessHours() {
  const [isOpen, setIsOpen] = useState(getIsOpenNow)

  useEffect(() => {
    const interval = setInterval(() => setIsOpen(getIsOpenNow()), 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-cream pb-20 md:pb-28">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="bg-ink rounded-2xl shadow-xl border border-bronze-deep/40 px-8 py-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center"
        >
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              {isOpen && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-oxide opacity-60" />
              )}
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isOpen ? 'bg-oxide' : 'bg-cream/30'}`} />
            </span>
            <span className={`font-mono text-xs uppercase tracking-wide ${isOpen ? 'text-oxide' : 'text-cream/50'}`}>
              {isOpen ? 'Open Now' : 'Currently Closed'}
            </span>
          </div>

          <span className="hidden sm:block w-px h-4 bg-cream/15" />

          <p className="font-mono text-xs uppercase tracking-wide text-cream/60">
            Mon–Sat &nbsp;&middot;&nbsp; 10:00 AM–7:00 PM
          </p>
        </motion.div>
      </div>
    </section>
  )
}