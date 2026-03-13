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

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const projectsData: Record<string, any> = {
    "nus-virtual-campus": {
      title: "NUS Virtual Campus",
      description: "An interactive digital twin installation showcasing the NUS campus in real time. Visitors navigate the campus using a touchscreen interface, while the 3D environment is projected onto a large public display in University Hall.",
      image: "image/screenshots/nus/nus-lod1.jpg",
      tags: ["IOT", "REST API", "WebSocket", "BIM"],
      features: [
        { title: "Interactive Digital Twin Interface", desc: "Implemented a touchscreen-controlled interface allowing users to explore the campus digital twin projected onto a large public display." },
        { title: "Real-Time 3D Geospatial Environment", desc: "Built a large-scale Unreal Engine 3D campus environment supporting spatial navigation and wayfinding." },
        { title: "Data Integration Layer", desc: "Integrated traffic and environmental datasets to enable real-time operational monitoring within the digital twin." },
        { title: "CMS Content Integration", desc: "Connected the platform with a CMS backend to support dynamic updates of campus information and spatial content." },
        { title: "Rendering Optimization", desc: "Optimized scene streaming and LOD systems to maintain performance for large-scale campus visualization." }
      ],
      screenshots: [
        { url: "image/screenshots/nus/nus-lod1.jpg", title: "Campus Overview", desc: "Large scale LOD1 visualization of the entire NUS campus." },
        { url: "image/screenshots/nus/nus-bim-overview.jpg", title: "BIM Integration", desc: "Detailed architectural models integrated into the spatial map." },
        { url: "image/screenshots/nus/nus-heatmap.jpg", title: "Hot Spots Heatmap", desc: "Real-time occupancy data visualized across campus facilities." },
        { url: "image/screenshots/nus/nus-iot-weather-sensor.jpg", title: "IoT Weather Data", desc: "Live sensor feeds from weather stations integrated into the 3D scene." }
      ]
    },
    "qgis-unreal-integration": {
      title: "QGIS–Unreal Geospatial Integration",
      description: "Developed a plugin to stream GIS layers from headless QGIS into Unreal Engine with bidirectional synchronization.",
      image: "image/screenshots/gis/gis-vector-symbol.jpg",
      tags: ["GIS", "QGIS", "Unreal Engine", "Socket"],
      features: [
        { title: "Headless GIS Processing", desc: "Developed a plugin enabling headless QGIS execution for automated geospatial data processing and analysis." },
        { title: "GIS-to-Unreal Data Streaming", desc: "Implemented a pipeline to stream GIS layers directly into Unreal Engine for real-time geospatial visualization." },
        { title: "Bidirectional Data Synchronization", desc: "Built a two-way integration allowing simulation results in Unreal Engine to interact with GIS analytics workflows." },
        { title: "Geospatial Data Pipeline Optimization", desc: "Designed scalable data pipelines for handling large spatial datasets and maintaining real-time system performance." }
      ],
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
      features: [
        { title: "Industrial Digital Twin Platform", desc: "Developed a real-time digital twin environment in Unreal Engine for monitoring industrial infrastructure and operational systems." },
        { title: "Operational Data Integration", desc: "Integrated multiple operational datasets to enable real-time visualization and system monitoring within the 3D environment." },
        { title: "Real-Time Monitoring Dashboard", desc: "Implemented interactive monitoring interfaces connecting infrastructure data with the digital twin visualization platform." },
        { title: "Scalable Visualization System", desc: "Designed the system to support large-scale infrastructure assets and maintain stable real-time performance." }
      ],
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
      features: [
        { title: "LLM Orchestration", desc: "Using large language models to translate natural language queries into spatial data visualizations." },
        { title: "Dynamic Widget Generation", desc: "Automated UI generation for IoT sensors based on semantic context." }
      ],
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
      features: [
        { title: "Spatial Assessment", desc: "In-depth analysis of land use and development patterns." },
        { title: "Remote Sensing", desc: "Processing satellite data for infrastructure change detection." }
      ],
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
      features: [
        { title: "City-Scale Integration", desc: "Connecting LTA DataMall and maritime APIs for a unified live city view." },
        { title: "High-Traffic Simulation", desc: "Rendering thousands of dynamic agents based on real-world traffic telemetry." }
      ],
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
      features: [
        { title: "Public Health Monitoring", desc: "Geospatial visualization of health metrics across administrative districts." },
        { title: "National Analytics Hub", desc: "Centralized data pipeline for government-wide spatial decision support." }
      ],
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
      features: [
        { title: "LOD Optimization", desc: "Handling massive city datasets with seamless Level of Detail transitions." },
        { title: "Urban Simulation", desc: "Agent-based modeling of pedestrian and vehicle movement in high-density areas." }
      ],
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
      features: [
        { title: "Dynamic Lighting Environment", desc: "Accurate solar positioning and atmospheric simulation for urban planning." },
        { title: "Visual Fidelity", desc: "High-end architectural visualization within a performance-critical GIS framework." }
      ],
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
            <TabsTrigger value="visuals" className="px-8 py-3 data-[state=active]:bg-emerald-600 data-[state=active]:text-white">Project Description</TabsTrigger>
            <TabsTrigger value="architecture" className="px-8 py-3">Technical Stack</TabsTrigger>
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
                        className="object-cover w-full h-full"
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
                  {project.features ? (
                    project.features.map((feature: any, idx: number) => (
                      <div key={idx} className={`relative pl-8 border-l-2 ${idx % 2 === 0 ? 'border-emerald-500/20' : 'border-cyan-500/20'}`}>
                        <div className={`absolute -left-1.5 top-0 w-3 h-3 rounded-full ${idx % 2 === 0 ? 'bg-emerald-500' : 'bg-cyan-500'}`} />
                        <h5 className="text-xl font-bold mb-3">{feature.title}</h5>
                        <p className="text-slate-400 leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-slate-500 italic">Technical focus details coming soon.</p>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <section className="py-24 border-t border-slate-900 bg-slate-950 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in this project?</h2>
          <p className="text-slate-400 text-lg mb-10">
            Let’s discuss how digital twins and geospatial systems can power smarter infrastructure and cities.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/" state={{ scrollTo: 'contact' }}>
              <Button size="lg" className="rounded-full px-10 bg-emerald-600 hover:bg-emerald-700 text-white">Get in Touch</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;