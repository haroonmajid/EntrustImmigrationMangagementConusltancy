import React, { useState } from "react";

export default function Hero() {
   const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleReadMore = () => {
      setIsExpanded(!isExpanded);
    };
    const [isExpanded1, setIsExpanded1] = useState(false);
  
    const toggleReadMore1 = () => {
      setIsExpanded1(!isExpanded1);
    };
    const [isExpanded2, setIsExpanded2] = useState(false);
  
    const toggleReadMore2 = () => {
      setIsExpanded2(!isExpanded2);
    };
  return (
    <div className="pb-[30px] sm:py-8">
      {/* Title Section */}
      <h1 className="text-[48px] md:text-[64px] text-[#01319f] text-center py-12 font-bold sm:mb-8">
      <span className="text-[#14A660]"> ENTRUST</span> CONSULTANCY
      </h1>
      {/* SKILLED IMMIGRATION */}
      <div className="text-center md:hidden max-w-screen-2xl mx-auto px-6">
        <h1 className="text-[#01319f] font-bold leading-none text-[40px] md:text-[64px]  mb-6">
          <span className="text-[#14A660]">SKILLED</span> <br/> IMMIGRATION
        </h1>
        <img src="/pic-2.PNG" alt="Skilled Immigration" className="w-full max-w-screen-lg mx-auto" />
        <div className="w-[90%] md:w-[85%] text-justify text-[16px] md:text-[20px] leading-relaxed max-w-5xl mx-auto mt-10">
          {isExpanded
            ? `At Entrust Immigration Management Consultancy, we specialize in guiding skilled professionals toward securing opportunities in some of the world's most sought-after destinations. Skilled immigration programs are designed to attract individuals with the expertise, qualifications, and work experience that contribute to economic growth and innovation.`
            : `At Entrust Immigration Management Consultancy, we specialize in guiding skilled professionals toward securing opportunities in some of the world's most sought-after destinations...`}
          <button
            onClick={toggleReadMore}
            className="ml-2 text-[#14A660] font-bold hover:text-[#01319f] focus:outline-none"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        </div>
        
        <button
            type="submit"
            className="w-full md:w-1/3 py-3 px-6 mb-5 font-semibold text-[#01319f] rounded-md hover:bg-[#01319f] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#01319f] text-[18px] border-[1px] border-solid border-[#14A660]"
          >
            Learn More
          </button>
      </div>
      <div className="text-center md:hidden max-w-screen-2xl mx-auto py-12 px-6">
        <h1 className="text-[#01319f] font-bold leading-none text-[40px] md:text-[64px]  mb-6">
          <span className="text-[#14A660]">WORK PERMIT</span> <br/> IMMIGRATION
        </h1>
        <img src="/work_permit_banner.jpg" alt="Skilled Immigration" className="w-full max-w-screen-lg mx-auto" />
        <div className="w-[90%] md:w-[85%] text-justify text-[16px] md:text-[20px] leading-relaxed max-w-5xl mx-auto mt-10">
          {isExpanded1
            ? `Unlock global career opportunities with Entrust Immigration Management Consultancy. Work permit immigration allows individuals to live and work abroad while gaining international experience and advancing their professional growth. Whether you’re a skilled worker, a professional, or someone seeking short-term work opportunities, we’re here to guide you every step of the way.`
            : `Unlock global career opportunities with Entrust Immigration Management Consultancy...`}
          <button
            onClick={toggleReadMore1}
            className="ml-2 text-[#14A660] font-bold hover:text-[#01319f] focus:outline-none"
          >
            {isExpanded1 ? 'Show Less' : 'Show More'}
          </button>
        </div>
        
        <button
            type="submit"
            className="w-full md:w-1/3 py-3 px-6 mb-5 font-semibold text-[#01319f] rounded-md hover:bg-[#01319f] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#01319f] text-[18px] border-[1px] border-solid border-[#14A660]"
          >
            Learn More
          </button>
      </div>
      <div className="text-center md:hidden max-w-screen-2xl mx-auto px-6">
        <h1 className="text-[#01319f] font-bold leading-none text-[40px] md:text-[64px]  mb-6">
          <span className="text-[#14A660]">TOURIST</span> <br/> VISA
        </h1>
        <img   src="./tourist_visa_banner.jpg" alt="Skilled Immigration" className="w-full max-w-screen-lg mx-auto" />
        <div className="w-[90%] md:w-[85%] text-justify text-[16px] md:text-[20px] leading-relaxed max-w-5xl mx-auto mt-10">
          {isExpanded2
            ? `Explore the world with ease through Entrust Immigration Management Consultancy. A tourist visa is your gateway to experiencing breathtaking destinations, diverse cultures, and unforgettable adventures. Whether you're planning a vacation, visiting loved ones, or exploring new horizons, we’re here to make the process seamless and stress-free.`
            : `Explore the world with ease through Entrust Immigration Management Consultancy. A tourist visa is your gateway to experiencing breathtaking destinations,...`}
          <button
            onClick={toggleReadMore2}
            className="ml-2 text-[#14A660] font-bold hover:text-[#01319f] focus:outline-none"
          >
            {isExpanded2 ? 'Show Less' : 'Show More'}
          </button>
        </div>
        
        <button
            type="submit"
            className="w-full md:w-1/3 py-3 px-6 mb-5 font-semibold text-[#01319f] rounded-md hover:bg-[#01319f] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#01319f] text-[18px] border-[1px] border-solid border-[#14A660]"
          >
            Learn More
          </button>
      </div>

      {/* Section 1 */}
      <div className="md:flex flex-col hidden md:items-center md:gap-11 md:flex-row justify-between gap-6 max-w-screen-xl mx-auto px-4">
        <img
          src="./pic-2.PNG"
          alt=""
          className="hidden md:block md:w-1/2 object-cover"
        />
        <div className="text-center md:text-left py-6">
          <span className="text-[48px] text-[#01319f] font-bold leading-tight">
            <span className="text-[#14A660]">SKILLED</span> <br /> IMMIGRATION
          </span>
          <p className="text-[18px] py-6 sm:py-4 text-justify">
          At Entrust Immigration Management Consultancy, we specialize in guiding skilled professionals toward securing opportunities in some of the world's most sought-after destinations. Skilled immigration programs are designed to attract individuals with the expertise, qualifications, and work experience that contribute to economic growth and innovation.
          </p>
          <button
            type="submit"
            className="w-full md:w-1/3 py-3 px-6 mb-5 font-semibold text-[#01319f] rounded-md hover:bg-[#01319f] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#01319f] text-[18px] border-[1px] border-solid border-[#14A660]"
          >
            Learn More
          </button>
          
        </div>
      </div>

      {/* Section 2 */}
      <div className="md:flex hidden items-center flex-col md:flex-row justify-between gap-6 max-w-screen-xl mx-auto px-4">
        <div className="text-center md:text-left py-6">
          <sp363
          an className="text-[48px] text-[#01319f] font-bold leading-tight">
            <span className="text-[#14A660]">WORK PERMIT</span> <br /> IMMIGRATION
          </sp363>
          <p className="text-[18px] py-11 sm:py-4 text-justify">
          Unlock global career opportunities with Entrust Immigration Management Consultancy. Work permit immigration allows individuals to live and work abroad while gaining international experience and advancing their professional growth. Whether you’re a skilled worker, a professional, or someone seeking short-term work opportunities, we’re here to guide you every step of the way.
          </p>
          <button
            type="submit"
            className="w-full md:w-1/3 py-3 px-6 mb-5 font-semibold text-[#01319f] rounded-md hover:bg-[#01319f] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#01319f] text-[18px] border-[1px] border-solid border-[#14A660]"
          >
            Learn More
          </button>
        </div>
        <img
          src="./work_permit_banner.jpg"
          alt=""
          className="hidden md:block md:w-1/2 object-cover"
        />
      </div>

      {/* Section 3 */}
      <div className="md:flex hidden flex-col md:flex-row justify-between gap-6 max-w-screen-xl mx-auto px-4">
        <img
          src="./tourist_visa_banner.jpg"
          alt=""
          className="hidden md:block md:w-1/2 object-cover"
        />
        <div className="text-center md:text-left py-6">
          <span className="text-[48px] text-[#01319f] font-bold leading-tight">
            <span className="text-[#14A660]">TOURIST</span> <br /> VISA
          </span>
          <p className="text-[18px] py-6 sm:py-4 text-justify">
          Explore the world with ease through Entrust Immigration Management Consultancy. A tourist visa is your gateway to experiencing breathtaking destinations, diverse cultures, and unforgettable adventures. Whether you're planning a vacation, visiting loved ones, or exploring new horizons, we’re here to make the process seamless and stress-free.
          </p>
          <button
            type="submit"
            className="w-full md:w-1/3 py-3 px-6 mb-5 font-semibold text-[#01319f] rounded-md hover:bg-[#01319f] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#01319f] text-[18px] border-[1px] border-solid border-[#14A660]"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
