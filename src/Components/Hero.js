import React from 'react';
import { Button } from 'react-bootstrap';

export default function Hero() {
  return (
    <div className="py-[100px]">
      <div className="text-[64px] sm:text-[24px] text-[#002F97] text-center font-bold mb-[100px]">
        Entrust Consultancy
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-11 max-w-screen-2xl mx-auto px-4">
        <img src="./pic-2.PNG" alt="" className="w-full hidden md:block md:w-1/2 object-cover" />
        <div className="text-center md:text-left py-10">
          <span className="text-[64px] text-[#002F97] font-bold leading-none">
            <span className="text-[#14A660] sm:text-[24px]">SKILLED</span> <br /> IMMIGRATION
          </span>
          <p className="text-[20px] sm:text-justify py-11 text-justify">
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
        className="w-1/3 py-3 px-6 mb-5 font-semibold text-[#002F97] rounded-md hover:bg-[#002F97] hover:text-white focus:outline-none focus:ring-2 focus:[#002F97] text-[28px] border-[1px] border-solid border-[#14A660]"
      >
        Learn More
      </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-11 max-w-screen-2xl mx-auto px-4">
        <div className="text-center md:text-left py-10">
          <span className="text-[64px] text-[#002F97] font-bold leading-none">
            <span className="text-[#14A660]">WORK PERMIT</span> <br /> IMMIGRATION
          </span>
          <p className="text-[20px] sm:text-justify py-10 text-justify">
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
        className="w-1/3 py-3 px-6 mb-5 font-semibold text-[#002F97] rounded-md hover:bg-[#002F97] hover:text-white focus:outline-none focus:ring-2 focus:[#002F97] text-[28px] border-[1px] border-solid border-[#14A660]"
      >
        Learn More
      </button>
        </div>
        <img src="./pic-2.PNG" alt="" className="hidden md:block w-full md:w-1/2 object-cover" />

      </div>
      <div className="flex flex-col md:flex-row justify-between gap-11 max-w-screen-2xl mx-auto px-4">
        <img src="./pic-2.PNG" alt="" className="hidden md:block w-full md:w-1/2 object-cover" />
        <div className="text-center md:text-left py-10">
          <span className="text-[64px] text-[#002F97] font-bold leading-none">
            <span className="text-[#14A660]">TOURIST</span> <br />VISA
          </span>
          <p className="text-[20px] py-10 sm:text-justify text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque saepe
            iusto officia, impedit illum magni possimus blanditiis voluptatum, vel
            consectetur velit! Error, earum. Voluptas veritatis rationef
            exercitationem sint aut alias rerum asperiores quae ea fuga impedit
            provident, eligendi minus corrupti ut dignissimos quod ad ab iure.
            Ipsam alias nihil inventore Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. At, quaerat suscipit id modi libero quae in, rerum
            molestiae, asperiores magnam assumenda accusamus laudantium nisi error
            vel dolor esse expedita adipisci.
          </p>
          <button
        type="submit"
        className="w-1/3 py-3 px-6 mb-5 font-semibold text-[#002F97] rounded-md hover:bg-[#002F97] hover:text-white focus:outline-none focus:ring-2 focus:[#002F97] text-[28px] border-[1px] border-solid border-[#14A660]"
      >
        Learn More
      </button>
        </div>
        
      </div>
    </div>
  );
}
 