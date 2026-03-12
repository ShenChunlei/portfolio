"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center z-10"
      >
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-indigo-600 uppercase bg-indigo-50 rounded-full dark:bg-indigo-900/30 dark:text-indigo-300">
          Available for new opportunities
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
          Building Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Experiences</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
          Hi, I'm a passionate Software Engineer specialized in building high-performance web applications with React, TypeScript, and modern backend technologies.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="rounded-full px-8 bg-indigo-600 hover:bg-indigo-700 text-white gap-2">
            View My Work <ArrowRight size={18} />
          </Button>
          <div className="flex items-center gap-4 ml-0 sm:ml-4 mt-4 sm:mt-0">
            <a href="#" className="p-2 text-slate-600 hover:text-indigo-600 transition-colors"><Github size={24} /></a>
            <a href="#" className="p-2 text-slate-600 hover:text-indigo-600 transition-colors"><Linkedin size={24} /></a>
            <a href="#" className="p-2 text-slate-600 hover:text-indigo-600 transition-colors"><Mail size={24} /></a>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-700 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-2 bg-indigo-600 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;