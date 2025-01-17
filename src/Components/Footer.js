import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer class="text-black shadow-2xl">
            <div class="container px-5 pb-24 pt-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a class="flex title-font font-medium justify-center items-center text-white mb-4 md:mb-0">
                        <Link to='/' className="flex hover:text-[#14A660] title-font font-medium justify-center items-center text-white">
                            <img className="w-[60%] h-[60%]" src="./entrust-logo.png" alt="" />
                        </Link>
                    </a>
                    <p class="mt-2 text-sm text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 pt-10 justify-center sm:justify-start">
                        <a href='https://www.facebook.com/profile.php?id=61572185520178' class="text-[#01319f]">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-[#01319f]">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a href='https://www.instagram.com/entrustimmigration/' class="ml-3 text-[#01319f]">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-[#01319f]">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
                <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center justify-between">
                    <div class="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-black tracking-widest text-2xl mb-3">Services</h2>
                        <nav class="list-none mb-10">
                            <li>
                                <a class="text-black hover:text-[#01319f] cursor-pointer
            ">Canada Immigration</a>
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
                        </nav>
                    </div>
                    <div class="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-black tracking-widest text-2xl mb-3">Our UAE Locations</h2>
                        <nav class="list-none mb-10">
                            <li>
                                <a class="text-black hover:text-[#01319f] cursor-pointer">Immigration Consultant Dubai</a>
                            </li>
                            <li>
                                <a class="text-black hover:text-[#01319f] cursor-pointer">Immigraton Consultant Abu Dhabi</a>
                            </li>
                            <li>
                                <a class="text-black hover:text-[#01319f] cursor-pointer">Immigration Consultant Sharjah</a>
                            </li>

                        </nav>
                    </div>
                    <div class="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-black tracking-widest text-2xl mb-3">Our Global Locations</h2>
                        <nav class="list-none mb-10">
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
                        </nav>
                    </div>
                </div>
            </div>
            <div class="bg-[#01319f]">
                <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col justify-center sm:flex-row">
                    <p class="text-white text-lg text-center sm:text-left">
                        Entrust Consultant © 2024 All Right Reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}
