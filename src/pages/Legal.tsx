import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield, Scale, FileText } from 'lucide-react';
import { CustomCursor } from '../components/CustomCursor';
import { SiteNav } from '../components/SiteNav';
import { SiteFooter } from '../components/SiteFooter';
import { useLanguage } from '../context/LanguageContext';

const HeroGeo = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <pattern id="grid-legal" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.1" />
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#grid-legal)" />
      <motion.path
        d="M 0 50 Q 25 40 50 50 T 100 50"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  </div>
);

export default function Legal() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black text-white selection:bg-brand-green selection:text-black grain-overlay cursor-none overflow-x-hidden">
      <CustomCursor />

      {/* Scanline Effect */}
      <div className="scanline" />

      <HeroGeo />

      {/* Global Navigation */}
      <SiteNav />

      <main className="pt-40 pb-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-6xl md:text-8xl uppercase tracking-tight mb-16">{t.legal.titleMain} <span className="text-brand-green">{t.legal.titleAccent}</span></h1>
            
            <div className="space-y-24">
              {/* Privacy Policy */}
              <section id="privacy">
                <div className="flex items-center gap-4 mb-8">
                  <Shield className="w-8 h-8 text-brand-green" />
                  <h2 className="font-display text-3xl uppercase tracking-wider">{t.legal.privacy}</h2>
                </div>
                <div className="prose prose-invert max-w-none text-white/60 leading-relaxed space-y-6 font-light">
                  <p>{t.legal.lastUpdated}</p>
                  <p>{t.legal.privacyIntro}</p>
                  <h3 className="text-white font-mono text-sm uppercase tracking-widest mt-8">{t.legal.collectionTitle}</h3>
                  <p>{t.legal.collectionDesc}</p>
                  <h3 className="text-white font-mono text-sm uppercase tracking-widest mt-8">{t.legal.useTitle}</h3>
                  <p>{t.legal.useDesc}</p>
                </div>
              </section>

              {/* Terms of Service */}
              <section id="terms">
                <div className="flex items-center gap-4 mb-8">
                  <Scale className="w-8 h-8 text-brand-green" />
                  <h2 className="font-display text-3xl uppercase tracking-wider">{t.legal.terms}</h2>
                </div>
                <div className="prose prose-invert max-w-none text-white/60 leading-relaxed space-y-6 font-light">
                  <p>{t.legal.termsIntro}</p>
                  <h3 className="text-white font-mono text-sm uppercase tracking-widest mt-8">{t.legal.ipTitle}</h3>
                  <p>{t.legal.ipDesc}</p>
                  <h3 className="text-white font-mono text-sm uppercase tracking-widest mt-8">{t.legal.assetsTitle}</h3>
                  <p>{t.legal.assetsDesc}</p>
                </div>
              </section>

              {/* Institutional Compliance */}
              <section id="compliance">
                <div className="flex items-center gap-4 mb-8">
                  <FileText className="w-8 h-8 text-brand-green" />
                  <h2 className="font-display text-3xl uppercase tracking-wider">{t.legal.compliance}</h2>
                </div>
                <p className="text-white/60 leading-relaxed font-light">
                  {t.legal.complianceLead} <a href="mailto:legal@esportsx.com" className="text-brand-green hover:underline">legal@esportsx.com</a>.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
