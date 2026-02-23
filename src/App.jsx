// src/App.jsx
import React from 'react';
import { Contact } from './components/Contact';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Research } from './components/Research';
import { AIAssistant } from './components/AIAssistant';
import { BackgroundTint } from './components/glass';

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-clip">
      {/* Fixed glass navbar */}
      <Navbar />

      {/* Decorative bokeh tint (only in dark theme so light stays clean) */}
      <div className="hidden dark:block">
        <BackgroundTint />
      </div>

      {/* Native document scroll; pt-24 offsets fixed navbar */}
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
