// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contact } from './components/Contact';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Research } from './components/Research';
import { AIAssistant } from './components/AIAssistant';
import { BackgroundTint } from './components/glass';
import { BlogIndex } from './components/blog/BlogIndex';
import { BlogPost } from './components/blog/BlogPost';

function Portfolio() {
  return (
    <div className="relative min-h-screen w-full overflow-x-clip">
      <Navbar />
      <div className="hidden dark:block">
        <BackgroundTint />
      </div>
      <main className="pt-24">
        <Hero />
        <Skills />
        <Experience />
        <Research />
        <Projects />
        <Contact />
      </main>
      <AIAssistant />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}
