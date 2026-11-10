import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { AlertCircle, ArrowRight, CheckCircle2, Mail, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import {
  PARTNER_ORGANIZATION_TYPES,
  INQUIRY_FOCUS_AREAS,
  TIMELINE_OPTIONS,
  PartnerOrgType,
  InquiryFocusArea,
  TimelineOption,
} from '../i18n/translations';

export { PARTNER_ORGANIZATION_TYPES, INQUIRY_FOCUS_AREAS, TIMELINE_OPTIONS };

export interface PartnerInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
  initialFocus?: string;
}

interface FormState {
  fullName: string;
  organization: string;
  role: string;
  email: string;
  phone: string;
  organizationType: string;
  focusArea: string;
  timeline: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const PartnerInquiryModal: React.FC<PartnerInquiryModalProps> = ({
  isOpen,
  onClose,
  initialCategory,
  initialFocus,
}) => {
  const firstInputRef = useRef<HTMLInputElement>(null);

  const buildInitialForm = (): FormState => ({
    fullName: '',
    organization: '',
    role: '',
    email: '',
    phone: '',
    organizationType:
      initialCategory &&
      PARTNER_ORGANIZATION_TYPES.includes(initialCategory as PartnerOrgType)
        ? initialCategory
        : PARTNER_ORGANIZATION_TYPES[0],
    focusArea:
      initialFocus && INQUIRY_FOCUS_AREAS.includes(initialFocus as InquiryFocusArea)
        ? initialFocus
        : INQUIRY_FOCUS_AREAS[0],
    timeline: TIMELINE_OPTIONS[0],
    message: '',
  });

  const { t } = useLanguage();
  const [form, setForm] = useState<FormState>(buildInitialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedSummary, setSubmittedSummary] = useState<FormState | null>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!isOpen) return;

    setSubmittedSummary(null);
    setErrors({});
    setForm((prev) => ({
      ...prev,
      organizationType:
        initialCategory &&
        PARTNER_ORGANIZATION_TYPES.includes(initialCategory as PartnerOrgType)
          ? initialCategory
          : PARTNER_ORGANIZATION_TYPES[0],
      focusArea:
        initialFocus && INQUIRY_FOCUS_AREAS.includes(initialFocus as InquiryFocusArea)
          ? initialFocus
          : INQUIRY_FOCUS_AREAS[0],
    }));

