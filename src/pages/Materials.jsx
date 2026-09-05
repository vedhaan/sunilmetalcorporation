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
        description="Aluminium is our core specialisation. We buy and sell a wide range of aluminium scrap grades for recycling into secondary aluminium, including Used Beverage Cans (UBC), Taint / Tabor, Utensils, Aluminium Talk, Talon (Ec Grade Wire Soft & Shiny), Twang (Aluminium PVC Cables), Tablet (Litho Sheet), Tread (6063 & 6061 Extrusion ) Shredded T T , Zorba ,Tense, Dirty Radiator "
        forms={['Taint / Tabor', 'Cable & Wire', 'Extrusion 6063 & 6061', 'Shredded T T ', 'Sheet / Clippings', 'Castings', 'Turnings & Borings', 'Radiator', 'Zorba', 'Telic', 'UBC']}
        whatsappLabel="Enquire about Aluminium Scrap on WhatsApp"
      />

      <MaterialSection
        id="copper"
        index={2}
        code="Cu"
        name="Copper Scrap"
        accent="#B5502A"
        bg="tint"
        description="We trade all types of copper scrap including Mill Berry , Berry Candy 1 & 2 , Cloves , Cathodes, Birch Cliff , and Industrial Copper Off-Cuts, for buyers who need consistent grading and fair, transparent pricing across India. "
        forms={['Mill Berry', 'Berry Candy', 'Cloves', 'Cathodes', 'Birch Cliff', 'Industrial Off-Cuts']}
        whatsappLabel="Enquire about Copper Scrap on WhatsApp"
      />

      <MaterialSection
        id="lead"
        index={3}
        code="Pb"
        name="Lead Scrap"
        accent="#5B6470"
        bg="plain"
        description="Our lead scrap trading covers for Racks, Stripping , Primary & Secondary Ingots for smelters and manufacturers across India."
        forms={['Racks', 'Stripping', 'Ingots']}
        whatsappLabel="Enquire about Lead Scrap on WhatsApp"
      />

      <MaterialSection
        id="zinc"
        index={4}
        code="Zn"
        name="Zinc Scrap"
        accent="#8A9096"
        bg="tint"
        description="We buy zinc scrap, including Die cast, Saves, Scabs, Scull Shoes Die, Industrial zinc off-cuts, and supply to manufactures across India."
        forms={['Die Cast', 'Saves', 'Scabs', 'Scull Shoes Die', 'Industrial Off-Cuts']}
        whatsappLabel="Enquire about Zinc Scrap on WhatsApp"
      />

      <MaterialSection
        id="stainless-steel"
        index={5}
        code="SS"
        name="Stainless Steel Scrap"
        accent="#6E7681"
        bg="plain"
        description="Our stainless-steel scrap trading covers SCRAP GRADE OF (201, 410 , 304, 316), sheet, coil Alloy Base (Low Alloy, Low Nickel, Low Moly) and Fabrication Scrap for re-melters and manufacturers across India."
        forms={['201 SCRAP', '410 SCRAP', '304 SCRAP', '316 SCRAP', 'Sheet & Coil', 'Alloy Base', 'Fabrication Scrap']}
        whatsappLabel="Enquire about Stainless Steel Scrap on WhatsApp"
      />

      <MaterialSection
        id="ingot"
        index={6}
        code="In"
        name="Ingot"
        accent="#9C6B2E"
        bg="tint"
        description="We supply secondary Aluminium Ingots in a range of purity grades, produced from processed aluminium scrap for manufacturers requiring consistent, certified input material."
        forms={['96%', '97%', '98%', '98.5%', '99%']}
        formsLabel="Purity Grades Available"
        whatsappLabel="Enquire about Ingot on WhatsApp"
      />

      <MaterialsClosingCta />
    </>
  )
}