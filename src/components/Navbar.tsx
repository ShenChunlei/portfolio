"use client";

import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { cn } from "../lib/utils";
import { Code2, User, Briefcase, Mail, Cpu } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  // 如果路径包含 /project，则不渲染导航栏
  if (location.pathname.includes('/project')) {
    return null;
  }

  const navItems = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Cpu },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', icon: Code2 },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full border border-slate-200 dark:border-slate-800 shadow-xl transition-all duration-300">
      <div className="flex items-center gap-6 md:gap-10">
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-2 pr-4 border-r border-slate-200 dark:border-slate-800">
          <img src="favicon.ico" alt="Logo" className="w-5 h-5" />
          <span className="text-sm font-black tracking-tight text-slate-900 dark:text-white hidden sm:inline">
            shenchunlei-portfolio
          </span>
        </div>

        {/* Navigation Items */}
        <ul className="flex items-center gap-6 md:gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="group flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-all duration-200"
              >
                <item.icon size={18} className="group-hover:scale-110 group-hover:rotate-3 transition-transform" />
                <span className="hidden lg:inline">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;