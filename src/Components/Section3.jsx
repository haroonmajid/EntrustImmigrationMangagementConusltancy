import React from "react";

export default function Section3() {
  const services = [
    {
      title: "PERSONAL IMMIGRATION SOLUTIONS",
      description: "Tailored pathways for students, professionals & families looking to relocate abroad.",
      icon: "fa-solid fa-envelope",
    },
    {
      title: "CORPORATE IMMIGRATION SUPPORT",
      description: "Streamlined mobility strategies for businesses expanding their global workforce.",
      icon: "fa-solid fa-id-card",
    },
    {
      title: "VISA APPLICATION & PROCESSING",
      description: "Expert assistance with documentation, application submissions & compliance.",
      icon: "fa-solid fa-graduation-cap",
    },
    {
      title: "RELOCATION ASSISTANCE",
      description: "Comprehensive support for settling into your new home, including housing, schooling, cultural integration, job assistance & healthcare.",
      icon: "fa-solid fa-house",
    },
    {
      title: "IMMIGRATION COMPLIANCE",
      description: "Ongoing guidance to ensure compliance with changing immigration laws & regulations.",
      icon: "fa-solid fa-briefcase",
    },
  ];

  return (
    <section className="py-10 text-center max-w-screen-xl px-6 mx-auto">
      <h2 className="text-[#01319f] font-bold leading-none text-[40px] md:text-[56px] mb-8">
        OUR SERVICES
      </h2>
      <div className="grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 py-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`bg-white shadow-md p-6 sm:p-4 border-[1px] border-[#01319f] rounded-lg flex flex-col items-center text-center ${
              index === 4 ? "lg:col-span-2" : ""
            }`}
          >
            <div className="text-[#14A660] text-4xl mb-4">
              <i className={service.icon}></i>
            </div>
            <h3 className="font-bold text-lg sm:text-xl text-[#01319f] mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
