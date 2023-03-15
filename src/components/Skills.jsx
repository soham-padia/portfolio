import React from 'react'

export const Skills = () => {
  return (
    <div className='h-screen backdrop-blur-lg shadow-inner rounded-lg flex snap-center justify-center'>
      <div className='h-9/10 snap-center rounded-lg backdrop-blur-md shadow-lg m-10 bg-gradient-to-tl from-[#303030] via-black to-[#303030] flex w-screen px-20 p-2 justify-between'>
        <div className='basis-1/2 py-40 px-20'>
          
        </div>
        <div className='basis-1/2 flex flex-col justify-center items-center gap-5'>
          <div>
            <h1 className='font-mono text-5xl'>SKILLS</h1>
            <br />
            <p className='text-[#da4ea2]'>Languages</p>
            <h2 className='text-2xl'> C, Cpp, Bash/Shell, Rust, Java, SQL, Dart, Typescript, Javascript, Go, HTML, css (tailwind and bootstrap included).</h2>
            <br />
            <br />
            <p className='text-[#da4ea2]'>Technologies/Frameworks </p>
            <h2 className='text-2xl'> Firebase, Supabase, Git, Flutter, React, Angular, Blender, Microservies, Google Cloud, and more.</h2>
            <br />
            <br />
            <p className='text-[#da4ea2]'>Platforms </p>
            <h2 className='text-2xl'> Linux, Windows, Android, and Web</h2>
            <br />
            <br />
            <button className='bg-[#35353533] rounded-md hover:bg-[#353535] p-3'>See More</button>
          </div>
        </div>
      </div>
    </div>
  )
}
