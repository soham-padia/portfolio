// src/App.jsx
import React, { useEffect } from 'react';
import { Contact } from './components/Contact';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { BackgroundTint } from './components/glass';
import { bumpOncePerDay } from './components/counter';

export default function App() {
  useEffect(() => {
    bumpOncePerDay();
  }, []);
  return (
    <div className="relative min-h-screen w-screen text-slate-900 dark:text-white source-code-pro">
      {/* Fixed glass navbar */}
      <Navbar />

      {/* Decorative bokeh tint (only in dark theme so light stays clean) */}
      <div className="hidden dark:block">
        <BackgroundTint />
      </div>

      {/* Main scroll area; pt-20 offsets the fixed navbar height */}
      <div className="h-screen overflow-scroll scrollbar-hide snap-mandatory scroll-smooth pt-20">
        <section className="snap-center h-fit md:h-screen shrink-0">
          <Hero />
        </section>

        <section className="md:h-screen h-fit snap-center shrink-0">
          <Skills />
        </section>

        <section className="h-fit snap-center shrink-0">
          <Projects />
        </section>

        <section className="snap-center shrink-0">
          <Contact />
        </section>
      </div>
    </div>
  );
}
