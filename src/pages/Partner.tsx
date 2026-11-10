import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, BriefcaseBusiness, Handshake } from 'lucide-react';
import { CustomCursor } from '../components/CustomCursor';
import { SiteNav } from '../components/SiteNav';
import { SiteFooter } from '../components/SiteFooter';

const PARTNER_CATEGORIES = [
  {
    title: 'Universities & Educational Institutions',
    desc: 'Build programs, events, research initiatives, curriculum, and student opportunities.',
  },
  {
    title: 'Brands',
    desc: 'Develop credible gaming activations, sponsorship platforms, and new ways to engage gaming communities.',
  },
  {
    title: 'Technology Companies',
    desc: 'Test products, build demonstrations, create campus programs, and reach specialized gaming audiences.',
  },
  {
    title: 'Esports & Gaming Companies',
    desc: 'Explore new markets, communities, partnerships, and business models.',
  },
  {
    title: 'Investors & Operators',
    desc: 'Identify opportunities to develop, operate, license, acquire, or partner around specialized EsportsX properties.',
  },
  {
    title: 'Creators & Industry Leaders',
    desc: 'Build programming, communities, events, content, and new competitive-gaming experiences.',
  },
];

const ADVISORY_PILLARS = [
  {
    title: 'Market Entry',
    desc: 'Identify where your organization fits within esports and gaming.',
  },
  {
    title: 'College Esports',
    desc: 'Develop programs and partnerships across the collegiate marketplace.',
  },
  {
    title: 'Brand Strategy',
    desc: 'Create credible ways for brands to participate in gaming culture.',
  },
  {
    title: 'Partnership Development',
    desc: 'Identify potential technology, institutional, commercial, and operating partners.',
  },
  {
    title: 'Program Development',
    desc: 'Turn concepts into pilots, events, platforms, and repeatable programs.',
  },
  {
    title: 'International Expansion',
    desc: 'Explore specialized markets through locally relevant strategies and partnerships.',
  },
  {
    title: 'IP & Brand Development',
    desc: 'Transform digital properties and category-specific brands into operating opportunities.',
  },
  {
    title: 'Strategic Business Development',
    desc: 'Insight to help operators navigate the treacherous business landscape.',
  },
];

export default function Partner() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black text-brand-off-white selection:bg-brand-green selection:text-black grain-overlay overflow-x-hidden">
      <CustomCursor />
      <div className="scanline" />
      <SiteNav />

      <main>
        {/* Partner With EsportsX Section */}
        <section className="relative overflow-hidden border-b border-white/5 px-6 pt-36 pb-24 md:px-10 md:pt-44">
          <div className="signal-grid absolute inset-0 opacity-[.12]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(0,255,136,0.10),transparent_36%)] pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.32em] text-brand-green">
              / Partner With EsportsX
            </div>

            <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
              <div>
                <h1 className="font-display text-5xl uppercase leading-none md:text-7xl lg:text-8xl tracking-tight">
                  What Can We Build Together?
                </h1>
                <p className="mt-7 leading-relaxed text-white/55 text-lg">
                  EsportsX is looking to work with organizations that see competitive gaming as more than an advertising channel. We are interested in partners who want to build.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="mailto:info@esportsx.com?subject=Partner%20with%20EsportsX"
                    className="inline-flex items-center gap-3 rounded-full bg-brand-green px-7 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white whitespace-nowrap shrink-0"
                  >
                    Start a Conversation
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link
                    to="/model"
                    className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white transition hover:border-brand-green/60 hover:text-brand-green whitespace-nowrap shrink-0"
                  >
                    Explore The Model
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {PARTNER_CATEGORIES.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                    className="rounded-2xl border border-white/10 bg-white/[.02] p-6 transition hover:-translate-y-1 hover:border-brand-green/30"
                  >
                    <Handshake className="mb-6 h-5 w-5 text-brand-green" />
                    <h2 className="font-display text-2xl uppercase tracking-wide">{item.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-white/45">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EsportsX Advisory Section */}
        <section className="border-b border-white/5 bg-white/[.018] px-6 py-24 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
              <div>
                <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.32em] text-brand-green">
                  / EsportsX Advisory
                </div>
                <h2 className="font-display text-5xl uppercase leading-none md:text-7xl tracking-tight">
                  Navigate the Esports Economy With Greater Intelligence.
                </h2>
                <p className="mt-7 leading-relaxed text-white/50">
                  Organizations frequently enter esports knowing they want to participate but without knowing where they belong. EsportsX helps answer that question.
                </p>
                <div className="mt-10">
                  <a
                    href="mailto:info@esportsx.com?subject=EsportsX%20Advisory"
                    className="inline-flex items-center gap-3 rounded-full bg-brand-green px-7 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white whitespace-nowrap shrink-0"
                  >
                    Talk to EsportsX
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
                {ADVISORY_PILLARS.map((item, idx) => (
                  <div
                    key={item.title}
                    className="group bg-brand-black p-6 transition hover:bg-white/[.025]"
                  >
                    <div className="flex items-center justify-between">
                      <BriefcaseBusiness className="h-5 w-5 text-brand-green" />
                      <span className="font-mono text-[10px] text-white/20 tabular-nums">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-2xl uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/45">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Vision Section */}
        <section className="relative overflow-hidden border-t border-white/5 px-6 py-28 md:px-10">
          <div className="signal-grid absolute inset-0 opacity-[.12]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(0,255,136,.14),transparent_38%)] pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.32em] text-brand-green">
              / Our Vision
            </div>
            <h2 className="font-display text-6xl uppercase leading-none md:text-8xl lg:text-9xl tracking-tight">
              Esports Is Becoming Infrastructure.
            </h2>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/55">
              Competitive gaming is increasingly connected to how people socialize, learn, compete, create, build careers, experience entertainment, and participate in digital communities. That creates an opportunity far larger than esports competition alone.
            </p>
            <p className="mt-7 font-mono text-[10px] uppercase tracking-[.24em] text-brand-green">
              Competition × Education × Technology × Culture × Community × Global Markets
            </p>
            <p className="mx-auto mt-8 max-w-3xl text-xl text-white/80">
              The objective is not simply to participate in the esports industry. It is to help build what the esports industry becomes next.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/#contact"
                className="inline-flex items-center gap-3 rounded-full bg-brand-green px-7 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white whitespace-nowrap shrink-0"
              >
                Send a Partnership Inquiry
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
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
