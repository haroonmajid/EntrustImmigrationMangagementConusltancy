import React from "react";

export default function Hero() {
  return (
    <div className="py-10 sm:py-8">
      {/* Title Section */}
      <div className="text-[48px] text-[#002F97] text-center font-bold mb-10 sm:mb-6">
        Entrust Consultancy
      </div>

      {/* Section 1 */}
      <div className="flex flex-col md:flex-row justify-between gap-6 max-w-screen-2xl mx-auto px-4">
        <img
          src="./pic-2.PNG"
          alt=""
          className="hidden md:block md:w-1/2 object-cover"
        />
        <div className="text-center md:text-left py-6">
          <span className="text-[48px] text-[#002F97] font-bold leading-tight">
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
            className="w-full md:w-1/3 py-3 px-6 mb-5 font-semibold text-[#002F97] rounded-md hover:bg-[#002F97] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#002F97] text-[18px] border-[1px] border-solid border-[#14A660]"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row justify-between gap-6 max-w-screen-2xl mx-auto px-4">
        <div className="text-center md:text-left py-6">
          <span className="text-[48px] text-[#002F97] font-bold leading-tight">
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
            className="w-full md:w-1/3 py-3 px-6 mb-5 font-semibold text-[#002F97] rounded-md hover:bg-[#002F97] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#002F97] text-[18px] border-[1px] border-solid border-[#14A660]"
          >
            Learn More
          </button>
        </div>
        <img
          src="./pic-2.PNG"
          alt=""
          className="hidden md:block md:w-1/2 object-cover"
        />
      </div>

      {/* Section 3 */}
      <div className="flex flex-col md:flex-row justify-between gap-6 max-w-screen-2xl mx-auto px-4">
        <img
          src="./pic-2.PNG"
          alt=""
          className="hidden md:block md:w-1/2 object-cover"
        />
        <div className="text-center md:text-left py-6">
          <span className="text-[48px] text-[#002F97] font-bold leading-tight">
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
            className="w-full md:w-1/3 py-3 px-6 mb-5 font-semibold text-[#002F97] rounded-md hover:bg-[#002F97] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#002F97] text-[18px] border-[1px] border-solid border-[#14A660]"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
