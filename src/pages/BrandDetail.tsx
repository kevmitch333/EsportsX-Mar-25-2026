import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  ExternalLink, 
  Linkedin,
  ChevronRight
} from 'lucide-react';
import { cn } from '../lib/utils';
import { BRANDS } from '../constants';

export default function BrandDetail() {
  const { id } = useParams();
  const brand = BRANDS.find(b => b.id === id);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const followMouse = () => {
      setCursorPos(prev => ({
        x: prev.x + (mousePos.x - prev.x) * 0.15,
        y: prev.y + (mousePos.y - prev.y) * 0.15,
      }));
      requestAnimationFrame(followMouse);
    };
    const frame = requestAnimationFrame(followMouse);
    return () => cancelAnimationFrame(frame);
  }, [mousePos]);

  if (!brand) {
    return (
      <div className="min-h-screen bg-brand-black flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-display mb-4 uppercase">Brand Not Found</h1>
        <Link to="/" className="text-brand-green font-mono uppercase tracking-widest hover:underline">
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-black text-white selection:bg-brand-green selection:text-black grain-overlay cursor-none">
      {/* Custom Cursor */}
      <div 
        className="fixed w-2.5 h-2.5 bg-brand-green rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-screen transition-[width,height] duration-150 hidden md:block"
        style={{ left: mousePos.x, top: mousePos.y }}
      />
      <div 
        className="fixed w-9 h-9 border border-brand-green/30 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-[width,height] duration-200 hidden md:block"
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />

      {/* Scanline Effect */}
      <div className="scanline" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-12 bg-brand-black/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="font-display text-2xl tracking-wider flex items-center gap-1">
            ESPORTS<span className="text-brand-green">X</span>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-white/60 hover:text-brand-green transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-20 px-6 md:px-12 overflow-hidden border-b border-white/5">
        <div 
          className="absolute top-0 right-0 w-1/2 h-full blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none opacity-10" 
          style={{ backgroundColor: brand.color }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div 
                className="p-5 rounded-xl bg-white/5 border border-white/10 text-3xl" 
                style={{ color: brand.color }}
              >
                {brand.icon}
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 block mb-1">
                  / {brand.category} · Ecosystem Property
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-green">
                  {brand.domain}
                </span>
              </div>
            </div>
            
            <h1 className="font-display text-6xl md:text-9xl leading-[0.85] mb-10 tracking-tight uppercase group cursor-default">
              <span className="relative inline-block">
                {brand.name}
                <span className="absolute inset-0 text-brand-green opacity-0 group-hover:opacity-70 group-hover:animate-glitch-1 pointer-events-none">{brand.name}</span>
              </span>
            </h1>
            
            <p className="text-white/80 max-w-3xl text-2xl md:text-3xl leading-relaxed mb-16 italic font-light">
              "{brand.tagline}"
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: brand.color }} />
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">Strategic Overview</h3>
                </div>
                <p className="text-white/50 text-lg leading-relaxed mb-10">
                  {brand.desc}
                </p>
                
                <div className="flex flex-wrap items-center gap-6">
                  <a 
                    href={`https://${brand.domain}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-8 py-4 font-mono font-bold text-[10px] uppercase tracking-widest transition-all rounded-full"
                    style={{ backgroundColor: brand.color, color: '#000' }}
                  >
                    Launch Platform
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-px bg-white/20" />
                    <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest">{brand.domain}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="font-mono text-[11px] uppercase tracking-widest text-white/40 mb-6">Key Metrics & Data</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {brand.backInfo?.rows.map((row, idx) => (
                    <div key={idx} className="p-6 bg-white/[0.02] border border-white/10 rounded-xl group hover:border-white/20 transition-colors">
                      <div className="text-[9px] font-mono uppercase tracking-widest text-white/30 mb-3">{row.label}</div>
                      <div className="font-display text-2xl tracking-wide uppercase group-hover:text-brand-green transition-colors">{row.val}</div>
                    </div>
                  ))}
                  {brand.stats && Object.entries(brand.stats).map(([key, val]) => (
                    <div key={key} className="p-6 bg-white/[0.02] border border-white/10 rounded-xl group hover:border-white/20 transition-colors">
                      <div className="text-[9px] font-mono uppercase tracking-widest text-white/30 mb-3">{key.replace('_', ' ')}</div>
                      <div className="font-display text-2xl tracking-wide uppercase group-hover:text-brand-green transition-colors">{val as string}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Analysis Section */}
      <section className="py-24 px-6 md:px-12 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 pb-8 border-b border-white/5">
            <h2 className="font-display text-4xl uppercase mb-4 tracking-wide">Ecosystem Integration</h2>
            <p className="text-white/40 font-mono text-xs uppercase tracking-widest">Strategic Positioning & Market Impact</p>
          </div>

          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-start">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-green pt-2">/ The Opportunity</div>
              <p className="text-white/60 text-xl leading-relaxed font-light">
                {brand.desc} As a key pillar of the EsportsX ecosystem, {brand.name} is positioned to redefine how {brand.category === 'compete' ? 'competition is experienced' : brand.category === 'edu' ? 'education is delivered' : brand.category === 'community' ? 'communities are built' : 'infrastructure is managed'} in the digital age.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-10 border border-white/5 bg-brand-smoke/50 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-green/30" />
                <h3 className="font-display text-2xl uppercase mb-5 tracking-wide">Market Dynamics</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {brand.tagline}. By leveraging the convergence of AI and competitive gaming, {brand.name} captures a significant share of the evolving digital entertainment market, addressing the needs of a global audience of gamers and creators.
                </p>
              </div>
              <div className="p-10 border border-white/5 bg-brand-smoke/50 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-green/30" />
                <h3 className="font-display text-2xl uppercase mb-5 tracking-wide">Network Effects</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  Seamlessly integrated with the broader EsportsX flywheel, {brand.name} benefits from shared infrastructure, data intelligence, and cross-platform network effects that amplify its reach and defensibility.
                </p>
              </div>
            </div>

            <div className="pt-12 text-center">
              <Link 
                to="/"
                className="inline-flex items-center gap-4 text-white/40 hover:text-brand-green transition-colors font-mono text-xs uppercase tracking-[0.3em]"
              >
                Explore More Ecosystem Properties
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 md:px-12 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <Link to="/" className="font-display text-2xl tracking-wider flex items-center gap-1">
            ESPORTS<span className="text-brand-green">X</span>
          </Link>
          <div className="text-white/20 font-mono text-[10px] uppercase tracking-widest">
            © 2026 EsportsX Ecosystem. All Rights Reserved.
          </div>
          <Link to="/" className="text-[10px] font-mono uppercase tracking-widest text-white/60 hover:text-brand-green transition-colors">
            Back to Portfolio
          </Link>
        </div>
      </footer>
    </div>
  );
}
