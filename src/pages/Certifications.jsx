import CertificationsSection from '../components/certifications/CertificationsSection'
import CredentialedLeadership from '../components/certifications/CredentialedLeadership'
import CommitmentSection from '../components/certifications/CommitmentSection'
import WhatWeStandFor from '../components/about/WhatWeStandFor'
import VerifiedClosingCta from '../components/certifications/VerifiedClosingCta'

export default function Certifications() {
  return (
    <>
      <CertificationsSection />
      <CredentialedLeadership />
      <CommitmentSection />
      <WhatWeStandFor />
      <VerifiedClosingCta />
    </>
  )
}