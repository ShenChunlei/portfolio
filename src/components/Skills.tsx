"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "Framer Motion"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "Go", "PostgreSQL", "Redis"]
    },
    {
      title: "Tools & DevOps",
      skills: ["Docker", "AWS", "Git", "GitHub Actions", "Terraform", "Vercel"]
    },
    {
      title: "Design",
      skills: ["Figma", "UI/UX Design", "Responsive Design", "Accessibility"]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Technical Stack</h2>
          <p className="text-slate-600 dark:text-slate-400">The tools and technologies I use to bring ideas to life.</p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {categories.map((cat, idx) => (
            <motion.div key={idx} variants={item} className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-indigo-600 mb-4 uppercase tracking-wider text-sm">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;