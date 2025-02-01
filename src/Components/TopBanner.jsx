import React from 'react'
import { Link } from 'react-router-dom'

function TopBanner() {
    return (
        <div className='bg-[#01319F]'>
            <div className=' text-white flex mx-auto px-4 md:pl-4 justify-between max-w-screen-xl py-2'>
                <div className='flex gap-5'>
                    <div>
                        <Link to="" className='hover:text-[#14A660]'>
                            <i class="fa-solid fa-phone-flip pr-2"></i>
                            <span>+920003131313</span>
                        </Link>
                    </div>
                    <div>
                        <Link to="" className='hover:text-[#14A660]'>
                            <i class="fa-solid fa-envelope pr-2"></i>
                            <span>abcd@gmail.com</span>
                        </Link>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <a href='https://www.facebook.com/profile.php?id=61572185520178' target='_blank'><i class="fa-brands fa-facebook-f hover:text-[#14A660]"></i></a>
                    <a  href='https://www.instagram.com/entrustimmigration/' target="_blank"><i class="fa-brands fa-instagram hover:text-[#14A660]"></i></a>
                    <a href=''><i class="fa-brands fa-linkedin-in hover:text-[#14A660]"></i></a>
                </div>
            </div>
        </div>
    )
}

export default TopBanner