import PageIntro from '../components/materials/PageIntro'
import MaterialsNav from '../components/materials/MaterialsNav'
import MaterialSection from '../components/materials/MaterialSection'
import MaterialsClosingCta from '../components/materials/MaterialsClosingCta'

export default function Materials() {
  return (
    <>
      <PageIntro />
      <MaterialsNav />

      <MaterialSection
        id="aluminium"
        index={1}
        code="Al"
        name="Aluminium Scrap"
        flagship
        accent="#9C9C9C"
        bg="plain"
        description="Aluminium is our core specialisation. We buy and sell a wide range of aluminium scrap grades for recycling into secondary aluminium, including used beverage cans (UBC), extrusion scrap, sheet and clippings, wire & cable, castings, and turnings & borings."
        forms={['UBC', 'Extrusion Scrap', 'Sheet / Clippings', 'Wire & Cable', 'Castings', 'Turnings & Borings', 'Taint/Tabor']}
        whatsappLabel="Enquire about Aluminium Scrap on WhatsApp"
      />

      <MaterialSection
        id="copper"
        index={2}
        code="Cu"
        name="Copper Scrap"
        accent="#B5502A"
        bg="tint"
        description="We trade copper scrap including wire, cable and industrial copper off-cuts, for buyers who need consistent grading and fair, transparent pricing."
        forms={['Wire', 'Cable', 'Industrial Off-Cuts']}
        whatsappLabel="Enquire about Copper Scrap on WhatsApp"
      />

      <MaterialSection
        id="lead"
        index={3}
        code="Pb"
        name="Lead Scrap"
        accent="#5B6470"
        bg="plain"
        description="Our lead scrap trading covers industrial lead scrap for smelters and manufacturers across India."
        forms={['Industrial Lead Scrap']}
        whatsappLabel="Enquire about Lead Scrap on WhatsApp"
      />

      <MaterialSection
        id="zinc"
        index={4}
        code="Zn"
        name="Zinc Scrap"
        accent="#8A9096"
        bg="tint"
        description="We supply and buy zinc scrap, including die-cast and industrial zinc off-cuts, for galvanising and alloy manufacturers."
        forms={['Die-Cast', 'Industrial Off-Cuts']}
        whatsappLabel="Enquire about Zinc Scrap on WhatsApp"
      />

      <MaterialSection
        id="stainless-steel"
        index={5}
        code="SS"
        name="Stainless Steel Scrap"
        accent="#6E7681"
        bg="plain"
        description="Our stainless steel scrap trading covers sheet, coil and fabrication scrap for re-melters and manufacturers."
        forms={['Sheet', 'Coil', 'Fabrication Scrap']}
        whatsappLabel="Enquire about Stainless Steel Scrap on WhatsApp"
      />

      <MaterialSection
        id="ingot"
        index={6}
        code="In"
        name="Ingot"
        accent="#9C6B2E"
        bg="tint"
        description="We supply secondary aluminium ingots in a range of purity grades, produced from processed aluminium scrap for manufacturers requiring consistent, certified input material."
        forms={['97%', '98%', '98.5%', '99%']}
        formsLabel="Purity Grades Available"
        whatsappLabel="Enquire about Ingot on WhatsApp"
      />

      <MaterialsClosingCta />
    </>
  )
}