"use client";

import React from 'react';
import { cn } from "@/lib/utils";
import { Code2, User, Briefcase, Mail, Cpu } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Cpu },
    { name: 'Projects', href: '#projects', icon: Code2 },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-full border border-slate-200 dark:border-slate-800 shadow-lg">
      <ul className="flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className="group flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <item.icon size={16} className="group-hover:scale-110 transition-transform" />
              <span className="hidden md:inline">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;