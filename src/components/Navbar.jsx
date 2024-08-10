import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='flex h-[70px] w-full bg-[rgb(3,3,3)] fixed top-0 items-center  p-1  justify-between '>
        <div className='flex  gap-2'>
            <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="Left arrow"/>
            <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="Right arrow"/>
        </div>
        <div className='flex gap-6 pr-5 pt-2 justify-center items-end'>
        <p className=' text-slate-200 text-[18px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer hover:scale-y-110 hover:text-white font-semibold'>Sign up</p>
            <p className='px-6 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 cursor-pointer hover:bg-slate-100 hover:scale-110 font-semibold'>Log in</p>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Navbar