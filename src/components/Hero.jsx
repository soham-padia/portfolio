import React from 'react'
import { Navbar } from './Navbar'

export const Hero = () => {
  return (
    <div className='h-screen flex snap-center items-center justify-between flex-col'>
      <Navbar/>
      <div className='h-full snap-center flex w-screen px-20 p-2 justify-between'>
        <div className='basis-2/5 flex flex-col justify-center gap-5'>
          <h1 className='font-mono text-5xl'>“Taking a new step, uttering a new word, is what people fear most.”</h1>
          <p className='text-[#da4ea2]'>~ Fyodor Dostoevsky</p>
          <h2>I am a coder who likes to code.</h2>
          <button className='bg-[#35353533] rounded-md hover:bg-[#353535] p-3'>Learn More</button>
        </div>
        <div className='basis-3/5'>
          3d Model
        </div>
      </div>
    </div>
  )
}
