"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
                alt="Profile" 
                className="relative rounded-2xl object-cover w-full aspect-square shadow-2xl"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">About Me</h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-400">
              <p>
                I am a software engineer with over 5 years of experience in creating scalable web solutions. My journey started when I built my first simple website in high school, and I haven't stopped learning since.
              </p>
              <p>
                I specialize in front-end development using React and Next.js, but I'm equally comfortable working on the back-end with Node.js and PostgreSQL. I love solving complex problems and turning ideas into reality through clean, efficient code.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <Card className="border-none shadow-sm bg-white dark:bg-slate-800">
                  <CardContent className="p-4">
                    <p className="text-2xl font-bold text-indigo-600">5+</p>
                    <p className="text-sm text-slate-500">Years Experience</p>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-sm bg-white dark:bg-slate-800">
                  <CardContent className="p-4">
                    <p className="text-2xl font-bold text-indigo-600">20+</p>
                    <p className="text-sm text-slate-500">Projects Completed</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;