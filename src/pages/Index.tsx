"use client";

import React from 'react';
import Navbar from '../components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 space-y-32 pb-32">
        {/* About Section */}
        <section id="about" className="min-h-[60vh] flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">About Me</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
            Hello! I'm a passionate developer focused on building beautiful and functional web applications.
          </p>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-[60vh] flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['React', 'TypeScript', 'Tailwind', 'Node.js'].map(skill => (
              <div key={skill} className="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 text-center font-semibold">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-[60vh] flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Projects</h2>
          <div className="h-64 bg-slate-200 dark:bg-slate-800 rounded-3xl flex items-center justify-center italic text-slate-500">
            Project cards will go here...
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-[60vh] flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Experience</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-indigo-500 pl-6">
              <h3 className="text-2xl font-bold">Senior Developer</h3>
              <p className="text-slate-500">2020 - Present</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-[60vh] flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">Contact</h2>
          <p className="text-lg mb-8 text-slate-600 dark:text-slate-400">Interested in working together? Drop me a message!</p>
          <a href="mailto:hello@example.com" className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold transition-colors w-fit">
            Send an Email
          </a>
        </section>
      </main>
    </div>
  );
};

export default Index;