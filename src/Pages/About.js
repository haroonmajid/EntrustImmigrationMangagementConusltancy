import React from 'react'
import Section1 from '../Components/Section1'
import Hero from '../Components/Hero'
import WhatsAppButton from '../Components/WhatsAppButton'
import "../App.css"

export default function About() {
  return (
    <>
     <WhatsAppButton/>
     <div className='text-center flex items-end about-page pt-5'> <span className="text-[56px] py-11 text-white w-full font-bold leading-none">
        ABOUT US
      </span></div>
      <Hero></Hero>
      <Section1></Section1>
    </>
  )
} 
