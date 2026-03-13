"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, Database, Radio } from 'lucide-react';

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: "traffic-twin",
      title: "Smart City Traffic Twin",
      description: "Real-time traffic flow visualization using Mapbox and live camera sensor data via MQTT.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop",
      tags: ["GIS", "IoT", "React"],
      stats: { sensors: "500+", dataRate: "10ms" }
    },
    {
      id: "industrial-monitor",
      title: "Industrial 3D Asset Monitor",
      description: "A high-fidelity Digital Twin of a manufacturing plant using CesiumJS.",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=800&auto=format&fit=crop",
      tags: ["CesiumJS", "MQTT", "BIM"],
      stats: { assets: "1200+", latency: "<100ms" }
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Case Studies</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-slate-800 bg-slate-950/50 group hover:border-emerald-500/50 transition-all">
                <div className="relative overflow-hidden h-56">
                  <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
                </div>
                <CardHeader className="pt-6">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm mb-6">{project.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between gap-4 pt-4 border-t border-slate-800/50">
                  <button onClick={() => navigate(`/project/${project.id}`)} className="flex items-center gap-2 text-sm font-medium text-emerald-400">
                    <ExternalLink size={16} /> View Details
                  </button>
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