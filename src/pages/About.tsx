import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Cpu,
  ShieldCheck,
  Zap,
  Trophy,
  GraduationCap,
  Building2,
  Rocket,
  TrendingUp,
  Globe,
} from 'lucide-react';
import { CustomCursor } from '../components/CustomCursor';
import { SiteNav } from '../components/SiteNav';
import { SiteFooter } from '../components/SiteFooter';

const STRATEGIC_PILLARS = [
  {
    num: '01',
    title: 'Brand Development',
    desc: 'EsportsX identifies, acquires, and develops premium domain properties into fully realized brands across the gaming and esports ecosystem. Every brand in our portfolio is built with institutional-grade positioning from day one.',
  },
  {
    num: '02',
    title: 'Strategic Partnerships',
    desc: 'We connect brands, universities, and technology companies with the right properties, audiences, and activation platforms inside competitive gaming. Our relationships span the full spectrum from collegiate athletics to major entertainment.',
  },
  {
    num: '03',
    title: 'Ecosystem Building',
    desc: "EsportsX doesn't just occupy the gaming space — it architects it. Our divisions cover competitive gaming, collegiate education, regional networks, and creator ecosystems, giving partners a single entry point into a unified platform.",
  },
];

const FLYWHEEL_CARDS = [
  {
    title: 'AI-Enabled Analytics',
    desc: 'AI-powered performance analytics, gameplay evaluation, and intelligent automation integrated across portfolio operations — creating compounding advantages competitors cannot replicate.',
    icon: <Cpu className="w-8 h-8 text-brand-green" />,
  },
  {
    title: 'Domain IP Fortress',
    desc: '250+ premium esports domains valued at $75–100M, including every Power 5 university and Ivy League. A defensible, appreciating strategic asset.',
    icon: <ShieldCheck className="w-8 h-8 text-brand-green" />,
  },
  {
    title: 'Ecosystem Flywheel',
    desc: '22+ portfolio companies across competition, education, media, and infrastructure create compounding network effects where every division amplifies the whole.',
    icon: <Zap className="w-8 h-8 text-brand-green" />,
  },
];

