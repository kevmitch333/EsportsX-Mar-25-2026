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
  Zap
} from 'lucide-react';
import { cn } from '../lib/utils';
import { BRANDS, CATEGORIES, PARTNERS } from '../constants';

export default function Landing() {
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navHeight = scrolled ? 80 : 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const filteredBrands = BRANDS.filter(b => activeFilter === 'all' || b.category === activeFilter);

  return (
    <div className="min-h-screen bg-brand-black selection:bg-brand-green selection:text-black">
      {/* Scanline Effect */}
      <div className="scanline" />

      {/* Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

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
            {['Portfolio', 'Leadership', 'Venture'].map((item) => (
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
              onClick={(e) => scrollToSection(e, 'venture')}
              className="bg-brand-green text-black px-5 py-2 text-xs font-mono font-bold uppercase tracking-widest hover:bg-brand-green/80 transition-all"
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
              {['Portfolio', 'Leadership', 'Venture'].map((item) => (
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
                onClick={(e) => scrollToSection(e, 'venture')}
                className="mt-4 bg-brand-green text-black px-8 py-3 text-sm font-mono font-bold uppercase tracking-widest hover:bg-brand-green/80 transition-all"
              >
                Connect
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs text-brand-green uppercase tracking-[0.3em] mb-6 block">
              / Brand Portfolio · Ecosystem v3.0
            </span>
            <h1 className="font-display text-6xl md:text-9xl leading-[0.85] mb-8 tracking-tight uppercase relative group">
              <span className="relative z-10">The EsportsX<br /></span>
              <span className="text-brand-green relative inline-block">
                Opportunity.
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-brand-green/30 blur-sm" />
                
                {/* Glitch Layers */}
                <span className="absolute inset-0 text-white opacity-0 group-hover:opacity-50 group-hover:animate-glitch-1 pointer-events-none">Opportunity.</span>
                <span className="absolute inset-0 text-brand-green opacity-0 group-hover:opacity-50 group-hover:animate-glitch-2 pointer-events-none">Opportunity.</span>
              </span>
            </h1>
            <p className="text-white/50 max-w-2xl text-lg leading-relaxed mb-12">
              Building the definitive platform for AI-enhanced competitive gaming. A defensible ecosystem of 22+ brands, 250+ premium domains, and a compounding network flywheel.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { val: '22+', label: 'Portfolio Companies', color: 'text-brand-green' },
                { val: '250+', label: 'Premium Domains', color: 'text-brand-green' },
                { val: '$75-100M', label: 'Domain Portfolio Value', color: 'text-brand-green' },
                { val: '$200B+', label: 'Gaming Market', color: 'text-brand-green' },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-lg">
                  <div className={cn("font-display text-3xl md:text-4xl mb-1", stat.color)}>
                    {stat.val}
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
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

      {/* Leadership Section */}
      <section id="leadership" className="py-24 px-6 md:px-12 bg-white/[0.01] border-b border-white/5 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="font-mono text-xs text-brand-green uppercase tracking-widest mb-4 block">/ Leadership</span>
            <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tight">Experienced. Credentialed. Connected.</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 p-8 border border-brand-green/20 bg-brand-green/[0.02] rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 blur-3xl rounded-full" />
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                <div>
                  <h3 className="font-display text-4xl mb-2">Kevin Mitchell</h3>
                  <p className="text-brand-green font-mono text-xs uppercase tracking-widest">Founder & Chief Executive Officer</p>
                </div>
                <a 
                  href="https://linkedin.com/in/kevinmitchell" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded font-mono text-[10px] uppercase tracking-widest text-white/60 hover:text-brand-green hover:border-brand-green/50 transition-all"
                >
                  <Linkedin className="w-3 h-3" />
                  LinkedIn Profile
                </a>
              </div>
              
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Three decades spanning Grammy-nominated music production (12 multi-platinum RIAA certifications), pioneering collegiate esports (first collegiate esports conference in the Western Hemisphere), and AI integration strategy. Strategic relationships with HP, Intel, Red Bull, Disney, and Sony provide immediate partnership opportunities.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  'Grammy-Nominated Executive',
                  '12 Multi-Platinum Certifications',
                  'College Esports Expo Founder',
                  'AI Integration Pioneer',
                  'HP · Intel · Red Bull Partner'
                ].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono uppercase tracking-wider text-white/40">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-4">Advisory Board</h4>
              {[
                { title: 'Education Technology', desc: 'University leadership guiding institutional adoption and program development.' },
                { title: 'Esports Industry', desc: 'Professional team and tournament operations expertise with media rights experience.' },
                { title: 'Artificial Intelligence', desc: 'AI researchers guiding technology strategy and emerging capabilities.' },
                { title: 'Brand Marketing', desc: 'CMO-level gaming and entertainment executives advising sponsorship strategy.' }
              ].map((adv, i) => (
                <div key={i} className="p-6 border border-white/5 bg-white/[0.01] rounded-lg">
                  <h5 className="font-display text-xl uppercase mb-2 tracking-wide">{adv.title}</h5>
                  <p className="text-white/30 text-xs leading-relaxed">{adv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 md:px-12 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="font-mono text-xs text-brand-green uppercase tracking-widest mb-4 block">/ Ecosystem</span>
            <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tight">Portfolio Architecture</h2>
          </div>

          {/* Featured Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {BRANDS.filter(b => b.featured).map((brand) => (
              <motion.div
                key={brand.id}
                whileHover={{ y: -5 }}
                className={cn(
                  "p-10 border border-white/10 rounded-2xl relative overflow-hidden group",
                  brand.id === 'agoniq' ? "md:col-span-2 bg-gradient-to-br from-purple-500/10 to-transparent" : "bg-gradient-to-br from-blue-500/10 to-transparent"
                )}
              >
                <Link to={`/brand/${brand.id}`} className="absolute inset-0 z-20" />
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  {brand.icon}
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10" style={{ color: brand.color }}>
                      {brand.icon}
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">Flagship Property</span>
                  </div>
                  <h3 className="font-display text-4xl md:text-5xl mb-4 uppercase tracking-tight">{brand.name}</h3>
                  <p className="text-white/80 text-lg mb-6 max-w-lg leading-relaxed">{brand.tagline}</p>
                  <p className="text-white/40 text-sm mb-8 max-w-md leading-relaxed">{brand.desc}</p>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-white/30">{brand.domain}</span>
                    <ArrowRight className="w-4 h-4 text-brand-green group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Filter Bar */}
          <div className="sticky top-24 z-40 mb-12 bg-brand-black/80 backdrop-blur-md border border-white/10 p-2 rounded-lg flex flex-wrap items-center gap-2">
            <span className="px-4 font-mono text-[10px] uppercase tracking-widest text-white/40 border-r border-white/10 mr-2">Division:</span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={cn(
                  "px-4 py-2 text-[10px] font-mono uppercase tracking-widest transition-all rounded",
                  activeFilter === cat.id 
                    ? "bg-white text-black font-bold" 
                    : "text-white/60 hover:text-white hover:bg-white/5"
                )}
                style={activeFilter === cat.id ? { backgroundColor: cat.color, color: '#000' } : {}}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Division Overview */}
          <motion.div 
            key={activeFilter}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-12 p-8 border-l-2 border-brand-green bg-white/[0.02]"
          >
            <h3 className="font-display text-3xl uppercase mb-2">
              {CATEGORIES.find(c => c.id === activeFilter)?.label}
            </h3>
            <p className="text-white/40 font-mono text-sm">
              {CATEGORIES.find(c => c.id === activeFilter)?.overview}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            <AnimatePresence mode="popLayout">
              {filteredBrands.filter(b => !b.featured).map((brand) => (
                <motion.div
                  key={brand.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-brand-black p-8 group relative overflow-hidden border border-white/5 hover:border-white/20 transition-colors"
                >
                  <Link to={`/brand/${brand.id}`} className="absolute inset-0 z-20" />
                  <div 
                    className="absolute top-0 left-0 w-full h-1 opacity-30 transition-opacity group-hover:opacity-100" 
                    style={{ backgroundColor: brand.color }}
                  />
                  
                  <div className="flex justify-between items-start mb-8">
                    <div 
                      className="p-3 bg-white/5 border border-white/10 rounded text-white group-hover:scale-110 transition-transform"
                      style={{ color: brand.color }}
                    >
                      {brand.icon}
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/20">
                      {brand.category}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl mb-2 group-hover:translate-x-1 transition-transform uppercase tracking-wide">
                    {brand.name}
                  </h3>
                  <p className="text-white/40 text-[10px] font-mono uppercase tracking-wider mb-6">{brand.tagline}</p>
                  <p className="text-white/50 text-xs leading-relaxed mb-8 line-clamp-3 group-hover:text-white/70 transition-colors">
                    {brand.desc}
                  </p>

                  {brand.stats && (
                    <div className="grid grid-cols-2 gap-2 mb-8">
                      {Object.entries(brand.stats).map(([key, val]) => (
                        <div key={key} className="p-2 bg-white/5 border border-white/5 rounded">
                          <div className="text-[8px] font-mono uppercase text-white/20 mb-1">{key.replace('_', ' ')}</div>
                          <div className="text-xs font-display text-brand-green">{val as string}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                    <span className="font-mono text-[10px] text-white/20 group-hover:text-white/40 transition-colors">{brand.domain}</span>
                    <div className="text-white/20 group-hover:text-brand-green transition-colors">
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
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
          <div className="p-12 md:p-20 border border-brand-green/20 rounded-3xl relative overflow-hidden bg-brand-black mb-24">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/4" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
              <div>
                <span className="font-mono text-xs text-brand-green uppercase tracking-widest mb-6 block">/ Innovation Engine</span>
                <h2 className="font-display text-6xl md:text-7xl uppercase tracking-tight mb-8">Venture Studio</h2>
                <p className="text-white/50 text-lg leading-relaxed mb-12">
                  Identifies, incubates, and accelerates the next generation of gaming innovation. Operating from a foundation of 650+ premium domains and strategic capital, we bring new ventures from concept to market with unmatched asset backing.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-12">
                  {['AI Gaming Tools', 'Esports Infrastructure', 'Immersive Experiences', 'Creator Economy'].map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-brand-green/10 border border-brand-green/20 rounded-full text-[10px] font-mono uppercase tracking-widest text-brand-green">
                      {tag}
                    </span>
                  ))}
                </div>

                <button 
                  onClick={(e) => scrollToSection(e, 'portfolio')}
                  className="flex items-center gap-4 group"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-white group-hover:text-brand-green transition-colors">Explore Ventures</span>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-green group-hover:bg-brand-green group-hover:text-black transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </button>
              </div>

              <div className="space-y-4">
                {[
                  { title: 'AI-Powered Gaming', desc: 'Next-gen tools where AI enhances human competition.' },
                  { title: 'Esports Infrastructure', desc: 'B2B tools for tournament operators and institutions.' },
                  { title: 'Immersive Experiences', desc: 'XR and spatial computing for next-gen viewing.' },
                  { title: 'Creator Economy', desc: 'Monetization and performance tools for the next generation of talent.' }
                ].map((item, i) => (
                  <div key={i} className="p-6 border border-white/10 bg-white/5 rounded-xl hover:border-brand-green/50 transition-colors">
                    <h3 className="font-display text-xl uppercase mb-2">{item.title}</h3>
                    <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
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
                <li><a href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')} className="text-white/40 hover:text-brand-green transition-colors text-xs font-mono uppercase tracking-widest">College EsportsX</a></li>
                <li><a href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')} className="text-white/40 hover:text-brand-green transition-colors text-xs font-mono uppercase tracking-widest">AGONiQ</a></li>
                <li><a href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')} className="text-white/40 hover:text-brand-green transition-colors text-xs font-mono uppercase tracking-widest">Warzai</a></li>
                <li><a href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')} className="text-white/40 hover:text-brand-green transition-colors text-xs font-mono uppercase tracking-widest">Esports India</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-8">Company</h4>
              <ul className="space-y-4">
                <li><a href="#leadership" onClick={(e) => scrollToSection(e, 'leadership')} className="text-white/40 hover:text-brand-green transition-colors text-xs font-mono uppercase tracking-widest">Leadership</a></li>
                <li><a href="#venture" onClick={(e) => scrollToSection(e, 'venture')} className="text-white/40 hover:text-brand-green transition-colors text-xs font-mono uppercase tracking-widest">Venture Studio</a></li>
                <li><a href="/privacy" className="text-white/40 hover:text-brand-green transition-colors text-xs font-mono uppercase tracking-widest">Privacy Policy</a></li>
                <li><a href="/terms" className="text-white/40 hover:text-brand-green transition-colors text-xs font-mono uppercase tracking-widest">Terms of Service</a></li>
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
