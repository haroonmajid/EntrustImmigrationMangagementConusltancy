import React from 'react'
import WhatsAppButton from '../Components/WhatsAppButton'
import Section3 from '../Components/Section3'
// import Section2 from '../Components/Section2'
// import Section3 from '../Components/Section3'

export default function OtherServices() {
  return (
    <>
    <WhatsAppButton />
      <div className='text-center flex items-end otherservices-page pt-5'> <span className="text-[56px] py-11 text-[#01319F] w-full font-bold leading-none">
        OTHER SERVICES
      </span></div>
      <Section3/>
    </>
  )
}
