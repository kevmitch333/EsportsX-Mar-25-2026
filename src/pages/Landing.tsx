import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  Globe2,
  Handshake,
  Lightbulb,
  Menu,
  Network,
  Shield,
  Trophy,
  Users,
  X,
} from 'lucide-react';

const navItems = [
  ['Ecosystem', 'ecosystem'],
  ['Expo', 'expo'],
  ['Advisory', 'advisory'],
  ['Model', 'model'],
  ['Partner', 'partner'],
];

const ecosystem = [
  {
    name: 'College EsportsX',
    id: 'college-esportsx',
    short: 'COLLEGE',
    code: '01',
    eyebrow: 'Collegiate Market Infrastructure',
    accent: '#00ff88',
    icon: <GraduationCap className="h-6 w-6" />,
    copy: 'Building the infrastructure for the collegiate esports marketplace through strategy, institutional advisory, events, education, brand activation, student engagement, and industry development.',
    bullets: ['Collegiate strategy', 'College Esports Expo', 'Campus activations', 'Education & workforce', 'NIL research', 'Industry intelligence'],
  },
  {
    name: 'Esports India',
    id: 'esports-india',
    short: 'INDIA',
    code: '02',
    eyebrow: 'Global Market Entry',
    accent: '#a29bfe',
    icon: <Globe2 className="h-6 w-6" />,
    copy: 'A gateway into one of gaming’s most consequential emerging markets, connecting international organizations with India’s competitive-gaming economy.',
    bullets: ['Gateway Lab', 'Regulatory Readiness Lab', 'Campus & city pilots', 'Operator partnerships', 'Fellows & diaspora network'],
  },
  {
    name: 'EsportsFC',
    id: 'esportsfc',
    short: 'FOOTBALL',
    code: '03',
    eyebrow: 'Football × Gaming × Culture',
    accent: '#00d4ff',
    icon: <Trophy className="h-6 w-6" />,
    copy: 'A platform at the intersection of football, gaming, creators, clubs, competitions, brands, content, and global fan communities.',
    bullets: ['Digital competition', 'Creator programming', 'Branded experiences', 'Fan engagement', 'Global football culture'],
  },
  {
    name: 'Military Esports',
    id: 'military-esports',
    short: 'MILITARY',
    code: '04',
    eyebrow: 'Community & Opportunity',
    accent: '#ffeaa7',
    icon: <Shield className="h-6 w-6" />,
    copy: 'Exploring how competitive gaming can support community, education, career pathways, events, and partnerships across military and veteran communities.',
    bullets: ['Competition', 'Community building', 'Education', 'Career pathways', 'Events & partnerships'],
  },
  {
    name: 'Esports Education',
    id: 'esports-education',
    short: 'EDUCATION',
    code: '05',
    eyebrow: 'The Business Behind the Game',
    accent: '#ff9f43',
    icon: <BookOpen className="h-6 w-6" />,
    copy: 'Learning experiences that help students, educators, institutions, and professionals understand competitive gaming and the business ecosystem surrounding it.',
    bullets: ['Management', 'Business & entrepreneurship', 'Events & production', 'Marketing & sponsorship', 'Technology', 'Career development'],
  },
];

const advisory = [
  ['Market Entry', 'Identify where your organization fits within esports and gaming.'],
  ['College Esports', 'Develop programs and partnerships across the collegiate marketplace.'],
  ['Brand Strategy', 'Create credible ways for brands to participate in gaming culture.'],
  ['Partnership Development', 'Identify potential technology, institutional, commercial, and operating partners.'],
  ['Program Development', 'Turn concepts into pilots, events, platforms, and repeatable programs.'],
  ['International Expansion', 'Explore specialized markets through locally relevant strategies and partnerships.'],
  ['IP & Brand Development', 'Transform digital properties and category-specific brands into operating opportunities.'],
];

