import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useTransform } from 'motion/react'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const rings = [
  { r: 130, dash: '1 10', color: '#9C6B2E', opacity: 0.3, duration: 34, dir: 1 },
  { r: 105, dash: '6 8', color: '#6E4419', opacity: 0.35, duration: 24, dir: -1 },
  { r: 80, dash: '2 6', color: '#EAC98A', opacity: 0.45, duration: 18, dir: 1 },
  { r: 55, dash: '4 4', color: '#B5502A', opacity: 0.4, duration: 14, dir: -1 },
]

function spiralKeyframes(startAngleDeg, steps = 20, turns = 2.5, rOuter = 140, rInner = 8) {
  const cx = []
  const cy = []
  for (let i = 0; i <= steps; i++) {
    const t = i / steps
    const angle = (startAngleDeg + t * turns * 360) * (Math.PI / 180)
    const radius = rOuter - t * (rOuter - rInner)
    cx.push(150 + radius * Math.cos(angle))
    cy.push(150 + radius * Math.sin(angle))
  }
  return { cx, cy }
}

const particles = [0, 60, 120, 180, 240, 300].map((angle, i) => ({
  ...spiralKeyframes(angle),
  delay: i * 1.1,
  color: i % 2 === 0 ? '#EAC98A' : '#B5502A',
}))

function Portal() {
  const wrapRef = useRef(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  function handleMove(e) {
    const rect = wrapRef.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    rotateY.set(px * 16)
    rotateX.set(py * -16)
  }
  function handleLeave() {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <div style={{ perspective: 900 }} className="relative w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
      <motion.div
        ref={wrapRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        transition={{ type: 'spring', stiffness: 120, damping: 12 }}
        className="relative aspect-square"
      >
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 m-auto w-32 h-32 md:w-40 md:h-40 rounded-full bg-bronze-shine/35 blur-2xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.65, 0.4] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        <svg viewBox="0 0 300 300" className="absolute inset-0 w-full h-full overflow-visible">
          <defs>
            <linearGradient id="ingotFill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#EAC98A" />
              <stop offset="100%" stopColor="#9C6B2E" />
            </linearGradient>
            <clipPath id="ingotClip">
              <rect x="112" y="136" width="76" height="28" rx="6" />
            </clipPath>
            <radialGradient id="portalGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#EAC98A" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#EAC98A" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx="150" cy="150" r="145" fill="url(#portalGlow)" />

          {rings.map((ring) => (
            <motion.circle
              key={ring.r}
              cx="150" cy="150" r={ring.r}
              fill="none"
              stroke={ring.color}
              strokeOpacity={ring.opacity}
              strokeWidth="1.5"
              strokeDasharray={ring.dash}
              style={{ transformOrigin: '150px 150px' }}
              animate={{ rotate: 360 * ring.dir }}
              transition={{ duration: ring.duration, repeat: Infinity, ease: 'linear' }}
            />
          ))}

          {particles.map((p, i) => (
            <motion.circle
              key={i}
              r="2.6"
              fill={p.color}
              animate={{ cx: p.cx, cy: p.cy, opacity: [0, 1, 1, 1, 0] }}
              transition={{ duration: 5, delay: p.delay, repeat: Infinity, ease: 'easeIn' }}
            />
          ))}

          <rect x="112" y="136" width="76" height="28" rx="6" fill="url(#ingotFill)" />
          <rect x="112" y="136" width="76" height="3" rx="1.5" fill="rgba(255,255,255,0.45)" />
          <g clipPath="url(#ingotClip)">
            <motion.rect
              x="0" y="120" width="18" height="60"
              fill="rgba(255,255,255,0.55)"
              initial={{ x: -40 }}
              animate={{ x: 260 }}
              transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 2.2, ease: 'easeInOut' }}
              style={{ transform: 'skewX(-20deg)' }}
            />
          </g>
        </svg>
      </motion.div>

      <p className="absolute -bottom-2 left-1/2 -translate-x-1/2 font-mono text-[9px] uppercase tracking-[0.2em] text-bronze-deep/70">
        Secondary Aluminium Ingot
      </p>
    </div>
  )
}

function AmbientBlob({ className, color, duration, delay = 0 }) {
  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      style={{ background: color }}
      animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

export default function AboutSnapshot() {
  return (
    <section
      className="relative bg-cream py-24 md:py-32 overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at 15% 20%, rgba(234,201,138,0.35), transparent 45%),
          radial-gradient(circle at 85% 75%, rgba(181,80,42,0.12), transparent 50%),
          repeating-linear-gradient(45deg, rgba(110,68,25,0.025) 0px, rgba(110,68,25,0.025) 1px, transparent 1px, transparent 10px)
        `,
      }}
    >
      <AmbientBlob className="w-72 h-72 -top-20 -left-16 opacity-60" color="#EAC98A" duration={9} />
      <AmbientBlob className="w-96 h-96 top-1/3 -right-24 opacity-40" color="#B5502A" duration={11} delay={1.5} />
      <AmbientBlob className="w-56 h-56 bottom-0 left-1/4 opacity-30" color="#9C6B2E" duration={13} delay={0.7} />

      <div className="max-w-7xl mx-auto px-6 relative grid md:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div className="hidden md:block absolute left-1/2 top-8 bottom-8 -translate-x-1/2 border-l border-dashed border-bronze-core/30" />
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-cream border border-bronze-core/50 items-center justify-center">
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-oxide"
            animate={{ scale: [1, 1.6, 1], opacity: [1, 0.4, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
        >
          <motion.p variants={item} className="font-mono text-xs tracking-[0.25em] uppercase text-bronze-deep mb-4">
            Our Story
          </motion.p>

          <motion.h2 variants={item} className="font-display text-3xl md:text-5xl font-bold text-ink leading-tight">
            Four Decades of Trusted Metal Trade
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="w-16 h-0.5 bg-oxide mt-5 origin-left"
          />

          <motion.p variants={item} className="mt-6 text-base md:text-lg text-ink/70 leading-relaxed">
            Founded in 1985 and headquartered in Ahmedabad, Gujarat, Sunil
            Metal Corporation is a trusted name in aluminium recycling and
            ferrous & non-ferrous metal trading. For four decades, our
            family-run partnership has processed aluminium-based and other
            metal scrap for domestic and international buyers. This
            infrastructure allows the company to maintain high standards of
            product quality and operational efficiency, while complying with
            environmental standards. Our operations follow the principles of
            the circular economy — recycling aluminium scrap instead of
            depending on primary aluminium products.
          </motion.p>

          <motion.div variants={item} className="flex gap-8 mt-8">
            <div>
              <p className="font-display text-2xl font-bold text-ink">1985</p>
              <p className="font-mono text-[10px] uppercase tracking-wide text-bronze-deep/70">Founded</p>
            </div>
            <div className="border-l border-bronze-core/30 pl-8">
              <p className="font-display text-2xl font-bold text-ink">40+</p>
              <p className="font-mono text-[10px] uppercase tracking-wide text-bronze-deep/70">Years Trading</p>
            </div>
          </motion.div>

        <motion.div variants={item} className="mt-8">
            <Link
                to="/about-us"
                className="inline-flex items-center gap-2 font-semibold text-ink border-2 border-ink rounded-full px-6 py-2.5 hover:bg-ink hover:text-cream transition-colors group"
            >
                Read our full story
                <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
        </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Portal />
        </motion.div>
      </div>
    </section>
  )
}