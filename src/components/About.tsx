"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Activity, Map } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-slate-900 border-y border-slate-800">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-xs mx-auto md:mx-0"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500 to-cyan-500 opacity-20 blur-2xl rounded-3xl" />
            <img 
              src="image/personal/photo.jpg" 
              alt="Personal Photo" 
              className="relative rounded-2xl object-cover w-full aspect-[4/5] shadow-2xl border border-slate-700"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-emerald-500 tracking-widest uppercase mb-4">My Expertise</h2>
            <h3 className="text-4xl font-bold text-white mb-6">Fusing Space & Time for Digital Twins</h3>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                I design and develop real-time 3D geospatial platforms that integrate GIS, IoT data, and simulation environments to power next-generation infrastructure and smart city systems.
              </p>
              
              <div className="grid grid-cols-1 gap-4 pt-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                  <Map className="text-emerald-400 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-white">Geospatial Intelligence</h4>
                    <p className="text-sm">Expert in coordinate systems, GeoJSON, and dynamic tiling for large-scale maps.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                  <Activity className="text-cyan-400 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-white">Real-time IoT Streams</h4>
                    <p className="text-sm">Implementing low-latency data ingestion from industrial sensors and edge devices.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;