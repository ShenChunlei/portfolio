"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "CloudTask Manager",
      description: "A collaborative task management tool with real-time updates using WebSockets and React Query.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
      links: { github: "#", external: "#" }
    },
    {
      title: "E-Commerce Platform",
      description: "High-performance online store with server-side rendering and Stripe integration.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
      tags: ["Next.js", "Stripe", "Prisma", "Tailwind"],
      links: { github: "#", external: "#" }
    },
    {
      title: "DevMetrics Dashboard",
      description: "A data visualization dashboard for tracking developer productivity and system health.",
      image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=800&auto=format&fit=crop",
      tags: ["TypeScript", "Recharts", "Express", "Docker"],
      links: { github: "#", external: "#" }
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-slate-600 dark:text-slate-400">A selection of my recent work and open source contributions.</p>
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
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-slate-900">
                <div className="relative overflow-hidden group h-48">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardHeader className="pt-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs border-indigo-100 dark:border-indigo-900/50 text-indigo-600 dark:text-indigo-400">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between gap-4 pt-4 border-t border-slate-50 dark:border-slate-800">
                  <a href={project.links.github} className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
                    <Github size={16} /> Code
                  </a>
                  <a href={project.links.external} className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
                    <ExternalLink size={16} /> Live Demo
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