import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

type NavItem =
  | { key: 'ecosystem' | 'model' | 'partner' | 'about'; type: 'route'; path: string }
  | { key: 'leadership' | 'contact'; type: 'section'; sectionId: string };

const NAV_ITEMS: NavItem[] = [
  { key: 'ecosystem', type: 'route', path: '/ecosystem' },
  { key: 'model', type: 'route', path: '/model' },
  { key: 'partner', type: 'route', path: '/partner' },
  { key: 'about', type: 'route', path: '/about' },
  { key: 'leadership', type: 'section', sectionId: 'leadership' },
  { key: 'contact', type: 'section', sectionId: 'contact' },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t, locale } = useLanguage();

  const isHome = location.pathname === '/';
  const isRouteActive = (path: string) =>
    location.pathname === path || (path === '/about' && location.pathname === '/about-us');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  const handleSectionClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (isHome) {
      const element = document.getElementById(sectionId);
      if (element) {
        const navHeight = scrolled ? 80 : 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    setMobileMenuOpen(false);
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10 xl:px-12',
        scrolled || !isHome
          ? 'py-4 bg-brand-black/90 backdrop-blur-xl border-b border-white/10'
          : 'py-7 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
        <Link
          to="/"
          onClick={handleLogoClick}
          className="font-display text-2xl tracking-wider flex items-center gap-1 whitespace-nowrap shrink-0"
        >
          ESPORTS<span className="text-brand-green">X</span>
        </Link>

        {/* Desktop Nav Links */}
        <div
          className={cn(
            'hidden lg:flex items-center',
            locale === 'hi' ? 'gap-5 xl:gap-7' : 'gap-6 xl:gap-8'
          )}
        >
          {NAV_ITEMS.map((item) => {
            const label = t.nav[item.key];
            return item.type === 'route' ? (
              <Link
                key={item.key}
                to={item.path}
                className={cn(
                  'text-[11px] xl:text-xs font-mono uppercase transition-colors whitespace-nowrap shrink-0',
                  locale === 'hi' ? 'tracking-wide' : 'tracking-widest',
                  isRouteActive(item.path)
                    ? 'text-brand-green'
                    : 'text-white/60 hover:text-brand-green'
                )}
              >
                {label}
              </Link>
            ) : (
              <a
                key={item.key}
                href={`/#${item.sectionId}`}
                onClick={(e) => handleSectionClick(e, item.sectionId)}
                className={cn(
                  'text-[11px] xl:text-xs font-mono uppercase text-white/60 hover:text-brand-green transition-colors whitespace-nowrap shrink-0',
                  locale === 'hi' ? 'tracking-wide' : 'tracking-widest'
                )}
              >
                {label}
              </a>
            );
          })}
        </div>

        {/* Desktop Right Action Zone */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <LanguageSwitcher align="right" />
          <button
            type="button"
            onClick={(e) => handleSectionClick(e, 'contact')}
            className={cn(
              'bg-brand-green text-black px-5 py-2 text-[11px] xl:text-xs font-mono font-bold uppercase hover:bg-brand-green/80 transition-all rounded-full whitespace-nowrap shrink-0 cursor-pointer',
              locale === 'hi' ? 'tracking-wide' : 'tracking-widest'
            )}
          >
            {t.nav.connect}
          </button>
        </div>

        {/* Mobile / Tablet Controls */}
        <div className="flex lg:hidden items-center gap-2 shrink-0">
          <LanguageSwitcher align="right" compact />
          <button
            type="button"
            aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
            className="text-white z-50 p-2 -mr-2 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-brand-black z-40 flex flex-col items-center justify-center gap-7 lg:hidden px-6"
          >
            {NAV_ITEMS.map((item) => {
              const label = t.nav[item.key];
              return item.type === 'route' ? (
                <Link
                  key={item.key}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'text-2xl font-display uppercase tracking-widest transition-colors whitespace-nowrap',
                    isRouteActive(item.path)
                      ? 'text-brand-green'
                      : 'text-white hover:text-brand-green'
                  )}
                >
                  {label}
                </Link>
              ) : (
                <a
                  key={item.key}
                  href={`/#${item.sectionId}`}
                  onClick={(e) => handleSectionClick(e, item.sectionId)}
                  className="text-2xl font-display uppercase tracking-widest text-white hover:text-brand-green transition-colors whitespace-nowrap"
                >
                  {label}
                </a>
              );
            })}

            <div className="mt-2">
              <LanguageSwitcher
                align="center"
                onSelectComplete={() => setMobileMenuOpen(false)}
              />
            </div>

            <button
              type="button"
              onClick={(e) => handleSectionClick(e, 'contact')}
              className="mt-2 bg-brand-green text-black px-8 py-3 text-sm font-mono font-bold uppercase tracking-widest hover:bg-brand-green/80 transition-all rounded-full whitespace-nowrap cursor-pointer"
            >
              {t.nav.connect}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
