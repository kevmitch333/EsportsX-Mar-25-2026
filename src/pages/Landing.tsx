import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight,
  ExternalLink,
  Menu,
  X,
  Linkedin,
  Cpu,
  ShieldCheck,
  Zap,
  Check,
  Mail,
  ChevronRight
} from 'lucide-react';
import { cn } from '../lib/utils';
import { BRANDS, CATEGORIES, PARTNERS } from '../constants';

const HeroGeo = () => (
  <svg className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-[55vw] max-w-[800px] opacity-[0.05] pointer-events-none z-0" viewBox="0 0 800 700" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="400" cy="350" r="320" stroke="#00ff88" strokeWidth="0.5"/>
    <circle cx="400" cy="350" r="220" stroke="#00ff88" strokeWidth="0.5"/>
    <circle cx="400" cy="350" r="140" stroke="#00ff88" strokeWidth="0.5"/>
    <line x1="80" y1="350" x2="720" y2="350" stroke="#00ff88" strokeWidth="0.5"/>
    <line x1="400" y1="30" x2="400" y2="670" stroke="#00ff88" strokeWidth="0.5"/>
    <line x1="173" y1="123" x2="627" y2="577" stroke="#00ff88" strokeWidth="0.3"/>
    <line x1="627" y1="123" x2="173" y2="577" stroke="#00ff88" strokeWidth="0.3"/>
    <polygon points="400,50 700,200 700,500 400,650 100,500 100,200" stroke="#00ff88" strokeWidth="0.4" fill="none"/>
    <polygon points="400,150 600,250 600,450 400,550 200,450 200,250" stroke="#00ff88" strokeWidth="0.3" fill="none"/>
    <rect x="340" y="290" width="120" height="120" stroke="#00ff88" strokeWidth="0.5" fill="none" transform="rotate(45 400 350)"/>
  </svg>
);

const Counter = ({ target, prefix = "", suffix = "", label }: { target: number, prefix?: string, suffix?: string, label: string }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const end = target;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [hasStarted, target]);

  return (
    <motion.div 
      onViewportEnter={() => setHasStarted(true)}
      className="p-12 bg-white/[0.02] border border-white/5 text-center relative group overflow-hidden"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-green transition-all duration-1000 group-hover:w-3/4" style={{ width: hasStarted ? '60%' : '0%' }} />
      <div className="font-mono text-4xl md:text-5xl font-medium text-brand-off-white mb-4 tracking-tighter">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-xs font-mono uppercase tracking-widest text-brand-light max-w-[160px] mx-auto leading-relaxed">
        {label}
      </div>
    </motion.div>
  );
};

