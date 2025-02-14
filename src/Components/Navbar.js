import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleDropdown = () =>{
    setIsDropdownOpen((prevState) => !prevState); 

  }
  const handleCallNow = () => {
    window.location.href = "tel:+971 55 905 5498";
  };

  return (
    <header className="shadow-2xl sticky top-0 z-10 bg-white">
      <div className="max-w-screen-xl mx-auto flex flex-wrap py-5 items-center justify-center md:justify-around">
        {/* Logo and Hamburger Icon */}
        <div className="flex items-center pl-3 justify-between w-full md:w-auto">
          {/* Logo */}
          <Link to="/" className="flex hover:text-[#14A660] title-font font-medium items-center text-white">
            <img className="w-[50%] h-[50%]" src="./entrust-logo.png" alt="Entrust Logo" />
          </Link>

          {/* Hamburger Icon */}
          <button
            className="block md:hidden hover:text-[#14A660] pr-2 text-[#01319F] text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={`fa-solid ${isOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>

        {/* Navbar Links */}
        <nav
        onMouseLeave={()=> setIsOpen(!isOpen)}
          className={`${isOpen ? "flex" : "hidden"} md:flex navbar flex-col md:flex-row items-center text-[#01319F] text-[16px] gap-7 w-full md:w-auto`}
        >
          <Link to="/" className="hover:text-[#14A660] link cursor-pointer"
                  onClick={()=> setIsOpen(!isOpen)}
>
            HOME
          </Link>

          {/* Dropdown for Visas */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onClick={handleDropdown}
          >
            <div className="hover:text-[#14A660] link">
              VISAS <i className="fa-solid fa-chevron-down text-sm ml-2"></i>
            </div>
            {isDropdownOpen && (
              <ul
              onClick={()=>setIsOpen(false)}
              onMouseLeave={() => setIsDropdownOpen(false)}

               className="absolute bg-[#01319F] text-[#01319F] mt-2 w-[200px] text-left rounded shadow-lg">
                <li className="hover:bg-[#14A660] sub-link ">
                  <Link to="/CanadaVisa" className="block font-casteller px-5 py-2 text-white">
                    CANADA
                  </Link>
                </li>
                <li className="hover:bg-[#14A660] sub-link">
                  <Link to="/EuropeanVisa" className="block px-5 py-2 font-casteller text-white">
                    EUROPE
                  </Link>
                </li>
                <li className="hover:bg-[#14A660] sub-link">
                  <Link to="/UnitedKingdomVisa" className="block px-5 py-2 text-white">
                    UNITED KINGDOM
                  </Link>
                </li>
                <li className="hover:bg-[#14A660] sub-link">
                  <Link to="/UsaVisa" className="block px-5 py-2 text-white">
                    USA 
                  </Link>
                </li>
                <li className="hover:bg-[#14A660] sub-link">
                  <Link to="/AustraliaVisa" className="block px-5 py-2 text-white">
                    AUSTRALIA
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <Link to="/About" className="hover:text-[#14A660] link cursor-pointer"
                            onClick={()=> setIsOpen(!isOpen)}
>
            ABOUT US
          </Link>
          <Link to="/Testimonial" className="hover:text-[#14A660] link cursor-pointer"
                            onClick={()=> setIsOpen(!isOpen)}
>
            HAPPY CLIENTS
          </Link>
          <Link to="/ContactUs" className="hover:text-[#14A660] link cursor-pointer"
                            onClick={()=> setIsOpen(!isOpen)}
>
            CONTACT US
          </Link>
          <Link to="/OtherServices" className="hover:text-[#14A660] link cursor-pointer"
                            onClick={()=> setIsOpen(!isOpen)}
>
            OTHER SERVICES
          </Link>

          {/* Mobile "Call Now" Button */}
          {isOpen && (
            <div className="justify-center md:hidden">
              <button
                onClick={handleCallNow}
                className="gap-5 border-[1px] text-white link border-[solid] border-white py-2 px-5 focus:outline-none hover:bg-[#14A660] rounded text-[20px]"
              >
                Call Now
                <i className="fa-solid fa-phone-volume pl-5 text-white"></i>
              </button>
            </div>
          )}
        </nav>

        {/* Desktop "Call Now" Button */}
        <button
          onClick={handleCallNow}
          className="hidden items-center md:inline-flex link gap-5 border-[2px] text-[#01319F] border-[solid] border-[#01319F] md:ml-20 py-2 px-5 focus:outline-none hover:bg-[#14A660] rounded text-[20px]"
        >
          Call Now
          <i className="fa-solid fa-phone-volume pl-5 text-[#01319F]"></i>
        </button>
      </div>
    </header>
  );
}
