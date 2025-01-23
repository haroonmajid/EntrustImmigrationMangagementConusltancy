import React, { useState } from 'react';

export default function Section1() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <div className="text-center max-w-screen-xl mx-auto py-12 px-6">
        <h1 className="text-[#01319f] font-bold leading-none text-[38px] md:text-[48px]  mb-6">
          <span className="text-[#14A660]">JOIN</span> THE IMMIGRATION BOOM
        </h1>
        <div className="w-[90%] md:w-[85%] text-justify text-[16px] md:text-[18px] leading-relaxed max-w-5xl mx-auto mt-10">
          {isExpanded
            ? `The world is on the move, and opportunities are waiting for you! At Entrust Immigration Consultants, we are here to guide you every step of the way as you embark on your immigration journey. Whether you're pursuing a better future, advancing your career, or reuniting with loved ones, our experienced team specializes in providing personalized immigration solutions tailored to your unique needs. Why wait? Join the growing wave of individuals and families who are transforming their lives through immigration. Take the first step toward a brighter tomorrow with Entrust Immigration Consultants – your trusted partner in making dreams a reality.`
            : `The world is on the move, and opportunities are waiting for you! At Entrust Immigration Consultants, we are here to guide you every step of the way as you embark on your immigration journey...`}
          <button
            onClick={toggleReadMore}
            className="ml-2 text-[#14A660] font-bold hover:text-[#01319f] focus:outline-none"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        </div>
        <img src="/pic-3.PNG" alt="Immigration Boom" className="w-full max-w-screen-lg mx-auto" />
      </div>
    </>
  );
}
