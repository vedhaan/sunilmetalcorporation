import RfqForm from '../components/contact/RfqForm'
import OfficeLocation from '../components/contact/OfficeLocation'
import FactoryLocation from '../components/contact/FactoryLocation'
import DirectContacts from '../components/contact/DirectContacts'
import BusinessHours from '../components/contact/BusinessHours'

export default function Contact() {
  return (
    <>
      <RfqForm />
      <OfficeLocation />
      <FactoryLocation />
      <DirectContacts />
      <BusinessHours />
    </>
  )
}