import React, { useState } from 'react';


  
function Section2() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <div className="text-center max-w-screen-2xl mx-auto py-12 px-6">
        <h2 className="text-[#01319f] font-bold leading-none text-[40px] md:text-[56px] mb-8">
          <span className="text-[#14A660]">GET CLOSER</span> TO YOUR IMMIGRATION DREAMS
        </h2>
        <div className="w-[90%] md:w-[85%] text-justify text-[16px] md:text-[20px] leading-relaxed max-w-5xl mx-auto mt-10">
        {isExpanded
          ? `Your dream of a better life abroad is closer than you think. At Entrust Immigration Consultants, we specialize in turning your aspirations into reality with expert guidance, personalized strategies, and unwavering support. No matter where you’re starting from, our team is here to simplify the immigration process and help you navigate every step with confidence. Whether it’s for work, education, or family reunification, we’ll make sure your journey is smooth and stress-free. Don’t just dream it—live it. Get started today and bring your immigration dreams to life with Entrust Immigration Consultants!`
          : `Your dream of a better life abroad is closer than you think. At Entrust Immigration Consultants, we specialize in turning your aspirations into reality with expert guidance,...`}
        <button
          onClick={toggleReadMore}
          className="ml-2 text-[#14A660] font-bold hover:text-[#01319f] focus:outline-none"
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      </div>
      </div>
    </>
  );
}

export default Section2;
