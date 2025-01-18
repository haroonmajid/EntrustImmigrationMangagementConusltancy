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
            ? `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quidem
          tempora id dolorum aliquam totam ab natus, doloribus reiciendis, nam
          aperiam distinctio quisquam suscipit aut dolores exercitationem cumque
          officiis ad quis nulla! Amet delectus neque magnam praesentium, voluptas
          numquam, possimus nam deleniti blanditiis laborum, in quisquam alias
          tempora sunt ea. Nulla labore obcaecati impedit minus sunt autem
          recusandae repellendus quo, iste aliquid, ea aspernatur cupiditate
          deleniti distinctio cum voluptas!`
            : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quidem
          tempora id dolorum aliquam totam ab natus, doloribus reiciendis,...`}
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
            ? `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quidem
          tempora id dolorum aliquam totam ab natus, doloribus reiciendis, nam
          aperiam distinctio quisquam suscipit aut dolores exercitationem cumque
          officiis ad quis nulla! Amet delectus neque magnam praesentium, voluptas
          numquam, possimus nam deleniti blanditiis laborum, in quisquam alias
          tempora sunt ea. Nulla labore obcaecati impedit minus sunt autem
          recusandae repellendus quo, iste aliquid, ea aspernatur cupiditate
          deleniti distinctio cum voluptas!`
            : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quidem
          tempora id dolorum aliquam totam ab natus, doloribus reiciendis,...`}
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
            ? `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quidem
          tempora id dolorum aliquam totam ab natus, doloribus reiciendis, nam
          aperiam distinctio quisquam suscipit aut dolores exercitationem cumque
          officiis ad quis nulla! Amet delectus neque magnam praesentium, voluptas
          numquam, possimus nam deleniti blanditiis laborum, in quisquam alias
          tempora sunt ea. Nulla labore obcaecati impedit minus sunt autem
          recusandae repellendus quo, iste aliquid, ea aspernatur cupiditate
          deleniti distinctio cum voluptas!`
            : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quidem
          tempora id dolorum aliquam totam ab natus, doloribus reiciendis,...`}
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
      <div className="md:flex flex-col hidden md:flex-row justify-between gap-6 max-w-screen-2xl mx-auto px-4">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque saepe
            iusto officia, impedit illum magni possimus blanditiis voluptatum, vel
            consectetur velit! Error, earum. Voluptas veritatis ratione
            exercitationem sint aut alias rerum asperiores quae ea fuga impedit
            provident, eligendi minus corrupti ut dignissimos quod ad ab iure.
            Ipsam alias nihil inventore Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. At, quaerat suscipit id modi libero quae in, rerum
            molestiae, asperiores magnam assumenda accusamus laudantium nisi error
            vel dolor esse expedita adipisci.
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
      <div className="md:flex hidden flex-col md:flex-row justify-between gap-6 max-w-screen-2xl mx-auto px-4">
        <div className="text-center md:text-left py-6">
          <span className="text-[48px] text-[#01319f] font-bold leading-tight">
            <span className="text-[#14A660]">WORK PERMIT</span> <br /> IMMIGRATION
          </span>
          <p className="text-[18px] py-6 sm:py-4 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque saepe
            iusto officia, impedit illum magni possimus blanditiis voluptatum, vel
            consectetur velit! Error, earum. Voluptas veritatis ratione
            exercitationem sint aut alias rerum asperiores quae ea fuga impedit
            provident, eligendi minus corrupti ut dignissimos quod ad ab iure.
            Ipsam alias nihil inventore Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. At, quaerat suscipit id modi libero quae in, rerum
            molestiae, asperiores magnam assumenda accusamus laudantium nisi error
            vel dolor esse expedita adipisci.
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
      <div className="md:flex hidden flex-col md:flex-row justify-between gap-6 max-w-screen-2xl mx-auto px-4">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque saepe
            iusto officia, impedit illum magni possimus blanditiis voluptatum, vel
            consectetur velit! Error, earum. Voluptas veritatis ratione
            exercitationem sint aut alias rerum asperiores quae ea fuga impedit
            provident, eligendi minus corrupti ut dignissimos quod ad ab iure.
            Ipsam alias nihil inventore Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. At, quaerat suscipit id modi libero quae in, rerum
            molestiae, asperiores magnam assumenda accusamus laudantium nisi error
            vel dolor esse expedita adipisci.
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
