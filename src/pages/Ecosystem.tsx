import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  Trophy,
  GraduationCap,
  Globe,
  Building2,
  Rocket,
  Layers,
} from 'lucide-react';
import { CustomCursor } from '../components/CustomCursor';
import { SiteNav } from '../components/SiteNav';
import { SiteFooter } from '../components/SiteFooter';

interface PropertyLink {
  label: string;
  portfolioTarget: string;
  detailRoute?: string;
}

interface DivisionPropertyRow {
  propertyDisplay: string;
  links: PropertyLink[];
  focus: string;
  audience: string;
  detailCopy: string;
}

interface EcosystemPillar {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  accent: string;
  categoryAnchor: string;
  icon: React.ReactNode;
  description: string;
  properties: DivisionPropertyRow[];
}

const ECOSYSTEM_PILLARS: EcosystemPillar[] = [
  {
    id: 'pillar-a',
    code: 'Pillar A',
    title: 'Competition Division',
    subtitle: 'Structured Sports & League Frameworks',
    accent: '#00d4ff',
    categoryAnchor: '/#category-compete',
    icon: <Trophy className="h-5 w-5" />,
    description:
      'The Competition Division bridges real-world sports tradition and digital gaming culture, establishing structured competitive frameworks around globally recognized sports categories.',
    properties: [
      {
        propertyDisplay: 'EsportsFC',
        links: [
          {
            label: 'EsportsFC',
            portfolioTarget: '/#portfolio-esports-fc',
            detailRoute: '/brand/esports-fc',
          },
        ],
        focus:
          'Global competitive soccer gaming infrastructure connecting real-world football club identities with digital leagues and international tournaments.',
        audience: 'FIFA/eFootball players, traditional soccer clubs, global fans',
        detailCopy:
          'Establishes club-affiliated competitive leagues where players represent real-world football teams, creating pathways from amateur community play to professional digital club rosters.',
      },
      {
        propertyDisplay: 'EsportsF1',
        links: [
          {
            label: 'EsportsF1',
            portfolioTarget: '/#portfolio-esports-f1',
            detailRoute: '/brand/esports-f1',
          },
        ],
        focus:
          'Premier sim-racing infrastructure and multi-tier competitive racing leagues bringing motorsport strategy and driver pathways to digital competition.',
        audience: 'Sim racing enthusiasts, motorsport fans, racing sponsors',
        detailCopy:
          'Operates multi-tier racing leagues, constructor championship structures, and driver academies teaching telemetry analysis, race strategy, and vehicle dynamics.',
      },
      {
        propertyDisplay: 'US Olympic Esports',
        links: [
          {
            label: 'US Olympic Esports',
            portfolioTarget: '/#portfolio-us-olympic',
            detailRoute: '/brand/us-olympic',
          },
        ],
        focus:
          'National competitive framework and athlete selection pipeline supporting Team USA in international esports competition and Olympic-adjacent events.',
        audience: 'Elite U.S. competitive athletes, national sports bodies',
        detailCopy:
          'Provides national team selection processes, athlete support services, and international competition representation within a formal athletic framework.',
      },
      {
        propertyDisplay: 'EsportsCFB',
        links: [
          {
            label: 'EsportsCFB',
            portfolioTarget: '/#portfolio-esports-cfb',
            detailRoute: '/brand/esports-cfb',
          },
        ],
        focus:
          'Digital competitive gaming integrated directly with college football rivalries, conference structures, and campus fan pride.',
        audience: 'Collegiate sports fans, university student bodies, campus groups',
        detailCopy:
          'Capitalizes on collegiate football tradition by organizing digital tournaments aligned with conference structures (SEC, Big Ten, ACC, Big 12) and rivalries.',
      },
    ],
  },
  {
    id: 'pillar-b',
    code: 'Pillar B',
    title: 'Education & Development Division',
    subtitle: 'Scholastic Frameworks & Performance Science',
    accent: '#ff9f43',
    categoryAnchor: '/#category-edu',
    icon: <GraduationCap className="h-5 w-5" />,
    description:
      'The Education & Development Division provides accredited scholastic frameworks, varsity program infrastructure, performance science, and workforce development tools.',
    properties: [
      {
        propertyDisplay: 'EsportsEducation & EsportsSchool',
        links: [
          {
            label: 'EsportsEducation',
            portfolioTarget: '/#portfolio-esports-education',
            detailRoute: '/brand/esports-education',
          },
          {
            label: 'EsportsSchool',
            portfolioTarget: '/#portfolio-esports-school',
            detailRoute: '/brand/esports-school',
          },
        ],
        focus:
          'Accredited curriculum, coaching frameworks, and turnkey varsity infrastructure for K-12 school districts and 500+ post-secondary institutions.',
        audience: 'K-12 districts, college administrators, varsity coaches',
        detailCopy:
          'Delivers standards-aligned K-12 lesson plans connecting gaming to STEM disciplines, alongside post-secondary varsity management frameworks.',
      },
      {
        propertyDisplay: 'EsportsProCamp',
        links: [
          {
            label: 'EsportsProCamp',
            portfolioTarget: '/#portfolio-esports-procamp',
            detailRoute: '/brand/esports-procamp',
          },
        ],
        focus:
          'AI-powered performance analytics and gameplay optimization platform evaluating decision-making quality and tactical execution.',
        audience: 'Competitive players, esports coaches, university programs',
        detailCopy:
          'Uses machine learning models trained on pro-level gameplay data to analyze decision trees, communication patterns, and mechanical efficiency.',
      },
      {
        propertyDisplay: 'EsportsCamp',
        links: [
          {
            label: 'EsportsCamp',
            portfolioTarget: '/#portfolio-esports-camp',
            detailRoute: '/brand/esports-camp',
          },
        ],
        focus:
          'Immersive training hubs, seasonal bootcamps, student-athlete conditioning clinics, and supervised youth gaming programs.',
        audience: 'Youth gamers (ages 8–18), parents, community organizations',
        detailCopy:
          'Combines competitive play with structured instruction in game design, digital citizenship, and athletic conditioning.',
      },
      {
        propertyDisplay: 'EsportsLearning',
        links: [
          {
            label: 'EsportsLearning',
            portfolioTarget: '/#portfolio-esports-education',
            detailRoute: '/brand/esports-education',
          },
        ],
        focus:
          'LMS-driven education platform offering coursework and certifications in tournament operations, broadcasting, media, and event management.',
        audience: 'Career seekers, students, industry professionals',
        detailCopy:
          'EsportsLearning (Esports Education Platform) connects industry practitioners with learners via interactive course modules, mentorship, and career placement services.',
      },
      {
        propertyDisplay: 'Esports Institute / EsportsResearch',
        links: [
          {
            label: 'EsportsResearch',
            portfolioTarget: '/#portfolio-esports-research',
            detailRoute: '/brand/esports-research',
          },
        ],
        focus:
          'Global academic research hub advancing performance science, ergonomics, player health, and industry analytics.',
        audience: 'Researchers, academic faculty, sports medicine professionals',
        detailCopy:
          'Facilitates grant-funded studies, longitudinal health assessments, and peer-reviewed publications for the gaming industry.',
      },
    ],
  },
  {
    id: 'pillar-c',
    code: 'Pillar C',
    title: 'Branded Communities & Regional Expansion',
    subtitle: 'Global Markets & Specialized Networks',
    accent: '#a29bfe',
    categoryAnchor: '/#category-regional',
    icon: <Globe className="h-5 w-5" />,
    description:
      'This division drives localized grassroots engagement, international market penetration, and specialized demographic communities.',
    properties: [
      {
        propertyDisplay: 'Esports India',
        links: [
          {
            label: 'Esports India',
            portfolioTarget: '/#portfolio-esports-local',
            detailRoute: '/brand/esports-local',
          },
        ],
        focus:
          "Subcontinental market lead with 50+ domain assets targeting India's 400M+ mobile gamers via vernacular content and mobile-first tournaments.",
        audience: 'Indian mobile gamers, regional sponsors, telecom partners',
        detailCopy:
          'Anchors South Asian expansion through multi-language support (Hindi, Tamil, Telugu, Bengali), local UPI payment integration, and mobile-first tournament bracketing.',
      },
      {
        propertyDisplay: 'International Regional Assets',
        links: [
          {
            label: 'Esports Local',
            portfolioTarget: '/#portfolio-esports-local',
            detailRoute: '/brand/esports-local',
          },
        ],
        focus:
          'Global expansion properties establishing authoritative local market presence across key international territories.',
        audience: 'Local competitive communities in Europe, LATAM, and Eurasia',
        detailCopy:
          'Includes authoritative geographic properties such as Esports UK, Esports Ireland, Esports Scotland, Esports Russia, Esports Argentina, and Esports Columbia.',
      },
      {
        propertyDisplay: 'Military Esports',
        links: [
          {
            label: 'Military Esports',
            portfolioTarget: '/#portfolio-military-esports',
            detailRoute: '/brand/military-esports',
          },
        ],
        focus:
          'Purpose-built competition and career transition infrastructure serving active-duty personnel, reservists, and 18M veterans across all U.S. service branches.',
        audience: 'Active-duty military, military veterans, defense contractors',
        detailCopy:
          'Integrates inter-service leagues (Army, Navy, Air Force, Marines, Space Force, Coast Guard) with VA-aligned career transition programs into technology and cybersecurity fields.',
      },
      {
        propertyDisplay: 'Kings of New York Gaming',
        links: [
          {
            label: 'Kings of New York Gaming',
            portfolioTarget: '/#portfolio-kings-of-ny',
            detailRoute: '/brand/kings-of-ny',
          },
        ],
        focus:
          "Localized 5-borough franchise model and annual city championship unifying NYC's competitive gaming community.",
        audience: 'New York City borough gamers, local venue operators, NYC brands',
        detailCopy:
          'Establishes permanent borough franchise identities (Manhattan, Brooklyn, Queens, Bronx, Staten Island) culminating in signature venue finals.',
      },
      {
        propertyDisplay: 'Esports Boston',
        links: [
          {
            label: 'Esports Boston',
            portfolioTarget: '/#portfolio-esports-boston',
            detailRoute: '/brand/esports-boston',
          },
        ],
        focus:
          'Regional blueprint for New England competitive leagues from scholastic and amateur play to professional team hubs.',
        audience: 'New England college programs, regional gamers, tech sponsors',
        detailCopy:
          "Connects Greater Boston's 50+ colleges and universities into a unified regional league and venue network.",
      },
      {
        propertyDisplay: 'Mobile EsportsX',
        links: [
          {
            label: 'Mobile EsportsX',
            portfolioTarget: '/#portfolio-mobile-esportsx',
            detailRoute: '/brand/mobile-esportsx',
          },
        ],
        focus:
          'North American mobile competitive gaming hub, encompassing USMobileEsports and specialized agency services.',
        audience: 'Smartphone competitive players, mobile publishers, lifestyle brands',
        detailCopy:
          'Serves the fast-growing North American mobile gaming market, providing accessible tournament bracketing for titles like Call of Duty Mobile, PUBG Mobile, and Free Fire.',
      },
    ],
  },
  {
    id: 'pillar-d',
    code: 'Pillar D',
    title: 'Infrastructure & Services Division',
    subtitle: 'Institutional Operational Backbone',
    accent: '#fd79a8',
    categoryAnchor: '/#category-infra',
    icon: <Building2 className="h-5 w-5" />,
    description:
      'The Infrastructure & Services Division acts as the institutional operational backbone for the global gaming economy.',
    properties: [
      {
        propertyDisplay: 'Esports Union',
        links: [
          {
            label: 'Esports Union',
            portfolioTarget: '/#portfolio-esports-union',
            detailRoute: '/brand/esports-union',
          },
        ],
        focus:
          'Governance framework, player rights advocacy, model contract standards, and league certification.',
        audience: 'Professional players, team owners, league operators',
        detailCopy:
          'Establishes industry standards, dispute resolution processes, and model contracts to prevent player exploitation and ensure league integrity.',
      },
      {
        propertyDisplay: 'Esports Money',
        links: [
          {
            label: 'Esports Money',
            portfolioTarget: '/#portfolio-esports-money',
            detailRoute: '/brand/esports-money',
          },
        ],
        focus:
          'Specialized financial planning, tax optimization, and prize pool distribution platforms tailored for esports professionals.',
        audience: 'High-earning gamers, esports teams, tournament operators',
        detailCopy:
          'Handles multi-jurisdictional tax strategies, prize pool escrow, and long-term asset management for volatile gaming incomes.',
      },
      {
        propertyDisplay: 'EsportsProAM',
        links: [
          {
            label: 'EsportsProAM',
            portfolioTarget: '/#portfolio-esports-proam',
            detailRoute: '/brand/esports-proam',
          },
        ],
        focus:
          'Turnkey league management software, automated bracketing engines, and statistical tracking infrastructure.',
        audience: 'Tournament directors, amateur leagues, college directors',
        detailCopy:
          'Offers white-label tournament management software with real-time statistics, API access, and spectator overlays.',
      },
      {
        propertyDisplay: 'Esports Arena & Centers',
        links: [
          {
            label: 'Esports Arena',
            portfolioTarget: '/#portfolio-esports-arena',
            detailRoute: '/brand/esports-arena',
          },
        ],
        focus:
          'Location-based entertainment (LBE) venue network and community gaming centers driving foot traffic and events.',
        audience: 'Local competitive gamers, event organizers, venue franchisees',
        detailCopy:
          'Combines high-performance gaming stations, food/beverage services, and tournament spaces into scalable local franchise units.',
      },
      {
        propertyDisplay: 'Esports Legal',
        links: [
          {
            label: 'Esports Legal',
            portfolioTarget: '/#portfolio-esports-legal',
            detailRoute: '/brand/esports-legal',
          },
        ],
        focus:
          'Specialized legal counsel covering player contracts, IP protection, sponsorship negotiation, and regulatory compliance.',
        audience: 'Gamers, esports startups, corporate sponsors',
        detailCopy:
          'Provides specialized legal representation in intellectual property, player transfers, and corporate governance.',
      },
      {
        propertyDisplay: 'Esports Doctor & Esports Psych',
        links: [
          {
            label: 'Esports Doctor',
            portfolioTarget: '/#portfolio-esports-doctor',
            detailRoute: '/brand/esports-doctor',
          },
          {
            label: 'Esports Psych',
            portfolioTarget: '/#portfolio-esports-psych',
            detailRoute: '/brand/esports-psych',
          },
        ],
        focus:
          'Comprehensive physical healthcare, ergonomics, injury prevention, and mental performance coaching.',
        audience: 'Competitive players, varsity rosters, professional teams',
        detailCopy:
          'Addresses repetitive strain injuries, posture, sleep hygiene, and competitive burnout through evidence-based clinical protocols.',
      },
      {
        propertyDisplay: 'Esports Wears',
        links: [
          {
            label: 'Esports Wears',
            portfolioTarget: '/#portfolio-esports-wears',
            detailRoute: '/brand/esports-wears',
          },
        ],
        focus:
          'Performance-optimized gaming apparel and wearable tech integration designed for long gaming sessions.',
        audience: 'Serious competitive gamers, varsity teams, lifestyle fans',
        detailCopy:
          'Manufactures ergonomic compression gear, moisture-wicking apparel, and biometrically integrated gaming wearables.',
      },
      {
        propertyDisplay: 'Family Verticals',
        links: [
          {
            label: 'Infrastructure Grid',
            portfolioTarget: '/#category-infra',
          },
        ],
        focus:
          'Specialized lifestyle properties (EsportsParents, EsportsTeens, EsportsGirl) supporting families in gaming.',
        audience: 'Parents, young gamers, female competitive players',
        detailCopy:
          'Offers guidance, safe communities, and content tailored to parents navigating youth esports participation, teenage development, and female empowerment in gaming.',
      },
    ],
  },
];

