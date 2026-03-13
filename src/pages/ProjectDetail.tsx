"use client";

import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Button } from "../components/ui/button";
import { 
  Map, Cpu, Zap, BarChart3, Globe, Shield, 
  Image as ImageIcon, ArrowLeft, Github, ExternalLink 
} from 'lucide-react';
import Navbar from '../components/Navbar';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const projectsData: Record<string, any> = {
    "nus-virtual-campus": {
      title: "NUS Virtual Campus",
      description: "An interactive digital twin installation showcasing the NUS campus in real time. Visitors navigate the campus using a touchscreen interface, while the 3D environment is projected onto a large public display in University Hall.",
      image: "image/screenshots/nus/nus-lod1.jpg",
      tags: ["IOT", "REST API", "WebSocket", "BIM"],
      screenshots: [
        { url: "image/screenshots/nus/nus-lod1.jpg", title: "Campus Overview", desc: "Large scale LOD1 visualization of the entire NUS campus." },
        { url: "image/screenshots/nus/nus-bim-overview.jpg", title: "BIM Integration", desc: "Detailed architectural models integrated into the spatial map." },
        { url: "image/screenshots/nus/nus-heatmap.jpg", title: "Population Heatmap", desc: "Real-time occupancy data visualized across campus facilities." },
        { url: "image/screenshots/nus/nus-iot-weather-sensor.jpg", title: "IoT Weather Data", desc: "Live sensor feeds from weather stations integrated into the 3D scene." }
      ]
    },
    "qgis-unreal-integration": {
      title: "QGIS–Unreal Geospatial Integration",
      description: "Developed a plugin to stream GIS layers from headless QGIS into Unreal Engine with bidirectional synchronization.",
      image: "image/screenshots/gis/gis-vector-symbol.jpg",
      tags: ["GIS", "QGIS", "Unreal Engine", "Socket"],
      screenshots: [
        { url: "image/screenshots/gis/gis-vector-symbol.jpg", title: "Vector Symbolization", desc: "Styling GIS vector data within the Unreal Engine environment." },
        { url: "image/screenshots/gis/gis-raster.jpg", title: "Raster Mapping", desc: "Processing and rendering high-resolution terrain and imagery." },
        { url: "image/screenshots/gis/gis-data-table.jpg", title: "Attribute Sync", desc: "Synchronizing GIS database attributes with 3D object metadata." }
      ]
    },
    "keppel-command-center": {
      title: "Keppel Command Center",
      description: "Built a real-time Unreal Engine digital twin platform for industrial infrastructure monitoring.",
      image: "image/screenshots/keppel/keppel-iot-facility-1.jpg",
      tags: ["IoT", "WebSocket", "Digital Twin"],
      screenshots: [
        { url: "image/screenshots/keppel/keppel-iot-facility-1.jpg", title: "Facility Monitoring", desc: "Real-time status updates of industrial assets." },
        { url: "image/screenshots/keppel/keppel-pipe-visualization-1.jpg", title: "Subsurface Utility", desc: "Visualization of underground piping and infrastructure." }
      ]
    },
    "ai-assisted-dashboard": {
      title: "AI-assisted Digital Twin Dashboard",
      description: "Developed LLM-assisted workflows to accelerate creation of real-time dashboards for spatial and IoT data visualization.",
      image: "image/screenshots/ai-assist/ai-assist-iot-cctv.jpg",
      tags: ["LLM", "AI", "IoT"],
      screenshots: [
        { url: "image/screenshots/ai-assist/ai-assist-dashboard.jpg", title: "AI Dashboard Generator", desc: "Automated widget creation based on natural language queries." },
        { url: "image/screenshots/ai-assist/ai-assist-iot-cctv.jpg", title: "Intelligent CCTV Sync", desc: "AI-driven camera switching based on detected events in 3D space." }
      ]
    },
    "kaec-gis-analysis": {
      title: "King Abdullah Economic City",
      description: "GIS-based spatial analysis for KAEC using satellite imagery and urban datasets.",
      image: "image/screenshots/kaec/kaec-gis-1.jpg",
      tags: ["GIS Analysis", "Urban Planning"],
      screenshots: [
        { url: "image/screenshots/kaec/kaec-gis-1.jpg", title: "Land Use Analysis", desc: "Spatial assessment of development phases." },
        { url: "image/screenshots/kaec/kaec-gis-2.jpg", title: "Satellite Imagery", desc: "Processing multi-spectral imagery for urban change detection." }
      ]
    },
    "gitex-singapore-twin": {
      title: "GITEX Singapore Digital Twin",
      description: "Built a Singapore digital twin platform integrating real-time traffic and maritime data.",
      image: "image/screenshots/gitex/gitex-datamall-traffic.jpg",
      tags: ["DataMall API", "Maritime API", "Unreal Engine"],
      screenshots: [
        { url: "image/screenshots/gitex/gitex-datamall-traffic.jpg", title: "Traffic Intelligence", desc: "Live traffic flow from LTA DataMall." },
        { url: "image/screenshots/gitex/gitex-datamall-marine.jpg", title: "Maritime Monitoring", desc: "Real-time vessel tracking in Singapore waters." }
      ]
    },
    "bahrain-digital-twin": {
      title: "Bahrain Digital Twin",
      description: "Built a Bahrain government digital twin integrating healthcare and event monitoring datasets.",
      image: "image/screenshots/bahrain/bahrain-data-visualization.jpg",
      tags: ["GIS Visualization", "Data Analytics"],
      screenshots: [
        { url: "image/screenshots/bahrain/bahrain-data-visualization.jpg", title: "Analytics Hub", desc: "Centralized dashboard for government metrics." },
        { url: "image/screenshots/bahrain/bahrain-data-heatmap.jpg", title: "Health Analytics", desc: "Heatmap visualization of epidemiological data." }
      ]
    },
    "leap-riyadh": {
      title: "LEAP Riyadh",
      description: "Created a Riyadh digital twin platform for the LEAP exhibition featuring large-scale 3D city visualization.",
      image: "image/screenshots/leap/leap-facility.jpg",
      tags: ["Digital Twin", "Unreal Engine", "GIS"],
      screenshots: [
        { url: "image/screenshots/leap/leap-facility.jpg", title: "MISK City District", desc: "High-detail simulation of urban infrastructure." },
        { url: "image/screenshots/leap/leap-traffic.jpg", title: "City Traffic", desc: "Agent-based traffic simulation in the urban core." }
      ]
    },
    "leap-madinah": {
      title: "LEAP Madinah",
      description: "Built a Madinah digital twin for the LEAP exhibition featuring dynamic day–night simulation.",
      image: "image/screenshots/madinah/madinah-lod2-night.jpg",
      tags: ["Day-Night Simulation", "Smart City"],
      screenshots: [
        { url: "image/screenshots/madinah/madinah-lod2-night.jpg", title: "Night View", desc: "Atmospheric night simulation with dynamic lighting." },
        { url: "image/screenshots/madinah/madinah-lod2-day.jpg", title: "Day View", desc: "High-fidelity architectural visualization under daylight." }
      ]
    }
  };

  const project = projectsData[projectId || ""] || projectsData["nus-virtual-campus"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      
      <div className="pt-32 pb-12 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button 
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-emerald-400 font-medium mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={18} /> Back to Portfolio
            </button>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-emerald-500/20 rounded-2xl backdrop-blur-xl border border-emerald-500/30">
                <Globe className="text-emerald-400" size={32} />
              </div>
              <h1 className="text-3xl md:text-5xl font-black tracking-tighter">{project.title}</h1>
            </div>
            <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <Tabs defaultValue="visuals" className="w-full">
          <TabsList className="bg-slate-900/50 border border-slate-800 p-1 mb-12 h-auto flex-wrap justify-start">
            <TabsTrigger value="visuals" className="px-8 py-3 data-[state=active]:bg-emerald-600 data-[state=active]:text-white">Visual Case Study</TabsTrigger>
            <TabsTrigger value="architecture" className="px-8 py-3">Technical Stack</TabsTrigger>
            <TabsTrigger value="impact" className="px-8 py-3">Metrics</TabsTrigger>
          </TabsList>

          <TabsContent value="visuals" className="space-y-16">
            <div className="grid grid-cols-1 gap-12">
              {project.screenshots?.length > 0 ? (
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
                  <p className="text-slate-500 italic">No additional screenshots available for this project.</p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="architecture" className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1 space-y-6">
                <div className="p-8 bg-slate-900 rounded-3xl border border-slate-800">
                  <h4 className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-6">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string) => (
                      <Badge key={tag} className="bg-slate-800 text-slate-300 border-slate-700 px-4 py-1.5">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-span-2 p-10 bg-slate-900 rounded-3xl border border-slate-800">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <Cpu className="text-emerald-400" /> Implementation Focus
                </h3>
                <div className="space-y-10">
                  <div className="relative pl-8 border-l-2 border-emerald-500/20">
                    <div className="absolute -left-1.5 top-0 w-3 h-3 bg-emerald-500 rounded-full" />
                    <h5 className="text-xl font-bold mb-3">Real-time Data Integration</h5>
                    <p className="text-slate-400 leading-relaxed">
                      Leveraged modern protocols to bridge the gap between physical sensors and the digital model, ensuring sub-second latency for critical infrastructure monitoring.
                    </p>
                  </div>
                  <div className="relative pl-8 border-l-2 border-cyan-500/20">
                    <div className="absolute -left-1.5 top-0 w-3 h-3 bg-cyan-500 rounded-full" />
                    <h5 className="text-xl font-bold mb-3">Geospatial Fidelity</h5>
                    <p className="text-slate-400 leading-relaxed">
                      Maintained high geographic accuracy by integrating multi-source GIS data directly into the rendering pipeline.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="impact">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: "Rendering", value: "60 FPS", desc: "Smooth real-time experience" },
                { label: "Sync Latency", value: "< 200ms", desc: "Sensor to digital mirror" },
                { label: "Data Sources", value: "Multi-API", desc: "Distributed integration" },
                { label: "Resolution", value: "4K Ready", desc: "Large scale display support" }
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
      
      <section className="py-24 border-t border-slate-900 bg-slate-950 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in this project?</h2>
          <p className="text-slate-400 text-lg mb-10">
            Let's discuss how digital twins can transform your infrastructure monitoring or urban planning efforts.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/">
              <Button size="lg" className="rounded-full px-10 bg-emerald-600 hover:bg-emerald-700 text-white">Get in Touch</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;