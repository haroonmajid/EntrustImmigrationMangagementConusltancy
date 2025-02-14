import React from 'react'
import { Link } from 'react-router-dom'

function TopBanner() {
    return (
        <div className='bg-[#01319F]'>
            <div className='max-w-screen-2xl text-white flex mx-auto px-4 md:px-0 md:pl-4 justify-between  py-2'>
                <div className='flex gap-5 text-sm md:text-xl'>
                    <div>
                        <Link to="" className='hover:text-[#14A660]'>
                            <i class="fa-solid fa-phone-flip pr-2"></i>
                            <span>+971 55 905 5498</span>
                        </Link>
                    </div>
                    <div>
                        <Link to="" className='hover:text-[#14A660]'>
                            <i class="fa-solid fa-envelope pr-2"></i>
                            <span>info@eiintl.com</span>
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