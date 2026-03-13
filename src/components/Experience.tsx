"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: "Lead Digital Twin Engineer",
      company: "GeoStream Analytics",
      period: "2022 - Present",
      description: "Developing a city-level digital twin platform. Orchestrated the ingestion of 5M+ IoT data points daily across 200km² of GIS terrain using Apache Kafka and CesiumJS."
    },
    {
      role: "Geospatial Systems Developer",
      company: "SmartCity Labs",
      period: "2020 - 2022",
      description: "Built custom GIS tools for urban planning. Integrated real-time parking and utility sensors with ArcGIS dashboards, reducing response times for city services by 30%."
    },
    {
      role: "IoT Solutions Engineer",
      company: "SensorGrid Tech",
      period: "2018 - 2020",
      description: "Architected end-to-end IoT solutions for industrial monitoring. Specialized in MQTT protocol optimization and time-series data visualization in web-based dashboards."
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-slate-950">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Professional Experience</h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 border-l-2 border-emerald-500/30"
            >
              <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[7px] top-2 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-emerald-400 font-medium">{exp.company}</p>
                </div>
                <span className="text-xs font-mono font-bold text-slate-500 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full h-fit">
                  {exp.period}
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed font-light">
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