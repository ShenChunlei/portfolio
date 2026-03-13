"use client";

import React from 'react';
import { cn } from "../lib/utils";
import { Code2, User, Briefcase, Mail, Cpu } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Cpu },
    { name: 'Projects', href: '#projects', icon: Code2 },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 80, // 减去一些偏移量，避免内容被导航栏遮挡
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full border border-slate-200 dark:border-slate-800 shadow-xl transition-all duration-300">
      <ul className="flex items-center gap-6 md:gap-8">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="group flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200"
            >
              <item.icon size={18} className="group-hover:scale-110 group-hover:rotate-3 transition-transform" />
              <span className="hidden md:inline">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;