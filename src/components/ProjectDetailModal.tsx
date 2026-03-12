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
import { Map, Cpu, Zap, BarChart3, Globe, Shield } from 'lucide-react';

interface ProjectDetailProps {
  isOpen: boolean;
  onClose: () => void;
  project: any;
}

const ProjectDetailModal = ({ isOpen, onClose, project }: ProjectDetailProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-950 border-slate-800 text-white">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-emerald-500/20 rounded-lg">
              <Globe className="text-emerald-400" size={24} />
            </div>
            <DialogTitle className="text-3xl font-bold">{project.title}</DialogTitle>
          </div>
          <DialogDescription className="text-slate-400 text-lg">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="overview" className="mt-6">
          <TabsList className="bg-slate-900 border-slate-800">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="architecture">GIS & IoT Architecture</TabsTrigger>
            <TabsTrigger value="impact">Impact & Stats</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                <h4 className="text-emerald-400 font-bold uppercase tracking-wider text-xs mb-3">Key Features</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-center gap-2"><Zap size={14} className="text-cyan-400" /> Real-time vehicle trajectory mapping</li>
                  <li className="flex items-center gap-2"><Map size={14} className="text-cyan-400" /> Multi-layer GIS integration (OSM + Custom)</li>
                  <li className="flex items-center gap-2"><BarChart3 size={14} className="text-cyan-400" /> Congestion heatmaps & flow analytics</li>
                  <li className="flex items-center gap-2"><Shield size={14} className="text-cyan-400" /> Anomaly detection (accidents/breakdowns)</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="architecture" className="space-y-6 pt-4">
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <Cpu size={18} className="text-emerald-400" /> Technical Deep Dive
              </h4>
              <div className="space-y-4 text-slate-400 text-sm">
                <div>
                  <span className="text-emerald-400 font-semibold">GIS Layer:</span>
                  <p>Utilized Mapbox GL JS with custom vector tiles. Managed spatial data in PostGIS, ensuring sub-second query times for 50,000+ road segments. Coordinate transformations handled on-the-fly via Proj4js.</p>
                </div>
                <div>
                  <span className="text-emerald-400 font-semibold">IoT Pipeline:</span>
                  <p>MQTT (EMQX) broker handling 5,000+ messages/sec from simulated and real-world inductive loop sensors. Data normalized via Node-RED before being streamed to the frontend via WebSockets.</p>
                </div>
                <div>
                  <span className="text-emerald-400 font-semibold">Synchronization:</span>
                  <p>Implemented a state management system to interpolate vehicle positions between sensor pings, ensuring smooth 60fps movement on the 3D map.</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="impact" className="pt-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Data Points", value: "1.2M / Day" },
                { label: "End-to-End Latency", value: "< 150ms" },
                { label: "Accuracy", value: "98.5%" },
                { label: "Refresh Rate", value: "10Hz" }
              ].map((stat) => (
                <div key={stat.label} className="p-4 bg-slate-900 rounded-lg border border-slate-800 text-center">
                  <p className="text-xs text-slate-500 uppercase mb-1">{stat.label}</p>
                  <p className="text-xl font-bold text-emerald-400">{stat.value}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailModal;