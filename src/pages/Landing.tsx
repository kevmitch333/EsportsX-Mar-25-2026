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
    eyebrow: 'Collegiate Market Infrastructure',
    icon: <GraduationCap className="h-6 w-6" />,
    copy: 'Building the infrastructure for the collegiate esports marketplace through strategy, institutional advisory, events, education, brand activation, student engagement, and industry development.',
    bullets: ['Collegiate strategy', 'College Esports Expo', 'Campus activations', 'Education & workforce', 'NIL research', 'Industry intelligence'],
  },
  {
    name: 'Esports India',
    eyebrow: 'Global Market Entry',
    icon: <Globe2 className="h-6 w-6" />,
    copy: 'A gateway into one of gaming’s most consequential emerging markets, connecting international organizations with India’s competitive-gaming economy.',
    bullets: ['Gateway Lab', 'Regulatory Readiness Lab', 'Campus & city pilots', 'Operator partnerships', 'Fellows & diaspora network'],
  },
  {
    name: 'EsportsFC',
    eyebrow: 'Football × Gaming × Culture',
    icon: <Trophy className="h-6 w-6" />,
    copy: 'A platform at the intersection of football, gaming, creators, clubs, competitions, brands, content, and global fan communities.',
    bullets: ['Digital competition', 'Creator programming', 'Branded experiences', 'Fan engagement', 'Global football culture'],
  },
  {
    name: 'Military Esports',
    eyebrow: 'Community & Opportunity',
    icon: <Shield className="h-6 w-6" />,
    copy: 'Exploring how competitive gaming can support community, education, career pathways, events, and partnerships across military and veteran communities.',
    bullets: ['Competition', 'Community building', 'Education', 'Career pathways', 'Events & partnerships'],
  },
  {
    name: 'Esports Education',
    eyebrow: 'The Business Behind the Game',
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

export default function Landing() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
          <div className="absolute right-[-10%] top-[18%] h-[520px] w-[520px] rounded-full border border-brand-green/10" />
          <div className="absolute right-[4%] top-[30%] h-[300px] w-[300px] rounded-full border border-brand-green/10" />
          <div className="relative z-10 mx-auto grid max-w-7xl items-end gap-12 lg:grid-cols-[1.2fr_.8fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
              <SectionLabel>National Brand Group Platform</SectionLabel>
              <h1 className="max-w-5xl font-display text-[clamp(4.5rem,10vw,9.5rem)] uppercase leading-[.84] tracking-tight">
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

            <div className="hidden lg:block">
              <div className="relative mx-auto aspect-square max-w-[470px] rounded-full border border-white/10 bg-white/[.015] p-12">
                <div className="absolute inset-[18%] rounded-full border border-brand-green/15" />
                <div className="absolute inset-[35%] flex items-center justify-center rounded-full border border-brand-green/30 bg-brand-green/5 font-display text-3xl tracking-wide">ESPORTS<span className="text-brand-green">X</span></div>
                {['COLLEGE','INDIA','FOOTBALL','MILITARY','EDUCATION'].map((item, i) => {
                  const positions = ['top-2 left-1/2 -translate-x-1/2','right-0 top-[28%]','bottom-[10%] right-[10%]','bottom-[10%] left-[10%]','left-0 top-[28%]'];
                  return <div key={item} className={`absolute ${positions[i]} rounded-full border border-white/10 bg-brand-black px-4 py-2 font-mono text-[9px] tracking-[.18em] text-white/55`}>{item}</div>;
                })}
              </div>
            </div>
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
          </div>
        </section>

        <section id="ecosystem" className="scroll-mt-24 px-6 py-24 md:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionLabel>The EsportsX Ecosystem</SectionLabel>
            <div className="mb-14 grid gap-6 lg:grid-cols-[1fr_.65fr] lg:items-end">
              <h2 className="font-display text-5xl uppercase leading-none md:text-7xl">One Platform. Multiple Entry Points Into the Future of Esports.</h2>
              <p className="leading-relaxed text-white/45">Five focused platforms create clear ways for institutions, brands, operators, communities, and partners to engage with the broader EsportsX ecosystem.</p>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              {ecosystem.map((item, index) => (
                <motion.article key={item.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .05 }} className={`${index === 0 ? 'lg:col-span-2 lg:grid-cols-[.7fr_1.3fr]' : ''} group grid gap-8 rounded-2xl border border-white/10 bg-white/[.02] p-7 transition hover:border-brand-green/35 md:p-9`}>
                  <div>
                    <div className="mb-5 inline-flex rounded-xl border border-white/10 bg-brand-green/5 p-3 text-brand-green">{item.icon}</div>
                    <div className="font-mono text-[9px] uppercase tracking-[.25em] text-white/35">{item.eyebrow}</div>
                    <h3 className="mt-3 font-display text-4xl uppercase tracking-wide">{item.name}</h3>
                    <p className="mt-5 leading-relaxed text-white/50">{item.copy}</p>
                  </div>
                  <div className="flex flex-wrap content-start gap-2 self-end">
                    {item.bullets.map(b => <span key={b} className="rounded-full border border-white/10 px-3 py-2 font-mono text-[9px] uppercase tracking-wider text-white/45">{b}</span>)}
                  </div>
                </motion.article>
              ))}
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
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ['Universities need strategy.', Building2], ['Students need pathways.', Users], ['Brands need authentic participation.', Handshake], ['Technology companies need adoption environments.', Lightbulb],
              ].map(([text, Icon]: any) => <div key={text} className="rounded-2xl border border-white/10 bg-black/20 p-6"><Icon className="mb-8 h-6 w-6 text-brand-green"/><p className="font-display text-2xl uppercase leading-tight">{text}</p></div>)}
            </div>
          </div>
        </section>

        <section id="advisory" className="scroll-mt-24 px-6 py-24 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
              <div><SectionLabel>EsportsX Advisory</SectionLabel><h2 className="font-display text-5xl uppercase leading-none md:text-7xl">Navigate the Esports Economy With Greater Intelligence.</h2><p className="mt-7 leading-relaxed text-white/50">Organizations frequently enter esports knowing they want to participate but without knowing where they belong. EsportsX helps answer that question.</p></div>
              <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
                {advisory.map(([title, copy]) => <div key={title} className="bg-brand-black p-6"><BriefcaseBusiness className="mb-5 h-5 w-5 text-brand-green"/><h3 className="font-display text-2xl uppercase">{title}</h3><p className="mt-3 text-sm leading-relaxed text-white/45">{copy}</p></div>)}
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
            <div className="mt-14 grid gap-3 lg:grid-cols-5">
              {model.map(([num, title, copy]) => <div key={title} className="relative rounded-2xl border border-white/10 bg-brand-black p-6"><div className="font-mono text-[9px] tracking-[.25em] text-brand-green">{num}</div><h3 className="mt-9 font-display text-3xl uppercase">{title}</h3><p className="mt-3 text-sm leading-relaxed text-white/45">{copy}</p></div>)}
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
              {businessModels.map(([title, copy]) => <div key={title} className="rounded-2xl border border-white/10 p-6 transition hover:border-brand-green/30"><h3 className="font-display text-2xl uppercase">{title}</h3><p className="mt-4 text-sm leading-relaxed text-white/45">{copy}</p></div>)}
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
              <div className="grid gap-4 sm:grid-cols-2">{partnerTypes.map(([title, copy]) => <div key={title} className="rounded-2xl border border-white/10 bg-white/[.02] p-6"><Handshake className="mb-6 h-5 w-5 text-brand-green"/><h3 className="font-display text-2xl uppercase">{title}</h3><p className="mt-3 text-sm leading-relaxed text-white/45">{copy}</p></div>)}</div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-white/5 px-6 py-28 md:px-10">
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
        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t border-white/5 pt-6 font-mono text-[9px] uppercase tracking-wider text-white/25 md:flex-row md:items-center md:justify-between"><span>College EsportsX · Esports India · EsportsFC · Military Esports · Esports Education</span><span>A National Brand Group platform.</span></div>
      </footer>
    </div>
  );
}
