import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

type NavItem =
  | { label: string; type: 'section'; sectionId: string }
  | { label: string; type: 'route'; path: string };

const NAV_ITEMS: NavItem[] = [
  { label: 'Ecosystem', type: 'route', path: '/ecosystem' },
  { label: 'Model', type: 'route', path: '/model' },
  { label: 'Partner', type: 'route', path: '/partner' },
  { label: 'About Us', type: 'route', path: '/about' },
  { label: 'Leadership', type: 'section', sectionId: 'leadership' },
  { label: 'Contact', type: 'section', sectionId: 'contact' },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12',
        scrolled || !isHome
          ? 'py-4 bg-brand-black/90 backdrop-blur-xl border-b border-white/10'
          : 'py-8 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        <Link
          to="/"
          onClick={handleLogoClick}
          className="font-display text-2xl tracking-wider flex items-center gap-1 whitespace-nowrap shrink-0"
        >
          ESPORTS<span className="text-brand-green">X</span>
        </Link>

        <div className="hidden md:flex items-center gap-7 lg:gap-8">
          {NAV_ITEMS.map((item) =>
            item.type === 'route' ? (
              <Link
                key={item.label}
                to={item.path}
                className={cn(
                  'text-xs font-mono uppercase tracking-widest transition-colors whitespace-nowrap shrink-0',
                  isRouteActive(item.path)
                    ? 'text-brand-green'
                    : 'text-white/60 hover:text-brand-green'
                )}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={`/#${item.sectionId}`}
                onClick={(e) => handleSectionClick(e, item.sectionId)}
                className="text-xs font-mono uppercase tracking-widest text-white/60 hover:text-brand-green transition-colors whitespace-nowrap shrink-0"
              >
                {item.label}
              </a>
            )
          )}
          <button
            type="button"
            onClick={(e) => handleSectionClick(e, 'contact')}
            className="bg-brand-green text-black px-5 py-2 text-xs font-mono font-bold uppercase tracking-widest hover:bg-brand-green/80 transition-all rounded-full whitespace-nowrap shrink-0 cursor-pointer"
          >
            Connect
          </button>
        </div>

        <button
          type="button"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="md:hidden text-white z-50 p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-brand-black z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {NAV_ITEMS.map((item) =>
              item.type === 'route' ? (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'text-2xl font-display uppercase tracking-widest transition-colors whitespace-nowrap',
                    isRouteActive(item.path)
                      ? 'text-brand-green'
                      : 'text-white hover:text-brand-green'
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={`/#${item.sectionId}`}
                  onClick={(e) => handleSectionClick(e, item.sectionId)}
                  className="text-2xl font-display uppercase tracking-widest text-white hover:text-brand-green transition-colors whitespace-nowrap"
                >
                  {item.label}
                </a>
              )
            )}
            <button
              type="button"
              onClick={(e) => handleSectionClick(e, 'contact')}
              className="mt-4 bg-brand-green text-black px-8 py-3 text-sm font-mono font-bold uppercase tracking-widest hover:bg-brand-green/80 transition-all rounded-full whitespace-nowrap"
            >
              Connect
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