const STAKEHOLDER_GROUPS = [
  {
    title: 'Competitive Players',
    desc: 'Accessing structured leagues, talent pipelines, and monetization frameworks.',
    icon: <Trophy className="w-5 h-5 text-brand-green" />,
  },
  {
    title: 'Educational Institutions',
    desc: 'Launching accredited varsity esports programs, K-12 curricula, and campus facilities.',
    icon: <GraduationCap className="w-5 h-5 text-brand-green" />,
  },
  {
    title: 'Commercial Brands',
    desc: 'Engaging digitally native youth audiences through targeted sponsorships and authentic integrations.',
    icon: <Building2 className="w-5 h-5 text-brand-green" />,
  },
  {
    title: 'Technology Innovators',
    desc: 'Incubating early-stage gaming, EdTech, and AI startups through the venture studio.',
    icon: <Rocket className="w-5 h-5 text-brand-green" />,
  },
  {
    title: 'Investors',
    desc: 'Securing exposure to a scalable, diversified digital gaming ecosystem with defensible IP.',
    icon: <TrendingUp className="w-5 h-5 text-brand-green" />,
  },
];

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black text-brand-off-white selection:bg-brand-green selection:text-black grain-overlay overflow-x-hidden">
      <CustomCursor />
      <div className="scanline" />
      <SiteNav />

      <main>
        {/* Where Strategy Meets Competition + Ecosystem Flywheel */}
        <section className="relative overflow-hidden border-b border-white/5 bg-brand-smoke px-6 pt-36 pb-24 md:px-12 md:pt-44">
          <div className="signal-grid absolute inset-0 opacity-[.10]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(0,255,136,0.06)_0%,transparent_60%)] pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mb-6 text-center font-mono text-[10px] uppercase tracking-[0.32em] text-brand-green">
              / About Us
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-5xl md:text-8xl uppercase tracking-tight mb-20 text-center leading-[0.9]"
            >
              Where Strategy<br />Meets Competition.
            </motion.h1>

            {/* 01 Brand Development -> 03 Ecosystem Building */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
              {STRATEGIC_PILLARS.map((pillar, i) => (
                <motion.div
                  key={pillar.num}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="pt-8 border-t border-brand-mid"
                >
                  <div className="font-mono text-xs text-brand-green uppercase tracking-widest mb-6">
                    {pillar.num}
                  </div>
                  <h2 className="font-display text-2xl uppercase mb-4 tracking-wide">
                    {pillar.title}
                  </h2>
                  <p className="text-brand-light text-sm leading-relaxed">{pillar.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* AI-Enabled Analytics -> Ecosystem Flywheel */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
              {FLYWHEEL_CARDS.map((item, i) => (
                <div
                  key={item.title}
                  className="p-8 border border-white/10 bg-brand-black/60 rounded-xl group hover:border-brand-green/30 transition-colors"
                >
                  <div className="mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="font-display text-2xl uppercase mb-4 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Executive Overview & Core Architecture */}
        <section className="border-b border-white/5 px-6 py-24 md:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] mb-16 items-start">
              <div>
                <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.32em] text-brand-green">
                  / Core Architecture
                </div>
                <h2 className="font-display text-5xl uppercase leading-none md:text-7xl tracking-tight">
                  Executive Overview &amp; Core Architecture
                </h2>
              </div>

              <div className="space-y-6 text-base md:text-lg leading-relaxed text-white/65">
                <p>
                  EsportsX operates as a multi-layered platform designed to unify competitive gaming, educational curriculum, artificial intelligence innovation, and global market expansion under its parent company,{' '}
                  <strong className="text-white font-medium">National Brand Group (NBG)</strong>. The organization addresses systemic vulnerabilities in the esports landscape—such as publisher monopolies, fragmented regional ecosystems, and financial instability—by deploying a hybrid business model that integrates{' '}
                  <strong className="text-white font-medium">strategic consulting</strong>,{' '}
                  <strong className="text-white font-medium">product creation</strong>, and an{' '}
                  <strong className="text-white font-medium">AI-driven venture studio</strong>.
                </p>
              </div>
            </div>

            <div className="mb-8 font-mono text-[11px] uppercase tracking-[0.25em] text-white/50">
              EsportsX serves five primary stakeholder groups:
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {STAKEHOLDER_GROUPS.map((group, idx) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-brand-green/30 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      {group.icon}
                      <span className="font-mono text-[10px] text-white/20 tabular-nums">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl uppercase tracking-wide mb-3">
                      {group.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/50">{group.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Asset Foundation: The 300+ Brand Microcosm */}
        <section className="relative overflow-hidden bg-brand-green/[.02] px-6 py-24 md:px-12">
          <div className="signal-grid absolute inset-0 opacity-[.10]" />
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="rounded-2xl border border-brand-green/20 bg-brand-black/90 p-8 md:p-14">
              <div className="grid gap-12 lg:grid-cols-[1.15fr_.85fr] items-center">
                <div>
                  <div className="mb-5 font-mono text-[10px] uppercase tracking-[0.32em] text-brand-green">
                    / 02 · Strategic Asset Foundation
                  </div>
                  <h2 className="font-display text-4xl uppercase leading-none md:text-6xl tracking-tight mb-8">
                    Strategic Asset Foundation: The 300+ Brand Microcosm
                  </h2>
                  <p className="text-base md:text-lg leading-relaxed text-white/65">
                    An irreplaceable foundation of the EsportsX ecosystem is its proprietary digital asset portfolio, comprising{' '}
                    <strong className="text-white font-medium">
                      over 300 premium domain names and brand properties
                    </strong>
                    . This portfolio provides defensive barriers to entry, immediate market presence, and low-cost customer acquisition channels across international territories, Power 5 university athletic programs, metropolitan regions, and specialized industry verticals.
                  </p>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <Link
                      to="/ecosystem"
                      className="inline-flex items-center gap-3 rounded-full bg-brand-green px-7 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white whitespace-nowrap shrink-0"
                    >
                      Explore Ecosystem Pillars
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      to="/model"
                      className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white transition hover:border-brand-green/60 hover:text-brand-green whitespace-nowrap shrink-0"
                    >
                      The EsportsX Model
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      to="/partner"
                      className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white transition hover:border-brand-green/60 hover:text-brand-green whitespace-nowrap shrink-0"
                    >
                      Partner With Us
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
                    <div className="font-display text-4xl text-brand-green mb-2 tabular-nums">
                      300+
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                      Domain &amp; Brand Properties
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
                    <div className="font-display text-4xl text-brand-green mb-2">
                      Power 5
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                      University Athletic Footprint
                    </div>
                  </div>
                  <div className="sm:col-span-2 rounded-xl border border-white/10 bg-white/[0.02] p-6 flex items-start gap-4">
                    <Globe className="w-6 h-6 text-brand-green shrink-0 mt-1" />
                    <div>
                      <div className="font-display text-xl uppercase tracking-wide mb-1">
                        Defensible Market Entry
                      </div>
                      <p className="text-xs leading-relaxed text-white/45">
                        Immediate brand authority across international territories, metropolitan centers, and specialized industry verticals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
