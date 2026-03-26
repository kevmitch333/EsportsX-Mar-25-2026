import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  GraduationCap, 
  Globe, 
  Cpu, 
  Rocket, 
  ShieldCheck, 
  ArrowRight,
  ExternalLink,
  Menu,
  X,
  Zap,
  Bot,
  Image as ImageIcon
} from 'lucide-react';
import { Chatbot } from './components/Chatbot';
import { ImageGenerator } from './components/ImageGenerator';
import { cn } from './lib/utils';

const BRANDS = [
  // COMPETITIVE TRACKS
  {
    id: 'agoniq',
    name: 'AGONiQ',
    category: 'compete',
    tagline: 'Intelligence Becomes Entertainment',
    desc: 'The world\'s first AI-enhanced competition format where competitors use generative AI tools to solve real-world business and technical challenges.',
    icon: <Cpu className="w-6 h-6" />,
    domain: 'agoniq.com',
    color: '#a29bfe', // Purple
    featured: true
  },
  {
    id: 'warzai',
    name: 'Warzai',
    category: 'compete',
    tagline: 'AI-Enhanced Creative & Code',
    desc: 'A competitive vertical focused on creative design, coding, and business strategy sprints powered by real-time AI tool integration.',
    icon: <Zap className="w-6 h-6" />,
    domain: 'warzai.com',
    color: '#a29bfe'
  },
  {
    id: 'esports-fc',
    name: 'EsportsFC',
    category: 'compete',
    tagline: 'The Beautiful Game Goes Digital',
    desc: 'Definitive global soccer gaming infrastructure connecting real-world club identities to digital leagues and championships.',
    icon: <Trophy className="w-6 h-6" />,
    domain: 'esportsfc.com',
    color: '#a29bfe'
  },
  {
    id: 'esports-f1',
    name: 'EsportsF1',
    category: 'compete',
    tagline: 'Speed, Strategy, Simulation',
    desc: 'Premier racing esports infrastructure spanning professional championships to community leagues, mirroring the F1 constructor model.',
    icon: <Zap className="w-6 h-6" />,
    domain: 'esportsf1.com',
    color: '#a29bfe'
  },
  {
    id: 'us-olympic',
    name: 'US Olympic Esports',
    category: 'compete',
    tagline: 'Representing Nation Through Gaming',
    desc: 'Comprehensive national team infrastructure for American competitive gaming, aligning with the traditional Olympic framework.',
    icon: <ShieldCheck className="w-6 h-6" />,
    domain: 'usolympicesports.com',
    color: '#a29bfe'
  },
  {
    id: 'esports-cfb',
    name: 'EsportsCFB',
    category: 'compete',
    tagline: 'Campus Rivalry Meets Digital Gaming',
    desc: 'Competitive gaming infrastructure specifically for college football enthusiasts, leveraging authentic school rivalries.',
    icon: <Trophy className="w-6 h-6" />,
    domain: 'esportscfb.com',
    color: '#a29bfe'
  },

  // EDUCATION & DEVELOPMENT
  {
    id: 'college-esportsx',
    name: 'College EsportsX',
    category: 'edu',
    tagline: 'Complete Collegiate Infrastructure',
    desc: 'Turnkey infrastructure for launching and scaling successful collegiate esports programs through a 250+ domain portfolio.',
    icon: <GraduationCap className="w-6 h-6" />,
    domain: 'collegeesportsx.com',
    color: '#00d4ff', // Blue
    featured: true
  },
  {
    id: 'esports-procamp',
    name: 'Esports ProCamp',
    category: 'edu',
    tagline: 'AI-Powered Coaching',
    desc: 'Performance optimization through data intelligence, providing automated gameplay analysis and personalized training plans.',
    icon: <Cpu className="w-6 h-6" />,
    domain: 'esportsprocamp.com',
    color: '#00d4ff'
  },
  {
    id: 'esports-nil',
    name: 'EsportsNIL',
    category: 'edu',
    tagline: 'Monetizing Student-Athlete Brands',
    desc: 'Comprehensive NIL monetization infrastructure connecting college esports athletes with brand partnerships in the creator economy.',
    icon: <Rocket className="w-6 h-6" />,
    domain: 'esportsnil.com',
    color: '#00d4ff'
  },
  {
    id: 'esports-school',
    name: 'Esports School',
    category: 'edu',
    tagline: 'K-12 Gaming Education',
    desc: 'Age-appropriate gaming education infrastructure spanning elementary through high school with standards-aligned curriculum.',
    icon: <GraduationCap className="w-6 h-6" />,
    domain: 'esportsschool.com',
    color: '#00d4ff'
  },

  // BRANDED COMMUNITIES
  {
    id: 'esports-india',
    name: 'Esports India',
    category: 'community',
    tagline: 'Mobile-First, Locally Rooted',
    desc: 'Capturing South Asia\'s 400M+ gamer market through mobile-optimized platforms and vernacular content in 10+ languages.',
    icon: <Globe className="w-6 h-6" />,
    domain: 'esportsindia.com',
    color: '#00ff88' // Green
  },
  {
    id: 'military-esports',
    name: 'Military Esports',
    category: 'community',
    tagline: 'Service, Strategy, Competition',
    desc: 'Purpose-built esports infrastructure for veterans and active duty, focusing on stress relief and career transitions.',
    icon: <ShieldCheck className="w-6 h-6" />,
    domain: 'militaryesports.com',
    color: '#00ff88'
  },
  {
    id: 'kings-of-ny',
    name: 'Kings of New York Gaming',
    category: 'community',
    tagline: 'Five Boroughs. One Championship.',
    desc: 'NYC\'s premier esports destination through a borough-based franchise model and annual championship series.',
    icon: <Trophy className="w-6 h-6" />,
    domain: 'kingsofnewyorkgaming.com',
    color: '#00ff88'
  },

  // INFRASTRUCTURE & SERVICES
  {
    id: 'esports-proam',
    name: 'EsportsProAM',
    category: 'infra',
    tagline: 'The OS for Competitive Gaming',
    desc: 'League and statistics management infrastructure providing turnkey solutions for competition management and ranking.',
    icon: <Cpu className="w-6 h-6" />,
    domain: 'esportsproam.com',
    color: '#fd79a8' // Pink/Orange
  },
  {
    id: 'esports-union',
    name: 'Esports Union',
    category: 'infra',
    tagline: 'Building a Professional Foundation',
    desc: 'Player advocacy, industry standards development, and governance frameworks for a mature, sustainable industry.',
    icon: <ShieldCheck className="w-6 h-6" />,
    domain: 'esportsunion.com',
    color: '#fd79a8'
  },
  {
    id: 'esports-money',
    name: 'Esports Money',
    category: 'infra',
    tagline: 'Financial Optimization for Players',
    desc: 'Specialized financial services addressing the unique needs of competitive gaming professionals and organizations.',
    icon: <Zap className="w-6 h-6" />,
    domain: 'esportsmoney.com',
    color: '#fd79a8'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Brands', color: '#00ff88' },
  { id: 'compete', label: 'Competitive Tracks', color: '#a29bfe' },
  { id: 'edu', label: 'Education & Development', color: '#00d4ff' },
  { id: 'community', label: 'Branded Communities', color: '#00ff88' },
  { id: 'infra', label: 'Infrastructure & Services', color: '#fd79a8' }
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredBrands = BRANDS.filter(b => activeFilter === 'all' || b.category === activeFilter);

  return (
    <div className="min-h-screen bg-brand-black selection:bg-brand-green selection:text-black">
      {/* Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12",
        scrolled ? "py-4 bg-brand-black/90 backdrop-blur-xl border-b border-white/10" : "py-8 bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="font-display text-2xl tracking-wider flex items-center gap-1">
            ESPORTS<span className="text-brand-green">X</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {['Portfolio', 'AI Hub', 'Infrastructure', 'Venture'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-xs font-mono uppercase tracking-widest text-white/60 hover:text-brand-green transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="bg-brand-green text-black px-5 py-2 text-xs font-mono font-bold uppercase tracking-widest hover:bg-brand-green/80 transition-all">
              Connect
            </button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
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
            <h1 className="font-display text-6xl md:text-9xl leading-[0.85] mb-8 tracking-tight uppercase">
              The EsportsX<br />
              <span className="text-brand-green relative">
                Opportunity.
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-brand-green/30 blur-sm" />
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
              <div key={i} className="p-8 border border-white/10 bg-white/[0.02] rounded-xl">
                <div className="mb-6">{item.icon}</div>
                <h3 className="font-display text-2xl uppercase mb-4 tracking-wide">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Innovation Hub */}
      <section id="ai-hub" className="py-24 px-6 md:px-12 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <span className="font-mono text-xs text-brand-green uppercase tracking-widest mb-4 block">/ Intelligence Layer</span>
              <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tight">AI Innovation Hub</h2>
            </div>
            <p className="text-white/40 max-w-md text-sm leading-relaxed">
              Leveraging the power of Gemini to automate, enhance, and visualize the future of competitive gaming.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex items-center gap-2">
                <Bot className="w-4 h-4 text-brand-green" />
                <h3 className="font-mono text-xs uppercase tracking-widest">Neural Chat Interface</h3>
              </div>
              <Chatbot />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-brand-green" />
                <h3 className="font-mono text-xs uppercase tracking-widest">Visual Synthesis Engine</h3>
              </div>
              <ImageGenerator />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Filter Bar */}
          <div className="sticky top-24 z-40 mb-16 bg-brand-black/80 backdrop-blur-md border border-white/10 p-2 rounded-lg flex flex-wrap items-center gap-2">
            <span className="px-4 font-mono text-[10px] uppercase tracking-widest text-white/40">Filter:</span>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            <AnimatePresence mode="popLayout">
              {filteredBrands.map((brand) => (
                <motion.div
                  key={brand.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-brand-black p-8 group relative overflow-hidden"
                >
                  <div 
                    className="absolute top-0 left-0 w-full h-1 opacity-50 transition-opacity group-hover:opacity-100" 
                    style={{ backgroundColor: brand.color }}
                  />
                  
                  <div className="flex justify-between items-start mb-8">
                    <div 
                      className="p-3 bg-white/5 border border-white/10 rounded text-white group-hover:text-brand-green transition-colors"
                      style={{ color: brand.color }}
                    >
                      {brand.icon}
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/20">
                      {brand.category}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl mb-2 group-hover:translate-x-1 transition-transform">
                    {brand.name}
                  </h3>
                  <p className="text-white/40 text-xs italic mb-6">{brand.tagline}</p>
                  <p className="text-white/60 text-sm leading-relaxed mb-8 line-clamp-3">
                    {brand.desc}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                    <span className="font-mono text-[10px] text-white/30">{brand.domain}</span>
                    <button className="text-white/40 group-hover:text-brand-green transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="font-display text-3xl tracking-wider mb-6 block">
              ESPORTS<span className="text-brand-green">X</span>
            </a>
            <p className="text-white/40 max-w-sm text-sm leading-relaxed">
              Building the institutional infrastructure for the next generation of competitive gaming. From collegiate programs to AI-native tournament formats.
            </p>
          </div>
          
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-6">Ecosystem</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-brand-green transition-colors">AGONiQ Platform</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Warzai Formats</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">College EsportsX</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Venture Studio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-brand-green transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
            © 2026 EsportsX Ecosystem. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-mono text-white/20 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
