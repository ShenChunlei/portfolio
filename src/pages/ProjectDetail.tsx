"use client";

import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Map, Cpu, Zap, BarChart3, Globe, Shield, 
  Image as ImageIcon, Maximize2, ArrowLeft, Github, ExternalLink 
} from 'lucide-react';
import Navbar from '@/components/Navbar';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // 模拟数据源
  const projectsData: Record<string, any> = {
    "traffic-twin": {
      title: "Smart City Traffic Twin",
      description: "Real-time traffic flow visualization using Mapbox and live camera sensor data via MQTT. Includes predictive congestion modeling.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1600&auto=format&fit=crop",
      tags: ["GIS", "IoT", "React", "D3.js"],
      screenshots: [
        {
          url: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=1200&auto=format&fit=crop",
          title: "Real-time Traffic Dashboard",
          desc: "Live heatmap overlay on GIS base-map showing congestion clusters detected by IoT sensors."
        },
        {
          url: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1200&auto=format&fit=crop",
          title: "3D Terrain & Asset Mapping",
          desc: "Integration of high-resolution DEM data with BIM models of urban infrastructure."
        }
      ]
    },
    "industrial-monitor": {
      title: "Industrial 3D Asset Monitor",
      description: "A high-fidelity Digital Twin of a manufacturing plant using CesiumJS. Integrates PLC data to monitor machine health in 3D space.",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=1600&auto=format&fit=crop",
      tags: ["CesiumJS", "MQTT", "BIM", "WebSocket"],
      screenshots: [
        {
          url: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200&auto=format&fit=crop",
          title: "BIM Integration",
          desc: "Mapping high-precision IFC models to geographic coordinates."
        }
      ]
    },
    "environmental-twin": {
      title: "Geo-Spatial Environmental Twin",
      description: "Environmental monitoring system aggregating air quality, humidity, and temperature sensors onto a 3D terrain model.",
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1600&auto=format&fit=crop",
      tags: ["Three.js", "PostGIS", "InfluxDB", "Python"],
      screenshots: []
    }
  };

  const project = projectsData[projectId || ""] || projectsData["traffic-twin"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      
      {/* Hero Banner */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        
        <div className="absolute bottom-12 left-0 w-full px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <button 
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-emerald-400 font-medium mb-6 hover:translate-x-[-4px] transition-transform"
              >
                <ArrowLeft size={18} /> Back to Portfolio
              </button>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-emerald-500/20 rounded-2xl backdrop-blur-xl border border-emerald-500/30">
                  <Globe className="text-emerald-400" size={32} />
                </div>
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter">{project.title}</h1>
              </div>
              <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-20">
        <Tabs defaultValue="visuals" className="w-full">
          <TabsList className="bg-slate-900/50 border border-slate-800 p-1 mb-12 h-auto flex-wrap justify-start">
            <TabsTrigger value="visuals" className="px-8 py-3 data-[state=active]:bg-emerald-600 data-[state=active]:text-white">Visual Case Study</TabsTrigger>
            <TabsTrigger value="architecture" className="px-8 py-3">Technical Architecture</TabsTrigger>
            <TabsTrigger value="impact" className="px-8 py-3">Project Impact</TabsTrigger>
          </TabsList>

          <TabsContent value="visuals" className="space-y-16">
            <div className="grid grid-cols-1 gap-12">
              {project.screenshots.length > 0 ? (
                project.screenshots.map((s: any, i: number) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group space-y-6"
                  >
                    <div className="relative aspect-video overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
                      <img 
                        src={s.url} 
                        alt={s.title} 
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors" />
                    </div>
                    <div className="max-w-3xl">
                      <h3 className="text-2xl font-bold text-emerald-400 mb-2 flex items-center gap-3">
                        <ImageIcon size={24} /> {s.title}
                      </h3>
                      <p className="text-slate-400 text-lg leading-relaxed">{s.desc}</p>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-20 bg-slate-900/30 rounded-3xl border border-dashed border-slate-800">
                  <p className="text-slate-500 italic">Visualization renders pending for this project.</p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="architecture" className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1 space-y-6">
                <div className="p-8 bg-slate-900 rounded-3xl border border-slate-800">
                  <h4 className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-6">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string) => (
                      <Badge key={tag} className="bg-slate-800 text-slate-300 border-slate-700 px-4 py-1.5">{tag}</Badge>
                    ))}
                  </div>
                </div>
                <div className="p-8 bg-slate-900 rounded-3xl border border-slate-800">
                  <h4 className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-6">Links</h4>
                  <div className="space-y-4">
                    <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white gap-2 h-12 rounded-xl">
                      <Github size={18} /> Source Code
                    </Button>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white gap-2 h-12 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                      <ExternalLink size={18} /> Live Demo
                    </Button>
                  </div>
                </div>
              </div>

              <div className="col-span-2 p-10 bg-slate-900 rounded-3xl border border-slate-800">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <Cpu className="text-emerald-400" /> Implementation Details
                </h3>
                <div className="space-y-10">
                  <div className="relative pl-8 border-l-2 border-emerald-500/20">
                    <div className="absolute -left-1.5 top-0 w-3 h-3 bg-emerald-500 rounded-full" />
                    <h5 className="text-xl font-bold mb-3">GIS Integration Layer</h5>
                    <p className="text-slate-400 leading-relaxed">
                      Leveraged Mapbox GL JS with custom vector tiles generated from OSM and proprietary city planning data. 
                      Implemented sub-second spatial queries using PostGIS indexing for dynamic road segment status updates.
                    </p>
                  </div>
                  <div className="relative pl-8 border-l-2 border-cyan-500/20">
                    <div className="absolute -left-1.5 top-0 w-3 h-3 bg-cyan-500 rounded-full" />
                    <h5 className="text-xl font-bold mb-3">High-Throughput IoT Pipeline</h5>
                    <p className="text-slate-400 leading-relaxed">
                      Architected an MQTT broker system (EMQX) capable of handling bursts of 10k+ messages per second. 
                      Data is processed via Node-RED and streamed to the UI via persistent WebSockets to maintain real-time sync.
                    </p>
                  </div>
                  <div className="relative pl-8 border-l-2 border-blue-500/20">
                    <div className="absolute -left-1.5 top-0 w-3 h-3 bg-blue-500 rounded-full" />
                    <h5 className="text-xl font-bold mb-3">Real-time Synchronization</h5>
                    <p className="text-slate-400 leading-relaxed">
                      Developed a custom interpolation engine to smooth out vehicle movements between sparse sensor updates, 
                      providing a seamless 60fps visualization even with network jitter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="impact">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: "Data Throughput", value: "1.2M / Day", desc: "Successfully processed sensor packets" },
                { label: "Avg Latency", value: "< 150ms", desc: "Sensor-to-screen synchronization" },
                { label: "Predictive Accuracy", value: "94.2%", desc: "Based on historical traffic modeling" },
                { label: "System Uptime", value: "99.98%", desc: "Robust data pipeline reliability" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="p-8 bg-slate-900 rounded-3xl border border-slate-800 text-center"
                >
                  <p className="text-xs text-slate-500 uppercase font-black tracking-widest mb-4">{stat.label}</p>
                  <p className="text-3xl font-black text-emerald-400 mb-2">{stat.value}</p>
                  <p className="text-sm text-slate-500">{stat.desc}</p>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      {/* Footer CTA */}
      <section className="py-24 border-t border-slate-900 bg-slate-950 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in this project?</h2>
          <p className="text-slate-400 text-lg mb-10">
            Let's discuss how digital twins can transform your infrastructure monitoring or urban planning efforts.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/#contact">
              <Button size="lg" className="rounded-full px-10 bg-emerald-600 hover:bg-emerald-700 text-white">Get in Touch</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;