import React from 'react'
import {assets} from "../assets/assets"
import globe_icon from "../assets/globe.svg"
const SideBar = () => {
  return (
    <div className='w-[550px] sm:w-[400px] h-full p-2 flex-col gap-2 text-white  flex'>
        <div className='bg-[#121212]  rouded flex flex-col justify-around gap-2 pb-2'>
        <div className='flex items-center gap-3 pl-8 cursor-pointer pb-1'>
                <img  className="w-6" src={assets.spotify_logo} alt='Spotify Logo'/>
                <p className='font-bold'>Spotify</p>
            </div>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img  className="w-6" src={assets.home_icon} alt='Home icon'/>
                <p className='font-bold'>Home</p>
            </div>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img  className="w-6" src={assets.search_icon} alt='Search icon'/>
                <p className='font-bold'>Search</p>
            </div>
        </div>
        <div className='bg-[#121212]  rounded'>
            <div className='p-4 flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                     <img className="w-8" src={assets.stack_icon} alt="Stack icon" />
                     <p className='font-semibold'>Your Library</p>
                </div>
                <div className='flex items-center gap-3'>
                    <img className="w-5" src={assets.plus_icon} alt="Plus icon" />
                </div>
            </div>
            <div className=' overflow-y-scroll mx-auto max-h-40 h-[50px]'>
                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 '>
                    <h1>Create your first playlist</h1>
                    <p className='font-light'>It&apos;s easy we will help you</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 cursor-pointer'>Create Playlist</button>
                </div>
                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
                    <h1>Let&apos;s find some podcasts to follow</h1>
                    <p className='font-light'>We&apos;ll keep you updated on new episodes</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 cursor-pointer'>Browse podcasts</button>
                </div>
            </div>
        </div>
        <div className='mt-8'>
            <ul className='grid grid-cols-3 text-[10px] place-content-start  text-slate-300 pb-2'>
                <li className='cursor-pointer'>Legal</li>
                <li className='cursor-pointer'>Safety & Privacy Center</li>
                <li className='cursor-pointer'>Privacy Policy</li>
                <li className='cursor-pointer'>Cookies</li>
                <li className='cursor-pointer'>About Ads</li>
                <li className='cursor-pointer'>Accessibility</li>
                <li className='cursor-pointer hover:underline'>Cookies</li>
            </ul>
            <button className='flex items-center bg-transparent text-white font-semibold p-2 border-white border-solid border-2 rounded-full cursor-pointer hover:scale-y-110'>
                <img src={globe_icon} alt="Globe icon" className='w-6'/>{" "}English</button>
        </div>
    </div>
  )
}

export default SideBar