    const focusTimer = window.setTimeout(() => {
      firstInputRef.current?.focus();
    }, 60);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onCloseRef.current();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, initialCategory, initialFocus]);

  const updateField = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};

    if (form.fullName.trim().length < 2) {
      nextErrors.fullName = t.partner.modal.errors.fullName;
    }
    if (form.organization.trim().length < 2) {
      nextErrors.organization = t.partner.modal.errors.organization;
    }
    if (form.role.trim().length < 2) {
      nextErrors.role = t.partner.modal.errors.role;
    }
    if (!EMAIL_REGEX.test(form.email.trim())) {
      nextErrors.email = t.partner.modal.errors.email;
    }
    if (form.phone.trim()) {
      const digitCount = (form.phone.match(/\d/g) || []).length;
      const validChars = /^[+\d\s().-]{7,24}$/.test(form.phone.trim());
      if (!validChars || digitCount < 7) {
        nextErrors.phone = t.partner.modal.errors.phone;
      }
    }
    if (form.message.trim().length < 10) {
      nextErrors.message = t.partner.modal.errors.message;
    }

    return nextErrors;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setSubmittedSummary({
      ...form,
      fullName: form.fullName.trim(),
      organization: form.organization.trim(),
      role: form.role.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      message: form.message.trim(),
    });
  };

  const handleReset = () => {
    setSubmittedSummary(null);
    setErrors({});
    setForm(buildInitialForm());
    window.setTimeout(() => {
      firstInputRef.current?.focus();
    }, 40);
  };

  const buildMailtoHref = (summary: FormState) => {
    const subject = encodeURIComponent(
      `Institutional Inquiry: ${summary.organization} (${summary.focusArea})`
    );
    const body = encodeURIComponent(
      [
        `Name: ${summary.fullName}`,
        `Title / Role: ${summary.role}`,
        `Organization: ${summary.organization}`,
        `Organization Category: ${summary.organizationType}`,
        `Email: ${summary.email}`,
        summary.phone ? `Phone: ${summary.phone}` : null,
        `Primary Focus: ${summary.focusArea}`,
        `Target Timeline: ${summary.timeline}`,
        '',
        'Inquiry Details:',
        summary.message,
      ]
        .filter(Boolean)
        .join('\n')
    );
    return `mailto:info@esportsx.com?subject=${subject}&body=${body}`;
  };

  const getOrgLabel = (value: string) =>
    t.partner.modal.orgTypeLabels[value as PartnerOrgType] || value;
  const getFocusLabel = (value: string) =>
    t.partner.modal.focusAreaLabels[value as InquiryFocusArea] || value;
  const getTimelineLabel = (value: string) =>
    t.partner.modal.timelineLabels[value as TimelineOption] || value;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          className="fixed inset-0 z-[120] overflow-y-auto bg-black/80 backdrop-blur-md p-4 sm:p-6 flex items-start sm:items-center justify-center"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="partner-inquiry-modal-title"
            aria-describedby="partner-inquiry-modal-desc"
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="relative my-auto w-full max-w-2xl rounded-2xl border border-white/15 bg-[#101010] shadow-[0_32px_90px_rgba(0,0,0,0.85)] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-6 border-b border-white/10 bg-white/[0.02] px-6 py-5 sm:px-8 sm:py-6">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-brand-green mb-2">
                  {t.partner.modal.kicker}
                </div>
                <h2
                  id="partner-inquiry-modal-title"
                  className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-white leading-none"
                >
                  {t.partner.modal.title}
                </h2>
                <p
                  id="partner-inquiry-modal-desc"
                  className="mt-2 text-xs sm:text-sm text-white/55 leading-relaxed max-w-xl"
                >
                  {t.partner.modal.subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label={t.partner.modal.closeAria}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white/60 transition hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green cursor-pointer"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8">
              {submittedSummary ? (
                <div className="space-y-6">
                  <div className="rounded-xl border border-brand-green/30 bg-brand-green/[0.05] p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2
                        className="h-6 w-6 text-brand-green shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <div>
                        <h3 className="font-display text-2xl uppercase tracking-wide text-white">
                          {t.partner.modal.successTitle}
                        </h3>
                        <p className="mt-2 text-sm text-white/70 leading-relaxed">
                          {submittedSummary.fullName} —{' '}
                          <span className="text-white font-medium">
                            {submittedSummary.organization}
                          </span>{' '}
                          ({submittedSummary.email})
                        </p>
                      </div>
                    </div>
                  </div>

                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-xl border border-white/10 bg-brand-black p-5 text-sm">
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                        {t.partner.modal.orgCategory}
                      </dt>
                      <dd className="mt-1 text-white/90">{getOrgLabel(submittedSummary.organizationType)}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                        {t.partner.modal.focusArea}
                      </dt>
                      <dd className="mt-1 text-white/90">{getFocusLabel(submittedSummary.focusArea)}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                        {t.partner.modal.role}
                      </dt>
                      <dd className="mt-1 text-white/90">
                        {submittedSummary.fullName} · {submittedSummary.role}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                        {t.partner.modal.timeline}
                      </dt>
                      <dd className="mt-1 text-white/90">{getTimelineLabel(submittedSummary.timeline)}</dd>
                    </div>
                  </dl>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/10">
                    <a
                      href={buildMailtoHref(submittedSummary)}
                      className="inline-flex items-center gap-2.5 rounded-full bg-brand-green px-6 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-black transition hover:bg-white whitespace-nowrap shrink-0"
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      {t.partner.modal.sendViaEmail}
                    </a>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="rounded-full border border-white/15 px-5 py-2.5 font-mono text-[10px] uppercase tracking-widest text-white/75 transition hover:border-white/40 hover:text-white cursor-pointer whitespace-nowrap shrink-0"
                      >
                        {t.partner.modal.newInquiry}
                      </button>
                      <button
                        type="button"
                        onClick={onClose}
                        className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 font-mono text-[10px] uppercase tracking-widest text-white transition hover:border-white/40 cursor-pointer whitespace-nowrap shrink-0"
                      >
                        {t.partner.modal.closeBtn}
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <form noValidate onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="inquiry-org-type"
                        className="block mb-2 font-mono text-[10px] uppercase tracking-widest text-white/60"
                      >
                        {t.partner.modal.orgCategory}
                      </label>
                      <select
                        id="inquiry-org-type"
                        value={form.organizationType}
                        onChange={(e) => updateField('organizationType', e.target.value)}
                        className="w-full rounded-lg border border-white/15 bg-brand-black px-3.5 py-3 text-sm text-white outline-none transition focus:border-brand-green"
                      >
                        {PARTNER_ORGANIZATION_TYPES.map((type) => (
                          <option key={type} value={type} className="bg-[#101010] text-white">
                            {getOrgLabel(type)}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="inquiry-focus-area"
                        className="block mb-2 font-mono text-[10px] uppercase tracking-widest text-white/60"
                      >
                        {t.partner.modal.focusArea}
                      </label>
                      <select
                        id="inquiry-focus-area"
                        value={form.focusArea}
                        onChange={(e) => updateField('focusArea', e.target.value)}
                        className="w-full rounded-lg border border-white/15 bg-brand-black px-3.5 py-3 text-sm text-white outline-none transition focus:border-brand-green"
                      >
                        {INQUIRY_FOCUS_AREAS.map((area) => (
                          <option key={area} value={area} className="bg-[#101010] text-white">
                            {getFocusLabel(area)}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="inquiry-full-name"
                        className="block mb-2 font-mono text-[10px] uppercase tracking-widest text-white/60"
                      >
                        {t.partner.modal.fullName}
                      </label>
                      <input
                        ref={firstInputRef}
                        id="inquiry-full-name"
                        type="text"
                        required
                        aria-invalid={Boolean(errors.fullName)}
                        value={form.fullName}
                        onChange={(e) => updateField('fullName', e.target.value)}
                        placeholder={t.partner.modal.placeholders.fullName}
                        className="w-full rounded-lg border border-white/15 bg-brand-black px-3.5 py-3 text-sm text-white placeholder:text-white/25 outline-none transition focus:border-brand-green"
                      />
                      {errors.fullName && (
                        <p
                          role="alert"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-amber-300"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="inquiry-role"
                        className="block mb-2 font-mono text-[10px] uppercase tracking-widest text-white/60"
                      >
                        {t.partner.modal.role}
                      </label>
                      <input
                        id="inquiry-role"
                        type="text"
                        required
                        aria-invalid={Boolean(errors.role)}
                        value={form.role}
                        onChange={(e) => updateField('role', e.target.value)}
                        placeholder={t.partner.modal.placeholders.role}
                        className="w-full rounded-lg border border-white/15 bg-brand-black px-3.5 py-3 text-sm text-white placeholder:text-white/25 outline-none transition focus:border-brand-green"
                      />
                      {errors.role && (
                        <p
                          role="alert"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-amber-300"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.role}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="inquiry-organization"
                        className="block mb-2 font-mono text-[10px] uppercase tracking-widest text-white/60"
                      >
                        {t.partner.modal.organization}
                      </label>
                      <input
                        id="inquiry-organization"
                        type="text"
                        required
                        aria-invalid={Boolean(errors.organization)}
                        value={form.organization}
                        onChange={(e) => updateField('organization', e.target.value)}
                        placeholder={t.partner.modal.placeholders.organization}
                        className="w-full rounded-lg border border-white/15 bg-brand-black px-3.5 py-3 text-sm text-white placeholder:text-white/25 outline-none transition focus:border-brand-green"
                      />
                      {errors.organization && (
                        <p
                          role="alert"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-amber-300"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.organization}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="inquiry-email"
                        className="block mb-2 font-mono text-[10px] uppercase tracking-widest text-white/60"
                      >
                        {t.partner.modal.email}
                      </label>
                      <input
                        id="inquiry-email"
                        type="email"
                        required
                        aria-invalid={Boolean(errors.email)}
                        value={form.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        placeholder={t.partner.modal.placeholders.email}
                        className="w-full rounded-lg border border-white/15 bg-brand-black px-3.5 py-3 text-sm text-white placeholder:text-white/25 outline-none transition focus:border-brand-green"
                      />
                      {errors.email && (
                        <p
                          role="alert"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-amber-300"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="inquiry-phone"
                        className="block mb-2 font-mono text-[10px] uppercase tracking-widest text-white/60"
                      >
                        {t.partner.modal.phone}
                      </label>
                      <input
                        id="inquiry-phone"
                        type="tel"
                        aria-invalid={Boolean(errors.phone)}
                        value={form.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        placeholder={t.partner.modal.placeholders.phone}
                        className="w-full rounded-lg border border-white/15 bg-brand-black px-3.5 py-3 text-sm text-white placeholder:text-white/25 outline-none transition focus:border-brand-green"
                      />
                      {errors.phone && (
                        <p
                          role="alert"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-amber-300"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="inquiry-timeline"
                        className="block mb-2 font-mono text-[10px] uppercase tracking-widest text-white/60"
                      >
                        {t.partner.modal.timeline}
                      </label>
                      <select
                        id="inquiry-timeline"
                        value={form.timeline}
                        onChange={(e) => updateField('timeline', e.target.value)}
                        className="w-full rounded-lg border border-white/15 bg-brand-black px-3.5 py-3 text-sm text-white outline-none transition focus:border-brand-green"
                      >
                        {TIMELINE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#101010] text-white">
                            {getTimelineLabel(opt)}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-message"
                      className="block mb-2 font-mono text-[10px] uppercase tracking-widest text-white/60"
                    >
                      {t.partner.modal.objectives}
                    </label>
                    <textarea
                      id="inquiry-message"
                      rows={4}
                      required
                      aria-invalid={Boolean(errors.message)}
                      value={form.message}
                      onChange={(e) => updateField('message', e.target.value)}
                      placeholder={t.partner.modal.objectivesPlaceholder}
                      className="w-full rounded-lg border border-white/15 bg-brand-black px-3.5 py-3 text-sm text-white placeholder:text-white/25 outline-none transition focus:border-brand-green resize-none"
                    />
                    {errors.message && (
                      <p
                        role="alert"
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-amber-300"
                      >
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4 pt-3 border-t border-white/10">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                      {t.partner.modal.directDesk}
                    </span>
                    <div className="flex items-center gap-3 self-end sm:self-auto">
                      <button
                        type="button"
                        onClick={onClose}
                        className="rounded-full border border-white/15 px-5 py-3 font-mono text-[10px] uppercase tracking-widest text-white/70 transition hover:border-white/40 hover:text-white cursor-pointer whitespace-nowrap shrink-0"
                      >
                        {t.partner.modal.cancel}
                      </button>
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2.5 rounded-full bg-brand-green px-7 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-black transition hover:bg-white cursor-pointer whitespace-nowrap shrink-0"
                      >
                        {t.partner.modal.submit}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
