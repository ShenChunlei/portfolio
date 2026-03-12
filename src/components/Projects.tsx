"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Database, Radio } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Smart City Traffic Twin",
      description: "Real-time traffic flow visualization using Mapbox and live camera sensor data via MQTT. Includes predictive congestion modeling.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop",
      tags: ["GIS", "IoT", "React", "D3.js"],
      stats: { sensors: "500+", dataRate: "10ms" }
    },
    {
      title: "Industrial 3D Asset Monitor",
      description: "A high-fidelity Digital Twin of a manufacturing plant using CesiumJS. Integrates PLC data to monitor machine health in 3D space.",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=800&auto=format&fit=crop",
      tags: ["CesiumJS", "MQTT", "BIM", "WebSocket"],
      stats: { assets: "1200+", latency: "<100ms" }
    },
    {
      title: "Geo-Spatial Environmental Twin",
      description: "Environmental monitoring system aggregating air quality, humidity, and temperature sensors onto a 3D terrain model.",
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=800&auto=format&fit=crop",
      tags: ["Three.js", "PostGIS", "InfluxDB", "Python"],
      stats: { coverage: "25km²", nodes: "250" }
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Case Studies</h2>
          <p className="text-slate-400">Transforming raw spatial and sensor data into actionable visual insights.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="overflow-hidden border-slate-800 bg-slate-950/50 group hover:border-emerald-500/50 transition-all duration-500">
                <div className="relative overflow-hidden h-56">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                </div>
                <CardHeader className="pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono">
                      <Radio size={14} /> {project.stats.sensors || project.stats.nodes}
                    </div>
                    <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono">
                      <Database size={14} /> {project.stats.dataRate || project.stats.latency}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-[10px] border-slate-700 text-slate-400 uppercase tracking-tighter group-hover:border-emerald-500/30 group-hover:text-emerald-400 transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between gap-4 pt-4 border-t border-slate-800/50">
                  <a href="#" className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors">
                    <Github size={16} /> Repository
                  </a>
                  <a href="#" className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors">
                    <ExternalLink size={16} /> Project Details
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;