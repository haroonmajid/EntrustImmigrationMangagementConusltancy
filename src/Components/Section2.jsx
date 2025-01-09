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
          ? `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, eum? Non quo, ad amet enim alias ullam voluptatem, soluta eligendi porro tempore et itaque dolore ipsa id praesentium ut? Corporis quidem fugiat libero adipisci modi consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque quis officia itaque similique architecto sunt rerum consequatur!`
          : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, eum? Non quo, ad amet enim alias ullam voluptatem,...`}
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
