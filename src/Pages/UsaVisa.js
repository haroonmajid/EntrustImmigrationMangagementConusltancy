import React from 'react'
import { Link } from 'react-router-dom'
import WhatsAppButton from '../Components/WhatsAppButton'

function UsaVisa() {
    return (
        <>
            <WhatsAppButton/>

            <div className='text-center flex items-end pb-5 pl-5 usa-banner pt-5'> <span className="text-[56px] pt-11 text-white w-full  font-bold leading-none">
                UNITED STATES OF AMERICA
            </span>
            </div>
            <section class="text-gray-600 body-font">
                <div class="max-w-screen-xl px-5 py-24 mx-auto">
                    <div class="flex justify-center flex-wrap -m-4">
                        <div class="p-4 md:w-full">
                            <div class="h-full border-2 md:flex border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img class="h-[450px] md:h-[400px] w-full md:w-[50%]  object-center" src="./f1_visa_usa.jpg" alt="blog" />
                                <div class="p-6 md:pl-28">
                                    <h1 class="title-font text-xl font-extrabold text-gray-900 mb-3">STUDENT VISA (F-1)</h1>
                                    <p class="leading-relaxed mb-3 text-[20px] text-justify">
                                        The US Student Visa, specifically the F-1 Visa, allows international students to study full-time at an accredited educational institution in the United States. To qualify, applicants must have an acceptance letter from a U.S. school, demonstrate sufficient funds to cover tuition and living expenses, and prove their intent to return to their home country after completing their studies. The visa also permits students to work part-time on campus during the academic year and full-time during breaks.

                                    </p>
                                    <div class="flex items-center flex-wrap ">
                                        <Link to="/ContactUs" class="text-[#14A660] font-bold hover:text-[#01319F] inline-flex items-center md:mb-2 lg:mb-0">CONTACT NOW
                                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 hidden md:block md:w-full">
                            <div class="h-full border-2 md:flex border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <div class="p-6 md:pr-28">
                                    <h1 class="title-font text-xl font-extrabold text-gray-900 mb-3">VISIT VISA (B-2)</h1>
                                    <p class="leading-relaxed mb-3 text-[20px] text-justify">
                                        The USA Visit Visa, also known as the B-2 Tourist Visa, allows individuals to travel to the United States for tourism, leisure, or to visit family and friends. It is typically granted for a period of up to six months. Applicants must demonstrate their intent to return to their home country after their visit and show proof of sufficient funds to cover travel and living expenses during their stay. This visa does not permit employment or long-term stays in the U.S.
                                    </p>
                                    <div class="flex items-center flex-wrap ">
                                        <Link to="/ContactUs" class="text-[#14A660] font-bold hover:text-[#01319F] inline-flex items-center md:mb-2 lg:mb-0">CONTACT NOW
                                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <img class="md:h-[400px] w-full md:w-[50%] object-fill  object-center" src="./h1-b visa.png" alt="blog" />

                            </div>
                        </div>
                        <div class="p-4 block md:hidden md:w-full">
                            <div class="h-full border-2 md:flex border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img class="h-[400px] w-full md:w-[50%] object-fill  object-center" src="./h1-b visa.png" alt="blog" />
                                <div class="p-6 md:pr-28">
                                    <h1 class="title-font text-xl font-extrabold text-gray-900 mb-3">VISIT VISA (B-2)</h1>
                                    <p class="leading-relaxed mb-3 text-[20px] text-justify">
                                        The USA Visit Visa, also known as the B-2 Tourist Visa, allows individuals to travel to the United States for tourism, leisure, or to visit family and friends. It is typically granted for a period of up to six months. Applicants must demonstrate their intent to return to their home country after their visit and show proof of sufficient funds to cover travel and living expenses during their stay. This visa does not permit employment or long-term stays in the U.S.
                                    </p>
                                    <div class="flex items-center flex-wrap ">
                                        <Link to="/ContactUs" class="text-[#14A660] font-bold hover:text-[#01319F] inline-flex items-center md:mb-2 lg:mb-0">CONTACT NOW
                                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default UsaVisa