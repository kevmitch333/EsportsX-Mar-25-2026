import React from 'react';
import { 
  Trophy, 
  GraduationCap, 
  Globe, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Rocket,
  Gamepad2,
  Users,
  Building2,
  Activity,
  HeartPulse,
  Scale,
  Shirt,
  Wallet,
  Coins,
  Stethoscope,
  BrainCircuit,
  Flag
} from 'lucide-react';

export interface Brand {
  id: string;
  name: string;
  category: string;
  tagline: string;
  desc: string;
  icon: React.ReactNode;
  domain: string;
  color: string;
  featured?: boolean;
  stats?: Record<string, string>;
  images?: string[];
  backInfo?: {
    sub: string;
    rows: { label: string; val: string }[];
    cta?: string;
  };
}

export const BRANDS: Brand[] = [
  // CORE PLATFORM (Green)
  {
    id: 'agoniq',
    name: 'AGONiQ',
    category: 'core',
    tagline: 'AI-enhanced competitions & tournaments',
    desc: 'The AI-enhanced competition engine powering EsportsX\'s next-generation tournament formats. AGONiQ integrates machine learning and generative AI tools into the fabric of competitive events.',
    icon: <Cpu className="w-6 h-6" />,
    domain: 'agoniq.com',
    color: '#00ff88',
    featured: true,
    stats: { users: '50k+', growth: '+120%' },
    images: [
      'https://picsum.photos/seed/agoniq1/1200/800',
      'https://picsum.photos/seed/agoniq2/1200/800',
      'https://picsum.photos/seed/agoniq3/1200/800',
      'https://picsum.photos/seed/agoniq4/1200/800'
    ],
    backInfo: {
      sub: 'AI Competition Engine',
      rows: [
        { label: 'Model', val: 'AI-native tournament platform with generative challenge creation' },
        { label: 'Audience', val: 'Competitive players, tournament operators, collegiate institutions' },
        { label: 'Revenue', val: 'Platform licensing, entry fees, data analytics subscriptions' },
        { label: 'Edge', val: 'First-mover in AI-integrated competition infrastructure' }
      ]
    }
  },
  {
    id: 'warzai',
    name: 'Warzai',
    category: 'core',
    tagline: 'The world\'s first AI-enhanced tournament format',
    desc: 'Where "War" meets "Zai" — players use generative AI tools like ChatGPT, Claude, and Midjourney to solve real-world challenges spanning business strategy, creative design, and technical problem-solving.',
    icon: <BrainCircuit className="w-6 h-6" />,
    domain: 'warzai.com',
    color: '#00ff88',
    images: [
      'https://picsum.photos/seed/warzai1/1200/800',
      'https://picsum.photos/seed/warzai2/1200/800',
      'https://picsum.photos/seed/warzai3/1200/800'
    ],
    backInfo: {
      sub: 'AI Tournament Format',
      rows: [
        { label: 'Format', val: 'Participants solve complex challenges using AI tools in real-time competition' },
        { label: 'Audience', val: 'College students, professionals, corporate teams, AI enthusiasts' },
        { label: 'Revenue', val: 'Entry fees, corporate sponsorships, B2B talent assessment licensing' },
        { label: 'Edge', val: 'Unique category — no direct competitor in AI-native competition' }
      ]
    }
  },

  // COMPETITIVE TRACKS (Blue)
  {
    id: 'agoniq-collegiate',
    name: 'AGONiQ Collegiate',
    category: 'compete',
    tagline: 'Cognitive competition meets NCAA compliance',
    desc: 'The first AI-powered cognitive competition platform purpose-built for collegiate athletics. Transforms AI literacy into an athletic discipline.',
    icon: <GraduationCap className="w-6 h-6" />,
    domain: 'agoniq.com',
    color: '#00d4ff',
    images: [
      'https://picsum.photos/seed/collegiate1/1200/800',
      'https://picsum.photos/seed/collegiate2/1200/800',
      'https://picsum.photos/seed/collegiate3/1200/800'
    ],
    backInfo: {
      sub: 'NCAA Cognitive Platform',
      rows: [
        { label: 'Model', val: 'AI literacy competitions aligned with NCAA revenue sharing' },
        { label: 'Audience', val: 'Universities, student-athletes, athletic departments' },
        { label: 'Revenue', val: 'Institutional licensing, sponsorships, NIL revenue sharing' },
        { label: 'Status', val: 'Active — pilot universities in development' }
      ]
    }
  },
  {
    id: 'esports-fc',
    name: 'EsportsFC',
    category: 'compete',
    tagline: 'The global football simulation league',
    desc: 'Organized competitive tracks and leagues for the world\'s most popular sport in digital form. Leverages the global appetite for football to build a dedicated soccer simulation community.',
    icon: <Trophy className="w-6 h-6" />,
    domain: 'esportsfc.com',
    color: '#00d4ff',
    images: [
      'https://picsum.photos/seed/fc1/1200/800',
      'https://picsum.photos/seed/fc2/1200/800',
      'https://picsum.photos/seed/fc3/1200/800'
    ],
    backInfo: {
      sub: 'Football Simulation League',
      rows: [
        { label: 'Games', val: 'EA FC, eFootball and major football simulation titles' },
        { label: 'Audience', val: 'Global football fans, competitive sim players, club communities' },
        { label: 'Revenue', val: 'Entry fees, media rights, club partnerships, sponsorships' },
        { label: 'Market', val: '$3.5B+ global football gaming market' }
      ]
    }
  },
  {
    id: 'esports-f1',
    name: 'EsportsF1',
    category: 'compete',
    tagline: 'Competitive racing esports, elevated',
    desc: 'Dedicated leagues and events for Formula 1 and professional racing simulation — a vertical with rare audience dedication and premium brand appeal.',
    icon: <Zap className="w-6 h-6" />,
    domain: 'esportsf1.com',
    color: '#00d4ff',
    images: [
      'https://picsum.photos/seed/f1-1/1200/800',
      'https://picsum.photos/seed/f1-2/1200/800',
      'https://picsum.photos/seed/f1-3/1200/800'
    ],
    backInfo: {
      sub: 'Racing Simulation League',
      rows: [
        { label: 'Games', val: 'F1 24, Assetto Corsa, iRacing and pro racing simulations' },
        { label: 'Audience', val: 'Motorsport fans, sim racing community, F1 brand partners' },
        { label: 'Revenue', val: 'Entry fees, premium sponsorships, broadcast partnerships' },
        { label: 'Edge', val: 'Premium CPM — motorsport audience skews high-income' }
      ]
    }
  },
  {
    id: 'us-olympic',
    name: 'US Olympic Esports',
    category: 'compete',
    tagline: 'America\'s national esports infrastructure',
    desc: 'Dedicated to building and supporting the official United States national teams and infrastructure for global Olympic Esports participation.',
    icon: <ShieldCheck className="w-6 h-6" />,
    domain: 'usolympicesports.com',
    color: '#00d4ff',
    images: [
      'https://picsum.photos/seed/olympic1/1200/800',
      'https://picsum.photos/seed/olympic2/1200/800',
      'https://picsum.photos/seed/olympic3/1200/800'
    ],
    backInfo: {
      sub: 'National Team Infrastructure',
      rows: [
        { label: 'Mission', val: 'Official US team development for IOC-sanctioned esports events' },
        { label: 'Partners', val: 'USOC-aligned bodies, national sports federations, game publishers' },
        { label: 'Revenue', val: 'Sponsorships, government grants, licensing, broadcast deals' },
        { label: 'Timeline', val: 'Targeting 2028 LA Olympics esports integration' }
      ]
    }
  },
  {
    id: 'esports-cfb',
    name: 'EsportsCFB',
    category: 'compete',
    tagline: 'College football culture, digitized',
    desc: 'Competitive gaming infrastructure built around the cultural force of American college football. Enables fans and players to represent their schools.',
    icon: <Trophy className="w-6 h-6" />,
    domain: 'esportscfb.com',
    color: '#00d4ff',
    images: [
      'https://picsum.photos/seed/cfb1/1200/800',
      'https://picsum.photos/seed/cfb2/1200/800',
      'https://picsum.photos/seed/cfb3/1200/800'
    ],
    backInfo: {
      sub: 'College Football Gaming League',
      rows: [
        { label: 'Games', val: 'EA Sports College Football 25 and successor titles' },
        { label: 'Audience', val: 'College football fans, student gamers, alumni networks' },
        { label: 'Revenue', val: 'Entry fees, alumni sponsorships, conference partnerships' },
        { label: 'Edge', val: 'CFB 25 drove record engagement — market timing ideal' }
      ]
    }
  },
  {
    id: 'mobile-esportsx',
    name: 'Mobile EsportsX',
    category: 'compete',
    tagline: 'Tournament infrastructure for the mobile-first generation',
    desc: 'Dedicated tournaments and content for the world\'s largest gaming platform — smartphones. Capitalizes on the massive scale and global reach of mobile gaming.',
    icon: <Globe className="w-6 h-6" />,
    domain: 'mobileesportsx.com',
    color: '#00d4ff',
    images: [
      'https://picsum.photos/seed/mobile1/1200/800',
      'https://picsum.photos/seed/mobile2/1200/800',
      'https://picsum.photos/seed/mobile3/1200/800'
    ],
    backInfo: {
      sub: 'Mobile Competition Platform',
      rows: [
        { label: 'Market', val: '2.8B+ mobile gamers globally — largest gaming segment' },
        { label: 'Audience', val: 'Mobile-first players across all age groups, global reach' },
        { label: 'Revenue', val: 'Entry fees, in-app sponsorships, publisher partnerships' },
        { label: 'Edge', val: 'Low barrier to entry drives massive participation volume' }
      ]
    }
  },

  // EDUCATION & DEVELOPMENT (Orange)
  {
    id: 'college-esportsx',
    name: 'College EsportsX',
    category: 'edu',
    tagline: 'University esports from zero to operational',
    desc: 'The comprehensive institutional platform universities use to launch and scale esports programs. Dramatically reduces launch time and capital requirements.',
    icon: <GraduationCap className="w-6 h-6" />,
    domain: 'collegeesportsx.com',
    color: '#ff9f43',
    featured: true,
    stats: { universities: '250+', students: '1M+' },
    images: [
      'https://picsum.photos/seed/cex1/1200/800',
      'https://picsum.photos/seed/cex2/1200/800',
      'https://picsum.photos/seed/cex3/1200/800'
    ],
    backInfo: {
      sub: 'Institutional Platform',
      rows: [
        { label: 'Model', val: 'Full-stack university esports OS: ops, tournaments, curriculum, NIL' },
        { label: 'Audience', val: '4,000+ US colleges and universities, student athletic programs' },
        { label: 'Revenue', val: 'Annual licensing, implementation, revenue sharing' },
        { label: 'Edge', val: 'Cuts launch timeline from 18 months to under 60 days' }
      ]
    }
  },
  {
    id: 'esports-procamp',
    name: 'EsportsProCamp',
    category: 'edu',
    tagline: 'Professional-grade skill development',
    desc: 'Professional training camps and coaching resources — in-person and online — for aspiring competitive gamers. Provides structured curricula and elite coaching.',
    icon: <Activity className="w-6 h-6" />,
    domain: 'esportsprocamp.com',
    color: '#ff9f43',
    images: [
      'https://picsum.photos/seed/procamp1/1200/800',
      'https://picsum.photos/seed/procamp2/1200/800',
      'https://picsum.photos/seed/procamp3/1200/800'
    ],
    backInfo: {
      sub: 'Elite Training Platform',
      rows: [
        { label: 'Format', val: 'In-person intensives + online coaching + performance analytics' },
        { label: 'Audience', val: 'Aspiring competitive gamers ages 14–24, collegiate prospects' },
        { label: 'Revenue', val: 'Camp fees, coaching subscriptions, corporate team packages' },
        { label: 'Edge', val: 'Sports academy model applied to esports — proven demand' }
      ]
    }
  },
  {
    id: 'esports-nil',
    name: 'EsportsNIL',
    category: 'edu',
    tagline: 'Name, image & likeness for student-athletes',
    desc: 'The Name, Image, and Likeness monetization platform for collegiate esports athletes. Connects student competitors with sponsorship opportunities.',
    icon: <Coins className="w-6 h-6" />,
    domain: 'esportsnil.com',
    color: '#ff9f43',
    images: [
      'https://picsum.photos/seed/nil1/1200/800',
      'https://picsum.photos/seed/nil2/1200/800',
      'https://picsum.photos/seed/nil3/1200/800'
    ],
    backInfo: {
      sub: 'Student-Athlete Monetization',
      rows: [
        { label: 'Model', val: 'NIL marketplace + brand matching + deal management platform' },
        { label: 'Audience', val: 'Collegiate esports players, sponsoring brands, athletic programs' },
        { label: 'Revenue', val: 'Transaction fees on deals, platform SaaS, brand access fees' },
        { label: 'Timing', val: 'NCAA NIL rules effective 2021 — market in early growth phase' }
      ]
    }
  },
  {
    id: 'esports-school',
    name: 'Esports School',
    category: 'edu',
    tagline: 'K–12 esports integration, structured',
    desc: 'Structured programs for K–12 integration, providing the curriculum, infrastructure, and institutional support schools need to launch esports clubs.',
    icon: <Building2 className="w-6 h-6" />,
    domain: 'esportsschool.com',
    color: '#ff9f43',
    images: [
      'https://picsum.photos/seed/school1/1200/800',
      'https://picsum.photos/seed/school2/1200/800',
      'https://picsum.photos/seed/school3/1200/800'
    ],
    backInfo: {
      sub: 'K–12 Integration Platform',
      rows: [
        { label: 'Model', val: 'Turn-key club launch kits, curriculum, tournament access' },
        { label: 'Audience', val: 'K–12 school administrators, teachers, student organizations' },
        { label: 'Revenue', val: 'School licensing, district contracts, curriculum licensing' },
        { label: 'Market', val: '130,000+ K–12 schools in the US alone' }
      ]
    }
  },
  {
    id: 'esports-education',
    name: 'Esports Education',
    category: 'edu',
    tagline: 'Academic programs for the esports industry',
    desc: 'A curriculum and credentialing platform creating and licensing academic programs in esports management, broadcasting, coaching, and analytics.',
    icon: <GraduationCap className="w-6 h-6" />,
    domain: 'esportseducation.com',
    color: '#ff9f43',
    backInfo: {
      sub: 'Academic Credentialing',
      rows: [
        { label: 'Proof', val: '20+ courses, 10,000s certified via EDX.org with HP, AMD, Intel' },
        { label: 'Audience', val: 'Higher education institutions, workforce training, career changers' },
        { label: 'Revenue', val: 'Curriculum licensing, certification fees, institutional contracts' },
        { label: 'Edge', val: 'Proven model — built and scaled once already' }
      ]
    }
  },
  {
    id: 'esports-camp',
    name: 'Esports Camp',
    category: 'edu',
    tagline: 'Summer gaming programs for the next generation',
    desc: 'Summer camps and short-term youth programs focused on fundamental gaming skills, team building, and responsible digital citizenship.',
    icon: <Gamepad2 className="w-6 h-6" />,
    domain: 'esportscamp.com',
    color: '#ff9f43',
    backInfo: {
      sub: 'Youth Development Program',
      rows: [
        { label: 'Format', val: 'Day camps, residential, virtual — ages 10–18' },
        { label: 'Audience', val: 'Youth gamers, parents, schools, community centers' },
        { label: 'Revenue', val: 'Camp enrollment, franchise licensing, school contracts' },
        { label: 'Market', val: '$3B+ US summer camp industry — esports is fastest-growing segment' }
      ]
    }
  },
  {
    id: 'creator-academy',
    name: 'Creator Academy',
    category: 'edu',
    tagline: 'Building the business of content creation',
    desc: 'A platform and curriculum training the next generation of content creators, streamers, and commentators. Provides the skills and business frameworks.',
    icon: <Zap className="w-6 h-6" />,
    domain: 'creatoracademy.com',
    color: '#ff9f43',
    backInfo: {
      sub: 'Content Creator Training',
      rows: [
        { label: 'Curriculum', val: 'Streaming, video production, brand deals, audience building' },
        { label: 'Audience', val: 'Aspiring streamers, gaming content creators, media students' },
        { label: 'Revenue', val: 'Course enrollment, mentorship subscriptions, brand partnerships' },
        { label: 'Market', val: '50M+ creators globally — gaming is #1 content category' }
      ]
    }
  },
  {
    id: 'esports-research',
    name: 'Esports Research',
    category: 'edu',
    tagline: 'The intelligence layer of esports',
    desc: 'A data and analytics division providing market research, performance science, and academic studies. Licenses findings to brands and institutions.',
    icon: <Cpu className="w-6 h-6" />,
    domain: 'esportsresearch.com',
    color: '#ff9f43',
    backInfo: {
      sub: 'Data & Analytics Division',
      rows: [
        { label: 'Outputs', val: 'Market reports, player performance data, audience insights' },
        { label: 'Audience', val: 'Brands, investors, academics, media, government bodies' },
        { label: 'Revenue', val: 'Data licensing, custom research, report subscriptions' },
        { label: 'Edge', val: 'Proprietary data from across the entire EsportsX ecosystem' }
      ]
    }
  },

  // REGIONAL & COMMUNITIES (Purple)
  {
    id: 'military-esports',
    name: 'Military Esports',
    category: 'regional',
    tagline: 'Serving those who serve',
    desc: 'A dedicated division serving active-duty personnel, veterans, and military families through competitive gaming. Provides stress relief and camaraderie.',
    icon: <ShieldCheck className="w-6 h-6" />,
    domain: 'militaryesports.com',
    color: '#a29bfe',
    backInfo: {
      sub: 'Veteran & Active Duty Gaming',
      rows: [
        { label: 'Mission', val: 'Gaming as wellness, community, and career pathway for service members' },
        { label: 'Audience', val: 'Active duty (1.3M+), veterans (19M+), military families' },
        { label: 'Partners', val: 'US Army, DoD, veteran nonprofits' },
        { label: 'Revenue', val: 'Government contracts, sponsorships, program licensing' }
      ]
    }
  },
  {
    id: 'esports-local',
    name: 'Esports Local',
    category: 'regional',
    tagline: 'Premium localized infrastructure across global markets',
    desc: 'The regional expansion architecture — purpose-built platforms providing localized competitive infrastructure and vernacular content in each market.',
    icon: <Globe className="w-6 h-6" />,
    domain: 'esportslocal.com',
    color: '#a29bfe',
    images: [
      'https://picsum.photos/seed/local1/1200/800',
      'https://picsum.photos/seed/local2/1200/800',
      'https://picsum.photos/seed/local3/1200/800'
    ],
    backInfo: {
      sub: '10 Active Markets',
      rows: [
        { label: 'India', val: 'Mobile-first, massive scale' },
        { label: 'UK', val: 'Premium market entry' },
        { label: 'Russia', val: 'High-engagement community' },
        { label: 'Colombia', val: 'Latin America entry' }
      ]
    }
  },
  {
    id: 'kings-of-ny',
    name: 'Kings of New York Gaming',
    category: 'regional',
    tagline: 'NYC\'s premier competitive gaming community',
    desc: 'A regionally anchored competitive gaming brand built around the unique energy and identity of the New York metropolitan area.',
    icon: <Trophy className="w-6 h-6" />,
    domain: 'kingsofnewyorkgaming.com',
    color: '#a29bfe',
    backInfo: {
      sub: 'Regional Gaming Brand',
      rows: [
        { label: 'Region', val: 'New York Metropolitan Area — 20M+ population catchment' },
        { label: 'Audience', val: 'NYC area gamers, competitive players, content creators' },
        { label: 'Revenue', val: 'Local sponsorships, event tickets, media, merchandise' },
        { label: 'Edge', val: 'NYC cultural cachet amplifies brand beyond regional borders' }
      ]
    }
  },
  {
    id: 'esports-boston',
    name: 'Esports Boston',
    category: 'regional',
    tagline: 'Greater Boston\'s competitive gaming hub',
    desc: 'A dedicated regional brand serving the Greater Boston gaming community. Taps into one of America\'s densest concentrations of universities.',
    icon: <Trophy className="w-6 h-6" />,
    domain: 'esportsboston.com',
    color: '#a29bfe',
    backInfo: {
      sub: 'Regional Gaming Brand',
      rows: [
        { label: 'Region', val: 'Greater Boston — 100+ colleges and universities within 50 miles' },
        { label: 'Audience', val: 'Students, tech professionals, university esports programs' },
        { label: 'Revenue', val: 'University partnerships, local sponsors, events, media' },
        { label: 'Edge', val: 'Unmatched density of collegiate esports programs' }
      ]
    }
  },

  // INFRASTRUCTURE & SERVICES (Pink)
  {
    id: 'esports-union',
    name: 'Esports Union',
    category: 'infra',
    tagline: 'Organized representation for competitive players',
    desc: 'A platform organizing and representing the collective interests of competitive players — advocating for fair compensation and contract terms.',
    icon: <Users className="w-6 h-6" />,
    domain: 'esportsunion.com',
    color: '#fd79a8',
    backInfo: {
      sub: 'Player Representation',
      rows: [
        { label: 'Model', val: 'Guild/union hybrid — membership, advocacy, collective bargaining' },
        { label: 'Audience', val: 'Competitive players, semi-pro and pro teams, content creators' },
        { label: 'Revenue', val: 'Membership fees, legal service referrals, brand deal facilitation' },
        { label: 'Edge', val: 'Fills critical gap — no credible player union exists' }
      ]
    }
  },
  {
    id: 'esports-money',
    name: 'Esports Money',
    category: 'infra',
    tagline: 'Financial infrastructure for competitive gaming',
    desc: 'Integrated fintech solution focused on prize pool distribution, secure player payments, and financial management tools.',
    icon: <Wallet className="w-6 h-6" />,
    domain: 'esportsmoney.com',
    color: '#fd79a8',
    backInfo: {
      sub: 'Esports Fintech Platform',
      rows: [
        { label: 'Products', val: 'Prize distribution, player wallets, tax compliance, invoicing' },
        { label: 'Audience', val: 'Players, teams, tournament operators, organizations' },
        { label: 'Revenue', val: 'Transaction fees, SaaS, FX conversion' },
        { label: 'Market', val: '$1.8B+ in prize money distributed annually' }
      ]
    }
  },
  {
    id: 'esports-proam',
    name: 'EsportsProAM',
    category: 'infra',
    tagline: 'Where pros meet emerging talent',
    desc: 'Unique Professional-Amateur tournaments pairing elite competitors with emerging talent to foster mentorship and visibility.',
    icon: <Trophy className="w-6 h-6" />,
    domain: 'esportsproam.com',
    color: '#fd79a8',
    backInfo: {
      sub: 'Pro-Amateur Tournament Series',
      rows: [
        { label: 'Format', val: 'Pro–amateur pairing brackets across multiple game titles' },
        { label: 'Audience', val: 'Aspiring pros, current pros, spectators, talent scouts' },
        { label: 'Revenue', val: 'Entry fees, sponsor activations, media/streaming rights' },
        { label: 'Edge', val: 'Golf\'s ProAM model proven — esports version untapped' }
      ]
    }
  },
  {
    id: 'esports-arena',
    name: 'Esports Arena',
    category: 'infra',
    tagline: 'Physical venues for the digital generation',
    desc: 'Consulting, design, and management of dedicated esports venues for universities, corporate clients, and municipalities.',
    icon: <Building2 className="w-6 h-6" />,
    domain: 'esportsarena.com',
    color: '#fd79a8',
    backInfo: {
      sub: 'Venue Design & Management',
      rows: [
        { label: 'Services', val: 'Concept design, equipment specs, build oversight, ongoing ops' },
        { label: 'Audience', val: 'Universities, municipalities, hotel/casino groups, corporates' },
        { label: 'Revenue', val: 'Design fees, management contracts, equipment partnerships' },
        { label: 'Trend', val: '300+ university esports arenas built in 5 years' }
      ]
    }
  },
  {
    id: 'esports-legal',
    name: 'Esports Legal',
    category: 'infra',
    tagline: 'Legal counsel for the gaming industry',
    desc: 'Specialized legal and compliance services covering gaming regulations, intellectual property, contract review, and player representation.',
    icon: <Scale className="w-6 h-6" />,
    domain: 'esportslegal.com',
    color: '#fd79a8',
    backInfo: {
      sub: 'Gaming Law Practice',
      rows: [
        { label: 'Practice', val: 'IP, player contracts, org formation, regulatory compliance' },
        { label: 'Audience', val: 'Players, orgs, game publishers, event organizers, investors' },
        { label: 'Revenue', val: 'Retainer fees, per-deal review, educational content licensing' },
        { label: 'Need', val: 'Massive legal gap — most esports professionals lack representation' }
      ]
    }
  },
  {
    id: 'esports-doctor',
    name: 'Esports Doctor',
    category: 'infra',
    tagline: 'Physical health for competitive athletes',
    desc: 'Health and wellness services dedicated to competitive gamers, providing resources for injury prevention and performance longevity.',
    icon: <Stethoscope className="w-6 h-6" />,
    domain: 'esportsdoctor.com',
    color: '#fd79a8',
    backInfo: {
      sub: 'Player Physical Health',
      rows: [
        { label: 'Services', val: 'Injury prevention, ergonomics, nutrition, physical conditioning' },
        { label: 'Audience', val: 'Professional players, collegiate athletes, amateur competitors' },
        { label: 'Revenue', val: 'Telehealth subscriptions, team contracts, educational content' },
        { label: 'Need', val: '70%+ of pro players report chronic pain' }
      ]
    }
  },
  {
    id: 'esports-psych',
    name: 'Esports Psych',
    category: 'infra',
    tagline: 'Mental performance for competitive players',
    desc: 'Mental performance and behavioral health services helping competitive players manage stress and improve focus.',
    icon: <BrainCircuit className="w-6 h-6" />,
    domain: 'esportspsych.com',
    color: '#fd79a8',
    backInfo: {
      sub: 'Mental Performance Coaching',
      rows: [
        { label: 'Services', val: '1:1 coaching, team sessions, pre-tournament prep' },
        { label: 'Audience', val: 'Pro players, collegiate athletes, amateur competitors, teams' },
        { label: 'Revenue', val: 'Session fees, team retainers, digital tools' },
        { label: 'Need', val: 'Burnout rates in pro esports rival traditional pro sports' }
      ]
    }
  },
  {
    id: 'esports-wears',
    name: 'Esports Wears',
    category: 'infra',
    tagline: 'Apparel & lifestyle for the ecosystem',
    desc: 'A merchandise and apparel brand creating officially licensed team gear and functional athletic apparel for the EsportsX ecosystem.',
    icon: <Shirt className="w-6 h-6" />,
    domain: 'esportswears.com',
    color: '#fd79a8',
    backInfo: {
      sub: 'Apparel & Merchandise',
      rows: [
        { label: 'Products', val: 'Team jerseys, lifestyle apparel, fan merchandise, gear' },
        { label: 'Audience', val: 'Players, teams, fans, organizations across the ecosystem' },
        { label: 'Revenue', val: 'DTC sales, team licensing, white-label for organizations' },
        { label: 'Market', val: '$1.4B+ esports merchandise market' }
      ]
    }
  },
  {
    id: 'red-bull-campus-clutch',
    name: 'Red Bull Campus Clutch',
    category: 'history',
    tagline: 'The world\'s largest global university Valorant tournament',
    desc: 'EsportsX provided strategic consulting and operational support for one of the most significant collegiate esports initiatives globally.',
    icon: <Trophy className="w-6 h-6" />,
    domain: 'redbull.com',
    color: '#1e3799',
    featured: true,
    images: [
      'https://picsum.photos/seed/redbull1/1200/800',
      'https://picsum.photos/seed/redbull2/1200/800'
    ],
    backInfo: {
      sub: 'Global Collegiate Initiative',
      rows: [
        { label: 'Role', val: 'Strategic operational partner for global university rollout' },
        { label: 'Scale', val: '50+ countries, 25,000+ student participants' },
        { label: 'Impact', val: 'Defined the gold standard for global collegiate competition' }
      ]
    }
  },
  {
    id: 'twitch-student',
    name: 'Twitch Student',
    category: 'history',
    tagline: 'Empowering the next generation of creators',
    desc: 'Kevin Mitchell helped host one of the first Twitch streaming-focused classes in the US, bridging the gap between academia and the creator economy.',
    icon: <Gamepad2 className="w-6 h-6" />,
    domain: 'twitch.tv',
    color: '#6441a5',
    featured: true,
    images: [
      'https://picsum.photos/seed/twitch1/1200/800',
      'https://picsum.photos/seed/twitch2/1200/800'
    ],
    backInfo: {
      sub: 'Educational Partnership',
      rows: [
        { label: 'Milestone', val: 'Pioneered streaming-focused curriculum in US higher ed' },
        { label: 'Focus', val: 'Creator economy, digital broadcasting, community building' },
        { label: 'Legacy', val: 'Established blueprint for university-creator integrations' }
      ]
    }
  },
  {
    id: 'intel-inspires',
    name: 'Intel Inspires',
    category: 'history',
    tagline: 'Global gaming and esports education initiative',
    desc: 'Kevin served as a two-time judge for Intel Inspires, a global initiative driving esports education and talent discovery.',
    icon: <Cpu className="w-6 h-6" />,
    domain: 'intel.com',
    color: '#0071c5',
    featured: true,
    images: [
      'https://picsum.photos/seed/intel1/1200/800',
      'https://picsum.photos/seed/intel2/1200/800'
    ],
    backInfo: {
      sub: 'Talent Discovery Program',
      rows: [
        { label: 'Role', val: 'Two-time judge for global talent and education initiative' },
        { label: 'Scope', val: 'Global reach across multiple gaming and tech disciplines' },
        { label: 'Mission', val: 'Identifying and supporting the next generation of esports talent' }
      ]
    }
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'All Brands', color: '#00ff88', overview: 'The complete EsportsX ecosystem spanning competition, education, and infrastructure.' },
  { id: 'core', label: 'Core Platform', color: '#00ff88', overview: 'AI-enhanced tournament formats and global platform infrastructure.' },
  { id: 'compete', label: 'Competitive Tracks', color: '#00d4ff', overview: 'Specialized competitive tracks spanning collegiate, sports, and mobile.' },
  { id: 'edu', label: 'Education & Development', color: '#ff9f43', overview: 'Collegiate systems, NIL monetization, and K-12 gaming curriculum.' },
  { id: 'regional', label: 'Regional & Communities', color: '#a29bfe', overview: 'Hyper-local and demographic-specific gaming networks.' },
  { id: 'infra', label: 'Infrastructure & Services', color: '#fd79a8', overview: 'The B2B operating system for the professional gaming industry.' },
  { id: 'history', label: 'Strategic History', color: '#ff7675', overview: 'Legacy partnerships and global initiatives that defined the ecosystem.' },
  { id: 'venture', label: 'Venture Studio', color: '#ffeaa7', overview: 'The innovation engine behind the next generation of gaming.' }
];

export const PARTNERS = [
  { name: 'HP', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg' },
  { name: 'Intel', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg' },
  { name: 'Red Bull', logo: 'https://upload.wikimedia.org/wikipedia/en/f/f5/Red_Bull_Racing_logo_2012.svg' },
  { name: 'Disney', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney_2012_logo.svg' },
  { name: 'Sony', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' }
];
