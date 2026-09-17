import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Landing from './pages/Landing';
import BrandDetail from './pages/BrandDetail';
import Explore from './pages/Explore';
import PlatformDetail from './pages/PlatformDetail';
import Legal from './pages/Legal';

function ConversionDock() {
  const location = useLocation();
  if (location.pathname === '/explore') return null;

  return (
    <Link
      to="/explore"
      className="fixed bottom-5 right-5 z-[70] hidden items-center gap-3 rounded-full border border-brand-green/30 bg-brand-black/90 px-5 py-3 font-mono text-[8px] uppercase tracking-[.18em] text-brand-green shadow-[0_10px_40px_rgba(0,0,0,.45)] backdrop-blur-xl transition hover:border-brand-green/60 hover:bg-brand-green hover:text-black md:flex"
    >
      Find your entry point <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/platform/:id" element={<PlatformDetail />} />
        <Route path="/brand/:id" element={<BrandDetail />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
      <ConversionDock />
    </Router>
  );
}
