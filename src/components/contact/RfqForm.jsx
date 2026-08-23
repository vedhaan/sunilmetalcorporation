import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const WHATSAPP_NUMBER = '919824086604'

const metalTypes = ['Aluminium', 'Copper', 'Lead', 'Zinc', 'Nickel', 'Stainless Steel', 'Other']

const initialForm = {
  name: '', company: '', email: '', phone: '',
  metalType: '', quantity: '', message: '',
}

function buildWhatsAppMessage(form, hasPhoto) {
  const lines = [
    'New RFQ — Sunil Metal Corporation Website',
    '',
    `Name: ${form.name}`,
    `Company: ${form.company || '—'}`,
    `Email: ${form.email}`,
    `Phone / WhatsApp: ${form.phone}`,
    `Metal Type: ${form.metalType}`,
    `Approx. Quantity: ${form.quantity || '—'}`,
    `Message: ${form.message || '—'}`,
  ]
  if (hasPhoto) {
    lines.push('', '(Photo attached separately — will send in this chat)')
  }
  return lines.join('\n')
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="block text-xs font-mono uppercase tracking-wide text-bronze-deep mb-1.5">
        {label} {required && <span className="text-oxide">*</span>}
      </span>
      {children}
    </label>
  )
}

const inputClass = "w-full bg-cream border border-ink/15 rounded-lg px-4 py-2.5 text-ink focus:outline-none focus:border-oxide transition-colors"

function SummaryPanel({ form, photo }) {
  const rows = [
    { label: 'Name', value: form.name },
    { label: 'Company', value: form.company },
    { label: 'Email', value: form.email },
    { label: 'Phone', value: form.phone },
    { label: 'Metal Type', value: form.metalType },
    { label: 'Quantity', value: form.quantity },
  ]
  const filledCount = rows.filter((r) => r.value).length + (photo ? 1 : 0)

  return (
    <div className="lg:sticky lg:top-24">
      <div className="border border-bronze-core/30 rounded-2xl p-6 md:p-7 bg-ink text-cream">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bronze-shine/70 mb-1">
          Your Enquiry
        </p>
        <h3 className="font-display text-xl font-bold mb-6">RFQ Summary</h3>

        <div className="space-y-3">
          {rows.map((r) => (
            <div key={r.label} className="flex items-start justify-between gap-3 text-sm border-b border-cream/10 pb-2.5">
              <span className="text-cream/50 shrink-0">{r.label}</span>
              <span className={`text-right ${r.value ? 'text-cream font-medium' : 'text-cream/30 italic'}`}>
                {r.value || 'Not yet filled'}
              </span>
            </div>
          ))}
          <div className="flex items-center justify-between gap-3 text-sm">
            <span className="text-cream/50">Photo</span>
            <span className={photo ? 'text-cream font-medium' : 'text-cream/30 italic'}>
              {photo ? photo.name : 'None attached'}
            </span>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-cream/10">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-cream/50 font-mono uppercase tracking-wide">Completion</span>
            <span className="text-bronze-shine font-mono">{filledCount}/7</span>
          </div>
          <div className="h-1.5 bg-cream/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-bronze-shine to-oxide rounded-full"
              animate={{ width: `${(filledCount / 7) * 100}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </div>
        </div>

        <p className="text-xs text-cream/40 mt-6 leading-relaxed">
          Submitting opens WhatsApp with this information pre-filled — nothing
          sends until you hit "Send" inside WhatsApp itself.
        </p>
      </div>
    </div>
  )
}

export default function RfqForm() {
  const [form, setForm] = useState(initialForm)
  const [photo, setPhoto] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const message = buildWhatsAppMessage(form, Boolean(photo))
    const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(waHref, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  function handleReset() {
    setForm(initialForm)
    setPhoto(null)
    setSubmitted(false)
  }

  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-bronze-deep mb-4">
            Request a Quote
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-ink leading-tight">
            Get in Touch
          </h1>
          <p className="mt-4 text-ink/60">
            Fill in your details and we'll respond fast — or chat with us directly on WhatsApp.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-[1fr_320px] gap-8 items-start"
            >
              <form
                onSubmit={handleSubmit}
                className="bg-white/40 border border-ink/10 rounded-2xl p-6 md:p-10 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Name" required>
                    <input type="text" name="name" required value={form.name} onChange={handleChange} className={inputClass} />
                  </Field>
                  <Field label="Company Name">
                    <input type="text" name="company" value={form.company} onChange={handleChange} className={inputClass} />
                  </Field>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Email" required>
                    <input type="email" name="email" required value={form.email} onChange={handleChange} className={inputClass} />
                  </Field>
                  <Field label="Phone / WhatsApp Number" required>
                    <input type="tel" name="phone" required value={form.phone} onChange={handleChange} className={inputClass} />
                  </Field>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Metal Type" required>
                    <select name="metalType" required value={form.metalType} onChange={handleChange} className={inputClass}>
                      <option value="" disabled>Select a metal</option>
                      {metalTypes.map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Approx. Quantity">
                    <input type="text" name="quantity" placeholder="e.g. 5 MT" value={form.quantity} onChange={handleChange} className={`${inputClass} placeholder:text-ink/30`} />
                  </Field>
                </div>

                <Field label="Message">
                  <textarea name="message" rows={4} value={form.message} onChange={handleChange} className={`${inputClass} resize-none`} />
                </Field>

                <Field label="Upload Photo (optional)">
                  <input
                    type="file" accept="image/*" onChange={(e) => setPhoto(e.target.files?.[0] || null)}
                    className="w-full text-sm text-ink/60 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-bronze-core/15 file:text-bronze-deep file:font-medium hover:file:bg-bronze-core/25 file:transition-colors"
                  />
                  <p className="text-xs text-ink/40 mt-1.5">
                    WhatsApp can't auto-attach files from a website link — after submitting, just attach this photo directly in the chat that opens.
                  </p>
                </Field>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-oxide hover:bg-bronze-deep text-cream font-semibold py-3.5 rounded-full transition-colors mt-2"
                >
                  Send via WhatsApp
                </motion.button>
              </form>

              <SummaryPanel form={form} photo={photo} />
            </motion.div>
          ) : (
            <motion.div
              key="confirmation"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/40 border border-ink/10 rounded-2xl p-10 text-center max-w-lg mx-auto"
            >
              <div className="w-14 h-14 rounded-full bg-oxide/15 border-2 border-oxide flex items-center justify-center mx-auto mb-5">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-oxide" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 13 L10 18 L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-ink">Request Sent</h3>
              <p className="text-ink/60 mt-2 max-w-sm mx-auto">
                Your enquiry opened in WhatsApp — send the message there to reach us, and attach your photo if you added one.
              </p>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-bronze-core hover:bg-bronze-deep text-cream font-semibold px-6 py-3 rounded-full transition-colors mt-6"
              >
                Prefer WhatsApp? Chat With Us Instantly
              </a>

              <button
                onClick={handleReset}
                className="block mx-auto text-sm text-ink/50 hover:text-oxide mt-5 underline underline-offset-2"
              >
                Submit another enquiry
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}