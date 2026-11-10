import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, ChevronDown, Globe } from 'lucide-react';
import { SUPPORTED_LANGUAGES, Locale } from '../i18n/translations';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

interface LanguageSwitcherProps {
  align?: 'left' | 'right' | 'center';
  compact?: boolean;
  onSelectComplete?: () => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  align = 'right',
  compact = false,
  onSelectComplete,
}) => {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeLang =
    SUPPORTED_LANGUAGES.find((item) => item.code === locale) || SUPPORTED_LANGUAGES[0];

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        const focusedIndex = optionRefs.current.findIndex((el) => el === document.activeElement);
        const total = SUPPORTED_LANGUAGES.length;
        const nextIndex =
          event.key === 'ArrowDown'
            ? (focusedIndex + 1 + total) % total
            : (focusedIndex - 1 + total) % total;
        optionRefs.current[nextIndex]?.focus();
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  const handleSelect = (code: Locale) => {
    setLocale(code);
    setOpen(false);
    triggerRef.current?.focus();
    onSelectComplete?.();
  };

  const alignmentClass =
    align === 'center'
      ? 'left-1/2 -translate-x-1/2'
      : align === 'left'
        ? 'left-0'
        : 'right-0';

  return (
    <div ref={containerRef} className="relative inline-flex shrink-0">
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.nav.switchLanguageAria}
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          'inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.03] font-mono uppercase tracking-wider text-white/85 transition-colors hover:border-brand-green/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green whitespace-nowrap shrink-0 cursor-pointer',
          compact ? 'px-2.5 py-1.5 text-[10px]' : 'px-3 py-1.5 text-[10px] xl:text-[11px]'
        )}
      >
        <Globe className="h-3.5 w-3.5 text-brand-green shrink-0" aria-hidden="true" />
        <span>{activeLang.shortLabel}</span>
        <ChevronDown
          className={cn(
            'h-3 w-3 text-white/55 transition-transform duration-150 shrink-0',
            open && 'rotate-180'
          )}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="listbox"
            aria-label={t.nav.languageLabel}
            initial={{ opacity: 0, y: -4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              'absolute top-full mt-2 w-56 rounded-xl border border-white/15 bg-[#111111] p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-xl z-[70]',
              alignmentClass
            )}
          >
            <div className="px-3 py-2 border-b border-white/5 mb-1">
              <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">
                {t.nav.languageLabel} · EsportsX
              </div>
            </div>

            {SUPPORTED_LANGUAGES.map((lang, idx) => {
              const isSelected = lang.code === locale;
              return (
                <button
                  key={lang.code}
                  ref={(el) => {
                    optionRefs.current[idx] = el;
                  }}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(lang.code)}
                  className={cn(
                    'flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-green',
                    isSelected
                      ? 'bg-brand-green/10 text-brand-green'
                      : 'text-white/80 hover:bg-white/[0.05] hover:text-white'
                  )}
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium leading-tight">
                        {lang.nativeName}
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-white/40">
                        {lang.code.toUpperCase()}
                      </span>
                    </div>
                    <div className="mt-0.5 font-mono text-[9px] uppercase tracking-wider text-white/40">
                      {lang.scopeNoteLocalized[locale]}
                    </div>
                  </div>
                  {isSelected && <Check className="h-3.5 w-3.5 shrink-0 text-brand-green" aria-hidden="true" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
