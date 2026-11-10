import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowRight,
  ExternalLink,
  Linkedin,
  ShieldCheck,
  Check,
  Mail,
  ChevronRight
} from 'lucide-react';
import { cn } from '../lib/utils';
import { BRANDS, CATEGORIES, PARTNERS } from '../constants';
import { BrandSparkline } from '../components/BrandSparkline';
import { CustomCursor } from '../components/CustomCursor';
import { SiteNav } from '../components/SiteNav';
import { SiteFooter } from '../components/SiteFooter';
import heroEsportsPlayerImg from '../assets/images/hero_esports_player_1794348240569.jpg';
import marketConvergenceArenaImg from '../assets/images/market_convergence_arena_1794348241462.jpg';

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
  const [highlightedBrandId, setHighlightedBrandId] = useState<string | null>(null);
  const [heroImgFailed, setHeroImgFailed] = useState(false);
  const [marketImgFailed, setMarketImgFailed] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const isPortfolioCard = id.startsWith('portfolio-');
      const isCategoryBlock = id.startsWith('category-');

      if (isPortfolioCard || isCategoryBlock) {
        setActiveFilters(['all']);
      }

      if (isPortfolioCard) {
        const brandId = id.replace('portfolio-', '');
        setHighlightedBrandId(brandId);
      }

      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const navOffset = isPortfolioCard || isCategoryBlock ? 185 : window.scrollY > 50 ? 80 : 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - navOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 90);

      const clearHighlightTimer = isPortfolioCard
        ? setTimeout(() => setHighlightedBrandId(null), 3000)
        : undefined;

      return () => {
        clearTimeout(timer);
        if (clearHighlightTimer) clearTimeout(clearHighlightTimer);
      };
    }
  }, [location.hash]);

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
      <CustomCursor />

      {/* Scanline Effect */}
      <div className="scanline" />

      {/* Navigation */}
      <SiteNav />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 overflow-hidden bg-brand-black">
        {/* Translucent Black-and-White Live Esports Player Backdrop */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden bg-gradient-to-br from-[#141414] via-brand-black to-[#050806]"
        >
          {!heroImgFailed && (
            <img
              src={heroEsportsPlayerImg}
              alt="Competitive esports player focused at a live arena tournament stage"
              referrerPolicy="no-referrer"
              onError={() => setHeroImgFailed(true)}
              className="w-full h-full object-cover object-[70%_25%] grayscale contrast-125 opacity-30 md:opacity-35"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-brand-black/35" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/75 via-transparent to-brand-black" />
        </div>

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
        <div className="absolute bottom-0 left-0 right-0 z-10 py-6 border-t border-white/5 bg-brand-black/70 backdrop-blur-sm overflow-hidden">
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
      <section className="relative py-28 px-6 md:px-12 bg-brand-black border-b border-white/5 overflow-hidden">
        {/* Dramatic Arena Stage Backdrop */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden bg-gradient-to-b from-[#07110b] via-brand-black to-[#050807]"
        >
          {!marketImgFailed && (
            <img
              src={marketConvergenceArenaImg}
              alt="Monumental esports championship arena illuminated during industry convergence showcase"
              referrerPolicy="no-referrer"
              onError={() => setMarketImgFailed(true)}
              className="w-full h-full object-cover object-center opacity-40 md:opacity-45 contrast-110"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/55 to-brand-black" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,136,0.08)_0%,rgba(10,10,10,0.72)_75%)]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
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
              <div key={i} className="p-8 border border-white/10 bg-brand-black/75 backdrop-blur-md rounded-xl text-center group hover:border-brand-green/40 hover:bg-brand-black/85 transition-all">
                <div className="font-display text-4xl text-brand-green mb-2 group-hover:scale-110 transition-transform">{market.val}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-white/80 mb-2">{market.label}</div>
                <div className="text-[9px] font-mono uppercase tracking-widest text-white/50">{market.sub}</div>
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
                    className="group relative min-h-[500px] md:h-[530px] overflow-hidden rounded-2xl border border-white/10 bg-brand-smoke hover:border-brand-green/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,136,0.1)]"
                  >
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                      <img 
                        src={brand.images?.[0] || 'https://picsum.photos/seed/spotlight/1200/800'} 
                        alt={brand.name}
                        className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/70 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-white/5 border border-white/10 rounded-lg text-brand-green">
                          {brand.icon}
                        </div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">/ Featured Asset</span>
                      </div>
                      
                      <h3 className="font-display text-3xl md:text-4xl mb-2 uppercase tracking-tight leading-none group-hover:text-brand-green transition-colors">
                        {brand.name}
                      </h3>
                      
                      <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-3 line-clamp-2 font-light italic">
                        "{brand.tagline}"
                      </p>

                      {/* Mini Sparkline & Engagement Meter */}
                      <div className="mb-4">
                        <BrandSparkline brand={brand} />
                      </div>

                      <div className="space-y-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                        {brand.backInfo?.rows.slice(0, 2).map((row, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <Check className="w-3 h-3 text-brand-green shrink-0" />
                            <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">{row.label}: <span className="text-white/90">{row.val}</span></span>
                          </div>
                        ))}
                      </div>

                      <Link 
                        to={`/brand/${brand.id}`}
                        className="inline-flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.3em] text-brand-green hover:text-white transition-colors group/btn pt-2 border-t border-white/10"
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
                  id={`category-${category.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="category-block scroll-mt-44"
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
                      <div
                        key={brand.id}
                        id={`portfolio-${brand.id}`}
                        className={cn(
                          'card-flipper group perspective-1200 min-h-[460px] scroll-mt-48 transition-all duration-500',
                          highlightedBrandId === brand.id &&
                            'ring-2 ring-brand-green shadow-[0_0_32px_rgba(0,255,136,0.35)] z-10'
                        )}
                      >
                        <div className="card-inner relative w-full h-full preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                          {/* Front Face */}
                          <div className="card-front absolute inset-0 backface-hidden bg-brand-smoke p-7 flex flex-col border-t-2" style={{ borderTopColor: brand.color }}>
                            <div className="flex justify-between items-start mb-4">
                              <div className="px-2.5 py-1 border border-white/10 text-[10px] font-mono uppercase tracking-widest" style={{ color: brand.color, borderColor: `${brand.color}4D` }}>
                                {brand.category}
                              </div>
                              <div className="text-xl opacity-60">{brand.icon}</div>
                            </div>
                            <h3 className="font-display text-2xl md:text-3xl mb-1.5 tracking-wide uppercase group-hover:animate-glitch-skew">
                              {brand.name}
                            </h3>
                            <p className="text-white/50 text-xs italic mb-3 line-clamp-1">{brand.tagline}</p>
                            <p className="text-white/40 text-xs sm:text-sm leading-relaxed mb-3 line-clamp-2">
                              {brand.desc}
                            </p>

                            {/* Dynamic Sparkline Chart & Engagement Meter */}
                            <div className="mt-auto pt-1">
                              <BrandSparkline brand={brand} />
                            </div>

                            <div className="mt-3 pt-3 border-t border-white/10 flex justify-between items-center">
                              <span className="font-mono text-[10px] text-white/20">{brand.domain}</span>
                              <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest">Hover to learn more →</span>
                            </div>
                          </div>

                          {/* Back Face */}
                          <div className="card-back absolute inset-0 backface-hidden bg-brand-black p-7 flex flex-col rotate-y-180 border-t-2" style={{ borderTopColor: brand.color }}>
                            <div className="absolute top-4 right-4 font-mono text-[9px] text-white/20 uppercase tracking-widest">← Flip back</div>
                            <div className="mb-4">
                              <h3 className="font-display text-2xl mb-1 tracking-wide uppercase">{brand.name}</h3>
                              <p className="font-mono text-[10px] uppercase tracking-widest" style={{ color: brand.color }}>{brand.backInfo?.sub || brand.tagline}</p>
                            </div>
                            <div className="flex-1 space-y-0 overflow-hidden">
                              {brand.backInfo?.rows.map((row, idx) => (
                                <div key={idx} className="py-2 border-b border-white/5 grid grid-cols-[auto_1fr] gap-3 items-start first:border-t">
                                  <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest pt-0.5">{row.label}</span>
                                  <span className="text-xs text-white/60 leading-relaxed">{row.val}</span>
                                </div>
                              ))}
                            </div>
                            <Link 
                              to={`/brand/${brand.id}`}
                              className="mt-4 py-3 border text-center font-mono text-[10px] uppercase tracking-widest transition-all hover:bg-white hover:text-black"
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

      <SiteFooter />
    </div>
  );
}
