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
  Linkedin,
  Image as ImageIcon
} from 'lucide-react';
import { cn } from './lib/utils';

const BRANDS = [
  // COMPETITIVE TRACKS (Purple)
  {
    id: 'agoniq',
    name: 'AGONiQ',
    category: 'compete',
    tagline: 'Intelligence Becomes Entertainment',
    desc: 'The world\'s first AI-enhanced competition format where competitors use generative AI tools to solve real-world business and technical challenges.',
    icon: <Cpu className="w-6 h-6" />,
    domain: 'agoniq.com',
    color: '#a29bfe',
    featured: true,
    stats: { users: '50k+', growth: '+120%' }
  },
  {
    id: 'warzai',
    name: 'Warzai',
    category: 'compete',
    tagline: 'AI-Enhanced Creative & Code',
    desc: 'A competitive vertical focused on creative design, coding, and business strategy sprints powered by real-time AI tool integration.',
    icon: <Zap className="w-6 h-6" />,
    domain: 'warzai.com',
    color: '#a29bfe',
    stats: { events: '200+', reach: '1.2M' }
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
  {
    id: 'mobile-esportsx',
    name: 'Mobile EsportsX',
    category: 'compete',
    tagline: 'Accessible Competition for 200M+ Mobile Gamers',
    desc: 'Mobile-optimized tournament systems and game-specific leagues serving the massively underrepresented mobile gaming community.',
    icon: <Globe className="w-6 h-6" />,
    domain: 'mobileesportsx.com',
    color: '#a29bfe'
  },

  // EDUCATION & DEVELOPMENT (Blue)
  {
    id: 'college-esportsx',
    name: 'College EsportsX',
    category: 'edu',
    tagline: 'Complete Collegiate Infrastructure',
    desc: 'Turnkey infrastructure for launching and scaling successful collegiate esports programs through a 250+ domain portfolio.',
    icon: <GraduationCap className="w-6 h-6" />,
    domain: 'collegeesportsx.com',
    color: '#00d4ff',
    featured: true,
    stats: { universities: '250+', students: '1M+' }
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
  {
    id: 'creator-academy',
    name: 'Creator Academy',
    category: 'edu',
    tagline: 'Building the Next Generation of Creators',
    desc: 'Comprehensive education and support for aspiring gaming content creators, streamers, and influencers.',
    icon: <Zap className="w-6 h-6" />,
    domain: 'creatoracademy.com',
    color: '#00d4ff'
  },
  {
    id: 'esports-education',
    name: 'Esports Education',
    category: 'edu',
    tagline: 'Academic Programs for the Industry',
    desc: 'Curriculum and credentialing platform creating academic programs in esports management, broadcasting, and analytics.',
    icon: <GraduationCap className="w-6 h-6" />,
    domain: 'esportseducation.com',
    color: '#00d4ff'
  },
  {
    id: 'esports-research',
    name: 'Esports Research',
    category: 'edu',
    tagline: 'The Intelligence Layer of Esports',
    desc: 'Data and analytics division providing market research, performance science, and academic studies.',
    icon: <Cpu className="w-6 h-6" />,
    domain: 'esportsresearch.com',
    color: '#00d4ff'
  },

  // BRANDED COMMUNITIES (Green)
  {
    id: 'esports-india',
    name: 'Esports India',
    category: 'community',
    tagline: 'Mobile-First, Locally Rooted',
    desc: 'South Asia\'s fastest-growing gaming market through mobile-optimized platforms and vernacular content in 10+ languages.',
    icon: <Globe className="w-6 h-6" />,
    domain: 'esportsindia.com',
    color: '#00ff88',
    stats: { market_share: '15%', users: '5M+' }
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
  {
    id: 'esports-boston',
    name: 'Esports Boston',
    category: 'community',
    tagline: 'New England\'s Competitive Hub',
    desc: 'Comprehensive competitive gaming infrastructure for the New England region, from pro leagues to amateur play.',
    icon: <Trophy className="w-6 h-6" />,
    domain: 'esportsboston.com',
    color: '#00ff88'
  },

  // INFRASTRUCTURE & SERVICES (Pink/Orange)
  {
    id: 'esports-proam',
    name: 'EsportsProAM',
    category: 'infra',
    tagline: 'The OS for Competitive Gaming',
    desc: 'League and statistics management infrastructure providing turnkey solutions for competition management and ranking.',
    icon: <Cpu className="w-6 h-6" />,
    domain: 'esportsproam.com',
    color: '#fd79a8',
    stats: { api_calls: '10M/mo', uptime: '99.9%' }
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
  },
  {
    id: 'esports-legal',
    name: 'Esports Legal',
    category: 'infra',
    tagline: 'Specialized Legal Services',
    desc: 'Legal and compliance services covering gaming regulations, IP, player contracts, and representation.',
    icon: <ShieldCheck className="w-6 h-6" />,
    domain: 'esportslegal.com',
    color: '#fd79a8'
  },
  {
    id: 'esports-arena',
    name: 'Esports Arena',
    category: 'infra',
    tagline: 'Physical Venues for Digital Generation',
    desc: 'Consulting, design, and management of dedicated esports venues for universities and corporate clients.',
    icon: <Trophy className="w-6 h-6" />,
    domain: 'esportsarena.com',
    color: '#fd79a8'
  },
  {
    id: 'esports-doctor',
    name: 'Esports Doctor / Psych',
    category: 'infra',
    tagline: 'Health, Wellness & Mental Performance',
    desc: 'Specialized healthcare services addressing physical health and mental performance for competitive gamers.',
    icon: <ShieldCheck className="w-6 h-6" />,
    domain: 'esportsdoctor.com',
    color: '#fd79a8'
  },
  {
    id: 'esports-wears',
    name: 'Esports Wears',
    category: 'infra',
    tagline: 'Performance Apparel & Wearables',
    desc: 'Merchandise and performance-optimized apparel designed for the unique demands of competitive gaming.',
    icon: <Zap className="w-6 h-6" />,
    domain: 'esportswears.com',
    color: '#fd79a8'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Brands', color: '#00ff88', overview: 'The complete EsportsX ecosystem spanning competition, education, and infrastructure.' },
  { id: 'compete', label: 'Competitive Tracks', color: '#a29bfe', overview: 'AI-enhanced tournament formats and global league infrastructure.' },
  { id: 'edu', label: 'Education & Development', color: '#00d4ff', overview: 'Collegiate systems, NIL monetization, and K-12 gaming curriculum.' },
  { id: 'community', label: 'Branded Communities', color: '#00ff88', overview: 'Hyper-local and demographic-specific gaming networks.' },
  { id: 'infra', label: 'Infrastructure & Services', color: '#fd79a8', overview: 'The B2B operating system for the professional gaming industry.' }
];

const PARTNERS = [
  { name: 'HP', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg' },
  { name: 'Intel', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg' },
  { name: 'Red Bull', logo: 'https://upload.wikimedia.org/wikipedia/en/f/f5/Red_Bull_Racing_logo.svg' },
  { name: 'Disney', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney_2012_logo.svg' },
  { name: 'Sony', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' }
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
          <a href="/" className="font-display text-2xl tracking-wider flex items-center gap-1">
            ESPORTS<span className="text-brand-green">X</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {['Portfolio', 'Leadership', 'Venture'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-xs font-mono uppercase tracking-widest text-white/60 hover:text-brand-green transition-colors"
              >
                {item}
              </a>
            ))}
            <button 
              onClick={() => document.getElementById('venture')?.scrollIntoView({ behavior: 'smooth' })}
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
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-display uppercase tracking-widest text-white hover:text-brand-green transition-colors"
                >
                  {item}
                </a>
              ))}
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  document.getElementById('venture')?.scrollIntoView({ behavior: 'smooth' });
                }}
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
      <section id="leadership" className="py-24 px-6 md:px-12 bg-white/[0.01] border-b border-white/5">
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
      <section id="portfolio" className="py-24 px-6 md:px-12">
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
                    <a 
                      href={`https://${brand.domain}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/20 group-hover:text-brand-green transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
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
      <section id="venture" className="py-24 px-6 md:px-12 bg-gradient-to-b from-transparent to-brand-green/[0.02]">
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
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
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
                  { title: 'Creator Economy', desc: 'Monetization infrastructure for gaming content creators.' }
                ].map((focus, i) => (
                  <div key={i} className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl group hover:bg-white/[0.04] transition-colors">
                    <h4 className="font-display text-2xl uppercase mb-2 tracking-wide group-hover:text-brand-green transition-colors">{focus.title}</h4>
                    <p className="text-white/30 text-sm leading-relaxed">{focus.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Final Call to Action / Seeking Section */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tight mb-8">
              Building the Definitive Platform for <span className="text-brand-green">AI-Enhanced</span> Competitive Gaming.
            </h2>
            <div className="inline-flex flex-col md:flex-row items-center gap-4 md:gap-8 p-8 border border-brand-green/30 bg-brand-green/5 rounded-2xl mb-12">
              <div className="text-left">
                <div className="font-mono text-[10px] uppercase tracking-widest text-brand-green mb-1">Current Round</div>
                <div className="font-display text-3xl uppercase">Seeking $500K – $1.5M Pre-Seed</div>
              </div>
              <div className="w-px h-12 bg-brand-green/20 hidden md:block" />
              <div className="text-left">
                <div className="font-mono text-[10px] uppercase tracking-widest text-brand-green mb-1">Instrument</div>
                <div className="font-display text-3xl uppercase">SAFE / Convertible Note</div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6">
              <a 
                href="mailto:info@esportsx.com"
                className="bg-brand-green text-black px-12 py-4 font-display text-2xl uppercase tracking-wider hover:bg-brand-green/80 transition-all rounded-lg"
              >
                Contact: info@esportsx.com
              </a>
              <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
                Confidential — For Investor and Partner Review Only
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="font-display text-3xl tracking-wider mb-6 block">
              ESPORTS<span className="text-brand-green">X</span>
            </a>
            <p className="text-white/40 max-w-sm text-sm leading-relaxed">
              Building the institutional infrastructure for the next generation of competitive gaming. From collegiate programs to AI-native tournament formats.
            </p>
          </div>
          
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-6">Ecosystem</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#portfolio" className="hover:text-brand-green transition-colors">AGONiQ Platform</a></li>
              <li><a href="#portfolio" className="hover:text-brand-green transition-colors">Warzai Formats</a></li>
              <li><a href="#portfolio" className="hover:text-brand-green transition-colors">College EsportsX</a></li>
              <li><a href="#venture" className="hover:text-brand-green transition-colors">Venture Studio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="https://x.com/esportsx" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">Twitter / X</a></li>
              <li><a href="https://linkedin.com/company/esportsx" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">LinkedIn</a></li>
              <li><a href="https://discord.gg/esportsx" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">Discord</a></li>
              <li><a href="mailto:info@esportsx.com" className="hover:text-brand-green transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
            © 2026 EsportsX Ecosystem. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-mono text-white/20 uppercase tracking-widest">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-[60] w-12 h-12 bg-brand-green text-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:scale-110 transition-transform"
          >
            <ArrowRight className="w-6 h-6 -rotate-90" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
