import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Network } from 'lucide-react';
import { CustomCursor } from '../components/CustomCursor';
import { SiteNav } from '../components/SiteNav';
import { SiteFooter } from '../components/SiteFooter';

const MODEL_STEPS = [
  {
    num: '01',
    title: 'IP',
    desc: 'Specialized esports brands and digital assets.',
  },
  {
    num: '02',
    title: 'Intelligence',
    desc: 'Market research, institutional knowledge, and category expertise.',
  },
  {
    num: '03',
    title: 'Activation',
    desc: 'Content, pilots, events, education, and community.',
  },
  {
    num: '04',
    title: 'Partnerships',
    desc: 'Brands, universities, technology companies, operators, and investors.',
  },
  {
    num: '05',
    title: 'Commercialization',
    desc: 'Operating ventures, licensing, sponsorship, strategic partnerships, and transactions.',
  },
];

const BUSINESS_MODELS = [
  {
    title: 'Strategic Advisory',
    desc: 'Strategy, market entry, business development, and institutional consulting.',
  },
  {
    title: 'Events & Experiences',
    desc: 'Conferences, competitions, campus activations, showcases, and experiential programs.',
  },
  {
    title: 'Brand Partnerships',
    desc: 'Sponsorship, activation, research, community engagement, and market development.',
  },
  {
    title: 'Education',
    desc: 'Curriculum, professional development, institutional programming, and workforce initiatives.',
  },
  {
    title: 'IP & Licensing',
    desc: 'Strategic commercialization of specialized esports brands and digital assets.',
  },
  {
    title: 'Market-Entry Programs',
    desc: 'Structured pathways into emerging geographic and demographic markets.',
  },
  {
    title: 'Research & Intelligence',
    desc: 'Insights into changing esports markets, business models, technologies, and communities.',
  },
  {
    title: 'Venture Development',
    desc: 'Incubating selected esports concepts into standalone operating opportunities.',
  },
];

export default function Model() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black text-brand-off-white selection:bg-brand-green selection:text-black grain-overlay overflow-x-hidden">
      <CustomCursor />
      <div className="scanline" />
      <SiteNav />

      <main>
        {/* The EsportsX Model Section */}
        <section className="relative overflow-hidden border-b border-white/5 bg-white/[.018] px-6 pt-36 pb-24 md:px-10 md:pt-44">
          <div className="signal-grid absolute inset-0 opacity-[.12]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(0,255,136,0.10),transparent_36%)] pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.32em] text-brand-green">
              / The EsportsX Model
            </div>
            <h1 className="max-w-4xl font-display text-5xl uppercase leading-none md:text-7xl lg:text-8xl tracking-tight">
              From Digital Asset to Operating Opportunity.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/55">
              EsportsX takes a venture-development approach to esports: identify promising categories and underserved communities, activate specialized intellectual property, develop a market thesis, establish partnerships, create programming, and test real-world demand.
            </p>

            {/* 5-Stage Pipeline */}
            <div className="relative mt-14 grid gap-3 lg:grid-cols-5">
              <div className="absolute left-[8%] right-[8%] top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-green/35 to-transparent lg:block" />
              {MODEL_STEPS.map((step, idx) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="relative rounded-2xl border border-white/10 bg-brand-black p-6"
                >
                  <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-brand-green/35 bg-brand-black font-mono text-[9px] tracking-[.2em] text-brand-green tabular-nums">
                    {step.num}
                  </div>
                  <h2 className="mt-9 font-display text-3xl uppercase tracking-wide">{step.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/45">{step.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* The Critical Question Callout */}
            <div className="mt-14 rounded-2xl border border-brand-green/20 bg-brand-green/[.04] p-8 md:p-10">
              <div className="flex items-start gap-5">
                <Network className="mt-1 h-7 w-7 shrink-0 text-brand-green" />
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[.25em] text-brand-green">
                    The critical question
                  </div>
                  <p className="mt-3 max-w-4xl font-display text-3xl uppercase leading-tight md:text-5xl">
                    What should this asset become?
                  </p>
                  <p className="mt-5 max-w-4xl leading-relaxed text-white/55">
                    An operating company, media property, event, educational platform, licensed brand, joint venture, strategic partnership—or an asset that creates greater value in someone else’s ecosystem? EsportsX provides the architecture for finding that answer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Build Section */}
        <section className="px-6 py-24 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.32em] text-brand-green">
              / What We Build
            </div>
            <h2 className="font-display text-5xl uppercase leading-none md:text-7xl tracking-tight">
              Multiple Business Models. One Esports Platform.
            </h2>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {BUSINESS_MODELS.map((model, idx) => (
                <div
                  key={model.title}
                  className="group rounded-2xl border border-white/10 p-6 transition hover:border-brand-green/30 hover:bg-white/[.02]"
                >
                  <div className="font-mono text-[10px] tracking-[.2em] text-white/25 tabular-nums">
                    0{idx + 1}
                  </div>
                  <h3 className="mt-7 font-display text-2xl uppercase tracking-wide transition-colors group-hover:text-brand-green">
                    {model.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/45">{model.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why EsportsX Section */}
        <section className="border-t border-white/5 bg-brand-green/[.02] px-6 py-24 md:px-10">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.32em] text-brand-green">
                / Why EsportsX
              </div>
              <h2 className="font-display text-5xl uppercase leading-none md:text-7xl tracking-tight">
                Built From Inside the Evolution of Esports.
              </h2>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/partner"
                  className="inline-flex items-center gap-3 rounded-full bg-brand-green px-7 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white whitespace-nowrap shrink-0"
                >
                  Partner With EsportsX
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/#portfolio"
                  className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white transition hover:border-brand-green/60 hover:text-brand-green whitespace-nowrap shrink-0"
                >
                  Explore Portfolio
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="space-y-5 leading-relaxed text-white/55">
              <p>
                EsportsX is informed by years of work across collegiate esports, education, entertainment, technology, events, brand development, and competitive gaming.
              </p>
              <p>
                Founder Kevin Mitchell has worked across the development of the collegiate esports ecosystem as an educator, entrepreneur, advisor, and event creator.
              </p>
              <p>
                His esports work includes teaching esports at Emerson College, founding the College Esports Expo, helping develop collegiate competition and programming, creating esports education initiatives, and consulting with organizations across gaming, technology, entertainment, and institutional markets.
              </p>
              <p className="rounded-xl border border-brand-green/20 bg-brand-green/[.03] p-6 text-xl text-white/85">
                The next generation of esports companies will be built at the intersections — not inside traditional industry boundaries.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
