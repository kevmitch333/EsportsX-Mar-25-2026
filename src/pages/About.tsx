import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Cpu, ShieldCheck, Zap, Globe } from 'lucide-react';
import { CustomCursor } from '../components/CustomCursor';
import { SiteNav } from '../components/SiteNav';
import { SiteFooter } from '../components/SiteFooter';
import { useLanguage } from '../context/LanguageContext';

const FLYWHEEL_ICONS = [
  <Cpu key="cpu" className="w-8 h-8 text-brand-green" />,
  <ShieldCheck key="shield" className="w-8 h-8 text-brand-green" />,
  <Zap key="zap" className="w-8 h-8 text-brand-green" />,
];

export default function About() {
  const { t } = useLanguage();

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
              {t.about.kicker}
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-5xl md:text-8xl uppercase tracking-tight mb-20 text-center leading-[0.9]"
            >
              {t.about.heroLine1}<br />{t.about.heroLine2}
            </motion.h1>

            {/* 01 Brand Development -> 03 Ecosystem Building */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
              {t.about.strategicPillars.map((pillar, i) => (
                <motion.div
                  key={pillar.num}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="pt-8 border-t border-brand-mid"
                >
                  <div className="font-mono text-xs text-brand-green uppercase tracking-widest mb-6 tabular-nums">
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
              {t.about.flywheelCards.map((item, i) => (
                <div
                  key={i}
                  className="p-8 border border-white/10 bg-brand-black/60 rounded-xl group hover:border-brand-green/30 transition-colors"
                >
                  <div className="mb-6 group-hover:scale-110 transition-transform">{FLYWHEEL_ICONS[i]}</div>
                  <h3 className="font-display text-2xl uppercase mb-4 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
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
                    {t.about.assetsKicker}
                  </div>
                  <h2 className="font-display text-4xl uppercase leading-none md:text-6xl tracking-tight mb-8">
                    {t.about.assetsTitle}
                  </h2>
                  <p className="text-base md:text-lg leading-relaxed text-white/65">
                    {t.about.assetsParagraphLead}{' '}
                    <strong className="text-white font-medium">
                      {t.about.assetsParagraphHighlight}
                    </strong>
                    {t.about.assetsParagraphTail}
                  </p>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <Link
                      to="/ecosystem"
                      className="inline-flex items-center gap-3 rounded-full bg-brand-green px-7 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white whitespace-nowrap shrink-0"
                    >
                      {t.about.ctaEcosystem}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      to="/model"
                      className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white transition hover:border-brand-green/60 hover:text-brand-green whitespace-nowrap shrink-0"
                    >
                      {t.about.ctaModel}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      to="/partner"
                      className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white transition hover:border-brand-green/60 hover:text-brand-green whitespace-nowrap shrink-0"
                    >
                      {t.about.ctaPartner}
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
                      {t.about.statDomainsLabel}
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
                    <div className="font-display text-4xl text-brand-green mb-2">
                      Power 5
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                      {t.about.statUniversityLabel}
                    </div>
                  </div>
                  <div className="sm:col-span-2 rounded-xl border border-white/10 bg-white/[0.02] p-6 flex items-start gap-4">
                    <Globe className="w-6 h-6 text-brand-green shrink-0 mt-1" />
                    <div>
                      <div className="font-display text-xl uppercase tracking-wide mb-1">
                        {t.about.defensibleTitle}
                      </div>
                      <p className="text-xs leading-relaxed text-white/45">
                        {t.about.defensibleDesc}
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
