import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-50 mt-10 pt-10 border-t-2 border-neutral-200">
            <div className="max-w-screen-xl pt-10 mb-10 px-5 pb-8 mx-auto flex flex-col md:flex-row md:items-center md:justify-center gap-8">
                {/* Logo and Description Section */}
                <div className="w-full md:w-auto flex items-center justify-center md:justify-start space-x-4">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0">
                        <img className="w-28" src="./entrust-logo.png" alt="Entrust Immigration Logo" />
                    </Link>
                    {/* Text */}
                    <p className="text-sm text-gray-600 max-w-xs">
                        Welcome To Entrust Immigration Management Consultancy. Your Trusted Partner For Global Mobility & Immigration Services.
                    </p>
                </div>

                {/* Locations Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full md:w-[75%]">
                    {['ABU DHABI', 'DUBAI', 'SHARJAH', 'INDIA'].map((location, index) => (
                        <div key={index} className="text-center">
                            <FaMapMarkerAlt className="text-3xl text-[#01319f] mx-auto mb-3" />
                            <h2 className="text-xl font-semibold text-gray-800">{location}</h2>
                            {/* <p className="text-sm text-gray-600 mt-2">Address details for {location}</p> */}
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Section (Copyright + Social Icons) */}
            <div className="bg-[#01319f] py-4">
                <div className="max-w-screen-xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between">
                    {/* Copyright Text */}
                    <p className="text-white text-sm text-center md:text-left mb-4 md:mb-0">
                        © Copyright Entrust Immigration Consultancy 2025. All Rights Reserved
                    </p>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/profile.php?id=61572185520178" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#14A660] transition-colors">
                            <FaFacebook size={20} />
                        </a>
                        <a href="https://www.instagram.com/entrustimmigration/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#14A660] transition-colors">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#14A660] transition-colors">
                            <FaLinkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}