const businessModels = [
  ['Strategic Advisory', 'Strategy, market entry, business development, and institutional consulting.'],
  ['Events & Experiences', 'Conferences, competitions, campus activations, showcases, and experiential programs.'],
  ['Brand Partnerships', 'Sponsorship, activation, research, community engagement, and market development.'],
  ['Education', 'Curriculum, professional development, institutional programming, and workforce initiatives.'],
  ['IP & Licensing', 'Strategic commercialization of specialized esports brands and digital assets.'],
  ['Market-Entry Programs', 'Structured pathways into emerging geographic and demographic markets.'],
  ['Research & Intelligence', 'Insights into changing esports markets, business models, technologies, and communities.'],
  ['Venture Development', 'Incubating selected esports concepts into standalone operating opportunities.'],
];

const model = [
  ['01', 'IP', 'Specialized esports brands and digital assets.'],
  ['02', 'Intelligence', 'Market research, institutional knowledge, and category expertise.'],
  ['03', 'Activation', 'Content, pilots, events, education, and community.'],
  ['04', 'Partnerships', 'Brands, universities, technology companies, operators, and investors.'],
  ['05', 'Commercialization', 'Operating ventures, licensing, sponsorship, strategic partnerships, and transactions.'],
];

const partnerTypes = [
  ['Universities & Educational Institutions', 'Build programs, events, research initiatives, curriculum, and student opportunities.'],
  ['Brands', 'Develop credible gaming activations, sponsorship platforms, and new ways to engage gaming communities.'],
  ['Technology Companies', 'Test products, build demonstrations, create campus programs, and reach specialized gaming audiences.'],
  ['Esports & Gaming Companies', 'Explore new markets, communities, partnerships, and business models.'],
  ['Investors & Operators', 'Identify opportunities to develop, operate, license, acquire, or partner around specialized EsportsX properties.'],
  ['Creators & Industry Leaders', 'Build programming, communities, events, content, and new competitive-gaming experiences.'],
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.32em] text-brand-green">/ {children}</div>;
}

function CTA({ href, children, secondary = false }: { href: string; children: React.ReactNode; secondary?: boolean }) {
  return (
    <a
      href={href}
      className={secondary
        ? 'inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white transition hover:border-brand-green/60 hover:text-brand-green'
        : 'inline-flex items-center gap-3 rounded-full bg-brand-green px-7 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white'}
    >
      {children}<ArrowRight className="h-4 w-4" />
    </a>
  );
}

function HeroArchitecture({ active, setActive }: { active: number; setActive: (index: number) => void }) {
  const positions = [
    'left-1/2 top-0 -translate-x-1/2',
    'right-0 top-[28%]',
    'bottom-[4%] right-[9%]',
    'bottom-[4%] left-[9%]',
    'left-0 top-[28%]',
  ];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <div className="signal-grid absolute inset-[4%] rounded-full opacity-50" />
      <motion.div
        className="absolute inset-[10%] rounded-full border border-white/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute left-1/2 top-[-4px] h-2 w-2 -translate-x-1/2 rounded-full bg-brand-green shadow-[0_0_18px_rgba(0,255,136,.8)]" />
      </motion.div>
      <div className="absolute inset-[22%] rounded-full border border-white/10" />
      <div className="absolute left-1/2 top-1/2 h-px w-[72%] -translate-x-1/2 -translate-y-1/2 rotate-[18deg] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-px w-[72%] -translate-x-1/2 -translate-y-1/2 rotate-[90deg] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-px w-[72%] -translate-x-1/2 -translate-y-1/2 rotate-[162deg] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="absolute inset-[34%] z-10 flex flex-col items-center justify-center rounded-full border border-brand-green/30 bg-brand-black/95 text-center shadow-[0_0_80px_rgba(0,255,136,.08)]">
        <div className="font-display text-3xl tracking-wide md:text-4xl">ESPORTS<span className="text-brand-green">X</span></div>
        <div className="mt-2 font-mono text-[7px] uppercase tracking-[.28em] text-white/30">Ecosystem Core</div>
      </div>

      {ecosystem.map((item, index) => (
        <button
          key={item.name}
          onClick={() => setActive(index)}
          className={`absolute z-20 ${positions[index]} min-w-[104px] rounded-full border px-4 py-2 text-left transition-all duration-300 ${active === index ? 'scale-105 bg-white/[.08]' : 'bg-brand-black/95 hover:bg-white/[.04]'}`}
          style={{ borderColor: active === index ? item.accent : 'rgba(255,255,255,.12)', boxShadow: active === index ? `0 0 26px ${item.accent}22` : 'none' }}
          aria-label={`Show ${item.name}`}
        >
          <span className="block font-mono text-[7px] uppercase tracking-[.2em]" style={{ color: item.accent }}>{item.code}</span>
          <span className="mt-0.5 block font-mono text-[8px] uppercase tracking-[.14em] text-white/65">{item.short}</span>
        </button>
      ))}

      <div className="absolute bottom-[24%] left-1/2 z-20 w-[72%] -translate-x-1/2 rounded-xl border border-white/10 bg-black/65 p-4 backdrop-blur-md">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="font-mono text-[7px] uppercase tracking-[.2em] text-white/30">Active platform</div>
            <div className="mt-1 font-display text-xl uppercase" style={{ color: ecosystem[active].accent }}>{ecosystem[active].name}</div>
          </div>
          <div className="rounded-lg border border-white/10 p-2" style={{ color: ecosystem[active].accent }}>{ecosystem[active].icon}</div>
        </div>
      </div>
    </div>
  );
}

