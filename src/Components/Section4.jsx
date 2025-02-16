import React from 'react'
import '../App.css'

export default function Section4() {
  return (
    <>
    <div className='flex h-[10vh]  md:h-[10vh] grid-cols-2 md:gap-0 md:flex-row md:justify-center items-center w-[90%] justify-center md:W-[95%] mx-auto md:max-w-screen-xl '>
    <div className='banner-1 md:w-[20%] w-[50%] h-[50px]'>
        {/* <img className='w-[50vw] h-full bg-cover bg-center' src="./banner1.jpg" alt="" /> */}
    </div>
    <div className='banner-2 pt-11 md:w-[20%] w-[50%] h-[50px] '>
        {/* <img className='w-[50vw] h-full bg-cover bg-center' src="./banner2.jpg" alt="" /> */}
    </div>
    </div>
    </>
  )
}
