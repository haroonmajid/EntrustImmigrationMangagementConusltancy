import React from 'react'
import { Link } from 'react-router-dom'

function UsaVisa() {
  return (
    <>
    <div className='text-center pt-5'> <span className="text-[56px] pt-11 text-[#01319F] underline decoration-[#14A660]  font-bold leading-none">
                UNITED STATES OF AMERICA
            </span></div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 md:w-1/2">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-fill object-center" src="./f1_visa_usa.jpg" alt="blog" />
                                <div class="p-6">
                                    <h2 class="tracking-widest text-xs title-font font-medium text-[#01319F] mb-1">CATEGORY</h2>
                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">STUDENT VISA (F-1) </h1>
                                    <p class="leading-relaxed mb-3">
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
                        <div class="p-4 md:w-1/2">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-fill object-center" src="./visit_visa_b2_usa.jpeg" alt="blog" />
                                <div class="p-6">
                                    <h2 class="tracking-widest text-xs title-font font-medium text-[#01319F] mb-1">CATEGORY</h2>
                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">VISIT VISA (B-2)</h1>
                                    <p class="leading-relaxed mb-3">
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