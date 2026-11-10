import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function SiteFooter() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleSectionLink = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    if (isHome) {
      const element = document.getElementById(sectionId);
      if (element) {
        const navHeight = window.scrollY > 50 ? 80 : 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navHeight;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <footer className="py-20 px-6 md:px-12 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <Link to="/" className="font-display text-3xl tracking-wider flex items-center gap-1 mb-8">
              ESPORTS<span className="text-brand-green">X</span>
            </Link>
            <p className="text-white/40 max-w-sm text-sm leading-relaxed mb-8">
              The institutional future of esports. A comprehensive portfolio of 22+ brands spanning competitive gaming, collegiate education, and AI innovation.
            </p>
            <div className="flex items-center gap-6">
              {[
                { name: 'Twitter', url: 'https://twitter.com/esportsx' },
                { name: 'LinkedIn', url: 'https://linkedin.com/company/esportsx' },
                { name: 'Discord', url: 'https://discord.gg/esportsx' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/20 hover:text-brand-green transition-colors font-mono text-[10px] uppercase tracking-widest"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-8">Ecosystem</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/ecosystem" className="text-white/40 hover:text-brand-green transition-colors text-xs font-mono uppercase tracking-widest">
                  Ecosystem Overview
                </Link>
              </li>
              <li>
                <Link to="/brand/college-esportsx" className="text-white/40 hover:text-brand-green transition-colors text-xs font-mono uppercase tracking-widest">
                  College EsportsX
                </Link>
              </li>
              <li>
                <Link to="/brand/esports-fc" className="text-white/40 hover:text-brand-green transition-colors text-xs font-mono uppercase tracking-widest">
                  EsportsFC
                </Link>
              </li>
              <li>
                <Link to="/brand/esports-f1" className="text-white/40 hover:text-brand-green transition-colors text-xs font-mono uppercase tracking-widest">
                  EsportsF1
                </Link>
              </li>
              <li>
                <Link to="/brand/esports-local" className="text-white/40 hover:text-brand-green transition-colors text-xs font-mono uppercase tracking-widest">
                  Esports Local
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-8">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-white/40 hover:text-brand-green transition-colors text-xs font-mono uppercase tracking-widest">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/model" className="text-white/40 hover:text-brand-green transition-colors text-xs font-mono uppercase tracking-widest">
                  Model
                </Link>
              </li>
              <li>
                <Link to="/partner" className="text-white/40 hover:text-brand-green transition-colors text-xs font-mono uppercase tracking-widest">
                  Partner
                </Link>
              </li>
              <li>
                <a
                  href="/#leadership"
                  onClick={(e) => handleSectionLink(e, 'leadership')}
                  className="text-white/40 hover:text-brand-green transition-colors text-xs font-mono uppercase tracking-widest"
                >
                  Leadership
                </a>
              </li>
              <li>
                <a
                  href="/#venture"
                  onClick={(e) => handleSectionLink(e, 'venture')}
                  className="text-white/40 hover:text-brand-green transition-colors text-xs font-mono uppercase tracking-widest"
                >
                  Venture Studio
                </a>
              </li>
              <li>
                <Link to="/legal" className="text-white/40 hover:text-brand-green transition-colors text-xs font-mono uppercase tracking-widest">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/legal" className="text-white/40 hover:text-brand-green transition-colors text-xs font-mono uppercase tracking-widest">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/20 font-mono text-[10px] uppercase tracking-widest">
            © 2026 EsportsX Ecosystem. All Rights Reserved.
          </div>
          <div className="flex items-center gap-8">
            <span className="text-white/20 font-mono text-[10px] uppercase tracking-widest">Institutional Grade</span>
            <span className="text-white/20 font-mono text-[10px] uppercase tracking-widest">Global Infrastructure</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