export default function Ecosystem() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToPillar = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-black text-brand-off-white selection:bg-brand-green selection:text-black grain-overlay overflow-x-hidden">
      <CustomCursor />
      <div className="scanline" />
      <SiteNav />

      <main>
        {/* Hero / Ecosystem Overview */}
        <section className="relative overflow-hidden border-b border-white/5 bg-white/[.018] px-6 pt-36 pb-20 md:px-10 md:pt-44">
          <div className="signal-grid absolute inset-0 opacity-[.12]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(0,255,136,0.10),transparent_36%)] pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.32em] text-brand-green">
              / Ecosystem Architecture
            </div>
            <h1 className="max-w-5xl font-display text-5xl uppercase leading-none md:text-7xl lg:text-8xl tracking-tight">
              Four Primary Ecosystem Pillars.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/55">
              The EsportsX ecosystem is structured around four primary divisions designed to capture value across every phase of the gaming lifecycle.
            </p>

            {/* Quick Pillar Navigation & 3D Portfolio Shortcut */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              {ECOSYSTEM_PILLARS.map((pillar) => (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => scrollToPillar(pillar.id)}
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-brand-black/80 px-5 py-2.5 font-mono text-[10px] uppercase tracking-widest text-white/75 transition hover:border-white/35 hover:text-white cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: pillar.accent }}
                  />
                  {pillar.code}: {pillar.title.replace(' Division', '').replace(' Expansion', '')}
                </button>
              ))}
              <Link
                to="/#portfolio"
                className="inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-2.5 font-mono text-[10px] font-bold uppercase tracking-widest text-black transition hover:bg-white whitespace-nowrap shrink-0"
              >
                Open 3D Portfolio Grid
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Four Primary Pillars */}
        {ECOSYSTEM_PILLARS.map((pillar, pillarIdx) => (
          <section
            key={pillar.id}
            id={pillar.id}
            className={`px-6 py-24 md:px-10 border-b border-white/5 ${
              pillarIdx % 2 === 1 ? 'bg-white/[.012]' : ''
            }`}
          >
            <div className="mx-auto max-w-7xl">
              {/* Division Header */}
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-12 pb-8 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-lg border bg-white/[0.03]"
                      style={{ color: pillar.accent, borderColor: `${pillar.accent}44` }}
                    >
                      {pillar.icon}
                    </span>
                    <span
                      className="font-mono text-[10px] uppercase tracking-[0.28em]"
                      style={{ color: pillar.accent }}
                    >
                      / {pillar.code} · {pillar.subtitle}
                    </span>
                  </div>
                  <h2 className="font-display text-4xl uppercase leading-none md:text-6xl tracking-tight">
                    {pillar.title}
                  </h2>
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/55">
                    {pillar.description}
                  </p>
                </div>

                <Link
                  to={pillar.categoryAnchor}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 font-mono text-[10px] uppercase tracking-widest text-white/75 transition hover:border-white/40 hover:text-white whitespace-nowrap shrink-0 self-start lg:self-end"
                >
                  View 3D Division Cards
                  <ArrowUpRight className="h-3.5 w-3.5" style={{ color: pillar.accent }} />
                </Link>
              </div>

              {/* Property Matrix Table */}
              <div className="overflow-x-auto rounded-2xl border border-white/10 bg-brand-smoke/40 mb-10">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/[0.02]">
                      <th className="py-4 px-6 font-mono text-[10px] uppercase tracking-widest text-white/40 w-[24%]">
                        Property Name
                      </th>
                      <th className="py-4 px-6 font-mono text-[10px] uppercase tracking-widest text-white/40 w-[46%]">
                        Primary Focus &amp; Strategic Function
                      </th>
                      <th className="py-4 px-6 font-mono text-[10px] uppercase tracking-widest text-white/40 w-[30%]">
                        Target Audience
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {pillar.properties.map((row) => (
                      <tr
                        key={row.propertyDisplay}
                        className="transition-colors hover:bg-white/[0.025]"
                      >
                        <td className="py-5 px-6 align-top">
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
                            {row.links.map((link, idx) => (
                              <React.Fragment key={link.label}>
                                {idx > 0 && (
                                  <span className="text-white/30 font-mono text-xs">&amp;</span>
                                )}
                                <Link
                                  to={link.portfolioTarget}
                                  className="inline-flex items-center gap-1.5 font-display text-xl uppercase tracking-wide transition-colors hover:underline underline-offset-4"
                                  style={{ color: pillar.accent }}
                                  title={`Jump to ${link.label} 3D portfolio card`}
                                >
                                  {link.label}
                                  <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
                                </Link>
                              </React.Fragment>
                            ))}
                          </div>
                        </td>
                        <td className="py-5 px-6 align-top text-sm leading-relaxed text-white/70">
                          {row.focus}
                        </td>
                        <td className="py-5 px-6 align-top text-sm leading-relaxed text-white/45">
                          {row.audience}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Detailed Operational Breakdown Cards */}
              <div className="grid gap-4 md:grid-cols-2">
                {pillar.properties.map((item, idx) => (
                  <motion.div
                    key={item.propertyDisplay}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.04 }}
                    className="rounded-2xl border border-white/10 bg-brand-black/80 p-6 flex flex-col justify-between transition hover:border-white/25"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="font-display text-2xl uppercase tracking-wide text-white">
                          {item.propertyDisplay}
                        </h3>
                        <span
                          className="font-mono text-[10px] uppercase tracking-widest tabular-nums shrink-0"
                          style={{ color: pillar.accent }}
                        >
                          0{idx + 1}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-white/55">{item.detailCopy}</p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap items-center gap-3">
                      {item.links.map((link) => (
                        <Link
                          key={link.label}
                          to={link.portfolioTarget}
                          className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest transition-colors hover:text-white"
                          style={{ color: pillar.accent }}
                        >
                          {link.label} 3D Card
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Innovation Engine: EsportsX Venture Studio */}
        <section className="border-b border-white/5 bg-brand-green/[.02] px-6 py-24 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-2xl border border-white/10 bg-brand-black p-8 md:p-12">
              <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <Rocket className="h-5 w-5 text-brand-green" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-brand-green">
                      / Innovation Engine
                    </span>
                  </div>
                  <h2 className="font-display text-4xl uppercase leading-none md:text-6xl tracking-tight">
                    EsportsX Venture Studio
                  </h2>
                  <p className="mt-6 text-base md:text-lg leading-relaxed text-white/60">
                    Operating under National Brand Group, the EsportsX Venture Studio acts as an internal incubation engine that identifies, funds, and accelerates early-stage startups across AI gaming tools, EdTech, creator platforms, and gaming infrastructure.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-4">
                  <Link
                    to="/#venture"
                    className="inline-flex items-center gap-3 rounded-full bg-brand-green px-7 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white whitespace-nowrap shrink-0"
                  >
                    Explore Venture Studio
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/model"
                    className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white transition hover:border-brand-green/60 hover:text-brand-green whitespace-nowrap shrink-0"
                  >
                    See The EsportsX Model
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Summary & Outlook */}
        <section className="relative overflow-hidden px-6 py-28 md:px-10">
          <div className="signal-grid absolute inset-0 opacity-[.12]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(0,255,136,.14),transparent_38%)] pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.32em] text-brand-green">
              <Layers className="h-3.5 w-3.5" />
              Strategic Summary &amp; Outlook
            </div>
            <h2 className="font-display text-5xl uppercase leading-none md:text-7xl lg:text-8xl tracking-tight">
              4-Pillar Institutional Architecture.
            </h2>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/60">
              The EsportsX ecosystem combines defensible domain IP, scalable cloud infrastructure, and a comprehensive 4-pillar brand portfolio to address the key growth vectors of the digital entertainment economy.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/#portfolio"
                className="inline-flex items-center gap-3 rounded-full bg-brand-green px-7 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white whitespace-nowrap shrink-0"
              >
                Explore 3D Portfolio Cards
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/partner"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white transition hover:border-brand-green/60 hover:text-brand-green whitespace-nowrap shrink-0"
              >
                Partner With EsportsX
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
