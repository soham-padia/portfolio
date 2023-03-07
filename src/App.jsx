import { useState } from 'react'
import { Contact } from './components/Contact'
import { Hero } from './components/Hero'
import { Who } from './components/Who'
import { Works } from './components/Works'

function App() {

  return (
    <div className="h-screen snap-y snap-mandatory scroll-smooth overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] text-white">
      <Hero />
      <Who />
      <Works />
      <Contact />

    </div>
  )
}

export default App