export default function Landing() {
  const [scrolled, setScrolled] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>(['all']);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const followMouse = () => {
      setCursorPos(prev => ({
        x: prev.x + (mousePos.x - prev.x) * 0.12,
        y: prev.y + (mousePos.y - prev.y) * 0.12
      }));
      requestAnimationFrame(followMouse);
    };
    const raf = requestAnimationFrame(followMouse);
    return () => cancelAnimationFrame(raf);
  }, [mousePos]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navHeight = scrolled ? 80 : 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const toggleFilter = (id: string) => {
    if (id === 'all') {
      setActiveFilters(['all']);
      return;
    }

    setActiveFilters(prev => {
      const isAllSelected = prev.includes('all');
      const isCurrentSelected = prev.includes(id);

      let next: string[];
      if (isAllSelected) {
        next = [id];
      } else if (isCurrentSelected) {
        next = prev.filter(f => f !== id);
        if (next.length === 0) next = ['all'];
      } else {
        next = [...prev, id];
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-brand-black selection:bg-brand-green selection:text-black grain-overlay">
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
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12",
        scrolled ? "py-4 bg-brand-black/90 backdrop-blur-xl border-b border-white/10" : "py-8 bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="font-display text-2xl tracking-wider flex items-center gap-1">
            ESPORTS<span className="text-brand-green">X</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {['Portfolio', 'Pillars', 'Leadership', 'Venture', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                onClick={(e) => scrollToSection(e, item.toLowerCase().replace(' ', '-'))}
                className="text-xs font-mono uppercase tracking-widest text-white/60 hover:text-brand-green transition-colors"
              >
                {item}
              </a>
            ))}
            <button 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="bg-brand-green text-black px-5 py-2 text-xs font-mono font-bold uppercase tracking-widest hover:bg-brand-green/80 transition-all rounded-full"
            >
              Connect
            </button>
          </div>

          <button 
            className="md:hidden text-white z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-brand-black z-40 flex flex-col items-center justify-center gap-8 md:hidden"
            >
              {['Portfolio', 'Pillars', 'Leadership', 'Venture', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={(e) => scrollToSection(e, item.toLowerCase().replace(' ', '-'))}
                  className="text-2xl font-display uppercase tracking-widest text-white hover:text-brand-green transition-colors"
                >
                  {item}
                </a>
              ))}
              <button 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="mt-4 bg-brand-green text-black px-8 py-3 text-sm font-mono font-bold uppercase tracking-widest hover:bg-brand-green/80 transition-all rounded-full"
              >
                Connect
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 overflow-hidden">
        <HeroGeo />
        
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-mono text-[10px] text-brand-green uppercase tracking-[0.3em] mb-8 block">
              / National Brand Group · Flagship Division
            </span>
            <h1 className="font-display text-[clamp(4.5rem,10vw,10rem)] leading-[0.9] uppercase tracking-tight mb-10 glitch-wrap">
              <span className="relative inline-block">
                The Architecture
                <span className="absolute inset-0 text-brand-green opacity-0 group-hover:opacity-70 group-hover:animate-glitch-1 pointer-events-none">The Architecture</span>
              </span>
              <br />
              <span className="relative inline-block">
                of Competitive
                <span className="absolute inset-0 text-brand-green opacity-0 group-hover:opacity-70 group-hover:animate-glitch-1 pointer-events-none">of Competitive</span>
              </span>
              <br />
              <span className="text-brand-green relative inline-block">
                Gaming.
                <span className="absolute inset-0 text-white opacity-0 group-hover:opacity-70 group-hover:animate-glitch-1 pointer-events-none">Gaming.</span>
              </span>
            </h1>
            
            <p className="text-brand-light text-xl md:text-2xl max-w-2xl leading-relaxed mb-12 font-light">
              EsportsX is the strategic holding platform behind the next generation of esports, gaming, and digital competition brands.
            </p>

            <div className="flex flex-wrap items-center gap-8">
              <a 
                href="#portfolio" 
                onClick={(e) => scrollToSection(e, 'portfolio')}
                className="bg-brand-green text-brand-black px-10 py-4 font-mono font-bold uppercase tracking-widest hover:bg-brand-green/80 transition-all rounded-full"
              >
                Explore Portfolio
              </a>
              <a 
                href="#leadership" 
                onClick={(e) => scrollToSection(e, 'leadership')}
                className="flex items-center gap-3 text-brand-off-white hover:text-brand-green transition-colors font-mono text-xs uppercase tracking-widest group"
              >
                Meet the Founder
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Ticker */}
        <div className="absolute bottom-0 left-0 right-0 py-6 border-t border-white/5 bg-brand-black/50 backdrop-blur-sm overflow-hidden">
          <div className="flex whitespace-nowrap animate-ticker">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 px-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-brand-light">1,000+ Premium Domains</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-brand-light">5 Active Divisions</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-brand-light">10+ Years in Collegiate Esports</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-brand-light">Ivy League to NCAA</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Pillars Section */}
      <section id="pillars" className="py-24 px-6 md:px-12 bg-brand-smoke relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,255,136,0.03)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-8xl uppercase tracking-tight mb-20 text-center leading-[0.9]"
          >
            Where Strategy<br />Meets Competition.
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                num: '01',
                title: 'Brand Development',
                desc: 'EsportsX identifies, acquires, and develops premium domain properties into fully realized brands across the gaming and esports ecosystem. Every brand in our portfolio is built with institutional-grade positioning from day one.'
              },
              {
                num: '02',
                title: 'Strategic Partnerships',
                desc: 'We connect brands, universities, and technology companies with the right properties, audiences, and activation platforms inside competitive gaming. Our relationships span the full spectrum from collegiate athletics to major entertainment.'
              },
              {
                num: '03',
                title: 'Ecosystem Building',
                desc: "EsportsX doesn't just occupy the gaming space — it architects it. Our divisions cover cognitive competition, AI gaming, entertainment, and creator ecosystems, giving partners a single entry point into a unified platform."
              }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="pt-8 border-t border-brand-mid"
              >
                <div className="font-mono text-xs text-brand-green uppercase tracking-widest mb-6">{pillar.num}</div>
                <h3 className="font-display text-2xl uppercase mb-4 tracking-wide">{pillar.title}</h3>
                <p className="text-brand-light text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Summary / Flywheel */}
      <section className="py-24 px-6 md:px-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI-Native Platform',
                desc: 'The world\'s first AI-enhanced competition format (AGONiQ) plus deep AI integration across all portfolio operations — creating moats competitors cannot replicate.',
                icon: <Cpu className="w-8 h-8 text-brand-green" />
              },
              {
                title: 'Domain IP Fortress',
                desc: '250+ premium esports domains valued at $75–100M, including every Power 5 university and Ivy League. A defensible, appreciating strategic asset.',
                icon: <ShieldCheck className="w-8 h-8 text-brand-green" />
              },
              {
                title: 'Ecosystem Flywheel',
                desc: '22+ portfolio companies across competition, education, media, and infrastructure create compounding network effects where every division amplifies the whole.',
                icon: <Zap className="w-8 h-8 text-brand-green" />
              }
            ].map((item, i) => (
              <div key={i} className="p-8 border border-white/10 bg-white/[0.02] rounded-xl group hover:border-brand-green/30 transition-colors">
                <div className="mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="font-display text-2xl uppercase mb-4 tracking-wide">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Network / Partners */}
      <section className="py-12 border-b border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">Strategic Network /</span>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {PARTNERS.map((partner) => (
                <img 
                  key={partner.name} 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-6 md:h-8 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market Convergence Section */}
      <section className="py-24 px-6 md:px-12 bg-brand-green/[0.01] border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <span className="font-mono text-xs text-brand-green uppercase tracking-widest mb-4 block">/ Market Convergence</span>
            <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tight">The $1 Trillion Intersection</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { val: '$200B+', label: 'Global Gaming', sub: 'Total Addressable Market' },
              { val: '$4.3B', label: 'Esports by 2028', sub: 'Projected Industry Size' },
              { val: '$605B', label: 'EdTech Market', sub: 'Digital Learning Sector' },
              { val: '$75B', label: 'AI Education', sub: 'Emerging Tech Vertical' }
            ].map((market, i) => (
              <div key={i} className="p-8 border border-white/5 bg-white/[0.02] rounded-xl text-center group hover:border-brand-green/30 transition-colors">
                <div className="font-display text-4xl text-brand-green mb-2 group-hover:scale-110 transition-transform">{market.val}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-white/60 mb-2">{market.label}</div>
                <div className="text-[9px] font-mono uppercase tracking-widest text-white/20">{market.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 md:px-12 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          {/* Filter Bar */}
          <div className="sticky top-24 z-40 mb-12 bg-brand-smoke/90 backdrop-blur-md border-b border-white/10 p-4 flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 mr-4">Filter:</span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => toggleFilter(cat.id)}
                className={cn(
                  "px-4 py-2 text-[10px] font-mono uppercase tracking-widest transition-all relative overflow-hidden group",
                  activeFilters.includes(cat.id) 
                    ? "text-white" 
                    : "text-white/40 hover:text-white"
                )}
              >
                {cat.label}
                <span 
                  className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 transition-transform duration-300",
                    activeFilters.includes(cat.id) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )}
                  style={{ backgroundColor: cat.color }}
                />
              </button>
            ))}
          </div>

          {/* Spotlight Feature */}
          {(activeFilters.includes('all') || activeFilters.includes('history')) && (
            <div className="mb-24">
              <div className="flex items-center gap-4 mb-10 pb-5 border-b border-white/5">
                <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                <h2 className="font-display text-3xl uppercase tracking-wider group cursor-default">
                  <span className="relative inline-block">
                    Ecosystem Spotlights
                    <span className="absolute inset-0 text-brand-green opacity-0 group-hover:opacity-70 group-hover:animate-glitch-1 pointer-events-none">Ecosystem Spotlights</span>
                  </span>
                </h2>
                <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-white/20">Featured Strategic Assets</span>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {BRANDS.filter(b => b.featured && b.category === 'history').map((brand, idx) => (
                  <motion.div
                    key={brand.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="group relative h-[450px] overflow-hidden rounded-2xl border border-white/10 bg-brand-smoke hover:border-brand-green/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,136,0.1)]"
                  >
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                      <img 
                        src={brand.images?.[0] || 'https://picsum.photos/seed/spotlight/1200/800'} 
                        alt={brand.name}
                        className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white/5 border border-white/10 rounded-lg text-brand-green">
                          {brand.icon}
                        </div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">/ Featured Asset</span>
                      </div>
                      
                      <h3 className="font-display text-4xl mb-3 uppercase tracking-tight leading-none group-hover:text-brand-green transition-colors">
                        {brand.name}
                      </h3>
                      
                      <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-3 font-light italic">
                        "{brand.tagline}"
                      </p>

                      <div className="space-y-3 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                        {brand.backInfo?.rows.slice(0, 2).map((row, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <Check className="w-3 h-3 text-brand-green" />
                            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">{row.label}: <span className="text-white/80">{row.val}</span></span>
                          </div>
                        ))}
                      </div>

                      <Link 
                        to={`/brand/${brand.id}`}
                        className="inline-flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.3em] text-brand-green hover:text-white transition-colors group/btn"
                      >
                        Explore Strategic Impact
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none">
                      <div className="absolute top-0 right-0 w-[141%] h-2 bg-brand-green/20 rotate-45 translate-x-[30%] translate-y-[-50%]" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Category Blocks */}
          <div className="space-y-24">
            {CATEGORIES.filter(c => c.id !== 'all' && c.id !== 'venture').map((category) => {
              const categoryBrands = BRANDS.filter(b => b.category === category.id);
              if (categoryBrands.length === 0) return null;
              if (!activeFilters.includes('all') && !activeFilters.includes(category.id)) return null;

              return (
                <motion.div 
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="category-block"
                >
                  <div className="flex items-center gap-4 mb-10 pb-5 border-b border-white/5">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: category.color }} />
                    <h2 className="font-display text-3xl uppercase tracking-wider group cursor-default">
                      <span className="relative inline-block">
                        {category.label}
                        <span className="absolute inset-0 text-brand-green opacity-0 group-hover:opacity-70 group-hover:animate-glitch-1 pointer-events-none">{category.label}</span>
                      </span>
                    </h2>
                    <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-white/20">
                      {categoryBrands.length.toString().padStart(2, '0')} Brands
                    </span>
                  </div>

                  {category.id === 'regional' && (
                    <div className="mb-10 flex flex-wrap gap-2">
                      {['NY', 'CA', 'TX', 'FL', 'IL', 'PA', 'OH', 'GA', 'NC', 'MI'].map((state) => (
                        <span key={state} className="px-3 py-1.5 bg-brand-regional/5 border border-brand-regional/20 text-[9px] font-mono uppercase tracking-widest text-brand-regional">
                          {state}
                        </span>
                      ))}
                      <span className="px-3 py-1.5 border border-white/10 text-[9px] font-mono uppercase tracking-widest text-white/20 italic">
                        + 40 more states active
                      </span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
                    {categoryBrands.map((brand) => (
                      <div key={brand.id} className="card-flipper group perspective-1200 min-h-[320px]">
                        <div className="card-inner relative w-full h-full preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                          {/* Front Face */}
                          <div className="card-front absolute inset-0 backface-hidden bg-brand-smoke p-9 flex flex-col border-t-2" style={{ borderTopColor: brand.color }}>
                            <div className="flex justify-between items-start mb-5">
                              <div className="px-2.5 py-1 border border-white/10 text-[10px] font-mono uppercase tracking-widest" style={{ color: brand.color, borderColor: `${brand.color}4D` }}>
                                {brand.category}
                              </div>
                              <div className="text-xl opacity-60">{brand.icon}</div>
                            </div>
                            <h3 className="font-display text-3xl mb-2 tracking-wide uppercase group-hover:animate-glitch-skew">
                              {brand.name}
                            </h3>
                            <p className="text-white/50 text-xs italic mb-4">{brand.tagline}</p>
                            <p className="text-white/40 text-sm leading-relaxed flex-1 line-clamp-4">
                              {brand.desc}
                            </p>
                            <div className="mt-5 pt-4 border-t border-white/10 flex justify-between items-center">
                              <span className="font-mono text-[10px] text-white/20">{brand.domain}</span>
                              <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest">Hover to learn more →</span>
                            </div>
                          </div>

                          {/* Back Face */}
                          <div className="card-back absolute inset-0 backface-hidden bg-brand-black p-9 flex flex-col rotate-y-180 border-t-2" style={{ borderTopColor: brand.color }}>
                            <div className="absolute top-4 right-4 font-mono text-[9px] text-white/20 uppercase tracking-widest">← Flip back</div>
                            <div className="mb-6">
                              <h3 className="font-display text-2xl mb-1 tracking-wide uppercase">{brand.name}</h3>
                              <p className="font-mono text-[10px] uppercase tracking-widest" style={{ color: brand.color }}>{brand.backInfo?.sub || brand.tagline}</p>
                            </div>
                            <div className="flex-1 space-y-0">
                              {brand.backInfo?.rows.map((row, idx) => (
                                <div key={idx} className="py-2.5 border-b border-white/5 grid grid-cols-[auto_1fr] gap-3 items-start first:border-t">
                                  <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest pt-0.5">{row.label}</span>
                                  <span className="text-xs text-white/60 leading-relaxed">{row.val}</span>
                                </div>
                              ))}
                            </div>
                            <Link 
                              to={`/brand/${brand.id}`}
                              className="mt-5 py-3 border text-center font-mono text-[10px] uppercase tracking-widest transition-all hover:bg-white hover:text-black"
                              style={{ color: brand.color, borderColor: brand.color }}
                              onMouseEnter={(e) => {
                                (e.target as HTMLElement).style.backgroundColor = brand.color;
                                (e.target as HTMLElement).style.color = '#000';
                              }}
                              onMouseLeave={(e) => {
                                (e.target as HTMLElement).style.backgroundColor = 'transparent';
                                (e.target as HTMLElement).style.color = brand.color;
                              }}
                            >
                              Learn More ↗
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Domain IP Fortress Section (Moved) */}
      <section className="py-24 px-6 md:px-12 bg-white/[0.01] border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono text-xs text-brand-green uppercase tracking-widest mb-6 block">/ Strategic Assets</span>
              <h2 className="font-display text-6xl md:text-7xl uppercase tracking-tight mb-8">Domain IP Fortress</h2>
              <p className="text-white/50 text-lg leading-relaxed mb-8">
                EsportsX controls the industry's most valuable digital real estate portfolio. 250+ premium domains covering every Power 5 university, the Ivy League, and key international markets.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                  <div className="font-display text-3xl text-brand-green mb-1">$75M+</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-white/40">Standalone IP Value</div>
                </div>
                <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                  <div className="font-display text-3xl text-brand-green mb-1">100%</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-white/40">Power 5 Coverage</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-brand-green/5 border border-brand-green/20 rounded-full flex items-center justify-center p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.1)_0%,transparent_70%)]" />
                <div className="grid grid-cols-3 gap-4 opacity-20 font-mono text-[8px] uppercase tracking-tighter text-center">
                  {['harvardesports.com', 'yaleesports.com', 'stanfordesports.com', 'uclaesports.com', 'mitesports.com', 'oxfordesports.com', 'indiaesports.com', 'ukesports.com', 'usolympicesports.com'].map((d, i) => (
                    <div key={i} className="p-2 border border-white/20 rounded">{d}</div>
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <ShieldCheck className="w-32 h-32 text-brand-green drop-shadow-[0_0_20px_rgba(0,255,136,0.3)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venture Studio Section */}
      <section id="venture" className="py-24 px-6 md:px-12 bg-gradient-to-b from-transparent to-brand-green/[0.02] scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-10 pb-5 border-b border-white/5">
              <div className="w-2 h-2 rounded-full bg-brand-venture" />
              <h2 className="font-display text-3xl uppercase tracking-wider group cursor-default">
                <span className="relative inline-block">
                  Venture Studio
                  <span className="absolute inset-0 text-brand-green opacity-0 group-hover:opacity-70 group-hover:animate-glitch-1 pointer-events-none">Venture Studio</span>
                </span>
              </h2>
              <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-white/20">Innovation Engine</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="card-featured bg-gradient-to-br from-brand-smoke to-[#161616] p-12 relative overflow-hidden border-t-2 border-brand-venture">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start relative z-10">
                <div>
                  <div className="flex justify-between items-start mb-5">
                    <div className="px-2.5 py-1 border border-brand-venture/30 text-[10px] font-mono uppercase tracking-widest text-brand-venture">
                      Innovation
                    </div>
                    <div className="text-2xl opacity-65">🚀</div>
                  </div>
                  <h3 className="font-display text-5xl mb-2 tracking-wide uppercase text-brand-venture glitch-wrap">
                    <span className="glitch" data-text="Venture Studio">Venture Studio</span>
                  </h3>
                  <p className="text-white/50 text-sm italic mb-5">The AI-driven engine behind the next generation of gaming innovation</p>
                  <p className="text-white/40 text-base leading-relaxed mb-8">
                    Identifies, incubates, and accelerates the next generation of gaming innovation — targeting AI-powered gaming tools, esports infrastructure, immersive experiences, and creator economy platforms. Operating from the foundation of 650+ premium domains and strategic capital, the Studio brings new ventures from concept to market with unmatched asset backing.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['AI Gaming Tools', 'Esports Infrastructure', 'Immersive Experiences', 'Creator Economy', '650+ Domain Portfolio'].map((tag, i) => (
                      <span key={i} className="px-2.5 py-1 bg-brand-venture/5 border border-brand-venture/15 text-[9px] font-mono uppercase tracking-widest text-brand-venture">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-widest text-white/40 mb-4">Focus Areas</div>
                  <div className="space-y-0.5">
                    {[
                      { title: 'AI-Powered Gaming', desc: 'Next-gen tools where AI enhances human competition' },
                      { title: 'Esports Infrastructure', desc: 'B2B tools for tournament operators and institutions' },
                      { title: 'Immersive Experiences', desc: 'XR and spatial computing for next-gen viewing' },
                      { title: 'Creator Economy', desc: 'Monetization infrastructure for gaming content creators' }
                    ].map((item, i) => (
                      <div key={i} className="p-4 border-l-2 border-brand-venture bg-brand-venture/[0.03] hover:bg-brand-venture/[0.06] transition-colors">
                        <h4 className="font-display text-lg tracking-wide mb-1 uppercase">{item.title}</h4>
                        <p className="text-[11px] text-white/40 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
                <span className="font-mono text-[10px] text-white/20">esportsx.ventures</span>
                <a href="mailto:kevin@collegeesportsx.com" className="font-mono text-[10px] text-white/40 uppercase tracking-widest hover:text-brand-green transition-colors">↗ Explore</a>
              </div>
            </div>
          </div>

          <div className="mt-24 text-center">
            <h2 className="font-display text-4xl md:text-5xl uppercase mb-8">Ready to Build the Future?</h2>
            <a 
              href="mailto:kevin@collegeesportsx.com"
              className="inline-flex items-center gap-4 bg-brand-green text-black px-10 py-4 font-mono font-bold uppercase tracking-widest hover:bg-brand-green/80 transition-all rounded-full"
            >
              Connect with Venture Studio
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-24 px-6 md:px-12 bg-white/[0.01] border-b border-white/5 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-10 pb-5 border-b border-white/5">
              <div className="w-2 h-2 rounded-full bg-brand-green" />
              <h2 className="font-display text-3xl uppercase tracking-wider group cursor-default">
                <span className="relative inline-block">
                  Leadership
                  <span className="absolute inset-0 text-brand-green opacity-0 group-hover:opacity-70 group-hover:animate-glitch-1 pointer-events-none">Leadership</span>
                </span>
              </h2>
              <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-white/20">Executive Board</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 p-10 border border-brand-green/20 bg-brand-green/[0.02] rounded-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/4" />
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-10">
                <div className="w-24 h-24 bg-brand-green/10 border border-brand-green/20 rounded-full flex items-center justify-center text-3xl font-display">
                  KM
                </div>
                <div>
                  <h3 className="font-display text-5xl mb-2 tracking-tight uppercase glitch-wrap">
                    <span className="glitch" data-text="Kevin Mitchell">Kevin Mitchell</span>
                  </h3>
                  <p className="text-brand-green font-mono text-xs uppercase tracking-[0.2em]">Founder & Chief Executive Officer</p>
                </div>
                <a 
                  href="https://linkedin.com/in/kevinmitchell" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="md:ml-auto flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded font-mono text-[10px] uppercase tracking-widest text-white/60 hover:text-brand-green hover:border-brand-green/50 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn Profile
                </a>
              </div>
              
              <p className="text-brand-light text-xl leading-relaxed mb-10 font-light italic">
                "Three decades spanning Grammy-nominated music production, pioneering collegiate esports, and AI integration strategy. We are building the institutional future of gaming."
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                {[
                  'Grammy-Nominated Executive',
                  '12 Multi-Platinum Certifications',
                  'College Esports Expo Founder',
                  'AI Integration Pioneer',
                  'HP · Intel · Red Bull Partner'
                ].map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded text-[10px] font-mono uppercase tracking-widest text-white/40">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Partner Bar */}
              <div className="pt-10 border-t border-white/5">
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/20 mb-6">Strategic Partners & Clients</div>
                <div className="flex flex-wrap items-center gap-x-10 gap-y-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                  {['HP', 'Intel', 'Red Bull', 'NCAA', 'Ivy League', 'NACE'].map((partner) => (
                    <span key={partner} className="font-display text-xl tracking-widest text-white">{partner}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="font-mono text-[11px] uppercase tracking-widest text-white/40 mb-6">Advisory Board</div>
              {[
                { title: 'Education Technology', desc: 'University leadership guiding institutional adoption and program development.' },
                { title: 'Esports Industry', desc: 'Professional team and tournament operations expertise with media rights experience.' },
                { title: 'Artificial Intelligence', desc: 'AI researchers guiding technology strategy and emerging capabilities.' },
                { title: 'Brand Marketing', desc: 'CMO-level gaming and entertainment executives advising sponsorship strategy.' }
              ].map((adv, i) => (
                <div key={i} className="p-6 border-l-2 border-white/10 bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
                  <h5 className="font-display text-xl uppercase mb-2 tracking-wide text-white/80">{adv.title}</h5>
                  <p className="text-white/30 text-xs leading-relaxed">{adv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-12 bg-brand-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="font-mono text-[10px] text-brand-green uppercase tracking-[0.3em] mb-8 block">/ Contact</div>
              <h2 className="font-display text-6xl md:text-8xl uppercase tracking-tight mb-8 leading-[0.9]">
                Let's Build<br />Something.
              </h2>
              <p className="text-brand-light text-xl leading-relaxed mb-12 font-light">
                Whether you're a brand partner, university, investor, or industry professional, we want to hear from you. Tell us a little about what you're working on.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-brand-black transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-brand-mid">Direct Inquiry</div>
                    <a href="mailto:info@esportsx.com" className="text-brand-off-white hover:text-brand-green transition-colors font-mono text-sm">info@esportsx.com</a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-brand-smoke border border-white/5 rounded-2xl"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-brand-mid">Full Name</label>
                    <input type="text" placeholder="Jane Smith" className="w-full bg-brand-black border border-brand-mid p-4 text-sm focus:border-brand-green outline-none transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-brand-mid">Organization</label>
                    <input type="text" placeholder="Acme Corp" className="w-full bg-brand-black border border-brand-mid p-4 text-sm focus:border-brand-green outline-none transition-colors" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-brand-mid">Email Address</label>
                    <input type="email" placeholder="jane@example.com" className="w-full bg-brand-black border border-brand-mid p-4 text-sm focus:border-brand-green outline-none transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-brand-mid">Role / Title</label>
                    <input type="text" placeholder="VP of Partnerships" className="w-full bg-brand-black border border-brand-mid p-4 text-sm focus:border-brand-green outline-none transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-brand-mid">Message</label>
                  <textarea placeholder="Tell us about your project..." rows={4} className="w-full bg-brand-black border border-brand-mid p-4 text-sm focus:border-brand-green outline-none transition-colors resize-none" />
                </div>
                <button type="submit" className="w-full bg-brand-green text-brand-black py-5 font-mono font-bold uppercase tracking-widest hover:bg-brand-green/80 transition-all">
                  Send Message →
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* By the Numbers Section */}
      <section id="numbers" className="py-24 px-6 md:px-12 bg-brand-smoke relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(0,255,136,0.05)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl uppercase text-center mb-20 tracking-tight"
          >
            Built Over a Decade.
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
            <Counter target={1000} suffix="+" label="Premium Domains Under Management" />
            <Counter target={5} label="Active Brand Divisions" />
            <Counter target={8} label="Ivy League Institutions Engaged" />
            <Counter target={1} prefix="$" suffix="M+" label="Alumni Commitments Secured, Collegiate Esports" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 md:px-12 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-2">
              <Link to="/" className="font-display text-3xl tracking-wider flex items-center gap-1 mb-8">
                ESPORTS<span className="text-brand-green">X</span>
              </Link>
              <p className="text-white/40 max-w-sm text-sm leading-relaxed mb-8">
                The institutional future of esports. A comprehensive portfolio of 22+ brands spanning competitive gaming, collegiate education, and AI innovation.
              </p>
              <div className="flex items-center gap-6">
                {[
                  { name: 'Twitter', url: 'https://twitter.com/esportsx' },
                  { name: 'LinkedIn', url: 'https://linkedin.com/company/esportsx' },
                  { name: 'Discord', url: 'https://discord.gg/esportsx' }
                ].map((social) => (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-brand-green transition-colors font-mono text-[10px] uppercase tracking-widest">
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-8">Ecosystem</h4>
              <ul className="space-y-4">
                <li><Link to="/brand/college-esportsx" className="text-white/40 hover:text-brand-green transition-colors text-xs font-mono uppercase tracking-widest">College EsportsX</Link></li>
                <li><Link to="/brand/agoniq" className="text-white/40 hover:text-brand-green transition-colors text-xs font-mono uppercase tracking-widest">AGONiQ</Link></li>
                <li><Link to="/brand/warzai" className="text-white/40 hover:text-brand-green transition-colors text-xs font-mono uppercase tracking-widest">Warzai</Link></li>
                <li><Link to="/brand/esports-india" className="text-white/40 hover:text-brand-green transition-colors text-xs font-mono uppercase tracking-widest">Esports India</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-8">Company</h4>
              <ul className="space-y-4">
                <li><a href="#leadership" onClick={(e) => scrollToSection(e, 'leadership')} className="text-white/40 hover:text-brand-green transition-colors text-xs font-mono uppercase tracking-widest">Leadership</a></li>
                <li><a href="#venture" onClick={(e) => scrollToSection(e, 'venture')} className="text-white/40 hover:text-brand-green transition-colors text-xs font-mono uppercase tracking-widest">Venture Studio</a></li>
                <li><Link to="/legal" className="text-white/40 hover:text-brand-green transition-colors text-xs font-mono uppercase tracking-widest">Privacy Policy</Link></li>
                <li><Link to="/legal" className="text-white/40 hover:text-brand-green transition-colors text-xs font-mono uppercase tracking-widest">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white/20 font-mono text-[10px] uppercase tracking-widest">
              © 2026 EsportsX Ecosystem. All Rights Reserved.
            </div>
            <div className="flex items-center gap-8">
              <span className="text-white/20 font-mono text-[10px] uppercase tracking-widest">Institutional Grade</span>
              <span className="text-white/20 font-mono text-[10px] uppercase tracking-widest">AI-Enhanced</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
