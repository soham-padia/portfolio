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
        <div className='basis-3/5 flex flex-col justify-center items-center gap-5 animate-[animate_2s_infinite_ease_alternate]'>
          <div className='text-slate-300 font-mono' >
            <h1 className='text-6xl'>सोहम पड़िया</h1>
            <h1 className='text-8xl'>CODER</h1>
            <h1 className='text-2xl'>LEARNER</h1>
            <p className='whitespace-pre-wrap'>About me: I am a student of Information Technology Dwarkadas </p>
            <p className='whitespace-pre-wrap'>          J. Sanghvi College of Engineering. I have experience </p>
            <p className='whitespace-pre-wrap'>          in building Android apps, web development and</p>
            <p className='whitespace-pre-wrap'>          training pre-configured AI models using Python.</p>
            <p className='whitespace-pre-wrap'>          Proficient in React, Angular, and Django frameworks.</p>
            <p className='whitespace-pre-wrap'>          Interested in exploring advanced concepts such as</p>
            <p className='whitespace-pre-wrap'>          microservices, IoT, blockchain, Kubernetes, and Docker</p>
          </div>
        </div>
      </div>
    </div>
  )
}
