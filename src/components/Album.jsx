import React from 'react'
import play_icon from "../assets/play.svg"

const Album = ({image, name, desc, id}) => {
  return (
    <div className='min-w-[150px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] group relative'>
        <img  className="rounded" src={image} alt="" />
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>
        <div
        className="w-12 h-12 rounded-full  flex items-center absolute top-[105px] bg-green-500
        right-0 justify-center  opacity-0 group-hover:opacity-100 hover:bg-green-400"
      >
        <img src={play_icon} alt="Play icon"  />
      </div>
    </div>
  )
}

export default Album