export default function Landing() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeBrand, setActiveBrand] = useState(0);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 40);
    handle();
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileOpen(false);
  };

  return (
    <div className="min-h-screen bg-brand-black text-brand-off-white selection:bg-brand-green selection:text-black grain-overlay">
      <div className="scanline" />

      <nav className={`fixed inset-x-0 top-0 z-50 px-6 md:px-10 transition-all ${scrolled ? 'border-b border-white/10 bg-brand-black/90 py-4 backdrop-blur-xl' : 'bg-transparent py-7'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <button onClick={() => scrollTo('top')} className="font-display text-2xl tracking-wider">ESPORTS<span className="text-brand-green">X</span></button>
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)} className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/55 transition hover:text-brand-green">{label}</button>
            ))}
            <CTA href="mailto:info@esportsx.com">Start a Conversation</CTA>
          </div>
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Open navigation">{mobileOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-brand-black md:hidden">
            {navItems.map(([label, id]) => <button key={id} onClick={() => scrollTo(id)} className="font-display text-3xl uppercase tracking-wider">{label}</button>)}
          </motion.div>
        )}
      </AnimatePresence>

      <main id="top">
        <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-32 md:px-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(0,255,136,0.12),transparent_32%),radial-gradient(circle_at_20%_80%,rgba(0,212,255,0.08),transparent_30%)]" />
          <div className="signal-grid absolute inset-0 opacity-[.13]" />
          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.12fr_.88fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
              <SectionLabel>National Brand Group Platform</SectionLabel>
              <h1 className="max-w-5xl font-display text-[clamp(4.5rem,9.2vw,9rem)] uppercase leading-[.84] tracking-tight">
                Building What’s Next <span className="text-brand-green">in Esports.</span>
              </h1>
              <p className="mt-7 font-mono text-xs uppercase tracking-[0.22em] text-white/50">Competition. Education. Culture. Technology. Global Opportunity.</p>
              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/65 md:text-xl">
                EsportsX is an esports innovation and commercialization platform building the next generation of businesses, experiences, partnerships, and communities across the global competitive gaming economy.
              </p>
              <p className="mt-5 max-w-3xl leading-relaxed text-white/45">
                We combine specialized esports intellectual property, industry expertise, education, events, market intelligence, and strategic partnerships to identify opportunities, launch new concepts, and help organizations participate more effectively in the evolving esports marketplace.
              </p>
              <div className="mt-10 flex flex-wrap gap-4"><CTA href="#ecosystem">Explore EsportsX</CTA><CTA href="mailto:info@esportsx.com" secondary>Partner With Us</CTA></div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .15 }} className="hidden lg:block">
              <div className="mb-4 flex items-center justify-between font-mono text-[8px] uppercase tracking-[.25em] text-white/25">
                <span>Ecosystem Architecture</span><span>05 Entry Points</span>
              </div>
              <HeroArchitecture active={activeBrand} setActive={setActiveBrand} />
            </motion.div>
          </div>
          <div className="absolute bottom-5 left-1/2 hidden w-[calc(100%-5rem)] max-w-7xl -translate-x-1/2 items-center justify-between border-t border-white/10 pt-4 font-mono text-[8px] uppercase tracking-[.23em] text-white/25 md:flex">
            <span>IP → Intelligence → Activation → Partnership → Commercialization</span>
            <span>Scroll to explore ↓</span>
          </div>
        </section>

        <section className="border-y border-white/5 bg-white/[.018] px-6 py-24 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
              <div><SectionLabel>More Than an Esports Company</SectionLabel><h2 className="font-display text-5xl uppercase leading-none md:text-7xl">An Ecosystem Built for Where Gaming Is Going.</h2></div>
              <div className="space-y-5 text-lg leading-relaxed text-white/55">
                <p>Esports is no longer defined by tournaments alone.</p>
                <p>Competitive gaming now intersects with education, entertainment, technology, sports, media, workforce development, creator culture, international markets, and emerging business models.</p>
                <p className="text-white/80">EsportsX operates across those intersections.</p>
                <p>Our portfolio brings together specialized brands, digital assets, institutional expertise, events, education, advisory services, and market-development initiatives designed to turn emerging opportunities into scalable platforms.</p>
                <p>We work with universities, brands, technology companies, gaming organizations, investors, creators, communities, and market operators looking to build what comes next.</p>
              </div>
            </div>
            <div className="mt-16 grid overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['Competition × Education', 'Programs, events, curriculum'],
                ['Sport × Gaming', 'Fans, creators, culture'],
                ['Markets × Networks', 'India, diaspora, operators'],
                ['IP × Commercialization', 'Brands, pilots, ventures'],
              ].map(([title, sub]) => <div key={title} className="bg-brand-black p-5"><div className="font-display text-xl uppercase text-white/80">{title}</div><div className="mt-2 font-mono text-[8px] uppercase tracking-[.17em] text-white/30">{sub}</div></div>)}
            </div>
          </div>
        </section>

        <section id="ecosystem" className="scroll-mt-24 px-6 py-24 md:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionLabel>The EsportsX Ecosystem</SectionLabel>
            <div className="mb-14 grid gap-6 lg:grid-cols-[1fr_.65fr] lg:items-end">
              <h2 className="font-display text-5xl uppercase leading-none md:text-7xl">One Platform. Multiple Entry Points Into the Future of Esports.</h2>
              <p className="leading-relaxed text-white/45">Five focused platforms create clear ways for institutions, brands, operators, communities, and partners to engage with the broader EsportsX ecosystem.</p>
            </div>

            <div className="grid gap-7 lg:grid-cols-[1.15fr_.85fr]">
              <div className="grid gap-4 sm:grid-cols-2">
                {ecosystem.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * .05 }}
                    onClick={() => setActiveBrand(index)}
                    className={`${index === 0 ? 'sm:col-span-2' : ''} group relative overflow-hidden rounded-2xl border bg-white/[.02] p-7 text-left transition md:p-8`}
                    style={{ borderColor: activeBrand === index ? `${item.accent}88` : 'rgba(255,255,255,.1)', boxShadow: activeBrand === index ? `0 0 36px ${item.accent}10` : 'none' }}
                  >
                    <div className="absolute right-5 top-3 font-display text-7xl leading-none opacity-[.035]" style={{ color: item.accent }}>{item.code}</div>
                    <div className="mb-5 inline-flex rounded-xl border border-white/10 bg-black/30 p-3" style={{ color: item.accent }}>{item.icon}</div>
                    <div className="font-mono text-[9px] uppercase tracking-[.25em] text-white/35">{item.eyebrow}</div>
                    <h3 className="mt-3 font-display text-4xl uppercase tracking-wide">{item.name}</h3>
                    <p className="mt-5 leading-relaxed text-white/50">{item.copy}</p>
                  </motion.button>
                ))}
              </div>

              <div className="lg:sticky lg:top-28 lg:self-start">
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[.025] p-7 md:p-9">
                  <div className="signal-grid absolute inset-0 opacity-[.18]" />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <div className="font-mono text-[8px] uppercase tracking-[.25em] text-white/30">Selected platform / {ecosystem[activeBrand].code}</div>
                        <h3 className="mt-3 font-display text-5xl uppercase leading-none" style={{ color: ecosystem[activeBrand].accent }}>{ecosystem[activeBrand].name}</h3>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-black/40 p-3" style={{ color: ecosystem[activeBrand].accent }}>{ecosystem[activeBrand].icon}</div>
                    </div>
                    <div className="my-8 h-px bg-gradient-to-r from-white/20 to-transparent" />
                    <div className="font-mono text-[8px] uppercase tracking-[.22em] text-white/25">Opportunity stack</div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {ecosystem[activeBrand].bullets.map((b, i) => <span key={b} className="rounded-full border px-3 py-2 font-mono text-[8px] uppercase tracking-wider text-white/50" style={{ borderColor: i === 0 ? `${ecosystem[activeBrand].accent}77` : 'rgba(255,255,255,.1)' }}>{b}</span>)}
                    </div>
                    <div className="mt-10 border-l-2 pl-5" style={{ borderColor: ecosystem[activeBrand].accent }}>
                      <div className="font-mono text-[8px] uppercase tracking-[.22em] text-white/25">EsportsX role</div>
                      <p className="mt-2 text-sm leading-relaxed text-white/55">Connect the category thesis to programming, partners, community, and a viable commercialization path.</p>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <a href={`/platform/${ecosystem[activeBrand].id}`} className="inline-flex items-center gap-2 rounded-full border px-5 py-3 font-mono text-[8px] uppercase tracking-[.16em] transition hover:bg-white hover:text-black" style={{ borderColor: `${ecosystem[activeBrand].accent}77`, color: ecosystem[activeBrand].accent }}>
                        Explore {ecosystem[activeBrand].name}<ArrowRight className="h-4 w-4" />
                      </a>
                      <a href="/explore" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-mono text-[8px] uppercase tracking-[.16em] text-white/55 transition hover:border-white/30 hover:text-white">
                        Find your entry point<ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="expo" className="scroll-mt-24 border-y border-white/5 bg-brand-green/[.025] px-6 py-24 md:px-10">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <SectionLabel>College Esports Expo</SectionLabel>
              <h2 className="font-display text-5xl uppercase leading-none md:text-7xl">Where the Collegiate Esports Ecosystem Comes Together.</h2>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/55">The College Esports Expo was created to connect the rapidly developing collegiate esports marketplace through competition, education, demonstrations, conversations, networking, recruiting, and experiential programming.</p>
              <p className="mt-5 text-xl text-white/80">It is not simply another tournament. It is a marketplace for collegiate esports innovation.</p>
              <div className="mt-9 flex flex-wrap gap-4"><CTA href="mailto:info@esportsx.com?subject=Bring%20the%20College%20Esports%20Expo%20to%20our%20campus">Bring the Expo to Your Campus</CTA><CTA href="mailto:info@esportsx.com?subject=College%20Esports%20Expo%20Partnership" secondary>Become a Partner</CTA></div>
            </div>
            <div className="relative grid gap-3 sm:grid-cols-2">
              <div className="signal-grid absolute inset-0 opacity-[.12]" />
              {[
                ['Universities need strategy.', Building2], ['Students need pathways.', Users], ['Brands need authentic participation.', Handshake], ['Technology companies need adoption environments.', Lightbulb],
              ].map(([text, Icon]: any, index) => <motion.div initial={{ opacity: 0, scale: .96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * .08 }} key={text} className="relative z-10 rounded-2xl border border-white/10 bg-black/35 p-6 backdrop-blur-sm"><div className="mb-8 flex items-center justify-between"><Icon className="h-6 w-6 text-brand-green"/><span className="font-mono text-[8px] text-white/20">0{index + 1}</span></div><p className="font-display text-2xl uppercase leading-tight">{text}</p></motion.div>)}
            </div>
          </div>
        </section>

        <section id="advisory" className="scroll-mt-24 px-6 py-24 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
              <div><SectionLabel>EsportsX Advisory</SectionLabel><h2 className="font-display text-5xl uppercase leading-none md:text-7xl">Navigate the Esports Economy With Greater Intelligence.</h2><p className="mt-7 leading-relaxed text-white/50">Organizations frequently enter esports knowing they want to participate but without knowing where they belong. EsportsX helps answer that question.</p></div>
              <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
                {advisory.map(([title, copy], index) => <div key={title} className="group bg-brand-black p-6 transition hover:bg-white/[.025]"><div className="flex items-center justify-between"><BriefcaseBusiness className="h-5 w-5 text-brand-green"/><span className="font-mono text-[8px] text-white/15">0{index + 1}</span></div><h3 className="mt-5 font-display text-2xl uppercase">{title}</h3><p className="mt-3 text-sm leading-relaxed text-white/45">{copy}</p></div>)}
              </div>
            </div>
            <div className="mt-10"><CTA href="mailto:info@esportsx.com?subject=EsportsX%20Advisory">Talk to EsportsX</CTA></div>
          </div>
        </section>

        <section id="model" className="scroll-mt-24 border-y border-white/5 bg-white/[.018] px-6 py-24 md:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionLabel>The EsportsX Model</SectionLabel>
            <h2 className="max-w-4xl font-display text-5xl uppercase leading-none md:text-7xl">From Digital Asset to Operating Opportunity.</h2>
            <p className="mt-7 max-w-3xl leading-relaxed text-white/50">EsportsX takes a venture-development approach to esports: identify promising categories and underserved communities, activate specialized intellectual property, develop a market thesis, establish partnerships, create programming, and test real-world demand.</p>
            <div className="relative mt-14 grid gap-3 lg:grid-cols-5">
              <div className="absolute left-[8%] right-[8%] top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-green/35 to-transparent lg:block" />
              {model.map(([num, title, copy], index) => <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} key={title} className="relative rounded-2xl border border-white/10 bg-brand-black p-6"><div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-brand-green/35 bg-brand-black font-mono text-[9px] tracking-[.2em] text-brand-green">{num}</div><h3 className="mt-9 font-display text-3xl uppercase">{title}</h3><p className="mt-3 text-sm leading-relaxed text-white/45">{copy}</p></motion.div>)}
            </div>
            <div className="mt-14 rounded-2xl border border-brand-green/20 bg-brand-green/[.04] p-8 md:p-10">
              <div className="flex items-start gap-5"><Network className="mt-1 h-7 w-7 shrink-0 text-brand-green"/><div><div className="font-mono text-[9px] uppercase tracking-[.25em] text-brand-green">The critical question</div><p className="mt-3 max-w-4xl font-display text-3xl uppercase leading-tight md:text-5xl">What should this asset become?</p><p className="mt-5 max-w-4xl leading-relaxed text-white/55">An operating company, media property, event, educational platform, licensed brand, joint venture, strategic partnership—or an asset that creates greater value in someone else’s ecosystem? EsportsX provides the architecture for finding that answer.</p></div></div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionLabel>What We Build</SectionLabel>
            <h2 className="font-display text-5xl uppercase leading-none md:text-7xl">Multiple Business Models. One Esports Platform.</h2>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {businessModels.map(([title, copy], index) => <div key={title} className="group rounded-2xl border border-white/10 p-6 transition hover:border-brand-green/30 hover:bg-white/[.02]"><div className="font-mono text-[8px] tracking-[.2em] text-white/20">0{index + 1}</div><h3 className="mt-7 font-display text-2xl uppercase group-hover:text-brand-green">{title}</h3><p className="mt-4 text-sm leading-relaxed text-white/45">{copy}</p></div>)}
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-brand-green/[.02] px-6 py-24 md:px-10">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
            <div><SectionLabel>Why EsportsX</SectionLabel><h2 className="font-display text-5xl uppercase leading-none md:text-7xl">Built From Inside the Evolution of Esports.</h2></div>
            <div className="space-y-5 leading-relaxed text-white/55"><p>EsportsX is informed by years of work across collegiate esports, education, entertainment, technology, events, brand development, and competitive gaming.</p><p>Founder Kevin Mitchell has worked across the development of the collegiate esports ecosystem as an educator, entrepreneur, advisor, and event creator.</p><p>His esports work includes teaching esports at Emerson College, founding the College Esports Expo, helping develop collegiate competition and programming, creating esports education initiatives, and consulting with organizations across gaming, technology, entertainment, and institutional markets.</p><p className="border-l-2 border-brand-green pl-6 text-xl text-white/80">The next generation of esports companies will be built at the intersections — not inside traditional industry boundaries.</p></div>
          </div>
        </section>

        <section id="partner" className="scroll-mt-24 px-6 py-24 md:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionLabel>Partner With EsportsX</SectionLabel>
            <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
              <div><h2 className="font-display text-5xl uppercase leading-none md:text-7xl">What Can We Build Together?</h2><p className="mt-7 leading-relaxed text-white/50">EsportsX is looking to work with organizations that see competitive gaming as more than an advertising channel. We are interested in partners who want to build.</p><div className="mt-8"><CTA href="mailto:info@esportsx.com?subject=Partner%20with%20EsportsX">Start a Conversation</CTA></div></div>
              <div className="grid gap-4 sm:grid-cols-2">{partnerTypes.map(([title, copy]) => <div key={title} className="rounded-2xl border border-white/10 bg-white/[.02] p-6 transition hover:-translate-y-1 hover:border-brand-green/30"><Handshake className="mb-6 h-5 w-5 text-brand-green"/><h3 className="font-display text-2xl uppercase">{title}</h3><p className="mt-3 text-sm leading-relaxed text-white/45">{copy}</p></div>)}</div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-white/5 px-6 py-28 md:px-10">
          <div className="signal-grid absolute inset-0 opacity-[.12]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(0,255,136,.14),transparent_38%)]" />
          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <SectionLabel>Our Vision</SectionLabel>
            <h2 className="font-display text-6xl uppercase leading-none md:text-9xl">Esports Is Becoming Infrastructure.</h2>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/55">Competitive gaming is increasingly connected to how people socialize, learn, compete, create, build careers, experience entertainment, and participate in digital communities. That creates an opportunity far larger than esports competition alone.</p>
            <p className="mt-7 font-mono text-[10px] uppercase tracking-[.24em] text-brand-green">Competition × Education × Technology × Culture × Community × Global Markets</p>
            <p className="mx-auto mt-8 max-w-3xl text-xl text-white/80">The objective is not simply to participate in the esports industry. It is to help build what the esports industry becomes next.</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-12 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div><div className="font-display text-5xl uppercase tracking-wide">ESPORTS<span className="text-brand-green">X</span></div><p className="mt-2 font-mono text-[10px] uppercase tracking-[.22em] text-white/35">Build What’s Next.</p></div>
          <div className="max-w-xl text-sm leading-relaxed text-white/40">For partnerships, institutional programs, strategic advisory, brand activations, licensing, events, market-entry initiatives, and venture opportunities.</div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t border-white/5 pt-6 font-mono text-[9px] uppercase tracking-wider text-white/25 md:flex-row md:items-center md:justify-between"><span>College EsportsX · Esports India · EsportsFC · Military Esports · Esports Education</span><span className="flex flex-wrap items-center gap-4"><a href="/legal" className="transition hover:text-white">Legal</a><span>A National Brand Group platform.</span></span></div>
      </footer>
    </div>
  );
}
