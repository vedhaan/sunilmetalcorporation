import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'

const photos = [
  { src: '/gallery/facility-1.jpg', alt: 'Sunil Metal Corporation processing facility', rotate: '-rotate-6', z: 'z-10', offset: '' },
  { src: '/gallery/facility-2.jpg', alt: 'Sunil Metal Corporation facility floor', rotate: 'rotate-0', z: 'z-20', offset: 'md:-mt-6' },
  { src: '/gallery/facility-3.jpg', alt: 'Sunil Metal Corporation quality control area', rotate: 'rotate-6', z: 'z-10', offset: '' },
]

function Lightbox({ photo, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-ink/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt}
    >
      <motion.button
        onClick={onClose}
        aria-label="Close image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-cream/10 hover:bg-cream/20 border border-cream/30 flex items-center justify-center text-cream transition-colors z-10"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 6 L18 18 M6 18 L18 6" strokeLinecap="round" />
        </svg>
      </motion.button>

      <motion.img
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        src={photo.src}
        alt={photo.alt}
        className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
      />
    </motion.div>
  )
}

export default function CertificationsTeaser() {
  const [activePhoto, setActivePhoto] = useState(null)

  return (
    <section className="bg-cream py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-bronze-deep mb-4">
            Inside SMC
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-ink leading-tight">
            See Our Facility
          </h2>
          <p className="mt-5 text-ink/70 leading-relaxed max-w-md">
            From our processing floor in Odhav GIDC to our MRAI and ANMA
            membership certificates — a look at the operation behind four
            decades of trade.
          </p>

          <Link
            to="/certifications-facility-gallery"
            className="inline-flex items-center gap-2 font-semibold text-ink border-2 border-ink rounded-full px-6 py-2.5 mt-8 hover:bg-ink hover:text-cream transition-colors group"
          >
            See inside our facility
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center items-start"
        >
          {photos.map((p, i) => (
            <motion.button
              key={p.src}
              onClick={() => setActivePhoto(p)}
              aria-label={`View larger: ${p.alt}`}
              whileHover={{ rotate: 0, scale: 1.06, zIndex: 30 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              className={`relative ${p.z} ${p.offset} ${i > 0 ? '-ml-8 md:-ml-10' : ''} ${p.rotate} bg-cream p-2 pb-6 shadow-xl border border-ink/10 rounded-sm cursor-pointer`}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="w-32 h-40 md:w-40 md:h-52 object-cover bg-ink/5"
              />
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {activePhoto && <Lightbox photo={activePhoto} onClose={() => setActivePhoto(null)} />}
      </AnimatePresence>
    </section>
  )
}