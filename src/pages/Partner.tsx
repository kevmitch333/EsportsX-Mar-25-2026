import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, BriefcaseBusiness, Handshake, Mail } from 'lucide-react';
import { CustomCursor } from '../components/CustomCursor';
import { SiteNav } from '../components/SiteNav';
import { SiteFooter } from '../components/SiteFooter';
import { PartnerInquiryModal } from '../components/PartnerInquiryModal';
import { useLanguage } from '../context/LanguageContext';

export default function Partner() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const [selectedFocus, setSelectedFocus] = useState<string | undefined>(undefined);
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openContactModal = (category?: string, focus?: string) => {
    setSelectedCategory(category);
    setSelectedFocus(focus);
    setContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-black text-brand-off-white selection:bg-brand-green selection:text-black grain-overlay overflow-x-hidden">
      <CustomCursor />
      <div className="scanline" />
      <SiteNav />

      <PartnerInquiryModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        initialCategory={selectedCategory}
        initialFocus={selectedFocus}
      />

      <main>
        {/* Partner With EsportsX Section */}
        <section className="relative overflow-hidden border-b border-white/5 px-6 pt-36 pb-24 md:px-10 md:pt-44">
          <div className="signal-grid absolute inset-0 opacity-[.12]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(0,255,136,0.10),transparent_36%)] pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.32em] text-brand-green">
              {t.partner.heroKicker}
            </div>

            <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
              <div>
                <h1 className="font-display text-5xl uppercase leading-none md:text-7xl lg:text-8xl tracking-tight">
                  {t.partner.heroTitle}
                </h1>
                <p className="mt-7 leading-relaxed text-white/55 text-lg">
                  {t.partner.heroDesc}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={() => openContactModal(undefined, 'Strategic Partnership')}
                    className="inline-flex items-center gap-3 rounded-full bg-brand-green px-7 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    {t.partner.ctaContactUs}
                  </button>
                  <Link
                    to="/model"
                    className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white transition hover:border-brand-green/60 hover:text-brand-green whitespace-nowrap shrink-0"
                  >
                    {t.partner.ctaExploreModel}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {t.partner.partnerCategories.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                    className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[.02] p-6 transition hover:-translate-y-1 hover:border-brand-green/30"
                  >
                    <div>
                      <Handshake className="mb-6 h-5 w-5 text-brand-green" />
                      <h2 className="font-display text-2xl uppercase tracking-wide">{item.title}</h2>
                      <p className="mt-3 text-sm leading-relaxed text-white/45">{item.desc}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => openContactModal(item.id, 'Strategic Partnership')}
                      className="mt-6 inline-flex items-center gap-2 self-start font-mono text-[10px] uppercase tracking-[0.2em] text-brand-green transition hover:text-white cursor-pointer"
                    >
                      {t.partner.inquireBtn}
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EsportsX Advisory Section */}
        <section className="border-b border-white/5 bg-white/[.018] px-6 py-24 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
              <div>
                <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.32em] text-brand-green">
                  {t.partner.advisoryKicker}
                </div>
                <h2 className="font-display text-5xl uppercase leading-none md:text-7xl tracking-tight">
                  {t.partner.advisoryTitle}
                </h2>
                <p className="mt-7 leading-relaxed text-white/50">
                  {t.partner.advisoryDesc}
                </p>
                <div className="mt-10">
                  <button
                    type="button"
                    onClick={() => openContactModal(undefined, 'Strategic Business Development')}
                    className="inline-flex items-center gap-3 rounded-full bg-brand-green px-7 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white cursor-pointer whitespace-nowrap shrink-0"
                  >
                    {t.partner.ctaAdvisory}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
                {t.partner.advisoryPillars.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => openContactModal(undefined, item.id)}
                    className="group bg-brand-black p-6 text-left transition hover:bg-white/[.025] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-green cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <BriefcaseBusiness className="h-5 w-5 text-brand-green" />
                      <span className="font-mono text-[10px] text-white/20 tabular-nums">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-2xl uppercase tracking-wide transition-colors group-hover:text-brand-green">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/45">{item.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Vision Section */}
        <section className="relative overflow-hidden border-t border-white/5 px-6 py-28 md:px-10">
          <div className="signal-grid absolute inset-0 opacity-[.12]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(0,255,136,.14),transparent_38%)] pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.32em] text-brand-green">
              {t.partner.visionKicker}
            </div>
            <h2 className="font-display text-6xl uppercase leading-none md:text-8xl lg:text-9xl tracking-tight">
              {t.partner.visionTitle}
            </h2>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/55">
              {t.partner.visionDesc}
            </p>
            <p className="mt-7 font-mono text-[10px] uppercase tracking-[.24em] text-brand-green">
              {t.partner.visionEquation}
            </p>
            <p className="mx-auto mt-8 max-w-3xl text-xl text-white/80">
              {t.partner.visionQuote}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => openContactModal(undefined, 'Strategic Partnership')}
                className="inline-flex items-center gap-3 rounded-full bg-brand-green px-7 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white cursor-pointer whitespace-nowrap shrink-0"
              >
                {t.partner.ctaInquiry}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <Link
                to="/#portfolio"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white transition hover:border-brand-green/60 hover:text-brand-green whitespace-nowrap shrink-0"
              >
                {t.partner.ctaPortfolio}
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
