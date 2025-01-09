import React, { useState } from 'react';

export default function Section1() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <div className="text-center max-w-screen-2xl mx-auto py-12 px-6">
        <h1 className="text-[#01319f] font-bold leading-none text-[40px] md:text-[64px]  mb-6">
          <span className="text-[#14A660]">JOIN</span> THE IMMIGRATION BOOM
        </h1>
        <div className="w-[90%] md:w-[85%] text-justify text-[16px] md:text-[20px] leading-relaxed max-w-5xl mx-auto mt-10">
          {isExpanded
            ? `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quidem
          tempora id dolorum aliquam totam ab natus, doloribus reiciendis, nam
          aperiam distinctio quisquam suscipit aut dolores exercitationem cumque
          officiis ad quis nulla! Amet delectus neque magnam praesentium, voluptas
          numquam, possimus nam deleniti blanditiis laborum, in quisquam alias
          tempora sunt ea. Nulla labore obcaecati impedit minus sunt autem
          recusandae repellendus quo, iste aliquid, ea aspernatur cupiditate
          deleniti distinctio cum voluptas! Ipsam temporibus molestiae dicta
          soluta aspernatur quibusdam ducimus animi dolore, nulla fugit porro et
          nisi at reiciendis esse explicabo ullam voluptatum facere tempore
          officiis obcaecati maiores cumque, ipsum repudiandae! Fugiat, ipsa?`
            : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quidem
          tempora id dolorum aliquam totam ab natus, doloribus reiciendis,...`}
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
