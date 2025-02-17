import React from 'react'
import Hero from '../Components/Hero'
import Contact from '../Components/Contact'
import Section1 from '../Components/Section1'
import Section2 from '../Components/Section2'
import Section3 from '../Components/Section3'
import Section4 from '../Components/Section4'
import Testimonials from '../Components/Testimonials'
import WhatsAppButton from '../Components/WhatsAppButton';
export default function Home() {
  return (
    <>
    <WhatsAppButton/>
    <Contact></Contact>
    <Hero></Hero>
    <Section1></Section1>
    <Section2></Section2>
    {/* <Section3></Section3> */}
    <Testimonials/>
    <Section4/>
    </>
  )
}
