import { useState } from 'react'
import { Contact } from './components/Contact'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

function App() {

  return (
    <div className="h-screen bg-gradient-to-br from-[#202020] via-black to-[#2e2e2e] snap-y snap-mandatory scroll-smooth overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] text-white">
      <div><Hero /></div>
      <div><Skills /></div>
      <div><Projects /></div>
      <div><Contact /></div>
    </div>
  )
}

export default App
