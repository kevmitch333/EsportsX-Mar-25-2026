import React from 'react';
import { 
  Trophy, 
  GraduationCap, 
  Globe, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Rocket 
} from 'lucide-react';

export const BRANDS = [
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

export const CATEGORIES = [
  { id: 'all', label: 'All Brands', color: '#00ff88', overview: 'The complete EsportsX ecosystem spanning competition, education, and infrastructure.' },
  { id: 'compete', label: 'Competitive Tracks', color: '#a29bfe', overview: 'AI-enhanced tournament formats and global league infrastructure.' },
  { id: 'edu', label: 'Education & Development', color: '#00d4ff', overview: 'Collegiate systems, NIL monetization, and K-12 gaming curriculum.' },
  { id: 'community', label: 'Branded Communities', color: '#00ff88', overview: 'Hyper-local and demographic-specific gaming networks.' },
  { id: 'infra', label: 'Infrastructure & Services', color: '#fd79a8', overview: 'The B2B operating system for the professional gaming industry.' }
];

export const PARTNERS = [
  { name: 'HP', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg' },
  { name: 'Intel', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg' },
  { name: 'Red Bull', logo: 'https://upload.wikimedia.org/wikipedia/en/f/f5/Red_Bull_Racing_logo_2012.svg' },
  { name: 'Disney', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney_2012_logo.svg' },
  { name: 'Sony', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' }
];
