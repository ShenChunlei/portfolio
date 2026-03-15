"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "./ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const elem = document.getElementById('projects');
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <span className="inline-flex items-center px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-emerald-400 uppercase bg-emerald-400/10 rounded-full border border-emerald-400/20">
          Senior Digital Twin & Geospatial Systems Engineer
        </span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-tight">
          Mirroring Reality with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">
            Digital Twins
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed font-light">
          Senior Digital Twin Engineer building real-time 3D geospatial platforms with Unreal Engine, integrating GIS, IoT, and web-based monitoring systems.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            onClick={scrollToProjects}
            size="lg" 
            className="rounded-full px-8 bg-emerald-600 hover:bg-emerald-700 text-white gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            Explore My Twins <ArrowRight size={18} />
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;