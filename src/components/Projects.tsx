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
      id: "nus-virtual-campus",
      title: "NUS Virtual Campus",
      description: "An interactive digital twin installation showcasing the NUS campus in real time. Visitors navigate the campus using a touchscreen interface, while the 3D environment is projected onto a large public display in University Hall.",
      image: "image/screenshots/nus/nus-lod1.jpg",
      tags: ["IOT", "REST API", "WebSocket", "Touch Screen", "Google API", "Digital Twin", "Data Visualization", "BIM"],
    },
    {
      id: "qgis-unreal-integration",
      title: "QGIS–Unreal Geospatial Integration",
      description: "Developed a plugin to stream GIS layers from headless QGIS into Unreal Engine with bidirectional synchronization between GIS analytics and simulation environments.",
      image: "image/screenshots/gis/gis-vector-symbol.jpg",
      tags: ["GIS", "QGIS", "UNREAL ENGINE", "SOCKET", "RASTER", "VECTOR"],
    },
    {
      id: "keppel-command-center",
      title: "Keppel Command Center",
      description: "Built a real-time Unreal Engine digital twin platform for industrial infrastructure monitoring with integrated operational data and predictive analytics.",
      image: "image/screenshots/keppel/keppel-iot-facility-1.jpg",
      tags: ["IOT", "WEBSOCKET", "UNREAL ENGINE", "DIGITAL TWIN", "REST API"],
    },
    {
      id: "ai-assisted-dashboard",
      title: "AI-assisted Digital Twin Dashboard",
      description: "Developed LLM-assisted workflows to accelerate creation of real-time dashboards for spatial and IoT data visualization.",
      image: "image/screenshots/ai-assist/ai-assist-iot-cctv.jpg",
      tags: ["LLM", "AI", "IOT", "AGENT SKILLS", "PROMPT"],
    },
    {
      id: "kaec-gis-analysis",
      title: "King Abdullah Economic City",
      description: "Conducted GIS-based spatial analysis for the King Abdullah Economic City project using satellite imagery and urban datasets to assess population, land use, and economic investment patterns.",
      image: "image/screenshots/kaec/kaec-gis-1.jpg",
      tags: ["GIS Analysis", "Satellite Imagery", "Spatial Data Processing", "Urban Planning Data", "Geospatial Visualization"],
    },
    {
      id: "gitex-singapore-twin",
      title: "GITEX Singapore Digital Twin",
      description: "Built a Singapore digital twin platform integrating satellite imagery, 3D geospatial mapping, and real-time traffic and maritime data from DataMall and marine APIs.",
      image: "image/screenshots/gitex/gitex-datamall-traffic.jpg",
      tags: ["Unreal Engine", "LTA DataMall API", "Marine / Maritime API", "Geospatial Data Integration"],
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
                <div className="relative overflow-hidden h-48 bg-slate-900 flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const fallback = document.createElement('div');
                        fallback.className = 'flex flex-col items-center justify-center text-slate-600 p-4 text-center';
                        fallback.innerHTML = '<div class="text-xs uppercase font-bold text-slate-500 mb-1">Preview Unavailable</div><div class="text-[10px] text-slate-700">' + project.image + '</div>';
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors pointer-events-none" />
                </div>
                <CardHeader className="pt-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3">{project.description}</p>
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