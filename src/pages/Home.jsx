import Hero from '../components/home/Hero'
import TrustStrip from '../components/home/TrustStrip'
import AboutSnapshot from '../components/home/AboutSnapshot'
import MaterialsSnapshot from '../components/home/MaterialsSnapshot'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Leadership from '../components/about/Leadership'
import CertificationsTeaser from '../components/home/CertificationsTeaser'
import FaqSnippet from '../components/home/FaqSnippet'
import ClosingCta from '../components/home/ClosingCta'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutSnapshot />
      <MaterialsSnapshot />
      <WhyChooseUs />
      <Leadership />
      <CertificationsTeaser />
      <FaqSnippet />
      <ClosingCta />
    </>
  )
}