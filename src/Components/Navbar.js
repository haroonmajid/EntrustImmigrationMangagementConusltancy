import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleCallNow = () => {
        window.location.href = "tel:+971 55 905 5498";
      };

    return (
        <header className="text-gray-400 bg-[#002F97] body-font">
            <div className="container mx-auto flex flex-wrap p-5 items-center justify-center md:justify-between">
                {/* Logo and Hamburger Icon */}
                <div className="flex items-center justify-between w-full md:w-auto">
                    {/* Logo */}
                    <Link to='/' className="flex title-font font-medium items-center text-white">
                        <i className="fa-solid fa-globe text-5xl text-[#14A660]"></i>
                        <span className="ml-3 text-xl text-white">Entrust</span>
                    </Link>

                    {/* Hamburger Icon */}
                    <button
                        className="md:hidden text-white text-3xl"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <i className={`fa-solid ${isOpen ? "fa-times" : "fa-bars"}`}></i>
                    </button>
                </div>

                {/* Navbar Links */}
                <nav
                    // onMouseLeave={() => setIsOpen(false)}
                    className={`${isOpen ? "flex" : "hidden"
                        } md:flex flex-col md:flex-row items-center text-white text-xl gap-5 w-full md:w-auto`}
                >
                    <Link to="/" className="hover:text-[#14A660] cursor-pointer">
                        Home
                    </Link>
                    <Link to="/VisaTypes" className="hover:text-[#14A660] cursor-pointer">
                        Visa Types
                    </Link>
                    <Link to="/About" className="hover:text-[#14A660] cursor-pointer">
                        About Us
                    </Link>
                    <Link to="/Testimonials" className="hover:text-[#14A660] cursor-pointer">
                        Testimonials
                    </Link>
                    <Link to="/ContactUs" className="hover:text-[#14A660] cursor-pointer">
                        Contact Us
                    </Link>
                </nav>
                {/* Desktop "Call Now" Button */}
                <button
                onClick={handleCallNow}
                    className="hidden items-center md:inline-flex gap-5 border-[1px] text-white border-[solid] border-white py-2 px-5 focus:outline-none hover:bg-[#14A660] rounded text-[20px]">
                    Call Now
                    <i className="fa-solid fa-phone-volume pl-5 text-white"></i>
                </button>

                {/* Mobile "Call Now" Button */}
                {isOpen && (
                    <div
                        className="justify-center mt-4 mb-6 md:hidden">
                        <button
                            onClick={handleCallNow}
                            className="gap-5 border-[1px] text-white border-[solid] border-white py-2 px-5 focus:outline-none hover:bg-[#14A660] rounded text-[20px]">
                            Call Now
                            <i className="fa-solid fa-phone-volume pl-5 text-white"></i>
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}
