"use client";

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import { Toaster } from "sonner";

function App() {
  return (
    <Router>
      <div className="relative">
        <Toaster position="top-center" expand={false} richColors />
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;