import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Cpu,
  Gamepad2,
  Handshake,
  Sparkles,
  Users,
} from 'lucide-react';
import { platforms } from '../platformData';

const audiences = [
  {
    id: 'universities',
    label: 'Universities & Institutions',
    icon: Building2,
    copy: 'Programs, campus activations, curriculum, research, student engagement, and workforce development.',
    platformWeights: { 'college-esportsx': 5, 'esports-education': 4, 'esports-india': 1 },
  },
  {
    id: 'brands',
    label: 'Brands',
    icon: Sparkles,
    copy: 'Credible gaming activations, sponsorship platforms, market development, and community engagement.',
    platformWeights: { 'college-esportsx': 4, esportsfc: 4, 'esports-india': 3, 'military-esports': 1 },
  },
  {
    id: 'technology',
    label: 'Technology Companies',
    icon: Cpu,
    copy: 'Product demonstrations, campus programs, market-entry pathways, and specialized gaming audiences.',
    platformWeights: { 'college-esportsx': 5, 'esports-india': 4, 'esports-education': 3 },
  },
  {
    id: 'gaming',
    label: 'Esports & Gaming Companies',
    icon: Gamepad2,
    copy: 'New markets, communities, partnerships, programs, and business-model experimentation.',
    platformWeights: { 'esports-india': 5, esportsfc: 4, 'college-esportsx': 4, 'military-esports': 2 },
  },
  {
    id: 'capital',
    label: 'Investors & Operators',
    icon: Handshake,
    copy: 'Operating, licensing, acquisition, partnership, and venture-development opportunities across specialized properties.',
    platformWeights: { 'esports-india': 4, esportsfc: 4, 'college-esportsx': 3, 'military-esports': 2, 'esports-education': 2 },
  },
  {
    id: 'creators',
    label: 'Creators & Industry Leaders',
    icon: Users,
    copy: 'Programming, communities, events, content, education, and new competitive-gaming experiences.',
    platformWeights: { esportsfc: 5, 'college-esportsx': 4, 'esports-education': 4, 'military-esports': 2 },
  },
];

const priorities = [
  { id: 'campus', label: 'Campus & collegiate', weights: { 'college-esportsx': 5, 'esports-education': 3 } },
  { id: 'market-entry', label: 'International market entry', weights: { 'esports-india': 5, 'college-esportsx': 1 } },
  { id: 'culture', label: 'Football, creators & culture', weights: { esportsfc: 5, 'college-esportsx': 1 } },
  { id: 'community', label: 'Community & service populations', weights: { 'military-esports': 5, 'esports-education': 2 } },
  { id: 'education', label: 'Education & workforce', weights: { 'esports-education': 5, 'college-esportsx': 4 } },
  { id: 'open', label: 'Show me the strongest fit', weights: {} },
];

