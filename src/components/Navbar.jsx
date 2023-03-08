import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex justify-center '>
        <div className='w-screen flex justify-between items-center px-20 p-2'>
            <div className='flex items-center gap-12'>
              <img src="img/transparent_logo.png" alt="SOHAM PADIA" className='object-cover h-20 w-20' />
              <ul className='flex gap-5 list-none'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>Studio</li>
                <li className='cursor-pointer'>Works</li>
                <li className='cursor-pointer'>Contact</li>
              </ul>
            </div>
            <div className='flex items-center gap-5'>
              <img src="img/search.png" alt="" className='w-5 cursor-pointer'/>
              <button className='w-24 p-2 bg-transparent cursor-pointer'>Hire Now</button>
            </div>
        </div>
    </div>
  )
}
