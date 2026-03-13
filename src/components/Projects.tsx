"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: "traffic-twin",
      title: "Smart City Traffic Twin",
      description: "Real-time traffic flow visualization using Mapbox and live camera sensor data via MQTT.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop",
      tags: ["GIS", "IoT", "React"],
    },
    {
      id: "industrial-monitor",
      title: "Industrial 3D Asset Monitor",
      description: "A high-fidelity Digital Twin of a manufacturing plant using CesiumJS.",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=800&auto=format&fit=crop",
      tags: ["CesiumJS", "MQTT", "BIM"],
    },
    {
      id: "unreal-gis",
      title: "Unreal GIS Platform",
      description: "Interactive 3D geospatial platform built with Unreal Engine for urban planning.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
      tags: ["UE5", "GIS", "C++"],
    },
    {
      id: "iot-dashboard",
      title: "IoT Sensor Network",
      description: "Web-based dashboard for monitoring thousands of distributed environmental sensors.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
      tags: ["React", "MQTT", "D3.js"],
    },
    {
      id: "arch-viz",
      title: "Architectural Visualizer",
      description: "Photorealistic real-time architectural walkthroughs using advanced lighting tech.",
      image: "https://images.unsplash.com/photo-1503387762-592dee58c460?q=80&w=800&auto=format&fit=crop",
      tags: ["Lumion", "3ds Max", "V-Ray"],
    },
    {
      id: "smart-port",
      title: "Autonomous Port Twin",
      description: "Digital simulation of port operations for optimizing container logistics.",
      image: "https://images.unsplash.com/photo-1524522173746-f628baad3644?q=80&w=800&auto=format&fit=crop",
      tags: ["Unity", "C#", "Simulations"],
    },
    {
      id: "ar-navigation",
      title: "AR Indoor Navigation",
      description: "Augmented reality solution for complex indoor facility management.",
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=800&auto=format&fit=crop",
      tags: ["ARKit", "Unity", "GIS"],
    },
    {
      id: "energy-grid",
      title: "Smart Grid Monitor",
      description: "Visualization of real-time power distribution and grid health metrics.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop",
      tags: ["Three.js", "WebSockets", "D3"],
    },
    {
      id: "digital-campus",
      title: "Digital University Campus",
      description: "A comprehensive 3D model of a campus integrated with facility management data.",
      image: "https://images.unsplash.com/photo-152305085306e-8c3d3e009fe5?q=80&w=800&auto=format&fit=crop",
      tags: ["Cesium", "React", "BIM"],
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Key Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <Card className="overflow-hidden border-slate-800 bg-slate-950/50 group hover:border-emerald-500/50 transition-all h-full flex flex-col">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors" />
                </div>
                <CardHeader className="pt-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="text-[10px] uppercase tracking-wider font-bold text-slate-500 bg-slate-900 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-4 border-t border-slate-800/50">
                  <button 
                    onClick={() => navigate(`/project/${project.id}`)} 
                    className="flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <ExternalLink size={16} /> View Case Study
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