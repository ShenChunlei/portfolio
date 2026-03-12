"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: "Senior Software Engineer",
      company: "TechNova Solutions",
      period: "2021 - Present",
      description: "Leading the front-end team in rebuilding the flagship SaaS platform. Improved performance by 40% and established a core UI library."
    },
    {
      role: "Full Stack Developer",
      company: "InnoSoft Systems",
      period: "2019 - 2021",
      description: "Developed and maintained multiple client projects. Implemented automated testing and CI/CD pipelines reducing deployment errors by 25%."
    },
    {
      role: "Junior Developer",
      company: "Startup Hub",
      period: "2017 - 2019",
      description: "Worked on MVP development for early-stage startups. Gained extensive experience in React, Node.js, and agile methodologies."
    }
  ];

  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Professional Experience</h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800"
            >
              <div className="absolute w-4 h-4 bg-indigo-600 rounded-full -left-[9px] top-1.5 ring-4 ring-white dark:ring-slate-950" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                  <p className="text-indigo-600 font-medium">{exp.company}</p>
                </div>
                <span className="text-sm font-semibold text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full h-fit">
                  {exp.period}
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;