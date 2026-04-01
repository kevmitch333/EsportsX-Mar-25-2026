import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Shield, Scale, FileText } from 'lucide-react';

const HeroGeo = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <pattern id="grid-legal" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.1" />
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#grid-legal)" />
      <motion.path
        d="M 0 50 Q 25 40 50 50 T 100 50"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  </div>
);

export default function Legal() {
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
    const raf = requestAnimationFrame(followMouse);
    return () => cancelAnimationFrame(raf);
  }, [mousePos]);

  return (
    <div className="min-h-screen bg-brand-black text-white selection:bg-brand-green selection:text-black grain-overlay cursor-none overflow-x-hidden">
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

      <HeroGeo />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-12 bg-brand-black/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="font-display text-2xl tracking-wider flex items-center gap-1">
            ESPORTS<span className="text-brand-green">X</span>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-white/60 hover:text-brand-green transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Ecosystem
          </Link>
        </div>
      </nav>

      <main className="pt-40 pb-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-6xl md:text-8xl uppercase tracking-tight mb-16">Legal <span className="text-brand-green">Framework</span></h1>
            
            <div className="space-y-24">
              {/* Privacy Policy */}
              <section id="privacy">
                <div className="flex items-center gap-4 mb-8">
                  <Shield className="w-8 h-8 text-brand-green" />
                  <h2 className="font-display text-3xl uppercase tracking-wider">Privacy Policy</h2>
                </div>
                <div className="prose prose-invert max-w-none text-white/60 leading-relaxed space-y-6 font-light">
                  <p>Last Updated: April 1, 2026</p>
                  <p>
                    EsportsX ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and interact with our ecosystem brands.
                  </p>
                  <h3 className="text-white font-mono text-sm uppercase tracking-widest mt-8">1. Information Collection</h3>
                  <p>
                    We collect information that you provide directly to us, such as when you fill out a contact form, subscribe to a newsletter, or engage with our venture studio. This may include your name, email address, and professional affiliation.
                  </p>
                  <h3 className="text-white font-mono text-sm uppercase tracking-widest mt-8">2. Use of Information</h3>
                  <p>
                    We use the information we collect to provide, maintain, and improve our services, to communicate with you about strategic opportunities, and to protect the security of our ecosystem.
                  </p>
                </div>
              </section>

              {/* Terms of Service */}
              <section id="terms">
                <div className="flex items-center gap-4 mb-8">
                  <Scale className="w-8 h-8 text-brand-green" />
                  <h2 className="font-display text-3xl uppercase tracking-wider">Terms of Service</h2>
                </div>
                <div className="prose prose-invert max-w-none text-white/60 leading-relaxed space-y-6 font-light">
                  <p>
                    By accessing or using the EsportsX website, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                  </p>
                  <h3 className="text-white font-mono text-sm uppercase tracking-widest mt-8">1. Intellectual Property</h3>
                  <p>
                    The content, features, and functionality of this website, including but not limited to the "Architecture of Competitive Gaming" framework and our "Domain IP Fortress," are owned by EsportsX and are protected by international copyright, trademark, and other intellectual property laws.
                  </p>
                  <h3 className="text-white font-mono text-sm uppercase tracking-widest mt-8">2. Strategic Assets</h3>
                  <p>
                    Our portfolio of 250+ premium domains and associated brand identities are strategic assets. Unauthorized use or reproduction of these assets is strictly prohibited.
                  </p>
                </div>
              </section>

              {/* Institutional Compliance */}
              <section id="compliance">
                <div className="flex items-center gap-4 mb-8">
                  <FileText className="w-8 h-8 text-brand-green" />
                  <h2 className="font-display text-3xl uppercase tracking-wider">Institutional Compliance</h2>
                </div>
                <p className="text-white/60 leading-relaxed font-light">
                  EsportsX operates with institutional-grade compliance standards. For specific inquiries regarding our legal framework or regulatory positioning, please contact our strategic legal division at <a href="mailto:legal@esportsx.com" className="text-brand-green hover:underline">legal@esportsx.com</a>.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

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
            Back to Ecosystem
          </Link>
        </div>
      </footer>
    </div>
  );
}
