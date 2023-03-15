import { useState } from 'react'
import { Contact } from './components/Contact'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { Works } from './components/Works'

function App() {

  return (
    <div className="h-screen bg-gradient-to-br from-[#202020] via-black to-[#2e2e2e] snap-y snap-mandatory scroll-smooth overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] text-white">
      <div><Hero /></div>
      <div><Skills /></div>
      <div><Contact /></div>

    </div>
  )
}

export default App
