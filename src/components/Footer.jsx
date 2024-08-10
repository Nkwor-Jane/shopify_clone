import React from 'react';
import facebook_icon from "../assets/facebook_icon.svg"
import instagram_icon from "../assets/instagram_icon.svg"
import twitter_icon from "../assets/twitter_icon.svg"


const Footer = () => {
  return (
    <div  >
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[100%] h-56 leading-8  px-3  gap-4 mb-4 place-content-evenly place-items-stretch'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
            <ul className=' text-slate-300 leading-1 pb-2'>
                <li className='text-white font-bold text-lg'>Company</li>
                <li className='cursor-pointer hover:underline hover:text-white'>About</li>
                <li className='cursor-pointer hover:underline hover:text-white'>Jobs</li>
                <li className='cursor-pointer hover:underline hover:text-white'>For the Record</li>
            </ul>
            <ul className='  text-slate-300 leading-1 pb-2 '>
            <li className='text-white font-bold text-lg'>Communities</li>
                <li className='cursor-pointer hover:underline hover:text-white'>For Artists</li>
                <li className='cursor-pointer hover:underline hover:text-white'>Developers</li>
                <li className='cursor-pointer hover:underline hover:text-white'>Advertising</li>
                <li className='cursor-pointer hover:underline hover:text-white'>Investors</li>
                <li className='cursor-pointer hover:underline hover:text-white'>Vendors</li>
            </ul>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
        <ul className=' text-slate-300 leading-1 pb-2'>
                <li className='text-white font-bold text-lg'>Useful Links</li>
                <li className='cursor-pointer hover:underline hover:text-white'>Support</li>
                <li className='cursor-pointer hover:underline hover:text-white'>Free Mobile App</li>
            </ul>
            <ul className=' text-slate-300 leading-1 pb-2'>
            <li className='text-white font-bold text-lg'>Spotify Plans</li>
                <li className='cursor-pointer hover:underline hover:text-white'>Premuim Individual</li>
                <li className='cursor-pointer hover:underline hover:text-white'>Premium Duo</li>
                <li className='cursor-pointer hover:underline hover:text-white'>Premium Family</li>
                <li className='cursor-pointer hover:underline hover:text-white'>Premium Student</li>
                <li className='cursor-pointer hover:underline hover:text-white'>Spotify Free</li>
            </ul>
        </div>

        <div className='flex gap-3'>
            <div className=''>
                <img src={instagram_icon} className=' bg-slate-50/10 rounded-full cursor-pointer w-12 p-2 hover:bg-slate-50/50'/>
            </div>
            <div className=' '>
                <img src={twitter_icon} alt="instagram icon" className=' bg-slate-50/10 rounded-full cursor-pointer w-12 p-2 hover:bg-slate-50/50' />
            </div>
            <div className=' '>
                <img src={facebook_icon} alt="instagram icon" className=' bg-slate-50/10 rounded-full cursor-pointer w-12 p-2 hover:bg-slate-50/50' />
            </div>
        </div>
        </div>   

         
    </div>
  )
}

export default Footer