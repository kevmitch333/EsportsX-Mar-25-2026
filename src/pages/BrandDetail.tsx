import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft,
  ExternalLink, 
  ChevronRight,
  X,
  Maximize2
} from 'lucide-react';
import { BRANDS } from '../constants';
import { BrandSparkline } from '../components/BrandSparkline';
import { CustomCursor } from '../components/CustomCursor';
import { SiteNav } from '../components/SiteNav';
import { SiteFooter } from '../components/SiteFooter';
import { useLanguage } from '../context/LanguageContext';

const HeroGeo = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <pattern id="grid-detail" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.1" />
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#grid-detail)" />
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

export default function BrandDetail() {
  const { id } = useParams();
  const brand = BRANDS.find(b => b.id === id);
  const { t, locale } = useLanguage();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!brand) {
    return (
      <div className="min-h-screen bg-brand-black flex flex-col text-white grain-overlay">
        <CustomCursor />
        <SiteNav />
        <div className="flex-1 flex flex-col items-center justify-center px-6 pt-24">
          <h1 className="text-4xl font-display mb-4 uppercase">{t.brandDetail.notFound}</h1>
          <Link to="/#portfolio" className="text-brand-green font-mono uppercase tracking-widest hover:underline">
            {t.brandDetail.backToPortfolio}
          </Link>
        </div>
        <SiteFooter />
      </div>
    );
  }

  const isEsportsLocalHi = locale === 'hi' && brand.id === 'esports-local';
  const displayName = isEsportsLocalHi ? t.landing.esportsLocalOverride.name : brand.name;
  const displayTagline = isEsportsLocalHi ? t.landing.esportsLocalOverride.tagline : brand.tagline;
  const displayDesc = isEsportsLocalHi ? t.landing.esportsLocalOverride.desc : brand.desc;

  return (
    <div className="min-h-screen bg-brand-black text-white selection:bg-brand-green selection:text-black grain-overlay cursor-none overflow-x-hidden">
      <CustomCursor />

      {/* Scanline Effect */}
      <div className="scanline" />

      {/* Global Navigation */}
      <SiteNav />

      {/* Hero Section */}
      <section className="relative pt-48 pb-20 px-6 md:px-12 overflow-hidden border-b border-white/5">
        <HeroGeo />
        <div 
          className="absolute top-0 right-0 w-1/2 h-full blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none opacity-10" 
          style={{ backgroundColor: brand.color }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/ecosystem"
              className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-white/50 hover:text-brand-green transition-colors mb-8 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              {t.brandDetail.backToEcosystem}
            </Link>
            <div className="flex items-center gap-4 mb-10">
              <div 
                className="p-5 rounded-xl bg-white/5 border border-white/10 text-3xl" 
                style={{ color: brand.color }}
              >
                {brand.icon}
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 block mb-1">
                  / {t.brandDetail.categoryLabels[brand.category as keyof typeof t.brandDetail.categoryLabels] || brand.category} · {t.brandDetail.ecosystemProperty}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-green">
                  {brand.domain}
                </span>
              </div>
            </div>
            
            <h1 className="font-display text-6xl md:text-9xl leading-[0.85] mb-10 tracking-tight uppercase group cursor-default">
              <span className="relative inline-block">
                {displayName}
                <span className="absolute inset-0 text-brand-green opacity-0 group-hover:opacity-70 group-hover:animate-glitch-1 pointer-events-none">{displayName}</span>
              </span>
            </h1>
            
            <p className="text-white/80 max-w-3xl text-2xl md:text-3xl leading-relaxed mb-16 italic font-light">
              "{displayTagline}"
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: brand.color }} />
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">{t.brandDetail.strategicOverview}</h3>
                </div>
                <p className="text-white/50 text-lg leading-relaxed mb-10">
                  {displayDesc}
                </p>
                
                <div className="flex flex-wrap items-center gap-6">
                  <a 
                    href={`https://${brand.domain}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-8 py-4 font-mono font-bold text-[10px] uppercase tracking-widest transition-all rounded-full"
                    style={{ backgroundColor: brand.color, color: '#000' }}
                  >
                    {t.brandDetail.launchPlatform}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-px bg-white/20" />
                    <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest">{brand.domain}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="font-mono text-[11px] uppercase tracking-widest text-white/40 mb-4">{t.brandDetail.growthLabel}</div>
                <div className="mb-6">
                  <BrandSparkline brand={brand} />
                </div>
                <div className="font-mono text-[11px] uppercase tracking-widest text-white/40 mb-6">{t.brandDetail.metricsLabel}</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {brand.backInfo?.rows.map((row, idx) => (
                    <div key={idx} className="p-6 bg-white/[0.02] border border-white/10 rounded-xl group hover:border-white/20 transition-colors">
                      <div className="text-[9px] font-mono uppercase tracking-widest text-white/30 mb-3">{row.label}</div>
                      <div className="font-display text-2xl tracking-wide uppercase group-hover:text-brand-green transition-colors">{row.val}</div>
                    </div>
                  ))}
                  {brand.stats && Object.entries(brand.stats).map(([key, val]) => (
                    <div key={key} className="p-6 bg-white/[0.02] border border-white/10 rounded-xl group hover:border-white/20 transition-colors">
                      <div className="text-[9px] font-mono uppercase tracking-widest text-white/30 mb-3">{key.replace('_', ' ')}</div>
                      <div className="font-display text-2xl tracking-wide uppercase group-hover:text-brand-green transition-colors">{val as string}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery Section */}
      {brand.images && brand.images.length > 0 && (
        <section className="py-24 px-6 md:px-12 border-b border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: brand.color }} />
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">{t.brandDetail.brandAssets}</h3>
              </div>
              <h2 className="font-display text-4xl uppercase tracking-tight">{t.brandDetail.visualGallery}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {brand.images.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative aspect-[3/2] overflow-hidden rounded-xl bg-white/5 border border-white/10 cursor-none"
                  onClick={() => setSelectedImage(img)}
                >
                  <img 
                    src={img} 
                    alt={`${displayName} asset ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center text-black scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Detailed Analysis Section */}
      <section className="py-24 px-6 md:px-12 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 pb-8 border-b border-white/5">
            <h2 className="font-display text-4xl uppercase mb-4 tracking-wide">{t.brandDetail.integrationTitle}</h2>
            <p className="text-white/40 font-mono text-xs uppercase tracking-widest">{t.brandDetail.integrationSub}</p>
          </div>

          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-start">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-green pt-2">{t.brandDetail.opportunityKicker}</div>
              <p className="text-white/60 text-xl leading-relaxed font-light">
                {displayDesc} {displayName} {t.brandDetail.opportunitySuffix}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-10 border border-white/5 bg-brand-smoke/50 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-green/30" />
                <h3 className="font-display text-2xl uppercase mb-5 tracking-wide">{t.brandDetail.marketDynamics}</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {displayTagline}. {t.brandDetail.marketDynamicsSuffix}
                </p>
              </div>
              <div className="p-10 border border-white/5 bg-brand-smoke/50 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-green/30" />
                <h3 className="font-display text-2xl uppercase mb-5 tracking-wide">{t.brandDetail.networkEffects}</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {t.brandDetail.networkEffectsCopy}
                </p>
              </div>
            </div>

            <div className="pt-12 text-center">
              <Link 
                to="/"
                className="inline-flex items-center gap-4 text-white/40 hover:text-brand-green transition-colors font-mono text-xs uppercase tracking-[0.3em]"
              >
                {t.brandDetail.exploreMore}
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 bg-brand-black/95 backdrop-blur-md cursor-none"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Selected asset"
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
              <button
                className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors flex items-center gap-2 font-mono text-xs uppercase tracking-widest"
                onClick={() => setSelectedImage(null)}
              >
                {t.brandDetail.close} <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <SiteFooter />
    </div>
  );
}
