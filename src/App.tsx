import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import BrandDetail from './pages/BrandDetail';
import Legal from './pages/Legal';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/brand/:id" element={<BrandDetail />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
    </Router>
  );
}
