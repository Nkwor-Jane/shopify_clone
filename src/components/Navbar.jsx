import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center font-semibold fixed bg-slate-50/10 m-0'>
        <div className='flex items-center gap-2'>
            <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="Left arrow"/>
            <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="Right arrow"/>
        </div>
        <div className='flex items-center justify-center gap-4'>
        <p className=' text-slate-200 text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer hover:scale-y-110 hover:text-white'>Sign up</p>
            <p className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 cursor-pointer hover:bg-slate-100 hover:scale-110'>Log in</p>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Navbar