import React from 'react';
import facebook_icon from "../assets/facebook_icon.svg"
import instagram_icon from "../assets/instagram_icon.svg"
import twitter_icon from "../assets/twitter_icon.svg"


const Footer = () => {
  return (
    <div className='w-full pt-20 m-2'>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 w-[100%] h-66  leading-2 px-3 grid-cols-2 pb-10">

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

            <div className='flex gap-3'>
                <div className=''>
                    <img src={instagram_icon} className=' bg-slate-50/10 rounded-full cursor-pointer w-10 p-2 hover:bg-slate-50/50'/>
                </div>
                <div className=' '>
                    <img src={twitter_icon} alt="instagram icon" className=' bg-slate-50/10 rounded-full cursor-pointer w-10 p-2 hover:bg-slate-50/50' />
                </div>
                <div className=' '>
                    <img src={facebook_icon} alt="instagram icon" className=' bg-slate-50/10 rounded-full cursor-pointer w-10 p-2 hover:bg-slate-50/50' />
                </div>
            </div>
        </div> 
          <div className="w-full py-3 text-md px-3 mt-10 border-0 border-t-2">
                <p className='text-slate-300 py-10'>&copy; 2024 Spotify AB</p>
            </div>  
    </div>
  )
}

export default Footer