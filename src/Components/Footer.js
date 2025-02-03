import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer class="text-black shadow-2xl">
            <div class="max-w-screen-xl pl-5 pb-24 pt-12 mx-auto flex md:items-center md:justify-between lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div class="w-[10%] flex-shrink-0 md:mx-0 mx-auto text-center">
                    <a class="flex title-font font-medium justify-center items-center text-white mb-4 md:mb-0">
                        <Link to='/' className="flex hover:text-[#14A660] title-font font-medium justify-center items-center text-white">
                            <img className="w-[60%] h-[60%]" src="./entrust-logo.png" alt="" />
                        </Link>
                    </a>
                    <p class="mt-2 text-[12px] text-black text-justify">Welcome To Entrust Immigration Management Consultancy. Your Trusted Partner For Global Mobility & Immigration Services.</p>
                    <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 pt-10 justify-center sm:justify-start">
                        <a href='https://www.facebook.com/profile.php?id=61572185520178' target="_blank" class="text-[#01319f]">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a href='https://www.instagram.com/entrustimmigration/' target="_blank" class="ml-3 text-[#01319f]">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-[#01319f]" target="_blank">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
                <div class="md:flex -mb-10 w-[90%] md:mt-0 mt-10 gap-28 justify-between">
                    <div class="pl-48 w-[25%] ">
                    <div className='bg-[#01319f] px-1 py-5 text-center rounded-[100%]'>
                    <i class="fa-solid fa-location-dot text-white"></i>
                    </div>
                        <h2 class="title-font font-medium text-black tracking-widest text-2xl mb-3">ABU DHABI</h2>
                        {/* <nav class="list-none mb-10">
                            <li>
                                <a class="text-black hover:text-[#01319f] cursor-pointer">Canada Immigration</a>
                            </li>
                            <li>
                                <a class="text-black hover:text-[#01319f] cursor-pointer">Austraila Immigration</a>
                            </li>
                            <li>
                                <a class="text-black hover:text-[#01319f] cursor-pointer">Poland Work Visa</a>
                            </li>
                            <li>
                                <a class="text-black hover:text-[#01319f] cursor-pointer">UAE Golden Visa</a>
                            </li>
                        </nav> */}
                    </div>
                    <div class="w-[25%] px-4">
                        <h2 class="title-font font-medium text-black tracking-widest text-2xl mb-3">SHARJAH</h2>
                        {/* <nav class="list-none mb-10">
                            <li>
                                <a class="text-black hover:text-[#01319f] cursor-pointer">Immigration Consultant Dubai</a>
                            </li>
                            <li>
                                <a class="text-black hover:text-[#01319f] cursor-pointer">Immigraton Consultant Abu Dhabi</a>
                            </li>
                            <li>
                                <a class="text-black hover:text-[#01319f] cursor-pointer">Immigration Consultant Sharjah</a>
                            </li>

                        </nav> */}
                    </div>
                    <div class="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-black tracking-widest text-2xl mb-3">DUBAI</h2>
                        {/* <nav class="list-none mb-10">
                            <li>
                                <a class="text-black hover:text-[#01319f] cursor-pointer">Immigration Consultant Dubai</a>
                            </li>
                            <li>
                                <a class="text-black hover:text-[#01319f] cursor-pointer">Immigraton Consultant Abu Dhabi</a>
                            </li>
                            <li>
                                <a class="text-black hover:text-[#01319f] cursor-pointer">Immigration Consultant Sharjah</a>
                            </li>

                        </nav> */}
                    </div>
                    <div class="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-black tracking-widest text-2xl mb-3">INDIA</h2>
                        {/* <nav class="list-none mb-10">
                            <li>
                                <a class="text-black hover:text-[#01319f] cursor-pointer">Saudia Arabia</a>
                            </li>
                            <li>
                                <a class="text-black hover:text-[#01319f] cursor-pointer">Kuwait</a>
                            </li>
                            <li>
                                <a class="text-black hover:text-[#01319f] cursor-pointer">Qatar</a>
                            </li>
                            <li>
                                <a class="text-black hover:text-[#01319f] cursor-pointer">Oman</a>
                            </li>
                        </nav> */}
                    </div>
                </div>
            </div>
            <div class="bg-[#01319f]">
                <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col justify-center sm:flex-row">
                    <p class="text-white text-[16px] text-center sm:text-left">
                    @ Copyright Entrust Immigration Management Consultancy 2025. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}
