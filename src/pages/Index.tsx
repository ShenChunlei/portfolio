"use client";

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // 检查是否有从详情页传过来的滚动指令
    if (location.state && (location.state as any).scrollTo) {
      const targetId = (location.state as any).scrollTo;
      const elem = document.getElementById(targetId);
      
      if (elem) {
        // 给一点点延迟确保组件渲染完成
        setTimeout(() => {
          window.scrollTo({
            top: elem.offsetTop - 80,
            behavior: 'smooth',
          });
        }, 100);
      }
      
      // 清除 state，防止刷新页面时再次触发滚动
      window.history.replaceState({}, document.title);
    }
  }, [location]);

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