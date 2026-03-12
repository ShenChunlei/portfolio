"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare, Send } from 'lucide-react';
import { showSuccess } from "@/utils/toast";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showSuccess("Message sent! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-24 px-4 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-600" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Let's build something <span className="text-indigo-400">extraordinary</span> together.</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Have a project in mind or just want to say hi? My inbox is always open.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-500/10 rounded-xl">
                  <Mail className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider">Email Me</p>
                  <p className="text-lg font-medium">hello@engineer.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-500/10 rounded-xl">
                  <MessageSquare className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider">Socials</p>
                  <p className="text-lg font-medium">LinkedIn / Twitter</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Name</label>
                      <Input placeholder="John Doe" className="bg-slate-900/50 border-slate-700 focus:ring-indigo-500" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Email</label>
                      <Input type="email" placeholder="john@example.com" className="bg-slate-900/50 border-slate-700 focus:ring-indigo-500" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Subject</label>
                    <Input placeholder="How can I help you?" className="bg-slate-900/50 border-slate-700 focus:ring-indigo-500" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Message</label>
                    <Textarea placeholder="Your message here..." className="min-h-[120px] bg-slate-900/50 border-slate-700 focus:ring-indigo-500" />
                  </div>
                  <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white gap-2 h-12 text-lg rounded-xl">
                    Send Message <Send size={18} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <div className="mt-24 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Software Engineer Portfolio. Built with React & Dyad.</p>
      </div>
    </section>
  );
};

export default Contact;