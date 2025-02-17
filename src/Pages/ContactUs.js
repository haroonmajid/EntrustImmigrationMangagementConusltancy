import React from 'react'
import Contact from '../Components/Contact'
import '..//App.css'
import WhatsAppButton from '../Components/WhatsAppButton'

export default function ContactUs() {
  return (
    <>
      <WhatsAppButton />
      <div className='text-center flex items-end contact-page pt-5'> <span className="text-[56px] py-11 text-[#01319F] w-full font-bold leading-none">
        CONTACT US
      </span></div>
      <Contact></Contact>
    </>
  )
}
