import React from 'react'
import Navbar from './Navbar'
import Album from './Album'
import { albumsData, celebPics, songsData } from '../assets/assets'
import SongItem from './SongItem'
import Footer from './Footer'
import FooterCopy from './FooterCopy'
import Artist from './Artists'

const DisplayHome = () => {
  return (
    <div className="w-full  overflow-y-scroll sm:overflow-x-hidden">
        <Navbar/>
        <div className='mt-10'>
        <div className='mb-4'>
            <div className='flex justify-between items-center'>
              <h1 className='my-5 font-bold text-2xl'>Popular Artists</h1>
              <p className="text-slate-400 hover:underline cursor-pointer">Show all</p>
            </div>
              <div className='flex overflow-auto'>
                {celebPics.map((item, index) => <Artist key={index} name={item.name} desc={item.desc} id ={item.id} image={item.image} /> )}
              </div>
          </div>
          <div className='mb-4 mt-10'>
            <div className='flex justify-between items-center'>
            <h1 className='my-5 font-bold text-2xl'>Popular Albums</h1>
            <p className="text-slate-400 hover:underline cursor-pointer">Show all</p>
            </div>
              
              <div className='flex overflow-auto'>
                {albumsData.map((item, index) =>(<Album key={index}
                name={item.name} id={item.id} image={item.image}/>))}
              </div>
          </div>
          <div className='mb-4 mt-10'>
            <div className='flex justify-between items-center'>
            <h1 className='my-5 font-bold text-2xl'>Popular Radio</h1>
            <p className="text-slate-400 hover:underline cursor-pointer">Show all</p>
            </div>
              
              <div className='flex overflow-auto'>
                {albumsData.map((item, index) =>(<Album key={index}
                name={item.name} id={item.id} image={item.image}/>))}
              </div>
          </div>
          <div className='mb-4 mt-10'>
            <div className='flex justify-between items-center'>
            <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
            <p className="text-slate-400 hover:underline cursor-pointer">Show all</p>
            </div>
              
              <div className='flex overflow-auto'>
                {albumsData.map((item, index) =>(<Album key={index}
                name={item.name} id={item.id} image={item.image}/>))}
              </div>
          </div>
          <div className='mb-4 mt-10'>
            <div className='flex justify-between items-center'>
              <h1 className='my-5 font-bold text-2xl'>Today&apos;s biggest hits</h1>
              <p className="text-slate-400 hover:underline cursor-pointer">Show all</p>
            </div>
              <div className='flex overflow-auto'>
                {songsData.map((item, index) => <SongItem key={index} name={item.name} desc={item.desc} id ={item.id} image={item.image} /> )}
              </div>
          </div>
        </div>
        <div className=''>
          <Footer/>
<FooterCopy/>
        </div>
        {/* <FooterCopy.jsx/> */}
    </div>
  )
}

export default DisplayHome