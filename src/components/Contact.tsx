"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "chsim.shen@gmail.com",
      href: "mailto:chsim.shen@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Singapore",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-slate-950 text-white overflow-hidden relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Connect.
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-md">
              Open to opportunities in Digital Twin, Geospatial Systems, IoT data integration, and real-time 3D platforms.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="group p-6 bg-slate-900/50 rounded-3xl border border-slate-800 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-emerald-500/10 rounded-2xl group-hover:bg-emerald-500/20 transition-colors">
                    <info.icon className="text-emerald-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-1">{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-lg font-bold text-slate-200 hover:text-emerald-400 transition-colors flex items-center gap-2"
                      >
                        {info.value}
                        <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <p className="text-lg font-bold text-slate-200">{info.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;