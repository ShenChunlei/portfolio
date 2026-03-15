"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from "./ui/badge";

const Skills = () => {
  const categories = [
    {
      title: "Real-Time 3D & Simulation",
      skills: ["Unreal Engine (Blueprint & C++)", "Blender(Python)", "Real-time rendering pipelines", "Interactive 3D systems", "Simulation environments", "LOD systems", "Rendering optimization"]
    },
    {
      title: "Digital Twin & Geospatial",
      skills: ["Digital twin platforms", "GIS visualization", "Geospatial data integration", "Spatial data processing", "IoT data visualization", "Spatial analytics"]
    },
    {
      title: "Geospatial Systems & Data Pipelines",
      skills: ["QGIS", "ArcGIS", "Headless GIS processing", "Geospatial data pipelines", "Spatial layer streaming", "Large-scale spatial datasets"]
    },
    {
      title: "Web Platforms & API Integration",
      skills: ["Python", "JavaScript / Vue.js / Node.js", "REST API & WebSocket", "Real-time monitoring dashboards", "Google Maps API", "HERE Traffic API", "LTA DataMall API", "MPA Maritime Data Hub"]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 px-4 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-slate-500">Technologies powering real-time 3D, geospatial intelligence, and digital twin platforms.</p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((cat, idx) => (
            <motion.div key={idx} variants={item} className="p-6 rounded-2xl border border-slate-800 bg-slate-900 shadow-xl group hover:border-emerald-500/50 transition-all flex flex-col">
              <h3 className="font-bold text-emerald-400 mb-6 uppercase tracking-widest text-xs min-h-[2rem] flex items-center">{cat.title}</h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                {cat.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-slate-800 text-slate-300 border border-slate-700 hover:bg-emerald-900/30 hover:text-emerald-300 hover:border-emerald-500/30 transition-all duration-300">
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