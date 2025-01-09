import React from "react";

export default function Section3() {
  const services = [
    {
      title: "SKILLED IMMIGRATION TO CANADA, AUSTRALIA",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      icon: "fa-solid fa-envelope",
    },
    {
      title: "PR CARD RENEWALS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      icon: "fa-solid fa-id-card",
    },
    {
      title: "STUDENT VISA AND POST STUDY WORK PERMITS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      icon: "fa-solid fa-graduation-cap",
    },
    {
      title: "PERMANENT RESIDENCY VISA PROCESSING",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      icon: "fa-solid fa-house",
    },
    {
      title: "BUSINESS AND INVESTOR VISA",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      icon: "fa-solid fa-briefcase",
    },
    {
      title: "JOB SEARCH ASSISTANCE IN CANADA",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      icon: "fa-solid fa-user-tie",
    },
  ];

  return (
    <section className="py-10 text-center max-w-screen-2xl px-6 mx-auto">
      <h2 className="text-[#01319f] font-bold leading-none text-[40px] md:text-[56px] mb-8">
        <span className="text-[#14A660]">OUR GLOBAL</span> IMMIGRATION SERVICES
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 sm:p-4 border-[1px] border-[#01319f] rounded-lg flex flex-col items-center text-center"
          >
            <div className="text-[#14A660] text-4xl mb-4">
              <i className={service.icon}></i>
            </div>
            <h3 className="font-bold text-lg sm:text-xl text-[#01319f] mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm sm:text-base">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
