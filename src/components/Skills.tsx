"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const categories = [
    {
      title: "Geospatial & 3D",
      skills: ["CesiumJS", "Three.js", "Mapbox GL JS", "ArcGIS API", "PostGIS", "Deck.gl"]
    },
    {
      title: "IoT & Real-time",
      skills: ["MQTT / Mosquitto", "WebSockets", "Apache Kafka", "InfluxDB", "AWS IoT Core", "Node-RED"]
    },
    {
      title: "Data & Backend",
      skills: ["Python (GDAL/Pandas)", "Node.js", "Go", "PostgreSQL", "Redis", "gRPC"]
    },
    {
      title: "Digital Twin Standards",
      skills: ["BIM (IFC/Revit)", "CityGML", "3D Tiles", "DTDL", "Point Cloud Data"]
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
          <h2 className="text-3xl font-bold text-white mb-4">Technical Ecosystem</h2>
          <p className="text-slate-500">The technology stack I use to synchronize physical and digital worlds.</p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((cat, idx) => (
            <motion.div key={idx} variants={item} className="p-6 rounded-2xl border border-slate-800 bg-slate-900 shadow-xl group hover:border-emerald-500/50 transition-all">
              <h3 className="font-bold text-emerald-400 mb-6 uppercase tracking-widest text-xs">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
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