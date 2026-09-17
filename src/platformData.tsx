import React from 'react';
import {
  BookOpen,
  GraduationCap,
  Globe2,
  Shield,
  Trophy,
} from 'lucide-react';

export type Platform = {
  id: string;
  name: string;
  short: string;
  code: string;
  eyebrow: string;
  accent: string;
  icon: React.ReactNode;
  hero: string;
  description: string;
  thesis: string;
  focus: string[];
  programs: { title: string; copy: string }[];
  audiences: string[];
  cta: string;
  emailSubject: string;
};

export const platforms: Platform[] = [
  {
    id: 'college-esportsx',
    name: 'College EsportsX',
    short: 'COLLEGE',
    code: '01',
    eyebrow: 'Collegiate Market Infrastructure',
    accent: '#00ff88',
    icon: <GraduationCap className="h-7 w-7" />,
    hero: 'Building the infrastructure for the collegiate esports marketplace.',
    description: 'College EsportsX combines collegiate esports strategy, institutional advisory, events, education, brand activation, student engagement, and industry development.',
    thesis: 'College esports is becoming an ecosystem. College EsportsX helps institutions and companies navigate it.',
    focus: [
      'Collegiate esports strategy and program development',
      'College Esports Expo programming',
      'Campus esports activations',
      'Institutional advisory',
      'Student and workforce development',
      'Brand and technology partnerships',
      'Esports education',
      'NIL research and experimentation',
      'Industry research and intelligence',
    ],
    programs: [
      { title: 'College Esports Expo', copy: 'A meeting point for universities, students, esports organizations, technology companies, brands, employers, and industry leaders.' },
      { title: 'Institutional Advisory', copy: 'Strategy and program-development support for organizations navigating the collegiate esports marketplace.' },
      { title: 'Campus Activation', copy: 'Experiential programming that brings competition, technology, education, brands, and student communities together.' },
      { title: 'Talent & Workforce', copy: 'Education, student engagement, career exploration, and workforce-development opportunities around the business of esports.' },
    ],
    audiences: ['Universities', 'Students', 'Brands', 'Technology companies', 'Employers', 'Esports organizations'],
    cta: 'Explore a College EsportsX collaboration',
    emailSubject: 'College EsportsX Collaboration',
  },
  {
    id: 'esports-india',
    name: 'Esports India',
    short: 'INDIA',
    code: '02',
    eyebrow: 'Global Market Entry',
    accent: '#a29bfe',
    icon: <Globe2 className="h-7 w-7" />,
    hero: 'A gateway into one of gaming’s most consequential emerging markets.',
    description: 'Esports India is being developed as a market-entry and ecosystem platform connecting international companies with India’s growing competitive-gaming economy.',
    thesis: 'The platform is designed to bring together gaming companies, esports organizations, educational institutions, investors, technology partners, students, entrepreneurs, and diaspora networks.',
    focus: [
      'Market-entry intelligence',
      'Regulatory and operating readiness',
      'Campus and city experimentation',
      'Strategic and operating partnerships',
      'Student, entrepreneur, and diaspora networks',
    ],
    programs: [
      { title: 'Gateway Lab', copy: 'A focused market-entry program helping organizations understand the Indian esports landscape and identify partners, opportunities, and operating pathways.' },
      { title: 'Regulatory Readiness Lab', copy: 'Helping companies understand the regulatory, compliance, and operating environment surrounding competitive gaming.' },
      { title: 'Campus & City Pilots', copy: 'Testing esports concepts with universities, students, communities, and local ecosystems before broader expansion.' },
      { title: 'Operator Partnerships', copy: 'Connecting international organizations with potential Indian operating and strategic partners.' },
      { title: 'Fellows & Diaspora Network', copy: 'Building connections between emerging Indian gaming talent and global technology, investment, education, and esports communities.' },
    ],
    audiences: ['Gaming companies', 'Esports organizations', 'Educational institutions', 'Investors', 'Technology partners', 'Students & entrepreneurs'],
    cta: 'Explore the India market-entry platform',
    emailSubject: 'Esports India Market Entry',
  },
  {
    id: 'esportsfc',
    name: 'EsportsFC',
    short: 'FOOTBALL',
    code: '03',
    eyebrow: 'Football × Gaming × Culture',
    accent: '#00d4ff',
    icon: <Trophy className="h-7 w-7" />,
    hero: 'Where football culture meets competitive gaming.',
    description: 'Football is the world’s game. Gaming is one of the world’s largest forms of entertainment. EsportsFC sits at the intersection.',
    thesis: 'The platform explores opportunities connecting football, gaming, creators, clubs, competitions, brands, content, and global fan communities.',
    focus: [
      'Football gaming culture',
      'Digital competition',
      'Creator programming',
      'Club and brand activation',
      'Content',
      'International fan engagement',
    ],
    programs: [
      { title: 'Digital Competition', copy: 'Competition concepts that connect football fandom with interactive gaming experiences.' },
      { title: 'Creator Programming', copy: 'Programming designed around creators, football culture, gaming communities, and audience participation.' },
      { title: 'Branded Experiences', copy: 'Partnership concepts for brands and football organizations looking to participate credibly in gaming culture.' },
      { title: 'Global Fan Engagement', copy: 'New digital touchpoints connecting clubs, competitions, content, and international fan communities.' },
    ],
    audiences: ['Football clubs', 'Brands', 'Gaming companies', 'Creators', 'Competition operators', 'Global fan communities'],
    cta: 'Build at the football × gaming intersection',
    emailSubject: 'EsportsFC Partnership',
  },
  {
    id: 'military-esports',
    name: 'Military Esports',
    short: 'MILITARY',
    code: '04',
    eyebrow: 'Competition · Community · Connection · Opportunity',
    accent: '#ffeaa7',
    icon: <Shield className="h-7 w-7" />,
    hero: 'Competition. Community. Connection. Opportunity.',
    description: 'Military Esports explores the role competitive gaming can play across military and veteran communities.',
    thesis: 'Gaming can create connections across geography, generations, branches, and backgrounds. Military Esports is designed to help turn those connections into community.',
    focus: [
      'Gaming competition',
      'Community building',
      'Education',
      'Career pathways',
      'Technology',
      'Events and partnerships',
    ],
    programs: [
      { title: 'Competition', copy: 'Competitive gaming concepts designed around community participation and shared experience.' },
      { title: 'Community', copy: 'Programs that use gaming as a connective layer for active-duty personnel, veterans, military families, and supporting organizations.' },
      { title: 'Education & Careers', copy: 'Education and career-pathway concepts connecting gaming participation with broader opportunity.' },
      { title: 'Partnerships & Events', copy: 'Collaborative programming for organizations interested in supporting military and veteran gaming communities.' },
    ],
    audiences: ['Active-duty personnel', 'Veterans', 'Military families', 'Community organizations', 'Technology partners', 'Supporting brands'],
    cta: 'Explore a Military Esports initiative',
    emailSubject: 'Military Esports Collaboration',
  },
  {
    id: 'esports-education',
    name: 'Esports Education',
    short: 'EDUCATION',
    code: '05',
    eyebrow: 'The Business Behind the Game',
    accent: '#ff9f43',
    icon: <BookOpen className="h-7 w-7" />,
    hero: 'Preparing people for the business behind the game.',
    description: 'The esports economy needs more than players. It needs producers, marketers, coaches, event professionals, analysts, educators, community managers, technologists, strategists, and entrepreneurs.',
    thesis: 'The objective is simple: turn interest in esports into knowledge, capability, and opportunity.',
    focus: [
      'Esports management',
      'Business and entrepreneurship',
      'Events and production',
      'Marketing and sponsorship',
      'Coaching and competition',
      'Community development',
      'Technology',
      'Career exploration',
      'Professional development',
    ],
    programs: [
      { title: 'Students', copy: 'Learning experiences that turn interest in esports into broader understanding of the industry and its career pathways.' },
      { title: 'Educators', copy: 'Resources and programming that help educators understand esports, its business ecosystem, and its institutional applications.' },
      { title: 'Institutions', copy: 'Curriculum, professional development, and structured programming for schools and organizations.' },
      { title: 'Professionals', copy: 'Professional-development experiences for people looking to build fluency in the esports marketplace.' },
    ],
    audiences: ['Students', 'Educators', 'Educational institutions', 'Professionals', 'Career changers', 'Industry partners'],
    cta: 'Explore Esports Education',
    emailSubject: 'Esports Education Collaboration',
  },
];

export const getPlatform = (id?: string) => platforms.find((platform) => platform.id === id);
