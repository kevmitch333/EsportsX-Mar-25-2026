import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import BrandDetail from './pages/BrandDetail';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/brand/:id" element={<BrandDetail />} />
      </Routes>
    </Router>
  );
}
