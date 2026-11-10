import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield, Scale, FileText } from 'lucide-react';
import { CustomCursor } from '../components/CustomCursor';
import { SiteNav } from '../components/SiteNav';
import { SiteFooter } from '../components/SiteFooter';

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
            <h1 className="font-display text-6xl md:text-8xl uppercase tracking-tight mb-16">Legal <span className="text-brand-green">Framework</span></h1>
            
            <div className="space-y-24">
              {/* Privacy Policy */}
              <section id="privacy">
                <div className="flex items-center gap-4 mb-8">
                  <Shield className="w-8 h-8 text-brand-green" />
                  <h2 className="font-display text-3xl uppercase tracking-wider">Privacy Policy</h2>
                </div>
                <div className="prose prose-invert max-w-none text-white/60 leading-relaxed space-y-6 font-light">
                  <p>Last Updated: April 1, 2026</p>
                  <p>
                    EsportsX ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and interact with our ecosystem brands.
                  </p>
                  <h3 className="text-white font-mono text-sm uppercase tracking-widest mt-8">1. Information Collection</h3>
                  <p>
                    We collect information that you provide directly to us, such as when you fill out a contact form, subscribe to a newsletter, or engage with our venture studio. This may include your name, email address, and professional affiliation.
                  </p>
                  <h3 className="text-white font-mono text-sm uppercase tracking-widest mt-8">2. Use of Information</h3>
                  <p>
                    We use the information we collect to provide, maintain, and improve our services, to communicate with you about strategic opportunities, and to protect the security of our ecosystem.
                  </p>
                </div>
              </section>

              {/* Terms of Service */}
              <section id="terms">
                <div className="flex items-center gap-4 mb-8">
                  <Scale className="w-8 h-8 text-brand-green" />
                  <h2 className="font-display text-3xl uppercase tracking-wider">Terms of Service</h2>
                </div>
                <div className="prose prose-invert max-w-none text-white/60 leading-relaxed space-y-6 font-light">
                  <p>
                    By accessing or using the EsportsX website, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                  </p>
                  <h3 className="text-white font-mono text-sm uppercase tracking-widest mt-8">1. Intellectual Property</h3>
                  <p>
                    The content, features, and functionality of this website, including but not limited to the "Architecture of Competitive Gaming" framework and our "Domain IP Fortress," are owned by EsportsX and are protected by international copyright, trademark, and other intellectual property laws.
                  </p>
                  <h3 className="text-white font-mono text-sm uppercase tracking-widest mt-8">2. Strategic Assets</h3>
                  <p>
                    Our portfolio of 250+ premium domains and associated brand identities are strategic assets. Unauthorized use or reproduction of these assets is strictly prohibited.
                  </p>
                </div>
              </section>

              {/* Institutional Compliance */}
              <section id="compliance">
                <div className="flex items-center gap-4 mb-8">
                  <FileText className="w-8 h-8 text-brand-green" />
                  <h2 className="font-display text-3xl uppercase tracking-wider">Institutional Compliance</h2>
                </div>
                <p className="text-white/60 leading-relaxed font-light">
                  EsportsX operates with institutional-grade compliance standards. For specific inquiries regarding our legal framework or regulatory positioning, please contact our strategic legal division at <a href="mailto:legal@esportsx.com" className="text-brand-green hover:underline">legal@esportsx.com</a>.
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
