"use client";

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Map, Cpu, Zap, BarChart3, Globe, Shield, Image as ImageIcon, Maximize2 } from 'lucide-react';

interface ProjectDetailProps {
  isOpen: boolean;
  onClose: () => void;
  project: any;
}

const ProjectDetailModal = ({ isOpen, onClose, project }: ProjectDetailProps) => {
  if (!project) return null;

  // 模拟的项目截图数据，你可以替换为真实的 URL
  const screenshots = [
    {
      url: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=1200&auto=format&fit=crop",
      title: "Real-time Traffic Dashboard",
      desc: "Live heatmap overlay on GIS base-map showing congestion clusters detected by IoT sensors."
    },
    {
      url: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1200&auto=format&fit=crop",
      title: "3D Terrain & Asset Mapping",
      desc: "Integration of high-resolution DEM data with BIM models of urban infrastructure."
    },
    {
      url: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200&auto=format&fit=crop",
      title: "IoT Sensor Node Analysis",
      desc: "Drill-down view of individual sensor health and time-series data stream synchronization."
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-950 border-slate-800 text-white p-0">
        <div className="relative h-64 w-full">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
          <div className="absolute bottom-6 left-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-emerald-500/20 rounded-lg backdrop-blur-md">
                <Globe className="text-emerald-400" size={24} />
              </div>
              <DialogTitle className="text-3xl font-bold">{project.title}</DialogTitle>
            </div>
          </div>
        </div>

        <div className="p-8 pt-2">
          <DialogDescription className="text-slate-400 text-lg mb-6">
            {project.description}
          </DialogDescription>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="bg-slate-900 border-slate-800 w-full justify-start overflow-x-auto">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="visuals">Visualizations</TabsTrigger>
              <TabsTrigger value="architecture">Architecture</TabsTrigger>
              <TabsTrigger value="impact">Impact</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-emerald-400 font-bold uppercase tracking-wider text-xs">Core Objective</h4>
                  <p className="text-slate-300 leading-relaxed">
                    To create a real-time synchronized mirror of urban traffic flow, enabling city planners to visualize congestion patterns and simulate "what-if" scenarios for road closures or accidents.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string) => (
                      <Badge key={tag} className="bg-slate-800 text-slate-300 border-slate-700">{tag}</Badge>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                  <h4 className="text-emerald-400 font-bold uppercase tracking-wider text-xs mb-3">Key Features</h4>
                  <ul className="space-y-3 text-sm text-slate-400">
                    <li className="flex items-center gap-2"><Zap size={14} className="text-cyan-400" /> Real-time vehicle trajectory mapping</li>
                    <li className="flex items-center gap-2"><Map size={14} className="text-cyan-400" /> Multi-layer GIS integration (OSM + Custom)</li>
                    <li className="flex items-center gap-2"><BarChart3 size={14} className="text-cyan-400" /> Congestion heatmaps & flow analytics</li>
                    <li className="flex items-center gap-2"><Shield size={14} className="text-cyan-400" /> Anomaly detection (accidents/breakdowns)</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="visuals" className="space-y-8 pt-6">
              <div className="grid grid-cols-1 gap-8">
                {screenshots.map((s, i) => (
                  <div key={i} className="group relative space-y-3">
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
                      <img 
                        src={s.url} 
                        alt={s.title} 
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
                      <div className="absolute top-4 right-4 p-2 bg-slate-950/60 backdrop-blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 size={16} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <h5 className="text-emerald-400 font-bold flex items-center gap-2">
                        <ImageIcon size={16} /> {s.title}
                      </h5>
                      <p className="text-slate-400 text-sm">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="architecture" className="space-y-6 pt-6">
              <div className="bg-slate-900 p-8 rounded-xl border border-slate-800">
                <h4 className="text-white font-bold mb-6 flex items-center gap-2 text-lg">
                  <Cpu size={20} className="text-emerald-400" /> Technical Deep Dive
                </h4>
                <div className="grid gap-6">
                  <div className="p-4 bg-slate-950/50 rounded-lg border border-slate-800">
                    <span className="text-emerald-400 font-bold block mb-1">GIS Layer:</span>
                    <p className="text-slate-400 text-sm">Utilized Mapbox GL JS with custom vector tiles. Managed spatial data in PostGIS, ensuring sub-second query times for 50,000+ road segments. Coordinate transformations handled on-the-fly via Proj4js.</p>
                  </div>
                  <div className="p-4 bg-slate-950/50 rounded-lg border border-slate-800">
                    <span className="text-emerald-400 font-bold block mb-1">IoT Pipeline:</span>
                    <p className="text-slate-400 text-sm">MQTT (EMQX) broker handling 5,000+ messages/sec from simulated and real-world inductive loop sensors. Data normalized via Node-RED before being streamed to the frontend via WebSockets.</p>
                  </div>
                  <div className="p-4 bg-slate-950/50 rounded-lg border border-slate-800">
                    <span className="text-emerald-400 font-bold block mb-1">Synchronization:</span>
                    <p className="text-slate-400 text-sm">Implemented a state management system to interpolate vehicle positions between sensor pings, ensuring smooth 60fps movement on the 3D map.</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="impact" className="pt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Data Points", value: "1.2M / Day" },
                  { label: "End-to-End Latency", value: "< 150ms" },
                  { label: "Accuracy", value: "98.5%" },
                  { label: "Refresh Rate", value: "10Hz" }
                ].map((stat) => (
                  <div key={stat.label} className="p-6 bg-slate-900 rounded-xl border border-slate-800 text-center">
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-2">{stat.label}</p>
                    <p className="text-2xl font-black text-emerald-400">{stat.value}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailModal;