import React from 'react'
import Hero from '../Components/Hero'
import Contact from '../Components/Contact'
import Section1 from '../Components/Section1'
import Section2 from '../Components/Section2'
import Section3 from '../Components/Section3'
import Section4 from '../Components/Section4'
import Testimonials from '../Components/Testimonials'
import WhatsAppButton from '../Components/WhatsAppButton';
import Hero1 from '../Components/Hero1'
export default function Home() {
  return (
    <>
    <WhatsAppButton/>
    <Hero1></Hero1>
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
