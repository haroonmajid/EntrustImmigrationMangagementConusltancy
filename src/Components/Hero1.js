import React from 'react'
import "./Contact.css"


function Hero1() {
  return (
    <>
    <div className="text-white h-[90vh] gap-10 md:gap-0 md:h-[90vh] hero1 flex flex-col pt-[15%] md:pt-[10%] font-bold text-left">
        <h1 className="w-[95%] text-[#01319f] hero1-heading md:w-[70%] mx-auto text-[20px] md:text-[52px] leading-snug">
        Welcome To
        <br />
          <h1 className='md:py-10'><span className='text-[28px] entrust-name md:text-[48px]'>  Entrust Immigration Management Consultancy  </span><br /><span className='text-[20px] md:text-[32px]'> Your Trusted Partner For Global Mobility & Immigration Services. </span> </h1>
        </h1>
        <div className="md:w-[70%] w-[95%] mx-auto text-left text-[16px] md:text-[18px] leading-relaxed text-[#01319f]">
      At <span className='text-[#14A660] font-bold text-[22px]'> Entrust</span>, we simplify the complexities of immigration, empowering individuals & <br /> businesses to realize their global aspirations with confidence & ease.
      </div>
      </div>
    </>
  )
}

export default Hero1