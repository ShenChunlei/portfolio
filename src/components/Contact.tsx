"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { Mail, MessageSquare, Send } from 'lucide-react';
import { showSuccess } from "../utils/toast";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showSuccess("Message sent!");
  };

  return (
    <section id="contact" className="py-24 px-4 bg-slate-900 text-white overflow-hidden relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <h2 className="text-4xl font-bold mb-6">Let's build something extraordinary.</h2>
          </motion.div>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input placeholder="Name" className="bg-slate-900/50 border-slate-700" />
                <Input type="email" placeholder="Email" className="bg-slate-900/50 border-slate-700" />
                <Textarea placeholder="Message" className="bg-slate-900/50 border-slate-700" />
                <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">Send</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;