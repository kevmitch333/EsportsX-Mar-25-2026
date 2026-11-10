import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Landing from './pages/Landing';
import BrandDetail from './pages/BrandDetail';
import Legal from './pages/Legal';
import Model from './pages/Model';
import Partner from './pages/Partner';
import Ecosystem from './pages/Ecosystem';
import About from './pages/About';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/model" element={<Model />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/brand/:id" element={<BrandDetail />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}
