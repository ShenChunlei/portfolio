"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-emerald-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-12 border-t border-slate-900 bg-slate-950 text-center">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} SHEN CHUNLEI. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;