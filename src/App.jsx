import { Routes, Route } from 'react-router-dom'
import { MotionConfig } from 'motion/react'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import About from './pages/About'
import Materials from './pages/Materials'
import Certifications from './pages/Certifications'
import Contact from './pages/Contact'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-cream text-ink min-h-screen flex flex-col overflow-x-hidden">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/materials-we-deal-in" element={<Materials />} />
            <Route path="/certifications-facility-gallery" element={<Certifications />} />
            <Route path="/contact-rfq" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </MotionConfig>
  )
}