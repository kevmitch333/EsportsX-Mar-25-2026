import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  ExternalLink, 
  Trophy, 
  Cpu, 
  Zap, 
  Globe, 
  ShieldCheck, 
  Rocket, 
  GraduationCap 
} from 'lucide-react';
import { cn } from '../lib/utils';

import { BRANDS } from '../constants';

export default function BrandDetail() {
  const { id } = useParams();
  const brand = BRANDS.find(b => b.id === id);

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
    <div className="min-h-screen bg-brand-black text-white selection:bg-brand-green selection:text-black">
      {/* Scanline Effect */}
      <div className="scanline" />

      {/* Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-12 bg-brand-black/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="font-display text-2xl tracking-wider flex items-center gap-1">
            ESPORTS<span className="text-brand-green">X</span>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/60 hover:text-brand-green transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 overflow-hidden border-b border-white/5">
        <div 
          className="absolute top-0 right-0 w-1/2 h-full blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none opacity-20" 
          style={{ backgroundColor: brand.color }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div 
                className="p-4 rounded-xl bg-white/5 border border-white/10" 
                style={{ color: brand.color }}
              >
                {brand.icon}
              </div>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">
                / {brand.category} · Brand Identity
              </span>
            </div>
            
            <h1 className="font-display text-6xl md:text-8xl leading-[0.85] mb-8 tracking-tight uppercase">
              {brand.name}
            </h1>
            <p className="text-white/80 max-w-2xl text-2xl leading-relaxed mb-12 italic">
              "{brand.tagline}"
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-brand-green mb-4">/ Overview</h3>
                <p className="text-white/50 text-lg leading-relaxed mb-8">
                  {brand.desc}
                </p>
                
                <div className="flex items-center gap-6">
                  <a 
                    href={`https://${brand.domain}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-brand-green text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-brand-green/80 transition-all rounded"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <span className="font-mono text-xs text-white/30">{brand.domain}</span>
                </div>
              </div>

              {brand.stats && (
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(brand.stats).map(([key, val]) => (
                    <div key={key} className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2">{key.replace('_', ' ')}</div>
                      <div className="font-display text-4xl text-brand-green">{val as string}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section (Placeholder for Deck Copy) */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-brand-green max-w-none">
            <h2 className="font-display text-4xl uppercase mb-8 tracking-wide">Strategic Positioning</h2>
            <p className="text-white/60 text-lg leading-relaxed mb-12">
              {brand.desc} As a key pillar of the EsportsX ecosystem, {brand.name} is positioned to redefine how {brand.category === 'compete' ? 'competition is experienced' : brand.category === 'edu' ? 'education is delivered' : brand.category === 'community' ? 'communities are built' : 'infrastructure is managed'} in the digital age.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div className="p-8 border border-white/10 bg-white/[0.02] rounded-xl">
                <h3 className="font-display text-2xl uppercase mb-4 tracking-wide">Market Opportunity</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {brand.tagline}. By leveraging the convergence of AI and competitive gaming, {brand.name} captures a significant share of the evolving digital entertainment market, addressing the needs of a global audience of gamers and creators.
                </p>
              </div>
              <div className="p-8 border border-white/10 bg-white/[0.02] rounded-xl">
                <h3 className="font-display text-2xl uppercase mb-4 tracking-wide">Ecosystem Integration</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  Seamlessly integrated with the broader EsportsX flywheel, {brand.name} benefits from shared infrastructure, data intelligence, and cross-platform network effects that amplify its reach and defensibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 md:px-12 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="font-display text-xl tracking-wider">
            ESPORTS<span className="text-brand-green">X</span>
          </div>
          <div className="text-white/20 font-mono text-[10px] uppercase tracking-widest">
            © 2026 EsportsX Ecosystem. All Rights Reserved.
          </div>
          <Link to="/" className="text-xs font-mono uppercase tracking-widest text-white/60 hover:text-brand-green transition-colors">
            Back to Portfolio
          </Link>
        </div>
      </footer>
    </div>
  );
}
