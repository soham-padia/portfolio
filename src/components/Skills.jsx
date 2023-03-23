import React from 'react'
import { motion } from 'framer-motion'

export const Skills = () => {
  return (
    <motion.div id='skill' className=' md:h-screen backdrop-blur-lg shadow-inner rounded-lg flex snap-center justify-center'>
      <div className='md:h-9/10 snap-center md:rounded-lg md:backdrop-blur-md md:shadow-[0_0_10px_-1px_rgba(0,0,0,0.1)] md:shadow-gray-800 m-4 md:m-10 md:bg-gradient-to-tl md:from-[#303030] md:via-black md:to-[#303030] flex flex-col md:flex-row w-screen md:px-20 p-2 justify-between'>
        <div className='basis-1/2 md:p-48 pb-4 object-scale-down'>
          <motion.img drag mouse dragConstraints={{top:-50,left:-50,right:50,bottom:50}} initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.25}} src='img/Subject.png'></motion.img>
        </div>
        <div className='basis-1/2 flex flex-col justify-center items-center gap-5'>
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.25}}>
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
            <motion.button whileHover={{scale:1.2}} whileTap={{scale:0.9}} onClick={()=>{document.getElementById('project').scrollIntoView({behavior:'smooth'})}} className='bg-[#35353533] rounded-md hover:bg-[#353535] p-3'>See More</motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
