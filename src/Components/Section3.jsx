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
    <section className="py-10 text-center max-w-screen-2xl px-11 mx-auto">
       <span className="text-[56px] py-11 text-[#002F97] font-bold leading-none">
                    <span className="text-[#14A660]">OUR GLOBAL</span> IMMIGRATION SERVICES
                </span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11 py-11 px-[60px] mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md px-11 py-[50px] border-[1px] border-[#002F97] rounded-lg flex flex-col text-center"
          >
            <div className="text-[#14A660] text-4xl mb-4">
              <i className={service.icon}></i>
            </div>
            <h3 className="font-bold text-2xl text-[#002F97]">{service.title}</h3>
            <p className="text-gray-600  text-justify mt-3">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