export default function Explore() {
  const [audience, setAudience] = useState('universities');
  const [priority, setPriority] = useState('open');

  const selectedAudience = audiences.find((item) => item.id === audience)!;
  const selectedPriority = priorities.find((item) => item.id === priority)!;

  const recommendations = useMemo(() => {
    return platforms
      .map((platform) => ({
        ...platform,
        score:
          ((selectedAudience.platformWeights as Record<string, number>)[platform.id] || 0) +
          ((selectedPriority.weights as Record<string, number>)[platform.id] || 0),
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  }, [selectedAudience, selectedPriority]);

  return (
    <div className="min-h-screen bg-brand-black text-brand-off-white grain-overlay">
      <div className="scanline" />
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-brand-black/90 px-6 py-4 backdrop-blur-xl md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <Link to="/" className="font-display text-2xl tracking-wider">ESPORTS<span className="text-brand-green">X</span></Link>
          <Link to="/" className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.2em] text-white/45 transition hover:text-brand-green">
            <ArrowLeft className="h-4 w-4" /> Back to EsportsX
          </Link>
        </div>
      </nav>

      <main>
        <section className="relative overflow-hidden border-b border-white/5 px-6 py-20 md:px-10 md:py-28">
          <div className="signal-grid absolute inset-0 opacity-[.13]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,136,.10),transparent_35%)]" />
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="font-mono text-[9px] uppercase tracking-[.3em] text-brand-green">/ Portfolio Explorer</div>
            <div className="mt-7 grid gap-10 lg:grid-cols-[1fr_.6fr] lg:items-end">
              <h1 className="max-w-5xl font-display text-6xl uppercase leading-[.9] md:text-8xl">Find Your Entry Point Into EsportsX.</h1>
              <p className="max-w-xl text-lg leading-relaxed text-white/50">Start with who you are and what you are trying to accomplish. The explorer surfaces the EsportsX platforms most aligned with that goal.</p>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 xl:grid-cols-[.78fr_1.22fr]">
              <div className="space-y-10">
                <div>
                  <div className="mb-4 flex items-center gap-3"><span className="flex h-7 w-7 items-center justify-center rounded-full border border-brand-green/30 font-mono text-[8px] text-brand-green">01</span><h2 className="font-display text-3xl uppercase">Who are you?</h2></div>
                  <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                    {audiences.map((item) => {
                      const Icon = item.icon;
                      const active = audience === item.id;
                      return (
                        <button key={item.id} onClick={() => setAudience(item.id)} className={`rounded-2xl border p-5 text-left transition ${active ? 'border-brand-green/55 bg-brand-green/[.05]' : 'border-white/10 bg-white/[.015] hover:border-white/25'}`}>
                          <div className="flex items-start gap-4">
                            <div className={`rounded-xl border p-2.5 ${active ? 'border-brand-green/35 text-brand-green' : 'border-white/10 text-white/35'}`}><Icon className="h-5 w-5" /></div>
                            <div><div className="font-display text-xl uppercase">{item.label}</div><p className="mt-2 text-sm leading-relaxed text-white/40">{item.copy}</p></div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <div className="mb-4 flex items-center gap-3"><span className="flex h-7 w-7 items-center justify-center rounded-full border border-brand-green/30 font-mono text-[8px] text-brand-green">02</span><h2 className="font-display text-3xl uppercase">What is the priority?</h2></div>
                  <div className="flex flex-wrap gap-2">
                    {priorities.map((item) => <button key={item.id} onClick={() => setPriority(item.id)} className={`rounded-full border px-4 py-2 font-mono text-[8px] uppercase tracking-[.15em] transition ${priority === item.id ? 'border-brand-green/55 bg-brand-green/[.06] text-brand-green' : 'border-white/10 text-white/40 hover:border-white/25'}`}>{item.label}</button>)}
                  </div>
                </div>
              </div>

              <div className="xl:sticky xl:top-24 xl:self-start">
                <div className="rounded-3xl border border-white/10 bg-white/[.02] p-6 md:p-8">
                  <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-6">
                    <div><div className="font-mono text-[8px] uppercase tracking-[.24em] text-white/25">Recommended route</div><h2 className="mt-2 font-display text-4xl uppercase md:text-5xl">{selectedAudience.label}</h2></div>
                    <div className="font-mono text-[8px] uppercase tracking-[.18em] text-brand-green">Priority: {selectedPriority.label}</div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {recommendations.map((platform, index) => (
                      <div key={platform.id} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-brand-black p-6 transition hover:border-white/25">
                        <div className="absolute right-5 top-1 font-display text-8xl leading-none opacity-[.035]" style={{ color: platform.accent }}>0{index + 1}</div>
                        <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                          <div className="max-w-2xl">
                            <div className="mb-4 flex items-center gap-3"><div className="rounded-xl border border-white/10 p-2.5" style={{ color: platform.accent }}>{platform.icon}</div><span className="font-mono text-[8px] uppercase tracking-[.2em] text-white/30">{platform.eyebrow}</span></div>
                            <h3 className="font-display text-4xl uppercase" style={{ color: index === 0 ? platform.accent : undefined }}>{platform.name}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-white/50">{platform.hero}</p>
                          </div>
                          <Link to={`/platform/${platform.id}`} className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-mono text-[8px] uppercase tracking-[.16em] text-white/60 transition hover:border-brand-green/45 hover:text-brand-green">Explore <ArrowRight className="h-4 w-4" /></Link>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 rounded-2xl border border-brand-green/20 bg-brand-green/[.035] p-6">
                    <div className="font-mono text-[8px] uppercase tracking-[.2em] text-brand-green">Not sure which path to choose?</div>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/50">EsportsX Advisory can help define the opportunity first, then determine the right platform, pilot, partnership structure, or commercialization path.</p>
                    <a href={`mailto:info@esportsx.com?subject=${encodeURIComponent(`EsportsX Explorer — ${selectedAudience.label}`)}`} className="mt-5 inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.18em] text-white transition hover:text-brand-green">Start the conversation <ArrowRight className="h-4 w-4" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
