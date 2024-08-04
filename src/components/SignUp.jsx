import React from 'react'
import "../App.css"

const SignUp = () => {
  return (
    <div className='h-[10%] px-4 py-6 flex justify-between items-center  color_grad'>
        <div className='text-white' >
            <h2 className='font-bold'>Preview of Spotify</h2>
            <p className='font-medium'>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed</p>
        </div>
        <div>
        <button className='font-bold px-6 py-2 bg-white text-[15px] text-black rounded-full mt-4 cursor-pointer'>Sign up free</button>
        </div>
    </div>
  )
}

export default SignUp